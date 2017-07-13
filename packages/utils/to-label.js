import capitalize from 'lodash/upperFirst';
export default function (x) {
    var uml = x
        .replace(/ae/g, 'ä')
        .replace(/oe/g, 'ö')
        .replace(/ü/g, 'ue')
        .replace(/Ae/g, 'Ä')
        .replace(/Oe/g, 'Ö')
        .replace(/Ue/g, 'Ü');
    var snake = uml.replace(/([A-Z])/g, function ($1) { return "-" + $1; });
    var capitalized = capitalize(snake);
    return capitalized;
};
//# sourceMappingURL=to-label.js.map