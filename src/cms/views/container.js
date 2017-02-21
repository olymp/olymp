import React, { Component } from 'react';
import { withRouter, withCollections, useColors, Helmet, useLightbox, useEdits } from 'olymp';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot } from 'olymp/auth';
import uncapitalize from 'lodash/lowerFirst';
import { Affix, Button, Dropdown, Icon } from 'antd';
import { useBlockTypes } from 'olymp/slate';
import PageModal from './pages/modals/page';
import MediaModal from './media/view';
import SettingsModal from './settings';
import CollectionModal from './collections';
import Menu from './menu';
import withSettings from '../decorators/settings';
import { ImageEdit } from '../edits';
import '../styles/style.less';

@useLightbox
@useEdits([
  type => type.kind === 'OBJECT' && type.name === 'Image' && <ImageEdit asImg mode="fit" retina style={{ maxWidth: 300, maxHeight: 300 }} />
])
@withRouter
@useBlockTypes()
@withCollections
@useColors()
@withSettings
export default class Container extends Component {
  render() {
    const { children, router, location, auth, logo, collectionList, collectionTree, settings, helmet = {}, color, ...rest } = this.props;
    const { pathname, query } = location;
    const { title, description, author, tags } = settings;

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

    const helmetContent = (
      <Helmet
        {...helmet}
        titleTemplate={`${title} - %s`}
        defaultTitle={title}
        htmlAttributes={{ lang: 'de', amp: undefined }} // amp takes no value
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: (tags || []).join(', ') },
          { name: 'author', content: author },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'theme-color', content: color || '#FBA139' },
          { name: 'msapplication-TileColor', content: color || '#FBA139' },
          ...(helmet.meta || [])
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
          { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
          { rel: 'mask-icon', href: 'logo.svg', color: color || '#FBA139' },
          ...(helmet.link || [])
        ]}
      />
    )

    if (!auth || !auth.user) {
      return (
        <div>
          {helmetContent}
          {children}
          {modal}
        </div>
      );
    }

    const collection = query ? (collectionList || []).find(c => query[`@${c.name}`] !== undefined || query[`@${uncapitalize(c.name)}`] !== undefined) : undefined;

    if (collection !== undefined) {
      const { name } = collection;
      modal = (
        <CollectionModal typeName={name} onClose={() => router.push({ pathname, query: { ...query, [`@${name}`]: undefined } })} />
      );
    } else if (query && query['@mediathek'] !== undefined) {
      modal = (
        <MediaModal id={query['@mediathek']} multi />
      );
    } else if (query && query['@settings'] !== undefined) {
      modal = (
        <SettingsModal typeName="settings" />
      );
    } else if (query && (query['@page'] !== undefined || query['@new-page'] !== undefined)) {
      modal = (
        <PageModal
          id={query['@page']}
          initialData={{ parentId: query['@new-page'], order: 0 }}
          fieldNames="id, slug, order, name, parentId, blocks, templateName"
          onClose={newPath => router.push({ pathname: newPath || pathname, query: { ...query, '@page': undefined, '@new-page': undefined } })}
        />
      );
    }

    return (
      <GatewayProvider>
        <div>
          {helmetContent}
          {children}
          {modal}
          <Affix className="athena-cms-menu">
            {!modal && (
              <Dropdown overlay={<Menu collections={collectionTree} />} overlayClassName="ant-dropdown-left" placement="bottomLeft">
                <Button type="primary" shape="circle" size="large">
                  {logo || <Icon type="menu-unfold" />}
                </Button>
              </Dropdown>
            )}
            <GatewayDest
              name="action"
              component={props => (props.children ? props.children : null)}
            />
          </Affix>
          <GatewayDest name="global" />
        </div>
      </GatewayProvider>
    );
  }
}
