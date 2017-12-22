import ShortID from 'shortid';
/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match last block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function HeadingId(opts) {
  opts = opts || {};
  opts.match = opts.match || function (node) {
    return node.type === opts.type;
  };

  return {
    validateNode: function validateNode(node) {
      if (!node.type || node.type.indexOf('heading-') !== 0) {
        return undefined;
      }

      if (node.data.get('id')) {
        return undefined;
      }

      return function (change) {
        return change.setNodeByKey(node.key, {
          data: node.data.set('id', ShortID.generate())
        });
      };
    }
  };
}

export default HeadingId;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3BsdWdpbnMvaGVhZGluZy1pZC5lczYiXSwibmFtZXMiOlsiU2hvcnRJRCIsIkhlYWRpbmdJZCIsIm9wdHMiLCJtYXRjaCIsIm5vZGUiLCJ0eXBlIiwidmFsaWRhdGVOb2RlIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsImRhdGEiLCJnZXQiLCJjaGFuZ2UiLCJzZXROb2RlQnlLZXkiLCJrZXkiLCJzZXQiLCJnZW5lcmF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsT0FBUCxNQUFvQixTQUFwQjtBQUNBOzs7Ozs7OztBQVFBLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3ZCQSxTQUFPQSxRQUFRLEVBQWY7QUFDQUEsT0FBS0MsS0FBTCxHQUFhRCxLQUFLQyxLQUFMLElBQWU7QUFBQSxXQUFRQyxLQUFLQyxJQUFMLEtBQWNILEtBQUtHLElBQTNCO0FBQUEsR0FBNUI7O0FBRUEsU0FBTztBQUNMQyxrQkFBYyw0QkFBUTtBQUNwQixVQUFJLENBQUNGLEtBQUtDLElBQU4sSUFBY0QsS0FBS0MsSUFBTCxDQUFVRSxPQUFWLENBQWtCLFVBQWxCLE1BQWtDLENBQXBELEVBQXVEO0FBQ3JELGVBQU9DLFNBQVA7QUFDRDs7QUFFRCxVQUFJSixLQUFLSyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxJQUFkLENBQUosRUFBeUI7QUFDdkIsZUFBT0YsU0FBUDtBQUNEOztBQUVELGFBQU87QUFBQSxlQUNMRyxPQUFPQyxZQUFQLENBQW9CUixLQUFLUyxHQUF6QixFQUE4QjtBQUM1QkosZ0JBQU1MLEtBQUtLLElBQUwsQ0FBVUssR0FBVixDQUFjLElBQWQsRUFBb0JkLFFBQVFlLFFBQVIsRUFBcEI7QUFEc0IsU0FBOUIsQ0FESztBQUFBLE9BQVA7QUFJRDtBQWRJLEdBQVA7QUFnQkQ7O0FBRUQsZUFBZWQsU0FBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS9wbHVnaW5zL2hlYWRpbmctaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hvcnRJRCBmcm9tICdzaG9ydGlkJztcbi8qKlxuICogU2xhdGUgcGx1Z2luIHRvIGVuc3VyZSBhIHRyYWlsaW5nIGJsb2NrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSBPcHRpb25zIGZvciB0aGUgcGx1Z2luXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gW29wdHMubWF0Y2g9J3BhcmFncmFwaCddIE1hdGNoIGxhc3QgYmxvY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy50eXBlXSBUaGUgdHlwZSBvZiB0aGUgdHJhaWxpbmcgYmxvY2sgdG8gaW5zZXJ0XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gSGVhZGluZ0lkKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIG9wdHMubWF0Y2ggPSBvcHRzLm1hdGNoIHx8IChub2RlID0+IG5vZGUudHlwZSA9PT0gb3B0cy50eXBlKTtcblxuICByZXR1cm4ge1xuICAgIHZhbGlkYXRlTm9kZTogbm9kZSA9PiB7XG4gICAgICBpZiAoIW5vZGUudHlwZSB8fCBub2RlLnR5cGUuaW5kZXhPZignaGVhZGluZy0nKSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5kYXRhLmdldCgnaWQnKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hhbmdlID0+XG4gICAgICAgIGNoYW5nZS5zZXROb2RlQnlLZXkobm9kZS5rZXksIHtcbiAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdpZCcsIFNob3J0SUQuZ2VuZXJhdGUoKSksXG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdJZDtcbiJdfQ==
