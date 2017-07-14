import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FelaDecorator, RouterDecorator } from './decorator';
import { createComponent } from 'react-fela';

const Container = createComponent(
  ({ customStyle }) => ({
    minHeight: '100vh',
    hasFlex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundColor: '#eeeeee',
    '> div': {
      width: '100%',
      '> div': {
        hasFlex: {
          display: 'flex',
          justifyContent: 'center',
        },
        /* padding: theme.space4,
        margin: theme.space3,
        backgroundColor: '#ffffff',
        border: '1px solid #dddddd', */
      },
    },
    ...customStyle,
  }),
  'div',
  ({ customStyle, ...p }) => Object.keys(p)
);

export default (title, customStyle) => (subtitle, compFn, text) =>
  storiesOf(title, module)
    .addDecorator(withKnobs)
    .addDecorator(storyFn =>
      <Container customStyle={customStyle || {}}>
        {storyFn()}
      </Container>
    )
    .addDecorator(RouterDecorator)
    .addDecorator(FelaDecorator)
    .addWithInfo(subtitle, text, compFn, {
      styles: style => ({
        ...style,
        info: {
          ...style.info,
          maxWidth: 960,
          margin: '0 auto',
          padding: '.5rem',
        },
      }),
    });
