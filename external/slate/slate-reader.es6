import React from 'react';
import { withPropsOnChange, compose, withProps } from 'recompose';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import marks from './defaults/marks';
import nodes from './defaults/nodes';
import HeadingId from './plugins/heading-id';

const renderNode = props => {
  const X = nodes[props.node.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};
const renderMark = props => {
  const X = marks[props.mark.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};

const enhance = compose(
  useJsonState,
  getSchema,
  withPropsOnChange('plugins', ({ plugins = [] }) => ({
    plugins: [
      ...plugins,
      HeadingId({}),
      {
        renderNode,
        renderMark,
      },
    ],
  })),
  withProps(({ onChange }) => ({
    onChange: change => onChange(change.value),
  })),
);
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
      readOnly
      renderNode={renderNode}
      placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
    />
  </div>
);

export default enhance(Reader);
