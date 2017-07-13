import React, { Component } from 'react';
import withAuth from '../with-auth';
import { createComponent, Grid } from 'olymp-fela';
import { Container } from 'olymp-ui';
import { Form, Input, Button, Checkbox } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { onError, onSuccess, onEnterFocus } from '../views/base';

const layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };

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
  ok = () => {
    const { form, auth } = this.props;
    const user = this.props.user || auth.user;

    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      const newUser = { ...user, ...values };
      delete newUser.__typename;

      auth
        .save(newUser)
        .then(({ name }) => {
          onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
          // form.resetFields(); // Workaround
          // form.setFields({ name, email: newUser.email });
        })
        .catch(onError);
    });
  };

  render() {
    const { form, extraFields, auth } = this.props;
    const user = (auth.user.isAdmin && this.props.user) || auth.user;

    return (
      <Container>
        <H1>{user.name}</H1>
        <H3>Profil bearbeiten</H3>

        <Form onSubmit={this.ok}>
          <FormItem key="name" label="Name" {...layout}>
            {form.getFieldDecorator('name', {
              initialValue: user.name,
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
              initialValue: user.email,
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
                ref={x => (this.mail = x)}
                size="large"
                addonAfter={<FaEnvelope size={10} />}
              />
            )}
          </FormItem>
          {auth.user.isAdmin &&
            <FormItem key="isAdmin" label="Administrator" {...layout}>
              <Checkbox checked={user.isAdmin} disabled>
                {user.isAdmin ? 'ist Administrator' : 'ist kein Administrator'}
              </Checkbox>
              {/* form.getFieldDecorator('isAdmin', {
                initialValue: user.isAdmin,
                valuePropName: 'checked',
              })(
                <Checkbox disabled={auth.user.id === user.id}>
                  {user.isAdmin
                    ? 'ist Administrator'
                    : 'ist kein Administrator'}
                </Checkbox>
              ) */}
            </FormItem>}
          {/* <Form.Item key="password" label="Passwort" {...layout}>
            {form.getFieldDecorator('password', {
              rules: [{ validator: this.checkConfirm }],
            })(<Input type="password" placeholder="Passwort" />)}
          </Form.Item>
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
            </FormItem> */}
          {extraFields
            ? extraFields({
              layout,
              getFieldDecorator: form.getFieldDecorator,
              state: this.state,
              setState: this.setState,
            })
            : null}

          <Grid size={24}>
            <Grid.Item offsetMedium={7} medium={17}>
              <Button type="primary" onClick={this.ok}>Speichern</Button>&nbsp;
              {auth.user.id !== user.id &&
                <Button disabled onClick={this.ok}>Löschen</Button>}
            </Grid.Item>
          </Grid>
        </Form>
      </Container>
    );
  }
}
