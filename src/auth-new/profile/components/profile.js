import React, { Component } from 'react';
import { withAuth } from 'olymp';
import { Form } from 'antd';
import { onError, onSuccess } from '../../views/base';

export default (WrappedComponent) => {
  @withAuth
  @Form.create()
  class AuthProfile extends Component {
    ok = () => {
      const { auth, onClose, form } = this.props;

      form.validateFields((err, values) => {
        if (err) return onError(err);

        const user = { ...auth.user, ...values };
        delete user.__typename;

        auth.save(user).then(() => {
          onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
          onClose();
        }).catch(onError);
      });
    }

    render() {
      const { form, auth, pathname, isOpen, onClose } = this.props;

      return (
        <WrappedComponent form={form} title="Profil" onOk={this.ok} auth={auth} pathname={pathname} isOpen={isOpen} onClose={onClose} />
      );
    }
  }

  return AuthProfile;
};
