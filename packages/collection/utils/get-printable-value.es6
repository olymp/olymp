import React from 'react';
import { Image } from 'olymp-cloudinary';
import { Modal } from 'olymp-fela';
import { Checkbox, Button } from 'antd';
import { compose, withState } from 'recompose';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';
import format from 'date-fns/format';

const enhance = compose(withState('isOpen', 'setIsOpen', false));
const Slate = enhance(({ children, isOpen, setIsOpen }) => (
  <div>
    <Button
      onClick={e => {
        e.stopPropagation();
        setIsOpen(true);
      }}
    >
      Show
    </Button>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      {children}
    </Modal>
  </div>
));

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

      case 'Color':
        return <span style={{ color: value }}>{value}</span>;

      case 'String':
        return field.type.kind === 'LIST' ? (
          <span>{(value || []).join(', ')}</span>
        ) : (
          <span>{field.innerType.specialFields[value] || value}</span>
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
        return !!value && <Image value={value} width={50} height={50} />;

      case 'Blocks':
        const text =
          !!value &&
          Plain.serialize(
            Value.fromJSON({
              document: value,
              kind: 'value',
            }),
          );
        return value && text ? <Slate>{text}</Slate> : <i>Kein Inhalt</i>;

      default:
        return !!value && <span>{value.name || 'Ja'}</span>;
    }
  }
};
