import React, { Component } from 'react';
import { Link, cn, withApollo, withAuth, graphql, gql } from 'olymp';
import { sortableContainer, sortableElement, sortableHandle, arrayMove } from 'olymp/cms';
import sortBy from 'lodash/sortBy';
import './nav.less';

const Plus = ({ location, page }) => (
  <Link
    to={{ ...location, query: { '@new-page': page ? page.id : null } }}
    style={{ paddingLeft: 0, paddingRight: 0 }}
    className="item"
    activeClassName="active"
  >
    <i className="fa fa-plus" />
  </Link>
);
const Handle = sortableHandle(() => <span className="grippy" style={{ zIndex: 1, position: 'absolute', right: 0, top: 'calc(50% - 9px)', width: '15px', height: '100%' }} />);
const Li = sortableElement((props) => {
  const { renderNav, page, level, disabled, sortEndCreator, style } = props;

  if (page.blocks || !disabled) {
    return (
      <li style={{ ...style, position: 'relative' }} className={cn({ 'nav-item': !level }, !level ? 'dropdown-mainmenu' : 'dropdown-submenu')} key={page.id}>
        {!disabled ? <Handle /> : null}
        <Link to={page.href || page.path || '/'} className="dropdown-toggle" data-toggle="dropdown" activeClassName="active" style={!page.blocks ? { textDecoration: 'underline' } : {}}>
          {page.name}
        </Link>

        {renderNav ? renderNav(props) : <UlWrapped {...props} className={null} axis="y" useDragHandle onSortEnd={sortEndCreator(page.children)} level={level + 1} items={page.children} />}
      </li>
    );
  }

  return (
    <li style={{ ...style, position: 'relative' }} className={`${cn({ 'nav-item': !level }, !level ? 'dropdown-mainmenu' : 'dropdown-submenu')} nav-placeholder`} key={page.id}>
      <a href="javascript:;" style={{ cursor: 'default' }}>{page.name}</a>

      {renderNav ? renderNav(props) : <UlWrapped {...props} className={null} axis="y" useDragHandle onSortEnd={sortEndCreator(page.children)} level={level + 1} items={page.children} />}
    </li>
  );
});

const Ul = sortableContainer((props) => {
  const { items, className, children, location, level, disabled, page } = props;

  return (
    <ul className={className || cn(className, !level ? 'nav navbar-nav' : 'dropdown-menu')}>
      {children}
      {!disabled ? (
        <li className="nav-item" style={{ textAlign: 'center', width: level ? '100%' : `${100 / (disabled ? items.length : items.length + 1)}%` }}>
          <Plus location={location} page={page} />
        </li>
      ) : null}
    </ul>
  );
});

const UlWrapped = (props) => {
  const { level, disabled, rollen } = props;
  let { items } = props;

  // Personen den Rollen-Seiten zuordnen
  if (props.page && props.page.name === 'Über Uns') {
    (items || []).forEach(page =>
      (rollen[page.name] || []).forEach((person) => {
        if (page.children.findIndex(x => x.id === person.id) === -1) {
          page.children.push({
            id: person.id,
            name: person.name,
            path: `${page.path}?Person=${person.id}`,
            children: [],
            blocks: true,
          });
        }
      })
    );
  }

  return (
    <Ul {...props}>
      {items.map((page, index) => (
        <Li
          {...props}
          collection={`list${level}`}
          index={index}
          key={page.id}
          page={page}
          style={!level ? { width: `${100 / (disabled ? items.length : items.length + 1)}%` } : {}}
        />
      ))}
    </Ul>
  );
};

@withAuth
@withApollo
class Navigation extends Component {
  onSortEnd = children => ({ oldIndex, newIndex }) => {
    const { client } = this.props;
    const newChildren = arrayMove(children, oldIndex, newIndex);
    client.mutate({
      mutation: gql`
        mutation reorderPages($ids: [String]) {
          reorderPages(ids: $ids) {
            id, order
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
        {...rest}
        level={0}
        items={nav || []}
        disabled={!auth || !auth.user}
        axis="x"
        useDragHandle
        onSortEnd={this.onSortEnd(nav)}
        sortEndCreator={this.onSortEnd}
      />
    );
  }
}

@graphql(gql`
  query personen {
    personen: personList(query: { state: { eq: PUBLISHED } }) {
      id
      name
      rollen {
        name
      }
    }
  }
`, {
  options: () => ({ }),
})
export default class Header extends Component {
  render() {
    const { location, data } = this.props;
    let { pages } = this.props;
    let { personen } = data;
    const nav = {};

    pages = pages.filter(page => page.slug !== '/impressum');
    Object.keys(pages).forEach((key) => {
      const page = pages[key];
      if (!nav[page.menu || 'main']) nav[page.menu || 'main'] = [];
      nav[page.menu || 'main'].push(page);
    });

    const rollen = {};
    personen = sortBy(personen, person => person.name.split(' ').splice(-1));
    (personen || []).forEach(person => person.rollen.forEach((rolle) => {
      if (!rollen[rolle.name]) rollen[rolle.name] = [];

      rollen[rolle.name].push(person);
    }));
    Object.keys(rollen).forEach(key => {
      if (rollen[key].length === 1) {
        delete rollen[key];
      }
    });

    return (
      <nav className="nav-component">
        <Navigation nav={nav.main} className="nav navbar-nav pull-right" location={location} rollen={rollen} />
      </nav>
    );
  }
}

