import React, { Component } from 'react';
import { cn, NavLink, withRouter, withApollo, gql } from 'olymp';
import { Icon } from 'antd';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';
import './navbar.less';

// const Handle = sortableHandle(() => <span className="grippy" style={{ zIndex: 1, position: 'absolute', right: 0, top: 'calc(50% - 9px)', width: '15px', height: '100%' }} />);
const Handle = sortableHandle(() => (
  <Icon type="appstore" className="sortHandle" />
));
const Li = sortableElement(props => {
  const { readOnly, children, page, location, router, isSubmenu } = props;
  const { query, pathname } = location;
  const navigation = !!query && query.navigation;

  let matches = [];
  page.children.forEach(e => {
    matches = matches.concat(
      e.children.filter(child => child.id === navigation)
    );
  });
  const visible = navigation === page.id || !!matches.length;

  return (
    <div
      className={cn(
        isSubmenu ? 'dropdown-item' : 'nav-item',
        page.path === pathname ? 'active' : null,
        visible ? 'focus' : null
      )}
    >
      {page.blocks || !readOnly ? (
        <NavLink to={page.path} className="nav-link">
          {page.name}
        </NavLink>
      ) : (
        <span
          onClick={() =>
            router.push({ pathname, query: { navigation: page.id } })
          }
          className="nav-link"
        >
          {page.name}
        </span>
      )}
      {children}
      {!readOnly && !page.noOrdering ? <Handle /> : null}
    </div>
  );
});
const Ul = sortableContainer(
  ({
    axis,
    useDragHandle,
    onSortEnd,
    sortEndCreator,
    hideSortableGhost,
    ...rest
  }) => <div {...rest} />
);

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

  getMenu = (page, i, isSubmenu) => (
    <Li
      {...this.props}
      page={page}
      isSubmenu={isSubmenu}
      index={i}
      key={page.id}
    >
      {page.children && page.children.length ? (
        <Ul
          onSortEnd={this.onSortEnd(page.children)}
          sortEndCreator={this.onSortEnd}
          axis="y"
          useDragHandle
          className="dropdown-menu"
        >
          {page.children.map((child, i) => this.getMenu(child, i, true))}
          {!this.props.readOnly ? (
            <li className="nav-item">
              <NavLink
                to={{ ...this.props.location, query: { '@new-page': page.id } }}
                className="nav-link"
              >
                <Icon type="plus-circle" />
              </NavLink>
            </li>
          ) : null}
        </Ul>
      ) : null}
    </Li>
  );

  // RAAH: brand/navbar-collapse col-md-..., Kontakt => Kontakt/Impressum, a.active => li.active, navbar-toggler-left
  render() {
    const {
      readOnly,
      router,
      brand,
      fill,
      pages,
      location,
      className,
    } = this.props;
    const { query, pathname } = location;
    const navigation = !!query && query.navigation !== undefined; // null/page.id => true, undefined => false

    return (
      <nav
        className={`navbar navbar-inverse navbar-toggleable-sm ${className}`}
      >
        {brand ? (
          <NavLink to="/" className="navbar-brand">
            {brand}
          </NavLink>
        ) : null}

        <button
          onClick={() =>
            router.push({
              pathname,
              query: { navigation: navigation ? undefined : null },
            })
          }
          className="navbar-toggler hidden-md-up"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`navbar-collapse${!navigation ? ' hidden-sm-down' : ''}`}
        >
          <Ul
            onSortEnd={this.onSortEnd(pages)}
            sortEndCreator={this.onSortEnd}
            axis="x"
            useDragHandle
            className={cn('navbar-nav', fill ? 'nav-fill' : null)}
            style={{ width: fill ? '100%' : 'auto' }}
          >
            {pages.map((page, i) => this.getMenu(page, i))}
            {!readOnly ? (
              <div className="nav-item">
                <NavLink
                  to={{ ...location, query: { '@new-page': null } }}
                  className="nav-link"
                >
                  <Icon type="plus-circle" />
                </NavLink>
              </div>
            ) : null}
          </Ul>
        </div>
      </nav>
    );
  }
}
