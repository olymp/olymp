require('babel-register');
module.exports = (templateParams) => {
  return require('../node/template').offline({
    jsBundle: `/${templateParams.htmlWebpackPlugin.files.chunks.main.entry}`,
    cssBundle: `/${templateParams.htmlWebpackPlugin.files.chunks.main.css}`,
  });
};
