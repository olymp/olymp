import React from 'react';
import { AuthModals } from 'olymp-auth';
import PageRoute from 'olymp-pages/route';
import { Lightbox } from 'olymp-cloudinary';
import { TopLoader } from 'olymp-fela';
import { connect } from 'react-redux';
import PrefetchRoutes from './prefetch-routes';

const component = connect(({ app }) => ({
  _isLoading: app.loading,
}))(({ _isLoading, flatNavigation, ...rest }) => [
  <TopLoader loading={_isLoading} key={1} />,
  <Lightbox key={2} />,
  <AuthModals key={3} />,
  <PageRoute flatNavigation={flatNavigation} {...rest} key={4} />,
  <PrefetchRoutes flatNavigation={flatNavigation} key={5} />,
]);

component.displayName = 'CmsNoAuth';
export default component;
