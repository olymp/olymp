import { message } from 'antd';

export const onError = err => {
  let description;
  if (err && err.message) {
    description = err.message;
    message.error(description, 20);
  } else if (err && typeof err === 'object') {
    Object.keys(err).forEach(
      key => message.error(err[key].errors.map(e => e.message).join('\n')),
      20,
    );
  }
};
export const onSuccess = (text, description) => {
  message.success(description || text);
};
export const layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
export const onEnterFocus = ref => e => {
  if (e.key === 'Enter') {
    return ref() && ref().refs && ref().refs.input.focus();
  }
  return false;
};
export const onEnterOk = onOk => e => {
  if (e.key === 'Enter') {
    onOk();
  }
};
