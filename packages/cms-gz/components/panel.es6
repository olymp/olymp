import React from 'react';
import { Grid, createComponent, fade } from 'olymp-fela';
import { H2 } from './heading';

const Clearfix = createComponent(
  ({ theme, color = theme.color }) => ({
    clear: 'both',
  }),
  'div',
  p => Object.keys(p)
);

export const Content = createComponent(
  ({ theme, accent, padding = theme.space3, size = 1 }) => ({
    borderRight: `${size}px solid ${!accent ? theme.color : fade(accent)}`,
    borderBottom: `${size}px solid ${!accent ? theme.color : fade(accent)}`,
    borderBottomRightRadius: 100,
    paddingTop: 0,
    paddingBottom: padding,
    paddingLeft: 0,
    paddingRight: padding,
    hyphens: 'auto',
    flex: '1 1 auto',
    position: 'relative',
    minHeight: 120,
    '> iframe': {
      borderBottomRightRadius: 100,
      display: 'block',
    },
    onBefore: {
      content: '""',
      position: 'absolute',
      bottom: -size,
      right: -size,
      top: -size,
      width: size,
      background:
        'linear-gradient(to bottom, #FFF 33%, rgba(255, 255, 255, 0.0001) 100%)',
    },
    onAfter: {
      content: '""',
      position: 'absolute',
      bottom: -size,
      left: -size,
      right: -size,
      height: size,
      background:
        'linear-gradient(to right, #FFF 33%, rgba(255, 255, 255, 0.0001) 100%)',
    },
  }),
  'div',
  ({ padding, background, color, accent, ...p }) => Object.keys(p)
);

export default createComponent(
  ({
    theme,
    paddingLeft = theme.space3,
    paddingRight = theme.space3,
    background = theme.dark5,
    accent,
  }) => ({
    width: '100%',
    paddingLeft,
    paddingRight,
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
    },
    '> h2': {
      onAfter: {
        content: '""',
        bottom: -1,
        display: 'block',
        overflow: 'hidden',
        height: 1,
        left: 0,
        position: 'absolute',
        minWidth: 75,
        width: '100%',
        background: `linear-gradient(to right, ${accent || theme.color}, #FFF)`,
      },
    },
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
    onHover: {
      onAfter: {
        backgroundColor: fade(
          accent || (background === theme.dark5 ? theme.color : background)
        ),
      },
    },
    ifSmallDown: {
      paddingX: theme.space3,
      paddingY: theme.space2,
    },
  }),
  ({
    title,
    subtitle,
    children,
    padding,
    background,
    accent,
    color,
    bordered,
    paddingLeft,
    paddingRight,
    ...rest
  }) =>
    (<Grid.Item mini={12} {...rest}>
      <H2 color={accent || background} bordered={bordered} subtitle={subtitle}>
        {title}
      </H2>
      <Content padding={padding} accent={accent} color={color}>
        {children}

        <Clearfix />
      </Content>
    </Grid.Item>),
  p => Object.keys(p)
);
