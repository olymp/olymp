import React from 'react';
import { AuthModals } from 'olymp-auth';
import PageRoute from 'olymp-pages/route';
import { Lightbox } from 'olymp-cloudinary';
import { TopLoader } from 'olymp-fela';
import { connect } from 'react-redux';
import PrefetchRoutes from './prefetch-routes';

const component = connect(({ app, location }) => ({
  _isLoading: app.loading,
  showLightbox: location.query.lightbox !== undefined,
  showAuth:
    location.query.login !== undefined ||
    location.query.register !== undefined ||
    location.query.confirm !== undefined ||
    location.query.forgot !== undefined ||
    location.query.reset !== undefined ||
    location.query.login !== undefined,
}))(({ _isLoading, flatNavigation, showLightbox, showAuth, ...rest }) => [
  <TopLoader loading={_isLoading} key={1} />,
  showLightbox && <Lightbox key={2} />,
  showAuth && <AuthModals key={3} />,
  <PageRoute flatNavigation={flatNavigation} {...rest} key={4} />,
  <PrefetchRoutes flatNavigation={flatNavigation} key={5} />,
]);

component.displayName = 'CmsNoAuth';
export default component;
