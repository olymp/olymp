process.env.AUTH_SECRET = 'qokpw212';
process.env.TEST = true;
process.env.GCLOUD_PROJECT = 'admn-usc';
process.env.MAILS = true;

const adapter = require('powr-datastore')();
const handler = require('../lib/handler')();
const data = { email: 'bkniffler@me.com', password: 'asd', realm: 'admn' };

const register = payload =>
  handler
    .auth(
    {
      method: 'register',
      payload: Object.assign(
          payload,
        {
            // _noEmail: true
        }
        ),
    },
      {}
    )
    .then((x) => {
      console.log('register ok');
      return x;
    });

const login = (password, realm) => payload =>
  handler
    .auth(
    {
      method: 'login',
      payload: {
        email: payload.user.email,
        password,
        realm,
      },
    },
      {}
    )
    .then((x) => {
      console.log('login ok');
      return x;
    });

const verify = payload =>
  handler
    .auth(
    {
      method: 'verify',
      payload: {
        token: payload.token,
      },
    },
      {}
    )
    .then((x) => {
      console.log('verify ok');
      return x;
    });

const checkConfirmAfterRegister = (payload) => {
  if (payload.user.confirmed !== false) { throw new Error('Confirmed is not false'); }
  console.log('check-confirm-after-register ok');
  return payload;
};

const checkConfirmAfterConfirm = (payload) => {
  if (payload.user.confirmed !== true) { throw new Error('Confirmed is not true'); }
  console.log('check-confirm-after-confirm ok');
  return payload;
};

const confirm = payload =>
  handler
    .auth(
    {
      method: 'confirm',
      payload: {
        token: payload.token,
      },
    },
      {}
    )
    .then((x) => {
      console.log('authenticate ok');
      return x;
    });

const registrationTest = () => {
  console.log(' ---- starting registration-test ----');
  return register({
    email: data.email,
    password: data.password,
    realm: data.realm,
  })
    .then(checkConfirmAfterRegister)
    .then(confirm)
    .then(checkConfirmAfterConfirm)
    .then(login(data.password, data.realm))
    .then(verify)
    .then(result => console.log(' => registration-test ok\n'))
    .catch(err => console.error(err));
};

registrationTest();
