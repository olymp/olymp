import { createComponent, border } from 'olymp-fela';

export const SplitView = createComponent(
  ({ theme, deviceWidth, center, background }) => ({
    display: 'flex',
    flex: '1 1 0%',
    background:
      background === true &&
      'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
    '> :first-child': {
      flexGrow: 0,
      overflowY: 'auto',
    },
    '> :nth-child(2)': {
      flexGrow: 1,
      overflowY: 'auto',
      margin: center && '0 auto',
      borderX: center && border(theme),
      maxWidth: deviceWidth,
      maxHeight: '100%',
    },
  }),
  'div',
  ({ deviceWidth, center, background, ...p }) => Object.keys(p)
);

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
  ['children', 'itemScope', 'itemType']
);

export const Container = createComponent(
  ({ theme, width, padding, minHeight, height }) => ({
    width: width || 700,
    maxWidth: width || 700,
    height,
    minHeight,
    boxShadow: theme.boxShadow,
    marginX: 'auto',
    padding: padding !== undefined ? padding : theme.space3,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  }),
  'div',
  ({ width, minHeight, padding, ...p }) => Object.keys(p)
);

export const Placeholder = createComponent(
  ({ theme }) => ({
    textAlign: 'center',
    fontWeight: 200,
    fontSize: '200%',
    opacity: 0.5,
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  }),
  'div',
  p => Object.keys(p)
);
