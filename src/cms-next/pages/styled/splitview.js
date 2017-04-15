import { styled } from 'olymp';

export const Splitview = styled(({ deviceWidth }) => ({
  display: 'flex',
  flex: 1,
  background: 'linear-gradient(0deg, #000000, #232323)',
  '> :first-child': {
    flex: 0,
    overflow: 'auto',
  },
  '> :not(:first-child)': {
    flex: 1,
    overflow: 'auto',
    margin: 'auto',
    maxWidth: deviceWidth,
  },
}), 'div', ({ deviceWidth, ...p }) => p);
