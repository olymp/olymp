import React, { Component } from 'react';
import { debounce, get } from 'lodash';
import { withPropsOnChange, compose } from 'recompose';
import shortId from 'shortid';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';
import Base64 from './plugins/base64';

const stateWrapper = WrappedComponent =>
  class Slate extends Component {
    constructor(props) {
      super(props);
      this.signal = props.signal;
      this.base64 = props.base64;
      this.state = { value: props.value };
    }
    componentWillReceiveProps(newProps) {
      if (
        this.state.value !== newProps.value &&
        this.base64 !== newProps.base64 &&
        this.signal !== newProps.signal
      ) {
        this.signal = newProps.signal;
        this.base64 = newProps.base64;
        this.state.value = newProps.value;
      }
    }
    getAllBlocks = (nodes, mapper, parent, arr = []) =>
      nodes.reduce((state, node) => {
        arr.push(node);
        mapper(node, parent);
        if (node.nodes) {
          arr = this.getAllBlocks(node.nodes, mapper, node, arr);
        }
        return arr;
      }, arr);
    propagateChange = (value) => {
      this.base64 = Base64.serialize(value);
      if (this.base64 !== this.props.base64) {
        const json = value.toJSON();
        const nodes = json.document.nodes;
        let text = '';
        let title = null;
        let image = null;
        const chapters = [];
        const all = this.getAllBlocks(value.document.nodes, (node, parent) => {
          if (
            node.type === 'paragraph' &&
            (!parent || (parent.type && parent.type.indexOf('heading') === -1)) &&
            node.text
          ) {
            text += `${node.text}\n`;
          }
          if (!title && node.type && node.type.indexOf('heading-') === 0 && node.text) {
            title = node.text;
          }
          if (node.type && node.type.indexOf('heading-one') === 0) {
            chapters.push(node.text);
          }
          if (!image && node.data && node.data.get('value')) {
            const url =
              get(node.data.get('value'), '[0].url') || get(node.data.get('value'), 'url');
            if (url && url.indexOf('cloudinary') !== -1) {
              image = url;
            }
          }
        });
        const count = 355;
        const extract = text.slice(0, count) + (text.length > count ? '...' : '');
        const id = (value && value.id) || shortId.generate();
        // image, title, chapters
        return this.props.onChange({ id, nodes, text, extract, title, image, chapters });
      }
    };
    debouncedPropagateChange = debounce(this.propagateChange, 800, {
      leading: false,
      trailing: true,
    });
    onChange = (value) => {
      if (!this.props.onChange) {
        return;
      }
      this.setState({ value }, () => {
        this.debouncedPropagateChange(value);
      });
    };
    render() {
      const { value } = this.state;
      return <WrappedComponent {...this.props} value={value} onChange={this.onChange} />;
    }
  };

export default compose(
  withPropsOnChange(['value', 'id', 'signal'], ({ value, signal }) => {
    const state = value
      ? State.fromJSON({
        document: {
          nodes: value.nodes,
          kind: 'document',
          data: { signal },
        },
        kind: 'state',
      })
      : Plain.deserialize('');
    return {
      value: state,
      base64: Base64.serialize(state),
    };
  }),
  stateWrapper,
);
