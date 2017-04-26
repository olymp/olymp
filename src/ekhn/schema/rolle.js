module.exports = ({ schema }) => schema.addSchema({
  name: 'rolle',
  query: `
    rolle: Rolle @query
    rolleList: [Rolle] @query
  `,
  mutation: `
    rolle: Rolle @mutate
  `,
  hooks: {
    before: (args, { model, type }, { user }) => {
      if (type === 'MUTATION' && model === 'Rolle' && !user) {
        throw new Error('Please log in');
      }
    },
  },
  schema: `
    # group:über Uns
    type Rolle implements CollectionInterface
    @collection(name: "Rolle") @state @stamp {
      bild: Image
      # @required
      name: String
      # @description
      text: Json
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
