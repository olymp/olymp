const replaceInline = str =>
  str
    .replace(/style="([^"]*)"/g, '')
    .replace(/autocorrect="([^"]*)"/g, '')
    .replace(/autoCorrect="([^"]*)"/g, '')
    .replace(/contenteditable="([^"]*)"/g, '')
    .replace(/contentEditable="([^"]*)"/g, '')
    .replace(/spellCheck="([^"]*)"/g, '')
    .replace(/spellcheck="([^"]*)"/g, '');
export default ({ title, meta, link, fela = [], root, buildOn }) => `
  <!DOCTYPE html>
  <html amp lang="de">
    <head>
      <meta charset="utf-8">
      ${buildOn ? `<meta name="build-on" content="${buildOn}">` : ''}
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta http-equiv="Content-Language" content="de" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8e44ad">
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/manifest.json">
      <meta name="msapplication-TileColor" content="#8e44ad">
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
      <meta name="theme-color" content="#8e44ad">
      ${title ? title.toString() : ''}
      ${meta ? meta.toString() : ''}
      ${link ? link.toString() : ''}
      <style amp-custom id="css-markup">${fela
        .map(x => x.css)
        .join('\n')}</style>
    </head>
    <body>
      <div id="app"><div>${root ? replaceInline(root) : ''}</div></div>
    </body>
  </html>
`;
