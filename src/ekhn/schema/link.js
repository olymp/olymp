module.exports = ({ schema }) => schema.addSchema({
  name: 'link',
  query: `
    link: Link @query
    linkList: [Link] @query
  `,
  mutation: `
    link: Link @mutate
  `,
  hooks: {
    before: (args, { model, type }, { user }) => {
      if (type === 'MUTATION' && model === 'Link' && !user) {
        throw new Error('Please log in');
      }
    },
  },
  schema: `
    # group:inhalt
    type Link implements CollectionInterface
    @collection(name: "Link") @state @stamp {
      # @required
      name: String
      # @description
      # @required
      url: String
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
