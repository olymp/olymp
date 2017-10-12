const fetch = require('node-fetch');

require('dotenv').config();

fetch(`https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE}/purge_cache`, {
  method: 'DELETE',
  body: JSON.stringify({ purge_everything: true }),
  headers: {
    'X-Auth-Key': process.env.CLOUDFLARE_KEY,
    'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
  },
})
  .then(res => res.json())
  .then((json) => {})
  .catch((err) => {
    console.error(err);
  });

fetch(`https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE}/purge_cache`, {
  method: 'DELETE',
  body: JSON.stringify({
    files: ['http://www.example.com/css/styles.css'],
  }),
  headers: {
    'X-Auth-Key': process.env.CLOUDFLARE_KEY,
    'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
  },
})
  .then(res => res.json())
  .then((json) => {})
  .catch((err) => {
    console.error(err);
  });
