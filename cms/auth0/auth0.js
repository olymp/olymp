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

export { Auth as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgwL2F1dGgwLmVzNiJdLCJuYW1lcyI6WyJBdXRoIiwiY29uZmlnIiwiaGFuZGxlciIsInNldFNlc3Npb24iLCJleHBpcmVzSW4iLCJhY2Nlc3NUb2tlbiIsInByb2ZpbGUiLCJleHBpcmVzQXQiLCJKU09OIiwic3RyaW5naWZ5IiwiRGF0ZSIsImdldFRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9naW4iLCJyZXF1aXJlIiwiZW5zdXJlIiwiQXV0aDBMb2NrIiwiZGVmYXVsdCIsInRpdGxlIiwiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0RPTUFJTiIsImNsaWVudElEIiwiQVVUSDBfQ0xJRU5UX0lEIiwiY29sb3IiLCJsb2dvIiwibG9jayIsImxhbmd1YWdlRGljdGlvbmFyeSIsImxhbmd1YWdlIiwidGhlbWUiLCJwcmltYXJ5Q29sb3IiLCJjbG9zaW5nIiwib24iLCJhdXRoUmVzdWx0IiwiZ2V0VXNlckluZm8iLCJlcnJvciIsImhpZGUiLCJzaG93IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsImV4cCIsImdldEl0ZW0iLCJwYXJzZSIsIklTX0VMRUNUUk9OIiwiYXV0aCIsInJlZGlyZWN0Iiwic3NvIl0sIm1hcHBpbmdzIjoiOzs7O0lBQ3FCQSxJLEdBQ25CLGNBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsT0FtQjdCQyxVQW5CNkIsR0FtQmhCLGdCQUF5QztBQUFBLFFBQXRDQyxTQUFzQyxRQUF0Q0EsU0FBc0M7QUFBQSxRQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsUUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUNwRCxRQUFNQyxZQUFZQyxLQUFLQyxTQUFMLENBQWVMLFlBQVksSUFBWixHQUFtQixJQUFJTSxJQUFKLEdBQVdDLE9BQVgsRUFBbEMsQ0FBbEI7QUFDQUMsaUJBQWFDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUNSLFdB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O0FBRWpCQyxXQUFLO0FBRlksS0FBbkI7QUFJRDtBQUNELE1BQ0UsT0FBT3JDLFlBQVAsS0FBd0IsV0FBeEIsSUFDQSxLQUFLOEIsZUFBTCxFQURBLElBRUE5QixhQUFhZ0MsT0FBYixDQUFxQixTQUFyQixDQUZBLElBR0ExQyxPQUpGLEVBS0U7QUFDQUEsWUFBUU0sS0FBS3FDLEtBQUwsQ0FBV2pDLGFBQWFnQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FBUjtBQUNEO0FBQ0YsQzs7U0FsQmtCNUMsSSIsImZpbGUiOiJwYWNrYWdlcy9hdXRoMC9hdXRoMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgaGFuZGxlcikge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52LklTX0VMRUNUUk9OKSB7XG4gICAgICB0aGlzLmNvbmZpZy5hdXRoID0ge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIHNzbzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSAmJlxuICAgICAgaGFuZGxlclxuICAgICkge1xuICAgICAgaGFuZGxlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpKTtcbiAgICB9XG4gIH1cblxuICBzZXRTZXNzaW9uID0gKHsgZXhwaXJlc0luLCBhY2Nlc3NUb2tlbiwgcHJvZmlsZSB9KSA9PiB7XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYWNjZXNzVG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzX2F0JywgZXhwaXJlc0F0KTtcbiAgfTtcblxuICBsb2dpbiA9IGxvZ2luID0+IHtcbiAgICByZXF1aXJlLmVuc3VyZShcbiAgICAgIFtdLFxuICAgICAgcmVxdWlyZSA9PiB7XG4gICAgICAgIGNvbnN0IEF1dGgwTG9jayA9IHJlcXVpcmUoJ2F1dGgwLWxvY2snKS5kZWZhdWx0O1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0aXRsZSA9ICdvbHltcCcsXG4gICAgICAgICAgZG9tYWluID0gcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxuICAgICAgICAgIGNsaWVudElEID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICAgICAgICAgIGNvbG9yID0gJ2dyZWVuJyxcbiAgICAgICAgICBsb2dvID0gJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGp5ZW56b3JjL2ltYWdlL3VwbG9hZC92MTUwODA1NzM5Ni9xa2cvY2kzb25ud2NsMmlzb3RrdnN2cnAucG5nJyxcbiAgICAgICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgICAgIGNvbnN0IGxvY2sgPSBuZXcgQXV0aDBMb2NrKGNsaWVudElELCBkb21haW4sIHtcbiAgICAgICAgICBsYW5ndWFnZURpY3Rpb25hcnk6IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFuZ3VhZ2U6ICdkZScsXG4gICAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIGxvZ28sXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IGNvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2xvc2luZyA9IGZhbHNlO1xuICAgICAgICBsb2NrLm9uKCdhdXRoZW50aWNhdGVkJywgYXV0aFJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKCFhdXRoUmVzdWx0IHx8ICFhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvY2suZ2V0VXNlckluZm8oYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiwgKGVycm9yLCBwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKHsgLi4uYXV0aFJlc3VsdCwgcHJvZmlsZSB9KTtcbiAgICAgICAgICAgIGNsb3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9jay5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIocHJvZmlsZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NrLm9uKCdoaWRlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjbG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGFuZGxlcihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobG9naW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2suc2hvdygpO1xuICAgICAgfSxcbiAgICAgICdhdXRoMCcsXG4gICAgKVxuICB9O1xuXG4gIGxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc19hdCcpO1xuICAgIHRoaXMuaGFuZGxlcihudWxsKTtcbiAgfTtcblxuICBpc0F1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZXNfYXQnKTtcbiAgICBpZiAoIWV4cCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBleHBpcmVzQXQgPSBKU09OLnBhcnNlKGV4cCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0O1xuICB9O1xufVxuIl19
