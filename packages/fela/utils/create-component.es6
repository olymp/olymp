import { createComponent as createFelaComponent } from 'react-fela';
import { connect } from 'react-redux';

export default (x1, x2, x3) => connect(({ fela }) => ({
  theme2: fela,
}))(
  createFelaComponent(
    ({ theme, theme2, ...rest }) =>
      x1({
        theme: { ...theme, ...theme2 },
        ...rest,
      }),
    x2,
    ({ theme2, dispatch, ...props }) => (typeof x3 === 'function' ? x3(props) : x3),
  ),
);
