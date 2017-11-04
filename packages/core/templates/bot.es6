/* eslint-disable prefer-template, max-len */
import serialize from 'serialize-javascript';

export default ({ title, meta, link, fela, root = '', buildOn }) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    ${buildOn ? `<meta name="build-on" content="${buildOn}">` : ''}
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="Content-Language" content="de" />
    <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#87a930">
    <meta name="theme-color" content="#87a930">

    ${title ? title.toString() : ''}
    ${meta ? meta.toString() : ''}
    ${link ? link.toString() : ''}
    <style>${fela.map(x => x.css).join('\n')}</style>
  </head>
  <body>
    <div id="app">${root}</div>
  </body>
</html>
`;
