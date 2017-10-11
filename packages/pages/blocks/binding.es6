import React from 'react';
import { FaLink } from 'olymp-icons';
import { get } from 'lodash';

const Binding = ({ node, attributes, children, className, editor }) => {
  const field = node.data.get('field');
  const text = get(editor.props.binding, field) || '<Kein Text>';
  return (
    <span {...attributes} className={className}>
      {children}
      {text}
    </span>
  );
};

const setLink = (onChange, state, node) => {
  const field = window.prompt('Feld', node.data.get('field') || '');
  if (field) {
    onChange(
      state.change().setNodeByKey(node.key, {
        data: node.data.set('field', field),
      }),
    );
  }
};

export default {
  type: 'textBinding',
  isVoid: true,
  kind: 'inline',
  label: 'Angebundener Text',
  category: 'Daten',
  component: Binding,
  actions: [
    {
      type: 'small',
      component: ({ onChange, state, node }) => (
        <FaLink onClick={() => setLink(onChange, state, node)} />
      ),
      tooltip: 'Neu binden',
    },
  ],
};
