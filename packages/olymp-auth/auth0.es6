// src/utils/AuthService.js
import { EventEmitter } from 'events';
import createIFrame from './utils/iframe';
import parseQuery from './utils/parse-query';

export default class AuthService extends EventEmitter {
  constructor(config) {
    if (!config.redirectUri) {
      config.redirectUri = `${window.location.origin}/login`;
    }
    if (!config.logoutUri) {
      config.logoutUri = `${window.location.origin}/logout`;
    }
    super(config);
    this.config = config;
  }

  getProfile = () => {
    const user = this.getUser();
    if (!user) {
      return null;
    } else if (this.isExpired(user)) {
      this.refreshToken();
      return null;
    }
    return user.profile;
  };

  logout = ({ state }) => {
    const user = this.getUser();
    if (user) {
      localStorage.removeItem('user');
      localStorage.removeItem(`user_${user.sub}`);
    }
    const { clientID, audience, domain, scope, logoutUri } = this.config;
    let href = `https://${domain}/v2/logout?client_id=${clientID}&returnTo=${logoutUri}`;
    if (state) {
      href = `${href}&state=${state}`;
    }
    window.location.href = href;
  };

  login = ({ code, email, state } = {}) => {
    if (code) {
      this.handleAuth({ code });
    } else {
      const { clientID, audience, domain, scope, redirectUri } = this.config;
      let href = `https://${domain}/authorize?scope=${scope}&audience=${audience}&response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}`;
      if (email) {
        href = `${href}&email=${email}`;
      }
      if (state) {
        href = `${href}&state=${state}`;
      }
      window.location.href = href;
    }
  };

  refreshToken = ({ timeout = 10000, state = '/__silent' } = {}) => {
    console.log('REFRESH!');
    const { clientID, audience, domain, scope, redirectUri } = this.config;
    return createIFrame(
      `http://${domain}/authorize?scope=${scope}&audience=${audience}&response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}&state=${state}&prompt=none`
    ).then(url => {
      const code = (parseQuery(url.substr(url.indexOf('?'))) || {}).code;
      if (code) {
        this.handleAuth({ code });
      }
    });
  };

  handleAuth = ({ code }, verifier) => {
    return fetch(`https://${this.config.domain}/oauth/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: this.config.clientID,
        code_verifier: verifier,
        code: code,
        redirect_uri: this.config.redirectUri,
      }),
    })
      .then(result => result.json())
      .then(this.userInfo);
  };

  userInfo = args => {
    return fetch(`https://${this.config.domain}/userinfo`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        access_token: args.access_token,
      }),
    })
      .then(result => result.json())
      .then(profile => this.storeAuthResult({ ...args, profile }));
  };

  storeAuthResult = ({ access_token, expires_in, refresh_token, profile }) => {
    const user = JSON.stringify({
      access_token,
      expires_at: expires_in * 1000 + new Date().getTime(),
      refresh_token,
      profile,
    });
    localStorage.setItem(`user_${profile.sub}`, user);
    localStorage.setItem('user', user);
    localStorage.setItem('access_token', access_token);
    this.emit('profile', profile);
  };

  isSet = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      return false;
    }
    return true;
  };

  isExpired = user => {
    if (!user || !user.expires_at || !user.access_token) {
      return true;
    }
    return new Date().getTime() >= user.expires_at;
  };

  getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
}
