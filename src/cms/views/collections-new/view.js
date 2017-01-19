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
        <List name={collection} id={id} />
        <Detail name={collection} id={id} />
      </Modal>
    );
  }
}
