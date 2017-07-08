import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';

const animation = {
  userSelect: 'none',
  animationName: {
    '0%': {
      opacity: 0.67,
    },
    '50%': {
      opacity: 0.33,
    },
    '100%': {
      opacity: 0.67,
    },
  },
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  '& *': {
    animationName: 'none', // prevent nested animations
  },
};

const getColor = color => tinycolor(color).setAlpha(1).toRgbString();

const filled = (color = 'gray') => ({
  color: `${getColor(color)} !important`,
  backgroundColor: `${getColor(color)} !important`,
  background: `${getColor(color)} !important`,
  ...animation,
});

const bordered = (color = 'gray') => ({
  border: `1px solid ${getColor(color)} !important`,
  ...animation,
});

const createSkeletorComponent = (styles, component, propKeys) => {
  const SkeletorComponent = (props, { skeletorLoading, theme, renderer }) =>
    createComponent(
      p =>
        styles(p, {
          filled: skeletorLoading ? c => filled(c || theme.dark) : () => ({}),
          bordered: skeletorLoading
            ? c => bordered(c || theme.dark)
            : () => ({}),
          isLoading: skeletorLoading,
        }),
      component,
      propKeys
    )(props, { theme, renderer });
  SkeletorComponent.contextTypes = {
    renderer: PropTypes.object,
    theme: PropTypes.object,
    skeletorLoading: PropTypes.bool,
  };

  return SkeletorComponent;
};
export default createSkeletorComponent;
