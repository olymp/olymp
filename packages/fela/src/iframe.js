import React, { Component, PropTypes } from 'react';
import FrameComponent from 'react-frame-component';
import { createComponent } from 'react-fela';

const StyledFrameComponent = createComponent(
  () => ({
    border: 0,
    width: '100%',
    height: '100%',
  }),
  FrameComponent,
  p => Object.keys(p)
);

class FrameInner extends Component {
  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any,
  };
  componentDidMount() {
    const parent = window;
    const { document } = this.context;

    setTimeout(() => {
      const style = document.createElement('style');
      style.id = 'iframe-styles';
      style.type = 'text/css';
      style.appendChild(
        document.createTextNode(`
        .frame-root { height: 100%; }
        .frame-content { height: 100%; }
      `)
      );
      const oHead = document.getElementsByTagName('head')[0];
      const arrStyleSheets = [
        ...parent.document.getElementsByTagName('style'),
        ...parent.document.getElementsByTagName('link'),
      ];
      for (let i = 0; i < arrStyleSheets.length; i++) {
        oHead.appendChild(arrStyleSheets[i].cloneNode(true));
      }
      oHead.appendChild(style);
    }, 0);
  }
  render() {
    const { children, className } = this.props;
    return React.Children.only(children);
  }
}

export default ({ children, disabled }) =>
  disabled
    ? React.Children.only(children)
    : <StyledFrameComponent>
        <FrameInner>
          {children}
        </FrameInner>
      </StyledFrameComponent>;
