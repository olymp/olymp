var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Panel } from '../../components';
import Container from './container';
export default {
    key: 'GZK.Panel.Vorsorge',
    label: 'Vorsorge, Medizin, Video',
    category: 'Panel',
    editable: false,
    component: function (_a) {
        var className = _a.className, attributes = _a.attributes;
        return (React.createElement(Container, __assign({}, attributes, { className: className }),
            React.createElement(Panel, { medium: 4, title: "Vorsorge" }, "Wir bieten eine F\u00FClle an Pr\u00E4ventionsleistungen auf allen Fachgebieten an. Hierbei handelt es sich um vorbeugenden Ma\u00DFnahmen die dazu dienen, den Eintritt einer Krankheit zu verhindern oder zu verz\u00F6gern, oder die Krankheitsfolgen abzuschw\u00E4chen. So kann die Lebensqualit\u00E4t verbessert und die L\u00E4nge des Lebens selbst beg\u00FCnstigt werden."),
            React.createElement(Panel, { medium: 4, title: "Medizin" }, "Die hier niedergelassenen \u00C4rzte und medizinische Dienstleister bieten umfassende gesundheitliche Leistungen an. Unter einem Dach, aus einer Hand bietet Ihnen unser interdisziplin\u00E4res Konzept viele Vorteile: kurze Wege, effektive Arztbesuche, schnelle Ergebnisse, abgestimmte Behandlungen sowie eine hohe medizinische Qualit\u00E4t."),
            React.createElement(Panel, { medium: 4, title: "Unser Video", padding: 0 },
                React.createElement("iframe", { title: "Unser Video", width: "100%", height: "100%", src: "https://www.youtube.com/embed/iMDa7TXiEW4", frameBorder: "0", allowFullScreen: true }))));
    },
};
//# sourceMappingURL=vorsorge.js.map