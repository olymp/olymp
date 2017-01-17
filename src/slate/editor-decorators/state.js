import React, { Component } from 'react';
import { Raw, Plain, resetKeyGenerator } from 'slate';
import { batch } from '../utils/batch';

const parseValue = (v, initialState, terse) => {
  resetKeyGenerator();
  if (!v) return Plain.deserialize('');
  const value = JSON.parse(JSON.stringify(v));
  try { return Raw.deserialize(value, { terse }); }
  catch(err1) {
    try { return Raw.deserialize(value, { terse: !terse }); }
    catch(err2) {
      console.error('Couldnt parse value in slate', err1, err2);
      return initialState ? parseValue(initialState, undefined, { terse }) : Plain.deserialize('');
    }
  }
};

const defaultGetValue = ({ value }) => value;
const defaultChangeValue = ({ onChange }, value) => onChange ? onChange(value) : null;

export default ({ getValue = defaultGetValue, changeValue = defaultChangeValue, initialState, terse } = {}) => {
  return Editor => class SlateStateDecorator extends Component {
    static propTypes = { }
    isFocused = false;
    batch = batch(300);
    rawValue = null;

    constructor(props) {
      super();
      this.rawValue = getValue(props);
      this.value = parseValue(this.rawValue, initialState, terse);
    }

    shouldComponentUpdate(props) {
      const newValue = getValue(props);
      const oldValue = getValue(this.props);
      if (newValue !== oldValue && this.rawValue !== newValue) {
        this.value = parseValue(newValue, undefined, terse);
        return true;
      }
      if (props.readOnly !== this.props.readOnly) return true;
      return false;
    }

    changeValue = (value) => {
      this.value = value;
      this.forceUpdate();
      if (changeValue) {
        const rawValue = Raw.serialize(value, { terse });
        if (JSON.stringify(this.rawValue) !== JSON.stringify(rawValue)) {
          this.rawValue = rawValue;
          this.batch(() => {
            // Flatten & filter
            const flattenNodes = nodes => nodes.reduce((arr, node) => {
              const { type, kind, text } = node;
              let newArr = [...arr];
              const newNode = { ...node };
              if (newNode.nodes) {
                newArr = arr.concat(flattenNodes(newNode.nodes));
                delete newNode.nodes;
              }

              // Filter empty Blocks
              if (
                !(type === 'paragraph') &&
                !(type === 'line') &&
                !(kind === 'text' && text === '')
              ) {
                newArr.push(newNode);
              }

              return newArr;
            }, []);

            /* if (rawValue) {
              const test = flattenNodes(rawValue.nodes);
              console.log(rawValue, test);
            } */

            if (rawValue && flattenNodes(rawValue.nodes).length) {
              changeValue(this.props, rawValue);
            } else {
              changeValue(this.props, null);
            }
          });
        }
      }
    }

    render() {
      return (
        <Editor {...this.props} value={this.value} onChange={this.changeValue} />
      );
    }
  };
};
