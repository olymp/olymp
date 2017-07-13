import maps from '@google/maps';
export default function (key) {
    var googleMapsClient = maps.createClient({
        key: key,
        Promise: Promise,
    });
    return function (method, payload) {
        return new Promise(function (yay, nay) {
            if (!googleMapsClient[method]) {
                nay('Method does not exist');
            }
            googleMapsClient[method](payload, function (err, result) {
                if (err) {
                    nay(err.json.error_message);
                }
                else {
                    yay(result);
                }
            });
        });
    };
};
//# sourceMappingURL=maps.js.map