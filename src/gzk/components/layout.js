import React, { Component } from 'react';
import Footer from './footer';
import Logo from './logo';
import { Navbar } from 'olymp-navbar';
import { styled } from 'olymp';

export const Header = styled(({ sticky }) => ({
  backgroundColor: 'white',
  boxShadow: sticky && '0 3px 11px 0 rgba(0,0,0,.06)',
}), 'nav', p => p);

export const Container = styled(({ }) => ({
  display: 'flex',
  position: 'relative',
  minHeight: '100vh',
  flexDirection: 'column',
  '> :not(:first-child):not(:last-child)': {
    flex: 1,
  },
}), ({ className, children, innerRef }) => (
  <div className={className} children={children} ref={innerRef} />
), p => p);

export default class Layout extends Component {
  static defaultProps = {
    pages: [],
  }
  render() {
    const { pages, color, title, text, location, links, children, ...rest } = this.props;
    const nav = pages.map(x => x.children)[0];

    return (
      <Container className="frontend" innerRef={node => { if (node) this.container = node }}>
        <Navbar
          brand={<Logo color={color} title={title} text={text} />}
          pages={nav}
          inverse
        />

        <Navbar
          brand={<Logo color={color} title={title} text={text} />}
          pages={nav}
        />

        <Navbar
          inverse
          vertically
          pages={nav}
        />

        <Navbar
          vertically
          pages={nav}
        />

        {children}
        <Footer {...this.props} />
      </Container>
    );
  }
}
