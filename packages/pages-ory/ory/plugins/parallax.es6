import React from 'react';
import { FaChevronUp } from 'olymp-icons';
import plugin from 'ory-editor-plugins-parallax-background';
import 'ory-editor-plugins-parallax-background/lib/index.css';

export default children => ({
  ...plugin(children),
  text: 'Parallax Hintergrund',
  description: 'Ein Hintergrund, der fixiert ist',
  IconComponent: <FaChevronUp />,
});
