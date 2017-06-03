import { Image } from 'olymp-cms/pages/blocks';

export default {
  ...Image,
  styles: {
    width: '100%',
    height: 'auto',
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    '> div': {
      width: '66%',
      left: 'auto',
      right: 0,
      backgroundColor: '#ffa210',
      color: '#FFFFFF',
      borderTopLeftRadius: 50,
      padding: '1rem 2rem',
      '> h3': {
        fontSize: '1.4rem',
        fontWeight: 300,
        lineHeight: 1.25,
      }
    }
  },
};
