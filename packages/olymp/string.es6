// eslint-ignore
// Node
import path from 'path';
import jsonfile from 'jsonfile';
// React
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Helmet from 'react-helmet';
// Etc
import fetch from 'isomorphic-fetch';
import App, { plugins } from '__resourceQuery';

// Locale
import defaultTemplate from './templates/default';
import ampTemplate from './templates/amp';
import inject from './inject';
import enhance from './root';

var PrettyError = require('pretty-error');

var pe = new PrettyError();
process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log(pe.render(error));
});

// eslint
global.fetch = fetch;

const { IS_SSR, GA_TRACKING_ID, BUILD_ON, NODE_ENV } = process.env;

const isProd = NODE_ENV === 'production';

let $assets;
const getAssets = () => {
  if (!$assets || !isProd) {
    $assets =
      jsonfile.readFileSync(
        path.resolve(__dirname, '..', 'web', 'assets.json')
      ) || {};
  }
  return $assets;
};

// Setup server side routing.
export default async (
  originalUrl,
  { isAmp, isBot, query, ua, ssr, js = [], css = [], ...context }
) => {
  try {
    // const assets = getAssets();
    const renderTemplate = isAmp ? ampTemplate : defaultTemplate;
    if (IS_SSR === false && !ssr) {
      const html = renderTemplate({
        gaTrackingId: GA_TRACKING_ID,
        scripts: isAmp ? [] : js,
        styles: isAmp ? [] : css,
        buildOn: BUILD_ON,
      });
      return Promise.resolve({ status: 200, result: html });
    }

    const url = decodeURI(originalUrl);

    const { decorate, bootstrap, template } = inject(plugins);
    const props = {
      ua,
      isAmp,
    };
    const Root = decorate(App);
    const reactApp = <Root {...props} />;

    const data = (await bootstrap()) || {};
    const reactAppString = isAmp
      ? renderToStaticMarkup(reactApp)
      : renderToString(reactApp);
    // Generate the html res.
    const templateData = template({ header: [], body: [] });
    const html = renderTemplate({
      ...Helmet.rewind(),
      isAmp,
      isBot,
      root: reactAppString,
      buildOn: BUILD_ON,
      scripts: isAmp ? [] : js,
      styles: isAmp ? [] : css,
      header: templateData.header,
      body: templateData.body,
      initialState: {},
      gaTrackingId: GA_TRACKING_ID,
    });
    return { status: 'OK', result: html };
    if (data.location.url !== url) {
      return { status: 'REDIRECT', result: encodeURI(data.location.url) };
    }
    return { status: data.location.isMiss ? 'MISS' : 'OK', result: html };
  } catch (err) {
    throw err;
    return { status: 'ERROR', result: err.message };
  }
};
