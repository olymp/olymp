import React, { Component } from 'react';
import { debounce } from 'lodash';
import { withPropsOnChange, compose, withProps } from 'recompose';
import Base64 from 'slate-base64-serializer';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';

const stateWrapper = WrappedComponent =>
  class Slate extends Component {
    constructor(props) {
      super(props);
      this.base64 = props.base64;
      this.state = { value: props.state };
    }
    componentWillReceiveProps(newProps) {
      if (newProps.base64 !== this.base64) {
        this.base64 = newProps.base64;
        this.setState({ value: newProps.state });
      }
    }
    propagateChange = debounce(
      (value) => {
        this.base64 = Base64.serialize(value);
        if (this.base64 !== this.props.base64) {
          this.props.onChange(
            value
              .toJSON()
              .document.split('"line"')
              .join('"paragraph"'),
          );
          /* this.props.onChange(
            JSON.parse(
              JSON.stringify(value.toJSON().document)
                .split('"line"')
                .join('"paragraph"'),
            ),
          ); */
        }
      },
      1000,
      { leading: false, trailing: true },
    );
    onChange = (value) => {
      this.setState({ value });
      this.propagateChange(value);
    };
    render() {
      const { value } = this.state;
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

export default compose(
  withPropsOnChange(['value'], ({ value }) => {
    const state = value
      ? State.fromJSON({ document: value, kind: 'state' })
      : Plain.deserialize('');
    return {
      state,
      base64: Base64.serialize(state),
    };
  }),
  stateWrapper,
);
