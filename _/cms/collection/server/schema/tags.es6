import { orderBy, groupBy, lowerFirst } from 'lodash';

export default {
  name: 'tag',
  queries: `
    tags: [Tag]
    suggestions(collection: String, field: String): [Tag]
  `,
  resolvers: {
    queries: {
      tags: (source, args, { db, app }) =>
        db
          .collection('item')
          .find({ _appId: app.id, state: { $ne: 'REMOVED' } }, { tags: 1 })
          .toArray()
          .then(array => {
            let tags = array.map(({ tags }) => tags).reduce((result, tags) => {
              if (tags) {
                tags.forEach(tag => {
                  if (tag && tag !== 'undefined' && tag !== 'null') {
                    if (!result[tag]) {
                      result[tag] = [];
                    }
                    result[tag].push(tag);
                  }
                });
              }
              return result;
            }, {});
            tags = Object.keys(tags).map(key => ({
              id: key,
              count: tags[key].length,
            }));
            return orderBy(tags, ['count', 'id'], ['desc', 'asc']);
          }),
      suggestions: (source, { collection, field = 'tags' }, { db, app }) =>
        db
          .collection('item')
          .find(
            collection ? { _type: lowerFirst(collection), _appId: app.id } : {},
            {
              [field]: 1,
            },
          )
          .toArray()
          .then(array => {
            const grouped = groupBy(array, field);
            const result = Object.keys(grouped).reduce((result, item) => {
              if (item === 'undefined' || !item || item === 'null') {
                return result;
              }
              result.push({ id: item, count: grouped[item].length });
              return result;
            }, []);
            return orderBy(result, ['count', field], ['desc', 'asc']);
          }),
    },
  },
  schema: `
    type Tag {
      id: String
      count: Int
    }
  `,
};
