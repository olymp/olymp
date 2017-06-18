import React, { Component, PropTypes } from 'react';

const getSidebarTypes = blockTypes =>
  Object.keys(blockTypes)
    .filter(key => {
      const block = blockTypes[key];
      return block.slate && block.slate.sidebar !== false;
    })
    .map(type => ({ ...blockTypes[type].slate, type }));

export default (options = {}) => {
  const { marks, nodes } = options;
  let { blockTypes } = options;
  if (!blockTypes) blockTypes = {};
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
      /* onDocumentChange = (document, state) => {
      const blocks = document.getBlocks();
      const last = blocks.last();
      const newBlockTypes = { ...blockTypes, ...this.props.blockTypes };
      console.log(newBlockTypes, Object.keys(newBlockTypes).indexOf(last.type), Object.keys(newBlockTypes).indexOf(last.type) === -1);
      if (Object.keys(newBlockTypes).indexOf(last.type) === -1) return undefined;

      const normalized = state
        .transform()
        .collapseToEndOf(last)
        .splitBlock()
        .setBlock({
          type: 'line',
          isVoid: false,
          data: {},
        })
        .apply({
          save: false,
        });

      this.props.onChange(normalized);*/
      /* onBeforeChange = (state) => {
      const { document } = state;
      const newBlockTypes = { ...blockTypes, ...this.props.blockTypes };
      const blocks = document.getBlocks();
      const last = blocks.last();
      if (Object.keys(newBlockTypes).indexOf(last.type) === -1) return undefined;

      const normalized = state
        .transform()
        .collapseToEndOf(last)
        .splitBlock()
        .setBlock({
          type: 'line',
          isVoid: false,
          data: {},
        })
        .apply({
          save: false,
        });

      return normalized;
    }*/
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
