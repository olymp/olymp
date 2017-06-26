import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { withItem } from '../decorators';
import { DetailForm } from '../components';
import { Form, Menu, Icon } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';

const getFormSchema = ({ fields }) =>
  fields.reduce((result, field) => {
    if (field.type.name === 'Blocks') {
      // if slate => own group
      result[upperFirst(field.name)] = [field];
    } else if (field.type.name === 'Image') {
      // if image => own group
      result[upperFirst(field.name)] = [field];
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
  () => ({
    display: 'flex',
    flexDirection: 'column',
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

const RightSubMenu = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.SubMenu {...p} />,
  p => Object.keys(p)
);
const RightMenuItem = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p)
);

@withRouter
@withItem
@Form.create()
export default class CollectionDetail extends Component {
  state = { page: null };
  render() {
    const { id, item, collection, data, onSave, onDelete } = this.props;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema).reverse();
    const key = this.state.key || Object.keys(schema)[0];
    return (
      <ContentLoader isLoading={id && !item}>
        <Flex>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[key]}
            mode="horizontal"
          >
            <Menu.Item key="save">
              <span onClick={onSave}>
                <Icon type="save" />Speichern
              </span>
            </Menu.Item>
            <Menu.Item key="remove">
              <span onClick={onDelete}>
                <Icon type="close" />Löschen
              </span>
            </Menu.Item>
            {keys.map(key =>
              (<RightMenuItem key={key}>
                <span onClick={() => this.setState({ key })}>
                  {key}
                </span>
              </RightMenuItem>)
            )}
            {/* <RightSubMenu title={<span><Icon type="setting" />Ansicht</span>}>
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </RightSubMenu>*/}
          </Menu>
          <br />
          <DetailForm
            {...this.props}
            item={item || {}}
            fields={schema[key]}
            onCreate={onSave}
          />
        </Flex>
      </ContentLoader>
    );
  }
}
