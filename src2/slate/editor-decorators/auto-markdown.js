import React, { Component, PropTypes } from 'react';
// State from: 14 Aug

const defaultEmptyFunc = () => null;
export default (options = {}) => {
  const { getMarkdownType } = options;
  return Editor => class SlateAutoMarkdownDecorator extends Component {
    static propTypes = {
      plugins: PropTypes.array,
      getMarkdownType: PropTypes.func,
    }
    static defaultProps = {
      plugins: [],
    }
    render() {
      const plugins = [...this.props.plugins, this];
      return (
        <Editor {...this.props} plugins={plugins} />
      );
    }

    getType = (chars) => {
      if (getMarkdownType && getMarkdownType(chars)) return getMarkdownType(chars);
      if (this.props.getMarkdownType && this.props.getMarkdownType(chars)) return this.props.getMarkdownType(chars);
      switch (chars) {
        case '*':
        case '-':
        case '+': return 'list-item';
        case '>': return 'block-quote';
        case '#': return 'heading-one';
        case '##': return 'heading-two';
        case '###': return 'heading-three';
        case '####': return 'heading-four';
        case '#####': return 'heading-five';
        case '######': return 'heading-six';
        default: return null;
      }
    }

    onKeyDown = (e, data, state) => {
      switch (data.key) {
        case 'space': return this.onSpace(e, state);
        case 'backspace': return this.onBackspace(e, state);
        case 'enter': return this.onEnter(e, state);
      }
    }

    onSpace = (e, state) => {
      if (state.isExpanded) return undefined;
      let { selection } = state;
      const { startText, startBlock, startOffset } = state;
      const chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '');
      const type = this.getType(chars);

      if (!type) return undefined;
      if (type === 'list-item' && startBlock.type === 'list-item') return undefined;
      e.preventDefault();

      let transform = state
        .transform()
        .setBlock(type);

      if (type === 'list-item') transform = transform.wrapBlock('bulleted-list');

      return transform
        .extendToStartOf(startBlock)
        .delete()
        .apply();
    }

    onBackspace = (e, state) => {
      if (state.isExpanded) return undefined;
      if (state.startOffset !== 0) return undefined;
      const { startBlock } = state;

      if (startBlock.type === 'paragraph') return undefined;
      e.preventDefault();

      let transform = state
        .transform()
        .setBlock('paragraph');

      if (startBlock.type === 'list-item') transform = transform.unwrapBlock('bulleted-list');
      return transform.apply();
    }

    onEnter = (e, state) => {
      if (state.isExpanded) return undefined;
      const { startBlock, startOffset, endOffset } = state;
      if (startOffset === 0 && startBlock.length === 0) return this.onBackspace(e, state);
      if (endOffset !== startBlock.length) return undefined;

      if (
        startBlock.type !== 'heading-one' &&
        startBlock.type !== 'heading-two' &&
        startBlock.type !== 'heading-three' &&
        startBlock.type !== 'heading-four' &&
        startBlock.type !== 'heading-five' &&
        startBlock.type !== 'heading-six' &&
        startBlock.type !== 'block-quote'
      ) {
        return undefined;
      }

      e.preventDefault();
      return state
        .transform()
        .splitBlock()
        .setBlock('paragraph')
        .apply();
    }
  };
};
