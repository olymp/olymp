import React, { Component } from 'react';
import { styled } from 'olymp';
import { fade } from 'olymp-fela';

export default (options = {}) => Block => {
  const { isVoid, isAtomic, sidebar, label, category, icon, defaultNodes, props } = options;

  const StyledBlock = styled(({ theme, active }) => ({
    // border: active && `${theme.borderWidth}px ${theme.borderStyle} ${fade(theme.color)}`,
    outline: active && `${theme.borderWidth}px ${theme.borderStyle} ${fade(theme.color)}`,
    // outlineOffset: -1,
  }), p => <Block {...p} />, p => p);

  return class BaseDecorator extends Component {
    static slate = { isVoid: isVoid !== false, isAtomic: isAtomic !== false, sidebar, label, category, icon, defaultNodes };
    render() {
      const { node, editor, state, children } = this.props;

      const setData = data => {
        const transform = editor
          .getState()
          .transform()
          .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } })
          .apply();
        editor.onChange(transform);
      };
      const getData = (name, defaultValue) => {
        return node.data.get(name) || defaultValue;
      };
      const blockProps = (props || []).reduce((state, prop) => {
        if (getData(prop) !== undefined) state[prop] = getData(prop);
        return state;
      }, {});
      // Empty children!!
      const active = children.findIndex(child => parseInt(child.key, 10) === parseInt(state.selection.startKey, 10)) >= 0;
      return (
        <StyledBlock
          {...this.props}
          active={active}
          getData={getData}
          setData={setData}
          readOnly={editor.props.readOnly}
          {...blockProps}
        >
          {isVoid === false ? [children] : []}
        </StyledBlock>
      );
    }
  };
};
