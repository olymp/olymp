import React from 'react';
import { ThemeProvider, createFela } from 'olymp-fela';
import { Provider as FelaProvider } from 'react-fela';
import { MemoryRouter } from 'react-router';
var ss = document.getElementById('fela') || document.createElement('style');
if (!ss.id) {
    ss.id = 'fela';
    ss.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(ss);
}
var renderer = createFela();
export var FelaDecorator = function (story) {
    return (React.createElement(FelaProvider, { renderer: renderer, mountNode: ss },
        React.createElement(ThemeProvider, null, story())));
};
export var RouterDecorator = function (story) {
    return React.createElement(MemoryRouter, { initialEntries: ['/'] }, story());
};
//# sourceMappingURL=decorator.js.map