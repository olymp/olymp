import React, { Component } from 'react';
import { Link, cn, withApollo, withAuth, gql, toArray } from 'olymp';
import { sortableContainer, sortableElement, sortableHandle, arrayMove } from 'olymp/cms';
import './header.less';

export const SortHandle  = sortableHandle(({ children }) => children);
export const SortElement = sortableElement(({ children }) => children);
export const SortContainer = sortableContainer(({ children }) => React.Children.only(children));

class Menu extends Component {
  static defaultProps = {
    axis: 'x',
    useDragHandle: true,
    level: 0,
    items: [],
  };
  renderUtil = (fn, props) => {
    let x = fn && fn(props);
    if (x) return x;
  }
  renderPlus = (props) => {
    const { location, page, renderPlus } = props;
    const to = { ...location, query: { '@page': page ? page.id : null } };
    const style = { paddingLeft: 0, paddingRight: 0 };
    return this.renderUtil(renderPlus, { ...props, to }) || (
      <Link to={to} style={style} className="item" activeClassName="active">
        <i className="fa fa-plus-square-o" />
      </Link>
    )
  }
  renderHandle = (props) => {
    const { location, renderHandle } = props;
    const style = { zIndex: 1, position: 'absolute', right: 0, top: 'calc(50% - 9px)', width: '15px', height: '100%' };
    return (
      <SortHandle>
        {this.renderUtil(renderHandle, props) || <span className="grippy" style={style} />}
      </SortHandle>
    );
  }
  renderItem = (props, index) => {
    const { renderItem, page, level, disabled, isHeading, parent } = props;
    const hasChildren = (page.children && !!page.children.length) || (page.headings && !!page.headings.length);
    const classes = cn({ 'nav-item': !level }, !level && hasChildren && 'dropdown-mainmenu', level && hasChildren && 'dropdown-submenu');
    const classes2 = cn(hasChildren ? 'dropdown-toggle' : 'item');
    const children = hasChildren && <Menu {...props} level={level + 1} />;
    return (
      <SortElement key={page.id} index={index}>
        {this.renderUtil(renderItem, props) || <li style={{ position: 'relative' }} className={classes} key={page.slug}>
          {!disabled ? this.renderHandle(props) : null}
          <Link to={!isHeading ? (page.href || page.slug) : `${parent.slug}#${page.slug}`} key={page.slug} className={classes2} activeClassName="active">
            {!isHeading ? page.name : page.text}
          </Link>
          {children}
        </li>}
      </SortElement>
    );
  }
  render() {
    const { children, page, location, level, disabled, sortEndCreator, renderMenu } = this.props;
    if (!page) return null;
    return (
      <SortContainer onSortEnd={sortEndCreator(page.children)} useDragHandle axis={!level ? 'x' : 'y'}>
        {this.renderUtil(renderMenu, this.props) || <ul className={cn(!level ? 'nav navbar-nav pull-right sf-menu' : 'dropdown-menu')} style={{ top: 'initial' }}>
          {toArray(page.children).map((child, index) => this.renderItem({ ...this.props, parent: page, page: child, children: null }, index))}
          {toArray(page.headings).map((child, index) => this.renderItem({ ...this.props, parent: page, isHeading: true, page: child, disabled: true, children: null }, index))}
          {!disabled ? <li className="nav-item" style={{ margin: 0 }}>
            {this.renderPlus({ ...this.props })}
          </li> : null}
          {children}
        </ul>}
      </SortContainer>
    );
  }
}

@withAuth
@withApollo
export default class MenuController extends Component {
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
    // newChildren.map((page, order) => saveItem({ order }, 'page', client, { id: page.id, attributes: ['id', 'order'] }));
  };
  render() {
    const { items, auth, ...rest } = this.props;
    const disabled = !auth || !auth.user || auth.user.einrichtung;
    return (
      <Menu {...rest} disabled={disabled} sortEndCreator={this.onSortEnd} page={{ children: items.filter(x => x.slug !== '/') }} />
    );
  }
}
