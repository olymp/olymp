var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import shortID from 'shortid';

export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === undefined ? '' : _ref$attributes,
      _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? '' : _ref$schema,
      _ref$User = _ref.User,
      User = _ref$User === undefined ? {} : _ref$User;

  return {
    name: 'auth-user',
    queries: '\n    user(id: String): User\n    totp: TokenAndQR\n  ',
    mutations: '\n    totpConfirm(token: String, totp: String): Boolean\n    logout: Boolean\n    user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User\n  ',
    resolvers: {
      User: _extends({}, User),
      queries: {
        user: function user(source, args, _ref2) {
          var _user = _ref2.user,
              db = _ref2.db;

          if (_user && _user.isAdmin) {} else if (_user && _user.id === args.id) {} else {
            throw new Error('No permission');
          }
          return db.collection('user').findOne({ id: args.id });
        },
        totp: function totp(source, args, _ref3) {
          var session = _ref3.session,
              authEngine = _ref3.authEngine,
              db = _ref3.db;
          return authEngine.totp(db, session.userId).then(function (x) {
            return x;
          });
        }
      },
      mutations: {
        totpConfirm: function totpConfirm(source, _ref4, _ref5) {
          var token = _ref4.token,
              totp = _ref4.totp;
          var authEngine = _ref5.authEngine,
              db = _ref5.db;
          return authEngine.totpConfirm(db, token, totp).then(function (x) {
            return x;
          });
        },
        logout: function logout(source, args, _ref6) {
          var session = _ref6.session;

          if (session) {
            delete session.token;
          } // eslint-disable-line no-param-reassign
          return true;
        },
        user: function user(source, _ref7, _ref8) {
          var id = _ref7.id,
              input = _ref7.input,
              type = _ref7.type;
          var _user2 = _ref8.user,
              db = _ref8.db;

          if (_user2 && _user2.isAdmin) {} else if (_user2 && _user2.id === id) {} else {
            throw new Error('No permission');
          }
          // eslint-disable-line no-shadow
          if (type && type === 'REMOVE') {
            return db.collection('user').remove({ id: id }).then(function (x) {
              return { id: id };
            });
          }
          input.id = id || shortID.generate();
          if (id) {
            return db.collection('user').update({ id: id }, { $set: input }, { upsert: true }).then(function (x) {
              return input;
            });
          }
          return db.collection('user').insert(input).then(function (x) {
            return input;
          });
        }
      }
    },
    schema: '\n    type TokenAndQR {\n      enabled: Boolean\n      token: String\n      qr: String\n    }\n  '
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvc2VydmVyL2dyYXBocWwtdXNlci5lczYiXSwibmFtZXMiOlsic2hvcnRJRCIsImF0dHJpYnV0ZXMiLCJzY2hlbWEiLCJVc2VyIiwibmFtZSIsInF1ZXJpZXMiLCJtdXRhdGlvbnMiLCJyZXNvbHZlcnMiLCJ1c2VyIiwic291cmNlIiwiYXJncyIsImRiIiwiaXNBZG1pbiIsImlkIiwiRXJyb3IiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsInRvdHAiLCJzZXNzaW9uIiwiYXV0aEVuZ2luZSIsInVzZXJJZCIsInRoZW4iLCJ4IiwidG90cENvbmZpcm0iLCJ0b2tlbiIsImxvZ291dCIsImlucHV0IiwidHlwZSIsInJlbW92ZSIsImdlbmVyYXRlIiwidXBkYXRlIiwiJHNldCIsInVwc2VydCIsImluc2VydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxPQUFQLE1BQW9CLFNBQXBCOztBQUVBLGdCQUFlO0FBQUEsaUZBQStDLEVBQS9DO0FBQUEsNkJBQUdDLFVBQUg7QUFBQSxNQUFHQSxVQUFILG1DQUFnQixFQUFoQjtBQUFBLHlCQUFvQkMsTUFBcEI7QUFBQSxNQUFvQkEsTUFBcEIsK0JBQTZCLEVBQTdCO0FBQUEsdUJBQWlDQyxJQUFqQztBQUFBLE1BQWlDQSxJQUFqQyw2QkFBd0MsRUFBeEM7O0FBQUEsU0FBdUQ7QUFDcEVDLFVBQU0sV0FEOEQ7QUFFcEVDLHFFQUZvRTtBQU1wRUMseUtBTm9FO0FBV3BFQyxlQUFXO0FBQ1RKLHlCQUNLQSxJQURMLENBRFM7QUFJVEUsZUFBUztBQUNQRyxjQUFNLGNBQUNDLE1BQUQsRUFBU0MsSUFBVCxTQUFnQztBQUFBLGNBQWZGLEtBQWUsU0FBZkEsSUFBZTtBQUFBLGNBQVRHLEVBQVMsU0FBVEEsRUFBUzs7QUFDcEMsY0FBSUgsU0FBUUEsTUFBS0ksT0FBakIsRUFBMEIsQ0FDekIsQ0FERCxNQUNPLElBQUlKLFNBQVFBLE1BQUtLLEVBQUwsS0FBWUgsS0FBS0csRUFBN0IsRUFBaUMsQ0FDdkMs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bnQiOlsiaW1wb3J0IHNob3J0SUQgZnJvbSAnc2hvcnRpZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGF0dHJpYnV0ZXMgPSAnJywgc2NoZW1hID0gJycsIFVzZXIgPSB7fSB9ID0ge30pID0+ICh7XG4gIG5hbWU6ICdhdXRoLXVzZXInLFxuICBxdWVyaWVzOiBgXG4gICAgdXNlcihpZDogU3RyaW5nKTogVXNlclxuICAgIHRvdHA6IFRva2VuQW5kUVJcbiAgYCxcbiAgbXV0YXRpb25zOiBgXG4gICAgdG90cENvbmZpcm0odG9rZW46IFN0cmluZywgdG90cDogU3RyaW5nKTogQm9vbGVhblxuICAgIGxvZ291dDogQm9vbGVhblxuICAgIHVzZXIoaWQ6IFN0cmluZywgaW5wdXQ6IFVzZXJJbnB1dCwgdHlwZTogVVNFUl9NVVRBVElPTl9UWVBFKTogVXNlclxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBVc2VyOiB7XG4gICAgICAuLi5Vc2VyLFxuICAgIH0sXG4gICAgcXVlcmllczoge1xuICAgICAgdXNlcjogKHNvdXJjZSwgYXJncywgeyB1c2VyLCBkYiB9KSA9PiB7XG4gICAgICAgIGlmICh1c2VyICYmIHVzZXIuaXNBZG1pbikge1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXIgJiYgdXNlci5pZCA9PT0gYXJncy5pZCkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGVybWlzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKCd1c2VyJykuZmluZE9uZSh7IGlkOiBhcmdzLmlkIH0pO1xuICAgICAgfSxcbiAgICAgIHRvdHA6IChzb3VyY2UsIGFyZ3MsIHsgc2Vzc2lvbiwgYXV0aEVuZ2luZSwgZGIgfSkgPT5cbiAgICAgICAgYXV0aEVuZ2luZS50b3RwKGRiLCBzZXNzaW9uLnVzZXJJZCkudGhlbih4ID0+IHgpLFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICB0b3RwQ29uZmlybTogKHNvdXJjZSwgeyB0b2tlbiwgdG90cCB9LCB7IGF1dGhFbmdpbmUsIGRiIH0pID0+XG4gICAgICAgIGF1dGhFbmdpbmUudG90cENvbmZpcm0oZGIsIHRva2VuLCB0b3RwKS50aGVuKHggPT4geCksXG4gICAgICBsb2dvdXQ6IChzb3VyY2UsIGFyZ3MsIHsgc2Vzc2lvbiB9KSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHNlc3Npb24udG9rZW47XG4gICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB1c2VyOiAoc291cmNlLCB7IGlkLCBpbnB1dCwgdHlwZSB9LCB7IHVzZXIsIGRiIH0pID0+IHtcbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5pc0FkbWluKSB7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlciAmJiB1c2VyLmlkID09PSBpZCkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGVybWlzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gICAgICAgIGlmICh0eXBlICYmIHR5cGUgPT09ICdSRU1PVkUnKSB7XG4gICAgICAgICAgcmV0dXJuIGRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbigndXNlcicpXG4gICAgICAgICAgICAucmVtb3ZlKHsgaWQgfSlcbiAgICAgICAgICAgIC50aGVuKHggPT4gKHsgaWQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LmlkID0gaWQgfHwgc2hvcnRJRC5nZW5lcmF0ZSgpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCd1c2VyJylcbiAgICAgICAgICAgIC51cGRhdGUoeyBpZCB9LCB7ICRzZXQ6IGlucHV0IH0sIHsgdXBzZXJ0OiB0cnVlIH0pXG4gICAgICAgICAgICAudGhlbih4ID0+IGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAuY29sbGVjdGlvbigndXNlcicpXG4gICAgICAgICAgLmluc2VydChpbnB1dClcbiAgICAgICAgICAudGhlbih4ID0+IGlucHV0KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2NoZW1hOiBgXG4gICAgdHlwZSBUb2tlbkFuZFFSIHtcbiAgICAgIGVuYWJsZWQ6IEJvb2xlYW5cbiAgICAgIHRva2VuOiBTdHJpbmdcbiAgICAgIHFyOiBTdHJpbmdcbiAgICB9XG4gIGAsXG59KTtcbiJdfQ==
