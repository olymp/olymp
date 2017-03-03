import React, { Component } from 'react';
import { withRouter, withItems } from 'olymp';
import { Modal } from '../../components';
import Detail from './detail';
import List from './list-sidebar';

@withItems({ })
@withRouter
export default class CollectionView extends Component {
  render() {
    const { typeName, collection, fieldNames, onClose, saving, children, location, items, refetch, collectionLoading } = this.props;
    const { query } = location;

    const id = query && query[`@${typeName.toLowerCase()}`];

    return (
      <Modal>
        <List typeName={typeName} collection={collection} fieldNames={fieldNames} items={items} id={id} location={location} refetch={refetch} query={this.props.query} isLoading={collectionLoading} />
        <Detail typeName={typeName} collection={collection} fieldNames={fieldNames} location={location} id={id} refetch={refetch} query={this.props.query} />
      </Modal>
    );
  }
}
