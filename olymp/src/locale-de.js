import React from 'react';
import enUS from 'antd/lib/locale-provider/en_US';
import LocaleProvider from 'antd/lib/locale-provider';
import momento from 'moment';
import 'moment/locale/de';
momento.locale('de');

export const withLocale = WrappedComponent => props => (
  <LocaleProvider locale={enUS}>
    <WrappedComponent {...props} />
  </LocaleProvider>
);

export const moment = (x1, x2, x3, x4, x5) => momento(x1, x2, x3, x4, x5).utcOffset('+01:00');

export default props => (
  <LocaleProvider locale={enUS}>
    {props.children}
  </LocaleProvider>
);
