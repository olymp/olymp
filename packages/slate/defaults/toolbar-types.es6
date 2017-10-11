import React from 'react';
import { FaHeading, FaListOl, FaIndent, FaListUl } from 'olymp-icons';
import I from '../components/icon';

export default [
  {
    type: [
      'heading-one',
      'heading-two',
      'heading-three',
      'heading-four',
      'heading-five',
      'heading-six',
    ],
    label: <I icon={FaHeading} />,
    description: [
      'Überschrift 1',
      'Überschrift 2',
      'Überschrift 3',
      'Überschrift 4',
      'Überschrift 5',
      'Überschrift 6',
    ],
  },
  { type: 'block-quote', label: <I icon={FaIndent} /> },
  {
    type: 'numbered-list',
    label: <I icon={FaListOl} />,
    onClick: ({ state, onChange }) => {
      onChange(state.change().call(plugin.changes.wrapInList));
    },
  },
  {
    type: 'bulleted-list',
    label: <I icon={FaListUl} />,
    onClick: ({ state, onChange }) => {
      onChange(state.change().call(plugin.changes.wrapInList));
    },
  },
];
