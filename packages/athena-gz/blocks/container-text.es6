import { Blocks } from 'olymp-pages';
import Container from './container';

export default {
  ...Blocks.ContainerTextBlock,
  type: 'GZK.Template.ContainerTextBlock',
  styles: ({ theme, color = theme.color }) => ({
    ...Container.styles({ theme, color }),
    ...Blocks.ContainerTextBlock.styles({ theme, color }),
  }),
};
