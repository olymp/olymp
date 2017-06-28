import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from 'olymp-storybook';
import Image from '../image';

const storiefy = storiesOf('Image');

storiefy('Basic usage', () => <Image />);

storiefy('Fix width', () => <Image width={number('width', 250)} />);

storiefy('Percentage width', () => <Image width={text('width', '70%')} />);

storiefy('Maximum resolution in pixels', () =>
  (<Image
    width={text('width', '70%')}
    maxResolution={number('maxResolution', 2500000)}
  />)
);

storiefy('Fix height', () => <Image height={number('height', 250)} />);

storiefy('Min-/max-dimensions', () =>
  (<Image
    width={number('width', 500)}
    maxResolution={2500000}
    minWidth={number('minWidth', undefined)}
    maxWidth={number('maxWidth', undefined)}
    minHeight={number('minHeight', undefined)}
    maxHeight={number('maxHeight', 200)}
  />)
);

storiefy('Lazy loading', () =>
  <Image width="100%" maxResolution={2500000} lazy={boolean('lazy', true)} />
);

storiefy('Full featured', () =>
  (<Image
    width={number('width', 500)}
    height={number('height', undefined)}
    lazy={boolean('lazy', true)}
    maxResolution={number('maxResolution', 4000000)}
    minWidth={number('minWidth', undefined)}
    maxWidth={number('maxWidth', undefined)}
    minHeight={number('minHeight', undefined)}
    maxHeight={number('maxHeight', undefined)}
  />)
);
