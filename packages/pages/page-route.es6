import React from 'react';
import PageTransition from 'olymp-fela/page-transition';
import { ContentLoader } from 'olymp-fela/loader';
import Error404 from './views/404';
import renderHelmet from 'olymp-utils/helmet';
import Reader from 'olymp-slate/reader';
import queryPage from './gql/query';
import { mapProps } from 'recompose';

const Page = props =>
  <ContentLoader isLoading={props.isLoading}>
    <Reader {...props} showUndo key={props.id + (props.bindingId || '')}>
      {props.children}
    </Reader>
  </ContentLoader>;
Page.defaultProps = {
  item: {},
  readOnly: true,
};
const WithData = queryPage(
  mapProps(({ item, data, ...rest }) => ({
    value: item && item.blocks,
    isLoading: data.loading,
    item,
    ...rest,
  }))(Page)
);

export default props => {
  const { Wrapped, flatNavigation, pathname, loading } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {renderHelmet(match || {}, pathname)}
      <ContentLoader height={600} isLoading={loading}>
        <PageTransition innerKey={id}>
          {match
            ? <WithData
                {...props}
                key={id}
                id={pageId || aliasId || id}
                bindingId={bindingId}
                binding={binding}
              />
            : <Error404 />}
        </PageTransition>
      </ContentLoader>
    </Wrapped>
  );
};
