import React, { Component } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { unflatten } from 'olymp-utils';
import { Panel } from 'olymp-fela';
import { Input, PageType, State, Parent, InputNumber, TextArea } from './edits';

class PageForm extends Component {
  handleNameChange = e => {
    // set slug if unset
    const { form } = this.props;
    const { value } = e.target;
    form.setFieldsValue({ slug: `/${slugify(value)}` });
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
      { id: 'value', parentId: 'parent' },
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
        />
        <Input form={form} item={item} field="slug" label="Slug" type="text" />
        <TextArea
          form={form}
          item={item}
          field="description"
          label="Beschreibung"
          type="text"
        />
        <State form={form} item={item} field="state" label="Status" />
        <PageType
          form={form}
          item={item}
          field="type"
          label="Art"
          onChange={this.handleTypeChange}
        />
        {(form.getFieldValue('type') || item.type) !== 'MENU' && (
          <Parent
            form={form}
            treeData={tree}
            item={item}
            field="parentId"
            label="Menü"
            placeholder="Übergeordnetes Menü"
            initialValue={form.getFieldValue('parentId')}
          />
        )}
        {(form.getFieldValue('type') || item.type) === 'LINK' && (
          <Input
            form={form}
            item={item}
            field="href"
            label="Ext. Link"
            type="text"
          />
        )}
        {(form.getFieldValue('type') || item.type) === 'ALIAS' && (
          <Parent
            form={form}
            treeData={tree}
            item={item}
            field="aliasId"
            label="Alias"
            placeholder="Alias zu.."
          />
        )}
        {/* <Toggle form={form} item={item} field="isMega" label="Mega" />
        <SectionHeading
          level={2}
          description="Datenanbindung, Sortierung Unterseiten"
        >
          Erweitert
        </SectionHeading>
        <Input
          form={form}
          item={item}
          field="binding.type"
          placeholder="typ"
          label="Bindungstyp"
          type="text"
        />
        <Input
          form={form}
          item={item}
          field="binding.groupBy"
          placeholder="group"
          label="Gruppieren"
          type="text"
        />
        <TagSelect
          form={form}
          item={item}
          options={['id', 'name', 'slug']}
          field="binding.fields"
          placeholder="+name, -id"
          label="Felder"
        />
        <JsonInput
          form={form}
          item={item}
          field="binding.query"
          label="Filter"
        />
        <TagSelect
          form={form}
          item={item}
          options={['+name', '-name']}
          field="sorting"
          placeholder="+name, -id"
          label="Sortieren"
        /> */}
        <InputNumber
          form={form}
          item={item}
          field="order"
          label="Reihenfolge"
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
