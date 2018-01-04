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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9hdXRoMC9hdXRoMC5lczYiXSwibmFtZXMiOlsiQXV0aCIsImNvbmZpZyIsImhhbmRsZXIiLCJzZXRTZXNzaW9uIiwiZXhwaXJlc0luIiwiYWNjZXNzVG9rZW4iLCJwcm9maWxlIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsIkRhdGUiLCJnZXRUaW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvZ2luIiwicmVxdWlyZSIsImVuc3VyZSIsIkF1dGgwTG9jayIsImRlZmF1bHQiLCJ0aXRsZSIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9ET01BSU4iLCJjbGllbnRJRCIsIkFVVEgwX0NMSUVOVF9JRCIsImNvbG9yIiwibG9nbyIsImxvY2siLCJsYW5ndWFnZURpY3Rpb25hcnkiLCJsYW5ndWFnZSIsInRoZW1lIiwicHJpbWFyeUNvbG9yIiwiY2xvc2luZyIsIm9uIiwiYXV0aFJlc3VsdCIsImdldFVzZXJJbmZvIiwiZXJyb3IiLCJoaWRlIiwic2hvdyIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJleHAiLCJnZXRJdGVtIiwicGFyc2UiLCJJU19FTEVDVFJPTiIsImF1dGgiLCJyZWRpcmVjdCIsInNzbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNxQkEsSSxHQUNuQixjQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QjtBQUFBOztBQUFBOztBQUFBLE9BbUI3QkMsVUFuQjZCLEdBbUJoQixnQkFBeUM7QUFBQSxRQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsUUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLFFBQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDcEQsUUFBTUMsWUFBWUMsS0FBS0MsU0FBTCxDQUFlTCxZQUFZLElBQVosR0FBbUIsSUFBSU0sSUFBSixHQUFXQyxPQUFYLEVBQWxDLENBQWxCO0FBQ0FDLGlCQUFhQyxPQUFiLENBQXFCLGNBQXJCLEVBQXFDUixX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TztBQUVqQkMsV0FBSztBQUZZLEtBQW5CO0FBSUQ7QUFDRCxNQUNFLE9BQU9yQyxZQUFQLEtBQXdCLFdBQXhCLElBQ0EsS0FBSzhCLGVBQUwsRUFEQSxJQUVBOUIsYUFBYWdDLE9BQWIsQ0FBcUIsU0FBckIsQ0FGQSxJQUdBMUMsT0FKRixFQUtFO0FBQ0FBLFlBQVFNLEtBQUtxQyxLQUFMLENBQVdqQyxhQUFhZ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBQVI7QUFDRDtBQUNGLEM7O2tCQWxCa0I1QyxJIiwiZmlsZSI6ImNtcy9hdXRoMC9hdXRoMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgaGFuZGxlcikge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52LklTX0VMRUNUUk9OKSB7XG4gICAgICB0aGlzLmNvbmZpZy5hdXRoID0ge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIHNzbzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSAmJlxuICAgICAgaGFuZGxlclxuICAgICkge1xuICAgICAgaGFuZGxlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpKTtcbiAgICB9XG4gIH1cblxuICBzZXRTZXNzaW9uID0gKHsgZXhwaXJlc0luLCBhY2Nlc3NUb2tlbiwgcHJvZmlsZSB9KSA9PiB7XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYWNjZXNzVG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzX2F0JywgZXhwaXJlc0F0KTtcbiAgfTtcblxuICBsb2dpbiA9IGxvZ2luID0+IHtcbiAgICByZXF1aXJlLmVuc3VyZShcbiAgICAgIFtdLFxuICAgICAgcmVxdWlyZSA9PiB7XG4gICAgICAgIGNvbnN0IEF1dGgwTG9jayA9IHJlcXVpcmUoJ2F1dGgwLWxvY2snKS5kZWZhdWx0O1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0aXRsZSA9ICdvbHltcCcsXG4gICAgICAgICAgZG9tYWluID0gcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxuICAgICAgICAgIGNsaWVudElEID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICAgICAgICAgIGNvbG9yID0gJ2dyZWVuJyxcbiAgICAgICAgICBsb2dvID0gJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGp5ZW56b3JjL2ltYWdlL3VwbG9hZC92MTUwODA1NzM5Ni9xa2cvY2kzb25ud2NsMmlzb3RrdnN2cnAucG5nJyxcbiAgICAgICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgICAgIGNvbnN0IGxvY2sgPSBuZXcgQXV0aDBMb2NrKGNsaWVudElELCBkb21haW4sIHtcbiAgICAgICAgICBsYW5ndWFnZURpY3Rpb25hcnk6IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFuZ3VhZ2U6ICdkZScsXG4gICAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIGxvZ28sXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IGNvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2xvc2luZyA9IGZhbHNlO1xuICAgICAgICBsb2NrLm9uKCdhdXRoZW50aWNhdGVkJywgYXV0aFJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKCFhdXRoUmVzdWx0IHx8ICFhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvY2suZ2V0VXNlckluZm8oYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiwgKGVycm9yLCBwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKHsgLi4uYXV0aFJlc3VsdCwgcHJvZmlsZSB9KTtcbiAgICAgICAgICAgIGNsb3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9jay5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIocHJvZmlsZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NrLm9uKCdoaWRlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjbG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGFuZGxlcihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobG9naW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2suc2hvdygpO1xuICAgICAgfSxcbiAgICAgICdhdXRoMCcsXG4gICAgKVxuICB9O1xuXG4gIGxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc19hdCcpO1xuICAgIHRoaXMuaGFuZGxlcihudWxsKTtcbiAgfTtcblxuICBpc0F1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZXNfYXQnKTtcbiAgICBpZiAoIWV4cCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBleHBpcmVzQXQgPSBKU09OLnBhcnNlKGV4cCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0O1xuICB9O1xufVxuIl19
