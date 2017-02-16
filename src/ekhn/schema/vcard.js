module.exports = ({ schema }) => schema.addSchema({
  // detail, title, order?, default, list
  // group, test
  name: 'vcard',
  query: `
    vcard: Vcard @query
    vcardList: [Vcard] @query
  `,
  mutation: `
    vcard: Vcard @mutate
  `,
  schema: `
    # group:über Uns
    # title:Visitenkarte
    type Vcard implements CollectionInterface
    @collection(name: "Vcard") @state @stamp {
      name: String
      bild: Image
      # @description
      ort: String
      telefon: PhoneNumber
      mobil: PhoneNumber
      fax: PhoneNumber
      email: Email
      homepage: Website
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
