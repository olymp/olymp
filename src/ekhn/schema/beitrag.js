module.exports = ({ schema }) =>
  schema.addSchema({
    // detail, title, order?, default
    name: "beitrag",
    query: `
    beitrag: Beitrag @query
    beitragList: [Beitrag] @query
  `,
    mutation: `
    beitrag: Beitrag @mutate
  `,
    hooks: {
      before: (args, { model, type }, { user }) => {
        if (type === "MUTATION" && model === "Beitrag" && !user) {
          throw new Error("Please log in");
        }
      }
    },
    schema: `
    # group:inhalt
    type Beitrag implements CollectionInterface
    @collection(name: "Beitrag") @state @stamp {
      name: String
      # @start
      # @label("Anzeigen ab")
      start: Date
      # @end
      ende: Date
      # @color("#E6DCEA")
      hauptbeitrag: Boolean
      typ: BeitragTyp
      autor: Person @relation
      bild: Image
      # @description
      text: Json
      # @hint("Nur setzten, wenn es einen 'Weiterlesen'-Button zu 'text' geben soll!")
      zusammenfassung: Json
      # @label("Schlagworte")
      tags: [String]
    }
    enum BeitragTyp {
      Standard
      Kompakt
      Detail
      Datei
      Spalten
    }
  `
  });
