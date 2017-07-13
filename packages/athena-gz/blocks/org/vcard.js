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
    return (React.createElement(Grid, { size: 3, className: className },
        React.createElement(ListLabel, null, label),
        React.createElement(ListContent, null, children)));
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
    return (React.createElement(Grid.Item, __assign({}, rest, { medium: 1 }),
        children,
        ":"));
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
    return (React.createElement(Image, { className: className, value: value, width: "100%", maxWidth: value && value.width, maxResolution: 64000, alt: title }));
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
    return (React.createElement("div", null,
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
            openings &&
                React.createElement("div", null,
                    React.createElement(H2, { color: color }, "\u00D6ffnungszeiten"),
                    React.createElement(Container, null,
                        openings.map(function (value, index) {
                            return (React.createElement(List, { key: index, label: weekdays[index] }, niceTime(value)));
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
                })))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=vcard.js.map