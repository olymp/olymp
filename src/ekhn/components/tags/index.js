import React, { Component } from 'react';
import { cn } from 'olymp';
import { Tag } from 'antd';

export default class Tags extends Component {
  render() {
    const { tags, className } = this.props;

    return tags && tags.length ? (
      <div className={cn('tags', className)}>
        {(tags || []).map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>
    ) : <div />;
  }
}
