import React, { Component, PropTypes } from 'react';
import repeat from 'lodash/repeat';

const MARKER = '+';
const LINE = '\n';
const EXPRESSION = /^((\+{1,}) ([^\n\+]+)?[ \t]*)(?:\n([\s\S]*?)(\n\2[ \t]*(?=\n|$)))?/;
// const EXPRESSION = /^((\+{1,}) ([^\n\+]+)?[ \t]*)(?:\n([\s\S]*?)(\n\2[ \t]*(?=\n|$)))?/;
// const EXPRESSION = /^\:{3,}/;

function attacher({ components, props }) {
  const getArgsFromStr = (str, allowed) => {
    const match = str
      ? str.match(/(?:[^\s"'\]\[]+|"[^"]*"|'[^']*'|\[[^']*\])+/g)
      : null;
    if (match) {
      return match.reduce((state, current) => {
        let [x, y] = current.split('=');
        if (y && y.indexOf('{') === 0) { y = props[y.substr(1).slice(0, -1)]; }
        if (y && y.indexOf('"') === 0) { y = y.substr(1).slice(0, -1); }
        if (allowed && !allowed[x]) { return state; } else if (!allowed) { state[x] = y; } else if (allowed[x] === PropTypes.number) { state[x] = y !== null && y !== undefined ? parseInt(y) : null; } else if (allowed[x] === PropTypes.bool) { state[x] = y === 'true' ? true : y === 'false' ? false : null; } else { state[x] = y; }
        return state;
      }, {});
    }
    return {};
  };
  function parse(eat, value, silent) {
    // let match = value.match(EXPRESSION);
    // console.log(match);
    const match = value.match(EXPRESSION);
    if (match) {
      let full = match[0],
        start = match[1],
        arg = match[3],
        content = match[4],
        end = match[5];
      if (!arg) { return; }
      if (!end) { full = full.split('\n')[0]; }
      const tag = arg.trim().split(' ')[0];
      if (!components[tag]) { return; }
      if (silent) { return true; }
      const props = getArgsFromStr(
        arg.trim().substr(tag.length + 1),
        components[tag].propTypes
      );
      const node = eat(full).reset({
        props,
        type: 'react',
        tag,
        // children: this.tokenizeBlock(content, now)
      });
      eat(start + (content ? LINE : ''));
      if (!content || !end) { return node; }
      const now = eat.now();
      node.children = this.tokenizeBlock(content, now);
      eat(content)(node.children);
      eat(end);
      return node;
    }
  }
  function compile(token) {
    const value = this.block(token);
    const flag = this.encode(token.size || '', token);
    const fence = repeat(MARKER, 3);
    return fence + flag + (value ? LINE + value : '') + LINE + fence;
  }
  const proto = this.Parser.prototype;
  // proto.expressions.rules.foo = FOO_EXPRESSION;
  proto.blockTokenizers.react = parse;
  proto.blockMethods.splice(
    proto.blockMethods.indexOf('fences') + 1,
    0,
    'react'
  );
  this.Compiler.prototype.react = compile;
}

export default attacher;
