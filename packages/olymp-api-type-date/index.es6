import type from './type';

export default options => {
  return {
    typeDefs: `
      scalar DateTime
      scalar Date
    `,
    resolvers: {
      Date: type,
      DateTime: type,
    },
  };
};
