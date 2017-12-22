import _set from 'lodash/set';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import faker from 'faker';
import { getDirectiveValue } from '../utils';

export default {
  name: 'fake',
  description: 'Fakes a field.',
  resolveStatic: {
    enter: function enter(node, directive, _ref) {
      var ast = _ref.ast,
          resolvers = _ref.resolvers,
          ancestors = _ref.ancestors;

      if (process.env.FAKE) {
        return;
      }
      if (node.kind === 'ObjectTypeDefinition') {
        var isMany = getDirectiveValue(node, 'fake', 'many');
        var isOne = getDirectiveValue(node, 'fake', 'one');
        if (isMany) {
          _set(resolvers, 'RootQuery.' + isMany, function (source, args) {
            return Array.apply(undefined, _toConsumableArray({ length: Math.random() * (100 - 20) + 20 })).map(Number.call, Number);
          });
        }
        if (isOne) {
          _set(resolvers, 'RootQuery.' + isOne, function (source, args) {
            return {};
          });
        }
      } else {
        var isList = node.type.kind === 'ListType';
        var name = getDirectiveValue(node, 'fake', 'type');
        var leftType = ancestors[ancestors.length - 1].name.value;
        var leftField = node.name.value;
        if (name) {
          var _name$split = name.split('.'),
              _name$split2 = _slicedToArray(_name$split, 2),
              category = _name$split2[0],
              field = _name$split2[1];

          _set(resolvers, leftType + '.' + leftField, function (source, args) {
            return faker[category][field]();
          });
        } else if (isList) {
          _set(resolvers, leftType + '.' + leftField, function (source, args) {
            return Array.apply(undefined, _toConsumableArray({ length: Math.random() * (10 - 3) + 3 })).map(Number.call, Number);
          });
        } else {
          _set(resolvers, leftType + '.' + leftField, function (source, args) {
            return {};
          });
        }
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL2RpcmVjdGl2ZXMvZmFrZS5lczYiXSwibmFtZXMiOlsiZmFrZXIiLCJnZXREaXJlY3RpdmVWYWx1ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlc29sdmVTdGF0aWMiLCJlbnRlciIsIm5vZGUiLCJkaXJlY3RpdmUiLCJhc3QiLCJyZXNvbHZlcnMiLCJhbmNlc3RvcnMiLCJwcm9jZXNzIiwiZW52IiwiRkFLRSIsImtpbmQiLCJpc01hbnkiLCJpc09uZSIsInNvdXJjZSIsImFyZ3MiLCJBcnJheSIsImxlbmd0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXAiLCJOdW1iZXIiLCJjYWxsIiwiaXNMaXN0IiwidHlwZSIsImxlZnRUeXBlIiwidmFsdWUiLCJsZWZ0RmllbGQiLCJzcGxpdCIsImNhdGVnb3J5IiwiZmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxVQUFsQzs7QUFFQSxlQUFlO0FBQ2JDLFFBQU0sTUFETztBQUViQyxlQUFhLGdCQUZBO0FBR2JDLGlCQUFlO0FBQ2JDLFNBRGEsaUJBQ1BDLElBRE8sRUFDREMsU0FEQyxRQUN5QztBQUFBLFVBQTdCQyxHQUE2QixRQUE3QkEsR0FBNkI7QUFBQSxVQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsVUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUNwRCxVQUFJQyxRQUFRQyxHQUFSLENBQVlDLElBQWhCLEVBQXNCO0FBQ3BCO0FBQ0Q7QUFDRCxVQUFJUCxLQUFLUSxJQUFMLEtBQWMsc0JBQWxCLEVBQTBDO0FBQ3hDLFlBQU1DLFNBQVNkLGtCQUFrQkssSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNBLFlBQU1VLFFBQVFmLGtCQUFrQkssSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsQ0FBZDtBQUNBLFlBQUlTLE1BQUosRUFBWTtBQUNWLGVBQUlOLFNBQUosaUJBQTRCTSxNQUE1QixFQUFzQyxVQUFDRSxNQUFELEVBQVNDLElBQVQ7QUFBQSxtQkFDcENDLDBDQUFTLEVBQUVDLFFBQVFDLEtBQUtDLE1BQUwsTUFBaUIsTUFBTSxFQUF2QixJQUE2QixFQUF2QyxFQUFULEdBQXNEQyxHQUF0RCxDQUNFQyxPQUFPQyxJQURULEVBRUVELE1BRkYsQ0FEb0M7QUFBQSxXQUF0QztBQU1EO0FBQ0QsWUFBSVIsS0FBSixFQUFXO0FBQ1QsZUFBSVAsU0FBSixpQkFBNEJPLEtBQTVCLEVBQXFDLFVBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLG1CQUFtQixFQUFuQjtBQUFBLFdBQXJDO0FBQ0Q7QUFDRixPQWRELE1BY087QUFDTCxZQUFNUSxTQUFTcEIsS0FBS3FCLElBQUwsQ0FBVWIsSUFBVixLQUFtQixVQUFsQztBQUNBLFlBQU1aLE9BQU9ELGtCQUFrQkssSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FBYjtBQUNBLFlBQU1zQixXQUFXbEIsVUFBVUEsVUFBVVUsTUFBVixHQUFtQixDQUE3QixFQUFnQ2xCLElBQWhDLENBQXFDMkIsS0FBdEQ7QUFDQSxZQUFNQyxZQUFZeEIsS0FBS0osSUFBTCxDQUFVMkIsS0FBNUI7QUFDQSxZQUFJM0IsSUFBSixFQUFVO0FBQUEsNEJBQ2tCQSxLQUFLNkIsS0FBTCxDQUFXLEdBQVgsQ0FEbEI7QUFBQTtBQUFBLGNBQ0RDLFFBREM7QUFBQSxjQUNTQyxLQURUOztBQUVSLGVBQUl4QixTQUFKLEVBQWtCbUIsUUFBbEIsU0FBOEJFLFNBQTlCLEVBQTJDLFVBQUNiLE1BQUQsRUFBU0MsSUFBVDtBQUFBLG1CQUN6Q2xCLE1BQU1nQyxRQUFOLEVBQWdCQyxLQUFoQixHQUR5QztBQUFBLFdBQTNDO0FBR0QsU0FMRCxNQUtPLElBQUlQLE1BQUosRUFBWTtBQUNqQixlQUFJakIsU0FBSixFQUFrQm1CLFFBQWxCLFNBQThCRSxTQUE5QixFQUEyQyxVQUFDYixNQUFELEVBQVNDLElBQVQ7QUFBQSxtQkFDekNDLDBDQUFTLEVBQUVDLFFBQVFDLEtBQUtDLE1BQUwsTUFBaUIsS0FBSyxDQUF0QixJQUEyQixDQUFyQyxFQUFULEdBQW1EQyxHQUFuRCxDQUNFQyxPQUFPQyxJQURULEVBRUVELE1BRkYsQ0FEeUM7QUFBQSxXQUEzQztBQU1ELFNBUE0sTUFPQTtBQUNMLGVBQUlmLFNBQUosRUFBa0JtQixRQUFsQixTQUE4QkUsU0FBOUIsRUFBMkMsVUFBQ2IsTUFBRCxFQUFTQyxJQUFUO0FBQUEsbUJBQW1CLEVBQW5CO0FBQUEsV0FBM0M7QUFDRDtBQUNGO0FBQ0Y7QUF4Q1k7QUFIRixDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dyYXBocWwvc2VydmVyL2RpcmVjdGl2ZXMvZmFrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xuaW1wb3J0IHsgZ2V0RGlyZWN0aXZlVmFsdWUgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Zha2UnLFxuICBkZXNjcmlwdGlvbjogJ0Zha2VzIGEgZmllbGQuJyxcbiAgcmVzb2x2ZVN0YXRpYzoge1xuICAgIGVudGVyKG5vZGUsIGRpcmVjdGl2ZSwgeyBhc3QsIHJlc29sdmVycywgYW5jZXN0b3JzIH0pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5GQUtFKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmtpbmQgPT09ICdPYmplY3RUeXBlRGVmaW5pdGlvbicpIHtcbiAgICAgICAgY29uc3QgaXNNYW55ID0gZ2V0RGlyZWN0aXZlVmFsdWUobm9kZSwgJ2Zha2UnLCAnbWFueScpO1xuICAgICAgICBjb25zdCBpc09uZSA9IGdldERpcmVjdGl2ZVZhbHVlKG5vZGUsICdmYWtlJywgJ29uZScpO1xuICAgICAgICBpZiAoaXNNYW55KSB7XG4gICAgICAgICAgc2V0KHJlc29sdmVycywgYFJvb3RRdWVyeS4ke2lzTWFueX1gLCAoc291cmNlLCBhcmdzKSA9PlxuICAgICAgICAgICAgQXJyYXkoLi4ueyBsZW5ndGg6IE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMjApICsgMjAgfSkubWFwKFxuICAgICAgICAgICAgICBOdW1iZXIuY2FsbCxcbiAgICAgICAgICAgICAgTnVtYmVyLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09uZSkge1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGBSb290UXVlcnkuJHtpc09uZX1gLCAoc291cmNlLCBhcmdzKSA9PiAoe30pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gbm9kZS50eXBlLmtpbmQgPT09ICdMaXN0VHlwZSc7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBnZXREaXJlY3RpdmVWYWx1ZShub2RlLCAnZmFrZScsICd0eXBlJyk7XG4gICAgICAgIGNvbnN0IGxlZnRUeXBlID0gYW5jZXN0b3JzW2FuY2VzdG9ycy5sZW5ndGggLSAxXS5uYW1lLnZhbHVlO1xuICAgICAgICBjb25zdCBsZWZ0RmllbGQgPSBub2RlLm5hbWUudmFsdWU7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgY29uc3QgW2NhdGVnb3J5LCBmaWVsZF0gPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgc2V0KHJlc29sdmVycywgYCR7bGVmdFR5cGV9LiR7bGVmdEZpZWxkfWAsIChzb3VyY2UsIGFyZ3MpID0+XG4gICAgICAgICAgICBmYWtlcltjYXRlZ29yeV1bZmllbGRdKCksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0xpc3QpIHtcbiAgICAgICAgICBzZXQocmVzb2x2ZXJzLCBgJHtsZWZ0VHlwZX0uJHtsZWZ0RmllbGR9YCwgKHNvdXJjZSwgYXJncykgPT5cbiAgICAgICAgICAgIEFycmF5KC4uLnsgbGVuZ3RoOiBNYXRoLnJhbmRvbSgpICogKDEwIC0gMykgKyAzIH0pLm1hcChcbiAgICAgICAgICAgICAgTnVtYmVyLmNhbGwsXG4gICAgICAgICAgICAgIE51bWJlcixcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXQocmVzb2x2ZXJzLCBgJHtsZWZ0VHlwZX0uJHtsZWZ0RmllbGR9YCwgKHNvdXJjZSwgYXJncykgPT4gKHt9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
