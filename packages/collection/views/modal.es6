import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { Form, Menu, Icon } from 'antd';
import { Modal, createComponent } from 'olymp-fela';
import { withCollection, withItem } from '../decorators';
import { getFormSchema } from './detail';
import { DetailForm } from '../components';

const RightMenuItem = createComponent(
  () => ({
    float: 'right !important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p)
);

const Content = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    paddingBottom: 0,
  }),
  'div',
  p => Object.keys(p)
);

const HiddenForm = createComponent(
  ({ visible }) => ({
    display: visible ? 'block' : 'none',
  }),
  p => <DetailForm {...p} />,
  p => Object.keys(p)
);

@withRouter
@withCollection
@withItem
@Form.create()
export default class CollectionModal extends Component {
  state = { tab: undefined };

  render() {
    const {
      collection,
      open,
      id,
      typeName,
      onSave,
      onClose,
      item,
    } = this.props;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema);
    const currentTab = this.state.tab || keys[0];
    const header = (
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="brand">
          {typeName} {id === 'new' ? 'anlegen' : 'bearbeiten'}
        </Menu.Item>
        {keys.reverse().map(tab =>
          <RightMenuItem key={tab}>
            <a href="javascript:;" onClick={() => this.setState({ tab })}>
              {tab}
            </a>
          </RightMenuItem>
        )}
      </Menu>
    );
    const footer = (
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="save">
          <a href="javascript:;" onClick={onSave}>
            <Icon type="save" /> Speichern
          </a>
        </Menu.Item>
        <Menu.Item key="close">
          <a href="javascript:;" onClick={onClose}>
            Abbrechen
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Modal
        width={700}
        open={open}
        header={header}
        footer={footer}
        onClose={onClose}
      >
        <Content>
          {keys.map(tab =>
            <HiddenForm
              {...this.props}
              item={item || {}}
              fields={schema[tab]}
              key={tab}
              visible={currentTab === tab}
              onCreate={onSave}
            />
          )}
        </Content>
      </Modal>
    );
  }
}
