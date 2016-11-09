export const encrypt = (data, key) => {
  const stringifySafe = require('json-stringify-safe');
  if (!data || Object.keys(data).length === 0) return null;
  let result = stringifySafe(data);
  if (data && key) {
    const AES = require("crypto-js/aes");
    result = result ? AES.encrypt(result, key).toString() : null;
  } else {
    const Utf8 = require("crypto-js/enc-utf8");
    const Base64 = require("crypto-js/enc-base64");
    result = Base64.stringify(Utf8.parse(result));
  }
  return result;
};
export const decrypt = (data, key) => {
  if (!data) return null;
  let result = data;
  if (data && key) {
    const AES = require("crypto-js/aes");
    const Utf8 = require("crypto-js/enc-utf8");
    result = AES.decrypt(data, key).toString(Utf8);
  } else {
    const Base64 = require("crypto-js/enc-base64");
    const Utf8 = require("crypto-js/enc-utf8");
    result = Base64.parse(data).toString(Utf8);
  }
  result = result ? JSON.parse(result) : undefined;
  return result || {};
};
