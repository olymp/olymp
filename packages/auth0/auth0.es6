import auth0 from 'auth0-js';

export default class Auth {
  constructor(
    {
      domain = process.env.AUTH0_DOMAIN,
      clientID = process.env.AUTH0_CLIENT_ID,
    } = {},
  ) {
    if (typeof location !== 'undefined') {
      this.auth0 = new auth0.WebAuth({
        domain,
        clientID,
        redirectUri: `${location.protocol}//${location.host}/auth`,
        audience: `https://${domain}/userinfo`,
        responseType: 'token id_token',
        scope: 'openid',
      });
    }
  }

  handleAuthentication(cb) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // history.replace('/home');
      } else if (err) {
        // history.replace('/home');
        console.log(err);
      }
      cb();
    });
  }

  setSession = authResult => {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  };

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };
}
