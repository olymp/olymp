const fetch = require('isomorphic-fetch');
const md = require('./md');
// const helper = require('sendgrid').mail;

const send = (options, argsOrFn) => {
  const args = Object.assign({}, options, (typeof argsOrFn === 'function' ? argsOrFn(options) : argsOrFn) || {});
  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    body: JSON.stringify({
      personalizations: [{
        to: [{
          email: args.to,
        }],
      }],
      from: {
        email: args.from,
      },
      subject: args.subject,
      content: args.markdown ? [{
        type: 'text/html',
        value: md.toHTML(args.markdown.split('\n').map(x => x.trim()).join('\n'), args),
      }] : [{
        type: 'text/plain',
        value: args.plain,
      }],
    }),
    headers: {
      Authorization: `BEARER ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
  });
};
const createSender = options => args => {
  return send(options, args);
};
module.exports = createSender;
