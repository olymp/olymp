var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import createSchema from 'olymp-graphql/server';
import createMail from 'olymp-mail/server';
import { authGraphQL, authCache, createAuthEngine } from 'olymp-auth/server';
import { pagesGraphQL } from 'olymp-pages/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
import { googleGraphQL } from 'olymp-google/server';
import createMonk from 'monk';
import { modules as colModules, directives } from 'olymp-collection/server';
import { get } from 'lodash';
import algoliasearch from 'algoliasearch';
var _a = process.env, APP = _a.APP, URL = _a.URL, MONGODB_URI = _a.MONGODB_URI, POSTMARK_KEY = _a.POSTMARK_KEY, POSTMARK_FROM = _a.POSTMARK_FROM, CLOUDINARY_URI = _a.CLOUDINARY_URI, AUTH_SECRET = _a.AUTH_SECRET, NODE_ENV = _a.NODE_ENV, GOOGLE_MAPS_KEY = _a.GOOGLE_MAPS_KEY, GOOGLE_CLIENT_EMAIL = _a.GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY = _a.GOOGLE_PRIVATE_KEY;
export default function (server, options) {
    var monk = createMonk(MONGODB_URI);
    var schema = createSchema({ directives: directives });
    var modules = __assign({ helloWorld: {
            queries: "\n      helloWorld: String\n    ",
            resolvers: {
                queries: {
                    helloWorld: function () { return 'Hello World!'; },
                },
            },
        } }, get(options, 'modules', {}), colModules);
    var mail = createMail(POSTMARK_KEY, {
        from: POSTMARK_FROM,
        url: URL,
    });
    var authEngine = createAuthEngine({ monk: monk, mail: mail, secret: AUTH_SECRET });
    server.use(authCache(authEngine));
    var algolia = process.env.ALGOLIA ? algoliasearch(process.env.ALGOLIA.split('@')[1], process.env.ALGOLIA.split('@')[0]) : null;
    var cachedApp = null;
    server.use(function (req, res, next) {
        req.mail = mail;
        req.monk = monk;
        req.schema = schema;
        req.authEngine = authEngine;
        req.app = cachedApp;
        req.algolia = algolia;
        next();
    });
    modules.auth = authGraphQL(options.auth);
    modules.pages = pagesGraphQL();
    modules.cloudinary = cloudinaryGraphQL(CLOUDINARY_URI);
    modules.google = googleGraphQL(GOOGLE_MAPS_KEY, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY);
    server.post('/graphql', schema.express);
    if (NODE_ENV !== 'production') {
        server.get('/graphql', schema.graphi);
    }
    monk.collection('app').findOne({ id: APP }).then(function (app) {
        if (!app) {
            throw new Error('App not found');
        }
        cachedApp = app;
        schema.apply(modules);
    });
};
//# sourceMappingURL=index.js.map