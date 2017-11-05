import React from 'react';
import { Modal } from 'olymp-fela';
import { withState, withPropsOnChange, compose } from 'recompose';
import Mediathek from './mediathek';

const enhance = compose(
  withState('isOpen', 'setOpen', false),
  withPropsOnChange(['value'], ({ value }) => ({
    value: Array.isArray(value) ? value : [value],
  })),
);
export default renderFn =>
  enhance(({ onChange, value, isOpen, setOpen, multi }) => (
    <div>
      <div onClick={() => setOpen(true)}>{renderFn(value, multi)}</div>
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <Mediathek
          multi={multi}
          onChange={(value = []) => {
            onChange(multi ? value : value[0]);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
          value={value}
        />
      </Modal>
    </div>
  ));
