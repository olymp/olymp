import React from 'react';
import { compose, toClass, withState } from 'recompose';
import SlateWriter from 'olymp-slate/slate-writer';
import { Button } from 'antd';
import FormItem from './form-item';

const enhance = compose(withState('isOpen', 'setOpen', false), toClass);

export default {
  rule: ({ innerType }) => innerType.name === 'Blocks',
  form: enhance(
    ({
      isOpen,
      setOpen,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      onChange,
      value,
      binding,
      label,
      children,
      ...p
    }) => (
      <FormItem label={label} {...p}>
        <Button.Group data-__field={dataField} data-__meta={dataMeta}>
          <Button
            type={isOpen === true ? 'primary' : 'default'}
            onClick={() => setOpen(!isOpen)}
          >
            Bearbeiten
          </Button>
          <Button onClick={() => setOpen('full')}>Vollbildmodus</Button>
        </Button.Group>

        {isOpen && (
          <SlateWriter
            onChange={onChange}
            value={value}
            binding={binding}
            placeholder={label || 'Hier Text eingeben!'}
            style={{ padding: 20 }}
            full={isOpen === 'full'}
            setFull={() => setOpen(false)}
          >
            {children}
          </SlateWriter>
        )}
      </FormItem>
    ),
  ),
};
