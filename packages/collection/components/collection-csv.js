import moment from 'moment';
import { Plain, Raw } from 'slate';
var SEPERATOR = '|';
export var collectionToCsv = function (collection, items) {
    var fields = collection.fields.filter(function (field) {
        if (field.type.name === 'Image') {
            return true;
        }
        return field.type.kind !== 'OBJECT';
    });
    return items.reduce(function (csv, item, index) {
        var lines = [];
        if (!index) {
            lines.push("sep=" + SEPERATOR);
            lines.push("" + fields.map(function (_a) {
                var name = _a.name;
                return name;
            }).join(SEPERATOR));
        }
        lines.push(fields
            .map(function (_a) {
            var type = _a.type, name = _a.name;
            if (type.name === 'String') {
                return item[name];
            }
            else if (['Date', 'DateTime'].includes(type.name)) {
                return moment(item[name]).isValid()
                    ? moment(item[name]).format('YYYY-MM-DD HH:mm:ss')
                    : '';
            }
            else if (type.name === 'Boolean') {
                return !type.name ? 'false' : 'true';
            }
            else if (type.name === 'Image') {
                return item[name] ? item[name].url : '';
            }
            else if (type.kind === 'LIST') {
                if (type.ofType.name === 'String') {
                    return (item[name] || []).join(';');
                }
                else if (type.ofType.kind === 'OBJECT') {
                    if (Array.isArray(item[name])) {
                        return item[name].map(function (x) { return x.name || ''; }).join(';');
                    }
                    return item[name].name;
                }
            }
            else if (type.name === 'Blocks') {
                if (!item[name]) {
                    return '';
                }
                var raw = Raw.deserialize(JSON.parse(JSON.stringify(item[name])), { terse: true });
                return Plain.serialize(raw).split('\n').join(' ');
            }
            return [undefined, null].includes(item[name])
                ? ''
                : JSON.stringify(item[name]);
        })
            .join(SEPERATOR));
        return "" + csv + lines.join('\r\n') + "\r\n";
    }, '');
};
export var collectionToCsvDownload = function (collection, json) {
    var link = window.document.createElement('a');
    link.setAttribute('href', "data:text/csv;charset=utf-8,%EF%BB%BF" + escape(collectionToCsv(collection, json)));
    link.setAttribute('download', collection.name + ".csv");
    link.click();
};
export var collectionToJson = function (collection, csv) {
    throw new Error('Not implemented');
};
//# sourceMappingURL=collection-csv.js.map