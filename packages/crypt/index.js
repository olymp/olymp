export var encrypt = function (data, key) {
    var stringifySafe = require('json-stringify-safe');
    if (!data || Object.keys(data).length === 0) {
        return null;
    }
    var result = stringifySafe(data);
    if (data && key) {
        var AES = require('crypto-js/aes');
        result = result ? AES.encrypt(result, key).toString() : null;
    }
    else {
        var Utf8 = require('crypto-js/enc-utf8');
        var Base64 = require('crypto-js/enc-base64');
        result = Base64.stringify(Utf8.parse(result));
    }
    return result;
};
export var decrypt = function (data, key) {
    if (!data) {
        return null;
    }
    var result = data;
    if (data && key) {
        var AES = require('crypto-js/aes');
        var Utf8 = require('crypto-js/enc-utf8');
        result = AES.decrypt(data, key).toString(Utf8);
    }
    else {
        var Base64 = require('crypto-js/enc-base64');
        var Utf8 = require('crypto-js/enc-utf8');
        result = Base64.parse(data).toString(Utf8);
    }
    result = result ? JSON.parse(result) : undefined;
    return result || {};
};
//# sourceMappingURL=index.js.map