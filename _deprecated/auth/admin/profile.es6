import React, { Component } from 'react';
import {
  createComponent,
  Grid,
  Avatar,
  SectionHeading,
  Container,
} from 'olymp-fela';
import { Form, Input, Button, Checkbox } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { onError, onSuccess, onEnterFocus, layout } from 'olymp-utils';
import withAuth from '../with-auth';

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
  p => Object.keys(p),
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
          onSuccess('Das Profil wurde gespeichert');
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
      <Container size="small">
        <SectionHeading description="Profil bearbeiten">
          {user.name}
        </SectionHeading>

        <Form onSubmit={this.ok}>
          <FormItem key="name" label="Name" {...layout}>
            {form.getFieldDecorator('name', {
              initialValue: user.name,
              rules: [
                {
                  required: true,
                  message: 'Bitte geben Sie Ihren Namen an',
                },
              ],
            })(
              <Input
                type="text"
                placeholder="Name"
                onKeyPress={onEnterFocus(() => this.mail)}
              />,
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
                addonAfter={<FaEnvelope size={10} />}
              />,
            )}
          </FormItem>
          <FormItem key="avatar" label="Avatar" {...layout}>
            <a
              href="https://en.gravatar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar
                email={user.email}
                name={user.name}
                size={100}
                default="blank"
              />
            </a>
          </FormItem>
          {auth.user.isAdmin && (
            <FormItem key="isAdmin" label="Administrator" {...layout}>
              <Checkbox checked={user.isAdmin} disabled>
                {user.isAdmin ? 'ist Administrator' : 'ist kein Administrator'}
              </Checkbox>
            </FormItem>
          )}
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
              <Button type="primary" onClick={this.ok}>
                Speichern
              </Button>&nbsp;
              {auth.user.id !== user.id && (
                <Button disabled onClick={this.ok}>
                  Löschen
                </Button>
              )}
            </Grid.Item>
          </Grid>
        </Form>
      </Container>
    );
  }
}
