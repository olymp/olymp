import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Button, Form, Input } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { Panel } from 'olymp-fela';
import { onError, onSuccess, onEnterFocus, layout } from 'olymp-utils';
import withAuth from '../with-auth';
import Modal from '../modal';

@graphql(
  gql`
    query invitationList {
      items: invitationList {
        id
        name
        email
      }
    }
  `,
  {
    options: ({ isOpen }) => ({ skip: !isOpen }),
  },
)
export default class AuthInvitations extends Component {
  static defaultProps = { data: {} };
  state = { search: '' };
  ok = () => {
    const { auth, onClose, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      const user = { ...values };
      auth
        .save(user)
        .then(({ name }) => {
          onSuccess('Das Profil wurde gespeichert');
          onClose();
        })
        .catch(onError);
    });
  };

  render() {
    const { id, isOpen, pathname, onClose, data } = this.props;
    const { search } = this.state;

    let items = data.items || [];
    if (search) {
      items = items.filter(
        ({ name }) =>
          name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1,
      );
    }

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        width="auto"
        padding={0}
        title="Einladungen"
        subtitle="Einladungen sehen und verschicken"
      >
        <AuthInviationDetail id={null} />
      </Modal>
    );
  }
}

@withAuth
@graphql(
  gql`
    query invitation($id: String) {
      item: invitation(id: $id) {
        id
        name
        email
      }
    }
  `,
  {
    options: ({ id }) => ({
      fetchPolicy: !id ? 'cache-only' : undefined,
      variables: { id },
    }),
  },
)
@Form.create()
class AuthInviationDetail extends Component {
  ok = () => {
    const { auth, form, data } = this.props;
    const item = data.item || {};
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      const invitation = { ...item, ...values };
      delete invitation.__typename;
      auth
        .invitation(invitation)
        .then(({ name }) => {
          onSuccess('Das Profil wurde gespeichert');
        })
        .catch(onError);
    });
  };

  render() {
    const { form, saving, pathname, data } = this.props;
    const { getFieldDecorator } = form;
    const item = data.item || {};

    return (
      <Panel minWidth={560} margin="0 30px" padding={16}>
        <Form.Item key="name" label="Name" {...layout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              { required: true, message: 'Bitte geben Sie Ihren Namen an' },
            ],
          })(
            <Input
              type="text"
              placeholder="Name"
              onKeyPress={onEnterFocus(() => this.mail)}
            />,
          )}
        </Form.Item>
        <Form.Item key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
            ],
          })(
            <Input
              type="email"
              placeholder="E-Mail"
              onKeyPress={onEnterFocus(() => this.pw1)}
              ref={x => (this.mail = x)}
              addonAfter={<FaEnvelope size={10} />}
            />,
          )}
        </Form.Item>
        <Button onClick={this.ok}>Speichern</Button>
      </Panel>
    );
  }
}
