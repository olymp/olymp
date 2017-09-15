import { debounce } from 'lodash';
import { createLoaderStart, createLoaderEnd } from '../redux';

let pendings = [];
let loader = null;
const updateLoader = debounce(
  (dispatch) => {
    const length = pendings.length;
    if (length && !loader) {
      loader = true;
      createLoaderStart(dispatch)();
    } else if (!length && loader) {
      loader = false;
      createLoaderEnd(dispatch)();
    }
  },
  300,
  { leading: true, trailing: true },
);
export const startLoading = (dispatch) => {
  pendings = [...pendings, 1];
  updateLoader(dispatch);
};
export const stopLoading = (dispatch) => {
  const [first, ...remaining] = pendings;
  pendings = remaining;
  updateLoader(dispatch);
};
