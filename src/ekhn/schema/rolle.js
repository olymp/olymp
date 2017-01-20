module.exports = ({ schema }) => schema.addSchema({
  name: 'rolle',
  query: `
    rolle: Rolle @query
    rolleList: [Rolle] @query
  `,
  mutation: `
    rolle: Rolle @mutate
  `,
  schema: `
    # group:über Uns
    type Rolle implements CollectionInterface
    @collection(name: "Rolle") @stamp @state {
      bild: Image
      name: String
      text: Json
      tags: [String]
    }
  `,
});
