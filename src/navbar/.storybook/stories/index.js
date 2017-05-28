import React from 'react';
import { Toggler } from '../../index';
import { storiesOf } from '@kadira/storybook';
import { action } from '@kadira/storybook-addon-actions';
import { linkTo } from '@kadira/storybook-addon-links';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import centered from '@storybook/addon-centered';
import Button from './Button';
import Welcome from './Welcome';
import { ThemeProvider, createFela } from 'olymp/ui';
import { Provider as FelaProvider } from 'react-fela';

const renderer = createFela();

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
      <FelaProvider renderer={renderer}>
        <ThemeProvider>
          <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>
        </ThemeProvider>
      </FelaProvider>
    )
  )
  .add('with some emoji', () => (
    <FelaProvider renderer={renderer}>
      <ThemeProvider>
        <Toggler onClick={action('clicked')}>😀 😎 👍 💯</Toggler>
      </ThemeProvider>
    </FelaProvider>
  ));
