import React from 'react';
import { styled } from 'olymp';

const ContentLoader = styled(() => ({
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  // background: '#f6f7f8',
  background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
  backgroundSize: '800px 104px',
  height: '96px',
  position: 'relative',
  animationName: {
    '0%': {
      backgroundPosition: '-468px 0',
    },
    '100%': {
      backgroundPosition: '468px 0',
    },
  },
}), 'div', p => p);

export default ContentLoader;
