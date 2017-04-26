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
  hooks: {
    before: (args, { model, type }, { user }) => {
      if (type === 'MUTATION' && model === 'Vcard' && !user) {
        throw new Error('Please log in');
      }
    },
  },
  schema: `
    # group:über Uns
    # title:Visitenkarte
    type Vcard implements CollectionInterface
    @collection(name: "Vcard") @state @stamp {
      # @required
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
