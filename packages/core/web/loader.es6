import { message } from 'antd';

let pendings = [];
let loader = null;
const updateLoader = () => {
  const length = pendings.length;
  if (length && !loader) {
    loader = message.loading('Sync ...', 0);
  } else if (!length && loader) {
    loader();
    loader = null;
  }
};
export const startLoading = () => {
  pendings = [...pendings, 1];
  updateLoader();
};
export const stopLoading = () => {
  const [first, ...remaining] = pendings;
  pendings = remaining;
  updateLoader();
};
