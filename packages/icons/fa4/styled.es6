import { createComponent } from 'olymp-fela';

export default Wrapped =>
  createComponent(
    ({ theme, color }) => ({
      fill:
        color === true
          ? theme.color
          : typeof color === 'string' ? color : 'rgba(0, 0, 0, 0.85)',
    }),
    Wrapped,
    [
      'width',
      'height',
      'size',
      'onClick',
      'onMouseEnter',
      'onMouseLeave',
      'onMouseOver',
    ],
  );
