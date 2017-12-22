import React, { Component } from 'react';
import { Select } from 'antd';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
      <Select {...this.props} mode="tags">
        {tags.map(tag => <Select.Option key={tag.id}>{tag.id}</Select.Option>)}
      </Select>
    );
  }
}
