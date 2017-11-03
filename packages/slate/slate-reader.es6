import React from 'react';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import marks from './defaults/marks';
import nodes from './defaults/nodes';

const renderNode = props =>
  nodes[props.node.type] ? nodes[props.node.type](props) : null;
const renderMark = props =>
  marks[props.mark.type] ? nodes[props.mark.type](props) : null;

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
