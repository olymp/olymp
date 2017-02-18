/* eslint-disable prefer-template, max-len */

export default ({ helmet, cssBundle, cssMarkup, jsBundle, root }) => `
<!DOCTYPE html>
<html lang="en">
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  </head>
  <body>
    <div id="app"><div>${root}</div></div>
    <script src="${jsBundle}"></script>
  </body>
</html>
`;
