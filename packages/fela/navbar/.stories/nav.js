import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Navbar from '../index';
import { storiesOf } from 'olymp-storybook';

const storiefy = storiesOf('Navbar.Nav');
const nav = [
  {
    id: 'm1',
    name: 'Item 1',
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
    name: 'Item 2',
    pathname: '/m2',
    children: [],
  },
];

storiefy('Basic usage', () =>
  (<Navbar brand="Olymp ❤ CMS" full inverse>
    <Navbar.Nav pages={nav} />
  </Navbar>)
);
storiefy('Right aligned', () =>
  (<Navbar brand="Olymp ❤ CMS" full inverse>
    <Navbar.Nav pages={nav} right={boolean('right', true)} />
  </Navbar>)
);
