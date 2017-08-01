import React, { Component, Children } from 'react';
import { withRouter } from 'olymp-router';
import { withGateway } from 'olymp-ui';
import { Form, Menu, Icon } from 'antd';
import { Modal, createComponent, border } from 'olymp-fela';
import { withCollection, withItem } from '../decorators';
import { getFormSchema } from './detail';
import { DetailForm } from '../components';

const RightMenuItem = createComponent(
  () => ({
    float: 'right !important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p),
);

const Content = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    paddingBottom: 0,
  }),
  'div',
  p => Object.keys(p),
);

const HiddenForm = createComponent(
  ({ visible }) => ({
    display: visible ? 'block' : 'none',
  }),
  p => <DetailForm {...p} />,
  p => Object.keys(p),
);

const AntMenu = createComponent(
  ({ theme }) => ({
    borderY: border(theme, theme.dark3),
    boxShadow: 'inset 0 0 10px 0 rgba(0, 0, 0, 0.2)',
    backgroundColor: theme.dark1,
    hasFlex: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '> li': {
      hasFlex: {
        flex: '1 1 auto',
        textAlign: 'center',
      },
      padding: theme.space0,
      '> div > div': {
        padding: theme.space0,
      },
      '& i': {
        paddingX: theme.space2,
      },
    },
    '> li:nth-last-of-type(-n+2)': {
      hasFlex: {
        flex: 'none',
      },
    },
  }),
  ({ keys, ...p }) => <Menu theme="dark" selectedKeys={keys} mode="horizontal" {...p} />,
  p => Object.keys(p),
);

@withRouter
@withCollection
@Form.create()
@withItem
@withGateway('toolbar')
export default class CollectionModal extends Component {
  state = {
    tab: undefined,
  };

  render() {
    const { collection, open, id, typeName, onSave, onClose, item, toolbar } = this.props;
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
            (<RightMenuItem key={tab}>
              <a href="javascript:;" onClick={() => this.setState({ tab })}>
                {tab}
              </a>
            </RightMenuItem>),
          )}
        </Menu>

        {currentTab === 'Text' &&
          <AntMenu>
            {toolbar}

            <Menu.Item key="close">
              <a href="javascript:;" onClick={onClose}>
                <Icon type="close" />
              </a>
            </Menu.Item>
          </AntMenu>}
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
      <Modal width={900} open={open} header={header} footer={footer} onClose={onClose}>
        <Content>
          {keys.map(tab =>
            (<HiddenForm
              {...this.props}
              item={item || {}}
              fields={schema[tab]}
              key={tab}
              visible={currentTab === tab}
              onCreate={onSave}
            />),
          )}
        </Content>
      </Modal>
    );
  }
}
