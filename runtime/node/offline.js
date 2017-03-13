require('babel-register');
module.exports = (templateParams) => {
  return require('./template').offline({
    jsBundle: `/${templateParams.htmlWebpackPlugin.files.chunks.main.entry}`,
    cssBundle: `/${templateParams.htmlWebpackPlugin.files.chunks.main.css}`,
  });
};
