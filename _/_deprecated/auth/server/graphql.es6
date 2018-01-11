import { get } from 'lodash';
import adminCreate from './graphql-admin';
import pubCreate from './graphql-public';
import userCreate from './graphql-user';

export default props => {
  const admin = adminCreate(props);
  const pub = pubCreate(props);
  const user = userCreate(props);
  return {
    authAdmin: admin,
    authPublic: pub,
    authUser: user,
    name: 'auth',
    queries: `
      ${admin.queries || ''}
      ${user.queries || ''}
      ${pub.queries || ''}
    `,
    mutations: `
      ${admin.mutations || ''}
      ${user.mutations || ''}
      ${pub.mutations || ''}
    `,
    resolvers: {
      queries: {
        ...get(admin, 'resolvers.queries', {}),
        ...get(user, 'resolvers.queries', {}),
        ...get(pub, 'resolvers.queries', {}),
      },
      mutations: {
        ...get(admin, 'resolvers.mutations', {}),
        ...get(user, 'resolvers.mutations', {}),
        ...get(pub, 'resolvers.mutations', {}),
      },
    },
    schema: `
      ${admin.schema || ''}
      ${user.schema || ''}
      ${pub.schema || ''}
    `,
  };
};
