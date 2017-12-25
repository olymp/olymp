import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export class LangProvider extends Component {
  static childContextTypes = {
    lang: PropTypes.object,
  };
  getChildContext() {
    return {
      lang: this.props.lang || {},
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

export const withLangProvider = (langOption = {}) => (WrappedComponent) => {
  const withLangProvider = ({ lang, ...props }) =>
    (<LangProvider lang={{ ...langOption, ...({} || lang) }}>
      <WrappedComponent {...props} />
    </LangProvider>);
  return withLangProvider;
};

export default (WrappedComponent) => {
  const withLang = (props, context) =>
    <WrappedComponent lang={context.lang} {...props} />;
  withLang.contextTypes = {
    lang: PropTypes.object,
  };
  return withLang;
};
