import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme, height, size, marginTop }) => ({
    minHeight: 30,
    height,
    marginTop,
    position: 'relative',
    marginX: 'auto',
    paddingX: theme.space2,
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
    extend: [
      {
        condition: size === 'small',
        style: {
          onAfter: {
            content: '""',
            clear: 'both',
            display: 'block',
            visibility: 'hidden',
            height: 0,
          },
          ifMediumUp: {
            width: 400,
            maxWidth: '100%',
          },
          ifLargeUp: {
            width: 520,
            maxWidth: '100%',
          },
          ifHugeUp: {
            width: 640,
            maxWidth: '100%',
          },
        },
      },
    ],
  }),
  'div',
  ({ height, marginTop, ...p }) => Object.keys(p),
);
