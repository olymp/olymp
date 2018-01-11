'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pugLexer = require('pug-lexer');

var _pugLexer2 = _interopRequireDefault(_pugLexer);

var _pugParser = require('pug-parser');

var _pugParser2 = _interopRequireDefault(_pugParser);

var _olympSlate = require('olymp-slate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var map = {
  col: 'column',
  cols: 'columns',
  p: 'paragraph',
  a: 'link',
  h1: 'heading-one',
  h2: 'heading-two',
  h3: 'heading-three',
  h4: 'heading-four',
  h5: 'heading-five',
  h6: 'heading-six',
  link: function link(node) {
    node.kind = 'inline';
    return node;
  },
  gql: function gql(node) {
    var text = node.nodes.filter(function (x) {
      return x.leaves[0].text !== '\n';
    }).map(function (x) {
      return x.leaves[0].text;
    }).join('\n');
    node.type = 'graphiql';
    node.isVoid = true;
    node.data.query = text;
    console.log(text);
    return node;
  },
  code: function code(node) {
    node.nodes = node.nodes.filter(function (x) {
      return x.leaves[0].text !== '\n';
    }).map(function (x) {
      return {
        type: 'code-line',
        kind: 'block',
        nodes: [x]
      };
    });
    return node;
  },
  table: function table(node) {
    if (node.data && node.data.columns) {
      node.data.columns = node.data.columns.split('|');
    }
    node.nodes = node.nodes.filter(function (x) {
      return x.leaves[0].text !== '\n' && x.leaves[0].text !== '';
    }).map(function (x) {
      return {
        type: 'table-row',
        kind: 'block',
        nodes: x.leaves[0].text.split('|').map(function (text) {
          return {
            type: 'table-data',
            kind: 'block',
            nodes: [{
              kind: 'text',
              leaves: [{
                kind: 'leaf',
                text: text
              }]
            }]
          };
        })
      };
    });
    return node;
  }
};

var convert = function convert(src) {
  var v = (0, _pugParser2.default)((0, _pugLexer2.default)(src), { src: src });
  var convertNode = function convertNode(_ref) {
    var type = _ref.type,
        name = _ref.name,
        _ref$attrs = _ref.attrs,
        attrs = _ref$attrs === undefined ? [] : _ref$attrs,
        block = _ref.block,
        val = _ref.val;

    if (type === 'Tag') {
      name = map[name] && typeof map[name] === 'string' ? map[name] : name;
      var reg = _olympSlate.registry.blocks[name] || {};
      var node = {
        isVoid: reg.isVoid,
        type: name,
        kind: 'block',
        data: attrs.reduce(function (r, i) {
          var val = i.val;
          if (typeof val === 'string' && val.charAt(0) === '"' && val.charAt(val.length - 1) === '"') {
            val = val.substr(1, val.length - 2);
          } else if (typeof val === 'string' && val.charAt(0) === "'" && val.charAt(val.length - 1) === "'") {
            val = val.substr(1, val.length - 2);
          }
          return _extends({}, r, _defineProperty({}, i.name, val));
        }, {}),
        nodes: block && block.nodes && block.nodes.map(convertNode).filter(function (x) {
          return x;
        })
      };
      return map[name] && typeof map[name] === 'function' && map[name](node) || node;
    } else if (type === 'Text') {
      return {
        kind: 'text',
        leaves: [{ kind: 'leaf', text: val }]
      };
    }
  };
  return { nodes: v.nodes.map(convertNode).filter(function (x) {
      return x;
    }) };
};

exports.default = convert;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3B1Zy90by1zbGF0ZS9jb252ZXJ0LmVzNiJdLCJuYW1lcyI6WyJtYXAiLCJjb2wiLCJjb2xzIiwicCIsImEiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaW5rIiwibm9kZSIsImtpbmQiLCJncWwiLCJ0ZXh0Iiwibm9kZXMiLCJmaWx0ZXIiLCJ4IiwibGVhdmVzIiwiam9pbiIsInR5cGUiLCJpc1ZvaWQiLCJkYXRhIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsInRhYmxlIiwiY29sdW1ucyIsInNwbGl0IiwiY29udmVydCIsInYiLCJzcmMiLCJjb252ZXJ0Tm9kZSIsIm5hbWUiLCJhdHRycyIsImJsb2NrIiwidmFsIiwicmVnIiwiYmxvY2tzIiwicmVkdWNlIiwiciIsImkiLCJjaGFyQXQiLCJsZW5ndGgiLCJzdWJzdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNO0FBQ1ZDLE9BQUssUUFESztBQUVWQyxRQUFNLFNBRkk7QUFHVkMsS0FBRyxXQUhPO0FBSVZDLEtBQUcsTUFKTztBQUtWQyxNQUFJLGFBTE07QUFNVkMsTUFBSSxhQU5NO0FBT1ZDLE1BQUksZUFQTTtBQVFWQyxNQUFJLGNBUk07QUFTVkMsTUFBSSxjQVRNO0FBVVZDLE1BQUksYUFWTTtBQVdWQyxRQUFNLG9CQUFRO0FBQ1pDLFNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsV0FBT0QsSUFBUDtBQUNELEdBZFM7QUFlVkUsT0FBSyxtQkFBUTtBQUNYLFFBQU1DLE9BQU9ILEtBQUtJLEtBQUwsQ0FDVkMsTUFEVSxDQUNIO0FBQUEsYUFBS0MsRUFBRUMsTUFBRixDQUFTLENBQVQsRUFBWUosSUFBWixLQUFxQixJQUExQjtBQUFBLEtBREcsRUFFVmYsR0FGVSxDQUVOO0FBQUEsYUFBS2tCLEVBQUVDLE1BQUYsQ0FBUyxDQUFULEVBQVlKLElBQWpCO0FBQUEsS0FGTSxFQUdW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RDtBQUNGLEdBdENEO0FBdUNBLFNBQU8sRUFBRXRCLE9BQU9nQixFQUFFaEIsS0FBRixDQUFRaEIsR0FBUixDQUFZa0MsV0FBWixFQUF5QmpCLE1BQXpCLENBQWdDO0FBQUEsYUFBS0MsQ0FBTDtBQUFBLEtBQWhDLENBQVQsRUFBUDtBQUNELENBMUNEOztrQkE0Q2VhLE8iLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvcHVnL3RvLXNsYXRlL2NvbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGV4IGZyb20gJ3B1Zy1sZXhlcic7XG5pbXBvcnQgcGFyc2UgZnJvbSAncHVnLXBhcnNlcic7XG5pbXBvcnQgeyByZWdpc3RyeSB9IGZyb20gJ29seW1wLXNsYXRlJztcblxuY29uc3QgbWFwID0ge1xuICBjb2w6ICdjb2x1bW4nLFxuICBjb2xzOiAnY29sdW1ucycsXG4gIHA6ICdwYXJhZ3JhcGgnLFxuICBhOiAnbGluaycsXG4gIGgxOiAnaGVhZGluZy1vbmUnLFxuICBoMjogJ2hlYWRpbmctdHdvJyxcbiAgaDM6ICdoZWFkaW5nLXRocmVlJyxcbiAgaDQ6ICdoZWFkaW5nLWZvdXInLFxuICBoNTogJ2hlYWRpbmctZml2ZScsXG4gIGg2OiAnaGVhZGluZy1zaXgnLFxuICBsaW5rOiBub2RlID0+IHtcbiAgICBub2RlLmtpbmQgPSAnaW5saW5lJztcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgZ3FsOiBub2RlID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gbm9kZS5ub2Rlc1xuICAgICAgLmZpbHRlcih4ID0+IHgubGVhdmVzWzBdLnRleHQgIT09ICdcXG4nKVxuICAgICAgLm1hcCh4ID0+IHgubGVhdmVzWzBdLnRleHQpXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgbm9kZS50eXBlID0gJ2dyYXBoaXFsJztcbiAgICBub2RlLmlzVm9pZCA9IHRydWU7XG4gICAgbm9kZS5kYXRhLnF1ZXJ5ID0gdGV4dDtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY29kZTogbm9kZSA9PiB7XG4gICAgbm9kZS5ub2RlcyA9IG5vZGUubm9kZXMuZmlsdGVyKHggPT4geC5sZWF2ZXNbMF0udGV4dCAhPT0gJ1xcbicpLm1hcCh4ID0+ICh7XG4gICAgICB0eXBlOiAnY29kZS1saW5lJyxcbiAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICBub2RlczogW3hdLFxuICAgIH0pKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgdGFibGU6IG5vZGUgPT4ge1xuICAgIGlmIChub2RlLmRhdGEgJiYgbm9kZS5kYXRhLmNvbHVtbnMpIHtcbiAgICAgIG5vZGUuZGF0YS5jb2x1bW5zID0gbm9kZS5kYXRhLmNvbHVtbnMuc3BsaXQoJ3wnKTtcbiAgICB9XG4gICAgbm9kZS5ub2RlcyA9IG5vZGUubm9kZXNcbiAgICAgIC5maWx0ZXIoeCA9PiB4LmxlYXZlc1swXS50ZXh0ICE9PSAnXFxuJyAmJiB4LmxlYXZlc1swXS50ZXh0ICE9PSAnJylcbiAgICAgIC5tYXAoeCA9PiAoe1xuICAgICAgICB0eXBlOiAndGFibGUtcm93JyxcbiAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgbm9kZXM6IHgubGVhdmVzWzBdLnRleHQuc3BsaXQoJ3wnKS5tYXAodGV4dCA9PiAoe1xuICAgICAgICAgIHR5cGU6ICd0YWJsZS1kYXRhJyxcbiAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtpbmQ6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgbGVhdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ2xlYWYnLFxuICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSksXG4gICAgICB9KSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG59O1xuXG5jb25zdCBjb252ZXJ0ID0gc3JjID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlKGxleChzcmMpLCB7IHNyYyB9KTtcbiAgY29uc3QgY29udmVydE5vZGUgPSAoeyB0eXBlLCBuYW1lLCBhdHRycyA9IFtdLCBibG9jaywgdmFsIH0pID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ1RhZycpIHtcbiAgICAgIG5hbWUgPSBtYXBbbmFtZV0gJiYgdHlwZW9mIG1hcFtuYW1lXSA9PT0gJ3N0cmluZycgPyBtYXBbbmFtZV0gOiBuYW1lO1xuICAgICAgY29uc3QgcmVnID0gcmVnaXN0cnkuYmxvY2tzW25hbWVdIHx8IHt9O1xuICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgaXNWb2lkOiByZWcuaXNWb2lkLFxuICAgICAgICB0eXBlOiBuYW1lLFxuICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICBkYXRhOiBhdHRycy5yZWR1Y2UoKHIsIGkpID0+IHtcbiAgICAgICAgICBsZXQgdmFsID0gaS52YWw7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIHZhbC5jaGFyQXQoMCkgPT09ICdcIicgJiZcbiAgICAgICAgICAgIHZhbC5jaGFyQXQodmFsLmxlbmd0aCAtIDEpID09PSAnXCInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyKDEsIHZhbC5sZW5ndGggLSAyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIHZhbC5jaGFyQXQoMCkgPT09IFwiJ1wiICYmXG4gICAgICAgICAgICB2YWwuY2hhckF0KHZhbC5sZW5ndGggLSAxKSA9PT0gXCInXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zdWJzdHIoMSwgdmFsLmxlbmd0aCAtIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyAuLi5yLCBbaS5uYW1lXTogdmFsIH07XG4gICAgICAgIH0sIHt9KSxcbiAgICAgICAgbm9kZXM6XG4gICAgICAgICAgYmxvY2sgJiYgYmxvY2subm9kZXMgJiYgYmxvY2subm9kZXMubWFwKGNvbnZlcnROb2RlKS5maWx0ZXIoeCA9PiB4KSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICAobWFwW25hbWVdICYmIHR5cGVvZiBtYXBbbmFtZV0gPT09ICdmdW5jdGlvbicgJiYgbWFwW25hbWVdKG5vZGUpKSB8fFxuICAgICAgICBub2RlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1RleHQnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAndGV4dCcsXG4gICAgICAgIGxlYXZlczogW3sga2luZDogJ2xlYWYnLCB0ZXh0OiB2YWwgfV0sXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgbm9kZXM6IHYubm9kZXMubWFwKGNvbnZlcnROb2RlKS5maWx0ZXIoeCA9PiB4KSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydDtcbiJdfQ==
