import React from 'react';
import { FaArrowsH } from 'olymp-icons';
import plugin from 'ory-editor-plugins-spacer';
import 'ory-editor-plugins-spacer/lib/index.css';

export default {
  ...plugin,
  text: 'Leerraum',
  description: 'Vergrößerbarer leerer Raum',
  IconComponent: <FaArrowsH />,
};
