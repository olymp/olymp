import React from 'react';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import marks from './defaults/marks';
import nodes from './defaults/nodes';

const plugins = [
  {
    schema: {
      nodes,
      marks,
    },
  },
];
const Reader = ({ children, schema, className, style, value, ...rest }) => (
  <div className={className} style={{ position: 'relative', ...style }}>
    {children}
    <Editor
      {...rest}
      state={value || Plain.deserialize('')}
      spellcheck={false}
      plugins={plugins}
      readOnly
      schema={schema}
      placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
    />
  </div>
);

export default useJsonState(getSchema(Reader));
