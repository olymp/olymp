import fetch from 'isomorphic-fetch';
import hashtax, { toPlain, toHtml } from '../hashtax';
import htmlTemplate from './templates/default';

const htmlRenderer = (name, { href, value }) => {
  if (name === 'link') {
    return `<a href=${href} itemprop="url" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">${value}</a>`;
  }
  return undefined;
};
export default (key, options = {}) => {
  if (typeof options === 'string') {
    options = { from: options };
  }
  if (options.from.indexOf('<') !== -1) {
    const [fromName, fromMail] = options.from.split('<');
    options.fromName = fromName.trim();
    options.fromMail = fromMail.split('>')[1].trim();
  }
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
      toHtml(hash, { minify: true, renderer: htmlRenderer }),
      props,
    );
    console.log(body);
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
