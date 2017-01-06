import React from 'react';
import { Gateway, GatewayDest } from 'react-gateway';
import { Anchor as AnchorCreator, Menu, Icon, Dropdown, Button } from 'antd';
import { graphql, Link, gql, withAuth, withItem, Helmet } from 'olymp';
import { SlateMate } from 'olymp/slate';
import sortBy from 'lodash/sortBy';
const Anchor = AnchorCreator.Link;

const attributes = 'id, type, slug, order, name, parentId, blocks, children { id, type, slug, order, name, parentId, blocks }';
const CmsPage = (props) => {
  let { auth, item, patch, save, blocks, location, readOnly, getReadOnly } = props;
  if (!item) return null;

  readOnly = readOnly !== undefined ? readOnly : getReadOnly ? getReadOnly(props) : (!auth.user || !!item.computed);
  if (location && location.query && Object.keys(location.query).find(x => location.query[x] !== undefined)) readOnly = true;

  const chapters = item.type === 'CHAPTERS' && item.children && sortBy(item.children, 'order');
  return (
    <div>
      <Helmet title={item.name} />
      <div className="anchor-menu">
        {chapters && (
          <AnchorCreator offsetTop={100}>
            {chapters.map(child => (
              <Anchor key={child.id} href={`#${child.slug.substr(1)}`} title={child.name} />
            ))}
          </AnchorCreator>
        )}
      </div>
      <SlateMate className="frontend-editor" showUndo readOnly={readOnly} value={item.blocks || null} onChange={blocks => patch({ blocks })} />
      {chapters && chapters.map(child => (
        <div key={child.id} id={child.slug.substr(1)}>
          <SlateMate className="frontend-editor" showUndo readOnly value={child.blocks || null} />
        </div>
      ))}

      {!readOnly ? (
        <Gateway into="action">
          <Dropdown
            overlay={(
              <Menu>
                <Menu.Item key="page:1">
                  <a href="javascript:;" onClick={save}>
                    Speichern
                  </a>
                </Menu.Item>
                <Menu.Item key="page:undo">
                  <GatewayDest
                    name="button_undo"
                    component={({ children }) => (children || <span className="ant-dropdown-menu-item-disabled">Rückgängig</span>)}
                  />
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="page:visitor" disabled>{false ? <Icon type="check" /> : null}Besucher-Modus</Menu.Item>
                <Menu.Item key="page:settings">
                  <Link to={{ ...location, query: { '@page': item.id } }}>
                    Einstellungen
                  </Link>
                </Menu.Item>
              </Menu>
            )}
            overlayClassName="ant-dropdown-left"
            placement="bottomLeft"
          >
            <Button shape="circle" size="large">
              <Icon type="file" />
            </Button>
          </Dropdown>
        </Gateway>
      ) : null}
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
