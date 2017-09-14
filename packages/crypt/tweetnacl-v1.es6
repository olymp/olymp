import { secretbox, randomBytes } from 'tweetnacl';
import { decodeUTF8, encodeUTF8, encodeBase64, decodeBase64 } from 'tweetnacl-util';
import { pbkdf2 } from 'fast-sha256';

/**
 * generate a nonce UInt8Array
 *
 * @returns {UInt8Array} nonce
 */
const newNonce = () => randomBytes(secretbox.nonceLength);

/**
 * generate a random secure key
 *
 * @returns {string} base64 encoded key
 */

export const generateRandomKey = () => encodeBase64(randomBytes(secretbox.keyLength));
export const generatePasswordShaKey = (password, salt, rounds = 100000, len = 32) => {
  const utf8Password = decodeUTF8(password);
  const utf8Salt = decodeUTF8(salt);
  const hash = pbkdf2(utf8Password, utf8Salt, rounds, len);
  return encodeBase64(hash);
};
/**
 * Encrypts an object with a UInt8Array key
 *
 * @param {object} json
 * @param {string} key (base64)
 * @returns {string} encrypted
 */
export const encrypt = (json, key) => {
  const keyUint8Array = decodeBase64(key);

  const nonce = newNonce();
  const messageUint8 = decodeUTF8(JSON.stringify(json));
  const box = secretbox(messageUint8, nonce, keyUint8Array);

  const fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);

  const base64FullMessage = encodeBase64(fullMessage);
  return base64FullMessage;
};

/**
 * Decrypts a string with an UInt8Array key to JSON object
 *
 * @param {string} messageWithNonce
 * @param {string} key (base64)
 * @returns {object} decrypted
 */
export const decrypt = (messageWithNonce, key) => {
  const keyUint8Array = decodeBase64(key);
  const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
  const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
  const message = messageWithNonceAsUint8Array.slice(
    secretbox.nonceLength,
    messageWithNonce.length,
  );

  const decrypted = secretbox.open(message, nonce, keyUint8Array);

  if (!decrypted) {
    throw new Error('Could not decrypt message');
  }

  const base64DecryptedMessage = encodeUTF8(decrypted);
  return JSON.parse(base64DecryptedMessage);
};

export const cachedEncryptor = () => {
  const cache = {};
  return {
    encrypt: async (json, pw, salt) => {
      if (!cache[pw]) {
        cache[pw] = await generatePasswordShaKey(pw, salt);
      }
      return encrypt(json, cache[pw]);
    },
    decrypt: async (ciphertext, pw, salt) => {
      if (!cache[pw]) {
        cache[pw] = await generatePasswordShaKey(pw, salt);
      }
      return decrypt(ciphertext, cache[pw]);
    },
  };
};
