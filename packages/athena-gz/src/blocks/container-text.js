import Container from './container';

export default {
  ...Container,
  key: 'GZK.Template.ContainerTextBlock',
  label: 'Container Text',
  category: 'Template',
  styles: ({ theme, color = theme.color }) => ({
    ...Container.styles({ theme, color }),
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
  }),
};
