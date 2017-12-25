var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import enUS from 'antd/lib/locale-provider/en_US';
import 'moment/locale/de';
import AntLocaleProvider from 'antd/lib/locale-provider';
import dateLocale from 'date-fns/locale/de';
import LocaleProvider from './with-locale';

export default (function () {
  var LANG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    return function (props) {
      return React.createElement(
        AntLocaleProvider,
        { locale: enUS },
        React.createElement(
          LocaleProvider,
          { locale: _extends({}, LANG, dateLocale) },
          React.createElement(WrappedComponent, props)
        )
      );
    };
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2FudGQvZW4uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiZW5VUyIsIkFudExvY2FsZVByb3ZpZGVyIiwiZGF0ZUxvY2FsZSIsIkxvY2FsZVByb3ZpZGVyIiwiTEFORyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLGdDQUFqQjtBQUNBLE9BQU8sa0JBQVA7QUFDQSxPQUFPQyxpQkFBUCxNQUE4QiwwQkFBOUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLG9CQUF2QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsZUFBM0I7O0FBRUEsZ0JBQWU7QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxTQUFlO0FBQUEsV0FBb0I7QUFBQSxhQUNoRDtBQUFDLHlCQUFEO0FBQUEsVUFBbUIsUUFBUUosSUFBM0I7QUFDRTtBQUFDLHdCQUFEO0FBQUEsWUFBZ0IscUJBQWFJLElBQWIsRUFBc0JGLFVBQXRCLENBQWhCO0FBQ0UsOEJBQUMsZ0JBQUQsRUFBc0JHLEtBQXRCO0FBREY7QUFERixPQURnRDtBQUFBLEtBQXBCO0FBQUEsR0FBZjtBQUFBLENBQWYiLCJmaWxlIjoiZXh0ZXJuYWwvYW50ZC9lbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW5VUyBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVMnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2RlJztcbmltcG9ydCBBbnRMb2NhbGVQcm92aWRlciBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXInO1xuaW1wb3J0IGRhdGVMb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2RlJztcbmltcG9ydCBMb2NhbGVQcm92aWRlciBmcm9tICcuL3dpdGgtbG9jYWxlJztcblxuZXhwb3J0IGRlZmF1bHQgKExBTkcgPSB7fSkgPT4gV3JhcHBlZENvbXBvbmVudCA9PiBwcm9wcyA9PiAoXG4gIDxBbnRMb2NhbGVQcm92aWRlciBsb2NhbGU9e2VuVVN9PlxuICAgIDxMb2NhbGVQcm92aWRlciBsb2NhbGU9e3sgLi4uTEFORywgLi4uZGF0ZUxvY2FsZSB9fT5cbiAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICA8L0FudExvY2FsZVByb3ZpZGVyPlxuKTtcbiJdfQ==
