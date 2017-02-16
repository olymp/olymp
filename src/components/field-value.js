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
        return value ? moment(value).format('DD.MM.YYYY') : null;

      case 'DateTime':
        return value ? `${moment(value).format('DD.MM.YYYY, HH:mm')} Uhr` : null;

      case 'Boolean':
        return <Checkbox checked={value} disabled {...fieldProps}>{value ? 'Ja' : 'Nein'}</Checkbox>;

      default:
        return <span>{value}</span>;
    }
  } else if (meta.type.kind === 'LIST') {
    if (value && value.length && value.map(x => x.name).join('').length > 0) return <span>{value.map(x => x.name).join(', ')}</span>;
    if (value && value.length) return <span>{`${value.length} ${value.length > 1 ? 'Elemente' : 'Element'}`}</span>;
    return null;
  } else /* if (meta.type.kind === 'OBJECT') */ {
    switch (meta.type.name) {
      case 'Image':
        return value ? <Image value={value} {...fieldProps} /> : null;

      case 'Json':
        if (!value) return null;
        const raw = Raw.deserialize(JSON.parse(JSON.stringify(value)), { terse: true });
        return <span>{Plain.serialize(raw).split('\n').join(' ')}</span>;

      default:
        return value ? <span>{value.name || 'Ja'}</span> : null;
    }
  }
};

export default class FieldValue extends Component {
  render() {
    const {value, meta, fieldProps} = this.props;

    return resolveFieldValue(value, meta, fieldProps);
  }
}
