'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var crypto = void 0;
var TextEncoder = void 0;
var TextDecoder = void 0;
if (process.env.IS_NODE) {
  TextEncoder = require('text-encoding').TextEncoder;
  TextDecoder = require('text-encoding').TextDecoder;
  var WebCrypto = require('node-webcrypto-ossl');
  crypto = new WebCrypto();
} else {
  crypto = window.crypto;
  TextEncoder = window.TextEncoder;
  TextDecoder = window.TextDecoder;
}

var hashPassword = exports.hashPassword = function hashPassword(password) {
  var pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8
  return crypto.subtle.digest('SHA-256', pwUtf8); // hash the password
};

var encryptWithHash = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(json, pwHash) {
    var plaintext, iv, alg, key, ptUint8, ctBuffer, ctArray, ctStr, ctBase64, ivHex;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            plaintext = JSON.stringify(json);
            iv = crypto.getRandomValues(new Uint8Array(12)); // get 96-bit random iv

            alg = { name: 'AES-GCM', iv: iv }; // specify algorithm to use

            _context.next = 5;
            return crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);

          case 5:
            key = _context.sent;
            // generate key from pw

            ptUint8 = new TextEncoder().encode(plaintext); // encode plaintext as UTF-8

            _context.next = 9;
            return crypto.subtle.encrypt(alg, key, ptUint8);

          case 9:
            ctBuffer = _context.sent;
            // encrypt plaintext using key

            ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array

            ctStr = ctArray.map(function (byte) {
              return String.fromCharCode(byte);
            }).join(''); // ciphertext as string

            ctBase64 = btoa(ctStr); // encode ciphertext as base64

            ivHex = Array.from(iv).map(function (b) {
              return ('00' + b.toString(16)).slice(-2);
            }).join(''); // iv as hex string

            return _context.abrupt('return', ivHex + ctBase64);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function encryptWithHash(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var decryptWithHash = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ciphertext, pwHash) {
    var iv, alg, key, ctStr, ctUint8, plainBuffer, plaintext;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            iv = ciphertext.slice(0, 24).match(/.{2}/g).map(function (byte) {
              return parseInt(byte, 16);
            }); // get iv from ciphertext

            alg = { name: 'AES-GCM', iv: new Uint8Array(iv) }; // specify algorithm to use

            _context2.next = 4;
            return crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);

          case 4:
            key = _context2.sent;
            // use pw to generate key

            ctStr = atob(ciphertext.slice(24)); // decode base64 ciphertext

            ctUint8 = new Uint8Array(ctStr.match(/./g).map(function (ch) {
              return ch.charCodeAt(0);
            })); // ciphertext as Uint8Array
            // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?

            _context2.next = 9;
            return crypto.subtle.decrypt(alg, key, ctUint8);

          case 9:
            plainBuffer = _context2.sent;
            // decrypt ciphertext using key
            plaintext = new TextDecoder().decode(plainBuffer); // decode password from UTF-8

            return _context2.abrupt('return', JSON.parse(plaintext));

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function decryptWithHash(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/* export const encryptUntilWorks = async (json, password, pass = 0) => {
  if (pass === 10) {
    throw new Error('Could not encrypt after 10 tries');
  }
  const str = await encrypt(json, password);
  const check = await decrypt(str, password);
  if (check === null) {
    return encryptUntilWorks(json, password, pass + 1);
  }
  return str;
}; */

var encrypt = exports.encrypt = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(json, pw) {
    var hash;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            hash = hashPassword(pw);

            encryptWithHash(json, hash);

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function encrypt(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var decrypt = exports.decrypt = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ciphertext, pw) {
    var hash;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            hash = hashPassword(pw);

            decryptWithHash(ciphertext, hash);

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function decrypt(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var cachedEncryptor = exports.cachedEncryptor = function cachedEncryptor() {
  var cache = {};
  return {
    encrypt: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(json, pw) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (cache[pw]) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 3;
                return hashPassword(pw);

              case 3:
                cache[pw] = _context5.sent;

              case 4:
                return _context5.abrupt('return', encryptWithHash(json, cache[pw]));

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function encrypt(_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }(),
    decrypt: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ciphertext, pw) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (cache[pw]) {
                  _context6.next = 4;
                  break;
                }

                _context6.next = 3;
                return hashPassword(pw);

              case 3:
                cache[pw] = _context6.sent;

              case 4:
                return _context6.abrupt('return', decryptWithHash(ciphertext, cache[pw]));

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      return function decrypt(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2NyeXB0L3dlYmNyeXB0by12MS5lczYiXSwibmFtZXMiOlsiY3J5cHRvIiwiVGV4dEVuY29kZXIiLCJUZXh0RGVjb2RlciIsInByb2Nlc3MiLCJlbnYiLCJJU19OT0RFIiwicmVxdWlyZSIsIldlYkNyeXB0byIsIndpbmRvdyIsImhhc2hQYXNzd29yZCIsInB3VXRmOCIsImVuY29kZSIsInBhc3N3b3JkIiwic3VidGxlIiwiZGlnZXN0IiwiZW5jcnlwdFdpdGhIYXNoIiwianNvbiIsInB3SGFzaCIsInBsYWludGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdiIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJhbGciLCJuYW1lIiwiaW1wb3J0S2V5Iiwia2V5IiwicHRVaW50OCIsImVuY3J5cHQiLCJjdEJ1ZmZlciIsImN0QXJyYXkiLCJBcnJheSIsImZyb20iLCJjdFN0ciIsIm1hcCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImJ5dGUiLCJqb2luIiwiY3RCYXNlNjQiLCJidG9hIiwiaXZIZXgiLCJiIiwidG9TdHJpbmciLCJzbGljZSIsImRlY3J5cHRXaXRoSGFzaCIsImNpcGhlcnRleHQiLCJtYXRjaCIsInBhcnNlSW50IiwiYXRvYiIsImN0VWludDgiLCJjaCIsImNoYXJDb2RlQXQiLCJkZWNyeXB0IiwicGxhaW5CdWZmZXIiLCJkZWNvZGUiLCJwYXJzZSIsInB3IiwiaGFzaCIsImNhY2hlZEVuY3J5cHRvciIsImNhY2hlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLGVBQUo7QUFDQSxJQUFJQyxvQkFBSjtBQUNBLElBQUlDLG9CQUFKO0FBQ0EsSUFBSUMsUUFBUUMsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QkosZ0JBQWNLLFFBQVEsZUFBUixFQUF5QkwsV0FBdkM7QUFDQUMsZ0JBQWNJLFFBQVEsZUFBUixFQUF5QkosV0FBdkM7QUFDQSxNQUFNSyxZQUFZRCxRQUFRLHFCQUFSLENBQWxCO0FBQ0FO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LEdBQ1JsRCxhQUFhaUQsRUFBYixDQURROztBQUVyQlosNEJBQWdCQyxVQUFoQixFQUE0QlksSUFBNUI7O0FBRnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFLQSxJQUFNQyw0Q0FBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDbkMsTUFBTUMsUUFBUSxFQUFkO0FBQ0EsU0FBTztBQUNMaEM7QUFBQSwwRUFBUyxrQkFBT2IsSUFBUCxFQUFhMEMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0ZHLE1BQU1ILEVBQU4sQ0FERTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVhakQsYUFBYWlELEVBQWIsQ0FGYjs7QUFBQTtBQUVMRyxzQkFBTUgsRUFBTixDQUZLOztBQUFBO0FBQUEsa0RBSUEzQyxnQkFBZ0JDLElBQWhCLEVBQXNCNkMsTUFBTUgsRUFBTixDQUF0QixDQUpBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESztBQU9MSjtBQUFBLDBFQUFTLGtCQUFPUCxVQUFQLEVBQW1CVyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0ZHLE1BQU1ILEVBQU4sQ0FERTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVhakQsYUFBYWlELEVBQWIsQ0FGYjs7QUFBQTtBQUVMRyxzQkFBTUgsRUFBTixDQUZLOztBQUFBO0FBQUEsa0RBSUFaLGdCQUFnQkMsVUFBaEIsRUFBNEJjLE1BQU1ILEVBQU4sQ0FBNUIsQ0FKQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEssR0FBUDtBQWNELENBaEJNIiwiZmlsZSI6ImV4dGVybmFsL2NyeXB0L3dlYmNyeXB0by12MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjcnlwdG87XG5sZXQgVGV4dEVuY29kZXI7XG5sZXQgVGV4dERlY29kZXI7XG5pZiAocHJvY2Vzcy5lbnYuSVNfTk9ERSkge1xuICBUZXh0RW5jb2RlciA9IHJlcXVpcmUoJ3RleHQtZW5jb2RpbmcnKS5UZXh0RW5jb2RlcjtcbiAgVGV4dERlY29kZXIgPSByZXF1aXJlKCd0ZXh0LWVuY29kaW5nJykuVGV4dERlY29kZXI7XG4gIGNvbnN0IFdlYkNyeXB0byA9IHJlcXVpcmUoJ25vZGUtd2ViY3J5cHRvLW9zc2wnKTtcbiAgY3J5cHRvID0gbmV3IFdlYkNyeXB0bygpO1xufSBlbHNlIHtcbiAgY3J5cHRvID0gd2luZG93LmNyeXB0bztcbiAgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXI7XG4gIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyO1xufVxuXG5leHBvcnQgY29uc3QgaGFzaFBhc3N3b3JkID0gcGFzc3dvcmQgPT4ge1xuICBjb25zdCBwd1V0ZjggPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocGFzc3dvcmQpOyAvLyBlbmNvZGUgcGFzc3dvcmQgYXMgVVRGLThcbiAgcmV0dXJuIGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgcHdVdGY4KTsgLy8gaGFzaCB0aGUgcGFzc3dvcmRcbn07XG5cbmNvbnN0IGVuY3J5cHRXaXRoSGFzaCA9IGFzeW5jIChqc29uLCBwd0hhc2gpID0+IHtcbiAgY29uc3QgcGxhaW50ZXh0ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgY29uc3QgaXYgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEyKSk7IC8vIGdldCA5Ni1iaXQgcmFuZG9tIGl2XG5cbiAgY29uc3QgYWxnID0geyBuYW1lOiAnQUVTLUdDTScsIGl2IH07IC8vIHNwZWNpZnkgYWxnb3JpdGhtIHRvIHVzZVxuXG4gIGNvbnN0IGtleSA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCdyYXcnLCBwd0hhc2gsIGFsZywgZmFsc2UsIFtcbiAgICAnZW5jcnlwdCdcbiAgXSk7IC8vIGdlbmVyYXRlIGtleSBmcm9tIHB3XG5cbiAgY29uc3QgcHRVaW50OCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwbGFpbnRleHQpOyAvLyBlbmNvZGUgcGxhaW50ZXh0IGFzIFVURi04XG4gIGNvbnN0IGN0QnVmZmVyID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KGFsZywga2V5LCBwdFVpbnQ4KTsgLy8gZW5jcnlwdCBwbGFpbnRleHQgdXNpbmcga2V5XG5cbiAgY29uc3QgY3RBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoY3RCdWZmZXIpKTsgLy8gY2lwaGVydGV4dCBhcyBieXRlIGFycmF5XG4gIGNvbnN0IGN0U3RyID0gY3RBcnJheS5tYXAoYnl0ZSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpKS5qb2luKCcnKTsgLy8gY2lwaGVydGV4dCBhcyBzdHJpbmdcbiAgY29uc3QgY3RCYXNlNjQgPSBidG9hKGN0U3RyKTsgLy8gZW5jb2RlIGNpcGhlcnRleHQgYXMgYmFzZTY0XG5cbiAgY29uc3QgaXZIZXggPSBBcnJheS5mcm9tKGl2KVxuICAgIC5tYXAoYiA9PiBgMDAke2IudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpKVxuICAgIC5qb2luKCcnKTsgLy8gaXYgYXMgaGV4IHN0cmluZ1xuXG4gIHJldHVybiBpdkhleCArIGN0QmFzZTY0OyAvLyByZXR1cm4gaXYrY2lwaGVydGV4dFxufTtcblxuY29uc3QgZGVjcnlwdFdpdGhIYXNoID0gYXN5bmMgKGNpcGhlcnRleHQsIHB3SGFzaCkgPT4ge1xuICBjb25zdCBpdiA9IGNpcGhlcnRleHRcbiAgICAuc2xpY2UoMCwgMjQpXG4gICAgLm1hdGNoKC8uezJ9L2cpXG4gICAgLm1hcChieXRlID0+IHBhcnNlSW50KGJ5dGUsIDE2KSk7IC8vIGdldCBpdiBmcm9tIGNpcGhlcnRleHRcblxuICBjb25zdCBhbGcgPSB7IG5hbWU6ICdBRVMtR0NNJywgaXY6IG5ldyBVaW50OEFycmF5KGl2KSB9OyAvLyBzcGVjaWZ5IGFsZ29yaXRobSB0byB1c2VcblxuICBjb25zdCBrZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgcHdIYXNoLCBhbGcsIGZhbHNlLCBbXG4gICAgJ2RlY3J5cHQnXG4gIF0pOyAvLyB1c2UgcHcgdG8gZ2VuZXJhdGUga2V5XG5cbiAgY29uc3QgY3RTdHIgPSBhdG9iKGNpcGhlcnRleHQuc2xpY2UoMjQpKTsgLy8gZGVjb2RlIGJhc2U2NCBjaXBoZXJ0ZXh0XG4gIGNvbnN0IGN0VWludDggPSBuZXcgVWludDhBcnJheShjdFN0ci5tYXRjaCgvLi9nKS5tYXAoY2ggPT4gY2guY2hhckNvZGVBdCgwKSkpOyAvLyBjaXBoZXJ0ZXh0IGFzIFVpbnQ4QXJyYXlcbiAgLy8gbm90ZTogd2h5IGRvZXNuJ3QgY3RVaW50OCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShjdFN0cikgd29yaz9cblxuICBjb25zdCBwbGFpbkJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChhbGcsIGtleSwgY3RVaW50OCk7IC8vIGRlY3J5cHQgY2lwaGVydGV4dCB1c2luZyBrZXlcbiAgY29uc3QgcGxhaW50ZXh0ID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHBsYWluQnVmZmVyKTsgLy8gZGVjb2RlIHBhc3N3b3JkIGZyb20gVVRGLThcblxuICByZXR1cm4gSlNPTi5wYXJzZShwbGFpbnRleHQpOyAvLyByZXR1cm4gdGhlIHBsYWludGV4dFxufTtcblxuLyogZXhwb3J0IGNvbnN0IGVuY3J5cHRVbnRpbFdvcmtzID0gYXN5bmMgKGpzb24sIHBhc3N3b3JkLCBwYXNzID0gMCkgPT4ge1xuICBpZiAocGFzcyA9PT0gMTApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBlbmNyeXB0IGFmdGVyIDEwIHRyaWVzJyk7XG4gIH1cbiAgY29uc3Qgc3RyID0gYXdhaXQgZW5jcnlwdChqc29uLCBwYXNzd29yZCk7XG4gIGNvbnN0IGNoZWNrID0gYXdhaXQgZGVjcnlwdChzdHIsIHBhc3N3b3JkKTtcbiAgaWYgKGNoZWNrID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGVuY3J5cHRVbnRpbFdvcmtzKGpzb24sIHBhc3N3b3JkLCBwYXNzICsgMSk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07ICovXG5cbmV4cG9ydCBjb25zdCBlbmNyeXB0ID0gYXN5bmMgKGpzb24sIHB3KSA9PiB7XG4gIGNvbnN0IGhhc2ggPSBoYXNoUGFzc3dvcmQocHcpO1xuICBlbmNyeXB0V2l0aEhhc2goanNvbiwgaGFzaCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVjcnlwdCA9IGFzeW5jIChjaXBoZXJ0ZXh0LCBwdykgPT4ge1xuICBjb25zdCBoYXNoID0gaGFzaFBhc3N3b3JkKHB3KTtcbiAgZGVjcnlwdFdpdGhIYXNoKGNpcGhlcnRleHQsIGhhc2gpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhY2hlZEVuY3J5cHRvciA9ICgpID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIHtcbiAgICBlbmNyeXB0OiBhc3luYyAoanNvbiwgcHcpID0+IHtcbiAgICAgIGlmICghY2FjaGVbcHddKSB7XG4gICAgICAgIGNhY2hlW3B3XSA9IGF3YWl0IGhhc2hQYXNzd29yZChwdyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW5jcnlwdFdpdGhIYXNoKGpzb24sIGNhY2hlW3B3XSk7XG4gICAgfSxcbiAgICBkZWNyeXB0OiBhc3luYyAoY2lwaGVydGV4dCwgcHcpID0+IHtcbiAgICAgIGlmICghY2FjaGVbcHddKSB7XG4gICAgICAgIGNhY2hlW3B3XSA9IGF3YWl0IGhhc2hQYXNzd29yZChwdyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVjcnlwdFdpdGhIYXNoKGNpcGhlcnRleHQsIGNhY2hlW3B3XSk7XG4gICAgfVxuICB9O1xufTtcbiJdfQ==
