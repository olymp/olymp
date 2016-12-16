import React, { Component } from 'react';
import { graphql, Link, Match, Redirect, CodeSplit, gql } from 'olymp';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot } from 'olymp/auth';
import capitalize from 'capitalize';
import { Menu, Affix, Button, Dropdown } from 'antd';
import { sortBy } from 'lodash';

import { withRouter } from '../decorators';
import { useBlockTypes } from 'olymp/slate';
import { useLightboxes } from '../edits/image/with-lightbox';
import PageModal from './pages/modals/page';
import MediaDetail from './media/detail';
import UploadModal from './media/upload';
import Collection from './collections/view';
import './container.less';

const SubMenu = Menu.SubMenu;

@useLightboxes
@withRouter
@useBlockTypes()
@graphql(gql`
  query schema {
    schema: __schema {
      types {
        name
        description
        interfaces {
          name
        }
        fields {
          name
          type {
            kind
            name
          }
        }
      }
    }
  }
`, {
  options: ({ auth }) => ({
    skip: !auth || !auth.user,
  }),
})
export default class Container extends Component {
  isActive = (href) => {
    const { pathname } = this.props.location;
    if (href === pathname) return true;
    if (pathname.indexOf(`${href}/`) === 0) return true;
    return false;
  };

  handleClick = ({ key }) => {
    if (key === 'logout') {
      this.props.auth.logout();
    }
  };

  render() {
    const { children, router, location, auth, data, logo } = this.props;
    const { pathname, query } = location;

    let modal;
    if (query && query.confirm !== undefined) {
      modal = (
        <AuthConfirm
          token={query.confirm}
          pathname={pathname}
          onClose={() => router.push(pathname)}
        />
      );
    }
    if (query && query.register !== undefined) {
      modal = (
        <AuthRegister
          email={query.register}
          pathname={pathname}
          onClose={() => router.push(pathname)}
        />
      );
    }
    if (query && query.login !== undefined) {
      modal =
        <AuthLogin email={query.email} pathname={pathname} onClose={() => router.push(pathname)} />;
    }
    if (query && query.forgot !== undefined) {
      modal = (
        <AuthForgot
          email={query.forgot}
          pathname={pathname}
          onClose={() => router.push(pathname)}
        />
      );
    }
    if (query && query.reset !== undefined) {
      modal = (
        <AuthReset
          token={query.reset}
          pathname={pathname}
          onClose={() => router.push(pathname)}
        />
      );
    }

    if (!auth || !auth.user || !data) {
      return (
        <div className="full">
          {modal}
          {children}
          {auth && auth.loading ? null : <Match
            pattern="/@/*"
            render={() => <Redirect to={{ pathname: '/', query: { login: null, pathname } }} />}
          />}
        </div>
      );
    }

    const { schema } = data;
    const collections = schema && schema.types ? schema.types.filter(x => (x.interfaces || []).filter(y => y.name === 'CollectionType' || y.name === 'CollectionInterface').length) : [];
    const collection = query && query['@collection'];
    if (collection !== undefined) {
      console.log(collection);
      modal = (
        <Collection collection={collection} onClose={() => router.push({ pathname, query: { ...query, [`@${name}`]: undefined } })} />
      );
    } else if (query && query['@media'] !== undefined) {
      modal = (
        <MediaDetail id={query['@media']} onClose={() => router.push({ pathname, query: { ...query, '@media': undefined } })} />
      );
    } else if (query && (query['@page'] !== undefined || query['@new-page'] !== undefined)) {
      modal = (
        <PageModal
          id={query['@page']}
          initialData={{ parentId: query['@new-page'], order: 0 }}
          attributes="id, slug, order, name, parentId, blocks, templateName"
          onClose={(newPath) => router.push({ pathname: newPath || pathname, query: { ...query, '@page': undefined, '@new-page': undefined } })}
        />
      );
    } else if (query && query['@upload'] !== undefined) {
      modal = (
        <UploadModal
          modal
          onSave={({ id }) => router.push({ pathname, query: { ...query, '@upload': undefined, '@media': id } })}
          onClose={() => router.push({ pathname, query: { ...query, '@upload': undefined } })}
        />
      );
    }

   // Von Collections Attribute (icon, group, order) extrahieren und Collections gruppieren
    const groups = {};
    (collections || []).map(({ name, description }, i) => {
      const attributes = {};
      description.split('\n').forEach((x) => {
        const y = x.split(':');

        if (y.length === 2) {
          attributes[y[0]] = y[1];
        }
      });

      // Attribute verfügbar machen
      collections[i] = {
        ...collections[i],
        ...attributes,
      };

      // Gruppieren
      if (!groups[attributes.group]) groups[attributes.group] = [];
      groups[attributes.group].push(collections[i]);
    });

    // Collections innerhalb Gruppe sortieren
    Object.keys(groups).forEach((key) => {
      groups[key] = sortBy(groups[key], ['order', 'name']);
    });

    // Undefined-Gruppe auflösen
    if (groups.undefined) {
      groups.undefined.forEach((collection) => {
        if (!groups[collection.name]) groups[collection.name] = [];

        groups[collection.name].push(collection);
      });

      delete groups.undefined;
    }

    const menu = (
      <Menu>
        {/*<Menu.Item key="mail" className="ant-menu-item-brand">{logo || 'ATHENA'}</Menu.Item>*/}
        {Object.keys(groups).map((key) => {
          const wrapper = children => (
            <SubMenu key={key} title={capitalize(key)}>
              {children}
            </SubMenu>
          );
          const groupItem = (
            (groups[key] || []).map(({ name, title }) => (
              <SubMenu
                key={name}
                title={<Link to={{ pathname: `/@/${name}`, query: { state: 'PUBLISHED' } }}
              >
                {capitalize(title || name)}
                {groups[key].length > 1 ? <i className="fa fa-arrow-right" style={{ paddingLeft: '.5rem' }} /> : undefined}
              </Link>}>
                <Menu.Item key={`/@/${name}`}>
                  <Link to={{ pathname, query: { [`@${name}`]: null } }}>
                    <i className="fa fa-plus" />{capitalize(title || name)} hinzufügen
                  </Link>
                </Menu.Item>
              </SubMenu>
            ))
          );

          return groups[key].length === 1 ? groupItem : wrapper(groupItem);
        })}
        <SubMenu title={<Link to="/@/media">Mediathek</Link>}>
          <Menu.Item key="/@/media">
            <Link to={{ pathname, query: { '@upload': null } }}>
              <i className="fa fa-plus" />Datei hochladen
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/@/users">
          <Link to="/@/users">
            Benutzer
          </Link>
        </Menu.Item>
        <Menu.Item key="/@/analytics">
          <Link to="/@/analytics">
            Statistik
          </Link>
        </Menu.Item>
        <GatewayDest
          name="button1"
          component={props => (props.children ? (
            <div className="ant-menu-item-right ant-menu-item-horizontal ant-menu-item ant-menu-item-separated">
              {props.children}
            </div>
        ) : null)}
        />
        <SubMenu className="ant-menu-submenu-right" title={<span><fa className="fa fa-cog" /></span>}>
          <Menu.Item key="page-settings">Globale Einstellungen</Menu.Item>
          <GatewayDest
            name="button2"
            component={props => (props.children ? (
              <div className="ant-menu-item-right ant-menu-item-horizontal ant-menu-item">
                {props.children}
              </div>
            ) : null)}
          />
        </SubMenu>
        <SubMenu className="ant-menu-submenu-right" title={<span>{auth.user.name}</span>}>
          <Menu.Item key="setting:1">Profil</Menu.Item>
          <Menu.Item key="logout">Abmelden</Menu.Item>
        </SubMenu>
      </Menu>
    );
    return (
      <GatewayProvider>
        <div className="full">
          {modal}
          <Affix>
            <Dropdown overlay={menu} overlayClassName="ant-dropdown-left" placement="bottomLeft">
              <Button type="default" shape="circle" style={{ position: 'fixed', top: 30, right: 30, zIndex: 1, fontSize: 20, width: 40, height: 40 }}>
                A
              </Button>
            </Dropdown>
          </Affix>
          {children}
          <GatewayDest name="global" />
          <Match
            pattern="/@/media"
            render={routerProps =>
              <CodeSplit chunkName="media" modules={{ View: require('./media/list') }}>
                { ({ View }) => View && <View
                  {...routerProps}
                  tags={query && query.tags ? query.tags.split('-') : []}
                  solution={query && query.solution ? [query.solution] : []}
                  source={query && query.source ? [query.source] : []}
                  type={query && query.type ? [query.type] : []}
                  sortByState={query && query.sortBy ? [query.sortBy] : []}
                  onTagsFilterChange={tags => router.push({
                    pathname,
                    query: { ...query, tags: tags && Array.isArray(tags) ? tags.join('-') : undefined },
                  })}
                  onSolutionFilterChange={solution => router.push({
                    pathname,
                    query: { ...query, solution: solution ? solution.join('') : undefined },
                  })}
                  onSourceFilterChange={source => router.push({
                    pathname,
                    query: { ...query, source: source ? source.join('') : undefined },
                  })}
                  onTypeFilterChange={type => router.push({
                    pathname,
                    query: { ...query, type: type ? type.join('') : undefined },
                  })}
                  onResetFilters={() => router.push({
                    pathname,
                  })}
                  onSortByChange={sortBy => router.push({
                    pathname,
                    query: { ...query, sortBy: sortBy ? sortBy.join('') : undefined },
                  })}
                  onImageChange={({ id }) => router.push({
                    pathname,
                    query: { ...query, '@media': id },
                  })}
                /> }
              </CodeSplit>
            }
          />
        </div>
      </GatewayProvider>
    );
  }
}
