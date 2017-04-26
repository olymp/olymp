module.exports = ({ schema }) => schema.addSchema({
  // detail, title, order?, default
  name: 'termin',
  query: `
    termin: Termin @query
    terminList: [Termin] @query
  `,
  mutation: `
    termin: Termin @mutate
  `,
  hooks: {
    before: (args, { model, type }, { user }) => {
      if (type === 'MUTATION' && model === 'Termin' && !user) {
        throw new Error('Please log in');
      }
    },
  },
  schema: `
    # group:termine
    type Termin implements CollectionInterface
    @collection(name: "Termin") @state @stamp {
      # @required
      name: String
      # @description
      # @required
      # @start
      start: DateTime
      # @end
      ende: DateTime
      kommentar: Json
      ganztaegig: Boolean
      bild: Image
      ort: String
      farbe: Color
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
