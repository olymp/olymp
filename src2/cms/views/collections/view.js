import React, { Component } from 'react';
import { withItem, withCollection, withItems, withRouter } from '../../decorators';
import List from './list-sidebar';
import Detail from './detail';
import { Modal } from 'olymp';

const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };

@withRouter
export default class CollectionView extends Component {
  render() {
    const { collection, onCreate, onCancel, saving, children, name, location } = this.props;
    const { query } = location;

    const id = query && query[`@${query.id}`];

    return (
      <Modal title="Bearbeiten" onCancel={onCancel} onOk={onCreate}>
        <List name={collection} />
        <div className="container">
          {id ? <Detail name={collection} id={id} /> : null}
        </div>
      </Modal>
    );
  }
}
