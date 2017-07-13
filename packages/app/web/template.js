require('babel-register');
module.exports = function (templateParams) {
    return require('../node/template').offline({
        scripts: ["" + templateParams.htmlWebpackPlugin.files.chunks.main.entry],
        styles: ["" + templateParams.htmlWebpackPlugin.files.chunks.main.css[0]],
    });
};
//# sourceMappingURL=template.js.map