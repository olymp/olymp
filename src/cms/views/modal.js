import React, { Component } from 'react';
import { Gateway } from 'react-gateway';
import { Button, Icon } from 'antd';
import { Modal, Link, withRouter } from 'olymp';

@withRouter
export default class ModalView extends Component {
  render() {
    const { location, children } = this.props;
    const { pathname } = location;
    return (
      <Modal>
        <Gateway into="close">
          <Link to={{ pathname }}>
            <Button shape="circle" size="large">
              <Icon type="close" />
            </Button>
          </Link>
        </Gateway>
        {children}
      </Modal>
    );
  }
}
