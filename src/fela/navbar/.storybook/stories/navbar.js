import React from 'react';
import { Toggler, Navbar } from '../../index';
import { storiesOf } from '@kadira/storybook';
import { action } from '@kadira/storybook-addon-actions';
import { linkTo } from '@kadira/storybook-addon-links';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import centered from '@storybook/addon-centered';
import { FelaDecorator, RouterDecorator } from 'olymp-fela/storybook';


import Readme from '../../README.md';

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(RouterDecorator)
  .addDecorator(FelaDecorator)
  .addWithInfo(
    'with text',
    Readme,
    () => (
      <FelaProvider renderer={renderer}>
        <ThemeProvider>
          <Navbar
            // brand={<Logo color={color} title={title} text={text} />}
            inverse
            pages={[
              {
                id: 'home',
                name: 'Home',
                pathname: '/',
                children: [],
              }
            ]}
          />
        </ThemeProvider>
      </FelaProvider>
    )
  )
  .add('with some emoji', () => (
    <Toggler onClick={action('clicked')}>😀 😎 👍 💯</Toggler>
  ));
