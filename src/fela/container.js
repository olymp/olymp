import { styled } from 'olymp';

export default styled(() => ({
  position: 'relative',
  marginX: 'auto',
  paddingX: 15,
  ifSmallUp: {
    width: 540,
    maxWidth: '100%',
  },
  ifMediumUp: {
    width: 720,
    maxWidth: '100%',
  },
  ifLargeUp: {
    width: 960,
    maxWidth: '100%',
  },
  ifHugeUp: {
    width: 1140,
    maxWidth: '100%',
  },
}), 'div', p => p);
