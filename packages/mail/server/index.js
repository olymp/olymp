var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import fetch from 'isomorphic-fetch';
import hashtax, { toPlain, toHtml } from 'olymp-hashtax';
import htmlTemplate from './templates/default';
var htmlRenderer = function (name, _a) {
    var href = _a.href, value = _a.value;
    if (name === 'link') {
        return "<a href=" + href + " itemprop=\"url\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;\">" + value + "</a>";
    }
    return undefined;
};
export default function (key, options) {
    if (options === void 0) { options = {}; }
    if (typeof options === 'string') {
        options = { from: options };
    }
    if (options.from.indexOf('<') !== -1) {
        var _a = options.from.split('<'), fromName = _a[0], fromMail = _a[1];
        options.fromName = fromName.trim();
        options.fromMail = fromMail.split('>')[1].trim();
    }
    var send = function (template, args) {
        if (args === void 0) { args = {}; }
        var props = __assign({}, options, args);
        var body = {
            From: props.from,
            To: props.to,
            Subject: props.subject,
        };
        var hash = hashtax(template, props);
        body.TextBody = toPlain(hash, { trim: true, schema: {} });
        body.Subject = body.TextBody.split('\n')[0];
        body.HtmlBody = htmlTemplate(toHtml(hash, { minify: true, renderer: htmlRenderer }), props);
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
//# sourceMappingURL=index.js.map