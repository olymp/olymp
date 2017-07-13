import moment from 'moment';
var offset = moment().utcOffset();
export default function () {
    return moment.utc.apply(this, arguments).add(offset, 'm');
}
//# sourceMappingURL=utc.js.map