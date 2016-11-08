import React from 'react';
import { Link } from 'react-router';
import { Slate } from '@olymp/adonis/edits';
import { Gateway } from 'react-gateway';
import { graphql } from 'react-apollo';
import { withAuth, withItem } from '../../decorators';
import gql from 'graphql-tag';

const attributes = 'id, slug, order, name, parentId, blocks, templateName';
const Page = ({ auth, item, patch, save, blocks, location }) => {
  if (!item) return null;

  const readOnly = !auth.user || !!item.computed;

  return (
    <div>
      <Slate className="frontend-editor" readOnly={readOnly} value={item.blocks || null} onChange={blocks => patch({ blocks })} blockTypes={blocks} />
      {auth.user && !item.computed ? <Gateway into="button1">
        <a href="javascript:;" onClick={save}>
          Seite speichern
        </a>
      </Gateway> : null}
      {auth.user && !item.computed ? <Gateway into="button2">
        <Link to={{ ...location, query: { page: item.id } }}>
          Seite bearbeiten
        </Link>
      </Gateway> : null}
    </div>
  );
};

export default graphql(gql`
  query page($id: String!) {
    page(id: $id) {
      ${attributes}
    }
  }
`, {
  options: ({ id }) => {
    return {
      variables: {
        id,
      },
    };
  },
})(withItem({
  name: 'page',
  attributes,
})(withAuth(Page)));
