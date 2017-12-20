var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import speakeasy from 'speakeasy';
import shortId from 'shortid';
import qrcode from 'qrcode';
import mails from './mails';
import createPasswordEngine from './utils/password-engine';
import createTokenEngine from './utils/token-engine';

export default (function (_ref) {
  var secret = _ref.secret,
      mail = _ref.mail,
      issuer = _ref.issuer,
      _ref$loginBy = _ref.loginBy,
      loginBy = _ref$loginBy === undefined ? 'email' : _ref$loginBy;

  var qr = function qr(field, x) {
    return new Promise(function (yay, nay) {
      qrcode.toString('otpauth://totp/' + field + '?secret=' + x + '&issuer=' + (issuer || 'Olymp'), { type: 'svg' }, function (err, data) {
        return err ? nay(err) : yay(data);
      });
    });
  };
  var cleanUser = function cleanUser(_ref2) {
    var salt = _ref2.salt,
        hash = _ref2.hash,
        confirmed = _ref2.confirmed,
        _id = _ref2._id,
        rest = _objectWithoutProperties(_ref2, ['salt', 'hash', 'confirmed', '_id']);

    return rest;
  };
  var passwordEngine = createPasswordEngine({});
  var tokenEngine = createTokenEngine({ secret: secret });

  return {
    passwordEngine: passwordEngine,
    tokenEngine: tokenEngine,
    checkTokenValue: function checkTokenValue(key, k) {
      return tokenEngine.verify(key).then(function (c) {
        return c[k];
      });
    },
    checkToken: function checkToken(key) {
      return tokenEngine.verify(key).then(function () {
        return true;
      }).catch(function () {
        return false;
      });
    },

    getUser: function getUser(db, id) {
      return db.collection('user').findOne({ id: id }).then(cleanUser);
    },
    login: function login(db, field, pw, totp) {
      var user = null;

      return db.collection('user').findOne(_defineProperty({}, loginBy, field)).then(function (usr) {
        user = usr;
        if (!user) {
          throw new Error('No user matched.');
        }
        if (user.confirmed === false) {
          throw new Error('User not confirmed.');
        }
        return passwordEngine.match(user, pw);
      }).then(function (isValid) {
        if (!isValid) {
          throw new Error('Wrong password.');
        }
        // TOTP
        if (user.totp && !totp) {
          throw new Error('Please provide a totp token');
        } else if (user.totp) {
          var verified = speakeasy.totp.verify({
            secret: user.totp,
            encoding: 'base32',
            token: totp
          });
          if (!verified) {
            throw new Error('TOTP token error');
          }
        }
        // END TOTP
        return {
          token: tokenEngine.createFromUser(user, { days: 7 }),
          user: cleanUser(user)
        };
      });
    },
    verify: function verify(db, key) {
      // TODO remove!
      if (!key) {
        throw new Error('No Key');
      }
      return tokenEngine.verify(key).then(function (_ref3) {
        var id = _ref3.id,
            orgId = _ref3.orgId,
            scopes = _ref3.scopes;
        return { id: id, orgId: orgId, scopes: scopes };
      }).then(function (item) {
        console.log(item);
        var id = item.id;

        if (!id) {
          throw new Error('Error.');
        }
        return db.collection('user').findOne({ id: id });
      }).then(function (user) {
        if (!user) {
          throw new Error('No user matched.');
        }
        if (user.confirmed === false) {
          throw new Error('User not confirmed.');
        }
        user.token = tokenEngine.createFromUser(user, { days: 7 });
        return cleanUser(user);
      });
    },
    // Get user by email/realm and post new user
    register: function register(db, rawUser, pwd, key) {
      var filter = _defineProperty({}, loginBy, rawUser[loginBy]);
      rawUser.confirmed = !!key;
      rawUser.id = shortId.generate();
      if (!pwd || pwd.length < 6) {
        throw new Error('Password too short');
      }
      var init = key ? tokenEngine.verify(key) : Promise.resolve(filter);
      return init.then(function (user) {
        if (user[loginBy] !== rawUser[loginBy]) {
          throw new Error('Unexpected name');
        }
        return Promise.all([db.collection('user').findOne(filter), passwordEngine.set(rawUser, pwd)]);
      }).then(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            currentUser = _ref5[0],
            user = _ref5[1];

        if (currentUser) {
          throw new Error('USER_ALREADY_EXISTS Error.');
        }
        return db.collection('user').insert(user);
      }).then(function (result) {
        var confirmationToken = void 0;
        if (!result.confirmed) {
          confirmationToken = tokenEngine.createFromUser(result);
          if (mail && rawUser.email) {
            mail(mails.register, {
              to: rawUser.email,
              token: confirmationToken
            }).then(function (x) {
              return console.log('Mail success');
            }).catch(function (err) {
              return console.error(err);
            });
          }
        }
        return { user: cleanUser(result), token: confirmationToken };
      });
    },
    // Get user by id and update user
    confirm: function confirm(db, key) {
      return tokenEngine.verify(key).then(function (_ref6) {
        var id = _ref6.id,
            orgId = _ref6.orgId,
            scopes = _ref6.scopes;
        return { id: id, orgId: orgId, scopes: scopes };
      }).then(function (_ref7) {
        var id = _ref7.id;

        if (!id) {
          throw new Error('Error.');
        }
        return Promise.all([id, db.collection('user').update({ id: id }, { $set: { confirmed: true } })]);
      }).then(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 1),
            id = _ref9[0];

        return db.collection('user').findOne({ id: id });
      }).then(function (user) {
        return {
          token: tokenEngine.createFromUser(user),
          user: cleanUser(user)
        };
      });
    },
    //
    totp: function totp(db, id) {
      var secret = speakeasy.generateSecret({ length: 20 }).base32;
      var user = null;
      return db.collection('user').findOne({ id: id }).then(function (currentUser) {
        if (!currentUser) {
          throw new Error('No user matched.');
        }
        if (currentUser.totp) {
          return {
            token: tokenEngine.create({ id: currentUser.id, disable: true }),
            enabled: true,
            user: cleanUser(currentUser)
          };
        }
        user = currentUser;
        return qr(user[loginBy], secret, issuer);
      }).then(function (qr) {
        if ((typeof qr === 'undefined' ? 'undefined' : _typeof(qr)) === 'object') {
          return qr;
        }
        return {
          token: tokenEngine.create({ id: user.id, secret: secret }),
          user: cleanUser(user),
          qr: qr
        };
      });
    },
    //
    totpConfirm: function totpConfirm(db, t, totp) {
      var secret = void 0;
      return tokenEngine.verify(t).then(function (untoken) {
        if (!untoken) {
          throw new Error('TOTP token error');
        }
        var id = untoken.id,
            disable = untoken.disable;

        if (disable) {
          secret = null;
        } else {
          secret = untoken.secret;
          var verified = speakeasy.totp.verify({
            secret: secret,
            encoding: 'base32',
            token: totp
          });
          if (!verified) {
            throw new Error('TOTP token error');
          }
        }
        return db.collection('user').findOne({ id: id });
      }).then(function (currentUser) {
        if (!currentUser) {
          throw new Error('No user matched.');
        }
        return db.collection('user').update({ id: currentUser.id }, { $set: { totp: secret } });
      }).then(function (user) {
        return true;
      });
    },
    forgot: function forgot(db, field) {
      return db.collection('user').findOne(_defineProperty({}, loginBy, field)).then(function (user) {
        if (!user) {
          throw new Error('No user matched.');
        }
        if (user.confirmed === false) {
          throw new Error('User not confirmed.');
        }
        var requestToken = tokenEngine.createFromUser(user);

        if (mail && user.email) {
          mail(mails.forgot, { to: user.email, token: requestToken }).then(function (x) {
            return console.log('Mail success');
          }).catch(function (err) {
            return console.error(err);
          });
        }
        return true;
      });
    },
    reset: function reset(db, key, pwd) {
      return tokenEngine.verify(key).then(function (_ref10) {
        var id = _ref10.id,
            orgId = _ref10.orgId,
            scopes = _ref10.scopes;
        return { id: id, orgId: orgId, scopes: scopes };
      }).then(function (_ref11) {
        var id = _ref11.id;

        if (!id) {
          throw new Error('Error.');
        }
        return db.collection('user').findOne({ id: id });
      }).then(function (user) {
        if (!user) {
          throw new Error('No user matched.');
        }
        if (user.confirmed === false) {
          throw new Error('User not confirmed.');
        }
        user.totp = null; // Disable TOTP
        return passwordEngine.set(user, pwd);
      }).then(function (user) {
        return db.collection('user').update({ id: user.id }, { $set: { salt: user.salt, hash: user.hash } });
      }).then(function (user) {
        return {
          token: tokenEngine.createFromUser(user),
          user: cleanUser(user)
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvc2VydmVyL2F1dGgtZW5naW5lLmVzNiJdLCJuYW1lcyI6WyJzcGVha2Vhc3kiLCJzaG9ydElkIiwicXJjb2RlIiwibWFpbHMiLCJjcmVhdGVQYXNzd29yZEVuZ2luZSIsImNyZWF0ZVRva2VuRW5naW5lIiwic2VjcmV0IiwibWFpbCIsImlzc3VlciIsImxvZ2luQnkiLCJxciIsImZpZWxkIiwieCIsIlByb21pc2UiLCJ5YXkiLCJuYXkiLCJ0b1N0cmluZyIsInR5cGUiLCJlcnIiLCJkYXRhIiwiY2xlYW5Vc2VyIiwic2FsdCIsImhhc2giLCJjb25maXJtZWQiLCJfaWQiLCJyZXN0IiwicGFzc3dvcmRFbmdpbmUiLCJ0b2tlbkVuZ2luZSIsImNoZWNrVG9rZW5WYWx1ZSIsImtleSIsImsiLCJ2ZXJpZnkiLCJ0aGVuIiwiYyIsImNoZWNrVG9rZW4iLCJjYXRjaCIsImdldFVzZXIiLCJkYiIsImlkIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJsb2dpbiIsInB3IiwidG90cCIsInVzZXIiLCJ1c3IiLCJFcnJvciIsIm1hdGNoIiwiaXNWYWxpZCIsInZlcmlmaWVkIiwiZW5jb2RpbmciLCJ0b2tlbiIsImNyZWF0ZUZyb21Vc2VyIiwiZGF5cyIsIm9yZ0lkIiwic2NvcGVzIiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJyZWdpc3RlciIsInJhd1VzZXIiLCJwd2QiLCJmaWx0ZXIiLCJnZW5lcmF0ZSIsImxlbmd0aCIsImluaXQiLCJyZXNvbHZlIiwiYWxsIiwic2V0IiwiY3VycmVudFVzZXIiLCJpbnNlcnQiLCJjb25maXJtYXRpb25Ub2tlbiIsInJlc3VsdCIsImVtYWlsIiwidG8iLCJlcnJvciIsImNvbmZpcm0iLCJ1cGRhdGUiLCIkc2V0IiwiZ2VuZXJhdGVTZWNyZXQiLCJiYXNlMzIiLCJjcmVhdGUiLCJkaXNhYmxlIiwiZW5hYmxlZCIsInRvdHBDb25maXJtIiwidCIsInVudG9rZW4iLCJmb3Jnb3QiLCJyZXF1ZXN0VG9rZW4iLCJy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dmVyL2F1dGgtZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNwZWFrZWFzeSBmcm9tICdzcGVha2Vhc3knO1xuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5pbXBvcnQgcXJjb2RlIGZyb20gJ3FyY29kZSc7XG5pbXBvcnQgbWFpbHMgZnJvbSAnLi9tYWlscyc7XG5pbXBvcnQgY3JlYXRlUGFzc3dvcmRFbmdpbmUgZnJvbSAnLi91dGlscy9wYXNzd29yZC1lbmdpbmUnO1xuaW1wb3J0IGNyZWF0ZVRva2VuRW5naW5lIGZyb20gJy4vdXRpbHMvdG9rZW4tZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgc2VjcmV0LCBtYWlsLCBpc3N1ZXIsIGxvZ2luQnkgPSAnZW1haWwnIH0pID0+IHtcbiAgY29uc3QgcXIgPSAoZmllbGQsIHgpID0+XG4gICAgbmV3IFByb21pc2UoKHlheSwgbmF5KSA9PiB7XG4gICAgICBxcmNvZGUudG9TdHJpbmcoXG4gICAgICAgIGBvdHBhdXRoOi8vdG90cC8ke2ZpZWxkfT9zZWNyZXQ9JHt4fSZpc3N1ZXI9JHtpc3N1ZXIgfHwgJ09seW1wJ31gLFxuICAgICAgICB7IHR5cGU6ICdzdmcnIH0sXG4gICAgICAgIChlcnIsIGRhdGEpID0+IChlcnIgPyBuYXkoZXJyKSA6IHlheShkYXRhKSksXG4gICAgICApO1xuICAgIH0pO1xuICBjb25zdCBjbGVhblVzZXIgPSAoeyBzYWx0LCBoYXNoLCBjb25maXJtZWQsIF9pZCwgLi4ucmVzdCB9KSA9PiByZXN0O1xuICBjb25zdCBwYXNzd29yZEVuZ2luZSA9IGNyZWF0ZVBhc3N3b3JkRW5naW5lKHt9KTtcbiAgY29uc3QgdG9rZW5FbmdpbmUgPSBjcmVhdGVUb2tlbkVuZ2luZSh7IHNlY3JldCB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhc3N3b3JkRW5naW5lLFxuICAgIHRva2VuRW5naW5lLFxuICAgIGNoZWNrVG9rZW5WYWx1ZTogKGtleSwgaykgPT4gdG9rZW5FbmdpbmUudmVyaWZ5KGtleSkudGhlbihjID0+IGNba10pLFxuICAgIGNoZWNrVG9rZW46IGtleSA9PlxuICAgICAgdG9rZW5FbmdpbmVcbiAgICAgICAgLnZlcmlmeShrZXkpXG4gICAgICAgIC50aGVuKCgpID0+IHRydWUpXG4gICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSksXG5cbiAgICBnZXRVc2VyOiAoZGIsIGlkKSA9PlxuICAgICAgZGJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ3VzZXInKVxuICAgICAgICAuZmluZE9uZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKGNsZWFuVXNlciksXG4gICAgbG9naW46IChkYiwgZmllbGQsIHB3LCB0b3RwKSA9PiB7XG4gICAgICBsZXQgdXNlciA9IG51bGw7XG5cbiAgICAgIHJldHVybiBkYlxuICAgICAgICAuY29sbGVjdGlvbigndXNlcicpXG4gICAgICAgIC5maW5kT25lKHsgW2xvZ2luQnldOiBmaWVsZCB9KVxuICAgICAgICAudGhlbih1c3IgPT4ge1xuICAgICAgICAgIHVzZXIgPSB1c3I7XG4gICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgbWF0Y2hlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXIuY29uZmlybWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBjb25maXJtZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwYXNzd29yZEVuZ2luZS5tYXRjaCh1c2VyLCBwdyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBwYXNzd29yZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVE9UUFxuICAgICAgICAgIGlmICh1c2VyLnRvdHAgJiYgIXRvdHApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSB0b3RwIHRva2VuJyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh1c2VyLnRvdHApIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gc3BlYWtlYXN5LnRvdHAudmVyaWZ5KHtcbiAgICAgICAgICAgICAgc2VjcmV0OiB1c2VyLnRvdHAsXG4gICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTMyJyxcbiAgICAgICAgICAgICAgdG9rZW46IHRvdHAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT1RQIHRva2VuIGVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEVORCBUT1RQXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbkVuZ2luZS5jcmVhdGVGcm9tVXNlcih1c2VyLCB7IGRheXM6IDcgfSksXG4gICAgICAgICAgICB1c2VyOiBjbGVhblVzZXIodXNlciksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB2ZXJpZnk6IChkYiwga2V5KSA9PiB7XG4gICAgICAvLyBUT0RPIHJlbW92ZSFcbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gS2V5Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5FbmdpbmVcbiAgICAgICAgLnZlcmlmeShrZXkpXG4gICAgICAgIC50aGVuKCh7IGlkLCBvcmdJZCwgc2NvcGVzIH0pID0+ICh7IGlkLCBvcmdJZCwgc2NvcGVzIH0pKVxuICAgICAgICAudGhlbihpdGVtID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBpdGVtO1xuICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKCd1c2VyJykuZmluZE9uZSh7IGlkIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBtYXRjaGVkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlci5jb25maXJtZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGNvbmZpcm1lZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlci50b2tlbiA9IHRva2VuRW5naW5lLmNyZWF0ZUZyb21Vc2VyKHVzZXIsIHsgZGF5czogNyB9KTtcbiAgICAgICAgICByZXR1cm4gY2xlYW5Vc2VyKHVzZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIEdldCB1c2VyIGJ5IGVtYWlsL3JlYWxtIGFuZCBwb3N0IG5ldyB1c2VyXG4gICAgcmVnaXN0ZXI6IChkYiwgcmF3VXNlciwgcHdkLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IHsgW2xvZ2luQnldOiByYXdVc2VyW2xvZ2luQnldIH07XG4gICAgICByYXdVc2VyLmNvbmZpcm1lZCA9ICEha2V5O1xuICAgICAgcmF3VXNlci5pZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICAgIGlmICghcHdkIHx8IHB3ZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgdG9vIHNob3J0Jyk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbml0ID0ga2V5ID8gdG9rZW5FbmdpbmUudmVyaWZ5KGtleSkgOiBQcm9taXNlLnJlc29sdmUoZmlsdGVyKTtcbiAgICAgIHJldHVybiBpbml0XG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyW2xvZ2luQnldICE9PSByYXdVc2VyW2xvZ2luQnldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgbmFtZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbigndXNlcicpLmZpbmRPbmUoZmlsdGVyKSxcbiAgICAgICAgICAgIHBhc3N3b3JkRW5naW5lLnNldChyYXdVc2VyLCBwd2QpLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoW2N1cnJlbnRVc2VyLCB1c2VyXSkgPT4ge1xuICAgICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVU0VSX0FMUkVBRFlfRVhJU1RTIEVycm9yLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbigndXNlcicpLmluc2VydCh1c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBsZXQgY29uZmlybWF0aW9uVG9rZW47XG4gICAgICAgICAgaWYgKCFyZXN1bHQuY29uZmlybWVkKSB7XG4gICAgICAgICAgICBjb25maXJtYXRpb25Ub2tlbiA9IHRva2VuRW5naW5lLmNyZWF0ZUZyb21Vc2VyKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAobWFpbCAmJiByYXdVc2VyLmVtYWlsKSB7XG4gICAgICAgICAgICAgIG1haWwobWFpbHMucmVnaXN0ZXIsIHtcbiAgICAgICAgICAgICAgICB0bzogcmF3VXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICB0b2tlbjogY29uZmlybWF0aW9uVG9rZW4sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oeCA9PiBjb25zb2xlLmxvZygnTWFpbCBzdWNjZXNzJykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyB1c2VyOiBjbGVhblVzZXIocmVzdWx0KSwgdG9rZW46IGNvbmZpcm1hdGlvblRva2VuIH07XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gR2V0IHVzZXIgYnkgaWQgYW5kIHVwZGF0ZSB1c2VyXG4gICAgY29uZmlybTogKGRiLCBrZXkpID0+XG4gICAgICB0b2tlbkVuZ2luZVxuICAgICAgICAudmVyaWZ5KGtleSlcbiAgICAgICAgLnRoZW4oKHsgaWQsIG9yZ0lkLCBzY29wZXMgfSkgPT4gKHsgaWQsIG9yZ0lkLCBzY29wZXMgfSkpXG4gICAgICAgIC50aGVuKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCd1c2VyJykudXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB7IGNvbmZpcm1lZDogdHJ1ZSB9IH0pLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoW2lkXSkgPT4gZGIuY29sbGVjdGlvbigndXNlcicpLmZpbmRPbmUoeyBpZCB9KSlcbiAgICAgICAgLnRoZW4odXNlciA9PiAoe1xuICAgICAgICAgIHRva2VuOiB0b2tlbkVuZ2luZS5jcmVhdGVGcm9tVXNlcih1c2VyKSxcbiAgICAgICAgICB1c2VyOiBjbGVhblVzZXIodXNlciksXG4gICAgICAgIH0pKSxcbiAgICAvL1xuICAgIHRvdHA6IChkYiwgaWQpID0+IHtcbiAgICAgIGNvbnN0IHNlY3JldCA9IHNwZWFrZWFzeS5nZW5lcmF0ZVNlY3JldCh7IGxlbmd0aDogMjAgfSkuYmFzZTMyO1xuICAgICAgbGV0IHVzZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKCd1c2VyJylcbiAgICAgICAgLmZpbmRPbmUoeyBpZCB9KVxuICAgICAgICAudGhlbihjdXJyZW50VXNlciA9PiB7XG4gICAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIG1hdGNoZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjdXJyZW50VXNlci50b3RwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0b2tlbjogdG9rZW5FbmdpbmUuY3JlYXRlKHsgaWQ6IGN1cnJlbnRVc2VyLmlkLCBkaXNhYmxlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICB1c2VyOiBjbGVhblVzZXIoY3VycmVudFVzZXIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlciA9IGN1cnJlbnRVc2VyO1xuICAgICAgICAgIHJldHVybiBxcih1c2VyW2xvZ2luQnldLCBzZWNyZXQsIGlzc3Vlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHFyID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHFyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9rZW46IHRva2VuRW5naW5lLmNyZWF0ZSh7IGlkOiB1c2VyLmlkLCBzZWNyZXQgfSksXG4gICAgICAgICAgICB1c2VyOiBjbGVhblVzZXIodXNlciksXG4gICAgICAgICAgICBxcixcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vXG4gICAgdG90cENvbmZpcm06IChkYiwgdCwgdG90cCkgPT4ge1xuICAgICAgbGV0IHNlY3JldDtcbiAgICAgIHJldHVybiB0b2tlbkVuZ2luZVxuICAgICAgICAudmVyaWZ5KHQpXG4gICAgICAgIC50aGVuKHVudG9rZW4gPT4ge1xuICAgICAgICAgIGlmICghdW50b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT1RQIHRva2VuIGVycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHsgaWQsIGRpc2FibGUgfSA9IHVudG9rZW47XG4gICAgICAgICAgaWYgKGRpc2FibGUpIHtcbiAgICAgICAgICAgIHNlY3JldCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlY3JldCA9IHVudG9rZW4uc2VjcmV0O1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWQgPSBzcGVha2Vhc3kudG90cC52ZXJpZnkoe1xuICAgICAgICAgICAgICBzZWNyZXQsXG4gICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTMyJyxcbiAgICAgICAgICAgICAgdG9rZW46IHRvdHAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT1RQIHRva2VuIGVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKCd1c2VyJykuZmluZE9uZSh7IGlkIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihjdXJyZW50VXNlciA9PiB7XG4gICAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIG1hdGNoZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3VzZXInKVxuICAgICAgICAgICAgLnVwZGF0ZSh7IGlkOiBjdXJyZW50VXNlci5pZCB9LCB7ICRzZXQ6IHsgdG90cDogc2VjcmV0IH0gfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHVzZXIgPT4gdHJ1ZSk7XG4gICAgfSxcbiAgICBmb3Jnb3Q6IChkYiwgZmllbGQpID0+XG4gICAgICBkYlxuICAgICAgICAuY29sbGVjdGlvbigndXNlcicpXG4gICAgICAgIC5maW5kT25lKHsgW2xvZ2luQnldOiBmaWVsZCB9KVxuICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBtYXRjaGVkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlci5jb25maXJtZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGNvbmZpcm1lZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVxdWVzdFRva2VuID0gdG9rZW5FbmdpbmUuY3JlYXRlRnJvbVVzZXIodXNlcik7XG5cbiAgICAgICAgICBpZiAobWFpbCAmJiB1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICBtYWlsKG1haWxzLmZvcmdvdCwgeyB0bzogdXNlci5lbWFpbCwgdG9rZW46IHJlcXVlc3RUb2tlbiB9KVxuICAgICAgICAgICAgICAudGhlbih4ID0+IGNvbnNvbGUubG9nKCdNYWlsIHN1Y2Nlc3MnKSlcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSksXG4gICAgcmVzZXQ6IChkYiwga2V5LCBwd2QpID0+XG4gICAgICB0b2tlbkVuZ2luZVxuICAgICAgICAudmVyaWZ5KGtleSlcbiAgICAgICAgLnRoZW4oKHsgaWQsIG9yZ0lkLCBzY29wZXMgfSkgPT4gKHsgaWQsIG9yZ0lkLCBzY29wZXMgfSkpXG4gICAgICAgIC50aGVuKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbigndXNlcicpLmZpbmRPbmUoeyBpZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgbWF0Y2hlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXIuY29uZmlybWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBjb25maXJtZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZXIudG90cCA9IG51bGw7IC8vIERpc2FibGUgVE9UUFxuICAgICAgICAgIHJldHVybiBwYXNzd29yZEVuZ2luZS5zZXQodXNlciwgcHdkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4odXNlciA9PlxuICAgICAgICAgIGRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbigndXNlcicpXG4gICAgICAgICAgICAudXBkYXRlKFxuICAgICAgICAgICAgICB7IGlkOiB1c2VyLmlkIH0sXG4gICAgICAgICAgICAgIHsgJHNldDogeyBzYWx0OiB1c2VyLnNhbHQsIGhhc2g6IHVzZXIuaGFzaCB9IH0sXG4gICAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICAgIC50aGVuKHVzZXIgPT4gKHtcbiAgICAgICAgICB0b2tlbjogdG9rZW5FbmdpbmUuY3JlYXRlRnJvbVVzZXIodXNlciksXG4gICAgICAgICAgdXNlcjogY2xlYW5Vc2VyKHVzZXIpLFxuICAgICAgICB9KSksXG4gIH07XG59O1xuIl19
