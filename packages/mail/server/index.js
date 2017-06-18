const fetch = require('isomorphic-fetch');
const md = require('./md');
// const helper = require('sendgrid').mail;

const send = (options, argsOrFn) => {
  const args = Object.assign(
    {},
    options,
    (typeof argsOrFn === 'function' ? argsOrFn(options) : argsOrFn) || {}
  );
  const body = {
    From: args.from,
    To: args.to,
    Subject: args.subject,
  };
  if (args.markdown)
    body.HtmlBody = md.toHTML(
      args.markdown.split('\n').map(x => x.trim()).join('\n'),
      args
    );
  if (args.plain) body.TextBody = args.plain;
  return fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'X-Postmark-Server-Token': process.env.POSTMARK_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  /* sendgrid
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
  });*/
};
const createSender = options => args => {
  return send(options, args);
};
module.exports = createSender;
