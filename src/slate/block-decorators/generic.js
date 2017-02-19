import React from 'react';
import { cn } from '../../core/extern';
import useBlockBase from './base';
import useBlockAlign from './align';
import useBlockToolbar from './toolbar';
import useTagFilter from './toolbar/action/tag-filter';
import useBlockResize from './resize';

export const GenericBlock = (props) => {
  const { attributes, getData, children, renderToolbar, readOnly, toolbarStyle, className, style } = props;

  return (
    <div {...attributes} className={cn(className)} data-block-active={!readOnly} style={{ position: 'relative', width: '100%', ...(style || {}), display: 'inline-block' }}>
      {renderToolbar(toolbarStyle)}
      {children}
    </div>
  );
};

export const useGenericBlock = ({ label, category, editable = true, align, props, resize, actions, defaultNodes, tagSource, remove = true, move = true, add = true }) => (WrappedComponent) => {
  let component = props => <WrappedComponent {...props} />;

  component = useBlockToolbar({ actions, remove, move, add })(component);

  if (tagSource) component = useTagFilter(tagSource)(component);

  if (resize && typeof resize === 'object') component = useBlockResize(resize)(component);
  else if (resize) component = useBlockResize({ })(component);

  if (align && typeof align === 'object') component = useBlockAlign(align)(component);
  else if (align) component = useBlockAlign({ })(component);

  component = useBlockBase({ label, category, isVoid: !editable, props, defaultNodes })(component);
  return component;
};

