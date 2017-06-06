const SitemapGenerator = require('./builder');
const fs = require('fs');
const path = require('path');

const defaultHook = (source, args, context) => {
  if (!context.user) throw new Error('Must be authenticated');
  return Promise.resolve(args);
};

const regenerateSitemap = () => new Promise((yay, nay) => {
  const generator = new SitemapGenerator(process.env.URL);
  generator.on('done', (sitemap) => {
    yay(sitemap
      .split('%C3%A4').join('ä')
      .split('%C3%B6').join('ö')
      .split('%C3%BC').join('ü')
      .split('%C3%A4').join('Ä')
      .split('%C3%B6').join('Ö')
      .split('%C3%BC').join('Ü')
    );
  });
  generator.on('clienterror', (queueError, errorData) => {
    nay(queueError);
  });
  generator.start();
});
const writeSitemap = (sitemap) => new Promise((yay, nay) => {
  fs.writeFile(path.resolve(KYT.PUBLIC_DIR, 'sitemap.xml'), sitemap, (err) => {
    if (err) nay(err);
    else yay(true);
  });
});

module.exports = (schema, { Mutation }) => {
  schema.addSchema({
    name: 'sitemap',
    mutation: `
      createSitemap: Boolean
    `,
    resolvers: {
      Mutation: {
        createSitemap: (source, args, context) => {
          const hook = Mutation && Mutation.page ? Mutation.page : defaultHook;
          return hook(source, Object.assign({}, args), context).then(regenerateSitemap).then(writeSitemap);
        },
      },
    },
  });
};
