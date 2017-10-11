#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(1));
const notifier = require('node-notifier');

require('dotenv').config();

const cf = require('cloudflare')({
  email: process.env.CLOUDFLARE_EMAIL,
  key: process.env.CLOUDFLARE_KEY,
});

cf.zones
  .purgeCache(process.env.CLOUDFLARE_ZONE, { purge_everything: true })
  .then(() => {
    notifier.notify('Purged cache');
  })
  .catch((err) => {
    console.error(err);
    notifier.notify('Error purging');
  });
