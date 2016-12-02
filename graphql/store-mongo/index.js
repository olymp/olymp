const MongoClient = require('bluebird').promisifyAll(require("mongodb")).MongoClient;
const createSessionStore = require('./session');
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

  const write = (kind, data, { patch, attributes } = {}) => {
    const collection = returnArgs.db.collection(kind);
    const newData = { ...data };

    if (patch && newData.id) {
      // patch (daten holen, ändern, speichern)
      return read(kind, { id: newData.id })
        .then(item => write(kind, Object.assign({}, item, newData)));
    } else if (newData.id) {
      // update (vorhandes ersetzen)
      newData.updatedAt = new Date();

      return collection.replaceOneAsync({ id: newData.id }, newData)
        .then(() => read(kind, { id: newData.id, attributes }));
    }

    // insert (neu anlegen)
    newData.id = ShortId.generate();
    newData.createdAt = new Date();

    return collection.insertOneAsync(newData)
      .then(() => read(kind, { id: newData.id, attributes }));
  };

  const list = (kind, { sort, filter, attributes } = {}) => {
    const newAttributes = attributes ? attributes.reduce((prev, next) => {
      const newPrev = prev;
      newPrev[next] = 1;

      return newPrev;
    }, {}) : undefined;

    const sortObj = {};
    (sort || []).forEach((item) => {
      if (item.substring(0, 1) === '-') {
        sortObj[item.substring(1, item.length - 1)] = -1;
      } else {
        sortObj[item] = 1;
      }
    });

    return returnArgs.db
      .collection(kind)
      .findAsync(!filter ? {} : filter, newAttributes)
      .then(c => c.sort(sortObj).toArrayAsync());
  };

  const remove = (kind, { id }) => {
    const collection = returnArgs.db.collection(kind);
    return read(kind, { id }).then(item => write(kind, Object.assign({}, item, { state: 'REMOVED' })));
    // return collection.deleteOneAsync({ id });
  };

  returnArgs = {
    graphql: require('./graphql'),
    read,
    write,
    list,
    remove,
    createSessionStore: (session) => {
      const Session = createSessionStore(session);
      return new Session({ url: config.url });
    },
  };

  MongoClient.connect(config.url, (err, db) => {
    if (err) console.error('Redis error', err);
    console.log('Connected correctly to server.');
    returnArgs.client = db;
    returnArgs.db = db;
  });

  return returnArgs;
};
