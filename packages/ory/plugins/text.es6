import React from 'react';
import { FaFileAlt } from 'olymp-icons';
import plugin from 'ory-editor-plugins-slate';
import 'ory-editor-plugins-slate/lib/index.css';

export default children => ({
  ...plugin(children),
  text: 'Text',
  description: 'Formatierbarer Text',
  IconComponent: <FaFileAlt />,
});
