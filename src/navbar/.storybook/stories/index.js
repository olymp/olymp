import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { action } from '@kadira/storybook-addon-actions';
import { linkTo } from '@kadira/storybook-addon-links';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import centered from '@storybook/addon-centered';
import Button from './Button';
import Welcome from './Welcome';

import Readme from '../../README.md';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo(
    'with text',
    Readme,
    () => (
      <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>
    )
  )
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
