import React from 'react';

export default {
  bold: ({ children, attributes }) => <strong {...attributes}>{children}</strong>,
  code: ({ children, attributes }) => <code {...attributes}>{children}</code>,
  italic: ({ children, attributes }) => <em {...attributes}>{children}</em>,
  underlined: ({ children, attributes }) => <u {...attributes}>{children}</u>,
  // center: ({ children, attributes }) => <center {...attributes}>{children}</center>,
};
