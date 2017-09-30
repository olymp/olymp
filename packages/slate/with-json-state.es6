import React, { Component } from 'react';
import { debounce } from 'lodash';
import { withPropsOnChange, compose } from 'recompose';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';
import Base64 from './plugins/base64';

const stateWrapper = options => WrappedComponent =>
  class Slate extends Component {
    constructor(props) {
      super(props);
      this.base64 = props.base64;
      this.state = { value: props.value };
    }
    componentWillReceiveProps(newProps) {
      if (newProps.base64 !== this.base64 && this.state.value !== newProps.value) {
        console.log('ACCEPT PROPS');
        this.base64 = newProps.base64;
        this.state.value = newProps.value;
        // this.setState({ value: newProps.value });
      }
    }
    propagateChange = (value) => {
      this.base64 = Base64.serialize(value);
      if (this.base64 !== this.props.base64) {
        const json = value.toJSON();
        const str = JSON.stringify(json);
        if (str.indexOf('"line"') !== -1) {
          const final = JSON.parse(str.split('"line"').join('"paragraph"'));
          return this.props.onChange(final.document);
        }
        this.props.onChange(json.document);
      }
    };
    debouncedPropagateChange = debounce(this.propagateChange, options.debounce || 1000, {
      leading: false,
      trailing: true,
    });
    onChange = (value) => {
      if (!this.props.onChange) {
        return;
      }
      if (options.debounce) {
        this.setState({ value }, () => {
          this.debouncedPropagateChange(value);
        });
      } else {
        this.state.value = value;
        this.propagateChange(value);
      }
    };
    render() {
      const { value } = this.state;
      console.log('RENDER');
      return (
        <WrappedComponent
          {...this.props}
          base64={this.props.base64}
          value={value}
          onChange={this.onChange}
        />
      );
    }
  };

export default options =>
  compose(
    withPropsOnChange(['value'], ({ value }) => {
      console.log('NEW VALUE');
      const state = value
        ? State.fromJSON({ document: value, kind: 'state' })
        : Plain.deserialize('');
      return {
        value: state,
        base64: Base64.serialize(state),
      };
    }),
    stateWrapper(options || {}),
  );
