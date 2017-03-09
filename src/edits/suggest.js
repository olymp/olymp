import React, { Component } from 'react';
import { Select } from 'antd';
import { graphql, gql } from '../core/extern';

@graphql(gql`
  query suggestions($collection: String, $field: String) {
    suggestions(collection: $collection, field: $field) {
      id
    }
  }
`, {
  options: ({ collection, field }) => ({
    variables: {
      collection,
      field
    }
  })
})
export default class SuggestionEditor extends Component {
  render() {
    const suggestions = this.props.data.suggestions || [];
    return (
      <Select {...this.props} combobox>
        {suggestions.map(tag => <Select.Option key={tag.id}>{tag.id}</Select.Option>)}
      </Select>
    );
  }
}
