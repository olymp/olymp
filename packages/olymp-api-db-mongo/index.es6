import {
  connectionString,
  connectToDatabase,
  updateOne,
  findOne,
  find,
} from './db';
export * from './db';

export default options => {
  if (!options.uri) {
    throw new Error('Missing URI for mongodb');
  }
  const promise = connectToDatabase(options.uri);
  return {
    context: async props => {
      const db = await promise;
      return {
        updateOne,
        findOne,
        find,
        db,
      };
    },
  };
};
