import React, { Component } from 'react';
import { withItem, withCollection, withItems, withRouter } from '../../decorators';
import List from './list-sidebar';
import { Affix, Button } from 'antd';
import Detail from './detail';
import { Modal, Link } from 'olymp';

const styles = {
  fontSize: '19px',
  marginRight: '10px',
  color: 'white',
};
const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };
const Title = ({ text }) => <span style={{ marginLeft: 40 }}>{text}</span>;
@withRouter
export default class CollectionView extends Component {
  render() {
    const { collection, onClose, saving, children, name, location } = this.props;
    const { query } = location;

    const id = query && query[`@${collection}`];
    const to = { ...location, query: { ...location.query, [`@${collection}`]: undefined } };
    return (
      <Modal title={<Title text={id ? 'Bearbeiten' : collection} to={to} />} onCancel={onClose} onOk={onClose}>
        <Link style={{ position: 'fixed', top: 5, left: 5, zIndex: 3 }} to={to}>
          <Button type="default" shape="circle" style={{ fontSize: 20, width: 40, height: 40 }}>
            <i className="fa fa-close" />
          </Button>
        </Link>
        <List name={collection} />
        <div className="container">
          {id ? <Detail style={{ maxWidth: 600, margin: '30px auto' }} name={collection} id={id} /> : null}
        </div>
      </Modal>
    );
  }
}
