var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import deDE from 'antd/lib/locale-provider/de_DE';
import moment from 'moment';
import 'moment/locale/de';
import AntLocaleProvider from 'antd/lib/locale-provider';
import dateLocale from 'date-fns/locale/de';
import LocaleProvider from './with-locale';

moment.locale('de');

export default (function () {
  var LANG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    return function (props) {
      return React.createElement(
        AntLocaleProvider,
        { locale: deDE },
        React.createElement(
          LocaleProvider,
          { locale: _extends({}, LANG, dateLocale) },
          React.createElement(WrappedComponent, props)
        )
      );
    };
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2xvY2FsZS9kZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJkZURFIiwibW9tZW50IiwiQW50TG9jYWxlUHJvdmlkZXIiLCJkYXRlTG9jYWxlIiwiTG9jYWxlUHJvdmlkZXIiLCJsb2NhbGUiLCJMQU5HIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZ0NBQWpCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU8sa0JBQVA7QUFDQSxPQUFPQyxpQkFBUCxNQUE4QiwwQkFBOUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLG9CQUF2QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsZUFBM0I7O0FBRUFILE9BQU9JLE1BQVAsQ0FBYyxJQUFkOztBQUVBLGdCQUFlO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUSxFQUFSO0FBQUEsU0FBZTtBQUFBLFdBQW9CO0FBQUEsYUFDaEQ7QUFBQyx5QkFBRDtBQUFBLFVBQW1CLFFBQVFOLElBQTNCO0FBQ0U7QUFBQyx3QkFBRDtBQUFBLFlBQWdCLHFCQUFhTSxJQUFiLEVBQXNCSCxVQUF0QixDQUFoQjtBQUNFLDhCQUFDLGdCQUFELEVBQXNCSSxLQUF0QjtBQURGO0FBREYsT0FEZ0Q7QUFBQSxLQUFwQjtBQUFBLEdBQWY7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2xvY2FsZS9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVERSBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZGVfREUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2RlJztcbmltcG9ydCBBbnRMb2NhbGVQcm92aWRlciBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXInO1xuaW1wb3J0IGRhdGVMb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2RlJztcbmltcG9ydCBMb2NhbGVQcm92aWRlciBmcm9tICcuL3dpdGgtbG9jYWxlJztcblxubW9tZW50LmxvY2FsZSgnZGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgKExBTkcgPSB7fSkgPT4gV3JhcHBlZENvbXBvbmVudCA9PiBwcm9wcyA9PiAoXG4gIDxBbnRMb2NhbGVQcm92aWRlciBsb2NhbGU9e2RlREV9PlxuICAgIDxMb2NhbGVQcm92aWRlciBsb2NhbGU9e3sgLi4uTEFORywgLi4uZGF0ZUxvY2FsZSB9fT5cbiAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICA8L0FudExvY2FsZVByb3ZpZGVyPlxuKTtcbiJdfQ==
