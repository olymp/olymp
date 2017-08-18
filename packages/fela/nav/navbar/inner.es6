import { createComponent } from 'react-fela';

export default createComponent(
  ({ vertically }) => ({
    clearfix: true,
    hasFlex: {
      display: 'flex',
      flexDirection: vertically ? 'column' : 'row',
      alignItems: vertically ? 'flex-start' : 'stretch',
    },
    ifMini: {
      flexDirection: 'column',
    },
  }),
  'div',
  ['className']
);
