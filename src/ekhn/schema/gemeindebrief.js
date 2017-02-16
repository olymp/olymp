module.exports = ({ schema }) => schema.addSchema({
  name: 'gemeindebrief',
  query: `
    gemeindebrief: Gemeindebrief @query
    gemeindebriefList: [Gemeindebrief] @query
  `,
  mutation: `
    gemeindebrief: Gemeindebrief @mutate
  `,
  schema: `
    # group:inhalt
    type Gemeindebrief implements CollectionInterface
    @collection(name: "Gemeindebrief") @state @stamp {
      name: String
      # @image
      gemeindebrief: Image
      # @description
      datum: Date
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});
