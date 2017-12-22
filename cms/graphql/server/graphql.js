import _values from 'lodash/values';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { bundle } from 'graphql-modules';

import buildSchema from './schema-builder';
import * as scalarModules from './scalars';
import * as defaultDirectives from './directives';

export default (function (_ref) {
  var _ref$modules = _ref.modules,
      modules = _ref$modules === undefined ? null : _ref$modules,
      _ref$directives = _ref.directives,
      directives = _ref$directives === undefined ? {} : _ref$directives;

  var schema = null;
  var _apply = function _apply(modules) {
    var raw = _values(_extends({}, scalarModules, modules)).filter(function (x) {
      return x;
    });

    var _raw$reduce = raw.reduce(function (store, value) {
      if (value.onBefore) {
        store.onBefore.push(value.onBefore);
      }
      if (value.onAfter) {
        store.onAfter.push(value.onAfter);
      }
      return store;
    }, { onBefore: [], onAfter: [] }),
        onBefore = _raw$reduce.onBefore,
        onAfter = _raw$reduce.onAfter;

    var bundled = bundle(raw);
    schema = buildSchema(_extends({}, bundled, {
      directives: _extends({}, defaultDirectives, directives),
      onBefore: onBefore,
      onAfter: onAfter
    }));
    return schema;
  };

  if (modules) {
    _apply(modules);
  }
  return {
    middleware: graphqlExpress(function (context) {
      return {
        schema: context.schema,
        context: context
      };
    }),
    express: graphqlExpress(function (context) {
      return { schema: schema, context: context };
    }),
    graphi: graphiqlExpress({ endpointURL: '/graphql' }),
    apply: function apply(m) {
      return _apply(m);
    },
    getSchema: function getSchema() {
      return schema;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL2dyYXBocWwuZXM2Il0sIm5hbWVzIjpbImdyYXBocWxFeHByZXNzIiwiZ3JhcGhpcWxFeHByZXNzIiwiYnVuZGxlIiwiYnVpbGRTY2hlbWEiLCJzY2FsYXJNb2R1bGVzIiwiZGVmYXVsdERpcmVjdGl2ZXMiLCJtb2R1bGVzIiwiZGlyZWN0aXZlcyIsInNjaGVtYSIsImFwcGx5IiwicmF3IiwiZmlsdGVyIiwieCIsInJlZHVjZSIsInN0b3JlIiwidmFsdWUiLCJvbkJlZm9yZSIsInB1c2giLCJvbkFmdGVyIiwiYnVuZGxlZCIsIm1pZGRsZXdhcmUiLCJjb250ZXh0IiwiZXhwcmVzcyIsImdyYXBoaSIsImVuZHBvaW50VVJMIiwibSIsImdldFNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLGNBQVQsRUFBeUJDLGVBQXpCLFFBQWdELHdCQUFoRDtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsaUJBQXZCOztBQUVBLE9BQU9DLFdBQVAsTUFBd0Isa0JBQXhCO0FBQ0EsT0FBTyxLQUFLQyxhQUFaLE1BQStCLFdBQS9CO0FBQ0EsT0FBTyxLQUFLQyxpQkFBWixNQUFtQyxjQUFuQzs7QUFFQSxnQkFBZSxnQkFBeUM7QUFBQSwwQkFBdENDLE9BQXNDO0FBQUEsTUFBdENBLE9BQXNDLGdDQUE1QixJQUE0QjtBQUFBLDZCQUF0QkMsVUFBc0I7QUFBQSxNQUF0QkEsVUFBc0IsbUNBQVQsRUFBUzs7QUFDdEQsTUFBSUMsU0FBUyxJQUFiO0FBQ0EsTUFBTUMsU0FBUSxTQUFSQSxNQUFRLFVBQVc7QUFDdkIsUUFBTUMsTUFBTSxxQkFBWU4sYUFBWixFQUE4QkUsT0FBOUIsR0FBeUNLLE1BQXpDLENBQWdEO0FBQUEsYUFBS0MsQ0FBTDtBQUFBLEtBQWhELENBQVo7O0FBRHVCLHNCQUVPRixJQUFJRyxNQUFKLENBQzVCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQixVQUFJQSxNQUFNQyxRQUFWLEVBQW9CO0FBQ2xCRixjQUFNRSxRQUFOLENBQWVDLElBQWYsQ0FBb0JGLE1BQU1DLFFBQTFCO0FBQ0Q7QUFDRCxVQUFJRCxNQUFNRyxPQUFWLEVBQW1CO0FBQ2pCSixjQUFNSSxPQUFOLENBQWNELElBQWQsQ0FBbUJGLE1BQU1HLE9BQXpCO0FBQ0Q7QUFDRCxhQUFPSixLQUFQO0FBQ0QsS0FUMkIsRUFVNUIsRUFBRUUsVUFBVSxFQUFaLEVBQWdCRSxTQUFTLEVBQXpCLEVBVjRCLENBRlA7QUFBQSxRQUVmRixRQUZlLGVBRWZBLFFBRmU7QUFBQSxRQUVMRSxPQUZLLGVBRUxBLE9BRks7O0FBY3ZCLFFBQU1DLFVBQVVqQixPQUFPUSxHQUFQLENBQWhCO0FBQ0FGLGFBQVNMLHlCQUNKZ0IsT0FESTtBQUVQWiwrQkFBaUJGLGlCQUFqQixFQUF1Q0UsVUFBdkMsQ0FGTztBQUdQUyx3QkFITztBQUlQRTtBQUpPLE9BQVQ7QUFNQSxXQUFPVixNQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBLE1BQUlGLE9BQUosRUFBYTtBQUNYRyxXQUFNSCxPQUFOO0FBQ0Q7QUFDRCxTQUFPO0FBQ0xjLGdCQUFZcEIsZUFBZTtBQUFBLGFBQVk7QUFDckNRLGdCQUFRYSxRQUFRYixNQURxQjtBQUVyQ2E7QUFGcUMsT0FBWjtBQUFBLEtBQWYsQ0FEUDtBQUtMQyxhQUFTdEIsZUFBZTtBQUFBLGFBQVksRUFBRVEsY0FBRixFQUFVYSxnQkFBVixFQUFaO0FBQUEsS0FBZixDQUxKO0FBTUxFLFlBQVF0QixnQkFBZ0IsRUFBRXVCLGFBQWEsVUFBZixFQUFoQixDQU5IO0FBT0xmLFdBQU87QUFBQSxhQUFLQSxPQUFNZ0IsQ0FBTixDQUFMO0FBQUEsS0FQRjtBQVFMQyxlQUFXO0FBQUEsYUFBTWxCLE1BQU47QUFBQTtBQVJOLEdBQVA7QUFVRCxDQXZDRCIsImZpbGUiOiJwYWNrYWdlcy9ncmFwaHFsL3NlcnZlci9ncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbEV4cHJlc3MsIGdyYXBoaXFsRXhwcmVzcyB9IGZyb20gJ2dyYXBocWwtc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgYnVuZGxlIH0gZnJvbSAnZ3JhcGhxbC1tb2R1bGVzJztcbmltcG9ydCB7IHZhbHVlcyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYnVpbGRTY2hlbWEgZnJvbSAnLi9zY2hlbWEtYnVpbGRlcic7XG5pbXBvcnQgKiBhcyBzY2FsYXJNb2R1bGVzIGZyb20gJy4vc2NhbGFycyc7XG5pbXBvcnQgKiBhcyBkZWZhdWx0RGlyZWN0aXZlcyBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtb2R1bGVzID0gbnVsbCwgZGlyZWN0aXZlcyA9IHt9IH0pID0+IHtcbiAgbGV0IHNjaGVtYSA9IG51bGw7XG4gIGNvbnN0IGFwcGx5ID0gbW9kdWxlcyA9PiB7XG4gICAgY29uc3QgcmF3ID0gdmFsdWVzKHsgLi4uc2NhbGFyTW9kdWxlcywgLi4ubW9kdWxlcyB9KS5maWx0ZXIoeCA9PiB4KTtcbiAgICBjb25zdCB7IG9uQmVmb3JlLCBvbkFmdGVyIH0gPSByYXcucmVkdWNlKFxuICAgICAgKHN0b3JlLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUub25CZWZvcmUpIHtcbiAgICAgICAgICBzdG9yZS5vbkJlZm9yZS5wdXNoKHZhbHVlLm9uQmVmb3JlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUub25BZnRlcikge1xuICAgICAgICAgIHN0b3JlLm9uQWZ0ZXIucHVzaCh2YWx1ZS5vbkFmdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICB9LFxuICAgICAgeyBvbkJlZm9yZTogW10sIG9uQWZ0ZXI6IFtdIH0sXG4gICAgKTtcbiAgICBjb25zdCBidW5kbGVkID0gYnVuZGxlKHJhdyk7XG4gICAgc2NoZW1hID0gYnVpbGRTY2hlbWEoe1xuICAgICAgLi4uYnVuZGxlZCxcbiAgICAgIGRpcmVjdGl2ZXM6IHsgLi4uZGVmYXVsdERpcmVjdGl2ZXMsIC4uLmRpcmVjdGl2ZXMgfSxcbiAgICAgIG9uQmVmb3JlLFxuICAgICAgb25BZnRlcixcbiAgICB9KTtcbiAgICByZXR1cm4gc2NoZW1hO1xuICB9O1xuXG4gIGlmIChtb2R1bGVzKSB7XG4gICAgYXBwbHkobW9kdWxlcyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtaWRkbGV3YXJlOiBncmFwaHFsRXhwcmVzcyhjb250ZXh0ID0+ICh7XG4gICAgICBzY2hlbWE6IGNvbnRleHQuc2NoZW1hLFxuICAgICAgY29udGV4dCxcbiAgICB9KSksXG4gICAgZXhwcmVzczogZ3JhcGhxbEV4cHJlc3MoY29udGV4dCA9PiAoeyBzY2hlbWEsIGNvbnRleHQgfSkpLFxuICAgIGdyYXBoaTogZ3JhcGhpcWxFeHByZXNzKHsgZW5kcG9pbnRVUkw6ICcvZ3JhcGhxbCcgfSksXG4gICAgYXBwbHk6IG0gPT4gYXBwbHkobSksXG4gICAgZ2V0U2NoZW1hOiAoKSA9PiBzY2hlbWEsXG4gIH07XG59O1xuIl19
