import { Image } from 'olymp-cms/pages/blocks';
import { fade } from 'olymp-fela';

export default {
  ...Image,
  styles: {
    width: '100%',
    height: 'auto',
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    '> div': {
      '> div': {
        width: '66%',
        left: 'auto',
        right: 0,
        backgroundColor: fade('#ffa210', 90),
        color: '#FFFFFF',
        borderTopLeftRadius: 50,
        padding: '1rem 2rem',
        fontSize: '125%',
        '> h3': {
          fontSize: '145%',
          fontWeight: 300,
          lineHeight: 1.25,
        }
      }
    }
  },
};
