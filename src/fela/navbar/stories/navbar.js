import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Navbar from '../index';
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
const Icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-13 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z" fill={color}/></svg>
);

storiefy(
  'Basic usage',
  () => <Navbar pages={nav} />
);
storiefy(
  'Inverse theming',
  () => <Navbar pages={nav} inverse={boolean('inverse', true)} />
);
storiefy(
  'Full size',
  () => <Navbar pages={nav} inverse={boolean('inverse', true)} full={boolean('full', true)} />
);
storiefy(
  'Brand',
  () => (
    <Navbar
      pages={nav}
      brand={text('brand', 'Olymp ❤ CMS')}
      inverse={boolean('inverse', true)}
    />
  )
);
storiefy(
  'Logo (without styles)',
  () => (
    <Navbar
      pages={nav}
      logo={<Icon color={boolean('inverse', true) ? 'white' : '#8e44ad'} size="32" style={{ margin: '9px', display: 'block' }} />}
      inverse={boolean('inverse', true)}
    />
  )
);
storiefy(
  'Right aligned',
  () => (
    <Navbar
      pages={nav}
      brand={text('brand', 'Olymp ❤ CMS')}
      inverse={boolean('inverse', true)}
      right={boolean('right', true)}
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
