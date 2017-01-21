module.exports = ({ schema }) => schema.addSchema({
  name: 'person',
  query: `
    person: Person @query
    personList: [Person] @query
  `,
  mutation: `
    person: Person @mutate
  `,
  schema: `
    # group:über Uns
    type Person implements CollectionInterface
    @collection(name: "Person") @stamp @state {
      bild: Image
      name: String
      text: Json
      # @description
      rollen: [Rolle] @relation
      tags: [String]
    }
  `,
});
