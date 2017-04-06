import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot, AuthStatus, AuthProfile, AuthTotp, AuthUsers, AuthInvitations } from 'olymp/auth';

export default withRouter(({ copyright, query, router, pathname, register }) => (
  <div>
    <AuthLogin isOpen={query.login !== undefined} email={query.login} totp={query.totp !== undefined} pathname={pathname} onClose={() => router.push(pathname)} onTotp={() => router.push({ pathname, query: { ...query, totp: null } })} />
    <AuthRegister extraFields={register} isOpen={query.register !== undefined} token={query.register} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { 'status-register': email } })} />
    <AuthForgot isOpen={query.forgot !== undefined} email={query.forgot} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { 'status-forgot': email } })} />
    <AuthReset isOpen={query.reset !== undefined} token={query.reset} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { login: email } })} />
    <AuthConfirm isOpen={query.confirm !== undefined} token={query.confirm} pathname={pathname} onClose={() => router.push(pathname)} onOk={({ email }) => router.push({ pathname, query: { login: email } })} />
    <AuthStatus isOpen={query['status-forgot'] !== undefined} text={`Wir haben eine E-Mail an ${query['status-forgot']} geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.`} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthStatus isOpen={query['status-register'] !== undefined} text={`Wir haben eine E-Mail an ${query['status-register']} geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschließen.`} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthProfile isOpen={query.profile !== undefined} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthTotp isOpen={query.totp !== undefined && query.login === undefined} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthUsers isOpen={query['@users'] !== undefined} id={query['@users']} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthInvitations isOpen={query['@invitations'] !== undefined} id={query['@invitations']} pathname={pathname} onClose={() => router.push(pathname)} />
  </div>
));
