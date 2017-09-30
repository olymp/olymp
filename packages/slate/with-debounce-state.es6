import React, { Component } from 'react';
import { debounce } from 'lodash';
import { withPropsOnChange, compose } from 'recompose';
import Plain from 'slate-plain-serializer';

const stateWrapper = options => WrappedComponent =>
  class Slate extends Component {
    constructor(props) {
      super(props);
      this.state = { value: props.value };
    }
    componentWillReceiveProps(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({ value: newProps.value });
      }
    }
    propagateChange = (value) => {
      this.props.onChange(value);
      /* this.props.onChange(
          JSON.parse(
            JSON.stringify(value.toJSON().document)
              .split('"line"')
              .join('"paragraph"'),
          ),
        ); */
    };
    debouncedPropagateChange = debounce(this.propagateChange, options.debounce || 1000, {
      leading: false,
      trailing: true,
    });
    onChange = (value) => {
      if (!this.props.onChange) {
        return;
      }
      this.setState({ value }, () => {
        if (options.debounce) {
          this.debouncedPropagateChange(value);
        } else {
          this.propagateChange(value);
        }
      });
    };
    render() {
      const { value } = this.state;
      return <WrappedComponent {...this.props} value={value} onChange={this.onChange} />;
    }
  };

export default options =>
  compose(
    withPropsOnChange(['value'], ({ value }) => {
      const state = value || Plain.deserialize('');
      return {
        value: state,
      };
    }),
    stateWrapper(options || {}),
  );
