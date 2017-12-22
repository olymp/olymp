import React from 'react';
import { createComponent, withTheme } from 'react-fela';
import tinycolor from 'tinycolor2';

const getLogo = x => {
  if (typeof x === 'function') {
    return x();
  }
  return <img src={x} alt="logo" />;
};
const Modal = withTheme(
  ({ className, theme, show = true }) =>
    show ? (
      <div className={className}>
        {theme.logoWhite && (
          <div className="logo">{getLogo(theme.logoWhite)}</div>
        )}
      </div>
    ) : null,
);

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
      backgroundColor: theme.color,
      borderRadius: '100%',
      // padding: 30,
      size: 125,
      center: true,
      animationDuration: '2.5s',
      animationIterationCount: 'infinite',
      animationName: {
        '0%': {
          boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3)',
        },
        '70%': {
          boxShadow: '0 0 0 20px rgba(255,255,255, 0)',
        },
        '100%': {
          boxShadow: '0 0 0 0 rgba(255,255,255, 0)',
        },
      },
      '> img': {
        height: 75,
        center: true,
        animationDuration: '2.5s',
        animationIterationCount: 'infinite',
        animationName: {
          '0%': {
            opacity: 0.33,
          },
          '70%': {
            opacity: 0.45,
          },
          '100%': {
            opacity: 0.33,
          },
        },
      },
      '> svg': {
        height: 75,
        center: true,
        animationDuration: '2.5s',
        animationIterationCount: 'infinite',
        animationName: {
          '0%': {
            opacity: 0.33,
          },
          '70%': {
            opacity: 0.45,
          },
          '100%': {
            opacity: 0.33,
          },
        },
      },
    },
  }),
  Modal,
  p => Object.keys(p),
);

export default component;
