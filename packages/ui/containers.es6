import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ display, axis, show, alignLabel, ...rest }) => ({
    position: 'relative',
    // border: '1px solid transparent',
    overflowY: 'auto',
    display: show === false ? 'none' : display,
    flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined,
    '> *': display === 'flex' && {
      overflowY: 'auto',
    },
    ...rest,
    '& .ant-form-item': alignLabel && {
      // oops, should not be here!
      marginBottom: 12,
      '> .ant-form-item-label': {
        textAlign: alignLabel,
      },
    },
  }),
  'div',
  ['children', 'itemScope', 'itemType'],
);
