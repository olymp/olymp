import React from 'react';
import { render } from 'react-dom';
import { AmpProvider, UAProvider, UAParser } from 'olymp-utils';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { createFela } from 'olymp-fela';
import { Provider as FelaProvider } from 'react-fela';
import { GatewayProvider } from 'react-gateway';
import App from '@app';
import { AppContainer } from 'react-hot-loader';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'olymp-router';
import createHistory from 'history/createFlexHistory';
var init = require('@app').init;
if (process.env.NODE_ENV === 'production' && !process.env.IS_ELECTRON) {
    var offline_1 = require('offline-plugin/runtime');
    offline_1.install({
        onUpdating: function () {
            console.log('SW Event:', 'onUpdating');
        },
        onUpdateReady: function () {
            console.log('SW Event:', 'onUpdateReady');
            offline_1.applyUpdate();
        },
        onUpdated: function () {
            console.log('SW Event:', 'onUpdated');
        },
        onUpdateFailed: function () {
            console.log('SW Event:', 'onUpdateFailed');
        },
    });
}
else {
}
var networkInterface = createBatchingNetworkInterface({
    uri: process.env.GRAPHQL_URL ||
        (process.env.URL && process.env.URL + "/graphql") ||
        '/graphql',
    batchInterval: 5,
    opts: {
        credentials: 'same-origin',
    },
});
var client, mountNode, container, renderer, store, history, ua, rehydrateState, asyncContext;
function renderApp() {
    var app = (React.createElement(AsyncComponentProvider, { rehydrateState: rehydrateState, asyncContext: asyncContext },
        React.createElement(AppContainer, null,
            React.createElement(ApolloProvider, { store: store, client: client },
                React.createElement(BrowserRouter, { history: history },
                    React.createElement(FelaProvider, { renderer: renderer, mountNode: mountNode },
                        React.createElement(GatewayProvider, null,
                            React.createElement(UAProvider, { ua: ua },
                                React.createElement(AmpProvider, { amp: false },
                                    React.createElement(App, null))))))))));
    asyncBootstrapper(app).then(function () { return render(app, container); });
}
function load() {
    container = document.getElementById('app');
    mountNode = document.getElementById('css-markup');
    ua = new UAParser(window.navigator.userAgent);
    renderer = createFela(ua);
    client = new ApolloClient({
        networkInterface: networkInterface,
        dataIdFromObject: function (o) { return o.id; },
        ssrForceFetchDelay: 100,
    });
    history = createHistory();
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(combineReducers({
        apollo: client.reducer(),
    }), window.INITIAL_DATA || {}, composeEnhancers(applyMiddleware(client.middleware())));
    rehydrateState = window.ASYNC_STATE;
    asyncContext = createAsyncContext();
    if (typeof init !== undefined && init) {
        init({ renderer: renderer, client: client, store: store });
    }
    var browser = ua.getBrowser();
    if (browser.name === 'IE' && parseInt(browser.major, 10) < 11) {
        console.log('dsad');
        return;
    }
    console.log('test2');
    return renderApp();
}
if (window.POLYFILLED) {
    load();
}
else {
    window.GO = load;
}
if (module.hot) {
    module.hot.accept('@app');
    module.hot.accept('@app', function () { return renderApp(require('@app').default); });
}
//# sourceMappingURL=index.js.map