import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { Navbar } from '../index';
import { storiesOf } from '../.storybook';

const storiefy = storiesOf('Navbar');
const nav = [
  {
    id: 'home',
    name: 'Home',
    pathname: '/',
    children: [],
  },
  {
    id: 'm1',
    name: 'Menu with SubMenu',
    pathname: '/m1',
    children: [
      {
        id: 'sm1',
        name: 'SubMenu with SubMenu',
        pathname: '/sm1',
        children: [
          {
            id: 'ssm1',
            name: 'SubSubMenu with SubMenu',
            pathname: '/ssm1',
            children: [
              {
                id: 'sssm1',
                name: 'SubSubSubMenu 1',
                pathname: '/sssm1',
                children: [],
              },
              {
                id: 'sssm2',
                name: 'SubSubSubMenu 2',
                pathname: '/sssm2',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'sm2',
        name: 'SubMenu without SubMenu',
        pathname: '/sm2',
        children: [],
      },
    ],
  },
  {
    id: 'm2',
    name: 'Menu without SubMenu',
    pathname: '/m2',
    children: [],
  },
];

storiefy(
  'Basic usage',
  () => <Navbar pages={nav} />
);
storiefy(
  'Inverse theming',
  () => <Navbar pages={nav} inverse={boolean('inverse', true)} />
);
storiefy(
  'Full size theming',
  () => <Navbar pages={nav} inverse={boolean('inverse', true)} full={boolean('full', true)} />
);
storiefy(
  'Brand/logo',
  () => (
    <Navbar
      pages={nav}
      brand={text('brand', 'Olymp ❤ CMS')}
      inverse={boolean('inverse', true)}
    />
  )
);
storiefy(
  'Equal size nav-items',
  () => (
    <Navbar
      pages={nav}
      brand={text('brand', 'Olymp ❤ CMS')}
      inverse={boolean('inverse', true)}
      fill={boolean('fill', true)}
    />
  ),
  'works with flex!'
);
storiefy(
  'Vertical nav',
  () => (
    <Navbar
      pages={nav}
      brand={text('brand', 'Olymp ❤ CMS')}
      inverse={boolean('inverse', true)}
      vertically={boolean('vertically', true)}
    />
  )
);
storiefy(
  'Full featured',
  () => (
    <Navbar
      pages={nav}
      brand={text('brand', 'Olymp ❤ CMS')}
      inverse={boolean('inverse', true)}
      full={boolean('full', true)}
      vertically={boolean('vertically', false)}
      fill={boolean('fill', true)}
    />
  )
);
