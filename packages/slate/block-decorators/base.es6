import React, { Component } from 'react';
import { createComponent } from 'react-fela';
// import dnd from './dnd';

export default (options = {}) => (Block) => {
  const {
    type,
    kind,
    isVoid,
    sidebar,
    actions,
    label,
    category,
    icon,
    defaultNodes,
    props,
  } = options;

  const StyledBlock = createComponent(
    ({ isSelected }) => ({
      outline: isSelected && '2px solid rgba(48, 48, 48, 0.67)',
    }),
    p => <Block {...p} />,
    p => Object.keys(p),
  );

  // @dnd
  class BaseDecorator extends Component {
    static slate = {
      type,
      kind,
      isVoid: isVoid !== false,
      actions,
      sidebar,
      label,
      category,
      icon,
      defaultNodes,
    };

    setData = (data) => {
      const { node, editor } = this.props;
      const transform = editor
        .getState()
        .change()
        .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } });
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
        .change()
        .moveToRangeOf(node);
      editor.onChange(transform);
    };

    render() {
      const { node, editor, state, isSelected, children } = this.props;
      const blockProps = (props || []).reduce((state, prop) => {
        const data = this.getData(prop);
        if (data !== undefined) {
          state[prop] = data;
        }
        return state;
      }, {});

      return (
        <StyledBlock
          {...this.props}
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
  }
  return BaseDecorator;
};
