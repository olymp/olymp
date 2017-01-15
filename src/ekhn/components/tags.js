import React, { Component } from 'react';
import './tags.less';

export default class Tags extends Component {
  render() {
    const { tags } = this.props;

    return tags && tags.length ? (
      <div className="tags">
        {(tags || []).map(tag => <div key={tag}>{tag}</div>)}
      </div>
    ) : <div />;
  }
}
