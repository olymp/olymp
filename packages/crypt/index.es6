import CryptoJS from 'crypto-js';

const keySize = 256;
const ivSize = 128;
const iterations = 100;

export const encrypt = (m, pass) => {
  const msg = JSON.stringify(m);
  const salt = CryptoJS.lib.WordArray.random(128 / 8);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations,
  });

  const iv = CryptoJS.lib.WordArray.random(128 / 8);

  const encrypted = CryptoJS.AES.encrypt(msg, key, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  const transitmessage = salt.toString() + iv.toString() + encrypted.toString();
  return transitmessage;
};

export const decrypt = (transitmessage, pass, mapper) => {
  const salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
  const iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
  const encrypted = transitmessage.substring(64);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations,
  });

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  return mapper
    ? mapper(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)))
    : JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
};
