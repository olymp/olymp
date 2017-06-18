import React, { Component } from 'react';

export const withEdits = WrappedComponent =>
  class WithEdits extends Component {
    static contextTypes = {
      edits: React.PropTypes.array,
    };

    render() {
      return <WrappedComponent edits={this.context.edits} {...this.props} />;
    }
  };

export const useEdits = (edits = []) => WrappedComponent =>
  class UseEdits extends Component {
    static childContextTypes = {
      edits: React.PropTypes.array,
    };

    getChildContext() {
      return {
        edits: [...edits, ...(this.props.edits || [])],
      };
    }

    render() {
      const { edits, ...rest } = this.props;

      return <WrappedComponent {...rest} />;
    }
  };
