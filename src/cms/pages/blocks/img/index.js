import React from 'react';
import Portal from 'react-portal';
import { Cloudinary } from '../../../cloudinary';
import { styled } from 'olymp';

const CloudinaryEdit = styled(({ theme }) => ({
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
}), ({ setData, getData, className }) => (
  <Portal
    key={getData('type')}
    closeOnEsc
    closeOnOutsideClick
    openByClickOn={(
      <a href="javascript:;">
        Bild wählen
      </a>
    )}
  >
    <div className={className}>
      <div>
        <Cloudinary multi={false} onSelect={x => setData({ value: x.length ? x[0] : null })} />
      </div>
    </div>
  </Portal>
), p => p);

export default {
  // Meta-Data
  label: 'Test-Bild',
  category: 'Media',
  editable: false,
  // Component
  component: ({ attributes, className, getData }) => (
    <img {...attributes} className={className} x={console.log(getData('value'), getData('value', { url: 'http://placekitten.com/1000/300' }))} src={getData('value', { url: 'http://placekitten.com/1000/300' }).url} alt="" />
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
