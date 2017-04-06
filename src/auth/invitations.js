import React, { Component } from 'react';
import { Link, graphql, gql, withAuth } from 'olymp';
import { Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess } from './base';
import { Modal, SplitView, List, Panel } from 'olymp/ui';

@graphql(gql`
  query invitationList {
    items: invitationList { id, name, email }
  }
`)
export default class AuthInvitations extends Component {
  state = { search: '' };
  ok = () => {
    const { auth, onClose, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      const user = {...values};
      auth.save(user).then(({ name }) => {
        onSuccess('Gespeichert', `Das Profil wurde gespeichert`);
        onClose();
      }).catch(onError);
    });
  }

  render() {
    const { id, isOpen, email, form, saving, pathname, onClose, data } = this.props;
    const { search } = this.state;

    let items = (data.items || []);
    if (search) items = items.filter(({ name }) => name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    return (
      <Modal isOpen={isOpen} onClose={onClose} width="auto" padding={0} title="Einladungen" subtitle="Einladungen sehen und verschicken">
        <SplitView>
          <List side="left">
            <List.Title buttons={
              <Button size="small" onClick={() => console.log()}>
                <Link to={{ pathname, query: { '@invitations': 'new' } }}>
                  <Icon type="plus" />
                </Link>
              </Button>
            }>Einladungen</List.Title>
            <List.Filter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />
            {items.map(item => <List.Item to={{ pathname, query: { '@invitations': item.id } }} key={item.id} label={item.name} description="Benutzer" />)}
          </List>
          {id && id === 'new' && <AuthInviationDetail id={null} />}
          {id && id !== 'new' && <AuthInviationDetail key={id} id={id} />}
        </SplitView>
        <Modal.Links>
          <Link to={{ pathname, query: { '@invitations': null, '@users': undefined } }}>Benutzer verwalten</Link>
        </Modal.Links>
      </Modal>
    );
  }
}

@withAuth
@graphql(gql`
  query invitation($id: String) {
    item: invitation(id: $id) { id, name, email }
  }
`, {
  options: ({ id }) => ({
    fetchPolicy: !id ? 'cache-only' : undefined,
    variables: { id }
  }),
})
@Form.create()
class AuthInviationDetail extends Component {
  ok = () => {
    const { auth, form, data } = this.props;
    const item = data.item || {};
    form.validateFields((err, values) => {
      if (err) return onError(err);
      const invitation = { ...item, ...values };
      delete invitation.__typename;
      auth.invitation(invitation).then(({ name }) => {
        onSuccess('Gespeichert', `Das Profil wurde gespeichert`);
      }).catch(onError);
    });
  }

  render() {
    const { form, saving, pathname, data } = this.props;
    const { getFieldDecorator } = form;
    const item = data.item || {};

    return (
      <Panel minWidth={560} margin="0 30px" padding={16}>
        <Form.Item key="name" label="Name" {...layout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [{ required: true, message: 'Bitte geben Sie Ihren Namen an' }],
          })(<Input type="text" placeholder="Name" onKeyPress={onEnterFocus(() => this.mail)} size="large" />)}
        </Form.Item>
        <Form.Item key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(<Input type="email" placeholder="E-Mail" onKeyPress={onEnterFocus(() => this.pw1)} ref={x => this.mail = x} size="large" addonAfter={<EnvelopeO size={10} />} />)}
        </Form.Item>
        <Button onClick={this.ok}>Save</Button>
      </Panel>
    );
  }
}
