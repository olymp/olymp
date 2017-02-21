/* eslint-disable prefer-template, max-len */

export default ({ helmet, cssBundle, cssMarkup, jsBundle, root }) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet="utf-8" />
    <meta httpEquiv="Content-Language" content="de" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${cssBundle ? '<link rel="stylesheet" type="text/css" href="' + cssBundle + '">' : ''}
    <style id="css-markup">${cssMarkup || ''}</style>
  </head>
  <body>
    <div id="app"><div>${root}</div></div>
    <script src="${jsBundle}"></script>
  </body>
</html>
`;
