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
    @collection(name: "Gottesdienst") @stamp @state {
      # title:Alternativer Titel
      # @description
      name: String
      # @name
      datum: DateTime
      kommentar: Json
      # @color("#E6DCEA")
      hervorheben: Boolean
      abendmahl: Boolean
      # title:mit Kindergottesdienst
      kindergottesdienst: Boolean
      bild: Image
      # title:Bei Terminen ausblenden
      keinTermin: Boolean
      # title:Pfarrer/in
      pfarrer: [Person] @relation
      # title:Organist/in
      organist: Person @relation
      tags: [String]
    }
  `,
});
