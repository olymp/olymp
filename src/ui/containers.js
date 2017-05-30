import { styled } from 'olymp';

export const SplitView = styled(({ deviceWidth, center }) => ({
  display: 'flex',
  flex: 1,
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
  minHeight: 600,
  '> :first-child': {
    flex: 0,
    overflowY: 'auto',
  },
  // '> :not(:first-child)': {
  '> :nth-child(2)': {
    flex: 1,
    overflowY: 'auto',
    margin: center && 'auto',
    maxWidth: deviceWidth,
  },
}), 'div', ({ deviceWidth, ...p }) => p);

export const Panel = styled(({ display, axis, show, alignLabel, ...rest }) => ({
  position: 'relative',
  // border: '1px solid transparent',
  overflowY: 'auto',
  display: show === false ? 'none' : display,
  flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined,
  '> *': display === 'flex' && {
    overflowY: 'auto',
  },
  ...rest,
  '& .ant-form-item': alignLabel && { // oops, should not be here!
    marginBottom: 12,
    '> .ant-form-item-label': {
      textAlign: alignLabel,
    },
  },
}), 'div', ['children', 'itemScope', 'itemType']);

export const Container = styled(({ theme, width, padding, minHeight }) => ({
  width: width || 700,
  maxWidth: width || 700,
  minHeight,
  boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.08)',
  marginX: 'auto',
  padding: padding !== undefined ? padding : theme.space3,
  backgroundColor: '#FFFFFF',
  position: 'relative',
}), 'div', ({ width, minHeight, padding, ...p }) => p);

export const Placeholder = styled(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 200,
  fontSize: '200%',
  opacity: .5,
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
}), 'div', p => p);
