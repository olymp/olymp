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
  schema: `
    # group:termine
    type Termin implements CollectionInterface
    @collection(name: "Termin") @state @stamp {
      name: String
      # @description
      # @start
      start: DateTime
      # @end
      ende: DateTime
      kommentar: Json
      ganztaegig: Boolean
      bild: Image
      ort: String
      farbe: Color
      tags: [String]
    }
  `,
});
