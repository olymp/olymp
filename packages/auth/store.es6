import { observable, computed, autorun } from 'mobx';
import { gql } from 'react-apollo';

const baseAttributes = 'id, name, email, isAdmin, token';

export default class AuthStore {
  @observable verifying = !process.env.SSR;
  @observable error = null;
  @observable user = null;
  @computed
  get isAuthenticated() {
    if (!this.user) {
      return false;
    }
    return true;
  }
  @computed
  get isAdmin() {
    if (!this.user) {
      return false;
    }
    return this.user.isAdmin;
  }

  constructor({ attributes, client }) {
    this.attributes = attributes || baseAttributes;
    this.client = client;
    if (typeof localStorage !== 'undefined') {
      this.verify();
      autorun(() => {
        if (this.user && this.user.token) {
          localStorage.setItem('token', this.user.token);
        }
      });
    }
  }

  verify = () =>
    this.client
      .query({
        query: gql`
          query verify {
            user: verify {
              ${this.attributes}
            }
          }
        `,
      })
      .then(({ data, errors }) => {
        this.verifying = false;
        if (errors) {
          throw errors[0];
        }
        if (data.user) {
          this.user = data.user;
        } else {
          this.user = null;
        }
        return data.user;
      });
  invitation = (invitation, id) =>
    this.client
      .mutate({
        mutation: gql`
          mutation invitation($invitation: InvitationInput) {
            invitation(input: $invitation) {
              id
              name
              email
            }
          }
        `,
        variables: { invitation },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.invitation;
      });
  save = (user, id) =>
    this.client
      .mutate({
        mutation: gql`
        mutation user($user: UserInput, $id: String) {
          user(input: $user, id: $id) {
            ${this.attributes}
          }
        }
      `,
        variables: { user, id: user.id },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.user;
      });
  logout = () =>
    this.client
      .mutate({
        mutation: gql`
          mutation logout {
            logout
          }
        `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        this.user = null;
      });
  forgot = email =>
    this.client
      .mutate({
        mutation: gql`
        mutation forgot {
          forgot(email:"${email}")
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.forgot;
      });
  reset = (token, password) =>
    this.client
      .mutate({
        mutation: gql`
        mutation reset {
          reset(token:"${token}", password:"${password}") {
            email
          }
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.reset;
      });
  confirm = token =>
    this.client
      .mutate({
        mutation: gql`
        mutation confirm {
          confirm(token:"${token}") {
            email
          }
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.confirm;
      });
  login = (email, password, totp) =>
    this.client
      .mutate({
        mutation: gql`
        mutation login {
          user: login(email:"${email}", password:"${password}"${totp ? `, totp:"${totp}"` : ''}) {
            ${this.attributes}
          }
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        this.user = data.user;
        return data.user;
      });
  register = (user, password, token) =>
    this.client
      .mutate({
        mutation: gql`
        mutation register($user: UserInput, $password: String, $token: String) {
          register(input: $user, password: $password, token: $token) {
            ${this.attributes}
          }
        }
      `,
        variables: { user, password, token },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.register;
      });
  checkToken = key =>
    this.client
      .mutate({
        query: gql`
        query checkToken {
          checkToken(token:"${key}")
        }
      `,
      })
      .then(({ data }) => data.checkToken);
  totpConfirm = (token, totp) =>
    this.client
      .mutate({
        mutation: gql`
          mutation totpConfirm($token: String, $totp: String) {
            totpConfirm(token: $token, totp: $totp)
          }
        `,
        variables: { token, totp },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        if (!data.totpConfirm) {
          throw new Error('Could not activate TOTP');
        }
        return data.totpConfirm;
      });
}
