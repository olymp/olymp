import React, { Children } from 'react';
import { createComponent } from 'olymp-fela';
import { Link } from 'olymp-router';
import { Modal } from 'olymp-ui';
import { notification } from 'antd';

const def = ({
  showLogo,
  isOpen,
  title,
  pathname,
  onCancel,
  onOk,
  cancelText,
  okText,
  loading,
  saving,
  ...props
}) => {
  let links = null;
  const children = Children.toArray(props.children).filter((child) => {
    if (child.type && child.type === def.Links) {
      links = child;
      return false;
    }

    return true;
  });

  return (
    <Modal
      showLogo={showLogo !== false}
      isOpen={isOpen}
      title={title}
      onCancel={onCancel}
      maskClosable={false}
      loading={loading}
    >
      {children}
      <Modal.Footer>
        <Modal.Button onClick={onCancel}>{cancelText || 'Abbruch'}</Modal.Button>
        {onOk && (
          <Modal.Button type="primary" onClick={onOk} loading={saving}>
            {okText || title}
          </Modal.Button>
        )}
      </Modal.Footer>
      <Modal.Copyright>
        {links && <def.Links>{links}</def.Links>}
        <Link to={{ pathname, query: { register: null, login: undefined } }}>
          {'made with ❤ by olymp'}
        </Link>
      </Modal.Copyright>
    </Modal>
  );
};
def.Links = createComponent(
  ({ theme }) => ({
    textAlign: 'center',
    '& a': {
      display: 'inline-block',
      minWidth: 200,
      paddingBottom: theme.space2,
      color: 'white',
      opacity: 0.3,
      onHover: {
        opacity: 1,
      },
    },
  }),
  'div',
);

export default def;

export const onError = (err) => {
  let description;
  if (err && err.message) {
    description = err.message;
  } else if (err && typeof err === 'object') {
    description = Object.keys(err)
      .map(key => err[key].errors.map(e => e.message).join('\n'))
      .join('\n');
  }
  notification.error({
    message: 'Fehler',
    description,
  });
};

export const onSuccess = (message, description) => {
  notification.success({
    message,
    description,
  });
};

export const layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };

export const onEnterFocus = ref => (e) => {
  if (e.key === 'Enter') {
    return ref() && ref().refs && ref().refs.input.focus();
  }
  return false;
};

export const onEnterOk = onOk => (e) => {
  if (e.key === 'Enter') {
    onOk();
  }
};
