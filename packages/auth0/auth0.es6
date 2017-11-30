import Auth0Lock from 'auth0-lock';

export default class Auth {
  constructor(
    {
      title = 'olymp',
      domain = process.env.AUTH0_DOMAIN,
      clientID = process.env.AUTH0_CLIENT_ID,
      color = 'green',
      logo = 'http://res.cloudinary.com/djyenzorc/image/upload/v1508057396/qkg/ci3onnwcl2isotkvsvrp.png',
    } = {},
    handler,
  ) {
    this.handler = handler;
    if (typeof location !== 'undefined') {
      this.lock = new Auth0Lock(clientID, domain, {
        languageDictionary: {
          title,
        },
        language: 'de',
        allowAutocomplete: true,
        theme: {
          logo,
          primaryColor: color,
        },
        auth: {
          redirect: false,
        },
      });
      this.lock.on('authenticated', this.handleAuthentication);
      if (
        this.isAuthenticated() &&
        localStorage.getItem('profile') &&
        handler
      ) {
        handler(JSON.parse(localStorage.getItem('profile')));
      }
    }
  }

  handleAuthentication = authResult => {
    if (authResult && authResult.accessToken) {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return;
        }
        this.setSession({ ...authResult, profile });
        this.lock.hide();
        this.handler(profile);
      });
    }
  };

  setSession = ({ expiresIn, accessToken, profile }) => {
    const expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('expires_at', expiresAt);
  };

  login = () => {
    this.lock.show();
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    this.handler(null);
  };

  isAuthenticated = () => {
    const exp = localStorage.getItem('expires_at');
    if (!exp) {
      return false;
    }
    const expiresAt = JSON.parse(exp);
    return new Date().getTime() < expiresAt;
  };
}
