import _lowerFirst from 'lodash/lowerFirst';
import _groupBy from 'lodash/groupBy';
import _orderBy from 'lodash/orderBy';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default {
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
          return _orderBy(tags, ['count', 'id'], ['desc', 'asc']);
        });
      },
      suggestions: function suggestions(source, _ref3, _ref4) {
        var collection = _ref3.collection,
            _ref3$field = _ref3.field,
            field = _ref3$field === undefined ? 'tags' : _ref3$field;
        var db = _ref4.db,
            app = _ref4.app;
        return db.collection('item').find(collection ? { _type: _lowerFirst(collection), _appId: app.id } : {}, _defineProperty({}, field, 1)).toArray().then(function (array) {
          var grouped = _groupBy(array, field);
          var result = Object.keys(grouped).reduce(function (result, item) {
            if (item === 'undefined' || !item || item === 'null') {
              return result;
            }
            result.push({ id: item, count: grouped[item].length });
            return result;
          }, []);
          return _orderBy(result, ['count', field], ['desc', 'asc']);
        });
      }
    }
  },
  schema: '\n    type Tag {\n      id: String\n      count: Int\n    }\n  '
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vc2VydmVyL3NjaGVtYS90YWdzLmVzNiJdLCJuYW1lcyI6WyJuYW1lIiwicXVlcmllcyIsInJlc29sdmVycyIsInRhZ3MiLCJzb3VyY2UiLCJhcmdzIiwiZGIiLCJhcHAiLCJjb2xsZWN0aW9uIiwiZmluZCIsIl9hcHBJZCIsImlkIiwic3RhdGUiLCIkbmUiLCJ0b0FycmF5IiwidGhlbiIsImFycmF5IiwibWFwIiwicmVkdWNlIiwicmVzdWx0IiwiZm9yRWFjaCIsInRhZyIsInB1c2giLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY291bnQiLCJsZW5ndGgiLCJzdWdnZXN0aW9ucyIsImZpZWxkIiwiX3R5cGUiLCJncm91cGVkIiwiaXRlbSIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsZUFBZTtBQUNiQSxRQUFNLEtBRE87QUFFYkMsNkZBRmE7QUFNYkMsYUFBVztBQUNURCxhQUFTO0FBQ1BFLFlBQU0sY0FBQ0MsTUFBRCxFQUFTQyxJQUFUO0FBQUEsWUFBaUJDLEVBQWpCLFFBQWlCQSxFQUFqQjtBQUFBLFlBQXFCQyxHQUFyQixRQUFxQkEsR0FBckI7QUFBQSxlQUNKRCxHQUNHRSxVQURILENBQ2MsTUFEZCxFQUVHQyxJQUZILENBRVEsRUFBRUMsUUFBUUgsSUFBSUksRUFBZCxFQUFrQkMsT0FBTyxFQUFFQyxLQUFLLFNBQVAsRUFBekIsRUFGUixFQUV1RCxFQUFFVixNQUFNLENBQVIsRUFGdkQsRUFHR1csT0FISCxHQUlHQyxJQUpILENBSVEsaUJBQVM7QUFDYixjQUFJWixPQUFPYSxNQUFNQyxHQUFOLENBQVU7QUFBQSxnQkFBR2QsSUFBSCxTQUFHQSxJQUFIO0FBQUEsbUJBQWNBLElBQWQ7QUFBQSxXQUFWLEVBQThCZSxNQUE5QixDQUFxQyxVQUFDQyxNQUFELEVBQVNoQixJQUFULEVBQWtCO0FBQ2hFLGdCQUFJQSxJQUFKLEVBQVU7QUFDUkEsbUJBQUtpQixPQUFMLENBQWEsZUFBTztBQUNsQixvQkFBSUMsT0FBT0EsUUFBUSxXQUFmLElBQThCQSxRQUFRLE1BQTFDLEVBQWtEO0FBQ2hELHNCQUFJLENBQUNGLE9BQU9FLEdBQVAsQ0FBTCxFQUFrQjtBQUNoQkYsMkJBQU9FLEdBQVAsSUFBYyxFQUFkO0FBQ0Q7QUFDREYseUJBQU9FLEdBQVAsRUFBWUMsSUFBWixDQUFpQkQsR0FBakI7QUFDRDtBQUNGLGVBUEQ7QUFRRDtBQUNELG1CQUFPRixNQUFQO0FBQ0QsV0FaVSxFQVlSLEVBWlEsQ0FBWDtBQWFBaEIsaUJBQU9vQixPQUFPQyxJQUFQLENBQVlyQixJQUFaLEVBQWtCYyxHQUFsQixDQUFzQjtBQUFBLG1CQUFRO0FBQ25DTixrQkFBSWMsR0FEK0I7QUFFbkNDLHFCQUFPdkIsS0FBS3NCLEdBQUwsRUFBVUU7QUFGa0IsYUFBUjtBQUFBLFdBQXRCLENBQVA7QUFJQSxpQkFBTyxTQUFReEIsSUFBUixFQUFjLENBQUMsT0FBRCxFQUFVLElBQVYsQ0FBZCxFQUErQixDQUFDLE1BQUQsRUFBUyxLQUFULENBQS9CLENBQVA7QUFDRCxTQXZCSCxDQURJO0FBQUEsT0FEQztBQTBCUHlCLG1CQUFhLHFCQUFDeEIsTUFBRDtBQUFBLFlBQVdJLFVBQVgsU0FBV0EsVUFBWDtBQUFBLGdDQUF1QnFCLEtBQXZCO0FBQUEsWUFBdUJBLEtBQXZCLCtCQUErQixNQUEvQjtBQUFBLFlBQTJDdkIsRUFBM0MsU0FBMkNBLEVBQTNDO0FBQUEsWUFBK0NDLEdBQS9DLFNBQStDQSxHQUEvQztBQUFBLGVBQ1hELEdBQ0dFLFVBREgsQ0FDYyxNQURkLEVBRUdDLElBRkgsQ0FHSUQsYUFBYSxFQUFFc0IsT0FBTyxZQUFXdEIsVUFBWCxDQUFULEVBQWlDRSxRQUFRSCxJQUFJSSxFQUE3QyxFQUFiLEdBQWlFLEVBSHJFLHNCQUtPa0IsS0FMUCxFQUtlLENBTGYsR0FRR2YsT0FSSCxHQVNHQyxJQVRILENBU1EsaUJBQVM7QUFDYixjQUFNZ0IsVUFBVSxTQUFRZixLQUFSLEVBQWVhLEtBQWYsQ0FBaEI7QUFDQSxjQUFNVixTQUFTSSxPQUFPQyxJQUFQLENBQVlPLE9BQVosRUFBcUJiLE1BQXJCLENBQTRCLFVBQUNDLE1BQUQsRUFBU2EsSUFBVCxFQUFrQjtBQUMzRCxnQkFBSUEsU0FBUyxXQUFULElBQXdCLENBQUNBLElBQXpCLElBQWlDQSxTQUFTLE1BQTlDLEVBQXNEO0FBQ3BELHFCQUFPYixNQUFQO0FBQ0Q7QUFDREEsbUJBQU9HLElBQVAsQ0FBWSxFQUFFWCxJQUFJcUIsSUFBTixFQUFZTixPQUFPSyxRQUFRQyxJQUFSLEVBQWNMLE1BQWpDLEVBQVo7QUFDQSxtQkFBT1IsTUFBUDtBQUNELFdBTmMsRUFNWixFQU5ZLENBQWY7QUFPQSxpQkFBTyxTQUFRQSxNQUFSLEVBQWdCLENBQUMsT0FBRCxFQUFVVSxLQUFWLENBQWhCLEVBQWtDLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBbEMsQ0FBUDtBQUNELFNBbkJILENBRFc7QUFBQTtBQTFCTjtBQURBLEdBTkU7QUF3RGJJO0FBeERhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9zZXJ2ZXIvc2NoZW1hL3RhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcmRlckJ5LCBncm91cEJ5LCBsb3dlckZpcnN0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndGFnJyxcbiAgcXVlcmllczogYFxuICAgIHRhZ3M6IFtUYWddXG4gICAgc3VnZ2VzdGlvbnMoY29sbGVjdGlvbjogU3RyaW5nLCBmaWVsZDogU3RyaW5nKTogW1RhZ11cbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgdGFnczogKHNvdXJjZSwgYXJncywgeyBkYiwgYXBwIH0pID0+XG4gICAgICAgIGRiXG4gICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgIC5maW5kKHsgX2FwcElkOiBhcHAuaWQsIHN0YXRlOiB7ICRuZTogJ1JFTU9WRUQnIH0gfSwgeyB0YWdzOiAxIH0pXG4gICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgIC50aGVuKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCB0YWdzID0gYXJyYXkubWFwKCh7IHRhZ3MgfSkgPT4gdGFncykucmVkdWNlKChyZXN1bHQsIHRhZ3MpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YWcgJiYgdGFnICE9PSAndW5kZWZpbmVkJyAmJiB0YWcgIT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFt0YWddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RhZ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbdGFnXS5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIHRhZ3MgPSBPYmplY3Qua2V5cyh0YWdzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICAgIGNvdW50OiB0YWdzW2tleV0ubGVuZ3RoLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVyQnkodGFncywgWydjb3VudCcsICdpZCddLCBbJ2Rlc2MnLCAnYXNjJ10pO1xuICAgICAgICAgIH0pLFxuICAgICAgc3VnZ2VzdGlvbnM6IChzb3VyY2UsIHsgY29sbGVjdGlvbiwgZmllbGQgPSAndGFncycgfSwgeyBkYiwgYXBwIH0pID0+XG4gICAgICAgIGRiXG4gICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgY29sbGVjdGlvbiA/IHsgX3R5cGU6IGxvd2VyRmlyc3QoY29sbGVjdGlvbiksIF9hcHBJZDogYXBwLmlkIH0gOiB7fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2ZpZWxkXTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKVxuICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAudGhlbihhcnJheSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91cGVkID0gZ3JvdXBCeShhcnJheSwgZmllbGQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09ICd1bmRlZmluZWQnIHx8ICFpdGVtIHx8IGl0ZW0gPT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBpZDogaXRlbSwgY291bnQ6IGdyb3VwZWRbaXRlbV0ubGVuZ3RoIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVyQnkocmVzdWx0LCBbJ2NvdW50JywgZmllbGRdLCBbJ2Rlc2MnLCAnYXNjJ10pO1xuICAgICAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIHR5cGUgVGFnIHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICAgIGNvdW50OiBJbnRcbiAgICB9XG4gIGAsXG59O1xuIl19
