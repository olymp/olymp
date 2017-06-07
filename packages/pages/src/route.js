import React from 'react';
import { IFrame } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';

export const EditablePageRoute = props => {
  const { Wrapped, flatNavigation, query, pathname } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, slug, binding, pageId, aliasId, bindingId } = match || {};
  const deviceWidth = query[`@deviceWidth`];
  if (!match) {
    return (
      <EditablePage {...props} deviceWidth={deviceWidth} component={EditablePage} render={match => (
        <IFrame disabled={!deviceWidth}>
          <Wrapped {...props}>
            <Error404 />
          </Wrapped>
        </IFrame>
      )} />
    );
  } return (
    <EditablePage {...props} deviceWidth={deviceWidth} component={EditablePage} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} render={children => (
      <IFrame disabled={!deviceWidth}>
        <Wrapped {...props} match={match}>
          {children}
        </Wrapped>
      </IFrame>
    )} />
  );
};


export const PageRoute = props => {
  const { Wrapped, flatNavigation, query, pathname } = props;
  const match = flatNavigation.find(({ slug }) => pathname === slug);
  const deviceWidth = query[`@deviceWidth`];
  const { id, slug, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {match
        ? <Page.WithData {...props} component={PageGql} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} />
        : <Error404 />
      }
    </Wrapped>
  );
};
