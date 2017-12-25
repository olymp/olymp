var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

export default (function (app) {
  // Configure Passport to use Auth0
  var strategy = new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  }, function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  });

  passport.use(strategy);

  // This can be used to keep a smaller payload
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/callback-cross-auth.html', function (req, res) {
    res.send('\n      <head>\n        <script src="//cdn.auth0.com/js/auth0/9.0.0-beta.7/auth0.min.js"></script>\n        <script type="text/javascript">\n          var auth0 = new auth0.WebAuth({\n            clientID: \'' + process.env.AUTH0_CLIENT_ID + '\',\n            domain: \'' + process.env.AUTH0_DOMAIN + '\',\n            redirectUri: \'' + process.env.AUTH0_CALLBACK_URL + '\',\n            responseType: \'token\'\n          });\n          auth0.crossOriginVerification();\n        </script>\n      </head>\n    ');
  });

  app.use(function (_ref, res, next) {
    var user = _ref.user;

    console.log(user);
    next();
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgwL3NlcnZlci9pbmRleC5lczYiXSwibmFtZXMiOlsicGFzc3BvcnQiLCJyZXF1aXJlIiwiQXV0aDBTdHJhdGVneSIsInN0cmF0ZWd5IiwiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0RPTUFJTiIsImNsaWVudElEIiwiQVVUSDBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrVVJMIiwiQVVUSDBfQ0FMTEJBQ0tfVVJMIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJleHRyYVBhcmFtcyIsInByb2ZpbGUiLCJkb25lIiwidXNlIiwic2VyaWFsaXplVXNlciIsInVzZXIiLCJkZXNlcmlhbGl6ZVVzZXIiLCJhcHAiLCJpbml0aWFsaXplIiwic2Vzc2lvbiIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJuZXh0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBTUMsZ0JBQWdCRCxRQUFRLGdCQUFSLENBQXRCOztBQUVBLGdCQUFlLGVBQU87QUFDcEI7QUFDQSxNQUFNRSxXQUFXLElBQUlELGFBQUosQ0FDZjtBQUNFRSxZQUFRQyxRQUFRQyxHQUFSLENBQVlDLFlBRHRCO0FBRUVDLGNBQVVILFFBQVFDLEdBQVIsQ0FBWUcsZUFGeEI7QUFHRUMsa0JBQWNMLFFBQVFDLEdBQVIsQ0FBWUssbUJBSDVCO0FBSUVDLGlCQUFhUCxRQUFRQyxHQUFSLENBQVlPO0FBSjNCLEdBRGUsRUFPZixVQUFDQyxXQUFELEVBQWNDLFlBQWQsRUFBNEJDLFdBQTVCLEVBQXlDQyxPQUF6QyxFQUFrREMsSUFBbEQ7QUFBQSxXQUNFQSxLQUFLLElBQUwsRUFBV0QsT0FBWCxDQURGO0FBQUEsR0FQZSxDQUFqQjs7QUFXQWpCLFdBQVNtQixHQUFULENBQWFoQixRQUFiOztBQUVBO0FBQ0FILFdBQVNvQixhQUFULENBQXVCLFVBQUNDLElBQUQsRUFBT0gsSUFBUCxFQUFnQjtBQUNyQ0EsU0FBSyxJQUFMLEVBQVdHLElBQVg7QUFDRCxHQUZEOztBQUlBckIsV0FBU3NCLGVBQVQsQ0FBeUIsVUFBQ0QsSUFBRCxFQUFPSCxJQUFQLEVBQWdCO0FBQ3ZDQSxTQUFLLElBQUwsRUFBV0csSUFBWDtBQUNELEdBRkQ7O0FBSUFFLE1BQUlKLEdBQUosQ0FBUW5CLFNBQVN3QixVQUFULEVBQVI7QUFDQUQsTUFBSUosR0FBSixDQUFRbkIsU0FBU3lCLE9BQVQsRUFBUjs7QUFFQUYsTUFBSUcsR0FBSixDQUFRLDJCQUFSLEVBQXFDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pEQSxRQUFJQyxJQUFKLHNOQUtxQnhCLFFBQVFDLEdBQVIsQ0FBWUcsZUFMakMsbUNBTW1CSixRQUFRQyxHQUFSLENBQVlDLFlBTi9CLHdDQU93QkYsUUFBUUMsR0FBUixDQUFZTyxrQkFQcEM7QUFjRCxHQWZEOztBQWlCQVUsTUFBSUosR0FBSixDQUFRLGdCQUFXUyxHQUFYLEVBQWdCRSxJQUFoQixFQUF5QjtBQUFBLFFBQXRCVCxJQUFzQixRQUF0QkEsSUFBc0I7O0FBQy9CVSxZQUFRQyxHQUFSLENBQVlYLElBQVo7QUFDQVM7QUFDRCxHQUhEO0FBSUQsQ0FoREQiLCJmaWxlIjoicGFja2FnZXMvYXV0aDAvc2VydmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xuY29uc3QgQXV0aDBTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWF1dGgwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcCA9PiB7XG4gIC8vIENvbmZpZ3VyZSBQYXNzcG9ydCB0byB1c2UgQXV0aDBcbiAgY29uc3Qgc3RyYXRlZ3kgPSBuZXcgQXV0aDBTdHJhdGVneShcbiAgICB7XG4gICAgICBkb21haW46IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0FMTEJBQ0tfVVJMLFxuICAgIH0sXG4gICAgKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIGV4dHJhUGFyYW1zLCBwcm9maWxlLCBkb25lKSA9PlxuICAgICAgZG9uZShudWxsLCBwcm9maWxlKSxcbiAgKTtcblxuICBwYXNzcG9ydC51c2Uoc3RyYXRlZ3kpO1xuXG4gIC8vIFRoaXMgY2FuIGJlIHVzZWQgdG8ga2VlcCBhIHNtYWxsZXIgcGF5bG9hZFxuICBwYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XG4gICAgZG9uZShudWxsLCB1c2VyKTtcbiAgfSk7XG5cbiAgcGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XG4gICAgZG9uZShudWxsLCB1c2VyKTtcbiAgfSk7XG5cbiAgYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuICBhcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5cbiAgYXBwLmdldCgnL2NhbGxiYWNrLWNyb3NzLWF1dGguaHRtbCcsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kKGBcbiAgICAgIDxoZWFkPlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLmF1dGgwLmNvbS9qcy9hdXRoMC85LjAuMC1iZXRhLjcvYXV0aDAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuICAgICAgICAgIHZhciBhdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcbiAgICAgICAgICAgIGNsaWVudElEOiAnJHtwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUR9JyxcbiAgICAgICAgICAgIGRvbWFpbjogJyR7cHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOfScsXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogJyR7cHJvY2Vzcy5lbnYuQVVUSDBfQ0FMTEJBQ0tfVVJMfScsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICd0b2tlbidcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdXRoMC5jcm9zc09yaWdpblZlcmlmaWNhdGlvbigpO1xuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICBgKTtcbiAgfSk7XG5cbiAgYXBwLnVzZSgoeyB1c2VyIH0sIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIG5leHQoKTtcbiAgfSk7XG59O1xuIl19