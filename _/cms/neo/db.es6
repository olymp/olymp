import { MongoClient, ObjectID } from 'mongodb';

let CONNECTION_STRING;
export const connectionString = str => (CONNECTION_STRING = str);

let cachedDb = null;
let _cachedDb = null;
const connectToDatabase = () => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(CONNECTION_STRING, {
    ssl: true,
    replicaSet: 'Cluster0-shard-0',
    authSource: 'admin'
  }).then(db => {
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
  const db = await connectToDatabase();
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
        upsert: true
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
