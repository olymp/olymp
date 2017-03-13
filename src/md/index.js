import all from 'mdast-util-to-hast/lib/all';
import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from './compiler';
import plugin from './container';

const defaultComponents = {
  text: ({ value, ...props }) => <span {...props}>{value}</span>,
  heading1: props => <h1 {...props} />,
  heading2: props => <h2 {...props} />,
  heading3: props => <h3 {...props} />,
  heading4: props => <h4 {...props} />,
  heading5: props => <h5 {...props} />,
  heading6: props => <h6 {...props} />,
};

export default (components) => {
  const allComponents = { ...defaultComponents, ...components };
  return remark().use(plugin, { components: allComponents }).use(reactRenderer, {
    // sanitize: false,
    remarkReactComponents: allComponents,
    toHast: {
      handlers: {
        react: (h, node) => {
          const { children, position, ...props } = node;
          const copy = JSON.parse(JSON.stringify(node));
          return h(node, allComponents[node.tag] ? node.tag : 'default', props, all(h, copy));
        }
      }
    }
  });
};
