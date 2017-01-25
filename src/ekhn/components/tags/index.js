import React, { Component } from 'react';
import { Tag } from 'antd';

export default class Tags extends Component {
  render() {
    const { tags } = this.props;

    return tags && tags.length ? (
      <div className="tags">
        {(tags || []).map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>
    ) : <div />;
  }
}
