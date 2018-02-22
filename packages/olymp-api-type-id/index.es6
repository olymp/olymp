import Hashids from 'hashids';
import type from './type';

export default options => {
  if (!options.password) {
    throw new Error('Please provide a password');
  }
  const password = options.password;
  const dictionary =
    options.dictionary ||
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-._*';

  return {
    typeDefs: `
      scalar ID
    `,
    resolvers: {
      ID: type(new Hashids(password, 0, dictionary)),
    },
  };
};
