import { message } from 'antd';

export const onError = err => {
  let description;
  if (err && err.message) {
    description = err.message;
  } else if (err && typeof err === 'object') {
    description = Object.keys(err)
      .map(key => err[key].errors.map(e => e.message).join('\n'))
      .join('\n');
  }
  message.error(description);
};

export const onSuccess = m => {
  message.success(m);
};
