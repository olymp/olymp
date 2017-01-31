import React, { Component } from 'react';
import { Select } from 'antd';
import { graphql, gql } from 'olymp';

@graphql(gql`
  query tags {
    tags {
      id
    }
  }
`)
export default class TagSelect extends Component {
  render() {
    const tags = this.props.data.tags || [];
    return (
      <Select {...this.props} tags>
        {tags.map(tag => <Select.Option key={tag.id}>{tag.id}</Select.Option>)}
      </Select>
    );
  }
}
