import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot, AuthStatus } from 'olymp/auth';

export default withRouter(({ copyright, query, router, pathname, register }) => (
  <div>
    <AuthLogin isOpen={query.login !== undefined} email={query.login} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthRegister extraFields={register} isOpen={query.register !== undefined} email={query.register} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { 'status-register': email } })} />
    <AuthForgot isOpen={query.forgot !== undefined} email={query.forgot} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { 'status-forgot': email } })} />
    <AuthReset isOpen={query.reset !== undefined} token={query.reset} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { login: email } })} />
    <AuthConfirm isOpen={query.confirm !== undefined} token={query.confirm} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { login: email } })} />
    <AuthStatus isOpen={query['status-forgot'] !== undefined} text={`Wir haben eine E-Mail an ${query['status-forgot']} geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.`} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthStatus isOpen={query['status-register'] !== undefined} text={`Wir haben eine E-Mail an ${query['status-register']} geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschließen.`} pathname={pathname} onClose={() => router.push(pathname)} />
  </div>
));
