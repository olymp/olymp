import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';

export default (options = {}) => Block => {
  const {
    isVoid,
    isAtomic,
    sidebar,
    label,
    category,
    icon,
    defaultNodes,
    props,
  } = options;

  const StyledBlock = createComponent(
    ({ active }) => ({
      outline: active && '2px solid rgba(48, 48, 48, 0.67)',
    }),
    p => <Block {...p} />,
    p => Object.keys(p)
  );

  return class BaseDecorator extends Component {
    static slate = {
      isVoid: isVoid !== false,
      isAtomic: isAtomic !== false,
      sidebar,
      label,
      category,
      icon,
      defaultNodes,
    };

    setData = data => {
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

    setActive = () => {
      const { node, editor } = this.props;
      const transform = editor
        .getState()
        .transform()
        .moveToRangeOf(node)
        .apply();
      editor.onChange(transform);
    };

    render() {
      const { node, editor, state, children } = this.props;
      const blockProps = (props || []).reduce((state, prop) => {
        const data = this.getData(prop);
        if (data !== undefined) state[prop] = data;
        return state;
      }, {});
      const active =
        !editor.props.readOnly &&
        children.findIndex(
          child =>
            parseInt(child.key, 10) === parseInt(state.selection.startKey, 10)
        ) >= 0;

      return (
        <StyledBlock
          {...this.props}
          active={active}
          getData={this.getData}
          setData={this.setData}
          setActive={this.setActive}
          readOnly={editor.props.readOnly}
          {...blockProps}
        >
          {isVoid === false ? [children] : []}
        </StyledBlock>
      );
    }
  };
};
