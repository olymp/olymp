var _this = this;

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

export var hashPassword = function hashPassword(password) {
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
    }, _callee, _this);
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
    }, _callee2, _this);
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
};*/

export var encrypt = function () {
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
    }, _callee3, _this);
  }));

  return function encrypt(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

export var decrypt = function () {
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
    }, _callee4, _this);
  }));

  return function decrypt(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

export var cachedEncryptor = function cachedEncryptor() {
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
        }, _callee5, _this);
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
        }, _callee6, _this);
      }));

      return function decrypt(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NyeXB0L3dlYmNyeXB0by12MS5lczYiXSwibmFtZXMiOlsiY3J5cHRvIiwiVGV4dEVuY29kZXIiLCJUZXh0RGVjb2RlciIsInByb2Nlc3MiLCJlbnYiLCJJU19OT0RFIiwicmVxdWlyZSIsIldlYkNyeXB0byIsIndpbmRvdyIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwicHdVdGY4IiwiZW5jb2RlIiwic3VidGxlIiwiZGlnZXN0IiwiZW5jcnlwdFdpdGhIYXNoIiwianNvbiIsInB3SGFzaCIsInBsYWludGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdiIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJhbGciLCJuYW1lIiwiaW1wb3J0S2V5Iiwia2V5IiwicHRVaW50OCIsImVuY3J5cHQiLCJjdEJ1ZmZlciIsImN0QXJyYXkiLCJBcnJheSIsImZyb20iLCJjdFN0ciIsIm1hcCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImJ5dGUiLCJqb2luIiwiY3RCYXNlNjQiLCJidG9hIiwiaXZIZXgiLCJiIiwidG9TdHJpbmciLCJzbGljZSIsImRlY3J5cHRXaXRoSGFzaCIsImNpcGhlcnRleHQiLCJtYXRjaCIsInBhcnNlSW50IiwiYXRvYiIsImN0VWludDgiLCJjaCIsImNoYXJDb2RlQXQiLCJkZWNyeXB0IiwicGxhaW5CdWZmZXIiLCJkZWNvZGUiLCJwYXJzZSIsInB3IiwiaGFzaCIsImNhY2hlZEVuY3J5cHRvciIsImNhY2hlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsZUFBSjtBQUNBLElBQUlDLG9CQUFKO0FBQ0EsSUFBSUMsb0JBQUo7QUFDQSxJQUFJQyxRQUFRQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCSixnQkFBY0ssUUFBUSxlQUFSLEVBQXlCTCxXQUF2QztBQUNBQyxnQkFBY0ksUUFBUSxlQUFSLEVBQXlCSixXQUF2QztBQUNBLE1BQU1LLFlBQVlELFFBQVEscUJBQVIsQ0FBbEI7QUFDQU4sV0FB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Z0JBRGUsR0FDUmxELGFBQWFpRCxFQUFiLENBRFE7O0FBRXJCWiw0QkFBZ0JDLFVBQWhCLEVBQTRCWSxJQUE1Qjs7QUFGcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUtQLE9BQU8sSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQ25DLE1BQU1DLFFBQVEsRUFBZDtBQUNBLFNBQU87QUFDTGhDO0FBQUEsMEVBQVMsa0JBQU9iLElBQVAsRUFBYTBDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNGRyxNQUFNSCxFQUFOLENBREU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFFYWpELGFBQWFpRCxFQUFiLENBRmI7O0FBQUE7QUFFTEcsc0JBQU1ILEVBQU4sQ0FGSzs7QUFBQTtBQUFBLGtEQUlBM0MsZ0JBQWdCQyxJQUFoQixFQUFzQjZDLE1BQU1ILEVBQU4sQ0FBdEIsQ0FKQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREs7QUFPTEo7QUFBQSwwRUFBUyxrQkFBT1AsVUFBUCxFQUFtQlcsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNGRyxNQUFNSCxFQUFOLENBREU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFFYWpELGFBQWFpRCxFQUFiLENBRmI7O0FBQUE7QUFFTEcsc0JBQU1ILEVBQU4sQ0FGSzs7QUFBQTtBQUFBLGtEQUlBWixnQkFBZ0JDLFVBQWhCLEVBQTRCYyxNQUFNSCxFQUFOLENBQTVCLENBSkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBLLEdBQVA7QUFjRCxDQWhCTSIsImZpbGUiOiJwYWNrYWdlcy9jcnlwdC93ZWJjcnlwdG8tdjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3J5cHRvO1xubGV0IFRleHRFbmNvZGVyO1xubGV0IFRleHREZWNvZGVyO1xuaWYgKHByb2Nlc3MuZW52LklTX05PREUpIHtcbiAgVGV4dEVuY29kZXIgPSByZXF1aXJlKCd0ZXh0LWVuY29kaW5nJykuVGV4dEVuY29kZXI7XG4gIFRleHREZWNvZGVyID0gcmVxdWlyZSgndGV4dC1lbmNvZGluZycpLlRleHREZWNvZGVyO1xuICBjb25zdCBXZWJDcnlwdG8gPSByZXF1aXJlKCdub2RlLXdlYmNyeXB0by1vc3NsJyk7XG4gIGNyeXB0byA9IG5ldyBXZWJDcnlwdG8oKTtcbn0gZWxzZSB7XG4gIGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XG4gIFRleHRFbmNvZGVyID0gd2luZG93LlRleHRFbmNvZGVyO1xuICBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2Rlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc2hQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xuICBjb25zdCBwd1V0ZjggPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocGFzc3dvcmQpOyAvLyBlbmNvZGUgcGFzc3dvcmQgYXMgVVRGLThcbiAgcmV0dXJuIGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgcHdVdGY4KTsgLy8gaGFzaCB0aGUgcGFzc3dvcmRcbn07XG5cbmNvbnN0IGVuY3J5cHRXaXRoSGFzaCA9IGFzeW5jIChqc29uLCBwd0hhc2gpID0+IHtcbiAgY29uc3QgcGxhaW50ZXh0ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgY29uc3QgaXYgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEyKSk7IC8vIGdldCA5Ni1iaXQgcmFuZG9tIGl2XG5cbiAgY29uc3QgYWxnID0geyBuYW1lOiAnQUVTLUdDTScsIGl2IH07IC8vIHNwZWNpZnkgYWxnb3JpdGhtIHRvIHVzZVxuXG4gIGNvbnN0IGtleSA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCdyYXcnLCBwd0hhc2gsIGFsZywgZmFsc2UsIFsnZW5jcnlwdCddKTsgLy8gZ2VuZXJhdGUga2V5IGZyb20gcHdcblxuICBjb25zdCBwdFVpbnQ4ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHBsYWludGV4dCk7IC8vIGVuY29kZSBwbGFpbnRleHQgYXMgVVRGLThcbiAgY29uc3QgY3RCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoYWxnLCBrZXksIHB0VWludDgpOyAvLyBlbmNyeXB0IHBsYWludGV4dCB1c2luZyBrZXlcblxuICBjb25zdCBjdEFycmF5ID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShjdEJ1ZmZlcikpOyAvLyBjaXBoZXJ0ZXh0IGFzIGJ5dGUgYXJyYXlcbiAgY29uc3QgY3RTdHIgPSBjdEFycmF5Lm1hcChieXRlID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkpLmpvaW4oJycpOyAvLyBjaXBoZXJ0ZXh0IGFzIHN0cmluZ1xuICBjb25zdCBjdEJhc2U2NCA9IGJ0b2EoY3RTdHIpOyAvLyBlbmNvZGUgY2lwaGVydGV4dCBhcyBiYXNlNjRcblxuICBjb25zdCBpdkhleCA9IEFycmF5LmZyb20oaXYpXG4gICAgLm1hcChiID0+IGAwMCR7Yi50b1N0cmluZygxNil9YC5zbGljZSgtMikpXG4gICAgLmpvaW4oJycpOyAvLyBpdiBhcyBoZXggc3RyaW5nXG5cbiAgcmV0dXJuIGl2SGV4ICsgY3RCYXNlNjQ7IC8vIHJldHVybiBpditjaXBoZXJ0ZXh0XG59O1xuXG5jb25zdCBkZWNyeXB0V2l0aEhhc2ggPSBhc3luYyAoY2lwaGVydGV4dCwgcHdIYXNoKSA9PiB7XG4gIGNvbnN0IGl2ID0gY2lwaGVydGV4dFxuICAgIC5zbGljZSgwLCAyNClcbiAgICAubWF0Y2goLy57Mn0vZylcbiAgICAubWFwKGJ5dGUgPT4gcGFyc2VJbnQoYnl0ZSwgMTYpKTsgLy8gZ2V0IGl2IGZyb20gY2lwaGVydGV4dFxuXG4gIGNvbnN0IGFsZyA9IHsgbmFtZTogJ0FFUy1HQ00nLCBpdjogbmV3IFVpbnQ4QXJyYXkoaXYpIH07IC8vIHNwZWNpZnkgYWxnb3JpdGhtIHRvIHVzZVxuXG4gIGNvbnN0IGtleSA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCdyYXcnLCBwd0hhc2gsIGFsZywgZmFsc2UsIFsnZGVjcnlwdCddKTsgLy8gdXNlIHB3IHRvIGdlbmVyYXRlIGtleVxuXG4gIGNvbnN0IGN0U3RyID0gYXRvYihjaXBoZXJ0ZXh0LnNsaWNlKDI0KSk7IC8vIGRlY29kZSBiYXNlNjQgY2lwaGVydGV4dFxuICBjb25zdCBjdFVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoY3RTdHIubWF0Y2goLy4vZykubWFwKGNoID0+IGNoLmNoYXJDb2RlQXQoMCkpKTsgLy8gY2lwaGVydGV4dCBhcyBVaW50OEFycmF5XG4gIC8vIG5vdGU6IHdoeSBkb2Vzbid0IGN0VWludDggPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoY3RTdHIpIHdvcms/XG5cbiAgY29uc3QgcGxhaW5CdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoYWxnLCBrZXksIGN0VWludDgpOyAvLyBkZWNyeXB0IGNpcGhlcnRleHQgdXNpbmcga2V5XG4gIGNvbnN0IHBsYWludGV4dCA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShwbGFpbkJ1ZmZlcik7IC8vIGRlY29kZSBwYXNzd29yZCBmcm9tIFVURi04XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UocGxhaW50ZXh0KTsgLy8gcmV0dXJuIHRoZSBwbGFpbnRleHRcbn07XG5cbi8qIGV4cG9ydCBjb25zdCBlbmNyeXB0VW50aWxXb3JrcyA9IGFzeW5jIChqc29uLCBwYXNzd29yZCwgcGFzcyA9IDApID0+IHtcbiAgaWYgKHBhc3MgPT09IDEwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZW5jcnlwdCBhZnRlciAxMCB0cmllcycpO1xuICB9XG4gIGNvbnN0IHN0ciA9IGF3YWl0IGVuY3J5cHQoanNvbiwgcGFzc3dvcmQpO1xuICBjb25zdCBjaGVjayA9IGF3YWl0IGRlY3J5cHQoc3RyLCBwYXNzd29yZCk7XG4gIGlmIChjaGVjayA9PT0gbnVsbCkge1xuICAgIHJldHVybiBlbmNyeXB0VW50aWxXb3Jrcyhqc29uLCBwYXNzd29yZCwgcGFzcyArIDEpO1xuICB9XG4gIHJldHVybiBzdHI7XG59OyovXG5cbmV4cG9ydCBjb25zdCBlbmNyeXB0ID0gYXN5bmMgKGpzb24sIHB3KSA9PiB7XG4gIGNvbnN0IGhhc2ggPSBoYXNoUGFzc3dvcmQocHcpO1xuICBlbmNyeXB0V2l0aEhhc2goanNvbiwgaGFzaCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVjcnlwdCA9IGFzeW5jIChjaXBoZXJ0ZXh0LCBwdykgPT4ge1xuICBjb25zdCBoYXNoID0gaGFzaFBhc3N3b3JkKHB3KTtcbiAgZGVjcnlwdFdpdGhIYXNoKGNpcGhlcnRleHQsIGhhc2gpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhY2hlZEVuY3J5cHRvciA9ICgpID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIHtcbiAgICBlbmNyeXB0OiBhc3luYyAoanNvbiwgcHcpID0+IHtcbiAgICAgIGlmICghY2FjaGVbcHddKSB7XG4gICAgICAgIGNhY2hlW3B3XSA9IGF3YWl0IGhhc2hQYXNzd29yZChwdyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW5jcnlwdFdpdGhIYXNoKGpzb24sIGNhY2hlW3B3XSk7XG4gICAgfSxcbiAgICBkZWNyeXB0OiBhc3luYyAoY2lwaGVydGV4dCwgcHcpID0+IHtcbiAgICAgIGlmICghY2FjaGVbcHddKSB7XG4gICAgICAgIGNhY2hlW3B3XSA9IGF3YWl0IGhhc2hQYXNzd29yZChwdyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVjcnlwdFdpdGhIYXNoKGNpcGhlcnRleHQsIGNhY2hlW3B3XSk7XG4gICAgfSxcbiAgfTtcbn07XG4iXX0=
