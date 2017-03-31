import { Raw } from 'slate';
import shortID from 'shortid';

function deserialize(string, options = {}) {
  const getInnerTextNode = text => ({
    kind: 'text',
    ranges: [{
      text,
      marks: [],
    }],
  })
  const getTextNode = text => ({
    kind: 'block',
    type: 'line',
    nodes: text !== undefined ? [getInnerTextNode(text)] : [],
  });
  const nodes = [];
  const deserializeNode = (line) => {
    //const split = line.match(/#[A-Za-z0-9]([A-Za-z0-9 -])+[A-Za-z0-9]#/g);
    //split.forEach();
    const node = getTextNode();
    const split = line.split('{').forEach((x, i) => {
      if (x.indexOf('}') !== -1) {
        const [key, line] = x.split('}');
        node.nodes.push({
          kind: 'block',
          type: 'select',
          nodes: [getTextNode(key)],
          data: {
            key,
            id: shortID.generate()
          },
        });
        node.nodes.push(getInnerTextNode(line));
      } else {
        node.nodes.push(getInnerTextNode(x));
      }
    });
    nodes.push(node);
  };
  string.split('\n').forEach(deserializeNode);
  const raw = {
    kind: 'state',
    document: {
      kind: 'document',
      nodes,
    },
  };

  return options.toRaw ? raw : Raw.deserialize(raw)
}

function gather(state, filter) {
  const nodes = [];
  function runner(node, level = 0) {
    if (filter(node, level)) nodes.push(node);
    if (node.nodes) node.nodes.map(node => runner(node, level++));
  }
  state.document.nodes.map(runner);
  return nodes;
}
function getNode(state, criteria) {
  let found;
  function runner(nodes) {
    nodes.some(node => {
      if (criteria(node)) {
        found = node;
        return true;
      }
      else if (node.nodes) {
        runner(node.nodes);
        if (found) return true;
      } return false;
    });
  }
  runner(state.document.nodes);
  return found;
}

function serializeNode(node) {
  if (node.nodes) return node.nodes.map(serializeNode).join('\n');
  return node.text;
}

function serialize(state) {
  return state.document.nodes.map(serializeNode).join('\n');
  /*return state.document.nodes
    .map(block => block.text)
    .join('\n')*/
}

export default {
  deserialize,
  serializeNode,
  serialize,
  gather,
  getNode,
}
