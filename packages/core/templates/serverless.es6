const { get, castArray } = require('lodash');
// require('babel-register');

module.exports = templateParams => `
  <!DOCTYPE html>
  <html lang="de">
    <head>
      <meta charset="utf-8">
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
      ${castArray(
        get(templateParams, 'htmlWebpackPlugin.files.chunks.main.css', [])
      ).map(style => `<link rel="stylesheet" type="text/css" href="${style}">`)}
      <style id="css-markup"></style>
      <style>
        body {
          -webkit-app-region: drag;
          -webkit-user-select: none;
        }
        p, h1, h2, h3, h4, h5, h6, span, strong {
          cursor: default;
        }
      </style>
    </head>
    <body>
      <div id="app"></div>
      <script type='text/javascript'>function POLY() { window.POLYFILLED = true; if (window.GO) window.GO(); }</script>
      <script async src="https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY"></script>
      ${castArray(
        get(templateParams, 'htmlWebpackPlugin.files.chunks.main.entry', [])
      ).map(script => `<script src="${script}"></script>`)}
    </body>
  </html>
`;