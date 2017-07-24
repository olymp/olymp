import shortID from 'shortid';
import Metascraper from 'metascraper';

export default () => ({
  name: 'scrape',
  queries: `
      scrape(url: String): Meta
    `,
  resolvers: {
    queries: {
      scrape: (source, { url }) =>
        Metascraper.scrapeUrl(url).then(metadata => ({
          ...metadata,
          id: shortID.generate(),
        })),
    },
  },
  schema: `
    type Meta {
      id: String
      author: String
      date: DateTime
      description: String
      image: String
      publisher: String
      title: String
      url: String
    }
  `,
});
