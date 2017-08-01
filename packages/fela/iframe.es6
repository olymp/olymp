import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FrameComponent from 'react-frame-component';
import { createComponent } from 'react-fela';

const StyledFrameComponent = createComponent(
  ({ width, height }) => ({
    border: 0,
    width: width || '100%',
    height: height || '100%',
  }),
  ({ innerRef, width, height, ...props }) => <FrameComponent ref={innerRef} {...props} />,
  p => Object.keys(p),
);

class FrameInner extends Component {
  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any,
  };
  componentDidMount() {
    const parent = window;
    const { document } = this.context;
    const { mounted, css = '' } = this.props;

    setTimeout(() => {
      const style = document.createElement('style');
      style.id = 'iframe-styles';
      style.type = 'text/css';
      style.appendChild(
        document.createTextNode(`
        .frame-root { height: 100%; }
        .frame-content { height: 100%; }
        ${css}
      `),
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
    if (mounted) {
      setTimeout((x) => {
        mounted({ document, window: this.context.window });
      }, 100);
    }
  }
  render() {
    const { children, className } = this.props;
    return React.Children.only(children);
  }
}

export default ({ children, disabled, css, mounted, ...rest }) =>
  (disabled
    ? React.Children.only(children)
    : <StyledFrameComponent {...rest}>
      <FrameInner mounted={mounted} css={css}>
        {children}
      </FrameInner>
    </StyledFrameComponent>);
