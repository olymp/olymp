var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === undefined ? '' : _ref$attributes,
      _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? '' : _ref$schema,
      _ref$User = _ref.User,
      User = _ref$User === undefined ? {} : _ref$User;

  return {
    name: 'auth-public',
    queries: '\n    checkTokenMail(token: String): String\n    checkToken(token: String): Boolean\n    verify: User\n  ',
    mutations: '\n    forgot(email: Email): Boolean\n    register(input: UserInput, password: String, token: String): User\n    reset(token: String, password: String): User\n    login(email: Email, password: String, totp: String): User\n  ',
    resolvers: {
      queries: {
        checkTokenMail: function checkTokenMail(source, args, _ref2) {
          var authEngine = _ref2.authEngine;
          return authEngine.checkTokenValue(args.token, 'email');
        },
        checkToken: function checkToken(source, args, _ref3) {
          var authEngine = _ref3.authEngine;
          return authEngine.checkToken(args.token);
        },
        verify: function verify(source, x, _ref4) {
          var user = _ref4.user;
          return user;
        }
      },
      mutations: {
        register: function register(source, _ref5, _ref6) {
          var password = _ref5.password,
              token = _ref5.token,
              input = _ref5.input;
          var authEngine = _ref6.authEngine,
              db = _ref6.db;
          return authEngine.register(db, _extends({}, input, { confirmed: true }), password, token).then(function (x) {
            return x.user;
          });
        },
        forgot: function forgot(source, args, _ref7) {
          var authEngine = _ref7.authEngine,
              db = _ref7.db;
          return authEngine.forgot(db, args.email);
        },
        reset: function reset(source, args, _ref8) {
          var authEngine = _ref8.authEngine,
              db = _ref8.db;
          return authEngine.reset(db, args.token, args.password).then(function (_ref9) {
            var user = _ref9.user;
            return user;
          });
        },
        login: function login(source, _ref10, _ref11) {
          var email = _ref10.email,
              password = _ref10.password,
              totp = _ref10.totp;
          var authEngine = _ref11.authEngine,
              db = _ref11.db,
              session = _ref11.session;
          return authEngine.login(db, email, password, totp).then(function (_ref12) {
            var user = _ref12.user,
                token = _ref12.token;

            if (session) {
              session.token = token;
            }
            user.token = token;
            return user;
          });
        }
      }
    },
    schema: '\n    enum USER_MUTATION_TYPE {\n      UPDATE\n      REPLACE\n      REMOVE\n      INSERT\n    }\n    type User @input {\n      isAdmin: Boolean\n      id: String\n      email: Email\n      token: String\n      name: String\n      ' + attributes + '\n    }\n    ' + schema + '\n  '
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvc2VydmVyL2dyYXBocWwtcHVibGljLmVzNiJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwic2NoZW1hIiwiVXNlciIsIm5hbWUiLCJxdWVyaWVzIiwibXV0YXRpb25zIiwicmVzb2x2ZXJzIiwiY2hlY2tUb2tlbk1haWwiLCJzb3VyY2UiLCJhcmdzIiwiYXV0aEVuZ2luZSIsImNoZWNrVG9rZW5WYWx1ZSIsInRva2VuIiwiY2hlY2tUb2tlbiIsInZlcmlmeSIsIngiLCJ1c2VyIiwicmVnaXN0ZXIiLCJwYXNzd29yZCIsImlucHV0IiwiZGIiLCJjb25maXJtZWQiLCJ0aGVuIiwiZm9yZ290IiwiZW1haWwiLCJyZXNldCIsImxvZ2luIiwidG90cCIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0JBQWU7QUFBQSxpRkFBK0MsRUFBL0M7QUFBQSw2QkFBR0EsVUFBSDtBQUFBLE1BQUdBLFVBQUgsbUNBQWdCLEVBQWhCO0FBQUEseUJBQW9CQyxNQUFwQjtBQUFBLE1BQW9CQSxNQUFwQiwrQkFBNkIsRUFBN0I7QUFBQSx1QkFBaUNDLElBQWpDO0FBQUEsTUFBaUNBLElBQWpDLDZCQUF3QyxFQUF4Qzs7QUFBQSxTQUF1RDtBQUNwRUMsVUFBTSxhQUQ4RDtBQUVwRUMsd0hBRm9FO0FBT3BFQyxnUEFQb0U7QUFhcEVDLGVBQVc7QUFDVEYsZUFBUztBQUNQRyx3QkFBZ0Isd0JBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLGNBQWlCQyxVQUFqQixTQUFpQkEsVUFBakI7QUFBQSxpQkFDZEEsV0FBV0MsZUFBWCxDQUEyQkYsS0FBS0csS0FBaEMsRUFBdUMsT0FBdkMsQ0FEYztBQUFBLFNBRFQ7QUFHUEMsb0JBQVksb0JBQUNMLE1BQUQsRUFBU0MsSUFBVDtBQUFBLGNBQWlCQyxVQUFqQixTQUFpQkEsVUFBakI7QUFBQSxpQkFDVkEsV0FBV0csVUFBWCxDQUFzQkosS0FBS0csS0FBM0IsQ0FEVTtBQUFBLFNBSEw7QUFLUEUsZ0JBQVEsZ0JBQUNOLE1BQUQsRUFBU08sQ0FBVDtBQUFBLGNBQWNDLElBQWQsU0FBY0EsSUFBZDtBQUFBLGlCQUF5QkEsSUFBekI7QUFBQTtBQUxELE9BREE7QUFRVFgsaUJBQVc7QUFDVFksa0JBQVUsa0JBQUNULE1BQUQ7QUFBQSxjQUFXVSxRQUFYLFNBQVdBLFFBQVg7QUFBQSxjQUFxQk4sS0FBckIsU0FBcUJBLEtBQXJCO0FBQUEsY0FBNEJPLEtBQTVCLFNBQTRCQSxLQUE1QjtBQUFBLGNBQXVDVCxVQUF2QyxTQUF1Q0EsVUFBdkM7QUFBQSxjQUFtRFUsRUFBbkQsU0FBbURBLEVBQW5EO0FBQUEsaUJBQ1JWLFdBQ0dPLFFBREgsQ0FDWUcsRUFEWixlQUNxQkQsS0FEckIsSUFDNEJFLFdBQVcsSUFEdkMsS0FDK0NILFFBRC9DLEVBQ3lETixLQUR6RCxFQUVHVSxJQUZILENBRVE7QUFBQSxtQkFBS1AsRUFBRUMsSUFBUDtBQUFBLFdBRlIsQ0FEUTtBQUFBLFNBREQ7QUFLVE8sZ0JBQVEsZ0JBQUNmLE1BQUQsRUFBU0MsSUFBVDtBQUFBLGNBQWlCQyxVQUFqQixTQUFpQkEsVUFBakI7QUFBQSxjQUE2QlUsRUFBN0IsU0FBNkJBLEVBQTdCO0FBQUEsaUJBQ05WLFdBQVdhLE1BQVgsQ0FBa0JILEVBQWxCLEVBQXNCWCxLQUFLZSxLQUEzQixDQURNO0FBQUEsU0FMQztBQU9UQyxlQUFPLGVBQUNqQixNQUFELEVBQVNDLElBQVQ7QUFBQSxjQUFpQkMsVUFBakIsU0FBaUJBLFVBQWpCO0FBQUEsY0FBNkJVLEVBQTdCLFNBQTZCQSxFQUE3QjtBQUFBLGlCQUNMVixXQUNHZSxLQURILENBQ1NMLEVBRFQsRUFDYVgsS0FBS0csS0FEbEIsRUFDeUJILEtBQUtTLFFBRDlCLEVBRUdJLElBRkgsQ0FFUTtBQUFBLGdCQUFHTixJQUFILFNBQUdBLElBQUg7QUFBQSxtQkFBY0EsSUFBZDtBQUFBLFdBRlIsQ0FESztBQUFBLFNBUEU7QUFXVFUsZUFBTyxlQUFDbEIsTUFBRDtBQUFBLGNBQVdnQixLQUFYLFVBQVdBLEtBQVg7QUFBQSxjQUFrQk4sUUFBbEIsVUFBa0JBLFFBQWxCO0FBQUEsY0FBNEJTLElBQTVCLFVBQTRCQSxJQUE1QjtBQUFBLGNBQXNDakIsVUFBdEMsVUFBc0NBLFVBQXRDO0FBQUEsY0FBa0RVLEVBQWxELFVBQWtEQSxFQUFsRDtBQUFBLGNBQXNEUSxPQUF0RCxVQUFzREEsT0FBdEQ7QUFBQSxpQkFDTGxCLFdBQVdnQixLQUFYLENBQWlCTixFQUFqQixFQUFxQkksS0FBckIsRUFBNEJOLFFBQTVCLEVBQXNDUyxJQUF0QyxFQUE0Q0wsSUFBNUMsQ0FBaUQsa0JBQXFCO0FBQUEsZ0JBQWxCTixJQUFrQixVQUFsQkEsSUFBa0I7QUFBQSxnQkFBWkosS0FBWSxVQUFaQSxLQUFZOztBQUNwRSxnQkFBSWdCLE9BQUosRUFBYTtBQUNYQSxzQkFBUWhCLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0Q7QUFDREksaUJBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLG1CQUFPSSxJQUFQO0FBQ0QsV0FORCxDQURLO0FBQUE7QUFYRTtBQVJGLEtBYnlEO0FBMENwRWYsdVBBYU1ELFVBYk4scUJBZUlDLE1BZko7QUExQ29FLEdBQXZEO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL3NlcnZlci9ncmFwaHFsLXB1YmxpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGF0dHJpYnV0ZXMgPSAnJywgc2NoZW1hID0gJycsIFVzZXIgPSB7fSB9ID0ge30pID0+ICh7XG4gIG5hbWU6ICdhdXRoLXB1YmxpYycsXG4gIHF1ZXJpZXM6IGBcbiAgICBjaGVja1Rva2VuTWFpbCh0b2tlbjogU3RyaW5nKTogU3RyaW5nXG4gICAgY2hlY2tUb2tlbih0b2tlbjogU3RyaW5nKTogQm9vbGVhblxuICAgIHZlcmlmeTogVXNlclxuICBgLFxuICBtdXRhdGlvbnM6IGBcbiAgICBmb3Jnb3QoZW1haWw6IEVtYWlsKTogQm9vbGVhblxuICAgIHJlZ2lzdGVyKGlucHV0OiBVc2VySW5wdXQsIHBhc3N3b3JkOiBTdHJpbmcsIHRva2VuOiBTdHJpbmcpOiBVc2VyXG4gICAgcmVzZXQodG9rZW46IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZyk6IFVzZXJcbiAgICBsb2dpbihlbWFpbDogRW1haWwsIHBhc3N3b3JkOiBTdHJpbmcsIHRvdHA6IFN0cmluZyk6IFVzZXJcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgY2hlY2tUb2tlbk1haWw6IChzb3VyY2UsIGFyZ3MsIHsgYXV0aEVuZ2luZSB9KSA9PlxuICAgICAgICBhdXRoRW5naW5lLmNoZWNrVG9rZW5WYWx1ZShhcmdzLnRva2VuLCAnZW1haWwnKSxcbiAgICAgIGNoZWNrVG9rZW46IChzb3VyY2UsIGFyZ3MsIHsgYXV0aEVuZ2luZSB9KSA9PlxuICAgICAgICBhdXRoRW5naW5lLmNoZWNrVG9rZW4oYXJncy50b2tlbiksXG4gICAgICB2ZXJpZnk6IChzb3VyY2UsIHgsIHsgdXNlciB9KSA9PiB1c2VyLFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICByZWdpc3RlcjogKHNvdXJjZSwgeyBwYXNzd29yZCwgdG9rZW4sIGlucHV0IH0sIHsgYXV0aEVuZ2luZSwgZGIgfSkgPT5cbiAgICAgICAgYXV0aEVuZ2luZVxuICAgICAgICAgIC5yZWdpc3RlcihkYiwgeyAuLi5pbnB1dCwgY29uZmlybWVkOiB0cnVlIH0sIHBhc3N3b3JkLCB0b2tlbilcbiAgICAgICAgICAudGhlbih4ID0+IHgudXNlciksXG4gICAgICBmb3Jnb3Q6IChzb3VyY2UsIGFyZ3MsIHsgYXV0aEVuZ2luZSwgZGIgfSkgPT5cbiAgICAgICAgYXV0aEVuZ2luZS5mb3Jnb3QoZGIsIGFyZ3MuZW1haWwpLFxuICAgICAgcmVzZXQ6IChzb3VyY2UsIGFyZ3MsIHsgYXV0aEVuZ2luZSwgZGIgfSkgPT5cbiAgICAgICAgYXV0aEVuZ2luZVxuICAgICAgICAgIC5yZXNldChkYiwgYXJncy50b2tlbiwgYXJncy5wYXNzd29yZClcbiAgICAgICAgICAudGhlbigoeyB1c2VyIH0pID0+IHVzZXIpLFxuICAgICAgbG9naW46IChzb3VyY2UsIHsgZW1haWwsIHBhc3N3b3JkLCB0b3RwIH0sIHsgYXV0aEVuZ2luZSwgZGIsIHNlc3Npb24gfSkgPT5cbiAgICAgICAgYXV0aEVuZ2luZS5sb2dpbihkYiwgZW1haWwsIHBhc3N3b3JkLCB0b3RwKS50aGVuKCh7IHVzZXIsIHRva2VuIH0pID0+IHtcbiAgICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgc2Vzc2lvbi50b2tlbiA9IHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1c2VyLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIGVudW0gVVNFUl9NVVRBVElPTl9UWVBFIHtcbiAgICAgIFVQREFURVxuICAgICAgUkVQTEFDRVxuICAgICAgUkVNT1ZFXG4gICAgICBJTlNFUlRcbiAgICB9XG4gICAgdHlwZSBVc2VyIEBpbnB1dCB7XG4gICAgICBpc0FkbWluOiBCb29sZWFuXG4gICAgICBpZDogU3RyaW5nXG4gICAgICBlbWFpbDogRW1haWxcbiAgICAgIHRva2VuOiBTdHJpbmdcbiAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgJHthdHRyaWJ1dGVzfVxuICAgIH1cbiAgICAke3NjaGVtYX1cbiAgYCxcbn0pO1xuIl19
