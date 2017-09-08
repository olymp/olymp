import { createComponent as createFelaComponent } from 'react-fela';
import { getTheme } from './redux';

export default (x1, x2, x3) =>
  getTheme(
    createFelaComponent(
      ({ theme, extraTheme, ...rest }) =>
        x1({
          theme: { ...theme, ...extraTheme },
          ...rest,
        }),
      x2,
      ({ extraTheme, dispatch, ...props }) => (typeof x3 === 'function' ? x3(props) : x3),
    ),
  );
