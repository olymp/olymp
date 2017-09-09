import { createComponent as createFelaComponent } from 'react-fela';
import { getTheme } from './redux';

export default (style, component, passThrough) =>
  getTheme(
    createFelaComponent(
      ({ theme, extraTheme, ...rest }) =>
        (typeof style === 'function'
          ? style({
            theme: { ...theme, ...extraTheme },
            ...rest,
          })
          : style),
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
    ),
  );
