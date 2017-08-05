export { default as HistoryStore } from './history';

let historyCreator = null;
if (process.env.IS_NODE || process.env.IS_ELECTRON) {
  historyCreator = require('history/createMemoryHistory').default;
} else if (process.env.SERVERLESS) {
  historyCreator = require('history/createHashHistory').default;
} else {
  historyCreator = require('history/createBrowserHistory').default;
}

export const createHistory = historyCreator;
