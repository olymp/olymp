import { createComponent } from 'react-fela';

export default Wrapped =>
  createComponent(
    ({
      theme,
      color,
      width,
      height,
      size,
      onClick,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    }) => ({
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      fill:
        color === true
          ? theme.color
          : typeof color === 'string'
            ? theme[color] || color
            : theme.inverted ? theme.light : theme.dark,
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
      'onMouseDown',
    ],
  );
