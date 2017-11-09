import React from 'react';
import { Image } from 'olymp-cloudinary';
import { Checkbox } from 'antd';
import { Plain, Raw } from 'slate';
import format from 'date-fns/format';

export default (value, field) => {
  if (!field) {
    return null;
  }

  if (
    (field.innerType.kind === 'SCALAR' && field.innerType.name !== 'Blocks') ||
    field.innerType.kind === 'ENUM'
  ) {
    switch (field.innerType.name) {
      case 'Date':
        return !!value && <span>{format(new Date(value), 'DD.MM.YYYY')}</span>;

      case 'DateTime':
        return (
          !!value && (
            <span>{`${format(new Date(value), 'DD.MM.YYYY, HH:mm')} Uhr`}</span>
          )
        );

      case 'Boolean':
        return (
          <Checkbox checked={value} disabled>
            {value ? 'Ja' : 'Nein'}
          </Checkbox>
        );

      default:
        return <span>{field.innerType.specialFields[value] || value}</span>;
    }
  } else if (field.innerType.kind === 'LIST') {
    if (value && value.length && value.map(x => x.name).join('').length > 0) {
      return value.map(x => x.name).join(', ');
    }
    if (value && value.length) {
      return `${value.length} ${value.length > 1 ? 'Elemente' : 'Element'}`;
    }
    return null;
  } else {
    switch (field.innerType.name) {
      case 'Image':
        return !!value && <Image value={value} />;

      case 'Blocks':
        return (
          !!value &&
          Plain.serialize(
            Raw.deserialize(JSON.parse(JSON.stringify(value)), { terse: true }),
          )
            .split('\n')
            .join(' ')
        );

      default:
        return !!value && <span>{value.name || 'Ja'}</span>;
    }
  }
};
