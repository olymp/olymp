var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { secretbox, randomBytes } from 'tweetnacl';
import { decodeUTF8, encodeUTF8, encodeBase64, decodeBase64 } from 'tweetnacl-util';
import { pbkdf2 } from 'fast-sha256';

/**
 * generate a nonce UInt8Array
 *
 * @returns {UInt8Array} nonce
 */
var newNonce = function newNonce() {
  return randomBytes(secretbox.nonceLength);
};

/**
 * generate a random secure key
 *
 * @returns {string} base64 encoded key
 */

export var generateRandomKey = function generateRandomKey() {
  return encodeBase64(randomBytes(secretbox.keyLength));
};
export var generatePasswordShaKey = function generatePasswordShaKey(password, salt) {
  var rounds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100000;
  var len = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 32;

  var utf8Password = decodeUTF8(password);
  var utf8Salt = decodeUTF8(salt);
  var hash = pbkdf2(utf8Password, utf8Salt, rounds, len);
  return encodeBase64(hash);
};
/**
 * Encrypts an object with a UInt8Array key
 *
 * @param {object} json
 * @param {string} key (base64)
 * @returns {string} encrypted
 */
var _encrypt = function _encrypt(json, key) {
  var keyUint8Array = decodeBase64(key);

  var nonce = newNonce();
  var messageUint8 = decodeUTF8(JSON.stringify(json));
  var box = secretbox(messageUint8, nonce, keyUint8Array);

  var fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);

  var base64FullMessage = encodeBase64(fullMessage);
  return base64FullMessage;
};

/**
 * Decrypts a string with an UInt8Array key to JSON object
 *
 * @param {string} messageWithNonce
 * @param {string} key (base64)
 * @returns {object} decrypted
 */
export { _encrypt as encrypt };
var _decrypt = function _decrypt(messageWithNonce, key) {
  var keyUint8Array = decodeBase64(key);
  var messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
  var nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
  var message = messageWithNonceAsUint8Array.slice(secretbox.nonceLength, messageWithNonce.length);

  var decrypted = secretbox.open(message, nonce, keyUint8Array);

  if (!decrypted) {
    throw new Error('Could not decrypt message');
  }

  var base64DecryptedMessage = encodeUTF8(decrypted);
  return JSON.parse(base64DecryptedMessage);
};

export { _decrypt as decrypt };
export var cachedEncryptor = function cachedEncryptor() {
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
        }, _callee, _this);
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
        }, _callee2, _this);
      }));

      return function decrypt(_x6, _x7, _x8) {
        return _ref2.apply(this, arguments);
      };
    }()
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NyeXB0L3R3ZWV0bmFjbC12MS5lczYiXSwibmFtZXMiOlsic2VjcmV0Ym94IiwicmFuZG9tQnl0ZXMiLCJkZWNvZGVVVEY4IiwiZW5jb2RlVVRGOCIsImVuY29kZUJhc2U2NCIsImRlY29kZUJhc2U2NCIsInBia2RmMiIsIm5ld05vbmNlIiwibm9uY2VMZW5ndGgiLCJnZW5lcmF0ZVJhbmRvbUtleSIsImtleUxlbmd0aCIsImdlbmVyYXRlUGFzc3dvcmRTaGFLZXkiLCJwYXNzd29yZCIsInNhbHQiLCJyb3VuZHMiLCJsZW4iLCJ1dGY4UGFzc3dvcmQiLCJ1dGY4U2FsdCIsImhhc2giLCJlbmNyeXB0IiwianNvbiIsImtleSIsImtleVVpbnQ4QXJyYXkiLCJub25jZSIsIm1lc3NhZ2VVaW50OCIsIkpTT04iLCJzdHJpbmdpZnkiLCJib3giLCJmdWxsTWVzc2FnZSIsIlVpbnQ4QXJyYXkiLCJsZW5ndGgiLCJzZXQiLCJiYXNlNjRGdWxsTWVzc2FnZSIsImRlY3J5cHQiLCJtZXNzYWdlV2l0aE5vbmNlIiwibWVzc2FnZVdpdGhOb25jZUFzVWludDhBcnJheSIsInNsaWNlIiwibWVzc2FnZSIsImRlY3J5cHRlZCIsIm9wZW4iLCJFcnJvciIsImJhc2U2NERlY3J5cHRlZE1lc3NhZ2UiLCJwYXJzZSIsImNhY2hlZEVuY3J5cHRvciIsImNhY2hlIiwicHciLCJjaXBoZXJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsV0FBdkM7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxVQUFyQixFQUFpQ0MsWUFBakMsRUFBK0NDLFlBQS9DLFFBQW1FLGdCQUFuRTtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsYUFBdkI7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTU4sWUFBWUQsVUFBVVEsV0FBdEIsQ0FBTjtBQUFBLENBQWpCOztBQUVBOzs7Ozs7QUFNQSxPQUFPLElBQU1D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QVAsRUFBbUJELEVBQW5CLEVBQXVCaEMsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNGK0IsTUFBTUMsRUFBTixDQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBRWFsQyx1QkFBdUJrQyxFQUF2QixFQUEyQmhDLElBQTNCLENBRmI7O0FBQUE7QUFFTCtCLHNCQUFNQyxFQUFOLENBRks7O0FBQUE7QUFBQSxrREFJQVosU0FBUWEsVUFBUixFQUFvQkYsTUFBTUMsRUFBTixDQUFwQixDQUpBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSyxHQUFQO0FBY0QsQ0FoQk0iLCJmaWxlIjoicGFja2FnZXMvY3J5cHQvdHdlZXRuYWNsLXYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VjcmV0Ym94LCByYW5kb21CeXRlcyB9IGZyb20gJ3R3ZWV0bmFjbCc7XG5pbXBvcnQgeyBkZWNvZGVVVEY4LCBlbmNvZGVVVEY4LCBlbmNvZGVCYXNlNjQsIGRlY29kZUJhc2U2NCB9IGZyb20gJ3R3ZWV0bmFjbC11dGlsJztcbmltcG9ydCB7IHBia2RmMiB9IGZyb20gJ2Zhc3Qtc2hhMjU2JztcblxuLyoqXG4gKiBnZW5lcmF0ZSBhIG5vbmNlIFVJbnQ4QXJyYXlcbiAqXG4gKiBAcmV0dXJucyB7VUludDhBcnJheX0gbm9uY2VcbiAqL1xuY29uc3QgbmV3Tm9uY2UgPSAoKSA9PiByYW5kb21CeXRlcyhzZWNyZXRib3gubm9uY2VMZW5ndGgpO1xuXG4vKipcbiAqIGdlbmVyYXRlIGEgcmFuZG9tIHNlY3VyZSBrZXlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBrZXlcbiAqL1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb21LZXkgPSAoKSA9PiBlbmNvZGVCYXNlNjQocmFuZG9tQnl0ZXMoc2VjcmV0Ym94LmtleUxlbmd0aCkpO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUGFzc3dvcmRTaGFLZXkgPSAocGFzc3dvcmQsIHNhbHQsIHJvdW5kcyA9IDEwMDAwMCwgbGVuID0gMzIpID0+IHtcbiAgY29uc3QgdXRmOFBhc3N3b3JkID0gZGVjb2RlVVRGOChwYXNzd29yZCk7XG4gIGNvbnN0IHV0ZjhTYWx0ID0gZGVjb2RlVVRGOChzYWx0KTtcbiAgY29uc3QgaGFzaCA9IHBia2RmMih1dGY4UGFzc3dvcmQsIHV0ZjhTYWx0LCByb3VuZHMsIGxlbik7XG4gIHJldHVybiBlbmNvZGVCYXNlNjQoaGFzaCk7XG59O1xuLyoqXG4gKiBFbmNyeXB0cyBhbiBvYmplY3Qgd2l0aCBhIFVJbnQ4QXJyYXkga2V5XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGpzb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgKGJhc2U2NClcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGVuY3J5cHRlZFxuICovXG5leHBvcnQgY29uc3QgZW5jcnlwdCA9IChqc29uLCBrZXkpID0+IHtcbiAgY29uc3Qga2V5VWludDhBcnJheSA9IGRlY29kZUJhc2U2NChrZXkpO1xuXG4gIGNvbnN0IG5vbmNlID0gbmV3Tm9uY2UoKTtcbiAgY29uc3QgbWVzc2FnZVVpbnQ4ID0gZGVjb2RlVVRGOChKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gIGNvbnN0IGJveCA9IHNlY3JldGJveChtZXNzYWdlVWludDgsIG5vbmNlLCBrZXlVaW50OEFycmF5KTtcblxuICBjb25zdCBmdWxsTWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG5vbmNlLmxlbmd0aCArIGJveC5sZW5ndGgpO1xuICBmdWxsTWVzc2FnZS5zZXQobm9uY2UpO1xuICBmdWxsTWVzc2FnZS5zZXQoYm94LCBub25jZS5sZW5ndGgpO1xuXG4gIGNvbnN0IGJhc2U2NEZ1bGxNZXNzYWdlID0gZW5jb2RlQmFzZTY0KGZ1bGxNZXNzYWdlKTtcbiAgcmV0dXJuIGJhc2U2NEZ1bGxNZXNzYWdlO1xufTtcblxuLyoqXG4gKiBEZWNyeXB0cyBhIHN0cmluZyB3aXRoIGFuIFVJbnQ4QXJyYXkga2V5IHRvIEpTT04gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VXaXRoTm9uY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgKGJhc2U2NClcbiAqIEByZXR1cm5zIHtvYmplY3R9IGRlY3J5cHRlZFxuICovXG5leHBvcnQgY29uc3QgZGVjcnlwdCA9IChtZXNzYWdlV2l0aE5vbmNlLCBrZXkpID0+IHtcbiAgY29uc3Qga2V5VWludDhBcnJheSA9IGRlY29kZUJhc2U2NChrZXkpO1xuICBjb25zdCBtZXNzYWdlV2l0aE5vbmNlQXNVaW50OEFycmF5ID0gZGVjb2RlQmFzZTY0KG1lc3NhZ2VXaXRoTm9uY2UpO1xuICBjb25zdCBub25jZSA9IG1lc3NhZ2VXaXRoTm9uY2VBc1VpbnQ4QXJyYXkuc2xpY2UoMCwgc2VjcmV0Ym94Lm5vbmNlTGVuZ3RoKTtcbiAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VXaXRoTm9uY2VBc1VpbnQ4QXJyYXkuc2xpY2UoXG4gICAgc2VjcmV0Ym94Lm5vbmNlTGVuZ3RoLFxuICAgIG1lc3NhZ2VXaXRoTm9uY2UubGVuZ3RoLFxuICApO1xuXG4gIGNvbnN0IGRlY3J5cHRlZCA9IHNlY3JldGJveC5vcGVuKG1lc3NhZ2UsIG5vbmNlLCBrZXlVaW50OEFycmF5KTtcblxuICBpZiAoIWRlY3J5cHRlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGRlY3J5cHQgbWVzc2FnZScpO1xuICB9XG5cbiAgY29uc3QgYmFzZTY0RGVjcnlwdGVkTWVzc2FnZSA9IGVuY29kZVVURjgoZGVjcnlwdGVkKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjcnlwdGVkTWVzc2FnZSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FjaGVkRW5jcnlwdG9yID0gKCkgPT4ge1xuICBjb25zdCBjYWNoZSA9IHt9O1xuICByZXR1cm4ge1xuICAgIGVuY3J5cHQ6IGFzeW5jIChqc29uLCBwdywgc2FsdCkgPT4ge1xuICAgICAgaWYgKCFjYWNoZVtwd10pIHtcbiAgICAgICAgY2FjaGVbcHddID0gYXdhaXQgZ2VuZXJhdGVQYXNzd29yZFNoYUtleShwdywgc2FsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW5jcnlwdChqc29uLCBjYWNoZVtwd10pO1xuICAgIH0sXG4gICAgZGVjcnlwdDogYXN5bmMgKGNpcGhlcnRleHQsIHB3LCBzYWx0KSA9PiB7XG4gICAgICBpZiAoIWNhY2hlW3B3XSkge1xuICAgICAgICBjYWNoZVtwd10gPSBhd2FpdCBnZW5lcmF0ZVBhc3N3b3JkU2hhS2V5KHB3LCBzYWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWNyeXB0KGNpcGhlcnRleHQsIGNhY2hlW3B3XSk7XG4gICAgfSxcbiAgfTtcbn07XG4iXX0=
