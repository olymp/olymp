import React, { Component } from 'react';
import { graphql, gql } from 'olymp';

export default (attributes) => (WrappedComponent) => {
  @graphql(gql`
  query settingsList {
    items: settingsList {
      id, title, description, author, tags, ${attributes || ''}
    }
  }
`)
  class WithSettingsComponent extends Component {
    render() {
      const { data, ...rest } = this.props;
      const { items } = data;

      return (
        <WrappedComponent {...rest} settings={items && items.length ? items[0] : {}} />
      );
    }
  }
  return WithSettingsComponent;
};
