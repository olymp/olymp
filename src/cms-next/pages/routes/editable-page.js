import React, { Component } from 'react';
import { DataRoute } from '../with-data';
import { IFrame } from '../components';
import { EditablePage } from '../views';
import Error404 from '../404';

export default props => {
  const { Wrapped, flatNavigation, query, pathname } = props;
  const match = flatNavigation.find(({ slug }) => pathname === slug);
  const { id, slug, binding, pageId, aliasId, bindingId } = match || {};
  const deviceWidth = query[`@deviceWidth`];
  if (!match) {
    return (
      <DataRoute {...props} deviceWidth={deviceWidth} component={EditablePage} render={match => (
        <IFrame disabled={!deviceWidth}>
          <Wrapped {...props}>
            <Error404 />
          </Wrapped>
        </IFrame>
      )} />
    );
  } return (
    <DataRoute {...props} deviceWidth={deviceWidth} component={EditablePage} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} render={children => (
      <IFrame disabled={!deviceWidth}>
        <Wrapped {...props} match={match}>
          {children}
        </Wrapped>
      </IFrame>
    )} />
  );
};
