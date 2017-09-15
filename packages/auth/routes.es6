import React from 'react';
import { Switch, Route, createUpdateQuery } from 'olymp-router';
import { connect } from 'react-redux';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot, AuthStatus } from './views';
import { AuthInvitations } from './admin';

export default connect(
  ({ location }) => ({
    pathname: location.pathname,
    query: location.query,
  }),
  dispatch => ({
    updateQuery: createUpdateQuery(dispatch),
  }),
)((props) => {
  const { query, register, updateQuery } = props;
  const texts = {
    forgot: `Wir haben eine E-Mail an ${query[
      'status-forgot'
    ]} geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.`,
    register: `Wir haben eine E-Mail an ${query[
      'status-register'
    ]} geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschließen.`,
  };
  const inQuery = key => query[key] !== undefined;

  return (
    <Switch>
      <Route match={inQuery('invitations')} render={() => <AuthInvitations isOpen {...p} />} />
      <Route
        match={inQuery('login')}
        render={() => (
          <AuthLogin
            isOpen
            email={query.login}
            totp={inQuery('totp')}
            onClose={() => updateQuery({ totp: undefined, login: undefined })}
            onTotp={() => updateQuery({ totp: null })}
          />
        )}
      />
      <Route
        match={inQuery('register')}
        render={() => (
          <AuthRegister
            isOpen
            token={query.register}
            onClose={() => updateQuery({ register: undefined })}
            onOk={({ email, token }) =>
              (token
                ? updateQuery({ register: undefined, login: email })
                : updateQuery({ register: undefined, 'status-register': email }))}
            extraFields={register}
          />
        )}
      />
      <Route
        match={inQuery('forgot')}
        render={() => (
          <AuthForgot
            isOpen
            email={query.forgot}
            onClose={() => updateQuery({ forgot: undefined })}
            onOk={({ email }) => updateQuery({ forgot: undefined, 'status-forgot': email })}
          />
        )}
      />
      <Route
        match={inQuery('reset')}
        render={() => (
          <AuthReset
            isOpen
            token={query.reset}
            onClose={() => updateQuery({ reset: undefined })}
            onOk={({ email }) => updateQuery({ reset: undefined, login: email })}
          />
        )}
      />
      <Route
        match={inQuery('confirm')}
        render={() => (
          <AuthConfirm
            isOpen
            token={query.confirm}
            onClose={() => updateQuery({ confirm: undefined })}
            onOk={({ email }) => updateQuery({ confirm: undefined, login: email })}
          />
        )}
      />
      <Route
        match={inQuery('status-forgot')}
        render={() => (
          <AuthStatus
            isOpen
            text={texts.forgot}
            onClose={() => updateQuery({ 'status-forgot': undefined })}
          />
        )}
      />
      <Route
        match={inQuery('status-register')}
        render={() => (
          <AuthStatus
            isOpen
            text={texts.register}
            onClose={() => updateQuery({ 'status-register': undefined })}
          />
        )}
      />
    </Switch>
  );
});
