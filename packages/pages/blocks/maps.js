import { createComponent } from 'olymp-fela';
var MapContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: 300,
        position: 'relative',
        display: 'block',
    });
}, function (_a) {
    var attributes = _a.attributes, className = _a.className;
    return className = { className: className } >
        center;
}, {}, { lat: 59.724465, lng: 30.080121 });
zoom = { 1:  };
options = {}();
({
    panControl: false,
    mapTypeControl: false,
    zoomControl: false,
    scrollwheel: false,
    gestureHandling: 'none',
});
{
    attributes;
}
    >
        lat;
{
    59.724465;
}
lng = { 30.080121:  } /  >
    /Maps>
    < /div>),;
(function (p) { return Object.keys(p); });
;
export default {
    key: 'Pages.Media.MapsBlock',
    label: 'Karte',
    category: 'Medien',
    editable: false,
    component: MapContainer,
};
//# sourceMappingURL=maps.js.map