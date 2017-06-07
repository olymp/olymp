import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import Navbar from '../index';
import { storiesOf } from '../.storybook';

const storiefy = storiesOf('Navbar.Toggler');
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
  () => (
    <Navbar brand="Show me on screen < 479px" inverse>
      <Navbar.Toggler>
        <Navbar.Nav>
          <Navbar.Item title="Left Group - Item 1" />
          <Navbar.Item title="Left Group - Item 2" />
        </Navbar.Nav>
        <Navbar.Nav right>
          <Navbar.Item title="Right Group - Item with SubMenu">
            <Navbar.Nav>
              <Navbar.Item title="SubItem 1">
                <Navbar.Nav>
                  <Navbar.Item title="SubItem 1" />
                  <Navbar.Item title="SubItem 2" />
                </Navbar.Nav>
              </Navbar.Item>
              <Navbar.Item title="SubItem 2" />
            </Navbar.Nav>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar.Toggler>
    </Navbar>
  ),
  ''
);
