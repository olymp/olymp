import React from 'react';
import { AltSwitch, AltRoute, withRouter } from 'olymp-router';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot, AuthStatus } from './views';
import { AuthInvitations } from './admin';
import withAuth from './with-auth';

export default withAuth(
  withRouter((props) => {
    const { query, router, pathname, register, force, auth } = props;
    const texts = {
      forgot: `Wir haben eine E-Mail an ${query[
        'status-forgot'
      ]} geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.`,
      register: `Wir haben eine E-Mail an ${query[
        'status-register'
      ]} geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschließen.`,
    };
    const redirect = newQuery => router.push({ pathname, query: { ...query, ...newQuery } });
    const inQuery = key => query[key] !== undefined;
    const p = { pathname, onClose: () => router.push(pathname) };

    return (
      <AltSwitch>
        <AltRoute match={inQuery('invitations')} render={() => <AuthInvitations isOpen {...p} />} />
        <AltRoute
          match={inQuery('login')}
          render={() =>
            (<AuthLogin
              {...p}
              isOpen
              email={query.login}
              totp={inQuery('totp')}
              onTotp={() => redirect({ totp: null })}
            />)}
        />
        <AltRoute
          match={inQuery('register')}
          render={() =>
            (<AuthRegister
              {...p}
              isOpen
              token={query.register}
              onOk={({ email, token }) =>
                (token
                  ? redirect({ register: undefined, login: email })
                  : redirect({ register: undefined, 'status-register': email }))}
              extraFields={register}
            />)}
        />
        <AltRoute
          match={inQuery('forgot')}
          render={() =>
            (<AuthForgot
              {...p}
              isOpen
              email={query.forgot}
              onOk={({ email }) => redirect({ forgot: undefined, 'status-forgot': email })}
            />)}
        />
        <AltRoute
          match={inQuery('reset')}
          render={() =>
            (<AuthReset
              {...p}
              isOpen
              token={query.reset}
              onOk={({ email }) => redirect({ reset: undefined, login: email })}
            />)}
        />
        <AltRoute
          match={inQuery('confirm')}
          render={() =>
            (<AuthConfirm
              {...p}
              isOpen
              token={query.confirm}
              onOk={({ email }) => redirect({ confirm: undefined, login: email })}
            />)}
        />
        <AltRoute
          match={inQuery('status-forgot')}
          render={() => <AuthStatus {...p} isOpen text={texts.forgot} />}
        />
        <AltRoute
          match={inQuery('status-register')}
          render={() => <AuthStatus {...p} isOpen text={texts.register} />}
        />
        {force &&
          !auth.user &&
          <AltRoute
            render={() =>
              (<AuthLogin
                {...p}
                isOpen
                email={query.login}
                totp={inQuery('totp')}
                onTotp={() => redirect({ totp: null })}
              />)}
          />}
      </AltSwitch>
    );
  }),
);
