import React, { Component } from 'react';
import { Gateway, GatewayDest } from 'react-gateway';
import { Anchor as AnchorCreator, Menu, Icon, Dropdown, Button, Spin } from 'antd';
import { graphql, Link, gql, withAuth, withItem, Helmet } from 'olymp';
import { SlateMate } from 'olymp/slate';
import sortBy from 'lodash/sortBy';
import AnchorHelper from 'antd/lib/anchor/anchorHelper';
const Anchor = AnchorCreator.Link;

const getChildSlug = slug => slug.indexOf('#') === -1 ? slug.substr(1) : slug.split('#')[1];
const fieldNames = 'id, slug, order, name, parentId, blocks, headings { id, slug, text, children { id, slug, text } }';

@graphql(gql`
  query page($id: String!) {
    page(id: $id) {
      ${fieldNames}
    }
  }
`, {
  options: ({ id }) => ({ variables: { id } }),
})
@withItem({ typeName: 'page', fieldNames })
@withAuth
export default class CmsPage extends Component {
  constructor() {
    super();
    this.anchorHelper = new AnchorHelper();
  }
  componentDidMount() {
    if (location && location.hash) {
      this.anchorHelper.scrollTo(location.hash);
    }
  }
  createAnchors = nodes => (nodes || []).map((node, i) =>
    <Anchor key={i} href={`#${node.slug}`} title={node.text}>
      {this.createAnchors(node.children)}
    </Anchor>
    )
  render() {
    let { auth, item, patch, save, blocks, location, readOnly, getReadOnly, showAnchors } = this.props;
    if (!item) return <Spin size="large" />;

    readOnly = readOnly !== undefined ? readOnly : getReadOnly ? getReadOnly(this.props) : (!auth.user || !!item.computed);
    if (location && location.query && Object.keys(location.query).find(x => location.query[x] !== undefined)) readOnly = true;

    return (
      <div>
        <Helmet title={item.name} />
        {item.headings && item.headings.length > 1 && (
          <div className="anchor-menu container">
            <AnchorCreator offsetTop={100}>
              {this.createAnchors(item.headings)}
            </AnchorCreator>
          </div>
        )}
        <SlateMate className="frontend-editor" showUndo readOnly={readOnly} value={item.blocks || null} onChangeHeadings={headings => patch({ headings })} onChange={blocks => patch({ blocks })} />

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
                  <Menu.Item key="page:delete" disabled>
                    Seite löschen
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
  }
}
