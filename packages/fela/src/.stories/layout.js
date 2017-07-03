import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { storiesOf, shortText, longText } from 'olymp-storybook';
import { createComponent, Layout, border } from '../index';

const storiefy = storiesOf('Layout');

const Header = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    textAlign: 'center',
    border: border(theme, 'green'),
    marginY: 1,
  }),
  p => <Layout.Header {...p} />,
  p => Object.keys(p)
);

const Body = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    textAlign: 'justify',
    border: border(theme, 'red'),
    marginY: 1,
  }),
  p => <Layout.Body {...p} />,
  p => Object.keys(p)
);

const Footer = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    textAlign: 'center',
    border: border(theme, 'blue'),
    marginY: 1,
  }),
  p => <Layout.Footer {...p} />,
  p => Object.keys(p)
);

storiefy('Basic usage', () =>
  (<Layout>
    <Header>Header</Header>
    <Body>Body</Body>
    <Footer>Footer</Footer>
  </Layout>)
);

storiefy('Full height', () =>
  (<Layout fullHeight={boolean('fullHeight', true)}>
    <Header>
      Layout-Container will have minimum 100% height and Layout.Body will fill
      empty space
    </Header>
    <Body>
      <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
      {shortText}
    </Body>
    <Footer>Footer</Footer>
  </Layout>)
);

storiefy('Containered', () =>
  (<Layout fullHeight>
    <Header>Header, body and footer can be (responsive) containered.</Header>
    <Body container={boolean('container', true)}>
      <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
      {shortText}
    </Body>
    <Footer>Footer</Footer>
  </Layout>)
);

storiefy('Affix', () =>
  (<Layout affix={boolean('affix', true)}>
    <Header>
      <p>
        Affix layout-container will have exactly 100% height and Layout.Body
        will fill empty space.
      </p>
      <p>If space is not enough, body will be scrollable.</p>
    </Header>
    <Body>
      <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
      {longText}
    </Body>
    <Footer>Footer</Footer>
  </Layout>)
);

storiefy('Only header affix', () =>
  (<Layout affix={boolean('affix', true)}>
    <Header>
      <p>With nested layouts you can fix only header</p>
    </Header>
    <Body>
      <Layout>
        <Body>
          <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
          {longText}
        </Body>
        <Footer>Footer</Footer>
      </Layout>
    </Body>
  </Layout>)
);
