const api = require('olymp-neo/api').default;
const evernote = require('olymp-neo/evernote').default;
const cloudinary = require('olymp-neo/cloudinary').default;

const upload = cloudinary({
  cloudName: 'x',
  apiKey: 'x',
  apiSecret: 'x'
});

const client = evernote({
  token: 'x',
  sandbox: true,
  upload
});

const { server, playground } = api({
  mongoUri: process.env.MONGODB_URI,
  client
});

exports.server = server;
exports.playground = playground;
