'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      bottom = _ref.bottom;
  return {
    flex: 'none !important',
    paddingBottom: !bottom && theme.space2,
    marginBottom: !bottom && theme.space2,
    borderBottom: !bottom && (0, _olympFela.border)(theme),
    paddingTop: bottom && theme.space2,
    marginTop: bottom && theme.space2,
    borderTop: bottom && (0, _olympFela.border)(theme),
    '> div': {
      '> *': {
        width: '100%'
      },
      '> .ant-radio-group': {
        hasFlex: {
          display: 'flex',
          '> label': {
            flexGrow: 1,
            textAlign: 'center'
          }
        }
      }
    },
    '> *:not(:first-child)': {
      paddingLeft: theme.space2
    }
  };
}, function (_ref2) {
  var bottom = _ref2.bottom,
      p = _objectWithoutProperties(_ref2, ['bottom']);

  return _react2.default.createElement(_olympFela.Grid, p);
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvdG9vbGJhci5lczYiXSwibmFtZXMiOlsidGhlbWUiLCJib3R0b20iLCJmbGV4IiwicGFkZGluZ0JvdHRvbSIsInNwYWNlMiIsIm1hcmdpbkJvdHRvbSIsImJvcmRlckJvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW5Ub3AiLCJib3JkZXJUb3AiLCJ3aWR0aCIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nTGVmdCIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWUsZ0NBQ2I7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxTQUF3QjtBQUN0QkMsVUFBTSxpQkFEZ0I7QUFFdEJDLG1CQUFlLENBQUNGLE1BQUQsSUFBV0QsTUFBTUksTUFGVjtBQUd0QkMsa0JBQWMsQ0FBQ0osTUFBRCxJQUFXRCxNQUFNSSxNQUhUO0FBSXRCRSxrQkFBYyxDQUFDTCxNQUFELElBQVcsdUJBQU9ELEtBQVAsQ0FKSDtBQUt0Qk8sZ0JBQVlOLFVBQVVELE1BQU1JLE1BTE47QUFNdEJJLGVBQVdQLFVBQVVELE1BQU1JLE1BTkw7QUFPdEJLLGVBQVdSLFVBQVUsdUJBQU9ELEtBQVAsQ0FQQztBQVF0QixhQUFTO0FBQ1AsYUFBTztBQUNMVSxlQUFPO0FBREYsT0FEQTtBQUlQLDRCQUFzQjtBQUNwQkMsaUJBQVM7QUFDUEMsbUJBQVMsTUFERjtBQUVQLHFCQUFXO0FBQ1RDLHNCQUFVLENBREQ7QUFFVEMsdUJBQVc7QUFGRjtBQUZKO0FBRFc7QUFKZixLQVJhO0FBc0J0Qiw2QkFBeUI7QUFDdkJDLG1CQUFhZixNQUFNSTtBQURJO0FBdEJILEdBQXhCO0FBQUEsQ0FEYSxFQTJCYjtBQUFBLE1BQUdILE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQWNlLENBQWQ7O0FBQUEsU0FBc0IsK0NBQVVBLENBQVYsQ0FBdEI7QUFBQSxDQTNCYSxFQTRCYjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0E1QmEsQyIsImZpbGUiOiJjbXMvZ29vZ2xlL2FuYWx5dGljcy9jb21wb25lbnRzL3Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBHcmlkLCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgYm90dG9tIH0pID0+ICh7XG4gICAgZmxleDogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgcGFkZGluZ0JvdHRvbTogIWJvdHRvbSAmJiB0aGVtZS5zcGFjZTIsXG4gICAgbWFyZ2luQm90dG9tOiAhYm90dG9tICYmIHRoZW1lLnNwYWNlMixcbiAgICBib3JkZXJCb3R0b206ICFib3R0b20gJiYgYm9yZGVyKHRoZW1lKSxcbiAgICBwYWRkaW5nVG9wOiBib3R0b20gJiYgdGhlbWUuc3BhY2UyLFxuICAgIG1hcmdpblRvcDogYm90dG9tICYmIHRoZW1lLnNwYWNlMixcbiAgICBib3JkZXJUb3A6IGJvdHRvbSAmJiBib3JkZXIodGhlbWUpLFxuICAgICc+IGRpdic6IHtcbiAgICAgICc+IConOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgJz4gLmFudC1yYWRpby1ncm91cCc6IHtcbiAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAnPiBsYWJlbCc6IHtcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgICc+ICo6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2UyLFxuICAgIH0sXG4gIH0pLFxuICAoeyBib3R0b20sIC4uLnAgfSkgPT4gPEdyaWQgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuIl19
