import fetch from 'isomorphic-fetch';
import hashtax, { toPlain, toHtml } from 'olymp-hashtax';
import htmlTemplate from './templates/default';

export default (key, options = {}) => {
  const send = (template, args = {}) => {
    const props = { ...options, ...args };
    const body = {
      From: props.from,
      To: props.to,
      Subject: props.subject,
    };
    const hash = hashtax(template, props);
    body.TextBody = toPlain(hash, { trim: true, schema: {} });
    body.Subject = body.TextBody.split('\n')[0];
    body.HtmlBody = htmlTemplate(
      toHtml(hash, { minify: true, schema: {} }),
      props
    );
    return fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'X-Postmark-Server-Token': key,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  };
  return send;
};
