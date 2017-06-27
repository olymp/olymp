import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FelaDecorator, RouterDecorator } from './decorator';
import { createComponent } from 'react-fela';

const Container = createComponent(
  ({ customStyle }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...customStyle,
  }),
  'div',
  p => Object.keys(p)
);

export default (title, centered, customStyle) => (subtitle, compFn, text) =>
  storiesOf(title, module)
    .addDecorator(withKnobs)
    .addDecorator(
      storyFn =>
        centered
          ? <Container customStyle={customStyle || {}}>{storyFn()}</Container>
          : <div>{storyFn()}</div>
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
