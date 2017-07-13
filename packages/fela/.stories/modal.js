import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf, longText } from 'olymp-storybook';
import { createComponent, Modal } from '../index';

const storiefy = storiesOf('Modal');

storiefy('Basic usage', () =>
  (<Modal open={boolean('open', true)} onClose={() => console.log('close')}>
    {longText}
  </Modal>)
);
