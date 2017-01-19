import React from 'react';
import { cloudinaryUrl } from 'olymp';
import Image from '../cms/edits/image';
import { Checkbox } from 'antd';
import moment from 'moment';

export default (value, meta, fieldProps) => {
  if (!meta) return undefined;

  if ((meta.type.kind === 'SCALAR' && meta.type.name !== 'Json') || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
        return value ? moment(value).format('DD.MM.YYYY') : null;

      case 'DateTime':
        return value ? `${moment(value).format('DD.MM.YYYY, HH:mm')} Uhr` : null;

      case 'Boolean':
        return <Checkbox checked={value} disabled {...fieldProps}>{value ? 'Ja' : 'Nein'}</Checkbox>;

      default:
        return value;
    }
  } else if (meta.type.kind === 'LIST') {
    if (value && value.length && value.map(x => x.name).join('').length > 0) return value.map(x => x.name).join(', ');
    if (value && value.length) return `${value.length} ${value.length > 1 ? 'Elemente' : 'Element'}`;
    return '';
  } else /* if (meta.type.kind === 'OBJECT') */ {
    switch (meta.type.name) {
      case 'Image':
        return value ? <Image value={value} {...fieldProps} /> : null;

      default:
        return value ? (value.name || 'Ja') : null;
    }
  }
};
