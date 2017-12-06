const { InMemoryCache } = require('apollo-cache-inmemory')
const { HttpLink } = require('apollo-link-http')
const { ApolloClient } = require('apollo-client')
const gql = require('graphql-tag')
const fetch = require('isomorphic-fetch')

global.fetch = fetch;

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
  addTypename: true,
});

const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: process.env.GRAPHQL_URL }),
});

export default async () => {
  const pages = await client.query({
    query: gql`
      query allDocuments {
        pageList: allDocuments(filter:{state_in: [PUBLISHED, DRAFT]}) {
          id
          kind
          slug
          order
          type
          name
          parent {id}
          state
        }
      }
    `,
    variables: { },
  });
  console.log(pages);

  const navigation = unlatten(pages, {
    pathProp: 'pathname',
    parentId: 'parent.id',
    sort: (children, parent) => {
      const newChildren = children.reduce((state, child) => {
        const data = navBindingObj && navBindingObj[child.id];
        if (data) {
          (data.items || []).forEach(item => {
            const slug = child.slug
              ? interpolate(child.slug, item)
              : item.slug;
            state.push({
              ...child,
              pageId: child.id,
              bindingId: item.id,
              bindingObj: item,
              slug,
              name: item.name,
              id: `${child.id}--${item.id}`,
            });
          });
        } else {
          state.push(child);
        }
        return state;
      }, []);
      return orderBy(newChildren, ['order'], ['asc']);
    },
    setPath: (current, { slug, ...rest }) => {
      const pathname = `${current || ''}${slug || ''}`.replace('//', '/');
      flatNavigation.push({ ...rest, slug, pathname });
      return pathname;
    },
  });
}
