import React from 'react';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import Portal from './portal';

const Modal = ({ className, logo, isOffline, isServerDown }) =>
  isOffline ? (
    <Portal>
      <div className={className}>
        <div>Offline</div>
      </div>
    </Portal>
  ) : isServerDown ? (
    <Portal>
      <div className={className}>
        <div>Server Offline</div>
      </div>
    </Portal>
  ) : null;

const component = createComponent(
  ({ theme, bottomTransparency, topTransparency }) => ({
    backgroundColor: theme.color,
    zIndex: 1000000,
    background: `linear-gradient(0deg, ${theme.colorEnd ||
      tinycolor(theme.color)
        .darken(6)
        .spin(-6)
        .setAlpha(bottomTransparency || 1)
        .toRgbString()}, ${theme.colorStart ||
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
      color: 'white',
      fontSize: 30,
      fontWeight: 200,
      height: 300,
      width: 300,
      lineHeight: '240px',
      textAlign: 'center',
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
  Modal,
  p => Object.keys(p)
);

export default component;
