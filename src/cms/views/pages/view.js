import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import { Modal } from '../../components';
import List from './list-sidebar';

@graphql(gql`
  query pageList($state: DOCUMENT_STATEQuery, $name: StringQuery) {
    items: pageList(query: {state: $state, name: $name}) {
      id
      slug
      name
      parentId
      state
    }
  }
`, {
  options: () => ({
    variables: {
      state: { eq: "PUBLISHED" },
      name: { null: false }
    }
  }),
})
export default class PagesView extends Component {
  render() {
    const { data } = this.props;
    const { items, refetch } = data;

    return (
      <Modal>
        <List items={items} refetch={refetch} />
      </Modal>
    );
  }
}
