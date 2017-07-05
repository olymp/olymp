import { Blocks } from 'olymp-pages';
import { border } from 'olymp-fela';

export default {
  ...Blocks.ContainerBlock,
  // key: 'GZK.Template.ContainerBlock',
  label: 'Container',
  category: 'Template',
  styles: ({ theme, color = theme.color }) => ({
    '& h1': {
      textAlign: 'left',
      position: 'relative',
      borderBottom: border(theme),
      marginTop: theme.space3,
      marginBottom: theme.space2,
      /* onAfter: {
        content: '""',
        bottom: -1,
        display: 'block',
        overflow: 'hidden',
        height: 1,
        left: 0,
        position: 'absolute',
        minWidth: 75,
        backgroundColor: color,
      },*/
      ifSmallDown: {
        // marginY: theme.space1,
      },
    },
    '& h2': {
      textAlign: 'left',
      position: 'relative',
      borderBottom: border(theme),
      marginTop: theme.space3,
      marginBottom: theme.space2,
      /* onAfter: {
        content: '""',
        bottom: -1,
        display: 'block',
        overflow: 'hidden',
        height: 1,
        left: 0,
        position: 'absolute',
        minWidth: 75,
        backgroundColor: color,
      },*/
      ifSmallDown: {
        // marginY: theme.space1,
      },
    },
    '& a': {
      color,
    },
    '& p': {
      marginBottom: theme.space2,
    },
    '& li': {
      marginY: theme.space2,
      onBefore: {
        content: '"■"',
        color,
        position: 'absolute',
        left: `-${theme.space3}`,
      },
    },
    '& blockquote': {
      display: 'block',
      position: 'relative',
      padding: theme.space3,
      paddingLeft: theme.space4,
      marginX: 'auto',
      marginY: theme.space3,
      // fontFamily: 'Times New Roman',
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.5rem',
      lineHeight: 1.2,
      borderLeft: `3px solid ${theme.color}`,
      color: theme.dark2,
      onBefore: {
        content: '"\\201C"',
        fontFamily: 'Times New Roman',
        fontSize: '3rem',
        fontWeight: 700,
        color: theme.dark3,
        position: 'absolute',
        left: 8,
        top: 0,
      },
    },
  }),
};
