import React from 'react';
import enUS from 'antd/lib/locale-provider/de_DE';
import LocaleProvider from 'antd/lib/locale-provider';

import momentLegacy from 'moment';
// momento.locale('de');
import 'moment/locale/de';

export const withLocale = WrappedComponent => props => (
  <LocaleProvider locale={enUS}>
    <WrappedComponent {...props} />
  </LocaleProvider>
);

export const moment = function() { return momentLegacy.utc.apply(this, arguments); };
export default props => (
  <LocaleProvider locale={enUS}>
    {props.children}
  </LocaleProvider>
);
