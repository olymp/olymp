import React, { Component } from 'react';
import { Gateway } from 'react-gateway';
import { Button, Icon } from 'antd';
import { Modal, Link, withRouter } from 'olymp';
import Detail from './detail';
import List from './list-sidebar';

@withRouter
export default class CollectionView extends Component {
  render() {
    const { collection, onClose, saving, children, name, location } = this.props;
    const { query, pathname } = location;

    const id = query && query[`@${collection.toLowerCase()}`];
    const to = { pathname };

    return (
      <Modal>
        <Gateway into="close">
          <Link to={to}>
            <Button shape="circle" size="large">
              <Icon type="close" />
            </Button>
          </Link>
        </Gateway>
        <List name={collection} />
        <div className="container" style={{ maxWidth: 600, margin: '30px auto' }}>
          {id && <Detail name={collection} id={id} />}
          {!id && <div>
            <h1>Links auswählen oder unten erstellen.</h1>
            <br />
            <Detail name={collection} />
          </div>}
        </div>
      </Modal>
    );
  }
}
