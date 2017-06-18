export default () => ({
  Artikel: {
    icon: 'newspaper-o',
    detail: {
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    list: {
      fields: [
        {
          name: 'name',
        },
        {
          name: 'date',
        },
        {
          name: 'bild',
        },
      ],
    },
    interfaces: ['CollectionInterface'],
    decorators: [
      {
        name: 'collection',
        options: { name: 'Artikel' },
      },
      {
        name: 'stamp',
      },
      {
        name: 'state',
      },
    ],
    schema: `
      # v1
      # icon:newspaper-o
      type Artikel implements CollectionInterface @collection(name: "Artikel") @stamp @state {
        # @index(2)
        date: Date
        # ji
        farbe: Color
        # @index(0)
        # @name
        name: String
        slug: Slug
        # @index(1)
        # @image
        bild: Image
        extrakt: Markdown
        # list(4)
        tags: [String]
        blocks: Json
        text: String
      }
    `,
  },
});
