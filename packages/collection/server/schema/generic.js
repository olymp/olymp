export default {
  name: 'generic',
  schema: `
    type Generic @generic {
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
