var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// convert #componentName key=value# to object { type: componentName, args: { key: value } }
var parseComponent = function parseComponent(raw) {
  var _raw$split = raw.split('@'),
      _raw$split2 = _toArray(_raw$split),
      text = _raw$split2[0],
      decos = _raw$split2.slice(1);

  var _text$split = text.split(' '),
      _text$split2 = _toArray(_text$split),
      type = _text$split2[0],
      rest = _text$split2.slice(1);

  var decorators = decos.map(parseComponent);
  var args = {};
  var currentKey = 'value';
  rest.forEach(function (frag) {
    if (!frag) {
      return;
    }
    if (frag.indexOf('=') !== -1) {
      var key = frag.substr(0, frag.indexOf('='));
      currentKey = key;
      frag = frag.substr(frag.indexOf('=') + 1);
    }
    if (!args[currentKey]) {
      args[currentKey] = frag;
    } else {
      args[currentKey] += ' ' + frag;
    }
  });

  var value = args.value,
      props = _objectWithoutProperties(args, ['value']);

  return { type: type, value: value, props: props, decorators: decorators, raw: raw };
};
// convert array of lines to AST
export { parseComponent };
export var processLines = function processLines(lines) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!lines || lines.length === 0) {
    return { lines: lines, result: result };
  }

  var _lines = _toArray(lines),
      line = _lines[0],
      rest = _lines.slice(1);

  var split = line.split('#');
  var equalLength = line && line.length === split.length - 1;
  if (equalLength) {
    // '#' or '##' or '##...#'
    if (line.length > 1) {
      rest.splice(0, 0, '#');
    }
    return { lines: rest, result: result };
  } else if (!split[0] && split.length === 2) {
    // # found exactly once
    var arg = processLines(rest);
    rest = arg.lines;
    result.push(_extends({}, parseComponent(split[1]), {
      children: arg.result
    }));
  } else {
    // no # or more than one # => assume text
    if (result.length) {
      result.push({ type: 'paragraph' });
    } // previous lines in result => add line-break
    split.forEach(function (frag, i) {
      //
      if (!frag) {
        return;
      }
      var isEven = i % 2; // if even => inline block, else => just text
      if (isEven) {
        result.push(_extends({}, parseComponent(frag), { inline: true, children: [] }));
      } else {
        result.push({ value: frag, type: 'paragraph' });
      }
    });
  }
  return processLines(rest, result);
};
export default (function (text) {
  if (!text || typeof text !== 'string' || !text.split) {
    return [];
  }
  return processLines(text.split('\n')).result;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9wcm9jZXNzb3JzL3RleHQtdG8tYXN0LmVzNiJdLCJuYW1lcyI6WyJwYXJzZUNvbXBvbmVudCIsInJhdyIsInNwbGl0IiwidGV4dCIsImRlY29zIiwidHlwZSIsInJlc3QiLCJkZWNvcmF0b3JzIiwibWFwIiwiYXJncyIsImN1cnJlbnRLZXkiLCJmb3JFYWNoIiwiZnJhZyIsImluZGV4T2YiLCJrZXkiLCJzdWJzdHIiLCJ2YWx1ZSIsInByb3BzIiwicHJvY2Vzc0xpbmVzIiwibGluZXMiLCJyZXN1bHQiLCJsZW5ndGgiLCJsaW5lIiwiZXF1YWxMZW5ndGgiLCJzcGxpY2UiLCJhcmciLCJwdXNoIiwiY2hpbGRyZW4iLCJpIiwiaXNFdmVuIiwiaW5saW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNPLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsTUFBTztBQUFBLG1CQUNWQyxJQUFJQyxLQUFKLENBQVUsR0FBVixDQURVO0FBQUE7QUFBQSxNQUM1QkMsSUFENEI7QUFBQSxNQUNuQkMsS0FEbUI7O0FBQUEsb0JBRVhELEtBQUtELEtBQUwsQ0FBVyxHQUFYLENBRlc7QUFBQTtBQUFBLE1BRTVCRyxJQUY0QjtBQUFBLE1BRW5CQyxJQUZtQjs7QUFHbkMsTUFBTUMsYUFBYUgsTUFBTUksR0FBTixDQUFVUixjQUFWLENBQW5CO0FBQ0EsTUFBTVMsT0FBTyxFQUFiO0FBQ0EsTUFBSUMsYUFBYSxPQUFqQjtBQUNBSixPQUFLSyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsUUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDVDtBQUNEO0FBQ0QsUUFBSUEsS0FBS0MsT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBQyxDQUEzQixFQUE4QjtBQUM1QixVQUFNQyxNQUFNRixLQUFLRyxNQUFMLENBQVksQ0FBWixFQUFlSCxLQUFLQyxPQUFMLENBQWEsR0FBYixDQUFmLENBQVo7QUFDQUgsbUJBQWFJLEdBQWI7QUFDQUYsYUFBT0EsS0FBS0cs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dGF4L3Byb2Nlc3NvcnMvdGV4dC10by1hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb252ZXJ0ICNjb21wb25lbnROYW1lIGtleT12YWx1ZSMgdG8gb2JqZWN0IHsgdHlwZTogY29tcG9uZW50TmFtZSwgYXJnczogeyBrZXk6IHZhbHVlIH0gfVxuZXhwb3J0IGNvbnN0IHBhcnNlQ29tcG9uZW50ID0gcmF3ID0+IHtcbiAgY29uc3QgW3RleHQsIC4uLmRlY29zXSA9IHJhdy5zcGxpdCgnQCcpO1xuICBjb25zdCBbdHlwZSwgLi4ucmVzdF0gPSB0ZXh0LnNwbGl0KCcgJyk7XG4gIGNvbnN0IGRlY29yYXRvcnMgPSBkZWNvcy5tYXAocGFyc2VDb21wb25lbnQpO1xuICBjb25zdCBhcmdzID0ge307XG4gIGxldCBjdXJyZW50S2V5ID0gJ3ZhbHVlJztcbiAgcmVzdC5mb3JFYWNoKGZyYWcgPT4ge1xuICAgIGlmICghZnJhZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZnJhZy5pbmRleE9mKCc9JykgIT09IC0xKSB7XG4gICAgICBjb25zdCBrZXkgPSBmcmFnLnN1YnN0cigwLCBmcmFnLmluZGV4T2YoJz0nKSk7XG4gICAgICBjdXJyZW50S2V5ID0ga2V5O1xuICAgICAgZnJhZyA9IGZyYWcuc3Vic3RyKGZyYWcuaW5kZXhPZignPScpICsgMSk7XG4gICAgfVxuICAgIGlmICghYXJnc1tjdXJyZW50S2V5XSkge1xuICAgICAgYXJnc1tjdXJyZW50S2V5XSA9IGZyYWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3NbY3VycmVudEtleV0gKz0gYCAke2ZyYWd9YDtcbiAgICB9XG4gIH0pO1xuICBjb25zdCB7IHZhbHVlLCAuLi5wcm9wcyB9ID0gYXJncztcbiAgcmV0dXJuIHsgdHlwZSwgdmFsdWUsIHByb3BzLCBkZWNvcmF0b3JzLCByYXcgfTtcbn07XG4vLyBjb252ZXJ0IGFycmF5IG9mIGxpbmVzIHRvIEFTVFxuZXhwb3J0IGNvbnN0IHByb2Nlc3NMaW5lcyA9IChsaW5lcywgcmVzdWx0ID0gW10pID0+IHtcbiAgaWYgKCFsaW5lcyB8fCBsaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBsaW5lcywgcmVzdWx0IH07XG4gIH1cbiAgbGV0IFtsaW5lLCAuLi5yZXN0XSA9IGxpbmVzO1xuICBjb25zdCBzcGxpdCA9IGxpbmUuc3BsaXQoJyMnKTtcbiAgY29uc3QgZXF1YWxMZW5ndGggPSBsaW5lICYmIGxpbmUubGVuZ3RoID09PSBzcGxpdC5sZW5ndGggLSAxO1xuICBpZiAoZXF1YWxMZW5ndGgpIHtcbiAgICAvLyAnIycgb3IgJyMjJyBvciAnIyMuLi4jJ1xuICAgIGlmIChsaW5lLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJlc3Quc3BsaWNlKDAsIDAsICcjJyk7XG4gICAgfVxuICAgIHJldHVybiB7IGxpbmVzOiByZXN0LCByZXN1bHQgfTtcbiAgfSBlbHNlIGlmICghc3BsaXRbMF0gJiYgc3BsaXQubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gIyBmb3VuZCBleGFjdGx5IG9uY2VcbiAgICBjb25zdCBhcmcgPSBwcm9jZXNzTGluZXMocmVzdCk7XG4gICAgcmVzdCA9IGFyZy5saW5lcztcbiAgICByZXN1bHQucHVzaCh7XG4gICAgICAuLi5wYXJzZUNvbXBvbmVudChzcGxpdFsxXSksXG4gICAgICBjaGlsZHJlbjogYXJnLnJlc3VsdCxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBubyAjIG9yIG1vcmUgdGhhbiBvbmUgIyA9PiBhc3N1bWUgdGV4dFxuICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICByZXN1bHQucHVzaCh7IHR5cGU6ICdwYXJhZ3JhcGgnIH0pO1xuICAgIH0gLy8gcHJldmlvdXMgbGluZXMgaW4gcmVzdWx0ID0+IGFkZCBsaW5lLWJyZWFrXG4gICAgc3BsaXQuZm9yRWFjaCgoZnJhZywgaSkgPT4ge1xuICAgICAgLy9cbiAgICAgIGlmICghZnJhZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc0V2ZW4gPSBpICUgMjsgLy8gaWYgZXZlbiA9PiBpbmxpbmUgYmxvY2ssIGVsc2UgPT4ganVzdCB0ZXh0XG4gICAgICBpZiAoaXNFdmVuKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgLi4ucGFyc2VDb21wb25lbnQoZnJhZyksIGlubGluZTogdHJ1ZSwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2goeyB2YWx1ZTogZnJhZywgdHlwZTogJ3BhcmFncmFwaCcgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3NMaW5lcyhyZXN0LCByZXN1bHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRleHQgPT4ge1xuICBpZiAoIXRleHQgfHwgdHlwZW9mIHRleHQgIT09ICdzdHJpbmcnIHx8ICF0ZXh0LnNwbGl0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBwcm9jZXNzTGluZXModGV4dC5zcGxpdCgnXFxuJykpLnJlc3VsdDtcbn07XG4iXX0=
