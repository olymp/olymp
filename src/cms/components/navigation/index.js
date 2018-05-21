import React, { Component } from 'react';
import { Link, NavLink, cn, withApollo, withAuth, gql } from 'olymp';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';
import './nav.less';

const Plus = ({ location, page }) => (
  <NavLink
    to={{ ...location, query: { '@new-page': page ? page.id : null } }}
    style={{ paddingLeft: 0, paddingRight: 0 }}
    className="item"
    activeClassName="active"
  >
    <i className="fa fa-plus" />
  </NavLink>
);

const Handle = sortableHandle(() => (
  <span
    className="grippy"
    style={{
      zIndex: 1,
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 9px)',
      width: '15px',
      height: '100%',
    }}
  />
));

const Li = sortableElement(props => {
  const { renderNav, page, level, readOnly, sortEndCreator, style } = props;

  if (page.blocks || !readOnly) {
    return (
      <li
        style={{ ...style, position: 'relative' }}
        className={cn(
          { 'nav-item': !level },
          !level ? 'dropdown-mainmenu' : 'dropdown-submenu'
        )}
        key={page.id}
      >
        {!readOnly ? <Handle /> : null}
        <NavLink
          to={page.href || page.path || '/'}
          className="dropdown-toggle"
          data-toggle="dropdown"
          activeClassName="active"
          style={!page.blocks ? { textDecoration: 'underline' } : {}}
        >
          {page.name}
        </NavLink>

        {renderNav ? (
          renderNav(props)
        ) : (
          <UlWrapped
            {...props}
            className={null}
            axis="y"
            useDragHandle
            onSortEnd={sortEndCreator(page.children)}
            level={level + 1}
            items={page.children}
          />
        )}
      </li>
    );
  }

  return (
    <li
      style={{ ...style, position: 'relative' }}
      className={`${cn(
        { 'nav-item': !level },
        !level ? 'dropdown-mainmenu' : 'dropdown-submenu'
      )} nav-placeholder`}
      key={page.id}
    >
      <a href="javascript:;" style={{ cursor: 'default' }}>
        {page.name}
      </a>

      {renderNav ? (
        renderNav(props)
      ) : (
        <UlWrapped
          {...props}
          className={null}
          axis="y"
          useDragHandle
          onSortEnd={sortEndCreator(page.children)}
          level={level + 1}
          items={page.children}
        />
      )}
    </li>
  );
});

const Ul = sortableContainer(props => {
  const { items, className, children, location, level, readOnly, page } = props;

  return (
    <ul
      className={
        className || cn(className, !level ? 'navbar-nav' : 'dropdown-menu')
      }
    >
      {children}
      {!readOnly ? (
        <li
          className="nav-item"
          style={{
            textAlign:
              'center' /* width: level ? '100%' : `${100 / (readOnly ? items.length : items.length + 1)}%` */,
          }}
        >
          <Plus location={location} page={page} />
        </li>
      ) : null}
    </ul>
  );
});

const UlWrapped = props => {
  const { level, readOnly, rollen } = props;
  let { items } = props;

  // Personen den Rollen-Seiten zuordnen
  if (props.page && props.page.name === 'Über Uns') {
    items = (items || []).map(page => {
      const children = [...(page.children || [])];
      (rollen[page.name] || []).forEach(person => {
        if (children.findIndex(x => x.id === person.id) === -1) {
          children.push({
            id: person.id,
            name: person.name,
            path: `${page.path}?Person=${person.id}`,
            children: [],
            blocks: true,
          });
        }
      });
      return { ...page, children };
    });
  }

  return (
    <Ul {...props}>
      {(items || []).map((page, index) => (
        <Li
          {...props}
          collection={`list${level}`}
          index={index}
          key={page.id}
          page={page}
          style={
            !level
              ? {
                  width: `${100 /
                    (readOnly ? items.length : items.length + 1)}%`,
                }
              : {}
          }
        />
      ))}
    </Ul>
  );
};

@withAuth
@withApollo
export default class Navigation extends Component {
  onSortEnd = children => ({ oldIndex, newIndex }) => {
    const { client } = this.props;
    const newChildren = arrayMove(children, oldIndex, newIndex);
    client.mutate({
      mutation: gql`
        mutation reorderPages($ids: [String]) {
          reorderPages(ids: $ids) {
            id
            order
          }
        }
      `,
      variables: {
        ids: newChildren.map(x => x.id),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        reorderPages: newChildren.map(({ id }, order) => ({ id, order })),
      },
    });
  };

  render() {
    const { nav, auth, ...rest } = this.props;

    return (
      <UlWrapped
        level={0}
        items={nav || []}
        readOnly={!auth || !auth.user}
        axis="x"
        useDragHandle
        onSortEnd={this.onSortEnd(nav)}
        sortEndCreator={this.onSortEnd}
        {...rest}
      />
    );
  }
}
