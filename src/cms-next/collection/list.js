import React, { Component } from 'react';
import { Link, withRouter } from 'olymp';
import withLoader from './with-loader';
import withModal from './with-modal';

export const CollectionListView = withLoader(({ items, pathname, typeName }) => (
  <ul>
    {(items || []).map(({ id, name }) => (
      <li key={id}>
        <Link to={{ pathname, query: { [`@${typeName.toLowerCase()}`]: id } }}>{name}</Link>
      </li>
    ))}
  </ul>
), 'items');

export default withModal(CollectionListView);
