import React from 'react';
import { AuthModals } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { PageRoute } from 'olymp-pages';
import { Lightbox } from 'olymp-cloudinary';

export default (props) => {
  const { navigation, wrapper: Wrapped } = props;

  return (
    <div>
      <Lightbox />
      <AuthModals />
      <GatewayDest name="modal" />
      <PageRoute {...props} navigation={navigation} Wrapped={Wrapped} />
    </div>
  );
};
