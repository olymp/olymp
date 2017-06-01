import React from 'react';

export default {
  // Meta-Data
  label: 'Test-Bild',
  category: 'Media',
  editable: false,
  // Component
  component: ({ attributes, className }) => (
    <img {...attributes} className={className} src="http://placekitten.com/1000/300" alt="" />
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
    toggle: ({ setData }) => setData({ alignment: 'left' }),
    active: ({ alignment }) => alignment === 'left',
  }],
};
