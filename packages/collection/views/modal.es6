import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-router';
import { Form, Menu, Icon } from 'antd';
import { Modal, createComponent, border } from 'olymp-fela';
import { GatewayRegistry } from 'react-gateway';
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

const AntMenu = createComponent(
  ({ theme }) => ({
    borderY: border(theme, theme.dark3),
    backgroundColor: theme.dark,
    boxShadow: 'inset 0 0 10px 0 rgba(0, 0, 0, 0.2)',
    '> li': {
      // backgroundColor: 'rgba(255, 255, 255, 0.03)',
      padding: theme.space0,
      '> div > div': {
        padding: theme.space0,
      },
    },
  }),
  ({ keys, ...p }) =>
    <Menu theme="dark" selectedKeys={keys} mode="horizontal" {...p} />,
  p => Object.keys(p)
);

@withRouter
@withCollection
@withItem
@Form.create()
export default class CollectionModal extends Component {
  static contextTypes = {
    gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = context.gatewayRegistry;
  }

  state = {
    children: null,
    tab: undefined,
  };

  componentWillMount() {
    this.gatewayRegistry.addContainer('toolbar', this);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeContainer('toolbar', this);
  }

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
    const { children } = this.state;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema);
    const currentTab = this.state.tab || keys[0];
    const header = (
      <div>
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
        {children && !!children.length && createElement(AntMenu, {}, children)}
      </div>
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
        width={900}
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
