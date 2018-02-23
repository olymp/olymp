const clearOldNonces = () => {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('com.auth0.auth')) {
      localStorage.removeItem(key);
    }
  });
};

const { WebAuth } = require('auth0-js');

export default class Auth {
  constructor(config) {
    if (typeof window === 'undefined') {
      return;
    }
    this.config = {
      domain: config.domain || process.env.AUTH0_DOMAIN,
      clientID: config.clientID || process.env.AUTH0_CLIENT_ID,
      logoutUrl: config.logoutUrl || window.location.origin,
      // prompt: 'none',
      redirectUri:
        config.redirectUri ||
        process.env.AUTH0_REDIRECT_URI ||
        window.location.origin,
      responseType:
        config.responseType || process.env.AUTH0_RESPONSETYPE || 'token',
      audience: config.audience || process.env.AUTH0_AUDIENCE,
      scope: config.scope || process.env.AUTH0_SCOPE || 'openid email profile',
    };
  }

  currentUser = () => {
    if (this.isAuthenticated() && localStorage.getItem('profile')) {
      return JSON.parse(localStorage.getItem('profile'));
    } else {
      return null;
    }
  };

  setSession = ({ expiresIn, accessToken, profile }) => {
    const expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('expires_at', expiresAt);
    clearOldNonces();
  };

  getLock = () => {
    return new Promise(yay => {
      if (this.lock) {
        return yay(this.lock);
      }
      const auth = new WebAuth(this.config);
      yay(auth);
      /*require.ensure(
        [],
        require => {
          const { WebAuth } = require('auth0-js');
          const auth = new WebAuth(this.config);
          yay(auth);
        },
        'auth0'
      );*/
    });
  };

  getUserInfo = (auth, authResult) => {
    return new Promise((yay, nay) => {
      auth.client.userInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error, profile);
          return nay(error);
        }
        this.setSession({ ...authResult, profile });
        setTimeout(() => yay(profile), 100);
      });
    });
  };

  init = async hash => {
    if (this.isAuthenticated()) {
      const auth = await this.getLock();
      return new Promise((yay, nay) => {
        auth.checkSession({}, (error, authResult) => {
          if (error) {
            console.error(error);
          } else if (!authResult) {
            return this.login()
              .then(yay)
              .catch(nay);
          } else {
            return this.getUserInfo(auth, authResult)
              .then(yay)
              .catch(nay);
          }
        });
      });
    } else if (hash) {
      console.log(hash);
      const auth = await this.getLock();
      return new Promise((yay, nay) => {
        auth.parseHash({ hash }, (err, authResult) => {
          if (err || !authResult) {
            return nay(err || 'No result');
          }
          this.getUserInfo(auth, authResult)
            .then(yay)
            .catch(nay);
        });
      });
    }
  };

  login = async () => {
    const auth = await this.getLock();
    return auth.authorize();
  };

  logout = async () => {
    const lock = await this.getLock();
    localStorage.removeItem('access_token');
    localStorage.removeItem('auth0.ssodata');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    lock.logout({
      returnTo: this.config.logoutUrl,
    });
    /*localStorage.removeItem('access_token');
    localStorage.removeItem('auth0.ssodata');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    clearOldNonces();

    this.handler(null);*/
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

/*return;

    this.config = {
      title: config.title || 'olymp',
      domain: config.domain || process.env.AUTH0_DOMAIN,
      clientID: config.clientID || process.env.AUTH0_CLIENT_ID,
      color: config.color || 'green',
      logo:
        config.logo ||
        'http://res.cloudinary.com/djyenzorc/image/upload/v1508057396/qkg/ci3onnwcl2isotkvsvrp.png',
      returnTo: config.returnTo || 'http://localhost:3010',
      redirect: config.redirect || false,
      sso: config.sso || false,
      responseType: config.responseType || 'token',
      scope: config.scope || 'openid email profile',
      audience: config.audience || process.env.AUTH0_AUDIENCE,
      language: 'de',
    };
          const Auth0Lock = require('auth0-lock').default;

          this.lock = new Auth0Lock(this.config.clientID, this.config.domain, {
            languageDictionary: {
              title: this.config.title,
            },
            language: this.config.language,
            theme: {
              logo: this.config.logo,
              primaryColor: this.config.color,
            },
            auth: {
              params: {
                scope: this.config.scope,
                audience: this.config.audience,
              },
              redirect: this.config.redirect,
              sso: this.config.sso,
            },
          });

          let closing = false;
          this.lock.on('authenticated', authResult => {
            if (!authResult || !authResult.accessToken) {
              return;
            }
            console.log(authResult);
            this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
              if (error) {
                return;
              }
              this.setSession({ ...authResult, profile });
              console.log(profile);
              closing = true;
              this.lock.hide();
              this.handler(profile);
            });
          });
          this.lock.on('hide', () => {
            if (closing) {
              return;
            }
            this.handler(false);
          });
          yay(this.lock);*/
/*await this.getLock();
    this.webAuth.checkSession({}, function(err, authResult) {
      console.log(err, authResult);
    });*/
/*lock.show();
    return;
    lock.checkSession(
      {
        domain: this.config.domain,
        scope: this.config.scope,
        clientID: this.config.clientID,
        audience: this.config.audience,
        responseType: 'token',
      },
      (error, authResult) => {
        console.log('CHECK', authResult, error);
        if (error || !authResult) {
          lock.show();
        } else {
          // user has an active session, so we can use the accessToken directly.
          lock.getUserInfo(authResult.accessToken, (error, profile) => {
            console.log(error, profile);
            this.setSession({ ...authResult, profile });
            this.handler(profile);
          });
        }
      }
    );*/
