import { createComponent as createFelaComponent } from 'react-fela';
import { inject, observer } from 'mobx-react';

const styles = fn => ({ $theme, theme, ...rest }) =>
  fn({
    theme: { ...theme, ...$theme.theme },
    ...rest,
  });
export default (x1, x2, x3) =>
  inject('$theme')(
    observer(
      createFelaComponent(
        styles(x1),
        x2,
        ({ $theme, ...props }) => (typeof x3 === 'function' ? x3(props) : x3) || [],
      ),
    ),
  );
