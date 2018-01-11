import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';

const createPrefetchPage = dispatch => payload => dispatch({ type: 'CMS_PREFETCH', payload });

export const withPrefetch = connect(null, dispatch => ({
  prefetch: createPrefetchPage(dispatch),
}));

const PrefetchLink = Link.withLocation(
  withPrefetch(({ prefetch, ...props }) => (
    <Link {...props} onPreload={prefetch} />
  )),
);

PrefetchLink.displayName = 'Prefetcher';
export default PrefetchLink;
