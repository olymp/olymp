import React, { Component } from 'react';
import { Link, withRouter } from 'olymp-router';
import { Menu, Icon, Button } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';

const getFormSchema = ({ fields }) =>
  fields.reduce((result, field) => {
    const label = !!field['@'] && !!field['@'].label && field['@'].label.arg0;

    if (field.type.name === 'Blocks') {
      // if slate => own group
      result[label || upperFirst(field.name)] = [field];
    } else if (field.type.name === 'Image') {
      // if image => own group
      result[label || upperFirst(field.name)] = [field];
    } else {
      // Group
      const group = field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';

      if (!result[group]) {
        result[group] = [];
      }
      result[group].push(field);
    }
    return result;
  }, {});

const Flex = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space3,
    paddingX: theme.space3,
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
    },
    '> ul': {
      zIndex: 1,
    },
    '> form': {
      overflow: 'auto',
    },
  }),
  'div',
  []
);

const HiddenForm = createComponent(
  ({ visible }) => ({
    display: visible ? 'block' : 'none',
  }),
  p => <DetailForm {...p} />,
  p => Object.keys(p)
);

@withRouter
@withItem
export default class CollectionDetail extends Component {
  state = { tab: null };
  render() {
    const {
      id,
      item,
      collection,
      onSave,
      onClone,
      pathname,
      query,
    } = this.props;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema);
    const currentTab = this.state.tab || Object.keys(schema)[0];

    return (
      <ContentLoader isLoading={id && !item}>
        <Flex>
          <Gateway into="navigation">
            <Menu.Item key="save">
              <a href="javascript:;" onClick={onSave}>
                <Button type="primary" style={{ margin: '0 -15px' }}>
                  <Icon type="save" /> Speichern
                </Button>
              </a>
            </Menu.Item>
            <Menu.Item key="clone">
              <a href="javascript:;" onClick={onClone}>
                <Button type="primary" style={{ margin: '0 -15px' }}>
                  <Icon type="copy" />
                </Button>
              </a>
            </Menu.Item>
            {keys.map(tab =>
              <Menu.Item
                key={tab}
                className={tab === currentTab && 'ant-menu-item-selected'}
              >
                <a onClick={() => this.setState({ tab })}>
                  {tab}
                </a>
              </Menu.Item>
            )}
          </Gateway>
          {Object.keys(schema).map(tab =>
            <HiddenForm
              {...this.props}
              item={item || {}}
              fields={schema[tab]}
              key={tab}
              visible={tab === currentTab}
              onCreate={onSave}
            />
          )}
        </Flex>
      </ContentLoader>
    );
  }
}
