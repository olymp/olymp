import createHistory2 from '@history';

export const createHistory = options => createHistory2(options);
export const attachHistory = (history, store) => {
  history.listen((location, action) => {
    if (!location.url) {
      store.dispatch({
        type: 'LOCATION',
        payload: location,
        compensate: true,
      });
    }
  });
};
