import lex from 'pug-lexer';
import parse from 'pug-parser';
import { registry } from 'olymp-slate';

const map = {
  col: 'column',
  cols: 'columns',
  p: 'paragraph',
  a: 'link',
  h1: 'heading-one',
  h2: 'heading-two',
  h3: 'heading-three',
  h4: 'heading-four',
  h5: 'heading-five',
  h6: 'heading-six',
  link: node => {
    node.kind = 'inline';
    return node;
  },
  gql: node => {
    const text = node.nodes
      .filter(x => x.leaves[0].text !== '\n')
      .map(x => x.leaves[0].text)
      .join('\n');
    node.type = 'graphiql';
    node.isVoid = true;
    node.data.query = text;
    console.log(text);
    return node;
  },
  code: node => {
    node.nodes = node.nodes.filter(x => x.leaves[0].text !== '\n').map(x => ({
      type: 'code-line',
      kind: 'block',
      nodes: [x],
    }));
    return node;
  },
  table: node => {
    if (node.data && node.data.columns) {
      node.data.columns = node.data.columns.split('|');
    }
    node.nodes = node.nodes
      .filter(x => x.leaves[0].text !== '\n' && x.leaves[0].text !== '')
      .map(x => ({
        type: 'table-row',
        kind: 'block',
        nodes: x.leaves[0].text.split('|').map(text => ({
          type: 'table-data',
          kind: 'block',
          nodes: [
            {
              kind: 'text',
              leaves: [
                {
                  kind: 'leaf',
                  text,
                },
              ],
            },
          ],
        })),
      }));
    return node;
  },
};

const convert = src => {
  const v = parse(lex(src), { src });
  const convertNode = ({ type, name, attrs = [], block, val }) => {
    if (type === 'Tag') {
      name = map[name] && typeof map[name] === 'string' ? map[name] : name;
      const reg = registry.blocks[name] || {};
      const node = {
        isVoid: reg.isVoid,
        type: name,
        kind: 'block',
        data: attrs.reduce((r, i) => {
          let val = i.val;
          if (
            typeof val === 'string' &&
            val.charAt(0) === '"' &&
            val.charAt(val.length - 1) === '"'
          ) {
            val = val.substr(1, val.length - 2);
          } else if (
            typeof val === 'string' &&
            val.charAt(0) === "'" &&
            val.charAt(val.length - 1) === "'"
          ) {
            val = val.substr(1, val.length - 2);
          }
          return { ...r, [i.name]: val };
        }, {}),
        nodes:
          block && block.nodes && block.nodes.map(convertNode).filter(x => x),
      };
      return (
        (map[name] && typeof map[name] === 'function' && map[name](node)) ||
        node
      );
    } else if (type === 'Text') {
      return {
        kind: 'text',
        leaves: [{ kind: 'leaf', text: val }],
      };
    }
  };
  return { nodes: v.nodes.map(convertNode).filter(x => x) };
};

export default convert;
