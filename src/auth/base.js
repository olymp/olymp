import React from 'react';
import { Link, Modal } from 'olymp';
import { notification } from 'antd';

export const layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
export const onEnterFocus = (ref) => (e) => {
  if (e.key === 'Enter') {
    return ref() && ref().refs && ref().refs.input.focus();
  } return false;
}
export const onEnterOk = (onOk) => (e) => {
  if (e.key === 'Enter') onOk();
}
const def = ({ copyright, isOpen, email, children, title, saving, pathname, onCancel, onOk, cancelText }, { theme }) => (
  <Modal showLogo isOpen={isOpen} title={title} confirmLoading={saving} onCancel={onCancel} maskClosable={false}>
    {children}
    <Modal.Footer>
      <Modal.Button onClick={onCancel}>{cancelText || 'Abbruch'}</Modal.Button>
      {onOk && <Modal.Button type="primary" onClick={onOk}>{title}</Modal.Button>}
    </Modal.Footer>
    <Modal.Copyright>
      <Link to={{ pathname, query: { register: null, login: undefined } }}>{theme.copyright || 'made with ❤ by olymp'}</Link>
    </Modal.Copyright>
  </Modal>
);
def.contextTypes = {
  theme: React.PropTypes.object,
}
export default def;
export const onError = (err) => {
  let description;
  if (err && err.message) {
    description = err.message;
  } else if (err && typeof err === 'object') {
    description = Object.keys(err).map(key => err[key].errors.map(e => e.message).join('\n')).join('\n')
  }
  notification.error({
    message: 'Fehler',
    description,
  });
}
export const onSuccess = (message, description) => {
  notification.success({
    message,
    description,
  });
}


