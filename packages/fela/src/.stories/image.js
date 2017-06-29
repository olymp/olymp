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
  (<div>
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
    <Image width={200} lazy={boolean('lazy', true)} />
  </div>)
);

storiefy('Circle', () =>
  (<Image
    width={number('width', 250)}
    height={number('height', 250)}
    circle={boolean('circle', true)}
    setUrl={() => 'https://lorempixel.com/385/289/cats/385x289'}
  />)
);

storiefy('Full featured', () =>
  (<Image
    width={number('width', 500)}
    height={number('height', undefined)}
    lazy={boolean('lazy', true)}
    alt={text('alt', 'cat picture')}
    maxResolution={number('maxResolution', 4000000)}
    minWidth={number('minWidth', undefined)}
    maxWidth={number('maxWidth', undefined)}
    minHeight={number('minHeight', undefined)}
    maxHeight={number('maxHeight', undefined)}
  />)
);
