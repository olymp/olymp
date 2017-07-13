var SitemapGenerator = require('./builder');
var fs = require('fs');
var path = require('path');
var defaultHook = function (source, args, context) {
    if (!context.user) {
        throw new Error('Must be authenticated');
    }
    return Promise.resolve(args);
};
var regenerateSitemap = function () {
    return new Promise(function (yay, nay) {
        var generator = new SitemapGenerator(process.env.URL);
        generator.on('done', function (sitemap) {
            yay(sitemap
                .split('%C3%A4')
                .join('ä')
                .split('%C3%B6')
                .join('ö')
                .split('%C3%BC')
                .join('ü')
                .split('%C3%A4')
                .join('Ä')
                .split('%C3%B6')
                .join('Ö')
                .split('%C3%BC')
                .join('Ü'));
        });
        generator.on('clienterror', function (queueError, errorData) {
            nay(queueError);
        });
        generator.start();
    });
};
var writeSitemap = function (sitemap) {
    return new Promise(function (yay, nay) {
        fs.writeFile(path.resolve(process.cwd(), 'public', 'sitemap.xml'), sitemap, function (err) {
            if (err) {
                nay(err);
            }
            else {
                yay(true);
            }
        });
    });
};
export default function (schema) {
    schema.addSchema({
        name: 'sitemap',
        mutation: "\n      createSitemap: Boolean\n    ",
        resolvers: {
            mutations: {
                createSitemap: function (source, args, context) {
                    var hook = Mutation && Mutation.page ? Mutation.page : defaultHook;
                    return hook(source, Object.assign({}, args), context)
                        .then(regenerateSitemap)
                        .then(writeSitemap);
                },
            },
        },
    });
};
//# sourceMappingURL=index.js.map