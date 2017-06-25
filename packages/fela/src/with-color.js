import React, { Component } from 'react';
import { func } from 'prop-types';
import shortId from 'shortid';

export default getColorFromProps => WrappedComponent =>
  class WithColorComponent extends Component {
    static contextTypes = {
      setColor: func,
    };
    id = shortId.generate();
    color = null;
    setColor = (props = this.props) => {
      const { setColor } = this.context;
      const newColor = getColorFromProps(props) || null;
      if (newColor !== this.color) {
        setColor(this.id, newColor);
        this.color = newColor;
      }
    };
    componentDidMount() {
      this.setColor(this.props);
    }
    componentWillUnmount() {
      const { setColor } = this.context;
      setColor(this.id, null);
    }
    componentWillReceiveProps(newProps) {
      this.setColor(newProps);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
