import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot } from 'olymp/auth';

const getModal = ({ query, router, pathname }) => {
  if (query && query.confirm !== undefined) {
    return <AuthConfirm token={query.confirm} pathname={pathname} onClose={() => router.push(pathname)} />;
  }
  if (query && query.register !== undefined) {
    return <AuthRegister email={query.register} pathname={pathname} onClose={() => router.push(pathname)} />;
  }
  if (query && query.login !== undefined) {
    return <AuthLogin email={query.email} pathname={pathname} onClose={() => router.push(pathname)} />;
  }
  if (query && query.forgot !== undefined) {
    return <AuthForgot email={query.forgot} pathname={pathname} onClose={() => router.push(pathname)} />;
  }
  if (query && query.reset !== undefined) {
    return <AuthReset token={query.reset} pathname={pathname} onClose={() => router.push(pathname)} />;
  } return null;
}

export default withRouter(({ query, router, pathname }) => {
  const modal = getModal({ query, router, pathname });
  return modal;
});
