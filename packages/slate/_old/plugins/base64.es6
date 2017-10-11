import { State } from 'slate';

function atob(str) {
  return new Buffer(str, 'base64').toString('binary');
}
function btoa(str) {
  let buffer;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = new Buffer(str.toString(), 'binary');
  }

  return buffer.toString('base64');
}
/**
 * Encode a JSON `object` as base-64 `string`.
 *
 * @param {Object} object
 * @return {String}
 */

function encode(object) {
  const string = JSON.stringify(object);
  const encoded = btoa(encodeURIComponent(string));
  return encoded;
}

/**
 * Decode a base-64 `string` to a JSON `object`.
 *
 * @param {String} string
 * @return {Object}
 */

function decode(string) {
  const decoded = decodeURIComponent(atob(string));
  const object = JSON.parse(decoded);
  return object;
}

/**
 * Deserialize a State `string`.
 *
 * @param {String} string
 * @return {State}
 */

function deserialize(string, options) {
  const raw = decode(string);
  const state = State.fromJSON(raw, options);
  return state;
}

/**
 * Deserialize a Node `string`.
 *
 * @param {String} string
 * @return {Node}
 */

function deserializeNode(string, options) {
  const { Node } = require('slate');
  const raw = decode(string);
  const node = Node.fromJSON(raw, options);
  return node;
}

/**
 * Serialize a `state`.
 *
 * @param {State} state
 * @return {String}
 */

function serialize(state, options) {
  const raw = state.toJSON(options);
  const encoded = encode(raw);
  return encoded;
}

/**
 * Serialize a `node`.
 *
 * @param {Node} node
 * @return {String}
 */

function serializeNode(node, options) {
  const raw = node.toJSON(options);
  const encoded = encode(raw);
  return encoded;
}

/**
 * Export.
 *
 * @type {Object}
 */

export default {
  deserialize,
  deserializeNode,
  serialize,
  serializeNode,
};
