import Container from './container';

export default {
  ...Container,
  type: 'Pages.Template.ContainerTextBlock',
  label: 'Container schmal',
  category: 'Template',
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
