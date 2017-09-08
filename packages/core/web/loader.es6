import { message } from 'antd';
import { debounce } from 'lodash';

let pendings = [];
let loader = null;
const updateLoader = debounce(
  () => {
    const length = pendings.length;
    if (length && !loader) {
      loader = message.loading('Lädt ...', 0);
    } else if (!length && loader) {
      loader();
      loader = null;
    }
  },
  300,
  { leading: true, trailing: true },
);
export const startLoading = () => {
  pendings = [...pendings, 1];
  updateLoader();
};
export const stopLoading = () => {
  const [first, ...remaining] = pendings;
  pendings = remaining;
  updateLoader();
};
