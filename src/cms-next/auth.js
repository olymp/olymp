import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot } from 'olymp/auth';

export default withRouter(({ query, router, pathname }) => (
  <div>
    <AuthLogin isOpen={query.login !== undefined} email={query.email} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthRegister isOpen={query.register !== undefined} email={query.register} pathname={pathname} onClose={() => router.push(pathname)} />
    {/*<AuthConfirm isOpen={query.confirm !== undefined} token={query.confirm} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthRegister isOpen={query.register !== undefined} email={query.register} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthLogin isOpen={query.login !== undefined} email={query.email} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthForgot isOpen={query.forgot !== undefined} email={query.forgot} pathname={pathname} onClose={() => router.push(pathname)} />
    <AuthReset isOpen={query.reset !== undefined} token={query.reset} pathname={pathname} onClose={() => router.push(pathname)} />*/}
  </div>
));
