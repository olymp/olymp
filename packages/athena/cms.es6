import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import withLocale from 'olymp-locale/de';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader } from 'olymp-fela';
import { useBlockTypes } from 'olymp-slate';
import { useAuth } from 'olymp-auth';
import { LightboxProvider } from 'olymp-cloudinary';
import { DragDropContext } from 'react-dnd';
import { asyncComponent } from 'react-async-component';
import HTML5Backend from 'react-dnd-html5-backend';
import * as LANG from './lang/de';
import NoAuth from './cms-noauth';
// import IfAuth from './cms-auth';
const IfAuth = asyncComponent({
  resolve: () => System.import('./cms-auth'),
});

const enhance = compose(
  DragDropContext(HTML5Backend),
  useAuth,
  useBlockTypes,
  withPropsOnChange(['theme'], ({ theme }) => ({
    theme: {
      logoWhite: '/logo-white.svg',
      logoTitle: 'olymp cms',
      ...theme,
    },
  })),
  withLocale(LANG),
);

const Auth = connect(({ auth }) => ({
  isAuthenticated: !!auth.user,
}))(
  ({ isAuthenticated, ...rest }) => (isAuthenticated ? <IfAuth {...rest} /> : <NoAuth {...rest} />),
);

const Load = connect(({ auth }, { isNavigationLoading }) => ({
  isLoading: auth.verifying || isNavigationLoading,
}))(({ isLoading, ...rest }) => (isLoading ? <ScreenLoader /> : <Auth {...rest} />));

export default Wrapped =>
  enhance(({ theme, isLoading, ...rest }) => (
    <ThemeProvider theme={theme}>
      <LightboxProvider>
        <Load {...rest} Wrapped={Wrapped} />
      </LightboxProvider>
    </ThemeProvider>
  ));
