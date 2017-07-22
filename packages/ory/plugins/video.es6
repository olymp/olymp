import React from 'react';
import { FaFilm } from 'olymp-icons';
import plugin from 'ory-editor-plugins-video';
import 'ory-editor-plugins-video/lib/index.css';

export default {
  ...plugin,
  text: 'Video',
  description: 'Vimeo oder Youtube-Video',
  IconComponent: <FaFilm />,
};
