import React from 'react';
import { compose, toClass, withState } from 'recompose';
import { SlateWriter } from 'olymp-slate';
import { createComponent, Modal } from 'olymp-fela';
import { Button } from 'antd';
import FormItem from './form-item';

const Footer = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
  }),
  ({ onClose, className }) => (
    <div className={className}>
      <Button type="primary" onClick={onClose}>
        Übernehmen
      </Button>
    </div>
  ),
  p => Object.keys(p),
);

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
        <Button
          onClick={() => setOpen(true)}
          data-__field={dataField}
          data-__meta={dataMeta}
        >
          Bearbeiten
        </Button>

        <Modal
          footer={<Footer onClose={() => setOpen(false)} />}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <SlateWriter
            onChange={onChange}
            value={value}
            binding={binding}
            placeholder={label || 'Hier Text eingeben!'}
            style={{ padding: 20 }}
          >
            {children}
          </SlateWriter>
        </Modal>
      </FormItem>
    ),
  ),
};
