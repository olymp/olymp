export { default as createSuggestPlugin } from './suggest';
export { default as Plain2 } from './serializer';
import all from 'mdast-util-to-hast/lib/all';
import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from './compiler';
import plugin from './container';
import { Link } from 'olymp';

const defaultComponents = {
  text: ({ value, ...props }) => <span {...props}>{value}</span>,
  code: ({ value, ...props }) => <pre {...props}>{value}</pre>,
  blockquote: (props) => <blockquote {...props}/>,
  emphasis: (props) => <em {...props}/>,
  strong: (props) => <strong {...props}/>,
  paragraph: (props) => <p style={{ marginBottom: 10 }} {...props}/>,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  heading1: props => <h1 style={{ marginBottom: 5, marginTop: 5 }} {...props} />,
  heading2: props => <h2 {...props} />,
  heading3: props => <h3 {...props} />,
  heading4: props => <h4 {...props} />,
  heading5: props => <h5 {...props} />,
  heading6: props => <h6 {...props} />,
  link: props => {
    if (props.href.indexOf('/') === 0) {
      return <Link to={props.href} />
    } return <a target="_blank" rel="nofollow noreferrer" {...props} />
  },
};

export default (components) => {
  const remarkReactComponents = { ...defaultComponents, ...components };
  return ({ value, ...props }) => {
    const instance = remark().use(plugin, { components: remarkReactComponents, props }).use(reactRenderer, {
      remarkReactComponents,
    });
    return instance.processSync(value).contents;
  };
};
