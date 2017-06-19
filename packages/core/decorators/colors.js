import React, { Component } from 'react';

// defaultColors = [{ color: 'red', name: 'Termin' (optional) }, 'blue', ...]
export const withColors = WrappedComponent =>
  class WithColors extends Component {
    static contextTypes = {
      defaultColors: React.PropTypes.array,
    };

    render() {
      return (
        <WrappedComponent colors={this.context.defaultColors} {...this.props} />
      );
    }
  };

export const useColors = (defaultColors = []) => WrappedComponent =>
  class UseColors extends Component {
    static childContextTypes = {
      defaultColors: React.PropTypes.array,
    };

    getChildContext() {
      return {
        defaultColors: [
          ...defaultColors,
          ...(this.props.defaultColors || []),
        ].map(
          color =>
            typeof color === 'string'
              ? { color, name: color }
              : { name: color.color, ...color }
        ),
      };
    }

    render() {
      const { defaultColors, ...rest } = this.props;

      return <WrappedComponent {...rest} />;
    }
  };
