import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { queryPage } from '../gql';
import { mapProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { Helmet, traverse } from 'olymp';

const Page = withBlockTypes(props =>
  (<ContentLoader isLoading={props.isLoading}>
    <SlateMate {...props} showUndo key={props.id + (props.bindingId || '')}>
      {props.children}
      {renderHelmet(props.pathname, props.item)}
    </SlateMate>
  </ContentLoader>)
);
Page.propTypes = {
  item: object,
  onChange: func,
  readOnly: bool,
};
Page.defaultProps = {
  item: {},
  readOnly: true,
};
Page.WithData = queryPage(
  mapProps(({ item, data, ...rest }) => ({
    value: item && item.blocks,
    isLoading: data.loading,
    item,
    ...rest,
  }))(Page)
);
export default Page;

const getURL = () => {
  if (process.env.URL) {
    return process.env.URL;
  } else if (process.env.IS_WEB) {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
};

const renderHelmet = (pathname, { name, description, tags, blocks } = {}) => {
  const meta = [];
  const link = [];
  meta.push({
    property: 'og:title',
    content: name,
  });
  meta.push({
    property: 'twitter:title',
    content: name,
  });
  meta.push({
    property: 'og:type',
    content: 'article',
  });
  if (description) {
    meta.push({
      name: 'description',
      content: description,
    });
    meta.push({
      property: 'og:description',
      content: description,
    });
    meta.push({
      property: 'twitter:description',
      content: description,
    });
  }
  if (tags) {
    meta.push({
      name: 'keywords',
      content: tags ? tags.join(',') : undefined,
    });
  }
  const url = getURL();
  if (url) {
    link.push({
      rel: 'amphtml',
      href: `${url + pathname}?amp`,
    });
    link.push({
      rel: 'canonical',
      href: url + pathname,
    });
    meta.push({
      property: 'og:url',
      content: url + pathname,
    });
  }
  if (blocks) {
    let image = null;
    traverse(blocks, (key, value, parent) => {
      if (key === 'url') {
        image = parent;
        return false;
      }
    });
    if (image) {
      meta.push({
        property: 'og:image',
        content: image.url,
      });
      meta.push({
        property: 'twitter:image',
        content: image.url,
      });
      meta.push({
        property: 'twitter:card',
        content: image.url,
      });
    }
  }

  return <Helmet title={name} meta={meta} link={link} />;
};
