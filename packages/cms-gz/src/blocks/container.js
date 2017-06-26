import { Blocks } from 'olymp-pages';
import { border } from 'olymp-fela';

export default {
  ...Blocks.ContainerBlock,
  key: 'GZK.Template.ContainerBlock',
  label: 'Container',
  category: 'Template',
  styles: ({ theme, color = theme.color }) => ({
    '& h1': {
      textAlign: 'left',
      position: 'relative',
      borderBottom: border(theme),
      marginTop: theme.space3,
      marginBottom: theme.space2,
      onAfter: {
        content: '""',
        bottom: -1,
        display: 'block',
        overflow: 'hidden',
        height: 1,
        left: 0,
        position: 'absolute',
        minWidth: 75,
        backgroundColor: color,
      },
    },
    '& h2': {
      textAlign: 'left',
      position: 'relative',
      borderBottom: border(theme),
      marginTop: theme.space3,
      marginBottom: theme.space2,
      onAfter: {
        content: '""',
        bottom: -1,
        display: 'block',
        overflow: 'hidden',
        height: 1,
        left: 0,
        position: 'absolute',
        minWidth: 75,
        backgroundColor: color,
      },
    },
    '& a': {
      color,
    },
  }),
};
