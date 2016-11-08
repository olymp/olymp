const googleAuth = require('google-oauth-jwt');

module.exports = function (app, base) {
  const config = app.get('googleAnalytics');

  if (config) {
    const authOptions = {
      email: config.email,
      keyFile: config.pemPath,
      scopes: ['https://www.googleapis.com/auth/analytics'],
    };

    app.get('/api/google-analytics', app.isAuthenticated, (req, res) => {
      googleAuth.authenticate(authOptions, (err, token) => {
        res.json({ token });
      });
    });
  }
};
