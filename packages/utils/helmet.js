var getURL = function () {
    if (process.env.URL) {
        return process.env.URL;
    }
    else if (process.env.IS_WEB) {
        return window.location.protocol + "//" + window.location.host;
    }
    return null;
};
export default function (_a, pth) {
    var _b = _a === void 0 ? {} : _a, name = _b.name, title = _b.title, description = _b.description, image = _b.image, tags = _b.tags, keywords = _b.keywords, pathname = _b.pathname;
    if (pth && !pathname)
        pathname = pth;
    var meta = [];
    var link = [];
    name = name || title;
    if (image && image.url) {
        meta.push({
            property: 'og:image',
            content: image.url,
        });
        meta.push({
            property: 'twitter:image',
            content: image.url,
        });
        meta.push({
            property: 'twitter:card',
            content: image.url,
        });
    }
    if (name) {
        meta.push({
            property: 'og:title',
            content: name,
        });
        meta.push({
            property: 'twitter:title',
            content: name,
        });
        meta.push({
            property: 'og:type',
            content: 'article',
        });
    }
    if (description) {
        meta.push({
            name: 'description',
            content: description,
        });
        meta.push({
            property: 'og:description',
            content: description,
        });
        meta.push({
            property: 'twitter:description',
            content: description,
        });
    }
    tags = tags || keywords;
    if (tags) {
        meta.push({
            name: 'keywords',
            content: tags ? tags.join(',') : undefined,
        });
    }
    var url = getURL();
    if (url && pathname) {
        link.push({
            rel: 'amphtml',
            href: url + pathname + "?amp",
        });
        link.push({
            rel: 'canonical',
            href: url + pathname,
        });
        meta.push({
            property: 'og:url',
            content: url + pathname,
        });
    }
    return title;
    {
        name;
    }
    meta = { meta: meta };
    link = { link: link } /  > ;
};
//# sourceMappingURL=helmet.js.map