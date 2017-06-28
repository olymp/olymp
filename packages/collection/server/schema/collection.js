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
  `,
};
