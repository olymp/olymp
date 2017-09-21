import React, { Component } from 'react';
import { resetKeyGenerator, State } from 'slate';
import { debounce } from 'lodash';
import Plain from 'slate-plain-serializer';
import { batch } from '../utils/batch';
import { getHeaders } from '../utils/get-text';

const parseValue = (v, initialState) => {
  resetKeyGenerator();
  if (!v) {
    return Plain.deserialize('');
  }
  const value = JSON.parse(JSON.stringify(v));
  try {
    return State.fromJSON({ document: value, kind: 'state' });
  } catch (err) {
    console.error('Couldnt parse value in slate', err);
    return initialState ? parseValue(initialState, undefined) : Plain.deserialize('');
  }
};

const defaultGetValue = ({ value }) => value;
const defaultChangeValue = ({ onChange }, value, raw) => (onChange ? onChange(value, raw) : null);

export default (
  { getValue = defaultGetValue, changeValue = defaultChangeValue, initialState } = {},
) => Editor =>
  class SlateStateDecorator extends Component {
    static propTypes = {};
    isFocused = false;
    batch = batch(300);
    rawValue = null;

    constructor(props) {
      super();
      this.rawValue = getValue(props);
      this.state = {
        editorState: parseValue(this.rawValue, initialState),
      };
    }

    componentWillReceiveProps(props) {
      const newValue = getValue(props);
      const oldValue = getValue(this.props);
      if (newValue !== oldValue && this.rawValue !== newValue) {
        this.rawValue = newValue;
        this.setState({
          editorState: parseValue(newValue, undefined),
        });
      }
    }

    debouncedChange = debounce(() => {
      const { onChangeHeadings } = this.props;
      const rawValue = this.rawValue;
      // Flatten & filter
      const flattenNodes = (nodes, level = 0) =>
        nodes.reduce((arr, node) => {
          const { type, kind, text } = node;
          let newArr = [...arr];
          const newNode = { ...node };
          if (newNode.nodes) {
            newArr = arr.concat(flattenNodes(newNode.nodes, level + 1));
            delete newNode.nodes;
          }

          // Filter empty Blocks
          if (
            !(type === 'paragraph') &&
            !(type === 'paragraph') &&
            !(kind === 'text' && text === '')
          ) {
            newArr.push(newNode);
          }

          return newArr;
        }, []);

      if (rawValue && rawValue.nodes && flattenNodes(rawValue.nodes).length) {
        if (onChangeHeadings) {
          onChangeHeadings(getHeaders(rawValue.nodes));
        }
        changeValue(this.props, rawValue);
      } else {
        if (onChangeHeadings) {
          onChangeHeadings(null);
        }
        changeValue(this.props, null);
      }
    }, 1000);

    changeValue = (state) => {
      const value = state;
      this.setState({ editorState: value });
      if (changeValue) {
        const rawValue = value.toJSON().document;
        // if (JSON.stringify(this.rawValue) !== JSON.stringify(rawValue)) {
        this.rawValue = rawValue;
        this.debouncedChange();
        // }
      }
    };

    render() {
      const { editorState } = this.state;
      return <Editor {...this.props} value={editorState} onChange={this.changeValue} />;
    }
  };
