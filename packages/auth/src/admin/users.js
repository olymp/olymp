import React, { Component } from 'react';
import { withAuth } from 'olymp';
import { createComponent } from 'olymp-fela';
import { SplitView, Sidebar, Container, List } from 'olymp-ui';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { EnvelopeO } from 'olymp-icons';
import { onError, onSuccess, onEnterFocus } from '../views/base';
import AuthTotp from './totp';

const layout = { labelCol: { span: 10 }, wrapperCol: { span: 14 } };

export const H1 = createComponent(
  ({ theme }) => ({
    color: theme.color,
    textAlign: 'center',
    fontWeight: 200,
  }),
  'h1',
  p => Object.keys(p)
);

export const H3 = createComponent(
  ({ theme }) => ({
    textAlign: 'center',
    fontWeight: 200,
  }),
  'h3',
  p => Object.keys(p)
);

export const FormItem = createComponent(
  ({ theme }) => ({
    marginY: theme.space3,
    '& .ant-form-item-control': {
      '> *': {
        width: '100%',
      },
    },
  }),
  Form.Item,
  p => Object.keys(p)
);

@withAuth
@Form.create()
export default class AuthProfile extends Component {
  state = { totp: false };

  ok = () => {
    const { auth, form, data } = this.props;
    const item = data.item || {};
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      const user = { ...item, ...values };
      delete user.__typename;
      auth
        .save(user)
        .then(({ name }) => {
          onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
        })
        .catch(onError);
    });
  };

  render() {
    const { form, auth, pathname, extraFields, deviceWidth } = this.props;
    const { totp } = this.state;

    console.log(this.props);

    return (
      <SplitView deviceWidth={deviceWidth}>
        <Sidebar title="links" subtitle="links">
          <List.Item
            to={{ pathname, query: { '@totp': null } }}
            label="Allgemeine Informationen"
          />
          <List.Item
            to={{ pathname, query: { '@totp': null } }}
            label="Zwei-Faktor-Authentifizierung"
          />
        </Sidebar>

        <Container>
          <H1>{auth.user.name}</H1>
          <H3>Profil bearbeiten</H3>

          <Form onSubmit={this.ok}>
            <FormItem key="name" label="Name" {...layout}>
              {form.getFieldDecorator('name', {
                initialValue: auth.user && auth.user.name,
                rules: [
                  { required: true, message: 'Bitte geben Sie Ihren Namen an' },
                ],
              })(
                <Input
                  type="text"
                  placeholder="Name"
                  onKeyPress={onEnterFocus(() => this.mail)}
                  size="large"
                />
              )}
            </FormItem>
            <FormItem key="email" label="E-Mail" {...layout}>
              {form.getFieldDecorator('email', {
                initialValue: auth.user && auth.user.email,
                rules: [
                  {
                    required: true,
                    message: 'Bitte geben Sie Ihre E-Mail an!',
                  },
                ],
              })(
                <Input
                  type="email"
                  placeholder="E-Mail"
                  onKeyPress={onEnterFocus(() => this.pw1)}
                  ref={x => (this.mail = x)}
                  size="large"
                  addonAfter={<EnvelopeO size={10} />}
                />
              )}
            </FormItem>
            {/* <Form.Item key="password" label="Passwort" {...layout}>
            {form.getFieldDecorator('password', {
              rules: [{ validator: this.checkConfirm }],
            })(<Input type="password" placeholder="Passwort" />)}
          </Form.Item> */}
            <FormItem key="totp" label="2-Faktor-Authentifizierung" {...layout}>
              <Checkbox
                checked={totp}
                onChange={({ target: { checked } }) =>
                  this.setState({ totp: checked })}
                disabled
              >
                <Spin size="small" /> {totp ? 'Aktiviert' : 'Deaktiviert'}
              </Checkbox>

              {totp && <AuthTotp {...this.props} isOpen={totp} />}
            </FormItem>
            {extraFields
              ? extraFields({
                layout,
                getFieldDecorator: form.getFieldDecorator,
                state: this.state,
                setState: this.setState,
              })
              : null}

            <Button type="primary" onClick={this.ok}>Save</Button>
          </Form>
        </Container>
      </SplitView>
    );
  }
}
