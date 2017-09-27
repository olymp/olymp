import React from 'react';
import { AuthModals } from 'olymp-auth';
import PageRoute from 'olymp-pages/route';
import { Lightbox } from 'olymp-cloudinary';
import { TopLoader } from 'olymp-fela';
import { connect } from 'react-redux';

const component = connect(({ app }) => ({
  _isLoading: app.loading,
}))(({ _isLoading, ...rest }) => [
  <TopLoader loading={_isLoading} key={1} />,
  <Lightbox key={2} />,
  <AuthModals key={3} />,
  <PageRoute {...rest} key={4} />,
]);

component.displayName = 'CmsNoAuth';
export default component;
