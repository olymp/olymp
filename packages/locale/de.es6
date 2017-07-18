import React from 'react';
import enUS from 'antd/lib/locale-provider/de_DE';
import 'moment/locale/de';
import AntLocaleProvider from 'antd/lib/locale-provider';
import { LocaleProvider } from 'olymp-utils';
import dateLocale from 'date-fns/locale/de';

export default (LANG = {}) => WrappedComponent => props =>
  (<AntLocaleProvider locale={enUS}>
    <LocaleProvider locale={{ ...LANG, ...dateLocale }}>
      <WrappedComponent {...props} />
    </LocaleProvider>
  </AntLocaleProvider>);
/* export const moment = function () {
   return momentLegacy.utc.apply(this, arguments);
+};*/
