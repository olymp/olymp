import React, { Component } from 'react';
import { Gateway } from 'react-gateway';
import { Button, Icon } from 'antd';
import { Modal, Link, withRouter } from 'olymp';
// import Detail from './detail';
import Sidebar from './list-sidebar';
import List from './list';

@withRouter
export default class MediaView extends Component {
  render() {
    const { location } = this.props;
    const { query, pathname } = location;

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
        <Sidebar />
        <List />
        {/* <Detail typeName={typeName} collection={collection} attributes={attributes} location={location} id={id} refetch={refetch} query={this.props.query} /> */}
      </Modal>
    );
  }
}
