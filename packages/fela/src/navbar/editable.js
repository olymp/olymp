import React, { Component } from 'react';
import { cn, NavLink, withRouter, withApollo, gql } from 'olymp';
import { Icon } from 'antd';
import { SortableContainer as sortableContainer, SortableElement as sortableElement, SortableHandle as sortableHandle, arrayMove } from 'react-sortable-hoc';

// const Handle = sortableHandle(() => <span className="grippy" style={{ zIndex: 1, position: 'absolute', right: 0, top: 'calc(50% - 9px)', width: '15px', height: '100%' }} />);
const Handle = sortableHandle(() => <Icon type="appstore" className="sortHandle" />);
const Li = sortableElement((props) => {
  const { editable, children, page, location, router, isSubmenu } = props;
  const { query, pathname } = location;
  const navigation = !!query && query.navigation;

  let matches = [];
  page.children.forEach((e) => {
    matches = matches.concat(e.children.filter(child => child.id === navigation));
  });
  const visible = navigation === page.id || !!matches.length;

  return (
    <div className={cn(isSubmenu ? 'dropdown-item' : 'nav-item', page.path === pathname ? 'active' : null, visible ? 'focus' : null)}>
      {page.blocks || editable ? (
        <NavLink to={page.path || page.slug} className="nav-link">
          {page.name}
        </NavLink>
      ) : (
        <span
          onClick={() => router.push({ pathname, query: { navigation: page.id } })}
          className="nav-link"
        >
          {page.name}
        </span>
      )}
      {children}
      {editable && !page.noOrdering ? <Handle /> : null}
    </div>
  );
});
const Ul = sortableContainer(({ axis, useDragHandle, onSortEnd, sortEndCreator, hideSortableGhost, ...rest }) => <div {...rest} />);

@withRouter
@withApollo
export default class Navbar extends Component {
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

  getMenu = (page, i, isSubmenu) => {
    const { location, editable } = this.props;

    return (
      <Li {...this.props} page={page} isSubmenu={isSubmenu} index={i} key={page.id}>
        {editable || (page.children && page.children.length) ? (
          <Ul
            onSortEnd={this.onSortEnd(page.children)}
            sortEndCreator={this.onSortEnd}
            axis="y"
            useDragHandle
            className="dropdown-menu"
          >
            {(page.children || []).map((child, i) => this.getMenu(child, i, true))}
            {editable ? (
                <li className="nav-item">
                  <NavLink to={{ ...location, query: { '@new-page': page.id } }} className="nav-link">
                    <Icon type="plus-circle" />
                  </NavLink>
                </li>
              ) : null}
          </Ul>
        ) : null}
      </Li>
    );
  }

  render() {
    const { editable, router, brand, fill, pages, location, dark, light } = this.props;
    const { query, pathname } = location;
    const navigation = !!query && query.navigation !== undefined; // null/page.id => true, undefined => false

    return (
      <div className="bootstrap">
        <nav className={cn('navbar navbar-toggleable-sm', { 'navbar-inverse': dark }, { 'navbar-light': light })}>
          {brand ? <NavLink to="/" className="navbar-brand">{brand}</NavLink> : null}

          <button
            onClick={() => router.push({ pathname, query: { navigation: navigation ? undefined : null } })}
            className="navbar-toggler hidden-md-up"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-collapse${!navigation ? ' hidden-sm-down' : ''}`}>
            <Ul
              onSortEnd={this.onSortEnd(pages)}
              sortEndCreator={this.onSortEnd}
              axis="x"
              useDragHandle
              className={cn('navbar-nav', { 'nav-fill': fill })}
            >
              {(pages || []).map((page, i) => this.getMenu(page, i))}
              {editable ? (
                <div className="nav-item">
                  <NavLink to={{ ...location, query: { '@new-page': null } }} className="nav-link">
                    <Icon type="plus-circle" />
                  </NavLink>
                </div>
              ) : null}
            </Ul>
          </div>
        </nav>
      </div>
    );
  }
}
