import createComponent from '../utils/create-component';

export const topLoaderStyles = ({ theme, loading }) => ({
  opacity: loading ? 1 : 0,
  transition: 'opacity 500ms ease-out',
  height: 4,
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  backgroundColor: '#ddd',
  onBefore: {
    display: 'block',
    position: 'absolute',
    content: '""',
    left: -200,
    width: 200,
    height: 4,
    backgroundColor: theme.color,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: {
      from: { left: -200, width: '30%' },
      '50%': { width: '30%' },
      '70%': { width: '70%' },
      '80%': { left: '50%' },
      '95%': { left: '120%' },
      to: { left: '100%' },
    },
  },
});

export default createComponent(topLoaderStyles, 'div', ({ loading, ...p }) => Object.keys(p));
