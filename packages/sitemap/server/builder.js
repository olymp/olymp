var http = require('http');
var url = require('url');
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Crawler = require('simplecrawler');
var cheerio = require('cheerio');
var xmlbuilder = require('xmlbuilder');
var assign = require('lodash/assign');
var forIn = require('lodash/forIn');
var moment = require('moment');
function stringifyUrl(parsedUrl) {
    return parsedUrl.protocol + "://" + parsedUrl.host + parsedUrl.uriPath;
}
function SitemapGenerator(uri, options) {
    var self = this;
    var defaultOptions = {
        stripQuerystring: true,
        restrictToBasepath: false,
    };
    var exclude = [
        'gif',
        'jpg',
        'jpeg',
        'png',
        'ico',
        'bmp',
        'ogg',
        'webp',
        'mp4',
        'webm',
        'mp3',
        'ttf',
        'woff',
        'json',
        'rss',
        'atom',
        'gz',
        'zip',
        'rar',
        '7z',
        'css',
        'js',
        'gzip',
        'exe',
        'svg',
    ];
    var exts = exclude.join('|');
    var extRegex = new RegExp(".(" + exts + ")", 'i');
    if (!uri) {
        throw new TypeError("First parameter 'uri' is required!");
    }
    this.status = 'idle';
    this.options = assign({}, defaultOptions, options);
    this.store = {
        error: [],
        found: [],
        ignored: [],
    };
    var baseUrl = uri;
    if (!/^https?:\/\//.test(uri)) {
        baseUrl = "http://" + baseUrl;
    }
    this.baseUrl = url.parse(baseUrl);
    this.crawler = new Crawler(this.baseUrl.href);
    var initialPath = '/';
    if (this.baseUrl.pathname) {
        initialPath = this.baseUrl.pathname;
    }
    this.crawler.initialPath = initialPath;
    this.crawler.decodeResponses = true;
    this.crawler.respectRobotsTxt = true;
    this.crawler.initialProtocol = this.baseUrl.protocol.replace(':', '');
    this.crawler.userAgent = 'Node/SitemapGenerator';
    this.crawler.stripQuerystring = this.options.stripQuerystring;
    if (this.options.restrictToBasepath) {
        this.crawler.addFetchCondition(function (parsedUrl) {
            var baseUrlPath = url.resolve(self.baseUrl.hostname, self.baseUrl.pathname);
            var baseUrlRegex = new RegExp(baseUrlPath + ".*");
            return stringifyUrl(parsedUrl).match(baseUrlRegex);
        });
    }
    this.crawler.addFetchCondition(function (parsedUrl) { return !parsedUrl.path.match(extRegex); });
    this.crawler.noindex = [];
    this.crawler.discoverResources = this._discoverResources;
    this.crawler.on('fetch404', function (queueItem) {
        self.store.error.push(queueItem.url);
        self.emit('fetch', http.STATUS_CODES['404'], queueItem.url);
    });
    this.crawler.on('fetchtimeout', function (queueItem, response) {
        self.store.error.push(queueItem.url);
        self.emit('fetch', http.STATUS_CODES['408'], response);
    });
    this.crawler.on('clienterror', function (queueError, errorData) {
        self.emit('clienterror', queueError, errorData);
    });
    this.crawler.on('fetchdisallowed', function (queueItem) {
        if (self.store.ignored.indexOf(queueItem.url) === -1) {
            self.store.ignored.push(queueItem.url);
            self.emit('ignore', queueItem.url);
        }
    });
    this.crawler.on('fetchcomplete', function (queueItem) {
        self.store.found.push(queueItem.url);
        self.emit('fetch', http.STATUS_CODES['200'], queueItem.url);
    });
    this.crawler.on('complete', this._buildXML.bind(this, function (sitemap) {
        this.status = 'idle';
        this.emit('done', sitemap, this.store);
    }));
    EventEmitter.call(this);
}
util.inherits(SitemapGenerator, EventEmitter);
SitemapGenerator.prototype._discoverResources = function (buffer, queueItem) {
    var $ = cheerio.load(buffer.toString('utf8'));
    var metaRobots = $('meta[name="robots"]');
    if (metaRobots.length && /noindex/i.test(metaRobots.attr('content'))) {
        this.noindex.push(queueItem.url);
    }
    if (metaRobots.length && /nofollow/i.test(metaRobots.attr('content'))) {
        return [];
    }
    var links = $('a[href]').map(function () {
        var href = $(this).attr('href');
        if (/^[a-z]+:(?!\/\/)/i.test(href)) {
            return null;
        }
        href = href.replace(/(#.*)$/, '');
        if (/^\/\//.test(href)) {
            return queueItem.protocol + ":" + href;
        }
        if (!/^https?:\/\//.test(href)) {
            var base_1 = $('base').first();
            if (base_1.length) {
                href = url.resolve(base_1.attr('href'), href);
            }
            if (/^\.\.?\/.*/.test(href) || /^\/[^\/].*/.test(href)) {
                href = url.resolve(queueItem.url, href);
            }
        }
        return href;
    });
    return links.get();
};
SitemapGenerator.prototype._buildXML = function (callback) {
    var sitemap = null;
    if (this.store.found.length > 0 &&
        this.store.found.length !== this.crawler.noindex.length) {
        this.crawler.noindex.forEach(function (page) {
            var index = this.store.found.indexOf(page);
            if (index !== -1) {
                var ignored = this.store.found.splice(index, 1)[0];
                this.store.ignored.push(ignored);
            }
        }, this);
        var xml_1 = xmlbuilder
            .create('urlset', { version: '1.0', encoding: 'UTF-8' })
            .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
        forIn(this.store.found, function (foundURL) {
            xml_1.ele('url').ele({
                loc: foundURL,
                lastmod: moment().format('YYYY-MM-DDTHH:mm:ss-00:00'),
            });
        });
        sitemap = xml_1.end({ pretty: true, indent: '  ', newline: '\n' });
    }
    if (typeof callback === 'function') {
        callback.call(this, sitemap);
    }
};
SitemapGenerator.prototype.start = function () {
    if (this.status === 'crawling') {
        throw new Error('This SitemapGenerator instance is already crawling a site.');
    }
    this.status = 'crawling';
    this.crawler.start();
    return this;
};
module.exports = SitemapGenerator;
//# sourceMappingURL=builder.js.map