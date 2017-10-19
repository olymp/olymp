import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, color, isActive, onClick }) => ({
    color: isActive ? theme.light : color,
    backgroundColor: isActive && color,
    borderRadius: theme.borderRadius,
    width: '80%',
    cursor: !!onClick && 'pointer',
    opacity: !!onClick && 0.8,
    position: 'relative',
    padding: theme.space1,
    paddingLeft: theme.space4,
    clear: 'both',
    '> span': {
      float: 'right',
    },
    onHover: !!onClick && {
      opacity: 1,
    },
    onBefore: {
      content: '"■"',
      color: isActive ? theme.light : color,
      position: 'absolute',
      left: theme.space3,
    },
  }),
  'li',
  ({ color, isActive, ...p }) => Object.keys(p),
);
