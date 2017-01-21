module.exports = ({ schema }) => schema.addSchema({
  // detail, title, order?, default
  name: 'beitrag',
  query: `
    beitrag: Beitrag @query
    beitragList: [Beitrag] @query
  `,
  mutation: `
    beitrag: Beitrag @mutate
  `,
  schema: `
    # group:inhalt
    type Beitrag implements CollectionInterface
    @collection(name: "Beitrag") @stamp @state {
      name: String
      start: Date
      ende: Date
      # @color("#E6DCEA")
      hauptbeitrag: Boolean
      # @description
      autor: Person @relation
      bild: Image
      text: Json
      zusammenfassung: Json
      tags: [String]
    }
  `,
});
