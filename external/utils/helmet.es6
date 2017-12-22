import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';
import PropTypes from 'prop-types';

const getURL = () => {
  let url;
  if (process.env.URL) {
    url = process.env.URL;
  } else if (typeof window !== 'undefined') {
    url = `${window.location.protocol}//${window.location.host}`;
  }
  if (url && url.endsWith('/')) {
    url = url.substr(0, url.length - 1);
  }
  return url;
};
export default (
  { name, title, description, image, tags, keywords, pathname, ...rest } = {},
  pth
) => {
  if (pth && !pathname) {
    pathname = pth;
  }
  if (image && typeof image === 'object' && image.url) {
    image = image.url;
  }
  if (image && typeof image === 'object' && image.src) {
    image = image.src;
  }
  const meta = [];
  const link = [];
  name = name || title;
  if (image) {
    meta.push({
      property: 'og:image',
      content: image,
    });
    meta.push({
      property: 'twitter:image',
      content: image,
    });
    meta.push({
      property: 'twitter:card',
      content: image,
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
    const { meta, link, ...rest } = this.props;
    const { theme } = this.context;

    return (
      <Helmet
        meta={[
          { name: 'theme-color', content: get(theme, 'color', '#8e44ad') },
          {
            name: 'msapplication-TileColor',
            content: get(theme, 'color', '#8e44ad'),
          },
          ...(meta || []),
        ]}
        link={[
          {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: get(theme, 'color', '#8e44ad'),
          },
          ...(link || []),
        ]}
        {...rest}
      />
    );
  }
}
