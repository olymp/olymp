'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lowerFirst2 = require('lodash/lowerFirst');

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2);

var _groupBy2 = require('lodash/groupBy');

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _orderBy2 = require('lodash/orderBy');

var _orderBy3 = _interopRequireDefault(_orderBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'tag',
  queries: '\n    tags: [Tag]\n    suggestions(collection: String, field: String): [Tag]\n  ',
  resolvers: {
    queries: {
      tags: function tags(source, args, _ref) {
        var db = _ref.db,
            app = _ref.app;
        return db.collection('item').find({ _appId: app.id, state: { $ne: 'REMOVED' } }, { tags: 1 }).toArray().then(function (array) {
          var tags = array.map(function (_ref2) {
            var tags = _ref2.tags;
            return tags;
          }).reduce(function (result, tags) {
            if (tags) {
              tags.forEach(function (tag) {
                if (tag && tag !== 'undefined' && tag !== 'null') {
                  if (!result[tag]) {
                    result[tag] = [];
                  }
                  result[tag].push(tag);
                }
              });
            }
            return result;
          }, {});
          tags = Object.keys(tags).map(function (key) {
            return {
              id: key,
              count: tags[key].length
            };
          });
          return (0, _orderBy3.default)(tags, ['count', 'id'], ['desc', 'asc']);
        });
      },
      suggestions: function suggestions(source, _ref3, _ref4) {
        var collection = _ref3.collection,
            _ref3$field = _ref3.field,
            field = _ref3$field === undefined ? 'tags' : _ref3$field;
        var db = _ref4.db,
            app = _ref4.app;
        return db.collection('item').find(collection ? { _type: (0, _lowerFirst3.default)(collection), _appId: app.id } : {}, _defineProperty({}, field, 1)).toArray().then(function (array) {
          var grouped = (0, _groupBy3.default)(array, field);
          var result = Object.keys(grouped).reduce(function (result, item) {
            if (item === 'undefined' || !item || item === 'null') {
              return result;
            }
            result.push({ id: item, count: grouped[item].length });
            return result;
          }, []);
          return (0, _orderBy3.default)(result, ['count', field], ['desc', 'asc']);
        });
      }
    }
  },
  schema: '\n    type Tag {\n      id: String\n      count: Int\n    }\n  '
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9zY2hlbWEvdGFncy5lczYiXSwibmFtZXMiOlsibmFtZSIsInF1ZXJpZXMiLCJyZXNvbHZlcnMiLCJ0YWdzIiwic291cmNlIiwiYXJncyIsImRiIiwiYXBwIiwiY29sbGVjdGlvbiIsImZpbmQiLCJfYXBwSWQiLCJpZCIsInN0YXRlIiwiJG5lIiwidG9BcnJheSIsInRoZW4iLCJhcnJheSIsIm1hcCIsInJlZHVjZSIsInJlc3VsdCIsImZvckVhY2giLCJ0YWciLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImNvdW50IiwibGVuZ3RoIiwic3VnZ2VzdGlvbnMiLCJmaWVsZCIsIl90eXBlIiwiZ3JvdXBlZCIsIml0ZW0iLCJzY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRWU7QUFDYkEsUUFBTSxLQURPO0FBRWJDLDZGQUZhO0FBTWJDLGFBQVc7QUFDVEQsYUFBUztBQUNQRSxZQUFNLGNBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLFlBQWlCQyxFQUFqQixRQUFpQkEsRUFBakI7QUFBQSxZQUFxQkMsR0FBckIsUUFBcUJBLEdBQXJCO0FBQUEsZUFDSkQsR0FDR0UsVUFESCxDQUNjLE1BRGQsRUFFR0MsSUFGSCxDQUVRLEVBQUVDLFFBQVFILElBQUlJLEVBQWQsRUFBa0JDLE9BQU8sRUFBRUMsS0FBSyxTQUFQLEVBQXpCLEVBRlIsRUFFdUQsRUFBRVYsTUFBTSxDQUFSLEVBRnZELEVBR0dXLE9BSEgsR0FJR0MsSUFKSCxDQUlRLGlCQUFTO0FBQ2IsY0FBSVosT0FBT2EsTUFBTUMsR0FBTixDQUFVO0FBQUEsZ0JBQUdkLElBQUgsU0FBR0EsSUFBSDtBQUFBLG1CQUFjQSxJQUFkO0FBQUEsV0FBVixFQUE4QmUsTUFBOUIsQ0FBcUMsVUFBQ0MsTUFBRCxFQUFTaEIsSUFBVCxFQUFrQjtBQUNoRSxnQkFBSUEsSUFBSixFQUFVO0FBQ1JBLG1CQUFLaUIsT0FBTCxDQUFhLGVBQU87QUFDbEIsb0JBQUlDLE9BQU9BLFFBQVEsV0FBZixJQUE4QkEsUUFBUSxNQUExQyxFQUFrRDtBQUNoRCxzQkFBSSxDQUFDRixPQUFPRSxHQUFQLENBQUwsRUFBa0I7QUFDaEJGLDJCQUFPRSxHQUFQLElBQWMsRUFBZDtBQUNEO0FBQ0RGLHlCQUFPRSxHQUFQLEVBQVlDLElBQVosQ0FBaUJELEdBQWpCO0FBQ0Q7QUFDRixlQVBEO0FBUUQ7QUFDRCxtQkFBT0YsTUFBUDtBQUNELFdBWlUsRUFZUixFQVpRLENBQVg7QUFhQWhCLGlCQUFPb0IsT0FBT0MsSUFBUCxDQUFZckIsSUFBWixFQUFrQmMsR0FBbEIsQ0FBc0I7QUFBQSxtQkFBUTtBQUNuQ04sa0JBQUljLEdBRCtCO0FBRW5DQyxxQkFBT3ZCLEtBQUtzQixHQUFMLEVBQVVFO0FBRmtCLGFBQVI7QUFBQSxXQUF0QixDQUFQO0FBSUEsaUJBQU8sdUJBQVF4QixJQUFSLEVBQWMsQ0FBQyxPQUFELEVBQVUsSUFBVixDQUFkLEVBQStCLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBL0IsQ0FBUDtBQUNELFNBdkJILENBREk7QUFBQSxPQURDO0FBMEJQeUIsbUJBQWEscUJBQUN4QixNQUFEO0FBQUEsWUFBV0ksVUFBWCxTQUFXQSxVQUFYO0FBQUEsZ0NBQXVCcUIsS0FBdkI7QUFBQSxZQUF1QkEsS0FBdkIsK0JBQStCLE1BQS9CO0FBQUEsWUFBMkN2QixFQUEzQyxTQUEyQ0EsRUFBM0M7QUFBQSxZQUErQ0MsR0FBL0MsU0FBK0NBLEdBQS9DO0FBQUEsZUFDWEQsR0FDR0UsVUFESCxDQUNjLE1BRGQsRUFFR0MsSUFGSCxDQUdJRCxhQUFhLEVBQUVzQixPQUFPLDBCQUFXdEIsVUFBWCxDQUFULEVBQWlDRSxRQUFRSCxJQUFJSSxFQUE3QyxFQUFiLEdBQWlFLEVBSHJFLHNCQUtPa0IsS0FMUCxFQUtlLENBTGYsR0FRR2YsT0FSSCxHQVNHQyxJQVRILENBU1EsaUJBQVM7QUFDYixjQUFNZ0IsVUFBVSx1QkFBUWYsS0FBUixFQUFlYSxLQUFmLENBQWhCO0FBQ0EsY0FBTVYsU0FBU0ksT0FBT0MsSUFBUCxDQUFZTyxPQUFaLEVBQXFCYixNQUFyQixDQUE0QixVQUFDQyxNQUFELEVBQVNhLElBQVQsRUFBa0I7QUFDM0QsZ0JBQUlBLFNBQVMsV0FBVCxJQUF3QixDQUFDQSxJQUF6QixJQUFpQ0EsU0FBUyxNQUE5QyxFQUFzRDtBQUNwRCxxQkFBT2IsTUFBUDtBQUNEO0FBQ0RBLG1CQUFPRyxJQUFQLENBQVksRUFBRVgsSUFBSXFCLElBQU4sRUFBWU4sT0FBT0ssUUFBUUMsSUFBUixFQUFjTCxNQUFqQyxFQUFaO0FBQ0EsbUJBQU9SLE1BQVA7QUFDRCxXQU5jLEVBTVosRUFOWSxDQUFmO0FBT0EsaUJBQU8sdUJBQVFBLE1BQVIsRUFBZ0IsQ0FBQyxPQUFELEVBQVVVLEtBQVYsQ0FBaEIsRUFBa0MsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUFsQyxDQUFQO0FBQ0QsU0FuQkgsQ0FEVztBQUFBO0FBMUJOO0FBREEsR0FORTtBQXdEYkk7QUF4RGEsQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9zZXJ2ZXIvc2NoZW1hL3RhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcmRlckJ5LCBncm91cEJ5LCBsb3dlckZpcnN0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndGFnJyxcbiAgcXVlcmllczogYFxuICAgIHRhZ3M6IFtUYWddXG4gICAgc3VnZ2VzdGlvbnMoY29sbGVjdGlvbjogU3RyaW5nLCBmaWVsZDogU3RyaW5nKTogW1RhZ11cbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgdGFnczogKHNvdXJjZSwgYXJncywgeyBkYiwgYXBwIH0pID0+XG4gICAgICAgIGRiXG4gICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgIC5maW5kKHsgX2FwcElkOiBhcHAuaWQsIHN0YXRlOiB7ICRuZTogJ1JFTU9WRUQnIH0gfSwgeyB0YWdzOiAxIH0pXG4gICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgIC50aGVuKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCB0YWdzID0gYXJyYXkubWFwKCh7IHRhZ3MgfSkgPT4gdGFncykucmVkdWNlKChyZXN1bHQsIHRhZ3MpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YWcgJiYgdGFnICE9PSAndW5kZWZpbmVkJyAmJiB0YWcgIT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFt0YWddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RhZ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbdGFnXS5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIHRhZ3MgPSBPYmplY3Qua2V5cyh0YWdzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICAgIGNvdW50OiB0YWdzW2tleV0ubGVuZ3RoLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVyQnkodGFncywgWydjb3VudCcsICdpZCddLCBbJ2Rlc2MnLCAnYXNjJ10pO1xuICAgICAgICAgIH0pLFxuICAgICAgc3VnZ2VzdGlvbnM6IChzb3VyY2UsIHsgY29sbGVjdGlvbiwgZmllbGQgPSAndGFncycgfSwgeyBkYiwgYXBwIH0pID0+XG4gICAgICAgIGRiXG4gICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgY29sbGVjdGlvbiA/IHsgX3R5cGU6IGxvd2VyRmlyc3QoY29sbGVjdGlvbiksIF9hcHBJZDogYXBwLmlkIH0gOiB7fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2ZpZWxkXTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKVxuICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAudGhlbihhcnJheSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91cGVkID0gZ3JvdXBCeShhcnJheSwgZmllbGQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09ICd1bmRlZmluZWQnIHx8ICFpdGVtIHx8IGl0ZW0gPT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBpZDogaXRlbSwgY291bnQ6IGdyb3VwZWRbaXRlbV0ubGVuZ3RoIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVyQnkocmVzdWx0LCBbJ2NvdW50JywgZmllbGRdLCBbJ2Rlc2MnLCAnYXNjJ10pO1xuICAgICAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIHR5cGUgVGFnIHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICAgIGNvdW50OiBJbnRcbiAgICB9XG4gIGAsXG59O1xuIl19
