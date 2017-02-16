import React, { Component } from 'react';
import { Select } from 'antd';
import { graphql, gql } from '../core/extern';

@graphql(gql`
  query tags {
    tags {
      id
    }
  }
`)
export default class TagsEditor extends Component {
  render() {
    const tags = this.props.data.tags || [];
    return (
      <Select {...this.props} tags>
        {tags.map(tag => <Select.Option key={tag.id}>{tag.id}</Select.Option>)}
      </Select>
    );
  }
}
