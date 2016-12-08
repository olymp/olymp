import React from 'react';
import useBlockBase from './base';
import useBlockAlign from './align';
import useBlockToolbar from './toolbar';
import useBlockResize from './resize';

export const GenericBlock = (props) => {
  const { attributes, getData, isFocused, children, renderToolbar, readOnly, toolbarStyle, className, toolbarType } = props;
  if (toolbarType === 'fix') {
    return (
      <div {...attributes} className={className} data-block-active={!readOnly} style={{ position: 'relative' }}>
        {renderToolbar(toolbarStyle)}
        {children}
      </div>
    );
  }
  return (
    <div {...attributes} className={className} data-block-active={isFocused} style={{ position: 'relative' }}>
      {children}
    </div>
  );
};

export const useGenericBlock = ({ label, editable, align, props, resize, actions }) => WrappedComponent => {
  let component = props => <WrappedComponent {...props} />;
  component = useBlockBase({ label, isVoid: !editable, props })(component);
  if (align) component = useBlockAlign({ })(component);
  if (resize) component = useBlockResize({ })(component);
  component = useBlockToolbar({ actions, type: 'fix', remove: true, move: true })(component);
  return component;
};

