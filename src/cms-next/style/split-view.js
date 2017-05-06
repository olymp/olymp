import { styled } from 'olymp';

export default styled(({ deviceWidth, color, center }) => ({
  display: 'flex',
  flex: 1,
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
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
