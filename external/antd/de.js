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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2FudGQvZGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiZGVERSIsIm1vbWVudCIsIkFudExvY2FsZVByb3ZpZGVyIiwiZGF0ZUxvY2FsZSIsIkxvY2FsZVByb3ZpZGVyIiwibG9jYWxlIiwiTEFORyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLGdDQUFqQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPLGtCQUFQO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIsMEJBQTlCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixvQkFBdkI7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLGVBQTNCOztBQUVBSCxPQUFPSSxNQUFQLENBQWMsSUFBZDs7QUFFQSxnQkFBZTtBQUFBLE1BQUNDLElBQUQsdUVBQVEsRUFBUjtBQUFBLFNBQWU7QUFBQSxXQUFvQjtBQUFBLGFBQ2hEO0FBQUMseUJBQUQ7QUFBQSxVQUFtQixRQUFRTixJQUEzQjtBQUNFO0FBQUMsd0JBQUQ7QUFBQSxZQUFnQixxQkFBYU0sSUFBYixFQUFzQkgsVUFBdEIsQ0FBaEI7QUFDRSw4QkFBQyxnQkFBRCxFQUFzQkksS0FBdEI7QUFERjtBQURGLE9BRGdEO0FBQUEsS0FBcEI7QUFBQSxHQUFmO0FBQUEsQ0FBZiIsImZpbGUiOiJleHRlcm5hbC9hbnRkL2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZURFIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9kZV9ERSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZGUnO1xuaW1wb3J0IEFudExvY2FsZVByb3ZpZGVyIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlcic7XG5pbXBvcnQgZGF0ZUxvY2FsZSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZGUnO1xuaW1wb3J0IExvY2FsZVByb3ZpZGVyIGZyb20gJy4vd2l0aC1sb2NhbGUnO1xuXG5tb21lbnQubG9jYWxlKCdkZScpO1xuXG5leHBvcnQgZGVmYXVsdCAoTEFORyA9IHt9KSA9PiBXcmFwcGVkQ29tcG9uZW50ID0+IHByb3BzID0+IChcbiAgPEFudExvY2FsZVByb3ZpZGVyIGxvY2FsZT17ZGVERX0+XG4gICAgPExvY2FsZVByb3ZpZGVyIGxvY2FsZT17eyAuLi5MQU5HLCAuLi5kYXRlTG9jYWxlIH19PlxuICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgIDwvTG9jYWxlUHJvdmlkZXI+XG4gIDwvQW50TG9jYWxlUHJvdmlkZXI+XG4pO1xuIl19
