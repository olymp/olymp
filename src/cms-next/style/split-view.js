import { styled } from 'olymp';

export default styled(({ deviceWidth, color, center }) => ({
  display: 'flex',
  flex: 1,
  background: color && 'linear-gradient(0deg, #000000, #232323)',
  '> :first-child': {
    flex: 0,
    overflowY: 'auto',
  },
  '> :not(:first-child)': {
    flex: 1,
    overflowY: 'auto',
    margin: center && 'auto',
    maxWidth: deviceWidth,
  },
  '> iframe': {
    height: '100%',
    border: 0,
  },
}), 'div', ({ deviceWidth, ...p }) => p);
