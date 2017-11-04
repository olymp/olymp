import React from 'react';
import { Input, Select, Checkbox, InputNumber } from 'antd';
import {
  ColorEditor,
  DateEditor,
  DateRangeEditor,
  TimeRangeEditor,
  SuggestEditor,
} from 'olymp-ui';
import GeocodeEditor from 'olymp-google/edits/geocode';
import cn from 'classnames';
import { EditImage } from 'olymp-cloudinary';
import { DetailEdit } from '../../../edits';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  REMOVED: 'Papierkorb',
};

export default ({
  className,
  editorClassName,
  style,
  editorStyle,
  field,
  label,
  key,
  isActiveField,
}) => {
  const { idField, start, suggest } = field['@'];
  const type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;

  const editProps = {
    placeholder: label || null,
    style: { ...editorStyle, ...style },
    className: cn(editorClassName, className),
    key,
  };

  if (idField && idField.type) {
    if (idField.type.kind === 'LIST' && idField.type.ofType) {
      return (
        <DetailEdit
          {...editProps}
          mode="tags"
          typeName={idField.type.ofType.name}
        />
      );
    }
    return <DetailEdit {...editProps} typeName={idField.type.name} />;
  }
  if (type.kind === 'OBJECT') {
    if (type.name === 'Geocode') {
      return <GeocodeEditor {...editProps} />;
    }
  }
  if (suggest) {
    return (
      <SuggestEditor
        {...editProps}
        collection={suggest.arg0}
        field={suggest.arg1}
      />
    );
  }
  if (start) {
    if (type.name === 'Date') {
      return (
        <DateRangeEditor
          {...editProps}
          format="DD.MM.YYYY"
          style={{ width: '100%' }}
        />
      );
    }
    if (type.name === 'DateTime') {
      return (
        <DateRangeEditor
          {...editProps}
          format="DD.MM.YYYY HH:mm"
          showTime={{ format: 'HH:mm' }}
        />
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

  if (type.name === 'TimeRange' && isActiveField) {
    return <TimeRangeEditor {...editProps} />;
  } else if (type.name === 'TimeRange') {
    return 'Bearbeiten';
  }

  switch (type.name) {
    case 'Image':
      return (
        <EditImage {...editProps} style={{ maxWith: '100%' }} width="100%" />
      );
    case 'Boolean':
      return <Checkbox {...editProps}>{label}</Checkbox>;
    case 'Date':
      return <DateEditor {...editProps} format="DD.MM.YYYY" />;
    case 'DateTime':
      return (
        <DateEditor
          {...editProps}
          format="DD.MM.YYYY HH:mm"
          showTime={{ format: 'HH:mm' }}
        />
      );
    case 'Color':
      return <ColorEditor {...editProps} />;
    case 'Markdown':
      return <Input.TextArea {...editProps} /* autosize */ />;
    case 'Int':
      return <InputNumber {...editProps} placeholder={label || 0} />;

    default:
      return <div />;
  }
};
