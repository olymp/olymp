import { createComponent } from 'react-fela';

export default Wrapped =>
  createComponent(
    ({ theme, color, width, height, size, onClick, ...rest }) => ({
      ...rest,
      fill: color === true ? theme.color : typeof color === 'string' ? color : theme.dark,
    }),
    Wrapped,
    ['width', 'height', 'size', 'onClick'],
  );
