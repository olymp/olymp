import { createComponent } from 'react-fela';
import HeaderBlock from 'olymp-pages/blocks/header';

export const getHeaderStyles = ({ theme, color }) => ({
  width: '100%',
  backgroundColor: color || '#71636a',
  color: theme.light,
  borderBottomRightRadius: 60,
  paddingX: theme.space3,
  paddingY: '1.33rem',
  marginBottom: theme.space3,
  '> div': {
    '> h1': {
      color: theme.light,
      lineHeight: 'initial',
    },
  },
  ifSmallDown: {
    borderBottomRightRadius: 50,
    marginX: theme.space2,
    width: 'calc(100% - 1rem)',
  },
});

const GzHeader = createComponent(
  ({ theme, readOnly }) => ({
    ...HeaderBlock.styles({ theme }),
    ...getHeaderStyles({ theme }),
  }),
  HeaderBlock.component,
  p => Object.keys(p),
);
GzHeader.displayName = 'GzHeader';

export default GzHeader;
