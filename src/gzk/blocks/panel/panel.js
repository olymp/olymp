import React from 'react';
import { styled } from 'olymp';

export default styled(({ theme, size = 1, columns = 3, background = theme.dark5, color = theme.dark2, padding }) => ({
  width: `${100 / columns * size}%`,
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
  '> p': {
    backgroundColor: background,
    color,
    padding: padding || `${theme.space2} 1.33rem 1.33rem ${theme.space2}`,
    borderBottomRightRadius: 100,
    display: 'flex',
    hyphens: 'auto',
    flex: '1 1',
    minHeight: 80,
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
    width: '100%',
    float: 'none',
    paddingX: theme.space2,
    paddingTop: theme.space2,
    paddingBottom: theme.space0,
  }
}), ({ className, title, children }) => (
  <div className={className}>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
), p => p);
