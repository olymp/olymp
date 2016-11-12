const shortID = require('shortid');
const bluebird = require('bluebird');
const lodash = require('lodash');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var s = require('searchjs');
const createSessionStore = require('./session');

module.exports = config => {
  if (typeof config === 'string') {
    config = { url: config };
  }

  const client = redis.createClient(config);

  client.on('error', function (err) {
    console.error('Redis error', err)
  });

  const read = (kind, options = {}) => {
    if (options.id) return client.hgetAsync(kind, options.id).then(x => {
      if (!x) return x;
      return JSON.parse(x);
    }); return list(kind, options).then(x => x[0]);
  };

  const write = (kind, data, options = {}) => {
    if (options.patch && data.id) {
      return read(kind, { id: data.id }).then(item => {
        data = Object.assign({}, item, data);
        console.log('GOT', data);
        return client.hsetAsync(kind, data.id + '', JSON.stringify(data)).then(() => data);
      });
    } else {
      if (!data.id) data.id = shortID.generate();
      return client.hsetAsync(kind, data.id + '', JSON.stringify(data)).then(() => data);
    }
  };

  const list = (kind, options = {}) => {
    return client.hgetallAsync(kind).then(obj => {
      if (!obj) return [];
      let list = Object.keys(obj).map(x => JSON.parse(obj[x]));
      if (options.filter) {
        list = s.matchArray(list, options.filter);
      } if (options.sort) {
        const payload = options.sort.reduce((store, item) => {
          store.properties.push(item.replace('-', ''));
          store.orders.push(item.indexOf('-') === 0 || item.indexOf(' desc') !== -1 ? 'desc' : 'asc');
          return store;
        }, { properties: [], orders: [] });
        list = lodash.orderBy(list, payload.properties, payload.orders);
      } return list;
    });
  };

  const remove = (kind, {id}) => new Promise(yay => {
    delete storage[`${kind}/${id}`];
    yay({success: true});
  });

  return {
    read,
    write,
    list,
    remove,
    client,
    createSessionStore: (session) => {
      const Session = createSessionStore(session);
      return new Session({ client });
    },
  };
};
