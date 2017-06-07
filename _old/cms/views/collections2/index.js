import React, { Component } from 'react';
import { Modal, withRouter, withItems, graphql } from 'olymp';

@withRouter
export default class CollectionView extends Component {
  render() {
    const { typeName, collection, fieldNames, onClose, saving, children, location, items, refetch, collectionLoading } = this.props;
    const { query } = location;

    const id = query && query[`@${typeName.toLowerCase()}`];

    return (
      <Modal title={`${collection && collection.name}-Liste`}>
        Test
      </Modal>
    );
  }
}
