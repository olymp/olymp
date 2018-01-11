import React from 'react';
import { FaExternalLink, FaLink, FaUnlink } from 'olymp-icons';
import PrefetchLink from '../prefetch-link';

const LinkContainer = ({ node, attributes, children, className, editor }) => {
  const href = node.data.get('href');
  if (!editor.props.readOnly) {
    return (
      <a {...attributes} className={className}>
        {children}
      </a>
    );
  }
  if (href && href.indexOf('/') === 0) {
    return (
      <PrefetchLink {...attributes} to={href} className={className}>
        {children}
      </PrefetchLink>
    );
  }
  return (
    <a
      {...attributes}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const setLink = (onChange, value, node) => {
  const href = window.prompt('Link', node.data.get('href') || '');
  if (href) {
    onChange(
      value.change().setNodeByKey(node.key, {
        data: node.data.set('href', href),
      }),
    );
  }
};

export default {
  type: 'link',
  isVoid: false,
  kind: 'inline',
  component: LinkContainer,
  actions: [
    {
      type: 'small',
      component: ({ node }) => (
        <LinkContainer
          node={node}
          attributes={{}}
          editor={{ props: { readOnly: true } }}
        >
          <FaExternalLink />
        </LinkContainer>
      ),
      tooltip: 'Öffnen',
    },
    {
      type: 'small',
      component: ({ onChange, value, node }) => (
        <FaLink onClick={() => setLink(onChange, value, node)} />
      ),
      tooltip: 'Neu verlinken',
    },
    {
      type: 'small',
      component: ({ onChange, value }) => (
        <FaUnlink
          onClick={() => onChange(value.change().unwrapInline('link'))}
        />
      ),
      tooltip: 'Link entfernen',
    },
  ],
};
