import React from 'react';
import { Grid, createComponent, fade } from 'olymp-fela';
import { H1 } from './heading';

export const Content = createComponent(
  ({
    theme,
    background = theme.dark5,
    color = theme.dark2,
    padding = theme.space3,
  }) => ({
    backgroundColor: background,
    color,
    padding,
    borderBottomRightRadius: 100,
    // display: 'flex',
    hyphens: 'auto',
    flex: '1 1',
    minHeight: 90,
    '> iframe': {
      display: 'block',
      borderBottomRightRadius: 100,
    },
  }),
  'div',
  ({ padding, background, color, accent, ...p }) => Object.keys(p)
);

export default createComponent(
  ({ theme, background = theme.dark5, accent }) => ({
    width: '100%',
    paddingX: theme.space3,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: theme.dark2,
      onHover: {
        color: accent,
      },
    },
    onAfter: {
      content: '""',
      position: 'absolute',
      width: 33,
      height: 33,
      backgroundColor: theme.dark4,
      bottom: 0,
      borderTopLeftRadius: 30,
      right: theme.space3,
    },
    '> h2': {
      marginBottom: theme.space1,
    },
    onHover: {
      onAfter: {
        backgroundColor: fade(
          accent || (background === theme.dark5 ? theme.color : background)
        ),
      },
    },
    ifSmallDown: {
      float: 'none',
      paddingX: theme.space3,
      paddingY: theme.space2,
    },
  }),
  ({
    title,
    children,
    padding,
    background,
    accent,
    color,
    bordered,
    ...rest
  }) =>
    (<Grid.Item mini={12} {...rest}>
      <H1 color={accent || background} bordered={bordered}>{title}</H1>
      <Content
        padding={padding}
        accent={accent}
        background={background}
        color={color}
      >
        {children}
      </Content>
    </Grid.Item>),
  p => Object.keys(p)
);
