import React from 'react';
import Portal from 'react-portal';
import { Cloudinary } from '../../../cloudinary';

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
    component: ({ setData, getData }) => (
      <Portal key={getData('type')} closeOnEsc closeOnOutsideClick openByClickOn={(
        <a href="javascript:;">
          Bild wählen
        </a>
      )}>
        <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, zIndex: 1000, display: 'flex' }}>
          <Cloudinary multi={false} onSelect={x => setData({ value: x.length ? x[0] : null, y: console.log(x) })} />
        </div>
      </Portal>
    ),
    toggle: ({ setData }) => setData({ alignment: 'left' }),
    active: ({ alignment }) => alignment === 'left',
  }],
};
