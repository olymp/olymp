module.exports = ({ schema }) => schema.addSchema({
  name: 'link',
  query: `
    link: Link @query
    linkList: [Link] @query
  `,
  mutation: `
    link: Link @mutate
  `,
  schema: `
    # group:inhalt
    type Link implements CollectionInterface
    @collection(name: "Link") @stamp @state {
      name: String
      # @description
      url: String
      tags: [String]
    }
  `,
});
