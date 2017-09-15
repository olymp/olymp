/* eslint-disable prefer-template, max-len */
import serialize from 'serialize-javascript';

export default ({
  title,
  meta,
  link,
  cssMarkup,
  styles = [],
  scripts = [],
  root = '',
  initialState,
  getInitialState,
  gaTrackingId,
}) => `
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
    <link rel="apple-touch-startup-image" href="/launch.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="msapplication-TileColor" content="#8e44ad">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#8e44ad">
    ${title ? title.toString() : ''}
    ${meta ? meta.toString() : ''}
    ${link ? link.toString() : ''}
    ${styles.map(
    style =>
      `<link rel="stylesheet" type="text/css" href="${style}" media="none" onload="if(media!='all')media='all'">`,
  )}
    ${styles.map(style => `<noscript><link rel="stylesheet" href="${style}"></noscript>`)}
    <style id="css-markup">${cssMarkup || ''}</style>
    ${gaTrackingId
    ? `<script type="text/javascript">
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
    </script>`
    : ''}
  </head>
  <body>
    <div id="app"><div>${root}</div></div>
    ${initialState
    ? `<script type="text/javascript">window.INITIAL_DATA=${serialize(initialState)}</script>`
    : ''}
    ${getInitialState
    ? `<script type="text/javascript">window.INITIAL_DATA=${() =>
      serialize(getInitialState())}</script>`
    : ''}
    ${scripts.map(script => `<script src="${script}"></script>`)}
  </body>
</html>
`;
