import React from 'react';
import { Gateway } from 'react-gateway';
import { graphql, Link, gql, withAuth, withItem, Helmet } from 'olymp';
import { SlateMate } from 'olymp/slate';

const attributes = 'id, slug, order, name, parentId, blocks, templateName';
const CmsPage = (props) => {
  let { auth, item, patch, save, blocks, location, readOnly, getReadOnly } = props;
  if (!item) return null;

  readOnly = readOnly !== undefined ? readOnly : getReadOnly ? getReadOnly(props) : (!auth.user || !!item.computed);

  return (
    <div>
      <Helmet title={item.name} />
      <SlateMate className="frontend-editor" showUndo readOnly={readOnly} value={item.blocks || null} onChange={blocks => patch({ blocks })} blockTypes={blocks} />
      {!readOnly ? <Gateway into="button1">
        <a href="javascript:;" onClick={save}>
          Seite speichern
        </a>
      </Gateway> : null}
      {!readOnly ? <Gateway into="button2">
        <Link to={{ ...location, query: { '@page': item.id } }}>
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
  options: ({ id }) => ({ variables: { id } }),
})(withItem({ name: 'page', attributes,
})(withAuth(CmsPage)));
