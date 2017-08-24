let crypto;
let TextEncoder;
let TextDecoder;
if (process.env.IS_NODE) {
  TextEncoder = require('text-encoding').TextEncoder;
  TextDecoder = require('text-encoding').TextDecoder;
  const WebCrypto = require('node-webcrypto-ossl');
  crypto = new WebCrypto();
} else {
  crypto = window.crypto;
  TextEncoder = window.TextEncoder;
  TextDecoder = window.TextDecoder;
}

/**
 * Encrypts plaintext using AES-GCM with supplied password, for decryption with aesGcmDecrypt().
 *
 * @param   {String} plaintext - Plaintext to be encrypted.
 * @param   {String} password - Password to use to encrypt plaintext.
 * @returns {String} Encrypted ciphertext.
 *
 * @example
 *   const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
 */
export const encrypt = async (json, password) => {
  try {
    const plaintext = JSON.stringify(json);
    const pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); // hash the password

    const iv = crypto.getRandomValues(new Uint8Array(12)); // get 96-bit random iv

    const alg = { name: 'AES-GCM', iv }; // specify algorithm to use

    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']); // generate key from pw

    const ptUint8 = new TextEncoder().encode(plaintext); // encode plaintext as UTF-8
    const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8); // encrypt plaintext using key

    const ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array
    const ctStr = ctArray.map(byte => String.fromCharCode(byte)).join(''); // ciphertext as string
    const ctBase64 = btoa(ctStr); // encode ciphertext as base64

    const ivHex = Array.from(iv).map(b => `00${b.toString(16)}`.slice(-2)).join(''); // iv as hex string
    return ivHex + ctBase64; // return iv+ciphertext
  } catch (err) {
    console.error(err);
    return null;
  }
};

/**
   * Decrypts ciphertext encrypted with aesGcmEncrypt() using supplied password.
   *
   * @param   {String} ciphertext - Ciphertext to be decrypted.
   * @param   {String} password - Password to use to decrypt ciphertext.
   * @returns {String} Decrypted plaintext.
   *
   * @example
   *   const plaintext = await aesGcmDecrypt(ciphertext, 'pw');
   */
export const decrypt = async (ciphertext, password) => {
  try {
    const pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); // hash the password

    const iv = ciphertext.slice(0, 24).match(/.{2}/g).map(byte => parseInt(byte, 16)); // get iv from ciphertext

    const alg = { name: 'AES-GCM', iv: new Uint8Array(iv) }; // specify algorithm to use

    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']); // use pw to generate key

    const ctStr = atob(ciphertext.slice(24)); // decode base64 ciphertext
    const ctUint8 = new Uint8Array(ctStr.match(/./g).map(ch => ch.charCodeAt(0))); // ciphertext as Uint8Array
    // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?

    const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8); // decrypt ciphertext using key
    const plaintext = new TextDecoder().decode(plainBuffer); // decode password from UTF-8

    const json = JSON.parse(plaintext);
    return json; // return the json
  } catch (err) {
    console.error(err);
    return null;
  }
};

/**
 * Sometimes an encrypt call produces invalid output that can not be decrypted, this fc will repeat until output is produced that works (max 10x)
 *
 * @param   {String} plaintext - Plaintext to be encrypted.
 * @param   {String} password - Password to use to encrypt plaintext.
 * @returns {String} Encrypted ciphertext.
 *
 * @example
 *   const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
 */
export const encryptUntilWorks = async (json, password, pass = 0) => {
  if (pass === 10) {
    throw new Error('Could not encrypt after 10 tries');
  }
  const str = await encrypt(json, password);
  const check = await decrypt(str, password);
  if (check === null) {
    return encryptUntilWorks(json, password, pass + 1);
  }
  return str;
};
