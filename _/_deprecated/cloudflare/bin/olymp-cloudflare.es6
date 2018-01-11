#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(1));
const notifier = require('node-notifier');
const fetch = require('node-fetch');

require('dotenv').config();

fetch(
  `https://api.cloudflare.com/client/v4/zones/${process.env
    .CLOUDFLARE_ZONE}/purge_cache`,
  {
    method: 'DELETE',
    body: JSON.stringify({ purge_everything: true }),
    headers: {
      'X-Auth-Key': process.env.CLOUDFLARE_KEY,
      'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
    },
  },
)
  .then(res => res.json())
  .then(json => {
    notifier.notify('Purged cache');
  })
  .catch(err => {
    console.error(err);
    notifier.notify('Error purging');
  });
