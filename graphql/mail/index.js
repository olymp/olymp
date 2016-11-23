const compose = require('./templates/default');
const fetch = require('node-fetch');

module.exports = ({ from, url, name, signature, uri }) => ({ to, subject, content }) => {
  if (uri.indexOf('mailgun://') === 0) uri = uri.split('ailgun://')[1];
  const apiKey = uri.split('@')[0];
  const domain = uri.split('@')[1];

  if (Array.isArray(content)) content = compose(content, { url, name, signature });
  else if (typeof content === 'string') content = { text: content, html: content };
  const { body, html } = content;

  const data = {
    from,
    to,
    subject,
    text: body,
    html,
    api: apiKey,
  };

  return fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};
