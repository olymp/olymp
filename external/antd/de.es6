import React from 'react';
import deDE from 'antd/lib/locale-provider/de_DE';
import moment from 'moment';
import 'moment/locale/de';
import AntLocaleProvider from 'antd/lib/locale-provider';
import dateLocale from 'date-fns/locale/de';
import LocaleProvider from './with-locale';

moment.locale('de');

export default (LANG = {}) => WrappedComponent => props => (
  <AntLocaleProvider locale={deDE}>
    <LocaleProvider locale={{ ...LANG, ...dateLocale }}>
      <WrappedComponent {...props} />
    </LocaleProvider>
  </AntLocaleProvider>
);
