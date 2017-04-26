module.exports = ({ schema }) => schema.addSchema({
  name: 'person',
  query: `
    person: Person @query
    personList: [Person] @query
  `,
  mutation: `
    person: Person @mutate
  `,
  hooks: {
    before: (args, { model, type }, { user }) => {
      if (type === 'MUTATION' && model === 'Person' && !user) {
        throw new Error('Please log in');
      }
    },
  },
  schema: `
    # group:über Uns
    type Person implements CollectionInterface
    @collection(name: "Person") @state @stamp {
      bild: Image
      # @required
      name: String
      text: Json
      # @description
      rollen: [Rolle] @relation
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
