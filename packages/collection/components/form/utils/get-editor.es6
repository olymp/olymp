import React, { Component } from 'react';
import { Input, Select, Checkbox, InputNumber } from 'antd';
import {
  ColorEditor,
  DateEditor,
  DateRangeEditor,
  TimeRangeEditor,
  TimeRangesEditor,
  TagsEditor,
  SuggestEditor,
  GeocodeEditor,
} from 'olymp-ui';
import { withPropsOnChange } from 'recompose';
import { StatelessSlateMate } from 'olymp-slate';
import Navigator from 'olymp-slate/navigator';
import JsonEditor from 'olymp-slate/json-editor';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';
import { cn } from 'olymp-utils';
import { ImageEdit } from 'olymp-cloudinary';
import { FormListEdit, DetailEdit } from '../../../edits';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  REMOVED: 'Papierkorb',
};
const edits = [type => type.kind === 'OBJECT' && type.name === 'Image' && ImageEdit];

@withPropsOnChange(['value'], ({ value }) => ({
  value: State.isState(value)
    ? value
    : value
      ? State.fromJSON({ document: value.document || value, kind: 'state' })
      : Plain.deserialize(''),
}))
class Slate extends Component {
  render() {
    const { label } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'rows' }}>
        <div>
          <Navigator {...this.props} />
        </div>
        <div>
          <JsonEditor {...this.props} />
        </div>
        <StatelessSlateMate
          {...this.props}
          placeholder={label || 'Hier Text eingeben!'}
          style={{ borderBottom: '1px solid #e9e9e9', flex: 1 }}
        />
      </div>
    );
  }
}

export default ({ className, editorClassName, style, editorStyle, field, label, key }) => {
  const { idField, start, suggest } = field['@'];
  const { name } = field;
  const type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;

  const editProps = {
    placeholder: label || null,
    style: { ...editorStyle, ...style },
    className: cn(editorClassName, className),
    key,
  };

  for (let i = 0; i < edits.length; i += 1) {
    const Edit = edits[i](type);
    if (Edit) {
      return <Edit {...editProps} />;
    }
  }

  if (idField && idField.type) {
    if (idField.type.kind === 'LIST' && idField.type.ofType) {
      return <DetailEdit {...editProps} tags typeName={idField.type.ofType.name} />;
    }
    return <DetailEdit {...editProps} typeName={idField.type.name} />;
  }
  if (type.kind === 'LIST') {
    if (type.ofType.name === 'TimeRange') {
      return <TimeRangesEditor {...editProps} />;
    }
    if (type.ofType.name === 'String') {
      if (name === 'tags') {
        return <TagsEditor {...editProps} searchPlaceholder="Suche ..." />;
      }
      return <Select {...editProps} mode="tags" searchPlaceholder="Suche ..." />;
    }
    if (type.ofType.name.indexOf('Nested') === 0) {
      return <FormListEdit {...editProps} typeName={type.ofType.name} type={type} />;
    }
    return null;
  }
  if (type.kind === 'OBJECT') {
    if (type.name === 'Geocode') {
      return <GeocodeEditor {...editProps} />;
    }

    return null;
  }
  if (suggest) {
    return <SuggestEditor {...editProps} collection={suggest.arg0} field={suggest.arg1} />;
  }
  if (start) {
    if (type.name === 'Date') {
      return <DateRangeEditor {...editProps} format="DD.MM.YYYY" />;
    }
    if (type.name === 'DateTime') {
      return (
        <DateRangeEditor {...editProps} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />
      );
    }
  }
  if (type.kind === 'ENUM' && type.enumValues) {
    let resolveName = item => item;

    if (type.name === 'DOCUMENT_STATE') {
      resolveName = item => states[item];
    }

    return (
      <Select {...editProps}>
        {type.enumValues.map(x => (
          <Select.Option key={x.name} value={x.name}>
            {resolveName(x.name)}
          </Select.Option>
        ))}
      </Select>
    );
  }

  switch (type.name) {
    case 'Blocks':
      return <Slate {...editProps} label={label} />;
    case 'Boolean':
      return <Checkbox {...editProps}>{label}</Checkbox>;
    case 'Date':
      return <DateEditor {...editProps} format="DD.MM.YYYY" />;
    case 'DateTime':
      return <DateEditor {...editProps} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;
    case 'Color':
      return <ColorEditor {...editProps} />;
    case 'Markdown':
      return <Input {...editProps} type="textarea" autosize />;
    case 'Slug':
      return <Input {...editProps} />;
    case 'Email':
      return <Input {...editProps} />;
    case 'PhoneNumber':
      return <Input {...editProps} />;
    case 'Website':
      return <Input {...editProps} />;
    case 'Int':
      return <InputNumber {...editProps} placeholder={label || 0} />;
    case 'TimeRange':
      return <TimeRangeEditor {...editProps} />;
    /* case 'user':
        return type.fields.map(field => (
          <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
        )); */
    default:
      return <Input {...editProps} />;
  }
};
