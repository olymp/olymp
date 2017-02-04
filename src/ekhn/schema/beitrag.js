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
    @collection(name: "Beitrag") @state @stamp {
      name: String
      # @start
      start: Date
      # @end
      ende: Date
      # @color("#E6DCEA")
      hauptbeitrag: Boolean
      autor: Person @relation
      bild: Image
      # @description
      text: Json
      # @hint("Nur setzten, wenn es einen 'Weiterlesen'-Button zu 'text' geben soll!")
      zusammenfassung: Json
      tags: [String]
    }
  `,
});
