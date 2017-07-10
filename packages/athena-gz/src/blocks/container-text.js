import Container from './container';

export default {
  ...Container,
  key: 'GZK.Template.ContainerTextBlock',
  label: 'Container Text',
  category: 'Template',
  styles: ({ theme, color = theme.color }) => ({
    ...Container.styles({ theme, color }),
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
