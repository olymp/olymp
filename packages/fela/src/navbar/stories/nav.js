import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Navbar from '../index';
import { storiesOf } from '../.storybook';

const storiefy = storiesOf('Navbar.Nav');
const nav1 = [
  {
    id: 'home',
    name: 'Nav 1 - Item 1',
    pathname: '/',
    children: [],
  },
];
const nav2 = [
  {
    id: 'm1',
    name: 'Nav 2 - Item 1',
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
    name: 'Nav 2 - Item 2',
    pathname: '/m2',
    children: [],
  },
];

storiefy('Basic usage', () =>
  (<Navbar brand="Olymp ❤ CMS" inverse>
    <Navbar.Nav pages={nav1} />
    <Navbar.Nav pages={nav2} />
  </Navbar>)
);
storiefy('Right aligned', () =>
  (<Navbar brand="Olymp ❤ CMS" inverse>
    <Navbar.Nav pages={nav1} right={boolean('right [nav1]', false)} />
    <Navbar.Nav pages={nav2} right={boolean('right [nav2]', true)} />
  </Navbar>)
);
