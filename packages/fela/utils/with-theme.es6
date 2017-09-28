import React, { Component } from 'react';
import shortId from 'shortid';
import shallowEqual from 'shallowequal';
import { get } from 'lodash';
import { setTheme } from './redux';

export default getColorFromProps => (WrappedComponent) => {
  @setTheme
  class WithColorComponent extends Component {
    id = shortId.generate();
    color = null;
    constructor(props) {
      super(props);
      this.skip = get(props.editor, 'props.prefetch', false);
      this.setColor(props);
    }
    setColor = (props = this.props) => {
      if (this.skip) {
        return;
      }
      const { setTheme } = this.props;
      const newTheme = getColorFromProps(props) || null;
      if (!shallowEqual(newTheme, this.theme)) {
        setTheme(this.id, newTheme);
        this.theme = newTheme;
      }
    };
    componentWillUnmount() {
      const { unsetTheme } = this.props;
      unsetTheme(this.id);
    }
    componentWillReceiveProps(props) {
      this.setColor(props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithColorComponent;
};
