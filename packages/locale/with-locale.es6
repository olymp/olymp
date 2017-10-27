import { Component, Children } from 'react';
import { func } from 'prop-types';
import { get } from 'lodash';

export default class LocaleProvider extends Component {
  static childContextTypes = {
    locale: func,
  };

  getChildContext() {
    return {
      locale: this.caller,
    };
  }

  caller = (fnOrString, ...rest) => {
    const { locale } = this.props;
    if (typeof fnOrString === 'function') {
      return fnOrString(...rest, { locale });
    } else if (typeof fnOrString === 'string') {
      return get(locale, fnOrString, ...rest);
    }
    return locale[fnOrString];
  };

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}
