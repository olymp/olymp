import React from 'react';
import { Modal } from 'olymp-fela';
import { withState } from 'recompose';
import Mediathek from './mediathek';

const transform = ({ id, url, crop, width, height, caption, source }) => ({
  id,
  url,
  crop,
  width,
  height,
  caption,
  source,
});
export default renderFn =>
  withState('isOpen', 'setOpen', false)(({ onChange, value, isOpen, setOpen, multi }) => {
    let v = [];
    if (!multi && value) {
      v = [value];
    }
    if (multi && value) {
      v = value;
    }

    return (
      <div onClick={() => setOpen(true)}>
        {renderFn(v)}

        <Modal open={isOpen} onClose={() => setOpen(false)}>
          <Mediathek
            multi={multi}
            onChange={(value = []) => {
              const v = value.map(transform);
              onChange(multi ? v : v[0]);
              setOpen(false);
            }}
            onClose={() => setOpen(false)}
            selected={v.map(({ id, crop }) => ({ id, crop }))}
          />
        </Modal>
      </div>
    );
  });
