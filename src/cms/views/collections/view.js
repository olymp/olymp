import React, { Component } from 'react';
import { Modal, withRouter, withItems } from 'olymp';
import Detail from './detail';
import List from './list-sidebar';

@withItems({ })
@withRouter
export default class CollectionView extends Component {
  render() {
    const { typeName, collection, attributes, onClose, saving, children, location, items, refetch } = this.props;
    const { query } = location;

    const id = query && query[`@${typeName.toLowerCase()}`];

    return (
      <Modal>
        <List typeName={typeName} collection={collection} attributes={attributes} items={items} id={id} location={location} refetch={refetch} query={this.props.query} />
        <Detail typeName={typeName} collection={collection} attributes={attributes} location={location} id={id} refetch={refetch} query={this.props.query} />
      </Modal>
    );
  }
}
