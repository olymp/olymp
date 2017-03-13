import all from 'mdast-util-to-hast/lib/all';
import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from './compiler';
import plugin from './container';

const defaultComponents = {
  text: ({ value, ...props }) => <span {...props}>{value}</span>,
  code: ({ value, ...props }) => <pre {...props}>{value}</pre>,
  blockquote: (props) => <blockquote {...props}/>,
  emphasis: (props) => <em {...props}/>,
  strong: (props) => <strong {...props}/>,
  paragraph: (props) => <p {...props}/>,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  heading1: props => <h1 {...props} />,
  heading2: props => <h2 {...props} />,
  heading3: props => <h3 {...props} />,
  heading4: props => <h4 {...props} />,
  heading5: props => <h5 {...props} />,
  heading6: props => <h6 {...props} />,
};

export default (components) => {
  const allComponents = { ...defaultComponents, ...components };
  const instance = remark().use(plugin, { components: allComponents }).use(reactRenderer, {
    remarkReactComponents: allComponents,
  });
  return ({ value }) => instance.processSync(value).contents;
};
