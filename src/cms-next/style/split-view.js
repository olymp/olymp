import { styled } from 'olymp';

export default styled(({ deviceWidth, color, center }) => ({
  display: 'flex',
  flex: 1,
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
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
    border: 0,
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.0667)',
    margin: '1rem auto',
  },
}), 'div', ({ deviceWidth, ...p }) => p);
