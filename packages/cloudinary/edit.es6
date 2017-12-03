import React from 'react';
import { Modal } from 'olymp-fela';
import { withState, withPropsOnChange, compose } from 'recompose';
import { isEmpty } from 'lodash';
import Mediathek from './views';

const enhance = compose(
  withState('isOpen', 'setOpen', false),
  withPropsOnChange(['value'], ({ value }) => ({
    value: (Array.isArray(value) ? value : [value]).filter(x => !isEmpty(x)),
  })),
);
export default renderFn =>
  enhance(props => {
    const { onChange, value, isOpen, setOpen, multi } = props;

    console.log(multi, value, isOpen);
    return (
      <div>
        <div onClick={() => setOpen(true)}>{renderFn(value, props)}</div>
        <Modal
          portal
          open={isOpen}
          onClose={() => setOpen(false)}
          width="90%"
          height="90%"
        >
          <Mediathek
            inModal
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
