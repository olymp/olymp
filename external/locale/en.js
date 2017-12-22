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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2xvY2FsZS9lbi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJlblVTIiwiQW50TG9jYWxlUHJvdmlkZXIiLCJkYXRlTG9jYWxlIiwiTG9jYWxlUHJvdmlkZXIiLCJMQU5HIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZ0NBQWpCO0FBQ0EsT0FBTyxrQkFBUDtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLDBCQUE5QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixlQUEzQjs7QUFFQSxnQkFBZTtBQUFBLE1BQUNDLElBQUQsdUVBQVEsRUFBUjtBQUFBLFNBQWU7QUFBQSxXQUFvQjtBQUFBLGFBQ2hEO0FBQUMseUJBQUQ7QUFBQSxVQUFtQixRQUFRSixJQUEzQjtBQUNFO0FBQUMsd0JBQUQ7QUFBQSxZQUFnQixxQkFBYUksSUFBYixFQUFzQkYsVUFBdEIsQ0FBaEI7QUFDRSw4QkFBQyxnQkFBRCxFQUFzQkcsS0FBdEI7QUFERjtBQURGLE9BRGdEO0FBQUEsS0FBcEI7QUFBQSxHQUFmO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9sb2NhbGUvZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVuVVMgZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VuX1VTJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9kZSc7XG5pbXBvcnQgQW50TG9jYWxlUHJvdmlkZXIgZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyJztcbmltcG9ydCBkYXRlTG9jYWxlIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9kZSc7XG5pbXBvcnQgTG9jYWxlUHJvdmlkZXIgZnJvbSAnLi93aXRoLWxvY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChMQU5HID0ge30pID0+IFdyYXBwZWRDb21wb25lbnQgPT4gcHJvcHMgPT4gKFxuICA8QW50TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXtlblVTfT5cbiAgICA8TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXt7IC4uLkxBTkcsIC4uLmRhdGVMb2NhbGUgfX0+XG4gICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgPC9BbnRMb2NhbGVQcm92aWRlcj5cbik7XG4iXX0=
