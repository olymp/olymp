import React, { Component } from 'react';
import { PageAnchors } from 'olymp/cms';
import { BackTop } from 'antd';

export default class AnchorBlock extends Component {
  render() {
    return (
      <div>
        <BackTop />
        <PageAnchors className="anchors-block block" offsetTop={100}>
          <h3 style={{ margin: 0 }}>Seitenübersicht</h3>
        </PageAnchors>
      </div>
    );
  }
}
