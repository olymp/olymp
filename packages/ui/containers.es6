import { createComponent } from 'olymp-fela';

export const Panel = createComponent(
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

export const Container = createComponent(
  ({ theme, width, padding, minHeight, height }) => ({
    width: width || 700,
    maxWidth: width || 700,
    height,
    minHeight,
    // boxShadow: theme.boxShadow,
    marginX: 'auto',
    padding: padding !== undefined ? padding : theme.space3,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  }),
  'div',
  ({ width, minHeight, padding, ...p }) => Object.keys(p),
);
