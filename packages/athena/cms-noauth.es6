import React from 'react';
// import { AuthModals } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import PageRoute from 'olymp-pages/page-route';
import { Lightbox } from 'olymp-cloudinary/lightbox';
import { asyncComponent } from 'react-async-component';

const AuthModals = asyncComponent({
  resolve: () => System.import('olymp-auth/routes'),
});

export default props => {
  const { navigation, wrapper: Wrapped, query } = props;
  const isAuth =
    query.login !== undefined ||
    query.register !== undefined ||
    query.confirm !== undefined ||
    query.reset !== undefined ||
    query.status !== undefined;
  return (
    <div>
      <Lightbox />
      {isAuth && <AuthModals />}
      <GatewayDest name="modal" />
      <PageRoute {...props} navigation={navigation} Wrapped={Wrapped} />
    </div>
  );
};
