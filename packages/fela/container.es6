import createComponent from './create-component';

export default createComponent(
  ({ theme, height, size }) => ({
    minHeight: 30,
    height,
    position: 'relative',
    marginX: 'auto',
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0,
    },
    ifMini: {
      width: '100%',
      paddingX: theme.space3,
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
  ({ height, ...p }) => Object.keys(p)
);
