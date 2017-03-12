import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import visit from 'unist-util-visit';
import all from 'mdast-util-to-hast/lib/all';

function plugin() {
  var Parser = this.Parser;
  var tokenizers = Parser.prototype.inlineTokenizers;
  var methods = Parser.prototype.inlineMethods;
  tokenizers.customComponents = tokenizeMention;
  methods.splice(methods.indexOf('text'), 0, 'customComponents');
}
const tryParseJson = (str) => {
  try {
    console.log(str.indexOf('[') !== 0 ? `[${str}]` : str, JSON.parse(str.indexOf('[') !== 0 ? `[${str}]` : str));
    return JSON.parse(str.indexOf('[') !== 0 ? `[${str}]` : str);
  } catch(ex) {
    return undefined;
  }
}
function tokenizeMention(eat, value, silent) {
  var match = /^@(\w+)(\(([^)]+)\))?/.exec(value);
  if (match) {
    if (silent) return true;
    return eat(match[0])({
      type: 'component',
      name: match[1],
      args: match[3] ? tryParseJson(match[3]) : undefined,
      'children': [{
        'type': 'text',
        'value': match[0]
      }],
    });
  }
};
tokenizeMention.notInLink = true;
tokenizeMention.locator = locateMention;
function locateMention(value, fromIndex) {
  return value.indexOf('@', fromIndex);
}

export default (components) => remark().use(plugin).use(reactRenderer, {
  sanitize: false,
  remarkReactComponents: components,
  toHast: {
    handlers: {
      component: (h, node) => {
        var props = { name: node.name, args: node.args };
        return h(node, components[node.name] ? node.name : 'Default', props, all(h, node));
      }
    }
  }
});
