var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var traverse = function traverse(fn) {
  return function () {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (node, key) {
      var type = node.type || 'text';
      var children = node.children || [];
      var decos = node.decorators || [];
      var value = node.value;
      var props = node.props ? _extends({}, context, node.props) : _extends({}, context);
      if (key !== undefined) {
        props.key = key;
      }
      if (node.text) {
        props.text = node.text;
      }
      return fn(type, _extends({}, props, { value: value, children: children.map(traverse(context)) }), decos);
    };
  };
};
export default traverse;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC91dGlscy90cmF2ZXJzZS5lczYiXSwibmFtZXMiOlsidHJhdmVyc2UiLCJjb250ZXh0Iiwibm9kZSIsImtleSIsInR5cGUiLCJjaGlsZHJlbiIsImRlY29zIiwiZGVjb3JhdG9ycyIsInZhbHVlIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJ0ZXh0IiwiZm4iLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTTtBQUFBLFFBQUNDLE9BQUQsdUVBQVcsRUFBWDtBQUFBLFdBQWtCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3RELFVBQU1DLE9BQU9GLEtBQUtFLElBQUwsSUFBYSxNQUExQjtBQUNBLFVBQU1DLFdBQVdILEtBQUtHLFFBQUwsSUFBaUIsRUFBbEM7QUFDQSxVQUFNQyxRQUFRSixLQUFLSyxVQUFMLElBQW1CLEVBQWpDO0FBQ0EsVUFBTUMsUUFBUU4sS0FBS00sS0FBbkI7QUFDQSxVQUFNQyxRQUFRUCxLQUFLTyxLQUFMLGdCQUFrQlIsT0FBbEIsRUFBOEJDLEtBQUtPLEtBQW5DLGlCQUFrRFIsT0FBbEQsQ0FBZDtBQUNBLFVBQUlFLFFBQVFPLFNBQVosRUFBdUI7QUFDckJELGNBQU1OLEdBQU4sR0FBWUEsR0FBWjtBQUNEO0FBQ0QsVUFBSUQsS0FBS1MsSUFBVCxFQUFlO0FBQ2JGLGNBQU1FLElBQU4sR0FBYVQsS0FBS1MsSUFBbEI7QUFDRDtBQUNELGFBQU9DLEdBQ0xSLElBREssZUFFQUssS0FGQSxJQUVPRCxZQUZQLEVBRWNILFVBQVVBLFNBQVNRLEdBQVQsQ0FBYWIsU0FBU0MsT0FBVCxDQUFiLENBRnhCLEtBR0xLLEtBSEssQ0FBUDtBQUtELEtBakJzQjtBQUFBLEdBQU47QUFBQSxDQUFqQjtBQWtCQSxlQUFlTixRQUFmIiwiZmlsZSI6InBhY2thZ2VzL21haWwvaGFzaHRheC91dGlscy90cmF2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRyYXZlcnNlID0gZm4gPT4gKGNvbnRleHQgPSB7fSkgPT4gKG5vZGUsIGtleSkgPT4ge1xuICBjb25zdCB0eXBlID0gbm9kZS50eXBlIHx8ICd0ZXh0JztcbiAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdO1xuICBjb25zdCBkZWNvcyA9IG5vZGUuZGVjb3JhdG9ycyB8fCBbXTtcbiAgY29uc3QgdmFsdWUgPSBub2RlLnZhbHVlO1xuICBjb25zdCBwcm9wcyA9IG5vZGUucHJvcHMgPyB7IC4uLmNvbnRleHQsIC4uLm5vZGUucHJvcHMgfSA6IHsgLi4uY29udGV4dCB9O1xuICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy5rZXkgPSBrZXk7XG4gIH1cbiAgaWYgKG5vZGUudGV4dCkge1xuICAgIHByb3BzLnRleHQgPSBub2RlLnRleHQ7XG4gIH1cbiAgcmV0dXJuIGZuKFxuICAgIHR5cGUsXG4gICAgeyAuLi5wcm9wcywgdmFsdWUsIGNoaWxkcmVuOiBjaGlsZHJlbi5tYXAodHJhdmVyc2UoY29udGV4dCkpIH0sXG4gICAgZGVjb3NcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCB0cmF2ZXJzZTtcbiJdfQ==
