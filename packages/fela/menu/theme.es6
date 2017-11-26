import { compose, withPropsOnChange } from 'recompose';
import { withTheme } from 'react-fela';

const enhance = compose(
  withTheme,
  withPropsOnChange(
    ['theme', 'inverted', 'color', 'collapsed', 'width'],
    ({
      theme,
      inverted,
      color = '#F4F5F7',
      collapsed = false,
      width = 240,
    }) => ({
      theme: {
        // inverted: inverted === undefined ? color === true : inverted,
        inverted,
        collapsed,
        width,
      },
      color: (color === true && theme.color) || theme[color] || color,
    }),
  ),
);
export default enhance;
