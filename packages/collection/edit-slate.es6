import React from 'react';
import { compose, toClass, withState } from 'recompose';
import { SlateWriter } from 'olymp-slate';
import { createComponent, Modal } from 'olymp-fela';
import { Button } from 'antd';
import FormItem from './form-item';

const Label = createComponent(
  () => ({
    display: 'block',
  }),
  'div',
  p => Object.keys(p),
);

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

const Slate = ({ children, onChange, value, binding, label }) => (
  <SlateWriter
    onChange={onChange}
    value={value}
    binding={binding}
    placeholder={label || 'Hier Text eingeben!'}
    style={{ padding: 20 }}
  >
    {children}
  </SlateWriter>
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
      ...p
    }) => (
      <FormItem {...p}>
        <Label
          onClick={() => setOpen(true)}
          data-__field={dataField}
          data-__meta={dataMeta}
        >
          Bearbeiten
        </Label>

        <Modal
          footer={<Footer onClose={() => setOpen(false)} />}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <Slate {...p} />
        </Modal>
      </FormItem>
    ),
  ),
  full: toClass(Slate),
};
