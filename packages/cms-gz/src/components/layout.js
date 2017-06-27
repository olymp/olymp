import React, { Component } from 'react';
import Logo from './logo';
import {
  Navbar,
  Layout,
  Container,
  createComponent,
  WithColorProvider,
} from 'olymp-fela';
import { withScroll, withApollo } from 'olymp';
import { prefetchPage } from 'olymp-pages';

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
  p => <WithColorProvider><Layout {...p} /></WithColorProvider>,
  p => Object.keys(p)
);

export const Header = withScroll(
  createComponent(
    ({ theme, scrollTop }) => ({
      paddingY: theme.space3,
      ifSmallDown: {
        paddingY: theme.space0,
      },
      boxShadow: scrollTop && theme.boxShadow,
      transition: 'box-shadow 0.3s ease-in-out',
    }),
    ({ children, className }) =>
      (<Layout.Header className={className}>
        <Container>
          {children}
        </Container>
      </Layout.Header>),
    p => Object.keys(p)
  )
);

@withApollo
export default class GzLayout extends Component {
  static defaultProps = {
    pages: [],
  };
  prefetch = ({ id }) => {
    prefetchPage(this.props.client, id);
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
      { name: 'Einloggen', pathname: `${location.pathname}?login` },
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
            onItemMouseEnter={this.prefetch}
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
