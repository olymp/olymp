import React from 'react';
import useBlockBase from './base';
import useBlockAlign from './align';
import useBlockToolbar from './toolbar';
import useBlockResize from './resize';

export const GenericBlock = (props) => {
  const { attributes, getData, isFocused, children, renderToolbar, readOnly, toolbarStyle, className, toolbarType, style } = props;
  if (toolbarType === 'fix') {
    return (
      <div {...attributes} className={className} data-block-active={!readOnly} style={{ position: 'relative', ...(style || {}) }}>
        {renderToolbar(toolbarStyle)}
        {children}
      </div>
    );
  }
  return (
    <div {...attributes} className={className} data-block-active={isFocused} style={{ position: 'relative', ...(style || {}) }}>
      {children}
    </div>
  );
};

export const useGenericBlock = ({ label, editable, align, props, resize, actions, defaultNodes }) => WrappedComponent => {
  let component = props => <WrappedComponent {...props} />;
  component = useBlockToolbar({ actions, type: 'fix', remove: true, move: true, add: true })(component);
  if (align && typeof align === 'object') component = useBlockAlign(align)(component);
  else if (align) component = useBlockAlign({ })(component);
  if (resize && typeof resize === 'object') component = useBlockResize(resize)(component);
  else if (resize) component = useBlockResize({ })(component);
  component = useBlockBase({ label, isVoid: !editable, props, defaultNodes })(component);
  return component;
};

