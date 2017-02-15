import React, { Component } from 'react';
import { Helmet } from 'olymp';
import withSettings from './decorators/settings';

@withSettings
export default class CmsHelmet extends Component {
  render() {
    const { settings, ...rest } = this.props;
    const { title, description, author, tags } = settings;

    return (
      <Helmet
        {...rest}
        titleTemplate={title}
        defaultTitle={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: (tags || []).join(', ') },
          { name: 'author', content: author },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          ...(rest.meta || [])
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
          ...(rest.link || [])
        ]}
      />
    );
  }
}
