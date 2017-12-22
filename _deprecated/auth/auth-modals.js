import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: function resolve() {
    return new Promise(function (resolve) {
      return (
        // Webpack's code splitting API w/naming
        require.ensure([], function (require) {
          resolve(require('./views'));
        }, 'auth')
      );
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvYXV0aC1tb2RhbHMuZXM2Il0sIm5hbWVzIjpbImFzeW5jQ29tcG9uZW50IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZXF1aXJlIiwiZW5zdXJlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxjQUFULFFBQStCLHVCQUEvQjs7QUFFQSxlQUFlQSxlQUFlO0FBQzVCQyxXQUFTO0FBQUEsV0FDUCxJQUFJQyxPQUFKLENBQVk7QUFBQTtBQUNWO0FBQ0FDLGdCQUFRQyxNQUFSLENBQ0UsRUFERixFQUVFLG1CQUFXO0FBQ1RILGtCQUFRRSxRQUFRLFNBQVIsQ0FBUjtBQUNELFNBSkgsRUFLRSxNQUxGO0FBRlU7QUFBQSxLQUFaLENBRE87QUFBQTtBQURtQixDQUFmLENBQWYiLCJmaWxlIjoicGFja2FnZXMvYXV0aC9hdXRoLW1vZGFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtYXN5bmMtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNDb21wb25lbnQoe1xuICByZXNvbHZlOiAoKSA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgIC8vIFdlYnBhY2sncyBjb2RlIHNwbGl0dGluZyBBUEkgdy9uYW1pbmdcbiAgICAgIHJlcXVpcmUuZW5zdXJlKFxuICAgICAgICBbXSxcbiAgICAgICAgcmVxdWlyZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXF1aXJlKCcuL3ZpZXdzJykpO1xuICAgICAgICB9LFxuICAgICAgICAnYXV0aCcsXG4gICAgICApLFxuICAgICksXG59KTtcbiJdfQ==
