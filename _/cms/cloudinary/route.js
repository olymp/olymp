'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _olympRouter = require('olymp-router');

var _views = require('./views');

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactRedux.connect)(function (_ref) {
  var location = _ref.location;
  return {
    selected: location.query['@media'] || ''
  };
}, function (dispatch) {
  return {
    updateQuery: (0, _olympRouter.createUpdateQuery)(dispatch)
  };
});
var CloudinaryRoute = enhance(function (_ref2) {
  var selected = _ref2.selected,
      updateQuery = _ref2.updateQuery;
  return _react2.default.createElement(_views2.default, {
    selected: selected.split(',').filter(function (x) {
      return x;
    }).map(function (x) {
      return { id: x, crop: undefined };
    }),
    handleSelection: function handleSelection(selected) {
      return updateQuery({ '@media': selected.map(function (item) {
          return item.id;
        }).join(',') });
    }
  });
});
CloudinaryRoute.displayName = 'CloudinaryRoute';
exports.default = CloudinaryRoute;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L3JvdXRlLmVzNiJdLCJuYW1lcyI6WyJlbmhhbmNlIiwibG9jYXRpb24iLCJzZWxlY3RlZCIsInF1ZXJ5IiwidXBkYXRlUXVlcnkiLCJkaXNwYXRjaCIsIkNsb3VkaW5hcnlSb3V0ZSIsInNwbGl0IiwiZmlsdGVyIiwieCIsIm1hcCIsImlkIiwiY3JvcCIsInVuZGVmaW5lZCIsIml0ZW0iLCJqb2luIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUseUJBQ2Q7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUNqQkMsY0FBVUQsU0FBU0UsS0FBVCxDQUFlLFFBQWYsS0FBNEI7QUFEckIsR0FBbkI7QUFBQSxDQURjLEVBSWQ7QUFBQSxTQUFhO0FBQ1hDLGlCQUFhLG9DQUFrQkMsUUFBbEI7QUFERixHQUFiO0FBQUEsQ0FKYyxDQUFoQjtBQVFBLElBQU1DLGtCQUFrQk4sUUFBUTtBQUFBLE1BQUdFLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFFLFdBQWIsU0FBYUEsV0FBYjtBQUFBLFNBQzlCO0FBQ0UsY0FBVUYsU0FDUEssS0FETyxDQUNELEdBREMsRUFFUEMsTUFGTyxDQUVBO0FBQUEsYUFBS0MsQ0FBTDtBQUFBLEtBRkEsRUFHUEMsR0FITyxDQUdIO0FBQUEsYUFBTSxFQUFFQyxJQUFJRixDQUFOLEVBQVNHLE1BQU1DLFNBQWYsRUFBTjtBQUFBLEtBSEcsQ0FEWjtBQUtFLHFCQUFpQjtBQUFBLGFBQ2ZULFlBQVksRUFBRSxVQUFVRixTQUFTUSxHQUFULENBQWE7QUFBQSxpQkFBUUksS0FBS0gsRUFBYjtBQUFBLFNBQWIsRUFBOEJJLElBQTlCLENBQW1DLEdBQW5DLENBQVosRUFBWixDQURlO0FBQUE7QUFMbkIsSUFEOEI7QUFBQSxDQUFSLENBQXhCO0FBVUFULGdCQUFnQlUsV0FBaEIsR0FBOEIsaUJBQTlCO2tCQUNlVixlIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L3JvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVVcGRhdGVRdWVyeSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgTWVkaWF0aGVrIGZyb20gJy4vdmlld3MnO1xuXG5jb25zdCBlbmhhbmNlID0gY29ubmVjdChcbiAgKHsgbG9jYXRpb24gfSkgPT4gKHtcbiAgICBzZWxlY3RlZDogbG9jYXRpb24ucXVlcnlbJ0BtZWRpYSddIHx8ICcnLFxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICB1cGRhdGVRdWVyeTogY3JlYXRlVXBkYXRlUXVlcnkoZGlzcGF0Y2gpLFxuICB9KSxcbik7XG5jb25zdCBDbG91ZGluYXJ5Um91dGUgPSBlbmhhbmNlKCh7IHNlbGVjdGVkLCB1cGRhdGVRdWVyeSB9KSA9PiAoXG4gIDxNZWRpYXRoZWtcbiAgICBzZWxlY3RlZD17c2VsZWN0ZWRcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgIC5tYXAoeCA9PiAoeyBpZDogeCwgY3JvcDogdW5kZWZpbmVkIH0pKX1cbiAgICBoYW5kbGVTZWxlY3Rpb249e3NlbGVjdGVkID0+XG4gICAgICB1cGRhdGVRdWVyeSh7ICdAbWVkaWEnOiBzZWxlY3RlZC5tYXAoaXRlbSA9PiBpdGVtLmlkKS5qb2luKCcsJykgfSl9XG4gIC8+XG4pKTtcbkNsb3VkaW5hcnlSb3V0ZS5kaXNwbGF5TmFtZSA9ICdDbG91ZGluYXJ5Um91dGUnO1xuZXhwb3J0IGRlZmF1bHQgQ2xvdWRpbmFyeVJvdXRlO1xuIl19
