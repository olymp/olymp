require('babel-register');

module.exports = templateParams => {
  console.log(templateParams.htmlWebpackPlugin.files.chunks);
  return require('../node/template').offline({
    scripts: [`${templateParams.htmlWebpackPlugin.files.chunks.main.entry}`],
    styles: [`${templateParams.htmlWebpackPlugin.files.chunks.main.css[0]}`],
  });
};
