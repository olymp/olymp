import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext } from 'recompose';
import { AppContainer } from 'react-hot-loader';
import UAParser from 'ua-parser-js';

const enhance = compose(
  withContext(
    {
      amp: PropTypes.bool,
      ua: PropTypes.object,
    },
    ({ isAmp, ua }) => ({
      amp: !!isAmp,
      ua: ua && typeof ua === 'string' ? new UAParser(ua) : ua,
    })
  )
);
export default Component =>
  enhance(({ client, renderer, store, dynamicRedux }) => (
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>
  ));
