module.exports = ({ schema }) => schema.addSchema({
  name: 'gottesdienst',
  query: `
    gottesdienst: Gottesdienst @query
    gottesdienstList: [Gottesdienst] @query
  `,
  mutation: `
    gottesdienst: Gottesdienst @mutate
  `,
  schema: `
    # group:termine
    type Gottesdienst implements CollectionInterface
    @collection(name: "Gottesdienst") @state @stamp {
      # @label("Alternativer Titel")
      # @description
      name: String
      # @name
      # @required
      datum: DateTime
      kommentar: Json
      # @color("#E6DCEA")
      hervorheben: Boolean
      abendmahl: Boolean
      # @label("mit Kindergottesdienst")
      kindergottesdienst: Boolean
      bild: Image
      # @label("Bei Terminen ausblenden")
      keinTermin: Boolean
      # @label("Pfarrer/in")
      pfarrer: [Person] @relation
      # @label("Organist/in")
      organist: Person @relation
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
