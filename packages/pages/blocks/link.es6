import React from 'react';
import { FaExternalLink, FaLink, FaUnlink } from 'olymp-icons';
import PrefetchLink from '../prefetch-link';

const LinkContainer = ({ node, attributes, children, className, editor }) => {
  const href = node.data.get('href');
  if (!editor.props.readOnly) {
    return (
      <a {...attributes} href="javascript:;" className={className}>
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
    <a {...attributes} href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const setLink = (onChange, state, node) => {
  const href = window.prompt('Link', node.data.get('href') || '');
  if (href) {
    onChange(
      state.change().setNodeByKey(node.key, {
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
        <LinkContainer node={node} attributes={{}} editor={{ props: { readOnly: true } }}>
          <FaExternalLink />
        </LinkContainer>
      ),
      tooltip: 'Öffnen',
    },
    {
      type: 'small',
      component: ({ onChange, state, node }) => (
        <FaLink onClick={() => setLink(onChange, state, node)} />
      ),
      tooltip: 'Neu verlinken',
    },
    {
      type: 'small',
      component: ({ onChange, state }) => (
        <FaUnlink onClick={() => onChange(state.change().unwrapInline('link'))} />
      ),
      tooltip: 'Link entfernen',
    },
  ],
};
