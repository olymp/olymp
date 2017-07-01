import React from 'react';
import Portal from 'react-portal';
import { Cloudinary } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import { withState } from 'recompose';

const CloudinaryModal = createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: theme.boxShadow,
    border: `1px solid ${theme.dark4}`,
    backgroundColor: theme.dark1,
    '> div': {
      position: 'absolute',
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      display: 'flex',
      backgroundColor: theme.light,
    },
  }),
  ({ onChange, onClose, className, selected, multi }) =>
    (<div className={className}>
      <div>
        <Cloudinary
          multi={multi}
          onSelect={onChange}
          onClose={onClose}
          selected={selected}
        />
      </div>
    </div>),
  p => Object.keys(p)
);

const transform = ({ id, url, crop, width, height, caption, source }) => ({
  id,
  url,
  crop,
  width,
  height,
  caption,
  source,
});
export default withState(
  'isOpen',
  'setOpen',
  false
)(({ onChange, value, isOpen, setOpen, multi, renderFn }) => {
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
      <Portal
        isOpened={isOpen}
        onClose={() => setOpen(false)}
        closeOnEsc
        closeOnOutsideClick
      >
        <CloudinaryModal
          multi={multi}
          onChange={(value = []) => {
            const v = value.map(transform);
            onChange(multi ? v : v[0]);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
          selected={v.map(({ id, crop }) => ({ id, crop }))}
        />
      </Portal>
    </div>
  );
});
