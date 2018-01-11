import 'babel-polyfill';
import { GraphQLServerLambda } from 'graphql-yoga';
import { findOne, find, updateOne, connectionString } from './db';

const schema = `
  scalar Json
  scalar DateTime

  enum DOCUMENT_STATE {
    DRAFT
    PUBLISHED
  }
  type Document {
    id: ID!
    rootId: String
    type: String
    createdAt: DateTime!
    updatedAt: DateTime!
    state: DOCUMENT_STATE
    slug: String
    name: String
    description: String
    tags: [String!]
    image: Json
    data: Json
    color: String
    start: DateTime
    end: DateTime
    extract: String
    nodes: [Json!]
    text: String
    toc: [Json!]
  }
  type ParseResult {
    updatedIds: [String!]!
    createdIds: [String!]!
    deletedIds: [String!]!
  }
  type BuildResult {
    updatedIds: [String!]!
    createdIds: [String!]!
    deletedIds: [String!]!
  }
  type Query {
    hello(name: String): String
    document(id: ID!): Document
    documentList: [Document]!
  }
  type Mutation {
    executeParse(app: String): ParseResult
    executeBuild(app: String): BuildResult
  }
`;

export default ({ mongoUri, client }) => {
  const typeDefs = schema;
  connectionString(mongoUri);

  const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'world'}`,
      document: (_, { id }) => findOne('document', id),
      documentList: () => find('document')
    },
    Mutation: {
      executeBuild: (_, { data }) => updateOne('document', data),
      executeParse: async (_, { app }) => {
        // app += ' tag:cms';
        const docs = await client(app);
        const result = await Promise.all(
          docs.map(x => updateOne('document', { rootId: x.rootId }, x))
        );
        return {
          createdIds: [],
          deletedIds: [],
          updatedIds: result.map(x => x.id)
        };
      }
      // document: (_, { data }) => updateOne('document', data)
    }
  };

  const lambda = new GraphQLServerLambda({
    typeDefs,
    resolvers,
    options: {
      endpoint: null
    }
  });

  return {
    server: (event, context, callback) => {
      context.callbackWaitsForEmptyEventLoop = false;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler
  };
};
