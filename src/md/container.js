import repeat from 'lodash/repeat';

const MARKER = ':';
const LINE = '\n';
const EXPRESSION = /^((\:{3,}) ([^\n\:]+)?[ \t]*)(?:\n([\s\S]*?)(\n\2[ \t]*(?=\n|$)))?/;
// const EXPRESSION = /^\:{3,}/;
const getArgsFromStr = (str) => {
  const match = str ? str.match(/(?:[^\s"'\]\[]+|"[^"]*"|'[^']*'|\[[^']*\])+/g) : null;
  if (match) {
    return match.reduce((state, current) => {
      const [x, y] = current.split('=');
      state[x] = y;
      return state;
    }, {});
  } return {};
}
function parse(eat, value, silent) {
  // let match = value.match(EXPRESSION);
  // console.log(match);
  const match = value.match(EXPRESSION);
  if (match) {
    let full = match[0], start = match[1], arg = match[3], content = match[4], end = match[5];
    if (!arg) return;
    if (silent) return true;
    if (!end) full = full.split('\n')[0];
    const tag = arg.trim().split(' ')[0];
    let rest = getArgsFromStr(arg.trim().substr(tag.length+1));
    const node = eat(full).reset({
      ...rest,
      type: 'react',
      tag,
      // children: this.tokenizeBlock(content, now)
    });
    eat(start + (content ? LINE : ''));
    if (!content || !end) return node;
    const now = eat.now();
    node.children = this.tokenizeBlock(content, now);
    eat(content)(node.children);
    eat(end);
    return node;
  }
}

function compile(token) {
  var value = this.block(token);
  var flag = this.encode(token.size || '', token);
  var fence = repeat(MARKER, 3);
  return fence + flag + (value ? LINE + value : '') + LINE + fence;
}

function attacher(mdast) {
  var proto = this.Parser.prototype;
  // proto.expressions.rules.foo = FOO_EXPRESSION;
  proto.blockTokenizers.react = parse;
  proto.blockMethods.splice(proto.blockMethods.indexOf('fences') + 1, 0, 'react');
  this.Compiler.prototype.react = compile;
}

export default attacher;
