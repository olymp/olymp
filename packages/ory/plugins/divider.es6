import React from 'react';
import { FaMinus } from 'olymp-icons';
import plugin from 'ory-editor-plugins-divider';
import 'ory-editor-plugins-divider/lib/index.css';

export default {
  ...plugin,
  text: 'Linie',
  description: 'Eine horizontale Linie',
  IconComponent: <FaMinus />,
};
