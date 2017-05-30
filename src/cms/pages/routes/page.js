import React, { Component } from 'react';
import { DataRoute } from '../with-data';
import { PageGql } from '../page';
import Error404 from '../404';

export default props => {
  const { Wrapped, flatNavigation, query, pathname } = props;
  const match = flatNavigation.find(({ slug }) => pathname === slug);
  const deviceWidth = query[`@deviceWidth`];
  const { id, slug, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {match
        ? <DataRoute {...props} component={PageGql} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} />
        : <Error404 />
      }
    </Wrapped>
  );
};
