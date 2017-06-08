import { createComponent } from 'react-fela';

export default createComponent(({ theme }) => ({
  minHeight: 30,
  position: 'relative',
  marginX: 'auto',
  // paddingX: theme.space3,
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  },
  ifMini: {
    width: '100%',
  },
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
}), 'div', p => Object.keys(p));
