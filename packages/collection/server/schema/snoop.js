export default {
    name: 'snoop',
    queries: `
      snoop(text: String!): [SnoopResult]
    `,
    resolvers: {
        queries: {
            snoop: (source, { text }, { monk, app }) => {
                const collection = monk.collection('item');
                return collection.find({
                    _appId: app.id,
                    state: 'PUBLISHED',
                    $and: text
                        .split(' ')
                        .map(word => ({
                            $or: [
                                { id: { $regex: RegExp(word, 'i') } },
                                { name: { $regex: RegExp(word, 'i') } },
                                { description: { $regex: RegExp(word, 'i') } },
                                { text: { $regex: RegExp(word, 'i') } },
                            ],
                        })),
                });
            },
        },
    },
    schema: `
    type SnoopResult {
      id: String
      _type: String
      name: String
      tags: [String]
      state: DOCUMENT_STATE
      createdAt: DateTime
      createdBy: User
      updatedAt: DateTime
      updatedBy: User
    }
  `,
};

