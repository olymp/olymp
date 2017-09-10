import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { Menu, Icon } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { withItem } from '../decorators';
import { DetailForm } from '../components';

export const getFormSchema = ({ fields }) =>
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
    width: '100%',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
    },
    '> ul': {
      zIndex: 1,
      marginBottom: 20,
    },
    '> form': {
      overflow: 'auto',
    },
  }),
  'div',
  [],
);

const HiddenForm = createComponent(
  ({ visible }) => ({
    display: visible ? 'block' : 'none',
  }),
  p => <DetailForm {...p} />,
  p => Object.keys(p),
);

@withRouter
@withItem
export default class CollectionDetail extends Component {
  state = { tab: null };
  render() {
    const { id, item, collection, onSave, onClone } = this.props;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema);
    const currentTab = this.state.tab || keys[0];

    return (
      <ContentLoader isLoading={id && !item}>
        <Flex>
          <Menu mode="horizontal" selectedKeys={[currentTab]}>
            <Menu.Item key="save">
              <Icon type="save" onClick={onSave} />
              <span onClick={onSave}>Speichern</span>
            </Menu.Item>
            <Menu.Item key="clone">
              <Icon type="copy" onClick={onClone} />
              <span onClick={onSave}>Klonen</span>
            </Menu.Item>
            {keys
              .map(tab => (
                <Menu.Item key={tab} className="right">
                  <span onClick={() => this.setState({ tab })}>{tab}</span>
                </Menu.Item>
              ))
              .reverse()}
          </Menu>

          {Object.keys(schema).map(tab => (
            <HiddenForm
              {...this.props}
              item={item || {}}
              fields={schema[tab]}
              key={tab}
              visible={tab === currentTab}
              onCreate={onSave}
            />
          ))}
        </Flex>
      </ContentLoader>
    );
  }
}
