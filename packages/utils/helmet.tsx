import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const getURL = () => {
  if (process.env.URL) {
    return process.env.URL;
  } else if (process.env.IS_WEB) {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
};
export default (
  { name, title, description, image, tags, keywords, pathname } = {},
  pth
) => {
  if (pth && !pathname) pathname = pth;
  const meta = [];
  const link = [];
  name = name || title;
  if (image && image.url) {
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
  if (name) {
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
  }
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
  tags = tags || keywords;
  if (tags) {
    meta.push({
      name: 'keywords',
      content: tags ? tags.join(',') : undefined,
    });
  }
  const url = getURL();
  if (url && pathname) {
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

  return <Helmet title={name} meta={meta} link={link} />;
};

export class OlympHelmet extends Component {
  static contextTypes = {
    theme: PropTypes.object,
  };

  render() {
    const { meta, link ...rest } = this.props;
    const { theme } = this.context;

    return (
      <Helmet
        meta={[
          { name: 'theme-color', content: theme.color || '#8e44ad' },
          { name: 'msapplication-TileColor', content: theme.color || '#8e44ad' },
          ...(meta || []),
        ]}
        link={[
          {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: theme.color || '#8e44ad',
          },
          ...(link || []),
        ]}
        {...rest}
      />
    );
  }
}
