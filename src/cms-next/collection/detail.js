import React, { Component } from 'react';
import { Link, withRouter } from 'olymp';
import withLoader from './with-loader';
import withModal from './with-modal';

export const CollectionDetailView = withLoader(({ item, children }) => (
  <form>
    {children}
  </form>
), 'item');

export default withModal(CollectionDetailView);
