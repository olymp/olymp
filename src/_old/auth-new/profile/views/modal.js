import React from 'react';
import { Modal } from 'olymp';
import Base from '../../views/base';
import AuthProfile from '../components';

const AuthProfileModal = ({
  isOpen,
  onClose,
  form,
  onOk,
  auth,
  extraFields,
  pathname,
}) =>
  <Base
    isOpen={isOpen}
    title="Profil"
    okText="Speichern"
    onOk={onOk}
    onCancel={onClose}
  >
    <AuthProfile.Form form={form} extraFields={extraFields} auth={auth} />
    <Modal.Links>
      <AuthProfile.Extra pathname={pathname} />
    </Modal.Links>
  </Base>;
export default AuthProfile(AuthProfileModal);
