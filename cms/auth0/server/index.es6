const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

export default app => {
  // Configure Passport to use Auth0
  const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
    },
    (accessToken, refreshToken, extraParams, profile, done) =>
      done(null, profile),
  );

  passport.use(strategy);

  // This can be used to keep a smaller payload
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/callback-cross-auth.html', (req, res) => {
    res.send(`
      <head>
        <script src="//cdn.auth0.com/js/auth0/9.0.0-beta.7/auth0.min.js"></script>
        <script type="text/javascript">
          var auth0 = new auth0.WebAuth({
            clientID: '${process.env.AUTH0_CLIENT_ID}',
            domain: '${process.env.AUTH0_DOMAIN}',
            redirectUri: '${process.env.AUTH0_CALLBACK_URL}',
            responseType: 'token'
          });
          auth0.crossOriginVerification();
        </script>
      </head>
    `);
  });

  app.use(({ user }, res, next) => {
    console.log(user);
    next();
  });
};
