/* eslint-disable prefer-template, max-len */
import serialize from 'serialize-javascript';

export default ({ helmet, cssBundle, cssMarkup, jsBundle, root, initialState }) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet="utf-8" />
    <meta httpEquiv="Content-Language" content="de" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="mask-icon" color="#FBA139" href="logo.svg">
    <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="manifest.json">
    <meta name="msapplication-TileColor" content="#FBA139">
    <meta name="msapplication-TileImage" content="ms-icon-144x144.png">
    <meta name="theme-color" content="#FBA139">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${cssBundle ? '<link rel="stylesheet" type="text/css" href="' + cssBundle + '">' : ''}
    <style id="css-markup">${cssMarkup || ''}</style>
  </head>
  <body>
    <div id="app"><div>${root}</div></div>
    <script type='text/javascript'>window.__APP_STATE__=${serialize(initialState)}</script>
    <script src="${jsBundle}"></script>
  </body>
</html>
`;
