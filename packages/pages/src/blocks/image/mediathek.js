import React from 'react';
import Portal from 'react-portal';
import { Cloudinary } from 'olymp-cloudinary';
import { styled } from 'olymp';
import { withState } from 'recompose';

export default withState('isOpen', 'setOpen', false)(({ setData, getData, isOpen, setOpen, multi }) => (
  <div onClick={() => setOpen(true)}>
    {multi ? 'Bilder' : 'Bild'} wählen
    <Portal isOpened={isOpen} onClose={() => setOpen(false)} closeOnEsc closeOnOutsideClick>
      <CloudinaryModal
        multi={multi}
        onChange={value => setData({ value }).then(() => setOpen(false))}
        onClose={() => setOpen(false)}
        selected={getData('value', []).map(image => image.id)}
      />
    </Portal>
  </div>
));

const CloudinaryModal = styled(({ theme }) => ({
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
  }
}), ({ onChange, onClose, className, selected, multi }) => (
  <div className={className}>
    <div>
      <Cloudinary
        multi={multi}
        onSelect={onChange}
        onClose={onClose}
        selected={selected}
      />
    </div>
  </div>
), p => p);
