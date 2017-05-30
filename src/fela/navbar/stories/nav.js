import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Navbar from '../index';
import Super from '../super';
import { storiesOf } from '../.storybook';

const storiefy = storiesOf('Navbar.Nav');
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
  'Beni stinkt',
  () => <Super pages={nav} />
);
