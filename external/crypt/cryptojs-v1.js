'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt = exports.encrypt = undefined;

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keySize = 256;
var ivSize = 128;
var iterations = 100;

var encrypt = exports.encrypt = function encrypt(m, pass) {
  var msg = JSON.stringify(m);
  var salt = _cryptoJs2.default.lib.WordArray.random(128 / 8);

  var key = _cryptoJs2.default.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations: iterations
  });

  var iv = _cryptoJs2.default.lib.WordArray.random(128 / 8);

  var encrypted = _cryptoJs2.default.AES.encrypt(msg, key, {
    iv: iv,
    padding: _cryptoJs2.default.pad.Pkcs7,
    mode: _cryptoJs2.default.mode.CBC
  });

  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
  return transitmessage;
};

var decrypt = exports.decrypt = function decrypt(transitmessage, pass, mapper) {
  var salt = _cryptoJs2.default.enc.Hex.parse(transitmessage.substr(0, 32));
  var iv = _cryptoJs2.default.enc.Hex.parse(transitmessage.substr(32, 32));
  var encrypted = transitmessage.substring(64);

  var key = _cryptoJs2.default.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations: iterations
  });

  var decrypted = _cryptoJs2.default.AES.decrypt(encrypted, key, {
    iv: iv,
    padding: _cryptoJs2.default.pad.Pkcs7,
    mode: _cryptoJs2.default.mode.CBC
  });
  return mapper ? mapper(JSON.parse(decrypted.toString(_cryptoJs2.default.enc.Utf8))) : JSON.parse(decrypted.toString(_cryptoJs2.default.enc.Utf8));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2NyeXB0L2NyeXB0b2pzLXYxLmVzNiJdLCJuYW1lcyI6WyJrZXlTaXplIiwiaXZTaXplIiwiaXRlcmF0aW9ucyIsImVuY3J5cHQiLCJtIiwicGFzcyIsIm1zZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYWx0IiwibGliIiwiV29yZEFycmF5IiwicmFuZG9tIiwia2V5IiwiUEJLREYyIiwiaXYiLCJlbmNyeXB0ZWQiLCJBRVMiLCJwYWRkaW5nIiwicGFkIiwiUGtjczciLCJtb2RlIiwiQ0JDIiwidHJhbnNpdG1lc3NhZ2UiLCJ0b1N0cmluZyIsImRlY3J5cHQiLCJtYXBwZXIiLCJlbmMiLCJIZXgiLCJwYXJzZSIsInN1YnN0ciIsInN1YnN0cmluZyIsImRlY3J5cHRlZCIsIlV0ZjgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFoQjtBQUNBLElBQU1DLFNBQVMsR0FBZjtBQUNBLElBQU1DLGFBQWEsR0FBbkI7O0FBRU8sSUFBTUMsNEJBQVUsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQUlDLElBQUosRUFBYTtBQUNsQyxNQUFNQyxNQUFNQyxLQUFLQyxTQUFMLENBQWVKLENBQWYsQ0FBWjtBQUNBLE1BQU1LLE9BQU8sbUJBQVNDLEdBQVQsQ0FBYUMsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsTUFBTSxDQUFwQyxDQUFiOztBQUVBLE1BQU1DLE1BQU0sbUJBQVNDLE1BQVQsQ0FBZ0JULElBQWhCLEVBQXNCSSxJQUF0QixFQUE0QjtBQUN0Q1QsYUFBU0EsVUFBVSxFQURtQjtBQUV0Q0U7QUFGc0MsR0FBNUIsQ0FBWjs7QUFLQSxNQUFNYSxLQUFLLG1CQUFTTCxHQUFULENBQWFDLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLE1BQU0sQ0FBcEMsQ0FBWDs7QUFFQSxNQUFNSSxZQUFZLG1CQUFTQyxHQUFULENBQWFkLE9BQWIsQ0FBcUJHLEdBQXJCLEVBQTBCTyxHQUExQixFQUErQjtBQUMvQ0UsVUFEK0M7QUFFL0NHLGFBQVMsbUJBQVNDLEdBQVQsQ0FBYUMsS0FGeUI7QUFHL0NDLFVBQU0sbUJBQVNBLElBQVQsQ0FBY0M7QUFIMkIsR0FBL0IsQ0FBbEI7O0FBTUE7QUFDQTtBQUNBLE1BQU1DLGlCQUFpQmQsS0FBS2UsUUFBTCxLQUFrQlQsR0FBR1MsUUFBSCxFQUFsQixHQUFrQ1IsVUFBVVEsUUFBVixFQUF6RDtBQUNBLFNBQU9ELGNBQVA7QUFDRCxDQXJCTTs7QUF1QkEsSUFBTUUsNEJBQVUsU0FBVkEsT0FBVSxDQUFDRixjQUFELEVBQWlCbEIsSUFBakIsRUFBdUJxQixNQUF2QixFQUFrQztBQUN2RCxNQUFNakIsT0FBTyxtQkFBU2tCLEdBQVQsQ0FBYUMsR0FBYixDQUFpQkMsS0FBakIsQ0FBdUJOLGVBQWVPLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsRUFBekIsQ0FBdkIsQ0FBYjtBQUNBLE1BQU1mLEtBQUssbUJBQVNZLEdBQVQsQ0FBYUMsR0FBYixDQUFpQkMsS0FBakIsQ0FBdUJOLGVBQWVPLE1BQWYsQ0FBc0IsRUFBdEIsRUFBMEIsRUFBMUIsQ0FBdkIsQ0FBWDtBQUNBLE1BQU1kLFlBQVlPLGVBQWVRLFNBQWYsQ0FBeUIsRUFBekIsQ0FBbEI7O0FBRUEsTUFBTWxCLE1BQU0sbUJBQVNDLE1BQVQsQ0FBZ0JULElBQWhCLEVBQXNCSSxJQUF0QixFQUE0QjtBQUN0Q1QsYUFBU0EsVUFBVSxFQURtQjtBQUV0Q0U7QUFGc0MsR0FBNUIsQ0FBWjs7QUFLQSxNQUFNOEIsWUFBWSxtQkFBU2YsR0FBVCxDQUFhUSxPQUFiLENBQXFCVCxTQUFyQixFQUFnQ0gsR0FBaEMsRUFBcUM7QUFDckRFLFVBRHFEO0FBRXJERyxhQUFTLG1CQUFTQyxHQUFULENBQWFDLEtBRitCO0FBR3JEQyxVQUFNLG1CQUFTQSxJQUFULENBQWNDO0FBSGlDLEdBQXJDLENBQWxCO0FBS0EsU0FBT0ksU0FDSEEsT0FBT25CLEtBQUtzQixLQUFMLENBQVdHLFVBQVVSLFFBQVYsQ0FBbUIsbUJBQVNHLEdBQVQsQ0FBYU0sSUFBaEMsQ0FBWCxDQUFQLENBREcsR0FFSDFCLEtBQUtzQixLQUFMLENBQVdHLFVBQVVSLFFBQVYsQ0FBbUIsbUJBQVNHLEdBQVQsQ0FBYU0sSUFBaEMsQ0FBWCxDQUZKO0FBR0QsQ0FsQk0iLCJmaWxlIjoiZXh0ZXJuYWwvY3J5cHQvY3J5cHRvanMtdjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcblxuY29uc3Qga2V5U2l6ZSA9IDI1NjtcbmNvbnN0IGl2U2l6ZSA9IDEyODtcbmNvbnN0IGl0ZXJhdGlvbnMgPSAxMDA7XG5cbmV4cG9ydCBjb25zdCBlbmNyeXB0ID0gKG0sIHBhc3MpID0+IHtcbiAgY29uc3QgbXNnID0gSlNPTi5zdHJpbmdpZnkobSk7XG4gIGNvbnN0IHNhbHQgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxMjggLyA4KTtcblxuICBjb25zdCBrZXkgPSBDcnlwdG9KUy5QQktERjIocGFzcywgc2FsdCwge1xuICAgIGtleVNpemU6IGtleVNpemUgLyAzMixcbiAgICBpdGVyYXRpb25zXG4gIH0pO1xuXG4gIGNvbnN0IGl2ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTI4IC8gOCk7XG5cbiAgY29uc3QgZW5jcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobXNnLCBrZXksIHtcbiAgICBpdixcbiAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczcsXG4gICAgbW9kZTogQ3J5cHRvSlMubW9kZS5DQkNcbiAgfSk7XG5cbiAgLy8gc2FsdCwgaXYgd2lsbCBiZSBoZXggMzIgaW4gbGVuZ3RoXG4gIC8vIGFwcGVuZCB0aGVtIHRvIHRoZSBjaXBoZXJ0ZXh0IGZvciB1c2UgIGluIGRlY3J5cHRpb25cbiAgY29uc3QgdHJhbnNpdG1lc3NhZ2UgPSBzYWx0LnRvU3RyaW5nKCkgKyBpdi50b1N0cmluZygpICsgZW5jcnlwdGVkLnRvU3RyaW5nKCk7XG4gIHJldHVybiB0cmFuc2l0bWVzc2FnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWNyeXB0ID0gKHRyYW5zaXRtZXNzYWdlLCBwYXNzLCBtYXBwZXIpID0+IHtcbiAgY29uc3Qgc2FsdCA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UodHJhbnNpdG1lc3NhZ2Uuc3Vic3RyKDAsIDMyKSk7XG4gIGNvbnN0IGl2ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZSh0cmFuc2l0bWVzc2FnZS5zdWJzdHIoMzIsIDMyKSk7XG4gIGNvbnN0IGVuY3J5cHRlZCA9IHRyYW5zaXRtZXNzYWdlLnN1YnN0cmluZyg2NCk7XG5cbiAgY29uc3Qga2V5ID0gQ3J5cHRvSlMuUEJLREYyKHBhc3MsIHNhbHQsIHtcbiAgICBrZXlTaXplOiBrZXlTaXplIC8gMzIsXG4gICAgaXRlcmF0aW9uc1xuICB9KTtcblxuICBjb25zdCBkZWNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChlbmNyeXB0ZWQsIGtleSwge1xuICAgIGl2LFxuICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzNyxcbiAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQ1xuICB9KTtcbiAgcmV0dXJuIG1hcHBlclxuICAgID8gbWFwcGVyKEpTT04ucGFyc2UoZGVjcnlwdGVkLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KSkpXG4gICAgOiBKU09OLnBhcnNlKGRlY3J5cHRlZC50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xufTtcbiJdfQ==
