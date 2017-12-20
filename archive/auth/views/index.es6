import React from 'react';
import { Switch, Match, createUpdateQuery } from 'olymp-router';
import { connect } from 'react-redux';
import AuthRegister from './register';
import AuthLogin from './login';
import AuthConfirm from './confirm';
import AuthForgot from './forgot';
import AuthReset from './reset';
import AuthStatus from './status';

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
  const inQuery = key => query && query[key] !== undefined;

  return (
    <Switch>
      <Match
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
      <Match
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
      <Match
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
      <Match
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
      <Match
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
      <Match
        match={inQuery('status-forgot')}
        render={() => (
          <AuthStatus
            isOpen
            text={texts.forgot}
            onClose={() => updateQuery({ 'status-forgot': undefined })}
          />
        )}
      />
      <Match
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
