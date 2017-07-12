import React from 'react';
import enUS from 'antd/lib/locale-provider/de_DE';
import AntLocaleProvider from 'antd/lib/locale-provider';
import { withLocale as withLocale2, LocaleProvider } from 'olymp';
import dateLocale from 'date-fns/locale/de';

export default (LANG = {}) => WrappedComponent => props =>
  (<AntLocaleProvider locale={enUS}>
    <LocaleProvider locale={{ ...LANG, ...dateLocale }}>
      <WrappedComponent {...props} />
    </LocaleProvider>
  </AntLocaleProvider>);
export const withLocale = withLocale2;
/*export const moment = function () {
   return momentLegacy.utc.apply(this, arguments);
+};*/
