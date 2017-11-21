import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ right = true }) => ({
    display: 'flex',
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: !right && 0,
    right: right && 0,
    height: '100%',
    zIndex: 300,
  }),
  'div',
);
