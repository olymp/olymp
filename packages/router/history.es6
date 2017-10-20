let historyCreator = null;
if (process.env.IS_NODE || process.env.IS_ELECTRON) {
  historyCreator = require('history/createMemoryHistory').default;
} else if (process.env.IS_SERVERLESS) {
  historyCreator = require('history/createHashHistory').default;
} else {
  historyCreator = require('history/createBrowserHistory').default;
}

export const createHistory = (options = {}) => {
  const history = historyCreator(options);
  if (process.env.IS_ELECTRON) {
    const rawLocation = localStorage.getItem('location');
    if (rawLocation) {
      history.push(JSON.parse(rawLocation));
    }
  }
  return history;
};
export const attachHistory = (history, store) => {
  history.listen((location, action) => {
    if (!location.url) {
      store.dispatch({
        type: 'LOCATION_CORRECT',
        payload: location,
      });
    }
  });
};
