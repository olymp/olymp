import React, { Component, Children } from 'react';
import { func } from 'prop-types';
import { get } from 'lodash';

export class LocaleProvider extends Component {
  static childContextTypes = {
    locale: func,
  };
  caller = (fnOrString, ...rest) => {
    const { locale } = this.props;
    if (typeof fnOrString === 'function') {
      return fnOrString(...rest, { locale });
    } else if (typeof fnOrString === 'string') {
      return get(locale, fnOrString, ...rest);
    }
    return locale[fnOrString];
  }
  getChildContext() {
    return {
      locale: this.caller,
    };
  }
  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

export default (WrappedComponent) => {
  const withLocale = (props, context) =>
    <WrappedComponent locale={context.locale} {...props} />;
  withLocale.contextTypes = {
    locale: func,
  };
  return withLocale;
};
