import { createComponent } from 'react-fela';

const Icon = Wrapped =>
  createComponent(
    ({ theme, color }) => ({
      fill: color === true
        ? theme.color
        : typeof color === 'string' ? color : theme.dark,
    }),
    Wrapped,
    ['width', 'height', 'size', 'onClick']
  );
Icon.displayName = 'Icon';
export default Icon;
