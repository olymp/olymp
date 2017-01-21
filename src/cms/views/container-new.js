import React, { Component } from 'react';
import { Link, withRouter, withCollections } from 'olymp';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot } from 'olymp/auth';
import capitalize from 'lodash/upperFirst';
import uncapitalize from 'lodash/lowerFirst';
import { Menu, Affix, Button, Dropdown, Icon, notification } from 'antd';
import { useBlockTypes } from 'olymp/slate';
import { useLightboxes } from '../edits/image/with-lightbox';
import PageModal from './pages/modals/page';
import MediaList from './media/list';
import ModalView from './modal';
import UploadModal from './media/upload';
import Collection from './collections-new';
import './container.less';

const SubMenu = Menu.SubMenu;

@useLightboxes
@withRouter
@useBlockTypes()
@withCollections
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
    const { children, router, location, auth, logo, collectionList, collectionTree } = this.props;
    const { pathname, query } = location;

    let modal;
    if (query && query.confirm !== undefined) {
      modal = (<AuthConfirm token={query.confirm} pathname={pathname} onClose={() => router.push(pathname)} />);
    }
    if (query && query.register !== undefined) {
      modal = (<AuthRegister email={query.register} pathname={pathname} onClose={() => router.push(pathname)} />);
    }
    if (query && query.login !== undefined) {
      modal = (<AuthLogin email={query.email} pathname={pathname} onClose={() => router.push(pathname)} />);
    }
    if (query && query.forgot !== undefined) {
      modal = (<AuthForgot email={query.forgot} pathname={pathname} onClose={() => router.push(pathname)} />);
    }
    if (query && query.reset !== undefined) {
      modal = (<AuthReset token={query.reset} pathname={pathname} onClose={() => router.push(pathname)} />);
    }

    if (!auth || !auth.user) {
      return (
        <div>
          {children}
          {modal}
        </div>
      );
    }

    const collection = query ? (collectionList || []).find(c => query[`@${c.name}`] !== undefined || query[`@${uncapitalize(c.name)}`] !== undefined) : undefined;

    if (collection !== undefined) {
      const { name } = collection;
      modal = (
        <Collection collection={name} onClose={() => router.push({ pathname, query: { ...query, [`@${name}`]: undefined } })} />
      );
    } else if (query && query['@media'] !== undefined) {
      modal = (
        <ModalView location={location}>
          <MediaList
            tags={query && query.tags ? query.tags.split('-') : []}
            solution={query && query.solution ? [query.solution] : []}
            source={query && query.source ? [query.source] : []}
            type={query && query.type ? [query.type] : []}
            showAll={query && query.all === null}
            uploadLink={link => (
              <Link to={{ pathname, query: { ...query, '@upload': null } }}>
                {link}
              </Link>
            )}
            sortByState={query && query.sortBy ? [query.sortBy] : []}
            onTagsFilterChange={(tags) => {
              delete query.all;

              return router.push({
                pathname,
                query: { ...query, tags: tags && Array.isArray(tags) ? tags.join('-') : undefined },
              });
            }}
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
            onShowAll={() => router.push({
              pathname,
              query: { all: null },
            })}
            onImageChange={({ id }) => router.push({
              pathname,
              query: { ...query, '@media': id },
            })}
          />
        </ModalView>
      );
    } else if (query && (query['@page'] !== undefined || query['@new-page'] !== undefined)) {
      modal = (
        <PageModal
          id={query['@page']}
          initialData={{ parentId: query['@new-page'], order: 0 }}
          attributes="id, slug, order, name, parentId, blocks, templateName"
          onClose={newPath => router.push({ pathname: newPath || pathname, query: { ...query, '@page': undefined, '@new-page': undefined } })}
        />
      );
    } else if (query && (query['@del-page'] !== undefined)) {
      const openNotification = () => {
        const btnClick = function () {
          // to hide notification box
          notification.close();
        };
        const btn = (
          <Button onClick={btnClick} type="primary">
            Löschen
          </Button>
        );
        notification.warning({
          message: 'Seite wirklich löschen',
          description: 'Möchten Sie diese Seite wirklich löschen?',
          btn,
          key: `open${Date.now()}`,
          onClose: close,
          duration: 0,
        });
      };
      openNotification();
    } else if (query && query['@upload'] !== undefined) {
      modal = (
        <UploadModal
          modal
          onSave={({ id }) => router.push({ pathname, query: { ...query, '@upload': undefined, '@media': id } })}
          onClose={() => router.push({ pathname, query: { ...query, '@upload': undefined } })}
        />
      );
    }

    const mainMenu = (
      <Menu style={{ minWidth: 150 }} onClick={this.handleClick}>
        {Object.keys(collectionTree).map((key) => {
          const wrapper = children => (
            <SubMenu key={key} title={capitalize(key)}>
              {children}
            </SubMenu>
          );
          const groupItem = (
            (collectionTree[key] || []).map(({ name, title }) => (
              <Menu.Item key={`/@/${name}`}>
                <Link to={{ pathname, query: { [`@${uncapitalize(name)}`]: null } }}>
                  {capitalize(title || name)}
                </Link>
              </Menu.Item>
            ))
          );

          return collectionTree[key].length === 1 ? groupItem : wrapper(groupItem);
        })}
        <Menu.Divider />
        <Menu.Item key="mediathek">
          <Link to={{ pathname, query: { '@media': null } }}>
            Mediathek
          </Link>
        </Menu.Item>
        <Menu.Item key="/@/users" disabled>Benutzer</Menu.Item>
        <Menu.Item key="/@/analytics" disabled>Statistik</Menu.Item>
        <Menu.Item key="page-settings" disabled>Einstellungen</Menu.Item>
        <Menu.Item key="user" disabled>Profil</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">Abmelden</Menu.Item>
      </Menu>
    );

    return (
      <GatewayProvider>
        <div>
          {children}
          {modal}
          <Affix className="athena-cms-menu">
            {!modal && (
              <Dropdown overlay={mainMenu} overlayClassName="ant-dropdown-left" placement="bottomLeft">
                <Button type="primary" shape="circle" size="large">
                  {logo || <Icon type="menu-unfold" />}
                </Button>
              </Dropdown>
            )}
            <GatewayDest
              name="action"
              component={props => (props.children ? props.children : null)}
            />
            <GatewayDest
              name="close"
              component={props => (props.children ? props.children : null)}
            />
          </Affix>
          <GatewayDest name="global" />
        </div>
      </GatewayProvider>
    );
  }
}
