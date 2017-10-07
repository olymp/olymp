const cloudinary = require('cloudinary');
const lodash = require('lodash');

const { APP } = process.env;

export const parseURI = (uri) => {
  const config = {};
  if (uri) {
    const split1 = uri.split('@');
    const split2 = split1[0].split('://');
    const split3 = split2[1].split(':');
    config.cloud_name = split1[1];
    config.api_key = split3[0];
    config.api_secret = split3[1];
    cloudinary.config(config);
  }

  return config;
};

export const transform = (image) => {
  const newImage = {};
  Object.keys(image).forEach((key) => {
    const originalKey = key;
    key = lodash.camelCase(key);
    if (key === 'publicId') {
      newImage.publicId = image.public_id;
      return;
    } else if (key === 'secureUrl') {
      return;
    } else if (key === 'url') {
      newImage.url = image.secure_url || image.url;
      return;
    } else if (key === 'colors') {
      return;
    } else if (key === 'context' && image[key].custom) {
      newImage.caption = image[key].custom.caption;
      newImage.source = image[key].custom.source;
      newImage.removed = image[key].custom.removed;
      return;
    } else if (key === 'predominant') {
      // Geht nur bei Single Pictures!!!
      newImage.colors = image.predominant.google.map(x => x[0]);
      return;
    } else if (key === 'pages') {
      // Geht nur bei Single Pictures und PDFs!!!
      newImage.pages = image.pages;
      return;
    }
    if (
      [
        'id',
        'format',
        'version',
        'resourceType',
        'type',
        'createdAt',
        'height',
        'width',
        'bytes',
        'url',
        'caption',
        'source',
        'removed',
        'pages',
        'colors',
        'tags',
      ].indexOf(key) !== -1
    ) {
      newImage[key] = image[key];
    }
  });
  return newImage;
};

export const transformSignature = ({ cloud_name }, { signature, api_key, timestamp, folder }) => ({
  url: `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, // eslint-disable-line
  signature,
  folder,
  timestamp,
  apiKey: api_key,
});

export const getImages = (config, images = [], nextCursor) =>
  new Promise((yay, nay) => {
    cloudinary.api.resources(
      (result) => {
        if (result.error) {
          return nay(result.error);
        }

        // Aktuelle Bilder an Ausgabe-Array anhängen (max 500)
        const results =
          result.resources && result.resources.length
            ? images.concat(result.resources.map(transform))
            : [];

        // Falls noch weitere Bilder in Mediathek sind, diese auch laden
        if (result.next_cursor) {
          console.error('WARNING, MORE THAN 500 IMAGES!');
          return getImages(config, results, result.next_cursor).then(yay);
        }
        return yay(results);
      },
      Object.assign({}, config, {
        tags: true,
        context: true,
        type: 'upload',
        colors: true,
        max_results: 500,
        next_cursor: nextCursor,
        prefix: APP && APP !== 'gzk' ? `${APP}/` : '',
      }),
    );
  });

export const getImageById = (config, id) =>
  new Promise(yay =>
    cloudinary.api.resource(
      id,
      (result) => {
        yay(result);
      },
      Object.assign({}, config, {
        tags: true,
        context: true,
        type: 'upload',
        colors: true,
        pages: true,
        prefix: APP && APP !== 'gzk' ? `${APP}/` : '',
      }),
    ),
  ).then(transform);

export const getSignedRequest = config =>
  transformSignature(
    config,
    cloudinary.utils.sign_request(
      {
        timestamp: Math.round(new Date().getTime() / 1000),
        folder: APP ? `${APP}/` : null,
      },
      config,
    ),
  );

export const updateImage = (id, tags, source, caption, config, removed) => {
  const context = [];

  if (source) {
    context.push(`source=${source}`);
  }

  if (caption) {
    context.push(`caption=${caption}`);
  }

  if (removed) {
    context.push('removed=true');
  }

  return new Promise((yay) => {
    cloudinary.api.update(
      id,
      result => yay(result),
      Object.assign({}, config, {
        prefix: APP ? `${APP}/` : '',
        tags: (tags || []).join(','),
        context: context.join('|'),
      }),
    );
  }).then(transform);
};
