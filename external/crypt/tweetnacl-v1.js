'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cachedEncryptor = exports.decrypt = exports.encrypt = exports.generatePasswordShaKey = exports.generateRandomKey = undefined;

var _tweetnacl = require('tweetnacl');

var _tweetnaclUtil = require('tweetnacl-util');

var _fastSha = require('fast-sha256');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * generate a nonce UInt8Array
 *
 * @returns {UInt8Array} nonce
 */
var newNonce = function newNonce() {
  return (0, _tweetnacl.randomBytes)(_tweetnacl.secretbox.nonceLength);
};

/**
 * generate a random secure key
 *
 * @returns {string} base64 encoded key
 */

var generateRandomKey = exports.generateRandomKey = function generateRandomKey() {
  return (0, _tweetnaclUtil.encodeBase64)((0, _tweetnacl.randomBytes)(_tweetnacl.secretbox.keyLength));
};
var generatePasswordShaKey = exports.generatePasswordShaKey = function generatePasswordShaKey(password, salt) {
  var rounds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100000;
  var len = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 32;

  var utf8Password = (0, _tweetnaclUtil.decodeUTF8)(password);
  var utf8Salt = (0, _tweetnaclUtil.decodeUTF8)(salt);
  var hash = (0, _fastSha.pbkdf2)(utf8Password, utf8Salt, rounds, len);
  return (0, _tweetnaclUtil.encodeBase64)(hash);
};
/**
 * Encrypts an object with a UInt8Array key
 *
 * @param {object} json
 * @param {string} key (base64)
 * @returns {string} encrypted
 */
var _encrypt = function _encrypt(json, key) {
  var keyUint8Array = (0, _tweetnaclUtil.decodeBase64)(key);

  var nonce = newNonce();
  var messageUint8 = (0, _tweetnaclUtil.decodeUTF8)(JSON.stringify(json));
  var box = (0, _tweetnacl.secretbox)(messageUint8, nonce, keyUint8Array);

  var fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);

  var base64FullMessage = (0, _tweetnaclUtil.encodeBase64)(fullMessage);
  return base64FullMessage;
};

/**
 * Decrypts a string with an UInt8Array key to JSON object
 *
 * @param {string} messageWithNonce
 * @param {string} key (base64)
 * @returns {object} decrypted
 */
exports.encrypt = _encrypt;
var _decrypt = function _decrypt(messageWithNonce, key) {
  var keyUint8Array = (0, _tweetnaclUtil.decodeBase64)(key);
  var messageWithNonceAsUint8Array = (0, _tweetnaclUtil.decodeBase64)(messageWithNonce);
  var nonce = messageWithNonceAsUint8Array.slice(0, _tweetnacl.secretbox.nonceLength);
  var message = messageWithNonceAsUint8Array.slice(_tweetnacl.secretbox.nonceLength, messageWithNonce.length);

  var decrypted = _tweetnacl.secretbox.open(message, nonce, keyUint8Array);

  if (!decrypted) {
    throw new Error('Could not decrypt message');
  }

  var base64DecryptedMessage = (0, _tweetnaclUtil.encodeUTF8)(decrypted);
  return JSON.parse(base64DecryptedMessage);
};

exports.decrypt = _decrypt;
var cachedEncryptor = exports.cachedEncryptor = function cachedEncryptor() {
  var cache = {};
  return {
    encrypt: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(json, pw, salt) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (cache[pw]) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return generatePasswordShaKey(pw, salt);

              case 3:
                cache[pw] = _context.sent;

              case 4:
                return _context.abrupt('return', _encrypt(json, cache[pw]));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function encrypt(_x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }(),
    decrypt: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ciphertext, pw, salt) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (cache[pw]) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return generatePasswordShaKey(pw, salt);

              case 3:
                cache[pw] = _context2.sent;

              case 4:
                return _context2.abrupt('return', _decrypt(ciphertext, cache[pw]));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function decrypt(_x6, _x7, _x8) {
        return _ref2.apply(this, arguments);
      };
    }()
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2NyeXB0L3R3ZWV0bmFjbC12MS5lczYiXSwibmFtZXMiOlsibmV3Tm9uY2UiLCJub25jZUxlbmd0aCIsImdlbmVyYXRlUmFuZG9tS2V5Iiwia2V5TGVuZ3RoIiwiZ2VuZXJhdGVQYXNzd29yZFNoYUtleSIsInBhc3N3b3JkIiwic2FsdCIsInJvdW5kcyIsImxlbiIsInV0ZjhQYXNzd29yZCIsInV0ZjhTYWx0IiwiaGFzaCIsImVuY3J5cHQiLCJqc29uIiwia2V5Iiwia2V5VWludDhBcnJheSIsIm5vbmNlIiwibWVzc2FnZVVpbnQ4IiwiSlNPTiIsInN0cmluZ2lmeSIsImJveCIsImZ1bGxNZXNzYWdlIiwiVWludDhBcnJheSIsImxlbmd0aCIsInNldCIsImJhc2U2NEZ1bGxNZXNzYWdlIiwiZGVjcnlwdCIsIm1lc3NhZ2VXaXRoTm9uY2UiLCJtZXNzYWdlV2l0aE5vbmNlQXNVaW50OEFycmF5Iiwic2xpY2UiLCJtZXNzYWdlIiwiZGVjcnlwdGVkIiwib3BlbiIsIkVycm9yIiwiYmFzZTY0RGVjcnlwdGVkTWVzc2FnZSIsInBhcnNlIiwiY2FjaGVkRW5jcnlwdG9yIiwiY2FjaGUiLCJwdyIsImNpcGhlcnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7OztBQUVBOzs7OztBQUtBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU0sNEJBQVkscUJBQVVDLFdBQXRCLENBQU47QUFBQSxDQUFqQjs7QUFFQTs7Ozs7O0FBTU8sSUFBTUMsZ0RBQW9CLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUMvQixpQ0FBYSw0QkFBWSxxQkFBVUMsU0FBdEIsQ0FBYixDQUQrQjtBQUFBLENBQTFCO0FBRUEsSUFBTUMsMERBQXlCLFNBQXpCQSxzQkFBeUIsQ0FDcENDLFFBRG9DLEVBRXBDQyxJQUZvQyxFQUtqQztBQUFBLE1BRkhDLE1BRUcsdUVBRk0sTUFFTjtBQUFBLE1BREhDLEdBQ0csdUVBREcsRUFDSDs7QUFDSCxNQUFNQyxlQUFlLCtCQUFXSixRQUFYLENBQXJCO0FBQ0EsTUFBTUssV0FBVywrQkFBV0osSUFBWCxDQUFqQjtBQUNBLE1BQU1LLE9BQU8scUJBQU9GLFlBQVAsRUFBcUJDLFFBQXJCLEVBQStCSCxNQUEvQixFQUF1Q0MsR0FBdkMsQ0FBYjtBQUNBLFNBQU8saUNBQWFHLElBQWIsQ0FBUDtBQUNELENBVk07QUFXUDs7Ozs7OztBQU9PLElBQU1DLFdBQVUsU0FBVkEsUUFBVSxDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNwQyxNQUFNQyxnQkFBZ0IsaUNBQWFELEdBQWIsQ0FBdEI7O0FBRUEsTUFBTUUsUUFBUWhCLFVBQWQ7QUFDQSxNQUFNaUIsZUFBZSwrQkFBV0MsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQVgsQ0FBckI7QUFDQSxNQUFNTyxNQUFNLDBCQUFVSCxZQUFWLEVBQXdCRCxLQUF4QixFQUErQkQsYUFBL0IsQ0FBWjs7QUFFQSxNQUFNTSxjQUFjLElBQUlDLFVBQUosQ0FBZU4sTUFBTU8sTUFBTixHQUFlSCxJQUFJRyxNQUFsQyxDQUFwQjtBQUNBRixjQUFZRyxHQUFaLENBQWdCUixLQUFoQjtBQUNBSyxjQUFZRyxHQUFaLENBQWdCSixHQUFoQixFQUFxQkosTUFBTU8sTUFBM0I7O0FBRUEsTUFBTUUsb0JBQW9CLGlDQUFhSixXQUFiLENBQTFCO0FBQ0EsU0FBT0ksaUJBQVA7QUFDRCxDQWJNOztBQWVQOzs7Ozs7OztBQU9PLElBQU1DLFdBQVUsU0FBVkEsUUFBVSxDQUFDQyxnQkFBRCxFQUFtQmIsR0FBbkIsRUFBMkI7QUFDaEQsTUFBTUMsZ0JBQWdCLGlDQUFhRCxHQUFiLENBQXRCO0FBQ0EsTUFBTWMsK0JBQStCLGlDQUFhRCxnQkFBYixDQUFyQztBQUNBLE1BQU1YLFFBQVFZLDZCQUE2QkMsS0FBN0IsQ0FBbUMsQ0FBbkMsRUFBc0MscUJBQVU1QixXQUFoRCxDQUFkO0FBQ0EsTUFBTTZCLFVBQVVGLDZCQUE2QkMsS0FBN0IsQ0FDZCxxQkFBVTVCLFdBREksRUFFZDBCLGlCQUFpQkosTUFGSCxDQUFoQjs7QUFLQSxNQUFNUSxZQUFZLHFCQUFVQyxJQUFWLENBQWVGLE9BQWYsRUFBd0JkLEtBQXhCLEVBQStCRCxhQUEvQixDQUFsQjs7QUFFQSxNQUFJLENBQUNnQixTQUFMLEVBQWdCO0FBQ2QsVUFBTSxJQUFJRSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNEOztBQUVELE1BQU1DLHlCQUF5QiwrQkFBV0gsU0FBWCxDQUEvQjtBQUNBLFNBQU9iLEtBQUtpQixLQUFMLENBQVdELHNCQUFYLENBQVA7QUFDRCxDQWpCTTs7O0FBbUJBLElBQU1FLDRDQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUNuQyxNQUFNQyxRQUFRLEVBQWQ7QUFDQSxTQUFPO0FBQ0x6QjtBQUFBLHlFQUFTLGlCQUFPQyxJQUFQLEVBQWF5QixFQUFiLEVBQWlCaEMsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNGK0IsTUFBTUMsRUFBTixDQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBRWFsQyx1QkFBdUJrQyxFQUF2QixFQUEyQmhDLElBQTNCLENBRmI7O0FBQUE7QUFFTCtCLHNCQUFNQyxFQUFOLENBRks7O0FBQUE7QUFBQSxpREFJQTFCLFNBQVFDLElBQVIsRUFBY3dCLE1BQU1DLEVBQU4sQ0FBZCxDQUpBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESztBQU9MWjtBQUFBLDBFQUFTLGtCQUFPYSxVQUFQLEVBQW1CRCxFQUFuQixFQUF1QmhDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDRitCLE1BQU1DLEVBQU4sQ0FERTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVhbEMsdUJBQXVCa0MsRUFBdkIsRUFBMkJoQyxJQUEzQixDQUZiOztBQUFBO0FBRUwrQixzQkFBTUMsRUFBTixDQUZLOztBQUFBO0FBQUEsa0RBSUFaLFNBQVFhLFVBQVIsRUFBb0JGLE1BQU1DLEVBQU4sQ0FBcEIsQ0FKQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEssR0FBUDtBQWNELENBaEJNIiwiZmlsZSI6ImV4dGVybmFsL2NyeXB0L3R3ZWV0bmFjbC12MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlY3JldGJveCwgcmFuZG9tQnl0ZXMgfSBmcm9tICd0d2VldG5hY2wnO1xuaW1wb3J0IHtcbiAgZGVjb2RlVVRGOCxcbiAgZW5jb2RlVVRGOCxcbiAgZW5jb2RlQmFzZTY0LFxuICBkZWNvZGVCYXNlNjRcbn0gZnJvbSAndHdlZXRuYWNsLXV0aWwnO1xuaW1wb3J0IHsgcGJrZGYyIH0gZnJvbSAnZmFzdC1zaGEyNTYnO1xuXG4vKipcbiAqIGdlbmVyYXRlIGEgbm9uY2UgVUludDhBcnJheVxuICpcbiAqIEByZXR1cm5zIHtVSW50OEFycmF5fSBub25jZVxuICovXG5jb25zdCBuZXdOb25jZSA9ICgpID0+IHJhbmRvbUJ5dGVzKHNlY3JldGJveC5ub25jZUxlbmd0aCk7XG5cbi8qKlxuICogZ2VuZXJhdGUgYSByYW5kb20gc2VjdXJlIGtleVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGJhc2U2NCBlbmNvZGVkIGtleVxuICovXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmRvbUtleSA9ICgpID0+XG4gIGVuY29kZUJhc2U2NChyYW5kb21CeXRlcyhzZWNyZXRib3gua2V5TGVuZ3RoKSk7XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQYXNzd29yZFNoYUtleSA9IChcbiAgcGFzc3dvcmQsXG4gIHNhbHQsXG4gIHJvdW5kcyA9IDEwMDAwMCxcbiAgbGVuID0gMzJcbikgPT4ge1xuICBjb25zdCB1dGY4UGFzc3dvcmQgPSBkZWNvZGVVVEY4KHBhc3N3b3JkKTtcbiAgY29uc3QgdXRmOFNhbHQgPSBkZWNvZGVVVEY4KHNhbHQpO1xuICBjb25zdCBoYXNoID0gcGJrZGYyKHV0ZjhQYXNzd29yZCwgdXRmOFNhbHQsIHJvdW5kcywgbGVuKTtcbiAgcmV0dXJuIGVuY29kZUJhc2U2NChoYXNoKTtcbn07XG4vKipcbiAqIEVuY3J5cHRzIGFuIG9iamVjdCB3aXRoIGEgVUludDhBcnJheSBrZXlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0ganNvblxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAoYmFzZTY0KVxuICogQHJldHVybnMge3N0cmluZ30gZW5jcnlwdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNyeXB0ID0gKGpzb24sIGtleSkgPT4ge1xuICBjb25zdCBrZXlVaW50OEFycmF5ID0gZGVjb2RlQmFzZTY0KGtleSk7XG5cbiAgY29uc3Qgbm9uY2UgPSBuZXdOb25jZSgpO1xuICBjb25zdCBtZXNzYWdlVWludDggPSBkZWNvZGVVVEY4KEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgY29uc3QgYm94ID0gc2VjcmV0Ym94KG1lc3NhZ2VVaW50OCwgbm9uY2UsIGtleVVpbnQ4QXJyYXkpO1xuXG4gIGNvbnN0IGZ1bGxNZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkobm9uY2UubGVuZ3RoICsgYm94Lmxlbmd0aCk7XG4gIGZ1bGxNZXNzYWdlLnNldChub25jZSk7XG4gIGZ1bGxNZXNzYWdlLnNldChib3gsIG5vbmNlLmxlbmd0aCk7XG5cbiAgY29uc3QgYmFzZTY0RnVsbE1lc3NhZ2UgPSBlbmNvZGVCYXNlNjQoZnVsbE1lc3NhZ2UpO1xuICByZXR1cm4gYmFzZTY0RnVsbE1lc3NhZ2U7XG59O1xuXG4vKipcbiAqIERlY3J5cHRzIGEgc3RyaW5nIHdpdGggYW4gVUludDhBcnJheSBrZXkgdG8gSlNPTiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVdpdGhOb25jZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAoYmFzZTY0KVxuICogQHJldHVybnMge29iamVjdH0gZGVjcnlwdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNyeXB0ID0gKG1lc3NhZ2VXaXRoTm9uY2UsIGtleSkgPT4ge1xuICBjb25zdCBrZXlVaW50OEFycmF5ID0gZGVjb2RlQmFzZTY0KGtleSk7XG4gIGNvbnN0IG1lc3NhZ2VXaXRoTm9uY2VBc1VpbnQ4QXJyYXkgPSBkZWNvZGVCYXNlNjQobWVzc2FnZVdpdGhOb25jZSk7XG4gIGNvbnN0IG5vbmNlID0gbWVzc2FnZVdpdGhOb25jZUFzVWludDhBcnJheS5zbGljZSgwLCBzZWNyZXRib3gubm9uY2VMZW5ndGgpO1xuICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZVdpdGhOb25jZUFzVWludDhBcnJheS5zbGljZShcbiAgICBzZWNyZXRib3gubm9uY2VMZW5ndGgsXG4gICAgbWVzc2FnZVdpdGhOb25jZS5sZW5ndGhcbiAgKTtcblxuICBjb25zdCBkZWNyeXB0ZWQgPSBzZWNyZXRib3gub3BlbihtZXNzYWdlLCBub25jZSwga2V5VWludDhBcnJheSk7XG5cbiAgaWYgKCFkZWNyeXB0ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZWNyeXB0IG1lc3NhZ2UnKTtcbiAgfVxuXG4gIGNvbnN0IGJhc2U2NERlY3J5cHRlZE1lc3NhZ2UgPSBlbmNvZGVVVEY4KGRlY3J5cHRlZCk7XG4gIHJldHVybiBKU09OLnBhcnNlKGJhc2U2NERlY3J5cHRlZE1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhY2hlZEVuY3J5cHRvciA9ICgpID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIHtcbiAgICBlbmNyeXB0OiBhc3luYyAoanNvbiwgcHcsIHNhbHQpID0+IHtcbiAgICAgIGlmICghY2FjaGVbcHddKSB7XG4gICAgICAgIGNhY2hlW3B3XSA9IGF3YWl0IGdlbmVyYXRlUGFzc3dvcmRTaGFLZXkocHcsIHNhbHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVuY3J5cHQoanNvbiwgY2FjaGVbcHddKTtcbiAgICB9LFxuICAgIGRlY3J5cHQ6IGFzeW5jIChjaXBoZXJ0ZXh0LCBwdywgc2FsdCkgPT4ge1xuICAgICAgaWYgKCFjYWNoZVtwd10pIHtcbiAgICAgICAgY2FjaGVbcHddID0gYXdhaXQgZ2VuZXJhdGVQYXNzd29yZFNoYUtleShwdywgc2FsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVjcnlwdChjaXBoZXJ0ZXh0LCBjYWNoZVtwd10pO1xuICAgIH1cbiAgfTtcbn07XG4iXX0=
