import React from 'react';
import wrap from './util';
import {
  AuthRegister,
  AuthLogin,
  AuthConfirm,
  AuthReset,
  AuthForgot,
  AuthStatus,
  AuthTotp,
} from '../views';
import { AuthUsers, AuthInvitations } from '../admin';
import { AuthProfileModal } from '../profile';

export const Profile = wrap(({ query, router, pathname, get }) =>
  <AuthProfileModal
    isOpen={get('profile', query) !== undefined}
    pathname={pathname}
    onClose={() => router.push(pathname)}
  />
);

export const Register = wrap(
  ({ query, router, pathname, register, get, set }) =>
    <AuthRegister
      extraFields={register}
      isOpen={get('register', query) !== undefined}
      token={get('register', query)}
      pathname={pathname}
      onClose={() => router.push(pathname)}
      onOk={({ email, token }) =>
        token
          ? router.push({ pathname, query: set('login', email) })
          : router.push({ pathname, query: set('status-register', email) })}
    />
);

export const Login = wrap(({ query, router, pathname, get, set }) =>
  <AuthLogin
    isOpen={get('login', query) !== undefined}
    email={get('login', query)}
    totp={get('totp', query) !== undefined}
    pathname={pathname}
    onClose={() => router.push(pathname)}
    onTotp={() => router.push({ pathname, query: set('totp', null, query) })}
  />
);

export const Confirm = wrap(({ query, router, pathname, get, set }) =>
  <AuthConfirm
    isOpen={get('confirm', query) !== undefined}
    token={get('confirm', query)}
    pathname={pathname}
    onClose={() => router.push(pathname)}
    onOk={({ email }) => router.push({ pathname, query: set('login', email) })}
  />
);

export const Reset = wrap(({ query, router, pathname, get, set }) =>
  <AuthReset
    isOpen={get('reset', query) !== undefined}
    token={get('reset', query)}
    pathname={pathname}
    onClose={() => router.push(pathname)}
    onOk={({ email }) => router.push({ pathname, query: set('login', email) })}
  />
);

export const Forgot = wrap(({ query, router, pathname, get, set }) =>
  <AuthForgot
    isOpen={get('forgot', query) !== undefined}
    email={get('forgot', query)}
    pathname={pathname}
    onClose={() => router.push(pathname)}
    onOk={({ email }) =>
      router.push({ pathname, query: set('status-forgot', email) })}
  />
);

export const StatusForgot = wrap(({ query, router, pathname, get }) =>
  <AuthStatus
    isOpen={get('status-forgot', query) !== undefined}
    text={`Wir haben eine E-Mail an ${get(
      'status-forgot',
      query
    )} geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.`}
    pathname={pathname}
    onClose={() => router.push(pathname)}
  />
);

export const StatusRegister = wrap(({ query, router, pathname, get }) =>
  <AuthStatus
    isOpen={get('status-register', query) !== undefined}
    text={`Wir haben eine E-Mail an ${get(
      'status-register',
      query
    )} geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschließen.`}
    pathname={pathname}
    onClose={() => router.push(pathname)}
  />
);

export const Totp = wrap(({ query, router, pathname, get }) =>
  <AuthTotp
    isOpen={
      get('totp', query) !== undefined && get('login', query) === undefined
    }
    pathname={pathname}
    onClose={() => router.push(pathname)}
  />
);

export const Users = wrap(({ query, router, pathname, get }) =>
  <AuthUsers
    isOpen={get('users', query) !== undefined}
    id={get('users', query)}
    pathname={pathname}
    onClose={() => router.push(pathname)}
  />
);

export const Invitations = wrap(({ query, router, pathname, get }) =>
  <AuthInvitations
    isOpen={get('invitations', query) !== undefined}
    id={get('invitations', query)}
    pathname={pathname}
    onClose={() => router.push(pathname)}
  />
);
