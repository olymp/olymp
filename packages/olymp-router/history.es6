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
  return history;
};
