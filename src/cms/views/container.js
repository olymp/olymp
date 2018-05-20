import React, { Component } from 'react';
import {
  withRouter,
  withCollections,
  useColors,
  Helmet,
  useLightbox,
  useEdits,
} from 'olymp';
import { useBlockTypes } from 'olymp/slate';
import {
  AuthRegister,
  AuthLogin,
  AuthConfirm,
  AuthReset,
  AuthForgot,
} from 'olymp/auth';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import uncapitalize from 'lodash/lowerFirst';
import { Affix, Button, Dropdown, Alert } from 'antd';
import PageModal from './pages/modals/page';
import MediaModal from './media/view';
import SettingsModal from './settings';
import CollectionModal from './collections';
import PagesModal from './pages';
import { CmsAction } from '../components';
import withSettings from '../decorators/settings';
import { ImageEdit } from '../edits';
import '../styles/style.less';

@useLightbox
@useEdits([
  type =>
    type.kind === 'OBJECT' &&
    type.name === 'Image' && (
      <ImageEdit
        asImg
        mode="fit"
        showMediathekOnClick
        retina
        style={{ maxWidth: 300, maxHeight: 300 }}
      />
    ),
])
@withRouter
@useBlockTypes()
@withCollections
@useColors()
@withSettings()
export default class Container extends Component {
  render() {
    const {
      children,
      router,
      location,
      auth,
      logo,
      collectionList,
      collectionTree,
      settings,
      helmet = {},
      color,
      ...rest
    } = this.props;
    const { pathname, query } = location;
    const { title, description, author, tags } = settings;

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
      modal = (
        <AuthLogin
          email={query.email}
          pathname={pathname}
          onClose={() => router.push(pathname)}
        />
      );
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

    const helmetContent = (
      <Helmet
        {...helmet}
        titleTemplate={title ? `${title} - %s` : 'Olymp CMS'}
        defaultTitle={title || 'Olymp CMS'}
        htmlAttributes={{ lang: 'de', amp: undefined }} // amp takes no value
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: (tags || []).join(', ') },
          { name: 'author', content: author },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          { name: 'theme-color', content: color || '#FBA139' },
          { name: 'msapplication-TileColor', content: color || '#FBA139' },
          ...(helmet.meta || []),
        ]}
        link={[
          { rel: 'stylesheet', href: 'fa/css/fontawesome-all.min.css' },
          { rel: 'apple-touch-icon', href: 'apple-icon.png' },
          { rel: 'mask-icon', href: 'logo.svg', color: color || '#FBA139' },
          ...(helmet.link || []),
        ]}
      />
    );

    const collection = query
      ? (collectionList || []).find(
          c =>
            query[`@${c.name}`] !== undefined ||
            query[`@${uncapitalize(c.name)}`] !== undefined
        )
      : undefined;

    if (auth && auth.user) {
      if (collection !== undefined) {
        const { name } = collection;
        modal = (
          <CollectionModal
            typeName={name}
            onClose={() =>
              router.push({
                pathname,
                query: { ...query, [`@${name}`]: undefined },
              })
            }
          />
        );
      } else if (query && query['@mediathek'] !== undefined) {
        modal = (
          <MediaModal
            id={query['@mediathek']}
            pdfMode={query['@pdf'] !== undefined}
            multi
          />
        );
      } else if (query && query['@settings'] !== undefined) {
        modal = <SettingsModal typeName="settings" />;
      } else if (query && query['@pages'] !== undefined) {
        modal = <PagesModal />;
      }

      // small Modals
      if (
        query &&
        (query['@page'] !== undefined || query['@new-page'] !== undefined)
      ) {
        modal = (
          <div>
            {modal}
            <PageModal
              id={query['@page']}
              initialData={{ parentId: query['@new-page'], order: 0 }}
              fieldNames="id, slug, order, name, parentId, blocks, templateName, state"
              onClose={newPath =>
                router.push({
                  pathname: newPath || pathname,
                  query: {
                    ...query,
                    '@page': undefined,
                    '@new-page': undefined,
                  },
                })
              }
            />
          </div>
        );
      }
    }

    return (
      <GatewayProvider>
        <div>
          {helmetContent}
          {children}
          {modal}
          <Affix className="athena-cms-menu">
            {auth &&
              auth.user &&
              !modal && (
                <Dropdown
                  overlay={<CmsAction collections={collectionTree} />}
                  overlayClassName="ant-dropdown-left"
                  placement="bottomLeft"
                >
                  <Button type="primary" shape="circle" size="large">
                    <img src="/logo.png" height="45" alt="Olymp CMS" />
                  </Button>
                </Dropdown>
              )}
            <GatewayDest name="action" />
            <GatewayDest name="undo" />
          </Affix>
          {/* <Affix offsetBottom={0}>
            <Alert
              message="Datenschutz-Informationen"
              description="Mit der Nutzung dieser Website erklären Sie sich damit einverstanden, dass Cookies verwendet werden. Nähere Informationen finden Sie im Impressum dieser Seite!"
              banner
              closeText="Akzeptieren und schließen"
            />
          </Affix> */}
        </div>
      </GatewayProvider>
    );
  }
}
