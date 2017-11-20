import React from 'react';

export default {
  center: ({ children, attributes, className }) => (
    <center {...attributes} className={className}>
      {children}
    </center>
  ),
  paragraph: ({ children, attributes, className }) => (
    <div {...attributes} className={className}>
      {children}
    </div>
  ),
  link: ({ node, attributes, children, className }) => (
    <a
      {...attributes}
      href={node.data.get('href')}
      className={className}
      target={node.data.get('target')}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  'block-quote': ({ children, attributes, className }) => (
    <blockquote {...attributes} className={className}>
      {children}
    </blockquote>
  ),
  'bulleted-list': ({ children, attributes, className }) => (
    <ul {...attributes} className={className}>
      {children}
    </ul>
  ),
  'numbered-list': ({ children, attributes, className }) => (
    <ol {...attributes} className={className}>
      {children}
    </ol>
  ),
  'heading-one': ({ children, attributes, className, node }) => (
    <h1
      {...attributes}
      className={className}
      data-heading="1"
      data-id={node.data.get('id')}
    >
      {children}
    </h1>
  ),
  'heading-two': ({ children, attributes, className, node }) => (
    <h2
      {...attributes}
      className={className}
      data-heading="2"
      data-id={node.data.get('id')}
    >
      {children}
    </h2>
  ),
  'heading-three': ({ children, attributes, className, node }) => (
    <h3
      {...attributes}
      className={className}
      data-heading="3"
      data-id={node.data.get('id')}
    >
      {children}
    </h3>
  ),
  'heading-four': ({ children, attributes, className, node }) => (
    <h4
      {...attributes}
      className={className}
      data-heading="4"
      data-id={node.data.get('id')}
    >
      {children}
    </h4>
  ),
  'heading-five': ({ children, attributes, className, node }) => (
    <h5
      {...attributes}
      className={className}
      data-heading="5"
      data-id={node.data.get('id')}
    >
      {children}
    </h5>
  ),
  'heading-six': ({ children, attributes, className, node }) => (
    <h6
      {...attributes}
      className={className}
      data-heading="6"
      data-id={node.data.get('id')}
    >
      {children}
    </h6>
  ),
  'list-item': ({ children, attributes, className }) => (
    <li {...attributes} className={className}>
      {children}
    </li>
  ),
};
