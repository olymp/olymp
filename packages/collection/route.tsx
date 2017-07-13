import React, { Component } from 'react';
import View from './views';

export default class CollectionRoute extends Component {
  render() {
    const {
      typeName,
      collection,
      fieldNames,
      onClose,
      saving,
      children,
      location,
      items,
      refetch,
      collectionLoading,
    } = this.props;

    return <View {...this.props} />;
  }
}
