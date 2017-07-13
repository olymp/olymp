import React from 'react';
import { withRouter } from 'olymp-utils';
import {
  AuthRegister,
  AuthLogin,
  AuthConfirm,
  AuthReset,
  AuthForgot,
  AuthStatus,
} from './views';
import {
  AuthInvitations,
} from './admin';

export default withRouter((props) => {
  const { query, router, pathname, register } = props;
  const texts = {
    forgot: `Wir haben eine E-Mail an ${query[
    'status-forgot'
    ]} geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.`,
    register: `Wir haben eine E-Mail an ${query[
    'status-register'
    ]} geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschließen.`,
  };
  const redirect = newQuery =>
    router.push({ pathname, query: { ...query, ...newQuery } });
  const inQuery = key => query[key] !== undefined;
  const p = { pathname, onClose: () => router.push(pathname) };

  return (
    <div>
      <AuthInvitations
        {...p}
        isOpen={inQuery('invitations')}
      />
      <AuthLogin
        {...p}
        isOpen={inQuery('login')}
        email={query.login}
        totp={inQuery('totp')}
        onTotp={() => redirect({ totp: null })}
      />
      <AuthRegister
        {...p}
        isOpen={inQuery('register')}
        token={query.register}
        onOk={({ email, token }) =>
          token
            ? redirect({ register: undefined, login: email })
            : redirect({ register: undefined, 'status-register': email })}
        extraFields={register}
      />
      <AuthForgot
        {...p}
        isOpen={inQuery('forgot')}
        email={query.forgot}
        onOk={({ email }) =>
          redirect({ forgot: undefined, 'status-forgot': email })}
      />
      <AuthReset
        {...p}
        isOpen={inQuery('reset')}
        token={query.reset}
        onOk={({ email }) => redirect({ reset: undefined, login: email })}
      />
      <AuthConfirm
        {...p}
        isOpen={inQuery('confirm')}
        token={query.confirm}
        onOk={({ email }) => redirect({ confirm: undefined, login: email })}
      />
      <AuthStatus
        {...p}
        isOpen={inQuery('status-forgot')}
        text={texts.forgot}
      />
      <AuthStatus
        {...p}
        isOpen={inQuery('status-register')}
        text={texts.register}
      />
    </div>
  );
});
