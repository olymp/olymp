import { Raw } from 'slate'


function deserialize(string, options = {}) {
  const mapper = (line) => {
    if (line.indexOf('[') === 0) {
      return {
        kind: 'block',
        type: 'line',
        nodes: [
          {
            kind: 'text',
            ranges: [
              {
                text: line,
                marks: [],
              }
            ]
          }
        ]
      };
    } else if (line.indexOf('[\\') === 0) {
      
    } return {
      kind: 'block',
      type: 'line',
      nodes: [
        {
          kind: 'text',
          ranges: [
            {
              text: line,
              marks: [],
            }
          ]
        }
      ]
    };
  };

  const raw = {
    kind: 'state',
    document: {
      kind: 'document',
      nodes: string.split('\n').map(mapper),
    }
  };

  return options.toRaw ? raw : Raw.deserialize(raw);
}

function serialize(state) {
  const mapper = (node) => {
    if (node.kind === 'text') return node.text;
    let text = `[${node.type}`;

    const data = JSON.parse(JSON.stringify(node.data));
    const attribs = Object.keys(data).map((key) => {
      return `${key}=${JSON.stringify(data[key])}`;
    }).join(' ');
    if (attribs) {
      text += ` ${attribs}`;
    }
    const inner = node.nodes && node.nodes.map(mapper).join('\n');
    if (inner.trim()) {
      text += `]\n${inner}\n[\\${node.type}]`;
    } else {
      text += ' \\]\n';
    }
    return text;
  };

  return state.document.nodes
    .map(mapper)
    .join('\n');
}

export default {
  deserialize,
  serialize
};
