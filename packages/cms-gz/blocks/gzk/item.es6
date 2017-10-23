import { createComponent } from 'olymp-fela';
import tinycolor from 'tinycolor2';

const getDarkenFont = color => {
  const tColor = tinycolor(color);
  if (tColor.isLight()) {
    return getDarkenFont(tColor.darken(4).toRgbString());
  }

  return tColor.toRgbString();
};

export default createComponent(
  ({ theme, color, isActive, onClick }) => ({
    color: isActive ? theme.light : getDarkenFont(color),
    backgroundColor: isActive && color,
    borderRadius: theme.borderRadius,
    width: '80%',
    cursor: !!onClick && 'pointer',
    opacity: !!onClick && 0.8,
    position: 'relative',
    paddingLeft: theme.space4,
    paddingRight: theme.space1,
    fontWeight: 'bold',
    clearfix: true,
    '> span': {
      float: 'right',
    },
    onHover: !!onClick && {
      opacity: 1,
    },
    onBefore: {
      content: '"■"',
      color: isActive ? theme.light : getDarkenFont(color),
      position: 'absolute',
      left: theme.space3,
    },
  }),
  'li',
  ({ color, isActive, ...p }) => Object.keys(p),
);
