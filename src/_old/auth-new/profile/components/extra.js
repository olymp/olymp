import React from 'react';
import { Link } from 'olymp';

const AuthProfileExtra = ({ pathname }) =>
  (<Link to={{ pathname, query: { totp: null, profile: undefined } }}>
    2-Faktor Authentifizierung
  </Link>);
export default AuthProfileExtra;
