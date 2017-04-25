import React, { Component, PropTypes } from 'react';
import FrameComponent from 'react-frame-component';

class FrameInner extends Component {
  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any
  }
  componentDidMount() {
    const parent = window;
    const { document } = this.context;
    console.log(parent, document);
    setTimeout(() => {
      var oHead = document.getElementsByTagName('head')[0];
      var arrStyleSheets = [
        ...parent.document.getElementsByTagName('style'),
        ...parent.document.getElementsByTagName('link')
      ];
      for (var i = 0; i < arrStyleSheets.length; i++)
        oHead.appendChild(arrStyleSheets[i].cloneNode(true));
    }, 0);
  }
  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}
export default ({ children, disabled }) => disabled ? (
  React.Children.only(children)
) : (
  <FrameComponent>
    <FrameInner>
      {children}
    </FrameInner>
  </FrameComponent>
);
