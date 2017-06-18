import React, { Component, Children, PropTypes } from 'react';

export class LangProvider extends Component {
  static childContextTypes = {
    lang: React.PropTypes.object,
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
    lang: React.PropTypes.object,
  };
  return withLang;
};
