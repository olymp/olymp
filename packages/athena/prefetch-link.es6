import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { createPrefetchPage } from './redux';

export const withPrefetch = connect(null, dispatch => ({
  prefetch: createPrefetchPage(dispatch),
}));

const PrefetchLink = Link.withLocation(
  withPrefetch(({ prefetch, ...props }) => (
    <Link {...props} onMouseEnter={() => prefetch(props.location)} />
  )),
);

PrefetchLink.displayName = 'Prefetcher';
export default PrefetchLink;
