import { ipcRenderer, remote } from 'electron';
import AuthService from './auth0';
import parseQuery from './utils/parse-query';

function base64URLEncode(str) {
  return str
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function createVerificationPair() {
  const crypto = remote.require('crypto');
  function createVerifier() {
    return base64URLEncode(crypto.randomBytes(32));
  }
  function createChallenge(buffer) {
    return base64URLEncode(
      crypto
        .createHash('sha256')
        .update(buffer)
        .digest()
    );
  }
  const verifier = createVerifier();
  const challenge = createChallenge(verifier);
  return { verifier, challenge };
}

export default class AuthServiceElectron extends AuthService {
  constructor(config) {
    if (!config.redirectUri) {
      config.redirectUri = 'com://callback';
    }
    super(config);
  }
  login = ({ email } = {}) => {
    const { clientID, audience, domain, scope, redirectUri } = this.config;
    const { challenge, verifier } = createVerificationPair();
    let href = `https://${domain}/authorize?scope=${scope} offline_access&audience=${audience}&response_type=code&client_id=${clientID}&code_challenge=${challenge}&code_challenge_method=S256&redirect_uri=${redirectUri}`;
    if (email) {
      href = `${href}&email=${email}`;
    }
    const win = window.open(href, 'oauth');
    ipcRenderer.once('oauth-callback', (event, raw) => {
      this.handleAuth(parseQuery(raw.split('?')[1]), verifier);
    });
  };
  logout = ({ state }) => {
    const user = this.getUser();
    if (user) {
      localStorage.removeItem('user');
      localStorage.removeItem(`user_${user.sub}`);
    }
    const { clientID, audience, domain, scope, redirectUri } = this.config;
    console.log('LOGOUT1', redirectUri);
    let href = `https://${domain}/v2/logout?client_id=${clientID}&returnTo=${redirectUri}`;
    const win = window.open(href, 'oauth');
    ipcRenderer.once('oauth-callback', (event, raw) => {
      console.log('LOGOUT');
      this.emit('profile', null);
    });
  };
  refreshToken = refreshToken => {
    return fetch(`https://${this.config.domain}/oauth/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        client_id: this.config.clientID,
        refresh_token: refreshToken,
      }),
    })
      .then(result => result.json())
      .then(this.userInfo);
  };
  getRefreshToken = () => {
    return JSON.parse(localStorage.getItem('user')).refresh_token;
  };
  getProfile = () => {
    const user = this.getUser();
    if (!user) {
      return null;
    } else if (
      (this.isExpired(user) || !user.access_token || !user.profile) &&
      user.refresh_token
    ) {
      this.refreshToken(user.refresh_token);
      return null;
    }
    return user.profile;
  };
}
