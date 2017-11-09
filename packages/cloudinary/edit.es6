import React from 'react';
import { Modal } from 'olymp-fela';
import { withState, withPropsOnChange, compose } from 'recompose';
import Mediathek from './views';

const enhance = compose(
  withState('isOpen', 'setOpen', false),
  withPropsOnChange(['value'], ({ value }) => ({
    value: Array.isArray(value) ? value : [value],
  })),
);
export default renderFn =>
  enhance(props => {
    const { onChange, value, isOpen, setOpen, multi } = props;

    return (
      <div>
        <div onClick={() => setOpen(true)}>{renderFn(value, props)}</div>
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
    );
  });
