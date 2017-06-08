import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';

export default (options = {}) => Block => {
  const { isVoid, isAtomic, sidebar, label, category, icon, defaultNodes, props } = options;

  const StyledBlock = createComponent(({ theme, active }) => ({
    // border: active && `${theme.borderWidth}px ${theme.borderStyle} ${fade(theme.color)}`,
    outline: active && `2px ${theme.borderStyle} $(theme.color}`,
    // outlineOffset: -1,
  }), p => <Block {...p} />, p => Object.keys(p));

  return class BaseDecorator extends Component {
    static slate = { isVoid: isVoid !== false, isAtomic: isAtomic !== false, sidebar, label, category, icon, defaultNodes };
    setData = (data) => {
      const { node, editor } = this.props;
      const transform = editor
        .getState()
        .transform()
        .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } })
        .apply();
      editor.onChange(transform);
    };
    getData = (name, defaultValue) => {
      const { node } = this.props;
      return node.data.get(name) || defaultValue;
    };
    render() {
      const { node, editor, state, children } = this.props;

      const blockProps = (props || []).reduce((state, prop) => {
        const data = this.getData(prop);
        if (data !== undefined) state[prop] = data;
        return state;
      }, {});
      // Empty children!!
      const active = !editor.props.readOnly && children.findIndex(child => parseInt(child.key, 10) === parseInt(state.selection.startKey, 10)) >= 0;
      return (
        <StyledBlock
          {...this.props}
          active={active}
          getData={this.getData}
          setData={this.setData}
          readOnly={editor.props.readOnly}
          {...blockProps}
        >
          {isVoid === false ? [children] : []}
        </StyledBlock>
      );
    }
  };
};
