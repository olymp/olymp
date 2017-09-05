import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { slugify, unflatten } from 'olymp-utils';
import { Panel, SectionH } from 'olymp-ui';
import {
  Input,
  PageType,
  State,
  Parent,
  TagSelect,
  JsonInput,
  InputNumber,
  TextArea,
} from '../../edits';

class PageForm extends Component {
  handleNameChange = e => {
    // set slug if unset
    const { form } = this.props;
    const value = e.target.value;
    form.setFieldsValue({ slug: `/${slugify(value, true)}` });
  };

  handleTypeChange = e => {
    // set slug if unset
    const { form } = this.props;
    if (e === 'MENU') {
      form.setFieldsValue({ parentId: null });
    }
  };

  render() {
    const { form, item, items } = this.props;
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
        <TextArea
          form={form}
          item={item}
          field="description"
          label="Beschreibung"
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
    );
  }
}
PageForm.propTypes = {
  item: PropTypes.object,
  form: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
};
PageForm.defaultProps = {
  item: {},
  form: {},
  items: [],
};
export default PageForm;
