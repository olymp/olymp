import { createComponent } from 'react-fela';

export default Wrapped =>
  createComponent(
    ({ theme, color }) => ({
      fill: color === true
        ? theme.color
        : typeof color === 'string' ? color : theme.dark,
    }),
    Wrapped,
    ['width', 'height', 'size', 'onClick']
  );
