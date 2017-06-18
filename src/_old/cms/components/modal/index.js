import React, { Component } from 'react';
import { GatewayDest } from 'react-gateway';
import { Modal, Link, withRouter } from 'olymp';
import { Affix, Button, Icon } from 'antd';

@withRouter
export default class ModalView extends Component {
  render() {
    const { children, location, onClose } = this.props;
    const { pathname } = location;

    return (
      <Modal>
        <Affix className="athena-cms-menu athena-cms-modal-menu">
          {!!onClose
            ? <a href="javascript:;" style={{ zIndex: 4 }}>
                <Button
                  type="primary"
                  shape="circle"
                  size="large"
                  onClick={onClose}
                >
                  <Icon type="close" />
                </Button>
              </a>
            : <Link to={{ pathname }} style={{ zIndex: 4 }}>
                <Button type="primary" shape="circle" size="large">
                  <Icon type="close" />
                </Button>
              </Link>}
          <GatewayDest name="cms-action" />
        </Affix>

        {children}
      </Modal>
    );
  }
}
