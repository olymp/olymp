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
            if (rawValue.nodes.length === 1 && rawValue.nodes[0].nodes.length === 1 && (!rawValue.nodes[0].nodes[0].text && !rawValue.nodes[0].nodes[0].isVoid)) {
            // if (rawValue.nodes.length === 1 && rawValue.nodes[0].kind === 'text' && !rawValue.nodes[0].text) {
              changeValue(this.props, null);
            // } else if (rawValue.nodes.length === 1 && rawValue.nodes[0].type === 'paragraph' && (!rawValue.nodes.length || (rawValue.nodes[0].nodes[0].kind === 'text' && !rawValue.nodes[0].nodes[0].text))) {
            //   changeValue(this.props, null);
            } else {
              changeValue(this.props, rawValue);
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
