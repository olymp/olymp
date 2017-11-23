import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import Portal from '../portal';

if (typeof window !== 'undefined') {
  require('particles.js');
}

const params = {
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#1b1e34',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000',
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 160,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#ffffff',
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: 'none',
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
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
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

class Bubble extends Component {
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
      return <div className={className} id="snow" />;
    }
    return null;
  }
}

export default createComponent(
  () => ({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }),
  Bubble,
  p => Object.keys(p),
);
