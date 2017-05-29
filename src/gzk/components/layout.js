import React, { Component } from 'react';
import Footer from './footer';
import Logo from './logo';
import { Navbar, Nav, Layout } from 'olymp-fela';
import { styled } from 'olymp';

export const Header = styled(({ sticky }) => ({
  backgroundColor: 'white',
  boxShadow: sticky && '0 3px 11px 0 rgba(0,0,0,.06)',
}), 'nav', p => p);

export default class GzLayout extends Component {
  static defaultProps = {
    pages: [],
  }
  render() {
    const { pages, color, title, text, location, links, children, ...rest } = this.props;
    const nav = pages.map(x => x.children)[0];

    return (
      <Layout>
        <Layout.Header container>
          <Navbar brand={<Logo color={color} title={title} text={text} />}>
            <Nav pages={nav} right />
          </Navbar>
        </Layout.Header>
        <Layout.Body container>
          {children}
        </Layout.Body>
        <Layout.Footer container>
          <Footer {...this.props} />
        </Layout.Footer>
      </Layout>
    );
  }
}
