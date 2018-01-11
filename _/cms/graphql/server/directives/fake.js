'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
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
        var isMany = (0, _utils.getDirectiveValue)(node, 'fake', 'many');
        var isOne = (0, _utils.getDirectiveValue)(node, 'fake', 'one');
        if (isMany) {
          (0, _set3.default)(resolvers, 'RootQuery.' + isMany, function (source, args) {
            return Array.apply(undefined, _toConsumableArray({ length: Math.random() * (100 - 20) + 20 })).map(Number.call, Number);
          });
        }
        if (isOne) {
          (0, _set3.default)(resolvers, 'RootQuery.' + isOne, function (source, args) {
            return {};
          });
        }
      } else {
        var isList = node.type.kind === 'ListType';
        var name = (0, _utils.getDirectiveValue)(node, 'fake', 'type');
        var leftType = ancestors[ancestors.length - 1].name.value;
        var leftField = node.name.value;
        if (name) {
          var _name$split = name.split('.'),
              _name$split2 = _slicedToArray(_name$split, 2),
              category = _name$split2[0],
              field = _name$split2[1];

          (0, _set3.default)(resolvers, leftType + '.' + leftField, function (source, args) {
            return _faker2.default[category][field]();
          });
        } else if (isList) {
          (0, _set3.default)(resolvers, leftType + '.' + leftField, function (source, args) {
            return Array.apply(undefined, _toConsumableArray({ length: Math.random() * (10 - 3) + 3 })).map(Number.call, Number);
          });
        } else {
          (0, _set3.default)(resolvers, leftType + '.' + leftField, function (source, args) {
            return {};
          });
        }
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9kaXJlY3RpdmVzL2Zha2UuZXM2Il0sIm5hbWVzIjpbIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlc29sdmVTdGF0aWMiLCJlbnRlciIsIm5vZGUiLCJkaXJlY3RpdmUiLCJhc3QiLCJyZXNvbHZlcnMiLCJhbmNlc3RvcnMiLCJwcm9jZXNzIiwiZW52IiwiRkFLRSIsImtpbmQiLCJpc01hbnkiLCJpc09uZSIsInNvdXJjZSIsImFyZ3MiLCJBcnJheSIsImxlbmd0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXAiLCJOdW1iZXIiLCJjYWxsIiwiaXNMaXN0IiwidHlwZSIsImxlZnRUeXBlIiwidmFsdWUiLCJsZWZ0RmllbGQiLCJzcGxpdCIsImNhdGVnb3J5IiwiZmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxRQUFNLE1BRE87QUFFYkMsZUFBYSxnQkFGQTtBQUdiQyxpQkFBZTtBQUNiQyxTQURhLGlCQUNQQyxJQURPLEVBQ0RDLFNBREMsUUFDeUM7QUFBQSxVQUE3QkMsR0FBNkIsUUFBN0JBLEdBQTZCO0FBQUEsVUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLFVBQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFDcEQsVUFBSUMsUUFBUUMsR0FBUixDQUFZQyxJQUFoQixFQUFzQjtBQUNwQjtBQUNEO0FBQ0QsVUFBSVAsS0FBS1EsSUFBTCxLQUFjLHNCQUFsQixFQUEwQztBQUN4QyxZQUFNQyxTQUFTLDhCQUFrQlQsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNBLFlBQU1VLFFBQVEsOEJBQWtCVixJQUFsQixFQUF3QixNQUF4QixFQUFnQyxLQUFoQyxDQUFkO0FBQ0EsWUFBSVMsTUFBSixFQUFZO0FBQ1YsNkJBQUlOLFNBQUosaUJBQTRCTSxNQUE1QixFQUFzQyxVQUFDRSxNQUFELEVBQVNDLElBQVQ7QUFBQSxtQkFDcENDLDBDQUFTLEVBQUVDLFFBQVFDLEtBQUtDLE1BQUwsTUFBaUIsTUFBTSxFQUF2QixJQUE2QixFQUF2QyxFQUFULEdBQXNEQyxHQUF0RCxDQUNFQyxPQUFPQyxJQURULEVBRUVELE1BRkYsQ0FEb0M7QUFBQSxXQUF0QztBQU1EO0FBQ0QsWUFBSVIsS0FBSixFQUFXO0FBQ1QsNkJBQUlQLFNBQUosaUJBQTRCTyxLQUE1QixFQUFxQyxVQUFDQyxNQUFELEVBQVNDLElBQVQ7QUFBQSxtQkFBbUIsRUFBbkI7QUFBQSxXQUFyQztBQUNEO0FBQ0YsT0FkRCxNQWNPO0FBQ0wsWUFBTVEsU0FBU3BCLEtBQUtxQixJQUFMLENBQVViLElBQVYsS0FBbUIsVUFBbEM7QUFDQSxZQUFNWixPQUFPLDhCQUFrQkksSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FBYjtBQUNBLFlBQU1zQixXQUFXbEIsVUFBVUEsVUFBVVUsTUFBVixHQUFtQixDQUE3QixFQUFnQ2xCLElBQWhDLENBQXFDMkIsS0FBdEQ7QUFDQSxZQUFNQyxZQUFZeEIsS0FBS0osSUFBTCxDQUFVMkIsS0FBNUI7QUFDQSxZQUFJM0IsSUFBSixFQUFVO0FBQUEsNEJBQ2tCQSxLQUFLNkIsS0FBTCxDQUFXLEdBQVgsQ0FEbEI7QUFBQTtBQUFBLGNBQ0RDLFFBREM7QUFBQSxjQUNTQyxLQURUOztBQUVSLDZCQUFJeEIsU0FBSixFQUFrQm1CLFFBQWxCLFNBQThCRSxTQUE5QixFQUEyQyxVQUFDYixNQUFELEVBQVNDLElBQVQ7QUFBQSxtQkFDekMsZ0JBQU1jLFFBQU4sRUFBZ0JDLEtBQWhCLEdBRHlDO0FBQUEsV0FBM0M7QUFHRCxTQUxELE1BS08sSUFBSVAsTUFBSixFQUFZO0FBQ2pCLDZCQUFJakIsU0FBSixFQUFrQm1CLFFBQWxCLFNBQThCRSxTQUE5QixFQUEyQyxVQUFDYixNQUFELEVBQVNDLElBQVQ7QUFBQSxtQkFDekNDLDBDQUFTLEVBQUVDLFFBQVFDLEtBQUtDLE1BQUwsTUFBaUIsS0FBSyxDQUF0QixJQUEyQixDQUFyQyxFQUFULEdBQW1EQyxHQUFuRCxDQUNFQyxPQUFPQyxJQURULEVBRUVELE1BRkYsQ0FEeUM7QUFBQSxXQUEzQztBQU1ELFNBUE0sTUFPQTtBQUNMLDZCQUFJZixTQUFKLEVBQWtCbUIsUUFBbEIsU0FBOEJFLFNBQTlCLEVBQTJDLFVBQUNiLE1BQUQsRUFBU0MsSUFBVDtBQUFBLG1CQUFtQixFQUFuQjtBQUFBLFdBQTNDO0FBQ0Q7QUFDRjtBQUNGO0FBeENZO0FBSEYsQyIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvZGlyZWN0aXZlcy9mYWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XG5pbXBvcnQgeyBnZXREaXJlY3RpdmVWYWx1ZSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmFrZScsXG4gIGRlc2NyaXB0aW9uOiAnRmFrZXMgYSBmaWVsZC4nLFxuICByZXNvbHZlU3RhdGljOiB7XG4gICAgZW50ZXIobm9kZSwgZGlyZWN0aXZlLCB7IGFzdCwgcmVzb2x2ZXJzLCBhbmNlc3RvcnMgfSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkZBS0UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUua2luZCA9PT0gJ09iamVjdFR5cGVEZWZpbml0aW9uJykge1xuICAgICAgICBjb25zdCBpc01hbnkgPSBnZXREaXJlY3RpdmVWYWx1ZShub2RlLCAnZmFrZScsICdtYW55Jyk7XG4gICAgICAgIGNvbnN0IGlzT25lID0gZ2V0RGlyZWN0aXZlVmFsdWUobm9kZSwgJ2Zha2UnLCAnb25lJyk7XG4gICAgICAgIGlmIChpc01hbnkpIHtcbiAgICAgICAgICBzZXQocmVzb2x2ZXJzLCBgUm9vdFF1ZXJ5LiR7aXNNYW55fWAsIChzb3VyY2UsIGFyZ3MpID0+XG4gICAgICAgICAgICBBcnJheSguLi57IGxlbmd0aDogTWF0aC5yYW5kb20oKSAqICgxMDAgLSAyMCkgKyAyMCB9KS5tYXAoXG4gICAgICAgICAgICAgIE51bWJlci5jYWxsLFxuICAgICAgICAgICAgICBOdW1iZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT25lKSB7XG4gICAgICAgICAgc2V0KHJlc29sdmVycywgYFJvb3RRdWVyeS4ke2lzT25lfWAsIChzb3VyY2UsIGFyZ3MpID0+ICh7fSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpc0xpc3QgPSBub2RlLnR5cGUua2luZCA9PT0gJ0xpc3RUeXBlJztcbiAgICAgICAgY29uc3QgbmFtZSA9IGdldERpcmVjdGl2ZVZhbHVlKG5vZGUsICdmYWtlJywgJ3R5cGUnKTtcbiAgICAgICAgY29uc3QgbGVmdFR5cGUgPSBhbmNlc3RvcnNbYW5jZXN0b3JzLmxlbmd0aCAtIDFdLm5hbWUudmFsdWU7XG4gICAgICAgIGNvbnN0IGxlZnRGaWVsZCA9IG5vZGUubmFtZS52YWx1ZTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICBjb25zdCBbY2F0ZWdvcnksIGZpZWxkXSA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBzZXQocmVzb2x2ZXJzLCBgJHtsZWZ0VHlwZX0uJHtsZWZ0RmllbGR9YCwgKHNvdXJjZSwgYXJncykgPT5cbiAgICAgICAgICAgIGZha2VyW2NhdGVnb3J5XVtmaWVsZF0oKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGlzdCkge1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGAke2xlZnRUeXBlfS4ke2xlZnRGaWVsZH1gLCAoc291cmNlLCBhcmdzKSA9PlxuICAgICAgICAgICAgQXJyYXkoLi4ueyBsZW5ndGg6IE1hdGgucmFuZG9tKCkgKiAoMTAgLSAzKSArIDMgfSkubWFwKFxuICAgICAgICAgICAgICBOdW1iZXIuY2FsbCxcbiAgICAgICAgICAgICAgTnVtYmVyLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGAke2xlZnRUeXBlfS4ke2xlZnRGaWVsZH1gLCAoc291cmNlLCBhcmdzKSA9PiAoe30pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuIl19
