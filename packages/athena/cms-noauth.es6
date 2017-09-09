import React from 'react';
import { AuthModals } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { PageRoute } from 'olymp-pages';
import { Lightbox } from 'olymp-cloudinary';
import { TopLoader } from 'olymp-fela';
import { connect } from 'react-redux';

export default connect(({ app }) => ({
  _isLoading: app.loading,
}))((props) => {
  const { navigation, wrapper: Wrapped, _isLoading } = props;

  return (
    <div>
      <TopLoader loading={_isLoading} />
      <Lightbox />
      <AuthModals />
      <GatewayDest name="modal" />
      <PageRoute {...props} navigation={navigation} Wrapped={Wrapped} />
    </div>
  );
});
