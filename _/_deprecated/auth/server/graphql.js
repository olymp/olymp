import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import adminCreate from './graphql-admin';
import pubCreate from './graphql-public';
import userCreate from './graphql-user';

export default (function (props) {
  var admin = adminCreate(props);
  var pub = pubCreate(props);
  var user = userCreate(props);
  return {
    authAdmin: admin,
    authPublic: pub,
    authUser: user,
    name: 'auth',
    queries: '\n      ' + (admin.queries || '') + '\n      ' + (user.queries || '') + '\n      ' + (pub.queries || '') + '\n    ',
    mutations: '\n      ' + (admin.mutations || '') + '\n      ' + (user.mutations || '') + '\n      ' + (pub.mutations || '') + '\n    ',
    resolvers: {
      queries: _extends({}, _get(admin, 'resolvers.queries', {}), _get(user, 'resolvers.queries', {}), _get(pub, 'resolvers.queries', {})),
      mutations: _extends({}, _get(admin, 'resolvers.mutations', {}), _get(user, 'resolvers.mutations', {}), _get(pub, 'resolvers.mutations', {}))
    },
    schema: '\n      ' + (admin.schema || '') + '\n      ' + (user.schema || '') + '\n      ' + (pub.schema || '') + '\n    '
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvc2VydmVyL2dyYXBocWwuZXM2Il0sIm5hbWVzIjpbImFkbWluQ3JlYXRlIiwicHViQ3JlYXRlIiwidXNlckNyZWF0ZSIsImFkbWluIiwicHJvcHMiLCJwdWIiLCJ1c2VyIiwiYXV0aEFkbWluIiwiYXV0aFB1YmxpYyIsImF1dGhVc2VyIiwibmFtZSIsInF1ZXJpZXMiLCJtdXRhdGlvbnMiLCJyZXNvbHZlcnMiLCJzY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPQSxXQUFQLE1BQXdCLGlCQUF4QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0Isa0JBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixnQkFBdkI7O0FBRUEsZ0JBQWUsaUJBQVM7QUFDdEIsTUFBTUMsUUFBUUgsWUFBWUksS0FBWixDQUFkO0FBQ0EsTUFBTUMsTUFBTUosVUFBVUcsS0FBVixDQUFaO0FBQ0EsTUFBTUUsT0FBT0osV0FBV0UsS0FBWCxDQUFiO0FBQ0EsU0FBTztBQUNMRyxlQUFXSixLQUROO0FBRUxLLGdCQUFZSCxHQUZQO0FBR0xJLGNBQVVILElBSEw7QUFJTEksVUFBTSxNQUpEO0FBS0xDLDJCQUNJUixNQUFNUSxPQUFOLElBQWlCLEVBRHJCLGtCQUVJTCxLQUFLSyxPQUFMLElBQWdCLEVBRnBCLGtCQUdJTixJQUFJTSxPQUFKLElBQWUsRUFIbkIsWUFMSztBQVVMQyw2QkFDSVQsTUFBTVMsU0FBTixJQUFtQixFQUR2QixrQkFFSU4sS0FBS00sU0FBTCxJQUFrQixFQUZ0QixrQkFHSVAsSUFBSU8sU0FBSixJQUFpQixFQUhyQixZQVZLO0FBZUxDLGVBQVc7QUFDVEYsNEJBQ0ssS0FBSVIsS0FBSixFQUFXLG1CQUFYLEVBQWdDLEVBQWhDLENBREwsRUFFSyxLQUFJRyxJQUFKLEVBQVUsbUJBQVYsRUFBK0IsRUFBL0IsQ0FGTCxFQUdLLEtBQUlELEdBQUosRUFBUyxtQkFBVCxFQUE4QixFQUE5QixDQUhMLENBRFM7QUFNVE8sOEJBQ0ssS0FBSVQsS0FBSixFQUFXLHFCQUFYLEVBQWtDLEVBQWxDLENBREwsRUFFSyxLQUFJRyxJQUFKLEVBQVUscUJBQVYsRUFBaUMsRUFBakMsQ0FGTCxFQUdLLEtBQUlELEdBQUosRUFBUyxxQkFBVCxFQUFnQyxFQUFoQyxDQUhMO0FBTlMsS0FmTjtBQTJCTFMsMEJBQ0lYLE1BQU1XLE1BQU4sSUFBZ0IsRUFEcEIsa0JBRUlSLEtBQUtRLE1BQUwsSUFBZSxFQUZuQixrQkFHSVQsSUFBSVMsTUFBSixJQUFjLEVBSGxCO0FBM0JLLEdBQVA7QUFpQ0QsQ0FyQ0QiLCJmaWxlIjoicGFja2FnZXMvYXV0aC9zZXJ2ZXIvZ3JhcGhxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYWRtaW5DcmVhdGUgZnJvbSAnLi9ncmFwaHFsLWFkbWluJztcbmltcG9ydCBwdWJDcmVhdGUgZnJvbSAnLi9ncmFwaHFsLXB1YmxpYyc7XG5pbXBvcnQgdXNlckNyZWF0ZSBmcm9tICcuL2dyYXBocWwtdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgY29uc3QgYWRtaW4gPSBhZG1pbkNyZWF0ZShwcm9wcyk7XG4gIGNvbnN0IHB1YiA9IHB1YkNyZWF0ZShwcm9wcyk7XG4gIGNvbnN0IHVzZXIgPSB1c2VyQ3JlYXRlKHByb3BzKTtcbiAgcmV0dXJuIHtcbiAgICBhdXRoQWRtaW46IGFkbWluLFxuICAgIGF1dGhQdWJsaWM6IHB1YixcbiAgICBhdXRoVXNlcjogdXNlcixcbiAgICBuYW1lOiAnYXV0aCcsXG4gICAgcXVlcmllczogYFxuICAgICAgJHthZG1pbi5xdWVyaWVzIHx8ICcnfVxuICAgICAgJHt1c2VyLnF1ZXJpZXMgfHwgJyd9XG4gICAgICAke3B1Yi5xdWVyaWVzIHx8ICcnfVxuICAgIGAsXG4gICAgbXV0YXRpb25zOiBgXG4gICAgICAke2FkbWluLm11dGF0aW9ucyB8fCAnJ31cbiAgICAgICR7dXNlci5tdXRhdGlvbnMgfHwgJyd9XG4gICAgICAke3B1Yi5tdXRhdGlvbnMgfHwgJyd9XG4gICAgYCxcbiAgICByZXNvbHZlcnM6IHtcbiAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgLi4uZ2V0KGFkbWluLCAncmVzb2x2ZXJzLnF1ZXJpZXMnLCB7fSksXG4gICAgICAgIC4uLmdldCh1c2VyLCAncmVzb2x2ZXJzLnF1ZXJpZXMnLCB7fSksXG4gICAgICAgIC4uLmdldChwdWIsICdyZXNvbHZlcnMucXVlcmllcycsIHt9KSxcbiAgICAgIH0sXG4gICAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgLi4uZ2V0KGFkbWluLCAncmVzb2x2ZXJzLm11dGF0aW9ucycsIHt9KSxcbiAgICAgICAgLi4uZ2V0KHVzZXIsICdyZXNvbHZlcnMubXV0YXRpb25zJywge30pLFxuICAgICAgICAuLi5nZXQocHViLCAncmVzb2x2ZXJzLm11dGF0aW9ucycsIHt9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzY2hlbWE6IGBcbiAgICAgICR7YWRtaW4uc2NoZW1hIHx8ICcnfVxuICAgICAgJHt1c2VyLnNjaGVtYSB8fCAnJ31cbiAgICAgICR7cHViLnNjaGVtYSB8fCAnJ31cbiAgICBgLFxuICB9O1xufTtcbiJdfQ==
