import { createComponent, border } from 'olymp-fela';

const style = {
  fontWeight: 200,
  // fontStyle: 'italic',
};

const coloredBorder = (theme, color) => ({
  position: 'relative',
  borderBottom: border(theme),
  onBefore: {
    bottom: -1,
    content: '""',
    display: 'block',
    height: 1,
    left: 0,
    position: 'absolute',
    width: '20%',
    backgroundColor: color || '#ffa210',
  }
});

export const H1 = createComponent(({ theme, color }) => ({
  ...style,
  ...coloredBorder(theme, color)
}), 'h1', ({ borderColor, ...p }) => Object.keys(p));

export const H2 = createComponent(({ theme, color }) => ({
  ...style,
  ...coloredBorder(theme, color)
}), 'h2', ({ borderColor, ...p }) => Object.keys(p));
