import React from 'react';
import { FaCode, FaBold, FaItalic, FaUnderline } from 'olymp-icons';
import I from '../components/icon';

export default [
  { type: 'bold', label: <I icon={FaBold} /> },
  { type: 'italic', label: <I icon={FaItalic} /> },
  { type: 'underlined', label: <I icon={FaUnderline} /> },
  // { type: 'center', label: <I icon={FaAlignCenter} /> },
  { type: 'code', label: <I icon={FaCode} /> },
];
