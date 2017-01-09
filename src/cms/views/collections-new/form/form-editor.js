import React from 'react';
import { Input, Select, Checkbox } from 'antd';
import { DetailEditor, SlateEditor, DateEditor, SliderEditor, FormEditor } from './editors';
import Image from '../../../edits/image';

export default (type, name, props = {}, subField) => {
  if (subField && subField.type) {
    if (subField.type.kind === 'LIST' && subField.type.ofType) {
      return (
        <DetailEditor {...props} tags name={subField.type.ofType.name} />
      );
    } return (<DetailEditor {...props} name={subField.type.name} />);
  }
  if (type.kind === 'LIST') {
    if (type.ofType.name === 'String') {
      return <Select {...props} tags searchPlaceholder="Suche ..." />;
    } if (type.ofType.name.indexOf('Nested') === 0) {
      return <FormEditor {...props} name={type.ofType.name} type={type} />;
    } return null;
  }
  if (type.kind === 'OBJECT') {
    if (type.name === 'Image') {
      return <Image {...props} asImg style={{ maxWidth: 300, maxHeight: 300, width: 'initial' }} />;
    } return null;
  }
  if (type.kind === 'ENUM' && type.enumValues) {
    return (
      <Select {...props}>
        {type.enumValues.map(x => (
          <Select.Option key={x.name} value={x.name}>{x.name}</Select.Option>
        ))}
      </Select>
    );
  }
  switch (type.name) {
    case 'Json':
      return <SlateEditor {...props} placeholder={name} />;
    case 'Boolean':
      return <Checkbox {...props} />;
    case 'Date':
      return <DateEditor {...props} placeholder={name} format="DD.MM.YYYY" />;
    case 'DateTime':
      return <DateEditor {...props} placeholder={name} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;
    case 'Color':
      return <Input {...props} placeholder={name} type="color" addonBefore={<i className="fa fa-eyedropper" />} />;
    case 'Markdown':
      return <Input {...props} placeholder={name} type="textarea" autosize />;
    case 'Slug':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-globe" />} />;
    case 'Email':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-envelope-o" />} />;
    case 'PhoneNumber':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-phone" />} />;
    case 'Website':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-link" />} />;
    case 'TimeRange':
      return <SliderEditor {...props} />;
    /* case 'user':
      return type.fields.map(field => (
        <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
      )); */
    default:
      return <Input {...props} placeholder={name} />;
  }
};
