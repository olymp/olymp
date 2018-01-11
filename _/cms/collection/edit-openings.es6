import React from 'react';
import { toClass, compose, withState } from 'recompose';
import { createComponent, Modal } from 'olymp-fela';
import { TimeRangesEditor } from 'olymp-ui';
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
  rule: ({ type }) => type.kind === 'LIST' && type.ofType.name === 'TimeRange',
  form: enhance(
    ({
      isOpen,
      setOpen,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...p
    }) => (
      <FormItem {...p}>
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
          <TimeRangesEditor style={{ padding: 20 }} {...p} />
        </Modal>
      </FormItem>
    ),
  ),
};
