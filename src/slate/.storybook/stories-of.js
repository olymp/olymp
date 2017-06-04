import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { FelaDecorator } from 'olymp-fela/storybook';
import { styled } from 'olymp';

export default (title, centered, customStyle) => (subtitle, compFn, text) => storiesOf(title, module)
  .addDecorator(withKnobs)
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
  }
);
