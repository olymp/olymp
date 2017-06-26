import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { slugify, unflatten } from 'olymp';
import { Panel, SectionH } from 'olymp-ui';
import { createComponent, border } from 'olymp-fela';
import {
  Input,
  PageType,
  State,
  Parent,
  TagSelect,
  JsonInput,
  InputNumber,
} from '../../edits';
import Tree from './tree';

class PageForm extends Component {
  handleNameChange = (e) => {
    // set slug if unset
    const { form } = this.props;
    const value = e.target.value;
    form.setFieldsValue({ slug: `/${slugify(value, true)}` });
  };
  handleTypeChange = (e) => {
    // set slug if unset
    const { form } = this.props;
    if (e === 'MENU') {
      form.setFieldsValue({ parentId: null });
    }
  };
  render() {
    const { form, item, items, navigation, tab, onTabClick } = this.props;
    const tree = unflatten(
      items.map(({ id, name, parentId }) => ({
        value: id,
        label: name,
        parent: parentId,
        children: [],
      })),
      { id: 'value', parentId: 'parent' }
    );

    return (
      <Tabs
        activeKey={tab}
        onTabClick={onTabClick}
        size="small"
        tabBarStyle={{ marginBottom: 0 }}
      >
        <TabPane tab="Navigation" key="0">
          <Panel>
            <Tree items={navigation} selected={[item.id || item.pathname]} />
          </Panel>
        </TabPane>
        <TabPane tab="Seite" key="1">
          <Panel padding={16} alignLabel="left">
            <Input
              form={form}
              item={item}
              field="name"
              label="Name"
              onChange={this.handleNameChange}
              rules={['required']}
              type="text"
              size="large"
            />
            <Input
              form={form}
              item={item}
              field="slug"
              label="Slug"
              type="text"
              size="large"
            />
            <State
              form={form}
              item={item}
              field="state"
              label="Status"
              rules={['required']}
            />
            <PageType
              form={form}
              item={item}
              field="type"
              label="Art"
              size="large"
              onChange={this.handleTypeChange}
            />
            {(form.getFieldValue('type') || item.type) !== 'MENU' &&
              <Parent
                form={form}
                treeData={tree}
                item={item}
                field="parentId"
                label="Menü"
                placeholder="Übergeordnetes Menü"
                size="large"
              />}
            {(form.getFieldValue('type') || item.type) === 'LINK' &&
              <Input
                form={form}
                item={item}
                field="href"
                label="Ext. Link"
                type="text"
                size="large"
              />}
            {(form.getFieldValue('type') || item.type) === 'ALIAS' &&
              <Parent
                form={form}
                treeData={tree}
                item={item}
                field="aliasId"
                label="Alias"
                placeholder="Alias zu.."
                size="large"
              />}
            <SectionH
              title="Erweitert"
              description="Datenanbindung, Sortierung Unterseiten"
            />
            <Input
              form={form}
              item={item}
              field="binding.type"
              placeholder="typ"
              label="Bindungstyp"
              type="text"
              size="large"
            />
            <TagSelect
              form={form}
              item={item}
              options={['id', 'name', 'slug']}
              field="binding.fields"
              placeholder="+name, -id"
              label="Felder"
              size="large"
            />
            <JsonInput
              form={form}
              item={item}
              field="binding.query"
              label="Filter"
              size="large"
            />
            <TagSelect
              form={form}
              item={item}
              options={['+name', '-name']}
              field="sorting"
              placeholder="+name, -id"
              label="Sortieren"
              size="large"
            />
            <InputNumber
              form={form}
              item={item}
              field="order"
              label="Reihenfolge"
              size="large"
            />
          </Panel>
        </TabPane>
        <TabPane tab="Collection" key="2">
          <Panel paddingX={16}>
            Hier kommt bei Bindings quasi der Parent rein
          </Panel>
        </TabPane>
        {/* <TabPane tab="Text" key="2">
          <Panel paddingX={16}>
            <SlateTree form={form} item={item} field="blocks" label={null} />
          </Panel>
        </TabPane> */}
      </Tabs>
    );
  }
}
PageForm.propTypes = {
  item: PropTypes.object,
  form: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.arrayOf(PropTypes.object),
  tab: PropTypes.string,
  onTabClick: PropTypes.func,
};
PageForm.defaultProps = {
  item: {},
  items: [],
  navigation: [],
  tab: '0',
  onTabClick: key => console.log(key),
};
export default PageForm;

const TabPane = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.light,
    borderBottom: border(theme),
  }),
  Tabs.TabPane,
  p => Object.keys(p)
);
