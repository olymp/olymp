import React from 'react';
import { gqlLoader } from 'olymp';
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

export const useGenericBlock = ({ label, category, editable = true, align, props, resize, actions, defaultNodes, remove = true, move = true, add = true, hasContent = false, placeholder }) => (WrappedComponent) => {
  let component = props => <WrappedComponent {...props} />;

  if (hasContent) {
    component = props => (
      <GenericBlock {...props}>
        {gqlLoader(hasContent, placeholder)(component)(props)}
      </GenericBlock>
    );
  }

  component = useBlockToolbar({ actions, type: 'fix', remove, move, add })(component);

  if (resize && typeof resize === 'object') component = useBlockResize(resize)(component);
  else if (resize) component = useBlockResize({ })(component);

  if (align && typeof align === 'object') component = useBlockAlign(align)(component);
  else if (align) component = useBlockAlign({ })(component);

  component = useBlockBase({ label, category, isVoid: !editable, props, defaultNodes })(component);
  return component;
};

