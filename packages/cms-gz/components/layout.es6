import React from 'react';
import { withScroll } from 'olymp-utils';
import { compose, withPropsOnChange } from 'recompose';
import { Navbar } from 'olymp-cms';
import { get } from 'lodash';
import { Layout, Container, createComponent } from 'olymp-fela';
import { connect } from 'react-redux';
import Logo from './logo';

export const App = createComponent(
  ({ theme }) => ({
    fontFace: [
      {
        fontFamily: 'Oxygen',
        fontStyle: 'regular',
        fontWeight: 'normal',
        src: [
          '/fonts/oxygen-v6-latin-regular.svg',
          '/fonts/oxygen-v6-latin-regular.woff2',
          '/fonts/oxygen-v6-latin-regular.woff',
          '/fonts/oxygen-v6-latin-regular.ttf',
          '/fonts/oxygen-v6-latin-regular.svg',
        ],
      },
    ],
    backgroundColor: '#FFFFFF',
    fontFamily: 'Oxygen, sans-serif',
    fontSize: '105%',
    lineHeight: 1.75,
    '& h1, h2, h3, h4, h5, h6': {
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 200,
      lineHeight: 1.5,
    },
    ifMediumUp: {
      '& a[href^="tel"]:link, a[href^="tel"]:visited, a[href^="tel"]:hover, a[href^="fax"]:link, a[href^="fax"]:visited, a[href^="fax"]:hover': {
        color: theme.dark2,
        cursor: 'text',
      },
    },
    ifSmallDown: {
      '& h1': {
        fontSize: theme.fontSizeH1,
      },
      '& h2': {
        fontSize: theme.fontSizeH2,
      },
      '& h3': {
        fontSize: theme.fontSizeH3,
      },
      '& h4': {
        fontSize: theme.fontSizeH4,
      },
      '& h5': {
        fontSize: theme.fontSizeH5,
      },
      '& h6': {
        fontSize: theme.fontSizeH6,
      },
    },
    '& .slate-editor': {
      '& h1': {
        textAlign: 'left',
        position: 'relative',
        marginY: theme.space3,
        onAfter: {
          content: '""',
          bottom: -1,
          display: 'block',
          overflow: 'hidden',
          height: 1,
          left: 0,
          position: 'absolute',
          minWidth: 75,
          width: '100%',
          background: `linear-gradient(to right, ${theme.color}, #FFF)`,
        },
      },
      '& h2': {
        textAlign: 'left',
        position: 'relative',
        marginY: theme.space3,
        onAfter: {
          content: '""',
          bottom: -1,
          display: 'block',
          overflow: 'hidden',
          height: 1,
          left: 0,
          position: 'absolute',
          minWidth: 75,
          width: '100%',
          background: `linear-gradient(to right, ${theme.color}, #FFF)`,
        },
      },
      '& a': {
        color: theme.color,
      },
      '& p': {
        marginBottom: theme.space2,
      },
      '& li': {
        marginY: theme.space2,
        onBefore: {
          content: '"■"',
          color: theme.color,
          position: 'absolute',
          left: `-${theme.space2}`,
        },
      },
      '& blockquote': {
        display: 'block',
        position: 'relative',
        padding: theme.space2,
        paddingLeft: theme.space4,
        marginX: 'auto',
        marginY: theme.space2,
        fontFamily: 'Raleway, sans-serif',
        fontSize: '1.5rem',
        lineHeight: 1.2,
        borderLeft: `3px solid ${theme.color}`,
        color: theme.dark2,
        onBefore: {
          content: '"\\201C"',
          fontFamily: 'Times New Roman',
          fontSize: '3rem',
          fontWeight: 700,
          color: theme.dark3,
          position: 'absolute',
          left: 8,
          top: 0,
        },
      },
    },
  }),
  p => <Layout fullHeight {...p} />,
  p => Object.keys(p),
);

export const Header = withScroll(
  createComponent(
    ({ theme, scrollTop }) => ({
      // paddingY: theme.space3,
      ifSmallDown: {
        paddingY: theme.space2,
      },
      boxShadow: scrollTop && theme.boxShadow,
      transition: 'box-shadow 0.3s ease-in-out',
    }),
    ({ children, className }) => (
      <Layout.Header className={className}>
        <Container>{children}</Container>
      </Layout.Header>
    ),
    ({ scrollTop, ...p }) => Object.keys(p),
  ),
);

const enhance = compose(
  connect(({ auth, location }) => ({
    isAuthenticated: !!auth.user,
    pathname: location.pathname,
  })),
  withPropsOnChange(
    ['navigation', 'isAuthenticated', 'pathname'],
    ({ navigation, isAuthenticated, pathname }) => ({
      nav: get(navigation.filter(x => x.type === 'MENU')[0], 'children', []),
      footer: !isAuthenticated
        ? [
            ...get(
              navigation.filter(x => x.type === 'MENU')[1],
              'children',
              [],
            ),
            {
              name: 'Einloggen',
              pathname: `${pathname}?login`,
            },
          ]
        : get(navigation.filter(x => x.type === 'MENU')[1], 'children', []),
    }),
  ),
);

const GzLayout = enhance(({ nav, footer, color, title, text, children }) => (
  <App affix>
    <Header>
      <Navbar
        pages={nav}
        brand={<Logo color={color} title={title} text={text} />}
        full
        right
        mega={({ isMega }) => isMega}
      />
    </Header>
    <Layout.Body>
      <Layout>
        <Layout.Body>{children}</Layout.Body>
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
));
GzLayout.displayName = 'GzLayout';
export default GzLayout;
