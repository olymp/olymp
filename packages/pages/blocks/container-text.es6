import Container from './container';

export default {
  ...Container,
  key: 'Pages.Template.ContainerTextBlock',
  label: 'Container schmall',
  category: 'Template',
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
