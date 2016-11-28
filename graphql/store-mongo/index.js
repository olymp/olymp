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
    if (patch && data.id) {
      return read(kind, { id: data.id }).then(item => write(kind, Object.assign({}, item, data)));
    } else if (data.id) {
      return collection.replaceOneAsync({ id: data.id }, data).then(() => read(kind, { id: data.id, attributes }));
    }
    data.id = ShortId.generate();
    return collection.insertOneAsync(data).then(() => read(kind, { id: data.id, attributes }));
  };

  const list = (kind, { sort, filter, attributes } = {}) => {
    const newAttributes = attributes ? attributes.reduce((prev, next) => {
      const newPrev = prev;
      newPrev[next] = 1;

      return newPrev;
    }, {}) : undefined;

    return returnArgs.db
      .collection(kind)
      .findAsync(!filter ? {} : filter, newAttributes)
      // .sort({ name: 1 })
      .then(c => c.toArrayAsync());
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
