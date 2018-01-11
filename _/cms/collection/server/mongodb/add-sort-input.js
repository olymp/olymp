'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _server = require('olymp-graphql/server');

exports.default = function (ast, node) {
  var getSort = function getSort(field) {
    if (!field.name) {
      return null;
    }
    return field.name.value + ': SORT_DIRECTION';
  };
  (0, _server.addDefinition)(ast, (0, _language.parse)('\n    input ' + node.name.value + 'Sort {\n      skipSort: Boolean\n      ' + node.fields.map(getSort).filter(function (x) {
    return x;
  }).join('\n') + '\n    }\n  ').definitions[0]);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9tb25nb2RiL2FkZC1zb3J0LWlucHV0LmVzNiJdLCJuYW1lcyI6WyJhc3QiLCJub2RlIiwiZ2V0U29ydCIsImZpZWxkIiwibmFtZSIsInZhbHVlIiwiZmllbGRzIiwibWFwIiwiZmlsdGVyIiwieCIsImpvaW4iLCJkZWZpbml0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O2tCQUVlLFVBQUNBLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQzVCLE1BQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsUUFBSSxDQUFDQSxNQUFNQyxJQUFYLEVBQWlCO0FBQ2YsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFVRCxNQUFNQyxJQUFOLENBQVdDLEtBQXJCO0FBQ0QsR0FMRDtBQU1BLDZCQUNFTCxHQURGLEVBRUUsc0NBQ1FDLEtBQUtHLElBQUwsQ0FBVUMsS0FEbEIsK0NBR0lKLEtBQUtLLE1BQUwsQ0FBWUMsR0FBWixDQUFnQkwsT0FBaEIsRUFBeUJNLE1BQXpCLENBQWdDO0FBQUEsV0FBS0MsQ0FBTDtBQUFBLEdBQWhDLEVBQXdDQyxJQUF4QyxDQUE2QyxJQUE3QyxDQUhKLGtCQUtDQyxXQUxELENBS2EsQ0FMYixDQUZGO0FBU0QsQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9zZXJ2ZXIvbW9uZ29kYi9hZGQtc29ydC1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgeyBhZGREZWZpbml0aW9uIH0gZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXN0LCBub2RlKSA9PiB7XG4gIGNvbnN0IGdldFNvcnQgPSAoZmllbGQpID0+IHtcbiAgICBpZiAoIWZpZWxkLm5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gYCR7ZmllbGQubmFtZS52YWx1ZX06IFNPUlRfRElSRUNUSU9OYDtcbiAgfTtcbiAgYWRkRGVmaW5pdGlvbihcbiAgICBhc3QsXG4gICAgcGFyc2UoYFxuICAgIGlucHV0ICR7bm9kZS5uYW1lLnZhbHVlfVNvcnQge1xuICAgICAgc2tpcFNvcnQ6IEJvb2xlYW5cbiAgICAgICR7bm9kZS5maWVsZHMubWFwKGdldFNvcnQpLmZpbHRlcih4ID0+IHgpLmpvaW4oJ1xcbicpfVxuICAgIH1cbiAgYCkuZGVmaW5pdGlvbnNbMF1cbiAgKTtcbn07XG4iXX0=
