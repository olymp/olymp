'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function Auth(config, handler) {
  var _this = this;

  _classCallCheck(this, Auth);

  this.setSession = function (_ref) {
    var expiresIn = _ref.expiresIn,
        accessToken = _ref.accessToken,
        profile = _ref.profile;

    var expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('expires_at', expiresAt);
  };

  this.login = function (login) {
    require.ensure([], function (require) {
      var Auth0Lock = require('auth0-lock').default;

      var _config = _this.config,
          _config$title = _config.title,
          title = _config$title === undefined ? 'olymp' : _config$title,
          _config$domain = _config.domain,
          domain = _config$domain === undefined ? process.env.AUTH0_DOMAIN : _config$domain,
          _config$clientID = _config.clientID,
          clientID = _config$clientID === undefined ? process.env.AUTH0_CLIENT_ID : _config$clientID,
          _config$color = _config.color,
          color = _config$color === undefined ? 'green' : _config$color,
          _config$logo = _config.logo,
          logo = _config$logo === undefined ? 'http://res.cloudinary.com/djyenzorc/image/upload/v1508057396/qkg/ci3onnwcl2isotkvsvrp.png' : _config$logo;


      var lock = new Auth0Lock(clientID, domain, {
        languageDictionary: {
          title: title
        },
        language: 'de',
        theme: {
          logo: logo,
          primaryColor: color
        }
      });
      var closing = false;
      lock.on('authenticated', function (authResult) {
        if (!authResult || !authResult.accessToken) {
          return;
        }
        lock.getUserInfo(authResult.accessToken, function (error, profile) {
          if (error) {
            return;
          }
          _this.setSession(_extends({}, authResult, { profile: profile }));
          closing = true;
          lock.hide();
          _this.handler(profile);
        });
      });
      lock.on('hide', function () {
        if (closing) {
          return;
        }
        _this.handler(false);
      });
      if (login === false) {
        return;
      }
      lock.show();
    }, 'auth0');
  };

  this.logout = function () {
    localStorage.removeItem('access_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    _this.handler(null);
  };

  this.isAuthenticated = function () {
    var exp = localStorage.getItem('expires_at');
    if (!exp) {
      return false;
    }
    var expiresAt = JSON.parse(exp);
    return new Date().getTime() < expiresAt;
  };

  this.config = config;
  this.handler = handler;
  if (process.env.IS_ELECTRON) {
    this.config.auth = {
      redirect: false,
      sso: false
    };
  }
  if (typeof localStorage !== 'undefined' && this.isAuthenticated() && localStorage.getItem('profile') && handler) {
    handler(JSON.parse(localStorage.getItem('profile')));
  }
};

exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgwL2F1dGgwLmVzNiJdLCJuYW1lcyI6WyJBdXRoIiwiY29uZmlnIiwiaGFuZGxlciIsInNldFNlc3Npb24iLCJleHBpcmVzSW4iLCJhY2Nlc3NUb2tlbiIsInByb2ZpbGUiLCJleHBpcmVzQXQiLCJKU09OIiwic3RyaW5naWZ5IiwiRGF0ZSIsImdldFRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9naW4iLCJyZXF1aXJlIiwiZW5zdXJlIiwiQXV0aDBMb2NrIiwiZGVmYXVsdCIsInRpdGxlIiwiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0RPTUFJTiIsImNsaWVudElEIiwiQVVUSDBfQ0xJRU5UX0lEIiwiY29sb3IiLCJsb2dvIiwibG9jayIsImxhbmd1YWdlRGljdGlvbmFyeSIsImxhbmd1YWdlIiwidGhlbWUiLCJwcmltYXJ5Q29sb3IiLCJjbG9zaW5nIiwib24iLCJhdXRoUmVzdWx0IiwiZ2V0VXNlckluZm8iLCJlcnJvciIsImhpZGUiLCJzaG93IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsImV4cCIsImdldEl0ZW0iLCJwYXJzZSIsIklTX0VMRUNUUk9OIiwiYXV0aCIsInJlZGlyZWN0Iiwic3NvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ3FCQSxJLEdBQ25CLGNBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsT0FtQjdCQyxVQW5CNkIsR0FtQmhCLGdCQUF5QztBQUFBLFFBQXRDQyxTQUFzQyxRQUF0Q0EsU0FBc0M7QUFBQSxRQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsUUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUNwRCxRQUFNQyxZQUFZQyxLQUFLQyxTQUFMLENBQWVMLFlBQVksSUFBWixHQUFtQixJQUFJTSxJQUFKLEdBQVdDLE9BQVgsRUFBbEMsQ0FBbEI7QUFDQUMsaUJBQWFDLE9BQWIsQ0FBcUIsY0FBckIsRUFB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VSxLQURPO0FBRWpCQyxXQUFLO0FBRlksS0FBbkI7QUFJRDtBQUNELE1BQ0UsT0FBT3JDLFlBQVAsS0FBd0IsV0FBeEIsSUFDQSxLQUFLOEIsZUFBTCxFQURBLElBRUE5QixhQUFhZ0MsT0FBYixDQUFxQixTQUFyQixDQUZBLElBR0ExQyxPQUpGLEVBS0U7QUFDQUEsWUFBUU0sS0FBS3FDLEtBQUwsQ0FBV2pDLGFBQWFnQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FBUjtBQUNEO0FBQ0YsQzs7a0JBbEJrQjVDLEkiLCJmaWxlIjoicGFja2FnZXMvYXV0aDAvYXV0aDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGgge1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIGlmIChwcm9jZXNzLmVudi5JU19FTEVDVFJPTikge1xuICAgICAgdGhpcy5jb25maWcuYXV0aCA9IHtcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBzc286IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykgJiZcbiAgICAgIGhhbmRsZXJcbiAgICApIHtcbiAgICAgIGhhbmRsZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2Vzc2lvbiA9ICh7IGV4cGlyZXNJbiwgYWNjZXNzVG9rZW4sIHByb2ZpbGUgfSkgPT4ge1xuICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KGV4cGlyZXNJbiAqIDEwMDAgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIGFjY2Vzc1Rva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc19hdCcsIGV4cGlyZXNBdCk7XG4gIH07XG5cbiAgbG9naW4gPSBsb2dpbiA9PiB7XG4gICAgcmVxdWlyZS5lbnN1cmUoXG4gICAgICBbXSxcbiAgICAgIHJlcXVpcmUgPT4ge1xuICAgICAgICBjb25zdCBBdXRoMExvY2sgPSByZXF1aXJlKCdhdXRoMC1sb2NrJykuZGVmYXVsdDtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdGl0bGUgPSAnb2x5bXAnLFxuICAgICAgICAgIGRvbWFpbiA9IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcbiAgICAgICAgICBjbGllbnRJRCA9IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcbiAgICAgICAgICBjb2xvciA9ICdncmVlbicsXG4gICAgICAgICAgbG9nbyA9ICdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RqeWVuem9yYy9pbWFnZS91cGxvYWQvdjE1MDgwNTczOTYvcWtnL2NpM29ubndjbDJpc290a3ZzdnJwLnBuZycsXG4gICAgICAgIH0gPSB0aGlzLmNvbmZpZztcblxuICAgICAgICBjb25zdCBsb2NrID0gbmV3IEF1dGgwTG9jayhjbGllbnRJRCwgZG9tYWluLCB7XG4gICAgICAgICAgbGFuZ3VhZ2VEaWN0aW9uYXJ5OiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhbmd1YWdlOiAnZGUnLFxuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBsb2dvLFxuICAgICAgICAgICAgcHJpbWFyeUNvbG9yOiBjb2xvcixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9jay5vbignYXV0aGVudGljYXRlZCcsIGF1dGhSZXN1bHQgPT4ge1xuICAgICAgICAgIGlmICghYXV0aFJlc3VsdCB8fCAhYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2NrLmdldFVzZXJJbmZvKGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4sIChlcnJvciwgcHJvZmlsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvbih7IC4uLmF1dGhSZXN1bHQsIHByb2ZpbGUgfSk7XG4gICAgICAgICAgICBjbG9zaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2suaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyKHByb2ZpbGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jay5vbignaGlkZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2xvc2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhhbmRsZXIoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxvZ2luID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2NrLnNob3coKTtcbiAgICAgIH0sXG4gICAgICAnYXV0aDAnLFxuICAgIClcbiAgfTtcblxuICBsb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZXNfYXQnKTtcbiAgICB0aGlzLmhhbmRsZXIobnVsbCk7XG4gIH07XG5cbiAgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVzX2F0Jyk7XG4gICAgaWYgKCFleHApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShleHApO1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdDtcbiAgfTtcbn1cbiJdfQ==
