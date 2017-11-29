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

  app.use(({ user }, res, next) => {
    console.log(user);
    next();
  });
};
