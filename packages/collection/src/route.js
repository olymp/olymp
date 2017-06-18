import React from 'react';
import { IFrame } from 'olymp-fela';
import { Collection } from './views';

const cache = {};
export default (props) => {
  const {
    Wrapped,
    collection,
    flatNavigation,
    query,
    pathname,
    modules,
    router,
  } = props;
  const { key, DataList } = collection;
  const deviceWidth = query['@deviceWidth'];
  const match =
    collection &&
    flatNavigation.find(({ binding }) => binding && binding.indexOf(key) === 0);

  if (!match) {
    return <DataList id={query[`@${key}`]} />;
  }
  const { id, pageId } = match || {};
  const View = (cache[key] = cache[key] || Collection(key, collection));

  return (
    <View
      {...props}
      deviceWidth={deviceWidth}
      key={query[`@${key}`]}
      id={query[`@${key}`]}
      handleListClick={collection =>
        router.push({
          pathname,
          query: { ...query, [`@${key}`]: collection.id },
        })}
      onClose={() =>
        router.push({ pathname, query: { ...query, [`@${key}`]: undefined } })}
      pageId={pageId || id}
      render={children =>
        (<IFrame disabled={!deviceWidth}>
          <Wrapped {...props} match={match}>
            {children}
          </Wrapped>
        </IFrame>)}
    />
  );
};
