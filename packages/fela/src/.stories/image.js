import React from 'react';
import { text, number, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from 'olymp-storybook';
import { createComponent, Image } from '../index';

const Img = createComponent(
  ({ theme }) => ({
    border: '1px solid gray',
    margin: theme.space2,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const storiefy = storiesOf('Image');

storiefy('Basic usage', () => <Image />);

storiefy('Fix width', () => <Image width={number('width', 250)} />);

storiefy('Percentage width', () => <Image width={text('width', '70%')} />);

storiefy('Maximum resolution', () =>
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

storiefy('Rounded', () =>
  (<Image
    width={number('width', 250)}
    height={number('height', 250)}
    rounded={boolean('rounded', true)}
  />)
);

storiefy('Mode', () =>
  (<div>
    <Img
      width={number('width', 250)}
      ratio={number('ratio', 1)}
      srcRatio={number('srcRatio', 0.75)}
      mode="filled"
    />
    <Img
      width={number('width', 250)}
      ratio={number('ratio', 1)}
      srcRatio={number('srcRatio', 0.75)}
      mode="padded"
    />
  </div>)
);

storiefy('Full featured', () =>
  (<Image
    width={number('width', 500)}
    height={number('height', undefined)}
    ratio={number('ratio', 0.75)}
    srcRatio={number('srcRatio', 0.75)}
    mode={select('mode', ['filled', 'padded'], 'filled')}
    rounded={boolean('rounded', false)}
    lazy={boolean('lazy', true)}
    alt={text('alt', 'cat picture')}
    maxResolution={number('maxResolution', 4000000)}
    minWidth={number('minWidth', undefined)}
    maxWidth={number('maxWidth', undefined)}
    minHeight={number('minHeight', undefined)}
    maxHeight={number('maxHeight', undefined)}
  />)
);
