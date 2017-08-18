import React from 'react';
import createComponent from '../utils/create-component';
import Portal from 'react-portal-minimal';
import { get } from 'lodash';
import tinycolor from 'tinycolor2';
import { inject, observer } from 'mobx-react';
import { CSSTransitionGroup } from 'react-transition-group';

const Modal = ({ className, logo, show, $theme }) =>
  (<Portal isOpened>
    <CSSTransitionGroup
      transitionName="example"
      transitionEnter={false}
      transitionLeaveTimeout={3000}
    >
      {show &&
        <div className={className} key="habba">
          <div>
            {logo || get($theme, 'theme.logo', () => null)()}
          </div>
        </div>}
    </CSSTransitionGroup>
  </Portal>);

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
      tinycolor(theme.color).lighten(6).spin(12).setAlpha(topTransparency || 1).toRgbString()})`,
    transition: 'background-color .4s ease',
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
      transform: 'translate3d(-50%,-50%,0)',
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
  inject('$theme')(observer(Modal)),
  p => Object.keys(p),
);

export default component;
