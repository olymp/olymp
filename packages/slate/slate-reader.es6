import React from 'react';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import marks from './defaults/marks';
import nodes from './defaults/nodes';

const renderNode = ({ node }) => {
  const X = nodes[node.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};
const renderMark = ({ mark }) => {
  const X = marks[mark.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};

const plugins = [
  {
    renderNode,
    renderMark,
  },
];

const Reader = ({
  children,
  schema,
  renderNode,
  className,
  style,
  value,
  ...rest
}) => (
  <div className={className} style={{ position: 'relative', ...style }}>
    {children}
    <Editor
      {...rest}
      className="slate-editor slate-reader"
      value={value || Plain.deserialize('')}
      spellcheck={false}
      plugins={plugins}
      readOnly
      renderNode={renderNode}
      placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
    />
  </div>
);

export default useJsonState(getSchema(Reader));
