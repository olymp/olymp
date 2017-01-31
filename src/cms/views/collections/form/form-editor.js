import React from 'react';
import { Input, Select, Checkbox } from 'antd';
import { DetailEditor, SlateEditor, DateEditor, SliderEditor, FormEditor, DateRange } from './editors';
import { Image, TagSelect } from '../../../edits';
import ColorEditor from '../../../edits/color';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

export default (field, label, props = {}) => {
  const { idField, start } = field['@'];
  const { type, name } = field;
  if (idField && idField.type) {
    if (idField.type.kind === 'LIST' && idField.type.ofType) {
      return (
        <DetailEditor {...props} placeholder={label} tags typeName={idField.type.ofType.name} />
      );
    } return (<DetailEditor {...props} placeholder={label} typeName={idField.type.name} />);
  }
  if (type.kind === 'LIST') {
    if (type.ofType.name === 'String') {
      if (name === 'tags') {
        return <TagSelect {...props} placeholder={label} searchPlaceholder="Suche ..." />;
      }
      return <Select {...props} placeholder={label} tags searchPlaceholder="Suche ..." />;
    } if (type.ofType.name.indexOf('Nested') === 0) {
      return <FormEditor {...props} placeholder={label} typeName={type.ofType.name} type={type} />;
    } return null;
  }
  if (type.kind === 'OBJECT') {
    if (type.name === 'Image') {
      return <Image {...props} asImg mode="fit" retina style={{ maxWidth: 300, maxHeight: 300 }} />;
    } return null;
  }
  if (start) {
    if (type.name === 'Date') return <DateRange {...props} format="DD.MM.YYYY" />;
    if (type.name === 'DateTime') return <DateRange {...props} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;
  }
  if (type.kind === 'ENUM' && type.enumValues) {
    let resolveName = item => item;

    if (type.name === 'DOCUMENT_STATE') {
      resolveName = item => states[item];
    }

    return (
      <Select {...props} placeholder={label}>
        {type.enumValues.map(x => (
          <Select.Option key={x.name} value={x.name}>{resolveName(x.name)}</Select.Option>
        ))}
      </Select>
    );
  }
  switch (type.name) {
    case 'Json':
      return <SlateEditor {...props} placeholder={label} />;
    case 'Boolean':
      return <Checkbox {...props} />;
    case 'Date':
      return <DateEditor {...props} placeholder={label} format="DD.MM.YYYY" />;
    case 'DateTime':
      return <DateEditor {...props} placeholder={label} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;
    case 'Color':
      return <ColorEditor {...props} placeholder={label} addonBefore={<i className="fa fa-eyedropper" />} />;
    case 'Markdown':
      return <Input {...props} placeholder={label} type="textarea" autosize />;
    case 'Slug':
      return <Input {...props} placeholder={label} addonBefore={<i className="fa fa-globe" />} />;
    case 'Email':
      return <Input {...props} placeholder={label} addonBefore={<i className="fa fa-envelope-o" />} />;
    case 'PhoneNumber':
      return <Input {...props} placeholder={label} addonBefore={<i className="fa fa-phone" />} />;
    case 'Website':
      return <Input {...props} placeholder={label} addonBefore={<i className="fa fa-link" />} />;
    case 'TimeRange':
      return <SliderEditor {...props} />;
    /* case 'user':
      return type.fields.map(field => (
        <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
      )); */
    default:
      return <Input {...props} placeholder={label} />;
  }
};
