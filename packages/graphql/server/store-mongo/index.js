const MongoClient = require('bluebird').promisifyAll(require('mongodb'))
  .MongoClient;
const ShortId = require('shortid');

module.exports = config => {
  let returnArgs = {};
  if (typeof config === 'string') {
    config = { url: config };
  }

  const read = (kind, { id, filter, attributes } = {}) => {
    const collection = returnArgs.db.collection(kind);
    if (id) filter = { id };
    return returnArgs.db.collection(kind).findOneAsync(filter, attributes);
  };

  const write = (kind, data, { patch, attributes, stamp } = {}) => {
    const collection = returnArgs.db.collection(kind);
    const newData = data;

    if (stamp) newData.updatedAt = new Date();
    if (typeof stamp === 'object') newData.updatedBy = stamp;

    if (patch && newData.id) {
      // patch (daten holen, ändern, speichern)
      return read(kind, { id: newData.id }).then(item =>
        write(kind, Object.assign({}, item, newData))
      );
    } else if (newData.id) {
      // update (vorhandes ersetzen)
      return collection
        .replaceOneAsync({ id: newData.id }, newData)
        .then(() => read(kind, { id: newData.id, attributes }));
    }

    newData.id = ShortId.generate();
    if (stamp) newData.createdAt = new Date();
    if (typeof stamp === 'object') newData.createdBy = stamp;

    // insert (neu anlegen)
    return collection.insertOneAsync(newData).then(() =>
      write(kind, Object.assign({}, newData)).then(() =>
        read(kind, {
          id: newData.id,
          attributes,
        })
      )
    );
  };

  const list = (kind, { sort, filter, attributes } = {}) => {
    const newAttributes = attributes
      ? attributes.reduce((prev, next) => {
          const newPrev = prev;
          newPrev[next] = 1;

          return newPrev;
        }, {})
      : undefined;

    const sortObj = {};
    (sort || [])
      .forEach(
        item =>
          (sortObj[item.replace('-', '')] = item.indexOf('-') === 0 ? -1 : 1)
      );

    return returnArgs.db
      .collection(kind)
      .findAsync(!filter ? {} : filter, newAttributes)
      .then(c => c.sort(sortObj).toArrayAsync());
  };

  const remove = (kind, { id }) => {
    const collection = returnArgs.db.collection(kind);
    return read(kind, { id }).then(item =>
      write(kind, Object.assign({}, item, { state: 'REMOVED' }))
    );
    // return collection.deleteOneAsync({ id });
  };

  returnArgs = {
    graphql: require('./graphql'),
    read,
    write,
    list,
    remove,
  };

  MongoClient.connect(config.url, (err, db) => {
    if (err) console.error('Redis error', err);
    console.log('Connected correctly to server.');
    returnArgs.client = db;
    returnArgs.db = db;
  });

  return returnArgs;
};
