import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, large, collapsed, extra }) => ({
    width: !extra ? 54 : 40,
    textAlign: extra && 'right',
    ellipsis: true,
    '> *': {
      display: 'block',
      margin: '0 auto',
    },
    '> svg': {
      size: large ? 32 : !extra ? 20 : 14,
    },
    '> img': {
      size: large ? 40 : !extra ? 32 : 20,
      borderRadius: collapsed ? '50%' : theme.borderRadius,
    },
  }),
  ({ children, className }) => <div className={className}>{children}</div>,
  ({ large, inverted, ...p }) => Object.keys(p),
);
