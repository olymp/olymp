import React, { Component } from 'react';
import { Gateway } from 'react-gateway';
import { Anchor as AnchorCreator, Spin } from 'antd';
import { withAuth, withItem, Helmet } from 'olymp';
import { SlateMate } from 'olymp/slate';
import AnchorHelper from 'antd/lib/anchor/anchorHelper';
import { PageAction } from '../../components';

const Anchor = AnchorCreator.Link;
const fieldNames = 'id, slug, order, name, parentId, blocks, headings { id, slug, text, children { id, slug, text } }';

@withAuth
@withItem({ typeName: 'page', fieldNames })
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
    const { auth, item, patch, getReadOnly } = this.props;

    if (!item) return <Spin size="large" />;

    // todo: einfacher
    // const readOnly = this.props.readOnly || (!auth || !auth.user);
    let readOnly = this.props.readOnly;
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

        <Gateway into="action">
          <PageAction id={item.id} />
        </Gateway>
      </div>
    );
  }
}
