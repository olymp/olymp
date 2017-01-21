import React, { Component } from 'react';
import { Gateway } from 'react-gateway';
import { Button, Icon } from 'antd';
import { Modal, Link, withRouter, withItems } from 'olymp';
import Detail from './detail';
import List from './list-sidebar';

@withItems({ })
@withRouter
export default class CollectionView extends Component {
  render() {
    const { typeName, collection, attributes, onClose, saving, children, location, items, refetch } = this.props;
    const { query, pathname } = location;

    const id = query && query[`@${typeName.toLowerCase()}`];
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
        <List typeName={typeName} collection={collection} attributes={attributes} items={items} id={id} location={location} refetch={refetch} query={this.props.query} />
        <Detail typeName={typeName} collection={collection} attributes={attributes} location={location} id={id} refetch={refetch} query={this.props.query} />
      </Modal>
    );
  }
}
