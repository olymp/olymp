import React from 'react';
import { FaCamera } from 'olymp-icons';
import plugin from 'ory-editor-plugins-image';
import 'ory-editor-plugins-image/lib/index.css';

export default {
  ...plugin,
  text: 'Bild',
  description: 'Ein Bild als URL oder aus der Mediathek',
  IconComponent: <FaCamera />,
};
