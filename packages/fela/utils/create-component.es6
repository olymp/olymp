import { createComponent as createFelaComponent } from 'react-fela';

export default (style, component, passThrough) =>
  createFelaComponent(
    ({ theme, ...rest }) => (typeof style === 'function' ? style({ theme, ...rest }) : style),
    component,
    ({ extraTheme, dispatch, ...props }) => {
      if (typeof passThrough === 'function') {
        return passThrough(props);
      } else if (passThrough === null) {
        return null;
      } else if (passThrough) {
        return passThrough;
      }
      return Object.keys(props);
    },
  );
