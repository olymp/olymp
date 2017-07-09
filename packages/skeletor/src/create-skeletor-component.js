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

const fill = color => ({
  color: `${color} !important`,
  backgroundColor: `${color} !important`,
  background: `${color} !important`,
});

const getColor = color => tinycolor(color).setAlpha(1).toRgbString();

const createSkeletorComponent = (styles, component, propKeys) => {
  class SkeletorComponent extends Component {
    background = (c = 'gray') => {
      const color = getColor(c || this.context.theme.color);

      return {
        ...fill(color),
        ...animation,
      };
    };

    border = (c = 'gray') => {
      const color = getColor(c || this.context.theme.color);

      return {
        border: `1px solid ${color} !important`,
        ...animation,
      };
    };

    text = (c = 'gray') => {
      const color = getColor(c || this.context.theme.color);

      return {
        '& h1': {
          ...fill(color),
        },
        '& h2': {
          ...fill(color),
        },
        '& h3': {
          ...fill(color),
        },
        '& h4': {
          ...fill(color),
        },
        '& h5': {
          ...fill(color),
        },
        '& h6': {
          ...fill(color),
        },
        '& p': {
          ...fill(color),
        },
        '& span': {
          ...fill(color),
        },
        '& a': {
          ...fill(color),
        },
        ...animation,
      };
    };

    render() {
      const { skeletorLoading, theme, renderer } = this.context;

      return createComponent(
        p =>
          styles({
            ...p,
            skeletor: skeletorLoading
              ? {
                background: this.background,
                border: this.border,
                text: this.text,
                isLoading: true,
              }
              : {
                background: () => ({}),
                border: () => ({}),
                text: () => ({}),
                isLoading: false,
              },
          }),
        component,
        propKeys
      )(this.props, { theme, renderer });
    }
  }
  SkeletorComponent.contextTypes = {
    renderer: PropTypes.object,
    theme: PropTypes.object,
    skeletorLoading: PropTypes.bool,
  };

  return SkeletorComponent;
};
export default createSkeletorComponent;
