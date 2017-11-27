import React, { Children } from 'react';
import { createComponent } from 'olymp-fela';
import { withTheme } from 'react-fela';
import { Link } from 'olymp-router';
import Form from 'olymp-ui/form';
import Modal from '../modal';

const def = withTheme(
  ({
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
    theme,
    version,
    ...props
  }) => {
    let links = null;
    const children = Children.toArray(props.children).filter(child => {
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
        noPortal
      >
        <Form>{children}</Form>
        <Modal.Footer>
          <Modal.Button onClick={onCancel}>
            {cancelText || 'Abbruch'}
          </Modal.Button>
          {onOk && (
            <Modal.Button type="primary" onClick={onOk} loading={saving}>
              {okText || title}
            </Modal.Button>
          )}
        </Modal.Footer>
        <Modal.Copyright>
          {links && <def.Links>{links}</def.Links>}
          <Link to={{ pathname, query: { register: null, login: undefined } }}>
            {theme.copyright || 'made with ❤ by olymp'}
          </Link>
        </Modal.Copyright>
      </Modal>
    );
  },
);
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
