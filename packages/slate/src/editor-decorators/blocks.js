import React, { Component, PropTypes } from 'react';

const getSidebarTypes = blockTypes =>
  Object.keys(blockTypes)
    .filter((key) => {
      const block = blockTypes[key];
      return block.slate && block.slate.sidebar !== false;
    })
    .map(type => ({ ...blockTypes[type].slate, type }));

export default (options = {}) => {
  const { marks, nodes } = options;
  let { blockTypes } = options;
  if (!blockTypes) {
    blockTypes = {};
  }
  return Editor =>
    class SlateBlocksDecorator extends Component {
      static propTypes = {
        sidebarTypes: PropTypes.array,
        blockTypes: PropTypes.object,
        marks: PropTypes.object,
        onChange: PropTypes.func,
        nodes: PropTypes.object,
        plugins: PropTypes.array,
      };
      static defaultProps = {
        plugins: [],
        blockTypes: {},
      };
      render() {
        const { sidebarTypes } = this.props;
        const newNodes = {
          ...(nodes || {}),
          ...(this.props.nodes || {}),
          ...this.props.blockTypes,
          ...blockTypes,
        };
        const newMarks = {
          ...(marks || {}),
          ...(this.props.marks || {}),
        };
        const newSidebarTypes = [
          ...(sidebarTypes || []),
          ...getSidebarTypes(blockTypes),
          ...getSidebarTypes(this.props.blockTypes),
        ];

        return (
          <Editor
            {...this.props}
            nodes={newNodes}
            marks={newMarks}
            sidebarTypes={newSidebarTypes}
          />
        );
      }
    };
};
