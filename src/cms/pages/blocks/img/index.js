import React from 'react';
import Portal from 'react-portal';
import { Cloudinary, Image } from '../../../cloudinary';
import { styled } from 'olymp';
import { withState } from 'recompose';

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
}), ({ onChange, className }) => (
  <div className={className}>
    <div>
      <Cloudinary multi={false} onSelect={x => onChange(x.length ? x[0] : null)} />
    </div>
  </div>
), p => p);

const CloudinaryEdit = withState('isOpen', 'setOpen', false)(({ setData, isOpen, setOpen }) => (
  <a href="javascript:;" onClick={() => setOpen(true)}>
    Bild wählen
    <Portal isOpened={isOpen} onClose={() => setOpen(false)} closeOnEsc closeOnOutsideClick>
      <CloudinaryModal onChange={value => setData({ value }).then(() => setOpen(false))} />
    </Portal>
  </a>
));


export default {
  // Meta-Data
  label: 'Test-Bild',
  category: 'Media',
  editable: false,
  // Component
  component: ({ attributes, className, getData }) => (
    <Image {...attributes} className={className} value={getData('value', { url: 'http://placekitten.com/1000/300' })} alt="" />
  ),
  // Styles
  styles: {
    width: '100%',
    height: 'auto',
  },
  // Editor Plugins like onKeyDown
  plugin: { },
  // Block decorators like resize
  decorators: [],
  // Actions
  actions: [{
    type: 'small',
    icon: 'align-left',
    tooltip: 'Bild wählen',
    component: CloudinaryEdit,
    toggle: ({ setData }) => setData({ alignment: 'left' }),
    active: ({ alignment }) => alignment === 'left',
  }],
};
