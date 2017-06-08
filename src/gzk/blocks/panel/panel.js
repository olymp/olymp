import React from 'react';
import { Grid, createComponent } from 'olymp-fela';

export default createComponent(({ theme, background = theme.dark5, color = theme.dark2, padding = '1.33rem' }) => ({
  width: '100%',
  float: 'left',
  padding: `${theme.space3} 0 0 ${theme.space3}`,
  position: 'relative',
  textAlign: 'justify',
  display: 'flex',
  flexDirection: 'column',
  '> h2': {
    marginBottom: theme.space1,
    fontWeight: 300,
    fontStyle: 'italic',
  },
  '> div': {
    backgroundColor: background,
    color,
    padding,
    borderBottomRightRadius: 100,
    display: 'flex',
    hyphens: 'auto',
    flex: '1 1',
    minHeight: 90,
    '> iframe': {
      display: 'block',
      borderBottomRightRadius: 100,
    }
  },
  onAfter: {
    content: '""',
    position: 'absolute',
    width: 33,
    height: 33,
    backgroundColor: theme.dark4,
    bottom: 0,
    borderTopLeftRadius: 30,
    right: 0,
  },
  onHover: {
    onAfter: {
      backgroundColor: theme.color,
    },
  },
  ifSmallDown: {
    float: 'none',
    paddingX: theme.space2,
    paddingTop: theme.space2,
    paddingBottom: theme.space0,
  }
}), ({ title, children, padding, background, color, ...rest }) => (
  <Grid.Item mini={12} {...rest}>
    <h2>{title}</h2>
    <div>{children}</div>
  </Grid.Item>
), p => Object.keys(p));
