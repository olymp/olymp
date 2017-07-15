var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { H2 } from '../../components';
import Accordion from './accordion';
import Person from './person';
import moment from 'moment';
var niceTime = function (times) {
    if (times.length === 0 || !Array.isArray(times)) {
        return 'Geschlossen';
    }
    return times
        .map(function (time) {
        return time
            .map(function (t) { return moment().startOf('day').add(t, 'minutes').format('HH:mm'); })
            .join('-');
    })
        .join(', ');
};
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingBottom: theme.space1,
    });
}, 'div', function (p) { return Object.keys(p); });
var List = createComponent(function () { return ({
    width: '100%',
    display: 'block',
}); }, function (_a) {
    var className = _a.className, label = _a.label, children = _a.children;
    return React.createElement(Grid, { size: 3, className: className },
        React.createElement(ListLabel, null, label),
        React.createElement(ListContent, null, children));
}, function (p) { return Object.keys(p); });
var ListLabel = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingLeft: theme.space2,
        color: theme.dark2,
        fontWeight: 'bold',
    });
}, function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return React.createElement(Grid.Item, __assign({}, rest, { medium: 1 }),
        children,
        ":");
}, function (p) { return Object.keys(p); });
var ListContent = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'right',
        ifSmallDown: {
            paddingLeft: theme.space2,
            textAlign: 'left',
        },
    });
}, function (p) { return React.createElement(Grid.Item, __assign({}, p, { medium: 2 })); }, function (p) { return Object.keys(p); });
var Text = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingY: theme.space3,
        color: theme.dark2,
    });
}, 'p', function (p) { return Object.keys(p); });
var Logo = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginTop: theme.space2,
        marginX: 'auto',
        ifSmallDown: {
            marginX: theme.space2,
            marginY: 0,
            width: 'calc(100% - 1rem)',
        },
    });
}, function (_a) {
    var value = _a.value, className = _a.className, title = _a.title;
    return React.createElement(Image, { className: className, value: value, width: "100%", maxWidth: value && value.width, maxResolution: 64000, alt: title });
}, function (p) { return Object.keys(p); });
var weekdays = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
];
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        padding: theme.space3,
        paddingTop: theme.space1,
    });
}, function (_a) {
    var className = _a.className, _b = _a.org, color = _b.color, name = _b.name, titel = _b.titel, etage = _b.etage, eMail = _b.eMail, fax = _b.fax, telefon = _b.telefon, telefonPrivat = _b.telefonPrivat, website = _b.website, openings = _b.openings, freifeld = _b.freifeld, logo = _b.logo, vorsorgen = _b.vorsorgen, aesthetik = _b.aesthetik, leistungen = _b.leistungen, persons = _b.persons;
    return React.createElement("div", null,
        React.createElement(Logo, { value: logo, title: name || titel }),
        React.createElement("div", { className: className },
            React.createElement(H2, { color: color }, name),
            React.createElement(Container, null,
                etage &&
                    React.createElement(List, { label: "Etage" }, etage),
                telefon &&
                    React.createElement(List, { label: "Telefon" },
                        React.createElement("a", { href: "tel:" + telefon }, telefon)),
                telefonPrivat &&
                    React.createElement(List, { label: "Privatpatienten" },
                        React.createElement("a", { href: "tel:" + telefon }, telefonPrivat)),
                fax &&
                    React.createElement(List, { label: "Fax" },
                        React.createElement("a", { href: "fax:" + telefon }, fax)),
                eMail &&
                    React.createElement(List, { label: "E-Mail" },
                        React.createElement("a", { href: "mailto:" + eMail }, eMail)),
                website &&
                    React.createElement(List, { label: "Homepage" },
                        React.createElement("a", { href: website }, website))),
            (openings || freifeld) &&
                React.createElement("div", null,
                    React.createElement(H2, { color: color }, "\u00D6ffnungszeiten"),
                    React.createElement(Container, null,
                        (openings || []).map(function (value, index) {
                            return React.createElement(List, { key: index, label: weekdays[index] }, niceTime(value));
                        }),
                        React.createElement(Text, null, freifeld))),
            leistungen &&
                !!leistungen.length &&
                React.createElement(H2, { color: color }, "Leistungsangebot"),
            leistungen &&
                !!leistungen.length &&
                React.createElement(Container, null, leistungen.map(function (item, i) {
                    return React.createElement(Accordion, __assign({}, item, { color: color, key: item.id || i }));
                })),
            vorsorgen && !!vorsorgen.length && React.createElement(H2, { color: color }, "Vorsorge"),
            vorsorgen &&
                !!vorsorgen.length &&
                React.createElement(Container, null, vorsorgen.map(function (item, i) {
                    return React.createElement(Accordion, __assign({}, item, { color: color, key: item.id || i }));
                })),
            aesthetik && !!aesthetik.length && React.createElement(H2, { color: color }, "\u00C4stethik"),
            aesthetik &&
                !!aesthetik.length &&
                React.createElement(Container, null, aesthetik.map(function (item, i) {
                    return React.createElement(Accordion, __assign({}, item, { color: color, key: item.id || i }));
                })),
            persons && !!persons.length && React.createElement(H2, { color: color }, "Personen"),
            persons &&
                !!persons.length &&
                React.createElement(Container, null, persons.map(function (item, i) {
                    return React.createElement(Person, __assign({}, item, { color: color, key: item.id || i }));
                }))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS1nei9ibG9ja3Mvb3JnL3ZjYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDOUIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLElBQU0sUUFBUSxHQUFHLFVBQUEsS0FBSztJQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLO1NBQ1QsR0FBRyxDQUFDLFVBQUEsSUFBSTtRQUNQLE9BQUEsSUFBSTthQUNELEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBekQsQ0FBeUQsQ0FBQzthQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRlosQ0FFWSxDQUNiO1NBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FDL0IsVUFBQyxFQUFTO1FBQVAsZ0JBQUs7SUFBTyxPQUFBLENBQUM7UUFD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YixPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksb0JBQUMsRUFBRSxJQUFDLEtBQUssRUFBRSxLQUFLLGVBQWU7WUFDOUQsT0FBTztnQkFDTixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQ2hCLG9CQUFDLFNBQVMsUUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ25CLE9BQUEsb0JBQUMsTUFBTSxlQUFLLElBQUksSUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFBckQsQ0FBcUQsQ0FDdEQsQ0FDUyxDQUNWLENBQ0Y7QUFoR04sQ0FnR00sRUFDUixVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2F0aGVuYS1nei9ibG9ja3Mvb3JnL3ZjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgR3JpZCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IEgyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBuaWNlVGltZSA9IHRpbWVzID0+IHtcbiAgaWYgKHRpbWVzLmxlbmd0aCA9PT0gMCB8fCAhQXJyYXkuaXNBcnJheSh0aW1lcykpIHtcbiAgICByZXR1cm4gJ0dlc2NobG9zc2VuJztcbiAgfVxuICByZXR1cm4gdGltZXNcbiAgICAubWFwKHRpbWUgPT5cbiAgICAgIHRpbWVcbiAgICAgICAgLm1hcCh0ID0+IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCh0LCAnbWludXRlcycpLmZvcm1hdCgnSEg6bW0nKSlcbiAgICAgICAgLmpvaW4oJy0nKVxuICAgIClcbiAgICAuam9pbignLCAnKTtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjZTEsXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTGlzdCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGxhYmVsLCBjaGlsZHJlbiB9KSA9PlxuICAgIDxHcmlkIHNpemU9ezN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMaXN0TGFiZWw+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvTGlzdExhYmVsPlxuICAgICAgPExpc3RDb250ZW50PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpc3RDb250ZW50PlxuICAgIDwvR3JpZD4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IExpc3RMYWJlbCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2UyLFxuICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0pLFxuICAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PlxuICAgIDxHcmlkLkl0ZW0gey4uLnJlc3R9IG1lZGl1bT17MX0+XG4gICAgICB7Y2hpbGRyZW59OlxuICAgIDwvR3JpZC5JdGVtPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTGlzdENvbnRlbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIGlmU21hbGxEb3duOiB7XG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2UyLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPEdyaWQuSXRlbSB7Li4ucH0gbWVkaXVtPXsyfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgVGV4dCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UzLFxuICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgfSksXG4gICdwJyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTG9nbyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNlMixcbiAgICBtYXJnaW5YOiAnYXV0bycsXG4gICAgaWZTbWFsbERvd246IHtcbiAgICAgIG1hcmdpblg6IHRoZW1lLnNwYWNlMixcbiAgICAgIG1hcmdpblk6IDAsXG4gICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDFyZW0pJyxcbiAgICB9LFxuICB9KSxcbiAgKHsgdmFsdWUsIGNsYXNzTmFtZSwgdGl0bGUgfSkgPT5cbiAgICA8SW1hZ2VcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIG1heFdpZHRoPXt2YWx1ZSAmJiB2YWx1ZS53aWR0aH1cbiAgICAgIG1heFJlc29sdXRpb249ezY0MDAwfVxuICAgICAgYWx0PXt0aXRsZX1cbiAgICAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3Qgd2Vla2RheXMgPSBbXG4gICdNb250YWcnLFxuICAnRGllbnN0YWcnLFxuICAnTWl0dHdvY2gnLFxuICAnRG9ubmVyc3RhZycsXG4gICdGcmVpdGFnJyxcbiAgJ1NhbXN0YWcnLFxuICAnU29ubnRhZycsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTMsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2UxLFxuICB9KSxcbiAgKHtcbiAgICBjbGFzc05hbWUsXG4gICAgb3JnOiB7XG4gICAgICBjb2xvcixcbiAgICAgIG5hbWUsXG4gICAgICB0aXRlbCxcbiAgICAgIGV0YWdlLFxuICAgICAgZU1haWwsXG4gICAgICBmYXgsXG4gICAgICB0ZWxlZm9uLFxuICAgICAgdGVsZWZvblByaXZhdCxcbiAgICAgIHdlYnNpdGUsXG4gICAgICBvcGVuaW5ncyxcbiAgICAgIGZyZWlmZWxkLFxuICAgICAgbG9nbyxcbiAgICAgIHZvcnNvcmdlbixcbiAgICAgIGFlc3RoZXRpayxcbiAgICAgIGxlaXN0dW5nZW4sXG4gICAgICBwZXJzb25zLFxuICAgIH0sXG4gIH0pID0+XG4gICAgPGRpdj5cbiAgICAgIDxMb2dvIHZhbHVlPXtsb2dvfSB0aXRsZT17bmFtZSB8fCB0aXRlbH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8SDIgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7ZXRhZ2UgJiZcbiAgICAgICAgICAgIDxMaXN0IGxhYmVsPVwiRXRhZ2VcIj5cbiAgICAgICAgICAgICAge2V0YWdlfVxuICAgICAgICAgICAgPC9MaXN0Pn1cbiAgICAgICAgICB7dGVsZWZvbiAmJlxuICAgICAgICAgICAgPExpc3QgbGFiZWw9XCJUZWxlZm9uXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHt0ZWxlZm9ufWB9PlxuICAgICAgICAgICAgICAgIHt0ZWxlZm9ufVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpc3Q+fVxuICAgICAgICAgIHt0ZWxlZm9uUHJpdmF0ICYmXG4gICAgICAgICAgICA8TGlzdCBsYWJlbD1cIlByaXZhdHBhdGllbnRlblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgdGVsOiR7dGVsZWZvbn1gfT5cbiAgICAgICAgICAgICAgICB7dGVsZWZvblByaXZhdH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0Pn1cbiAgICAgICAgICB7ZmF4ICYmXG4gICAgICAgICAgICA8TGlzdCBsYWJlbD1cIkZheFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgZmF4OiR7dGVsZWZvbn1gfT5cbiAgICAgICAgICAgICAgICB7ZmF4fVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpc3Q+fVxuICAgICAgICAgIHtlTWFpbCAmJlxuICAgICAgICAgICAgPExpc3QgbGFiZWw9XCJFLU1haWxcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2VNYWlsfWB9PlxuICAgICAgICAgICAgICAgIHtlTWFpbH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0Pn1cbiAgICAgICAgICB7d2Vic2l0ZSAmJlxuICAgICAgICAgICAgPExpc3QgbGFiZWw9XCJIb21lcGFnZVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXt3ZWJzaXRlfT5cbiAgICAgICAgICAgICAgICB7d2Vic2l0ZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0Pn1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgeyhvcGVuaW5ncyB8fCBmcmVpZmVsZCkgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEgyIGNvbG9yPXtjb2xvcn0+w5ZmZm51bmdzemVpdGVuPC9IMj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIHsob3BlbmluZ3MgfHwgW10pLm1hcCgodmFsdWUsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIDxMaXN0IGtleT17aW5kZXh9IGxhYmVsPXt3ZWVrZGF5c1tpbmRleF19PlxuICAgICAgICAgICAgICAgICAge25pY2VUaW1lKHZhbHVlKX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIHtmcmVpZmVsZH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgIHtsZWlzdHVuZ2VuICYmXG4gICAgICAgICAgISFsZWlzdHVuZ2VuLmxlbmd0aCAmJlxuICAgICAgICAgIDxIMiBjb2xvcj17Y29sb3J9PkxlaXN0dW5nc2FuZ2Vib3Q8L0gyPn1cbiAgICAgICAge2xlaXN0dW5nZW4gJiZcbiAgICAgICAgICAhIWxlaXN0dW5nZW4ubGVuZ3RoICYmXG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIHtsZWlzdHVuZ2VuLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbiB7Li4uaXRlbX0gY29sb3I9e2NvbG9yfSBrZXk9e2l0ZW0uaWQgfHwgaX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+fVxuXG4gICAgICAgIHt2b3Jzb3JnZW4gJiYgISF2b3Jzb3JnZW4ubGVuZ3RoICYmIDxIMiBjb2xvcj17Y29sb3J9PlZvcnNvcmdlPC9IMj59XG4gICAgICAgIHt2b3Jzb3JnZW4gJiZcbiAgICAgICAgICAhIXZvcnNvcmdlbi5sZW5ndGggJiZcbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAge3ZvcnNvcmdlbi5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24gey4uLml0ZW19IGNvbG9yPXtjb2xvcn0ga2V5PXtpdGVtLmlkIHx8IGl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPn1cblxuICAgICAgICB7YWVzdGhldGlrICYmICEhYWVzdGhldGlrLmxlbmd0aCAmJiA8SDIgY29sb3I9e2NvbG9yfT7DhHN0ZXRoaWs8L0gyPn1cbiAgICAgICAge2Flc3RoZXRpayAmJlxuICAgICAgICAgICEhYWVzdGhldGlrLmxlbmd0aCAmJlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICB7YWVzdGhldGlrLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbiB7Li4uaXRlbX0gY29sb3I9e2NvbG9yfSBrZXk9e2l0ZW0uaWQgfHwgaX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+fVxuXG4gICAgICAgIHtwZXJzb25zICYmICEhcGVyc29ucy5sZW5ndGggJiYgPEgyIGNvbG9yPXtjb2xvcn0+UGVyc29uZW48L0gyPn1cbiAgICAgICAge3BlcnNvbnMgJiZcbiAgICAgICAgICAhIXBlcnNvbnMubGVuZ3RoICYmXG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIHtwZXJzb25zLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgPFBlcnNvbiB7Li4uaXRlbX0gY29sb3I9e2NvbG9yfSBrZXk9e2l0ZW0uaWQgfHwgaX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuIl19
