import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ side, width }) => ({
    position: 'relative',
    overflow: 'hidden',
    width: width || 300,
    // borderRight: side === 'left' && '1px solid rgb(233, 233, 233)',
    // borderLeft: side === 'right' && '1px solid rgb(233, 233, 233)',
    backgroundColor: 'rgba(0, 0, 0, 0.015)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    onBefore: {
      content: "'>'",
      position: 'absolute',
      top: '45%',
      right: side === 'left' && -26,
      left: side === 'right' && -26,
      fontSize: 30,
      fontWeight: 'bold',
      opacity: 0.2,
    },
  }),
  'div',
  ({ side, ...p }) => Object.keys(p),
);
