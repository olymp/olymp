import Metascraper from 'metascraper';
import sizeOf from 'request-image-size';
import cloudinary from 'cloudinary';
import { URL } from 'url';

const props = {
  image: {
    crop: 'fill',
    format: 'auto',
    quality: 'auto',
    gravity: 'auto',
    dpr: 2,
    width: 150,
    height: 175,
  },
  logo: {
    crop: 'fill',
    format: 'auto',
    quality: 'auto',
    gravity: 'auto',
    dpr: 2,
    width: 75,
    height: 75,
  },
  favicon: {
    crop: 'fill',
    format: 'auto',
    quality: 'auto',
    gravity: 'auto',
    dpr: 2,
    width: 16,
    height: 16,
  },
};
const trimLength = (str, length) => (str.length > length ? `${str.substring(0, length)}...` : str);
const getPromise = (metadata, prop) => {
  if (metadata[prop]) {
    return {
      id: metadata[prop],
      url: cloudinary.utils.url(metadata[prop], {
        type: 'fetch',
        transformation: props[prop],
      }),
      width: props[prop].width,
      height: props[prop].height,
    };
    return sizeOf(metadata[prop]).then(dimensions => ({
      id: metadata[prop],
      url: `https://res.cloudinary.com/demo/image/fetch/${metadata[prop]}`,
      width: dimensions.width,
      height: dimensions.height,
      type: dimensions.type,
      bytes: dimensions.downloaded,
    }));
  }
};

setTimeout(() => {
  const url = cloudinary.utils.url(
    'https://img-9gag-fun.9cache.com/photo/aNzQ8Kr_700b.jpg',
    {
      type: 'fetch',
      transformation: {
        crop: 'fill',
        format: 'auto',
        quality: 'auto',
        gravity: 'auto',
        dpr: 2,
        width: 150,
        height: 170,
      },
    },
    (result) => {
      console.log(result);
    },
  );
  console.log(url);
}, 5000);

const getImages = metadata =>
  Promise.all([
    getPromise(metadata, 'image'),
    getPromise(metadata, 'logo'),
  ]).then(([image, logo]) => {
    if (image) {
      metadata.image = image;
    }
    if (logo) {
      metadata.logo = logo;
    }
    return metadata;
  });

const getRules = (url) => {
  const wrap = rule => ($) => {
    const value = rule($);
    if (!value || value.endsWith('.svg')) {
      return undefined;
    }
    if (value.indexOf('http') === 0) {
      return value;
    }
    if (value.indexOf('//') === 0) {
      return `https:${value}`;
    }
    if (value.indexOf('/') === 0) {
      return `${url.origin}${value}`;
    }
    if (value.indexOf('./') === 0) {
      return `${url.href}${value.substr(1)}`;
    }
    return value;
  };
  function wrapDescription(rule) {
    return ($) => {
      let value = rule($);
      if (typeof value !== 'string') {
        return undefined;
      }
      value = value.trim();
      value = value.replace(/^[A-Z\s]+\s+[-—–]\s+/, '');
      return trimLength(value, 160);
    };
  }
  return {
    ...Metascraper.RULES,
    origin: () => url.origin,
    description: [
      ...Metascraper.RULES.description,
      wrapDescription($ =>
        $('p')
          .first()
          .text(),
      ),
    ],
    favicon: () => ({
      url: `https://res.cloudinary.com/demo/image/fetch/${url.origin}/favicon.ico`,
      width: 32,
      height: 32,
    }),
    extract: $ =>
      $('p')
        .first()
        .text(),
    image: [
      wrap(
        $ =>
          (url.origin.indexOf('wikipedia.org') !== -1
            ? 'https://de.wikipedia.org/static/images/project-logos/dewiki-2x.png'
            : undefined),
      ),
      wrap($ => $('meta[property="og:image:secure_url"]').attr('content')),
      wrap($ => $('meta[property="og:image:url"]').attr('content')),
      wrap($ => $('meta[property="og:image"]').attr('content')),
      wrap($ => $('meta[name="twitter:image"]').attr('content')),
      wrap($ => $('meta[property="twitter:image"]').attr('content')),
      wrap($ => $('meta[name="twitter:image:src"]').attr('content')),
      wrap($ => $('meta[property="twitter:image:src"]').attr('content')),
      wrap($ => $('meta[name="sailthru.image"]').attr('content')),
      wrap($ => $('meta[name="sailthru.image.full"]').attr('content')),
      wrap($ => $('meta[name="sailthru.image.thumb"]').attr('content')),
      wrap($ =>
        $('article img[src]')
          .first()
          .attr('src'),
      ),
      wrap($ =>
        $('#content img[src]')
          .first()
          .attr('src'),
      ),
      wrap($ =>
        $('[class*="article"] img[src]')
          .first()
          .attr('src'),
      ),
      wrap($ =>
        $('img[src]')
          .first()
          .attr('src'),
      ),
    ],
    logo: [
      wrap($ =>
        $('img#logo[src]')
          .first()
          .attr('src'),
      ),
      wrap($ =>
        $('img.logo[src]')
          .first()
          .attr('src'),
      ),
    ],
  };
};
export default () => ({
  name: 'scrape',
  queries: `
      scrape(url: String): Meta
    `,
  resolvers: {
    queries: {
      scrape: (source, { url }) =>
        Metascraper.scrapeUrl(url, getRules(new URL(url)))
          .then(getImages)
          .then(metadata => ({
            ...metadata,
            id: url,
          })),
    },
  },
  schema: `
    type Meta {
      id: String
      origin: String
      author: String
      extract: String
      date: DateTime
      description: String
      favicon: Image
      image: Image
      logo: Image
      publisher: String
      title: String
      url: String
    }
  `,
});
