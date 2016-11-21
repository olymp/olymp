import React, { Component } from 'react';
import { graphql, Link, Match, Redirect, CodeSplit, gql } from 'olymp';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot } from 'olymp/auth';
import capitalize from 'capitalize';
import { Menu, Affix } from 'antd';

import { auth, withRouter } from '../decorators';
import { useLightboxes } from '../edits/image/with-lightbox';
import PageModal from './pages/modals/page';
import MediaDetail from './media/detail';
import UploadModal from './media/upload';
import CollectionDetail from './collections/detail';
import './container.less';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

@auth
@useLightboxes
@withRouter
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
    const { children, router, location, auth, data } = this.props;
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
    const collection = query ? (collections || []).filter(
      c => query[c.name] !== undefined
    )[0] : undefined;
    // const colSchema = query && query.schema ? (collections || []).filter(
    // c => c.name === query.schema
    // )[0] : undefined;
    if (collection !== undefined) {
      const { name } = collection;
      modal = (
        <CollectionDetail name={name} id={query[name]} onClose={() => router.push(pathname)} />
      );
    } else if (query && query.media !== undefined) {
      modal = (
        <MediaDetail
          id={query.media}
          onClose={() => router.push({ pathname, query: { ...query, media: undefined } })}
        />
      );
    } else if (query && query.page !== undefined) {
      modal = (
        <PageModal
          id={query.page}
          initialData={{ parentId: pathname, order: 0 }}
          attributes="id, slug, order, name, parentId, blocks, templateName"
          onClose={() => router.push({ pathname, query: { ...query, page: undefined } })}
        />
      );
    } else if (query && query.upload !== undefined) {
      modal = (
        <UploadModal
          onSave={
            ({ id }) => router.push({ pathname, query: { ...query, upload: undefined, media: id } })
          }
          onClose={() => router.push({ pathname, query: { ...query, upload: undefined } })}
        />
      );
    }

    return (
      <GatewayProvider>
        <div className="full">
          {modal}
          <Affix>
            <Menu onClick={this.handleClick} selectedKeys={[pathname]} mode="horizontal">
              <Menu.Item key="mail" className="ant-menu-item-brand">
                <i className="fa fa-institution" /> Athena
              </Menu.Item>
              <Menu.Item key="/">
                <Link to="/">
                  Website
                </Link>
              </Menu.Item>
              {(collections || []).map(({ name }, i) => (
                <SubMenu key={i} title={<Link to={`/@/${name}`}>{capitalize(name)}</Link>}>
                  <Menu.Item className="display-none" key={`/@/${name}`} />
                  <SubMenu title={<Link to={`/@/${name}`} style={{ color: '#666' }}>{capitalize(name)} ansehen</Link>}>
                    <Menu.Item>Veröffentlicht</Menu.Item>
                    <Menu.Item>Entwurf</Menu.Item>
                    <Menu.Item>Archiviert</Menu.Item>
                    <Menu.Item>Gelöscht</Menu.Item>
                  </SubMenu>
                  <Menu.Item>
                    <Link to={{ pathname, query: { [name]: null } }}>
                      {capitalize(name)} hinzufügen
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ))}
              <SubMenu title={<Link to="/@/media">Mediathek</Link>}>
                <Menu.Item className="display-none" key="/@/media" />
                <Menu.Item>
                  <Link to="/@/media">
                    Mediathek ansehen
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={{ pathname, query: { upload: null } }}>
                    Neue Datei hochladen
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="/@/users">
                <Link to="/@/users">
                  {/* <i className="fa fa-users" />  */}Benutzer
                </Link>
              </Menu.Item>
              <Menu.Item key="/@/analytics">
                <Link to="/@/analytics">
                  {/* <i className="fa fa-area-chart" />  */}Analytics
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
          </Affix>
          {children}
          <GatewayDest name="global" />
          <div style={{ padding: '15px', width: '80%', maxWidth: '1600px', minWidth: '1200px', margin: '0 auto' }}>
            <Match
              pattern="/@/media"
              render={routerProps =>
                <CodeSplit chunkName="media" modules={{ View: require('./media/list') }}>
                  { ({ View }) => View && <View
                    {...routerProps}
                    tags={query && query.tag ? query.tag.split('/') : []}
                    onTagsChange={tags => router.push({
                      pathname,
                      query: { ...query, tag: tags ? tags.join('/') : undefined },
                    })}
                    onImageChange={({ id }) => router.push({
                      pathname,
                      query: { ...query, media: id },
                    })}
                  /> }
                </CodeSplit>
              }
            />
            {(collections || []).map(({ name }) => (
              <Match
                key={name}
                pattern={`/@/${name}`}
                render={routerProps => (
                  <CodeSplit chunkName="collections" modules={{ View: require('./collections/list') }}>
                    { ({ View }) => View && <View
                      {...routerProps}
                      name={name}
                      onClick={({ id }) => router.push({ pathname, query: { [name]: id } })}
                    /> }
                  </CodeSplit>
                )}
              />
            ))}
          </div>
        </div>
      </GatewayProvider>
    );
  }
}

/* const lowerCase0 = (value => {
  return value.charAt(0).toLowerCase() + value.slice(1);
}); */
