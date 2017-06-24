import React, { Component } from 'react';
import Logo from './logo';
import { Navbar, Layout, Container, createComponent } from 'olymp-fela';

export const App = createComponent(
  ({ theme }) => ({
    backgroundColor: '#FFFFFF',
    fontFamily: 'Oxygen, sans-serif',
    fontSize: '105%',
    lineHeight: 1.75,
    '& h1, h2, h3, h4, h5, h6': {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 200,
      lineHeight: 1.5,
    },
  }),
  p => <Layout {...p} />,
  p => Object.keys(p)
);

export const Header = createComponent(
  ({ theme }) => ({
    paddingY: theme.space3,
    ifSmallDown: {
      paddingY: theme.space0,
    },
    boxShadow: theme.boxShadow,
  }),
  ({ children, className }) =>
    (<Layout.Header className={className}>
      <Container>
        {children}
      </Container>
    </Layout.Header>),
  p => Object.keys(p)
);

export default class GzLayout extends Component {
  static defaultProps = {
    pages: [],
  };
  render() {
    const {
      pages,
      color,
      title,
      text,
      location,
      links,
      children,
      ...rest
    } = this.props;
    const nav = (pages.map(x => x.children)[0] || [])
      .filter(x => x.slug !== '/');
    const footer = [
      ...(pages.map(x => x.children)[1] || []),
      { name: 'Einloggen', pathname: '/?login' },
    ];

    return (
      <App fullHeight>
        <Header>
          <Navbar
            pages={nav}
            logo={<Logo color={color} title={title} text={text} />}
            full
            right
            mega
          />
        </Header>
        <Layout.Body affix>
          <Layout>
            <Layout.Body>
              {children}
            </Layout.Body>

            <Layout.Footer container>
              <Navbar full>
                <Navbar.Nav
                  pages={[
                    {
                      name: `GesundheitsZentrum Kelkheim. Copyright ${new Date().getFullYear()}`,
                    },
                  ]}
                />
                <Navbar.Nav pages={footer} right />
              </Navbar>
            </Layout.Footer>
          </Layout>
        </Layout.Body>
      </App>
    );
  }
}
