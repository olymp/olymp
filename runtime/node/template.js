/* eslint-disable prefer-template, max-len */
import serialize from 'serialize-javascript';

const replaceInline = str => str.replace(/style="([^"]*)"/, '');
export const amp = ({ helmet, cssMarkup, root }) => `
  <!DOCTYPE html>
  <html amp lang="de">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta http-equiv="Content-Language" content="de" />
      <meta name="msapplication-TileColor" content="#FBA139">
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
      <meta name="theme-color" content="#FBA139">
      ${helmet.link.toString()}
      <link rel="mask-icon" color="#FBA139" href="/logo.svg">
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
      <style amp-custom id="css-markup">${cssMarkup || ''}</style>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    </head>
    <body>
      <div id="app"><div>${root ? replaceInline(root) : ''}</div></div>
    </body>
  </html>
`;
export const offline = ({ styles, scripts }) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="Content-Language" content="de" />
    <link rel="mask-icon" color="#FBA139" href="/logo.svg">
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
    <meta name="msapplication-TileColor" content="#FBA139">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#FBA139">
    ${styles.map(
      style =>
        `<link rel="stylesheet" type="text/css" href="${style}" media="none" onload="if(media!='all')media='all'">`
    )}
    ${styles.map(
      style => `<noscript><link rel="stylesheet" href="${style}"></noscript>`
    )}
    <style id="css-markup"></style>
  </head>
  <body>
    <div id="app"></div>
    <script type='text/javascript'>function POLY() { window.POLYFILLED = true; if (window.GO) window.GO(); }</script>
    <script async src="https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY"></script>
    ${scripts.map(script => `<script async src="${script}"></script>`)}
  </body>
</html>
`;
export const electron = ({ styles, scripts }) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="Content-Language" content="de" />
    <link rel="mask-icon" color="#FBA139" href="/logo.svg">
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
    <meta name="msapplication-TileColor" content="#FBA139">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#FBA139">
    ${styles.map(
      style => `<link rel="stylesheet" type="text/css" href="${style}">`
    )}
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
    ${scripts.map(script => `<script src="${script}"></script>`)}
  </body>
</html>
`;

export default ({
  helmet,
  cssMarkup,
  styles,
  scripts,
  root,
  initialState,
  gaTrackingId,
}) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="Content-Language" content="de" />
    <meta name="msapplication-TileColor" content="#FBA139">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#FBA139">
    ${helmet.link.toString()}
    <link rel="mask-icon" color="#FBA139" href="/logo.svg">
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
    ${styles.map(
      style =>
        `<link rel="stylesheet" type="text/css" href="${style}" media="none" onload="if(media!='all')media='all'">`
    )}
    ${styles.map(
      style => `<noscript><link rel="stylesheet" href="${style}"></noscript>`
    )}
    <style id="css-markup">${cssMarkup || ''}</style>
  </head>
  <body>
    <div id="app"><div>${root}</div></div>
    <script type='text/javascript'>window.INITIAL_DATA=${serialize(
      initialState
    )}</script>
    <script type='text/javascript'>function POLY() { window.POLYFILLED = true; if (window.GO) window.GO(); }</script>
    <script async src="https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY"></script>
    ${scripts.map(script => `<script async src="${script}"></script>`)}
    ${
      gaTrackingId
        ? /* `<script type="text/javascript">
      var gaProperty = '${gaTrackingId}';
      var disableStr = 'ga-disable-' + gaProperty;
      if (document.cookie.indexOf(disableStr + '=true') > -1) {
      window[disableStr] = true;
      }
      function gaOptout() {
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = true;
      }
    </script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', '${gaTrackingId}', 'auto');
      ga('send', 'pageview');
    </script>` */ ''
        : ''
    }
    ${
      gaTrackingId
        ? `<script type="text/javascript">
      const gaProperty = '${gaTrackingId}';
      const disableStr = 'ga-disable-' + gaProperty;
      if (document.cookie.indexOf(disableStr + '=true') > -1) {
        window[disableStr] = true;
      }

      // Opt-out function
      function gaOptout() {
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = true;
        alert("Google Analytics deaktiviert!");
      }
    </script>`
        : `<script type="text/javascript">
        function gaOptout() {
          alert("Google Analytics ist auf dieser Website nicht aktiv!");
        }
      </script>`
    }
  </body>
</html>
`;
