import React, { Component } from 'react';
import Toolbar from './toolbar';

export default (options = {}) => Block => {
  const { actions = () => [], remove, move, add } = options;

  return class BlockToolbarDecorator extends Component {
    static slate = Block.slate;
    static defaultProps = {
      actions: [],
    };

    state = {
      menu: null,
    };

    onOpen = ({ firstChild: menu }) => {
      this.setState({ menu });
    };

    onChangeType = ({ key }) => {
      const { editor, readOnly, node, state } = this.props;
      const blockTypes = editor.props.sidebarTypes || [];
      const newBlock = blockTypes.find(({ type }) => type === key) || node;
      editor.onChange(
        state
          .transform()
          .setNodeByKey(node.key, {
            type: newBlock.type,
            isVoid: newBlock.isVoid,
          })
          .apply()
      );
    };

    render() {
      const { children, ...rest } = this.props;

      return (
        <Block
          {...rest}
          renderToolbar={style =>
            <Toolbar
              {...rest}
              style={style}
              actions={[...this.props.actions, ...actions(this.props)]}
              add={add}
              remove={remove}
              move={move}
            />}
        >
          {children}
        </Block>
      );
    }
  };
};
