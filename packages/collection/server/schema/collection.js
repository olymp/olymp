export default {
  name: 'collection',
  schema: `
    enum DOCUMENT_STATE {
      PUBLISHED
      DRAFT
      REMOVED
    }
    enum MUTATION_TYPE {
      UPDATE
      REPLACE
      REMOVE
      INSERT
    }
    enum SORT_DIRECTION {
      ASC,
      DESC
    }
    interface CollectionInterface {
      id: String
      name: String
      tags: [String]
      state: DOCUMENT_STATE
      createdAt: DateTime
      createdBy: User
      updatedAt: DateTime
      updatedBy: User
    }
    type Common @collection {
      date: Date
      name: String
      slug: Slug!
      image: Image
      extract: Markdown
      tags: [String]
      text: Blocks
      author: User @relation
      org: Einrichtung @relation
      _type: String
      state: DOCUMENT_STATE
    }
  `,
};
