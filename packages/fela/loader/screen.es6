import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import Portal from 'react-portal-minimal';
import tinycolor from 'tinycolor2';
import { CSSTransitionGroup } from 'react-transition-group';

const Modal = ({ className, logo, show }, { theme }) =>
  <Portal isOpened>
    <CSSTransitionGroup
      transitionName="example"
      transitionEnter={false}
      transitionLeaveTimeout={3000}
    >
      {show &&
        <div className={className} key="habba">
          <div>
            {logo || theme.logo()}
          </div>
        </div>}
    </CSSTransitionGroup>
  </Portal>;
Modal.contextTypes = { theme: PropTypes.object };

const component = createComponent(
  ({ theme, padding, width, bottomTransparency, topTransparency }) => ({
    backgroundColor: theme.color,
    zIndex: 1000000,
    background: `linear-gradient(0deg, ${theme.colorStart ||
      tinycolor(theme.color)
        .darken(6)
        .spin(-6)
        .setAlpha(bottomTransparency || 1)
        .toRgbString()}, ${theme.colorEnd ||
      tinycolor(theme.color)
        .lighten(6)
        .spin(12)
        .setAlpha(topTransparency || 1)
        .toRgbString()})`,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    '> div': {
      backgroundColor: theme.color,
      borderRadius: '100%',
      padding: 30,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(0,0,0) translateX(-50%) translateY(-50%)',
      animationDuration: '2.5s',
      animationIterationCount: 'infinite',
      animationName: {
        '0%': {
          boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
        },
        '70%': {
          boxShadow: '0 0 0 20px rgba(255,255,255, 0)',
        },
        '100%': {
          boxShadow: '0 0 0 0 rgba(255,255,255, 0)',
        },
      },
    },
  }),
  Modal,
  p => Object.keys(p)
);

export default component;
