import fs from 'fs-extra';
import path from 'path';
import ssr from 'olymp/node/ssr';

require('dotenv').config();
const fetch = require('isomorphic-fetch');

global.fetch = fetch;

const prerender = ((target, urls, args) => {
  if (typeof arrayOrString === 'string') {
    return prerender([urls]);
  }
  return urls.reduce(async (promise, pathname) => {
    await promise;
    const { result } = await ssr(pathname || '/', { ssr: true, ...args });
    if (!pathname || pathname === '/') {
      pathname = '/index';
    }
    return fs.outputFile(path.resolve(target, `.${pathname}.html`), result);
  }, Promise.resolve());
})
export default prerender;


