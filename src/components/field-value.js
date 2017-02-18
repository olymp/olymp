import React, { Component } from 'react';
import { Image } from '../cms';
import { Checkbox } from 'antd';
import { Plain, Raw } from 'slate';
import moment from 'moment';

const resolveFieldValue = (value, meta, fieldProps) => {
  if (!meta) return null;

  if ((meta.type.kind === 'SCALAR' && meta.type.name !== 'Json') || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
        return !!value && <span>{moment(value).format('DD.MM.YYYY')}</span>;

      case 'DateTime':
        return !!value && <span>{`${moment(value).format('DD.MM.YYYY, HH:mm')} Uhr`}</span>;

      case 'Boolean':
        return <Checkbox checked={value} disabled {...fieldProps}>{value ? 'Ja' : 'Nein'}</Checkbox>;

      default:
        return value;
    }
  } else if (meta.type.kind === 'LIST') {
    if (value && value.length && value.map(x => x.name).join('').length > 0) return value.map(x => x.name).join(', ');
    if (value && value.length) return `${value.length} ${value.length > 1 ? 'Elemente' : 'Element'}`;
    return null;
  } else /* if (meta.type.kind === 'OBJECT') */ {
    switch (meta.type.name) {
      case 'Image':
        return !!value && <Image value={value} {...fieldProps} />;

      case 'Json':
        return !!value && Plain.serialize(Raw.deserialize(JSON.parse(JSON.stringify(value)), { terse: true })).split('\n').join(' ');

      default:
        return !!value && <span>{value.name || 'Ja'}</span>;
    }
  }
};

export default class FieldValue extends Component {
  render() {
    const {value, meta, fieldProps} = this.props;

    const content = resolveFieldValue(value, meta, fieldProps) || null;

    if (typeof content === 'string') return <span>{content}</span>;
    return content;
  }
}
