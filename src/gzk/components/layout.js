import React, { Component } from 'react';
import Logo from './logo';
import { Navbar, Layout, createComponent } from 'olymp-fela';

export const Header = createComponent(({ theme }) => ({
  paddingY: theme.space3,
  ifSmallDown: {
    paddingY: theme.space0,
  }
}), ({ children, className }) => (
  <Layout.Header className={className} container>
    {children}
  </Layout.Header>
), p => Object.keys(p));

export default class GzLayout extends Component {
  static defaultProps = {
    pages: [],
  }
  render() {
    const { pages, color, title, text, location, links, children, ...rest } = this.props;
    const nav = (pages.map(x => x.children)[0] || [])
      .filter(x => x.slug !== '/');
    const footer = [
      ...(pages.map(x => x.children)[1] || []),
      { name: 'Einloggen', pathname: '/?login', }
    ];

    return (
      <Layout>
        <Header>
          <Navbar pages={nav} logo={<Logo color={color} title={title} text={text} />} full right mega />
        </Header>
        <Layout.Body>
          {children}
        </Layout.Body>
        <Layout.Footer container>
          <Navbar full>
            <Navbar.Nav
              pages={[{ name: `GesundheitsZentrum Kelkheim. Copyright ${new Date().getFullYear()}` }]}
            />
            <Navbar.Nav pages={footer} right />
          </Navbar>
        </Layout.Footer>
      </Layout>
    );
  }
}
