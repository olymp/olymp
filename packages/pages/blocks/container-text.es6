import Container from './container';

export default {
  ...Container,
  type: 'containerText',
  label: 'Container schmal',
  category: 'Layout',
  defaultNodes: () => ['paragraph'],
  styles: () => ({
    maxWidth: '100%',
    ifMediumUp: {
      width: 400,
    },
    ifLargeUp: {
      width: 520,
    },
    ifHugeUp: {
      width: 640,
    },
  }),
};
