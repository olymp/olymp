import { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

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

const createSkeletorComponent = (styles, component, propKeys) => {
  class SkeletorComponent extends Component {
    color = this.context.skeletorColor || this.context.theme.dark;

    background = {
      ...fill(this.color),
      ...animation,
    };

    overlay = {
      position: 'relative',
      onBefore: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...fill(this.color),
        ...animation,
      },
    };

    text = {
      '& h1': {
        ...fill(this.color),
      },
      '& h2': {
        ...fill(this.color),
      },
      '& h3': {
        ...fill(this.color),
      },
      '& h4': {
        ...fill(this.color),
      },
      '& h5': {
        ...fill(this.color),
      },
      '& h6': {
        ...fill(this.color),
      },
      '& p': {
        ...fill(this.color),
      },
      '& span': {
        ...fill(this.color),
      },
      '& a': {
        ...fill(this.color),
      },
      ...animation,
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
                  overlay: this.overlay,
                  text: this.text,
                  isLoading: true,
                }
              : {
                  background: () => ({}),
                  overlay: () => ({}),
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
