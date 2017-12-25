/* eslint-disable prefer-template, max-len */
import serialize from 'serialize-javascript';

export default ({
  title,
  meta,
  link,
  fela = [],
  styles = [],
  scripts = [],
  root = '',
  initialState,
  cssHash,
  getInitialState,
  gaTrackingId,
  asyncState,
  buildOn,
}) => `
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
    ${styles
      .map(style => `<link rel="stylesheet" type="text/css" href="${style}">`)
      .join('\n')}
    ${fela
      .map(
        ({ type, css, media }) =>
          media
            ? `<style type="text/css" data-fela-type="${type}" media="${media}">${css}</style>`
            : `<style type="text/css" data-fela-type="${type}">${css}</style>`,
      )
      .join('\n')}
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
    <div id="app">${root}</div>
    ${initialState
      ? `<script type="text/javascript">window.INITIAL_DATA=${serialize(
          initialState,
        )}</script>`
      : ''}
    ${asyncState
      ? `
    <script type="text/javascript">window.ASYNC_STATE = ${serialize(
      asyncState,
    )}</script>`
      : ''}
    ${cssHash ? `${cssHash}` : ''}
    ${getInitialState
      ? `<script type="text/javascript">window.INITIAL_DATA=${() =>
          serialize(getInitialState())}</script>`
      : ''}
    ${scripts
      .map(script => `<script async src="${script}"></script>`)
      .join('\n')}
  </body>
</html>
`;
