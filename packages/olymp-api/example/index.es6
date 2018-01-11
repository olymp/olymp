import 'babel-polyfill';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { updateOne, connectionString, close } from '../lambda/db';
import evernote from './evernote';
import cloudinary from './cloudinary';

connectionString(
  yaml.load(fs.readFileSync(path.resolve(__dirname, '..', 'lambda', 'env.yml')))
    .v1.MONGODB_URI
);

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

const work = async () => {
  const docs = await client('gzk');
  return Promise.all(
    docs.map(x => updateOne('document', { rootId: x.rootId }, x))
  );
};

work()
  .then(close)
  .then(x => {
    console.log('DONE');
  });
