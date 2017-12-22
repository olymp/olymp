import React, { Component } from 'react';
import { debounce, get } from 'lodash';
import { withPropsOnChange, compose } from 'recompose';
import Plain from 'slate-plain-serializer';
import { Value } from 'slate';
import Base64 from 'slate-base64-serializer';
import createTOC from './create-toc';

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
    propagateChange = value => {
      this.base64 = Base64.serialize(value);
      if (this.base64 !== this.props.base64) {
        const json = value.toJSON();
        const { nodes } = json.document;
        let text = '';
        let title = null;
        let image = null;
        this.getAllBlocks(value.document.nodes, (node, parent) => {
          if (
            node.type === 'paragraph' &&
            (!parent ||
              (parent.type && parent.type.indexOf('heading') === -1)) &&
            node.text
          ) {
            text += `${node.text}\n`;
          }
          if (
            !title &&
            node.type &&
            node.type.indexOf('heading-') === 0 &&
            node.text
          ) {
            title = node.text;
          }
          if (!image && node.data && node.data.get('value')) {
            const img = Array.isArray(node.data.get('value'))
              ? node.data.get('value')[0]
              : node.data.get('value');
            if (img && img.url && img.url.indexOf('cloudinary') !== -1) {
              image = {
                width: img.width,
                height: img.height,
                url: img.url,
                crop: img.crop,
              };
            }
            console.log(image);
          }
        });
        const count = 355;
        const extract =
          text.slice(0, count) + (text.length > count ? '...' : '');
        // image, title, chapters
        return this.props.onChange({
          nodes,
          text,
          extract,
          title,
          image,
          toc: createTOC(value),
        });
      }
    };
    debouncedPropagateChange = debounce(this.propagateChange, 800, {
      leading: false,
      trailing: true,
    });
    onChange = value => {
      if (!this.props.onChange) {
        return;
      }
      this.setState({ value }, () => {
        this.debouncedPropagateChange(value);
      });
    };
    render() {
      const { value } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          value={value}
          onChange={this.onChange}
        />
      );
    }
  };

export default compose(
  withPropsOnChange(['value', 'signal'], ({ value, signal }) => {
    let state;
    if (value && Value.isValue(value)) {
      state = value;
    } else if (value && value.nodes) {
      const newValue = {};
      Object.keys(value || []).forEach(key => {
        if (key === 'nodes') {
          newValue[key] = getNodes(value[key]);
        } else {
          newValue[key] = value[key];
        }
      });
      state = Value.fromJSON({
        document: {
          nodes: newValue.nodes,
          kind: 'document',
          data: { signal },
        },
        kind: 'value',
      });
    } else {
      state = Plain.deserialize('');
    }
    return {
      value: state,
      base64: Base64.serialize(state),
      toc: value && value.toc,
    };
  }),
  stateWrapper,
);

const getNodes = nodes =>
  nodes.map(node => {
    const newNode = {};
    Object.keys(node).forEach(key => {
      if (key === 'ranges' || key === 'text') {
        if (!newNode.leaves) {
          newNode.leaves = [];
        }

        if (Array.isArray(node[key])) {
          newNode.leaves = [...newNode.leaves, ...node[key]];
        } else if (typeof node[key] === 'string') {
          newNode.leaves.push({ kind: 'leaf', text: node[key] });
        } else {
          newNode.leaves.push(node[key]);
        }
      } else {
        newNode[key] = node[key];
      }
    });

    if (newNode.nodes && newNode.nodes.length) {
      newNode.nodes = getNodes(newNode.nodes);
    }

    return newNode;
  });
