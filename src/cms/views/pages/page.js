import React, { Component, PropTypes } from "react";
import { Gateway } from "react-gateway";
import { Anchor, Spin, Menu, Icon, Dropdown, Button } from "antd";
import {
  withRouter,
  withAuth,
  withItemNew,
  Helmet,
  Link as MenuLink
} from "olymp";
import { SlateMate } from "olymp/slate";
// import AnchorHelper from 'antd/lib/anchor/anchorHelper';

const { Link } = Anchor;

@withAuth
@withItemNew({
  typeName: "Page",
  fieldNames:
    "id, slug, order, name, parentId, blocks, headings { id, slug, text, children { id, slug, text } }"
})
export default class Page extends Component {
  static childContextTypes = {
    page: PropTypes.string
  };

  getChildContext() {
    const { id } = this.props;

    return {
      page: id
    };
  }

  render() {
    const {
      id,
      auth,
      item,
      patch,
      getReadOnly,
      save,
      location,
      showAnchors
    } = this.props;

    if (!item) return <Spin size="large" />;

    // todo: einfacher
    // const readOnly = this.props.readOnly || (!auth || !auth.user);
    let readOnly = this.props.readOnly;
    readOnly =
      readOnly !== undefined
        ? readOnly
        : getReadOnly
        ? getReadOnly(this.props)
        : !auth.user || !!item.computed;
    if (
      location &&
      location.query &&
      Object.keys(location.query).find(x => location.query[x] !== undefined)
    )
      readOnly = true;

    return (
      <div>
        <Helmet title={item.name} />
        {showAnchors && (
          <div className="anchor-menu container">
            <PageAnchorsWrapper offsetTop={100} />
          </div>
        )}
        <SlateMate
          className="frontend-editor"
          showUndo
          readOnly={readOnly}
          value={item.blocks || null}
          onChangeHeadings={headings => patch({ headings })}
          onChange={blocks => patch({ blocks })}
        />

        <Gateway into="action">
          {!readOnly ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="page:1">
                    <a href="javascript:;" onClick={save}>
                      Speichern
                    </a>
                  </Menu.Item>
                  <Menu.Item key="page:settings">
                    <MenuLink to={{ ...location, query: { "@page": item.id } }}>
                      Einstellungen
                    </MenuLink>
                  </Menu.Item>
                  {/* <Menu.Divider />
                  <Menu.Item key="page:visitor" disabled>{false ? <Icon type="check" /> : null}Besucher-Modus</Menu.Item>
                  <Menu.Item key="page:delete">
                    Seite löschen
                  </Menu.Item> */}
                </Menu>
              }
              overlayClassName="ant-dropdown-left"
              placement="bottomLeft"
            >
              <Button shape="circle" size="large">
                <Icon type="file" />
              </Button>
            </Dropdown>
          ) : null}
        </Gateway>
      </div>
    );
  }
}

@withRouter
@withItemNew({
  typeName: "Page",
  fieldNames: "headings { id, slug, text, children { id, slug, text } }"
})
class PageAnchors extends Component {
  constructor() {
    super();
    // this.anchorHelper = new AnchorHelper();
  }

  componentDidMount() {
    const { location } = this.props;

    if (location && location.hash) {
      // this.anchorHelper.scrollTo(location.hash);
    }
  }

  createAnchors = nodes =>
    (nodes || []).map((node, i) => (
      <Link key={i} href={`#${node.slug}`} title={node.text}>
        {this.createAnchors(node.children)}
      </Link>
    ));

  render() {
    const { item, children, ...rest } = this.props;

    if (!item) return <Spin size="large" />;

    const headings = (item.headings || []).filter(h => h.text);

    return headings.length > 1 ? (
      <Anchor {...rest}>
        {children}
        {this.createAnchors(headings)}
      </Anchor>
    ) : (
      <div />
    );
  }
}

export class PageAnchorsWrapper extends Component {
  static contextTypes = {
    page: PropTypes.string
  };

  render() {
    const { page } = this.context;

    return <PageAnchors id={page} {...this.props} />;
  }
}
