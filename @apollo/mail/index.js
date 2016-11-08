const compose = require('./templates/default');
const request = require('superagent');

module.exports = ({from, url, name, signature, uri}) => ({to, subject, content}) => {
  if (uri.indexOf('mailgun://') === 0) uri = uri.split('ailgun://')[1];
  const apiKey = uri.split('@')[0];
  const domain = uri.split('@')[1];

  if (Array.isArray(content)) content = compose(content, {url, name, signature});
  else if (typeof content === 'string') content = { text: content, html: content };
  const { body, html } = content;

  return request
    .post(`https://api.mailgun.net/v3/${domain}/messages`)
    .send(`from=${from}`)
    .send(`to=${to}`)
    .send(`subject=${subject}`)
    .send(`text=${body}`)
    .send(`html=${html}`)
    .auth('api', apiKey);
};
