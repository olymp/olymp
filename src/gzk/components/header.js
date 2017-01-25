import React, { Component } from 'react';
import { Link, cn, withApollo, withAuth, gql } from 'olymp';
import { Affix } from 'antd';
import { sortableContainer, sortableElement, sortableHandle, arrayMove } from 'olymp/cms';
import Logo from './logo';
import './header.less';
import sortBy from 'lodash/sortBy';

const Plus = ({ location, page }) => (
  <Link
    to={{ ...location, query: { '@page': page ? page.id : null } }}
    style={{ paddingLeft: 0, paddingRight: 0 }}
    className="item"
    activeClassName="active"
  >
    <i className="fa fa-plus-square-o" />
  </Link>
);
const Handle = sortableHandle(() => <span className="grippy" style={{ zIndex: 1, position: 'absolute', right: 0, top: 'calc(50% - 9px)', width: '15px', height: '100%' }} />);
const Li = sortableElement((props) => {
  const { renderNav, page, level, disabled, sortEndCreator } = props;
  if (page.children && page.children.length) {
    return (
      <li style={{ position: 'relative' }} className={cn({ 'nav-item': !level }, !level ? 'dropdown-mainmenu' : 'dropdown-submenu')} key={page.slug}>
        {!disabled ? <Handle /> : null}
        <Link to={page.href || page.slug} key={page.slug} className="dropdown-toggle" data-toggle="dropdown" activeClassName="active">
          {page.name}
        </Link>
        <i className="dropdown icon" />
        {renderNav(props) || <UlWrapped {...props} className={null} axis="y" useDragHandle onSortEnd={sortEndCreator(page.children)} level={level + 1} items={page.children} headings={page.headings} />}
      </li>
    );
  }
  return (
    <li style={{ position: 'relative' }} className={cn({ 'nav-item': !level })} key={page.slug}>
      {!disabled ? <Handle /> : null}
      <Link to={page.href || page.slug} className="item" activeClassName="active">
        {page.color && <Logo icon color={page.color} />}
        {page.name}
      </Link>
    </li>
  );
});

const Ul = sortableContainer((props) => {
  const { className, children, location, level, disabled, page } = props;

  return (
    <ul className={className || cn(className, !level ? 'nav navbar-nav pull-right' : 'dropdown-menu')} style={{ top: 'initial' }}>
      {children}
      {!disabled ? <li className="nav-item" style={{ margin: 0 }}>
        <Plus location={location} page={page} />
      </li> : null}
    </ul>
  );
});

const UlWrapped = props => {
  const { items, level, children, headings } = props;
  const children2 = items.filter(({ slug }) => slug !== '/').map((page, index) => (
    <Li {...props} className={null} collection={`list${level}`} index={index} key={page.id} page={page} />
  ));

  console.log(headings);
  const children3 = (headings || []).map((page, index) => (
    <Li {...props} className={null} collection={`list${level}`} index={index} key={page.id} page={page} />
  ));

  return (
    <Ul {...props}>
      {children2}
      {children3}
      {level === 0 && children}
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
    // newChildren.map((page, order) => saveItem({ order }, 'page', client, { id: page.id, attributes: ['id', 'order'] }));
  };
  render() {
    const { nav, auth, ...rest } = this.props;
    return (
      <UlWrapped
        {...rest}
        level={0}
        items={nav || []}
        disabled={!auth || !auth.user || auth.user.einrichtung}
        axis="x"
        useDragHandle
        onSortEnd={this.onSortEnd(nav)}
        sortEndCreator={this.onSortEnd}
      />
    );
  }
}

export default class Header extends Component {
  render() {
    const { pages, color, title, text, location, links, ...rest } = this.props;
    const nav = {};
    Object.keys(pages).forEach((key) => {
      const page = pages[key];
      if (!nav[page.menu || 'main']) nav[page.menu || 'main'] = [];
      nav[page.menu || 'main'].push(page);
    });

    return (
      <Affix className="gz-navigation">
        <nav className="container navbar-collapse">
          <Link to="/" className="navbar-brand">
            <Logo color={color} title={title} text={text} />
          </Link>
          <Navigation nav={nav.main} className="nav navbar-nav pull-right sf-menu l_tinynav1 sf-js-enabled" location={location} renderNav={this.renderNav}>
            {links && links.map(({ href, color }) => <li className="nav-item" key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="item active">
                <Logo icon color={color} />
              </a>
            </li>)}
          </Navigation>
        </nav>
      </Affix>
    );
  }

  renderNav = props => {
    if (props.page && props.page.slug === '/zentrum') {
      const groups = sortBy(this.props.einrichtungen, ['kurz', 'name']).reduce((state, item) => {
        if (!state[item.art || 'PRAXIS']) state[item.art || 'PRAXIS'] = [];
        if (item.slug) state[item.art || 'PRAXIS'].push(item);
        return state;
      }, {});
      return (
        <div className="dropdown-menu sf-mega" style={{ width: '700px' }}>
          <div className="col-md-3">
            <h6>{props.page.name}</h6>
            <UlWrapped {...props} className="list-unstyled" level={props.level + 1} items={props.page.children} headings={props.page.headings} />
          </div>
          {Object.keys(groups).map(groupKey => (
            <div key={groupKey} className="col-md-3">
              <h6>{groupKey.charAt(0) + groupKey.substr(1).toLowerCase()}</h6>
              <ul className="list-unstyled">
                {groups[groupKey].map(item => (
                  <li style={{ position: 'relative' }} key={item.id}>
                    <Link to={item.slug || '/'} className="item" activeClassName="active">
                      {item.kurz || item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  }
}

