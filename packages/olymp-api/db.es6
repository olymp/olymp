export { ObjectID } from 'mongodb';
import { MongoClient, ObjectID } from 'mongodb';
import { parse } from 'querystring';

export const getDB = async str => {
  await connectToDatabase(str);
  return cachedDb;
};

let cachedDb = null;
let _cachedDb = null;
let CONNECTION_STRING;
export const connectToDatabase = connectionString => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }

  if (connectionString) {
    CONNECTION_STRING = connectionString;
  }
  if (!CONNECTION_STRING) {
    return Promise.resolve(cachedDb);
  }
  const split = CONNECTION_STRING.split('/');
  const dbNamePart = split.pop();
  const [dbName, queryStr] = dbNamePart.split('?');
  const connection = split.join('/');
  const query = (queryStr && parse(queryStr)) || {};
  if (query.ssl == 'true') {
    query.ssl = true;
  }
  return MongoClient.connect(CONNECTION_STRING, query).then(async db => {
    _cachedDb = db;
    cachedDb = db.db(dbName);
    return cachedDb;
  });
};
export const close = () => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return _cachedDb.close();
  }
  return Promise.resolve();
};

const enhance = async (method, collection, ...args) => {
  if (typeof collection === 'string') {
    const db = await connectToDatabase(CONNECTION_STRING);
    return db.collection(collection)[method](...args);
  }
  return collection()[method](...args);
};

export const transform = item => {
  if (Array.isArray(item)) {
    return item.map(transform);
  } else if (item && item._id) {
    return { ...item, id: item._id };
  }
  return item;
};

export const findOne = (collection, filter) => {
  if (typeof filter === 'string') {
    return enhance('findOne', collection, { _id: new ObjectID(filter) }).then(
      transform
    );
  }
  return enhance('findOne', collection, filter).then(transform);
};

export const updateOne = (collection, query, data) => {
  if (!data) {
    data = query || {};
    query = null;
  }
  const id = data.id;
  delete data.id;

  if (id || query) {
    return enhance(
      'findAndModify',
      collection,
      query || { _id: new ObjectID(id) },
      [],
      { $set: data },
      {
        remove: false,
        new: true,
        upsert: true,
      }
    )
      .then(x => x.value)
      .then(transform);
  }
  return enhance('insertOne', collection, data)
    .then(x => x.ops[0])
    .then(transform);
};

export const find = (collection, filter, ...args) => {
  if (filter && Array.isArray(filter)) {
    return enhance('find', collection, {
      _id: { $in: filter.map(x => new ObjectID(x)) },
    }).then(transform);
  }
  return enhance('find', collection, filter, ...args)
    .then(x => x.toArray())
    .then(transform);
};
