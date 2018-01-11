import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import Portal from '../portal';

if (typeof window !== 'undefined') {
  require('particles.js');
}

const params = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#fff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

class Snow extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.particlesJS('snow', params);
    }
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    if (
      typeof window !== 'undefined' &&
      window.pJSDom &&
      window.pJSDom instanceof Array &&
      window.pJSDom.length > 0
    ) {
      try {
        for (let i = 0; i < window.pJSDom.length; i++) {
          window.pJSDom[i].pJS.fn.vendors.destroypJS();
        }
      } catch (err) {}
    }
    window.pJSDom = [];
  }
  render() {
    const { className } = this.props;
    if (typeof window !== 'undefined') {
      return (
        <Portal>
          <div className={className} id="snow" />
        </Portal>
      );
    }
    return null;
  }
}

export default createComponent(
  ({ pointerEvents = 'none' }) => ({
    pointerEvents: pointerEvents === true ? undefined : pointerEvents,
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10000,
  }),
  Snow,
  p => Object.keys(p),
);
