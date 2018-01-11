import { MongoClient, ObjectID } from 'mongodb';

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
  return MongoClient.connect(CONNECTION_STRING).then(db => {
    _cachedDb = db;
    cachedDb = db.db('olymp');
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
  const db = await connectToDatabase(CONNECTION_STRING);
  return db.collection(collection)[method](...args);
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

export const find = (collection, ...args) =>
  enhance('find', collection, ...args)
    .then(x => x.toArray())
    .then(transform);
