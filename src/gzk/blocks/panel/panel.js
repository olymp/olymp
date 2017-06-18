import React from 'react';
import { Grid, createComponent, fade } from 'olymp-fela';
import { H2 } from '../../components';

export default createComponent(
  ({
    theme,
    background = theme.dark5,
    color = theme.dark2,
    padding = '1.33rem',
  }) => ({
    width: '100%',
    paddingTop: theme.space3,
    paddingX: theme.space2,
    position: 'relative',
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    '> h2': {
      marginBottom: theme.space1,
    },
    '> div': {
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
    },
    onAfter: {
      content: '""',
      position: 'absolute',
      width: 33,
      height: 33,
      backgroundColor: theme.dark4,
      bottom: 0,
      borderTopLeftRadius: 30,
      right: theme.space2,
    },
    onHover: {
      onAfter: {
        backgroundColor: fade(
          background === theme.dark5 ? theme.color : background
        ),
      },
    },
    ifSmallDown: {
      float: 'none',
      paddingX: theme.space3,
      paddingY: theme.space2,
    },
  }),
  ({ title, children, padding, background, color, bordered, ...rest }) =>
    <Grid.Item mini={12} {...rest}>
      <H2 color={background} bordered={bordered}>{title}</H2>
      <div>{children}</div>
    </Grid.Item>,
  p => Object.keys(p)
);
