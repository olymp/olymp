import { message } from 'antd';

export const onError = (err) => {
  let description;
  if (err && err.message) {
    description = err.message;
  } else if (err && typeof err === 'object') {
    description = Object.keys(err).map(key => err[key].errors.map(e => e.message).join('\n')).join('\n')
  }
  message.error(description);
};
export const onSuccess = (text, description) => {
  message.success(description || text);
};
export const layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
export const onEnterFocus = (ref) => (e) => {
  if (e.key === 'Enter') {
    return ref() && ref().refs && ref().refs.input.focus();
  } return false;
};
export const onEnterOk = (onOk) => (e) => {
  if (e.key === 'Enter') onOk();
};
