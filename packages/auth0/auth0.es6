
export default class Auth {
  constructor(config, handler) {
    this.config = config;
    this.handler = handler;
    if (process.env.IS_ELECTRON) {
      this.config.auth = {
        redirect: false,
        sso: false,
      };
    }
    if (
      typeof localStorage !== 'undefined' &&
      this.isAuthenticated() &&
      localStorage.getItem('profile') &&
      handler
    ) {
      handler(JSON.parse(localStorage.getItem('profile')));
    }
  }

  setSession = ({ expiresIn, accessToken, profile }) => {
    const expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('expires_at', expiresAt);
  };

  login = login => {
    require.ensure(
      [],
      require => {
        const Auth0Lock = require('auth0-lock');

        const {
          title = 'olymp',
          domain = process.env.AUTH0_DOMAIN,
          clientID = process.env.AUTH0_CLIENT_ID,
          color = 'green',
          logo = 'http://res.cloudinary.com/djyenzorc/image/upload/v1508057396/qkg/ci3onnwcl2isotkvsvrp.png',
        } = this.config;

        const lock = new Auth0Lock(clientID, domain, {
          languageDictionary: {
            title,
          },
          language: 'de',
          theme: {
            logo,
            primaryColor: color,
          },
        });
        let closing = false;
        lock.on('authenticated', authResult => {
          if (!authResult || !authResult.accessToken) {
            return;
          }
          lock.getUserInfo(authResult.accessToken, (error, profile) => {
            if (error) {
              return;
            }
            this.setSession({ ...authResult, profile });
            closing = true;
            lock.hide();
            this.handler(profile);
          });
        });
        lock.on('hide', () => {
          if (closing) {
            return;
          }
          this.handler(false);
        });
        if (login === false) {
          return;
        }
        lock.show();
      },
      'auth0',
    )
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
