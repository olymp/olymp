import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { provide } from 'olymp-utils/mobx';
import { HistoryStore } from './history';

@provide(HistoryStore)
export default class Router extends Component {
  static childContextTypes = {
    history: PropTypes.object,
    staticContext: PropTypes.object,
  };
  getChildContext() {
    const { history } = this.props;
    return {
      history,
    };
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}
