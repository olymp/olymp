require('babel-register');
module.exports = templateParams => require('../node/template').electron({
  jsBundle: `${templateParams.htmlWebpackPlugin.files.chunks.main.entry}`,
  cssBundle: `${templateParams.htmlWebpackPlugin.files.chunks.main.css}`,
});
