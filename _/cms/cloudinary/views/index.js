'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new Promise(function (resolve) {
      return (
        // Webpack's code splitting API w/naming
        require.ensure([], function (require) {
          resolve(require('./cloudinary'));
        }, 'cloudinary')
      );
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L3ZpZXdzL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJyZXNvbHZlIiwiUHJvbWlzZSIsInJlcXVpcmUiLCJlbnN1cmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFFZSx5Q0FBZTtBQUM1QkEsV0FBUztBQUFBLFdBQ1AsSUFBSUMsT0FBSixDQUFZO0FBQUE7QUFDVjtBQUNBQyxnQkFBUUMsTUFBUixDQUNFLEVBREYsRUFFRSxtQkFBVztBQUNUSCxrQkFBUUUsUUFBUSxjQUFSLENBQVI7QUFDRCxTQUpILEVBS0UsWUFMRjtBQUZVO0FBQUEsS0FBWixDQURPO0FBQUE7QUFEbUIsQ0FBZixDIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L3ZpZXdzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWFjdC1hc3luYy1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luY0NvbXBvbmVudCh7XG4gIHJlc29sdmU6ICgpID0+XG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PlxuICAgICAgLy8gV2VicGFjaydzIGNvZGUgc3BsaXR0aW5nIEFQSSB3L25hbWluZ1xuICAgICAgcmVxdWlyZS5lbnN1cmUoXG4gICAgICAgIFtdLFxuICAgICAgICByZXF1aXJlID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcXVpcmUoJy4vY2xvdWRpbmFyeScpKTtcbiAgICAgICAgfSxcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgKSxcbiAgICApLFxufSk7XG4iXX0=
