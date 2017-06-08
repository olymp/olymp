export default `
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
`;
