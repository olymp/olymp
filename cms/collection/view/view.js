'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympUtils = require('olymp-utils');

var _olympRouter = require('olymp-router');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactFela = require('react-fela');

var _faDatabase = require('olymp-icons/lib/fa-database');

var _faDatabase2 = _interopRequireDefault(_faDatabase);

var _faTrashO = require('olymp-icons/lib/fa-trash-o');

var _faTrashO2 = _interopRequireDefault(_faTrashO);

var _faArchive = require('olymp-icons/lib/fa-archive');

var _faArchive2 = _interopRequireDefault(_faArchive);

var _faClockO = require('olymp-icons/lib/fa-clock-o');

var _faClockO2 = _interopRequireDefault(_faClockO);

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faAngleRight = require('olymp-icons/lib/fa-angle-right');

var _faAngleRight2 = _interopRequireDefault(_faAngleRight);

var _faChevronLeft = require('olymp-icons/lib/fa-chevron-left');

var _faChevronLeft2 = _interopRequireDefault(_faChevronLeft);

var _olympCloudinary = require('olymp-cloudinary');

var _recompose = require('recompose');

var _isAfter = require('date-fns/isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _utils = require('../utils');

var _withItems = require('../with-items');

var _withItems2 = _interopRequireDefault(_withItems);

var _withCollection = require('../with-collection');

var _withCollection2 = _interopRequireDefault(_withCollection);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _detail = require('./detail');

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlexContainer = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column'
    },
    '> .rbc-calendar': {
      padding: theme.space3
    },
    '> div': {
      hasFlex: {
        flex: '1 1 0%'
      },
      height: 'auto !important',
      overflow: 'auto',
      '> .rbc-toolbar': {
        '> .rbc-toolbar-label': {
          color: theme.color,
          fontWeight: 200,
          fontSize: '200%'
        }
      }
    }
  };
}, 'div');

var enhance = (0, _recompose.compose)(_olympRouter.withRouter, (0, _olympUtils.withSearch)('search'), _withCollection2.default, _withItems2.default, (0, _recompose.withState)('keys', 'setKeys', []), (0, _recompose.withPropsOnChange)(['collection', 'items'], function (_ref2) {
  var collection = _ref2.collection,
      _ref2$items = _ref2.items,
      items = _ref2$items === undefined ? [] : _ref2$items;

  var startField = (0, _get3.default)(collection, 'specialFields.startField');
  var endField = (0, _get3.default)(collection, 'specialFields.endField');

  return {
    items: startField || startField ? items.map(function (item) {
      return _extends({}, item, {
        state: item.state === 'PUBLISHED' && !(0, _isAfter2.default)(item[endField || startField], new Date()) ? 'EXPIRED' : 'PUBLISHED'
      });
    }) : items
  };
}), (0, _recompose.withPropsOnChange)(['collection', 'items', 'typeName', 'id', 'keys'], function (_ref3) {
  var collection = _ref3.collection,
      _ref3$items = _ref3.items,
      items = _ref3$items === undefined ? [] : _ref3$items,
      updateQuery = _ref3.updateQuery,
      typeName = _ref3.typeName,
      id = _ref3.id,
      sortBy = _ref3.sortBy,
      keys = _ref3.keys;
  return {
    menuItems: items.filter(function (x) {
      return x.state === (keys[0] || 'PUBLISHED');
    }).map(function (item) {
      return {
        key: item.id,
        image: item[collection.specialFields.imageField],
        description: (0, _utils.getPrintableValue)(item[sortBy || collection.specialFields.descriptionField], collection.fields.find(function (field) {
          return field.name === (sortBy || collection.specialFields.descriptionField);
        })),
        color: item[collection.specialFields.colorField],
        active: item.id === id,
        label: item[collection.specialFields.nameField] || 'Kein Titel',
        onClick: function onClick() {
          return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), item.id));
        }
      };
    })
  };
}));

var _ref5 = _react2.default.createElement(_faDatabase2.default, null);

var _ref6 = _react2.default.createElement(_faPlus2.default, null);

var _ref7 = _react2.default.createElement(_faChevronLeft2.default, null);

var _ref8 = _react2.default.createElement(_faClockO2.default, null);

var _ref9 = _react2.default.createElement(_faAngleRight2.default, null);

var _ref10 = _react2.default.createElement(_faArchive2.default, null);

var _ref11 = _react2.default.createElement(_faAngleRight2.default, null);

var _ref12 = _react2.default.createElement(_faTrashO2.default, null);

var _ref13 = _react2.default.createElement(_faAngleRight2.default, null);

var _ref14 = _react2.default.createElement(_menu2.default.Divider, null);

var CollectionView = enhance(_class = function (_Component) {
  _inherits(CollectionView, _Component);

  function CollectionView() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, CollectionView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).call.apply(_ref4, [this].concat(args))), _this), _this.renderMenu = function () {
      var _this$props = _this.props,
          collection = _this$props.collection,
          menuItems = _this$props.menuItems,
          typeName = _this$props.typeName,
          updateQuery = _this$props.updateQuery,
          keys = _this$props.keys,
          setKeys = _this$props.setKeys;

      var startField = (0, _get3.default)(collection, 'specialFields.startField');

      return _react2.default.createElement(
        _menu2.default,
        {
          header: _react2.default.createElement(
            _menu2.default.Item,
            {
              icon: collection.specialFields.icon ? _react2.default.createElement(_icon2.default, {
                type: collection.specialFields.icon,
                style: { fontSize: 32 }
              }) : _ref5,
              large: true,
              extra: _react2.default.createElement(
                _menu2.default.Extra,
                {
                  onClick: function onClick() {
                    return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), 'new'));
                  },
                  disabled: !!keys.length,
                  large: true
                },
                _ref6
              )
            },
            (0, _get3.default)(collection, 'specialFields.label', collection.name)
          )
        },
        !!keys.length && _react2.default.createElement(
          _menu2.default.Item,
          { icon: _ref7, onClick: function onClick() {
              return setKeys([]);
            } },
          'Zur\xFCck'
        ),
        !keys.length && !!startField && _react2.default.createElement(
          _menu2.default.Item,
          {
            icon: _ref8,
            extra: _ref9,
            onClick: function onClick() {
              return setKeys(['EXPIRED']);
            }
          },
          'Abgelaufen'
        ),
        !keys.length && _react2.default.createElement(
          _menu2.default.Item,
          {
            icon: _ref10,
            extra: _ref11,
            onClick: function onClick() {
              return setKeys(['DRAFT']);
            }
          },
          'Archiv'
        ),
        !keys.length && _react2.default.createElement(
          _menu2.default.Item,
          {
            icon: _ref12,
            extra: _ref13,
            onClick: function onClick() {
              return setKeys(['REMOVED']);
            }
          },
          'Papierkorb'
        ),
        _ref14,
        menuItems.map(function (_ref15) {
          var key = _ref15.key,
              label = _ref15.label,
              description = _ref15.description,
              image = _ref15.image,
              color = _ref15.color,
              active = _ref15.active,
              onClick = _ref15.onClick;
          return _react2.default.createElement(
            _menu2.default.Item,
            {
              key: key,
              onClick: onClick,
              icon: !!image && _react2.default.createElement(_olympCloudinary.Image, { value: image, width: 40, height: 40 }),
              active: active,
              large: !!image
            },
            color ? _react2.default.createElement(
              'span',
              { style: { color: color } },
              label
            ) : label,
            !!description && _react2.default.createElement(
              'small',
              null,
              description
            )
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollectionView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          collection = _props.collection,
          fieldNames = _props.fieldNames,
          typeName = _props.typeName,
          id = _props.id,
          refetchQuery = _props.refetchQuery,
          isLoading = _props.isLoading,
          keys = _props.keys,
          items = _props.items,
          replaceQuery = _props.replaceQuery;

      var nameField = (0, _get3.default)(collection, 'specialFields.nameField', 'name');
      var startField = (0, _get3.default)(collection, 'specialFields.startField');

      return _react2.default.createElement(
        _olympFela.Sidebar,
        {
          flex: true,
          menu: _react2.default.createElement(_menu.StackedMenu, {
            isLoading: isLoading,
            keys: keys,
            renderMenu: this.renderMenu
          })
        },
        _react2.default.createElement(
          FlexContainer,
          null,
          startField ? _react2.default.createElement(_calendar2.default, this.props) : _react2.default.createElement(_table2.default, _extends({}, this.props, {
            items: items.filter(function (x) {
              return x.state === (keys[0] || 'PUBLISHED');
            })
          }))
        ),
        _react2.default.createElement(
          _olympFela.Drawer,
          {
            open: !!id,
            width: 475,
            right: true,
            onClose: function onClose() {
              return replaceQuery(_defineProperty({}, '@' + typeName.toLowerCase(), null));
            }
          },
          _react2.default.createElement(
            _menu2.default,
            {
              header: id === 'new' ? _react2.default.createElement(
                _menu2.default.Item,
                { large: true },
                collection.specialFields.label,
                ' anlegen'
              ) : _react2.default.createElement(
                _menu2.default.Item,
                { large: true },
                ((items || []).find(function (x) {
                  return x.id === id;
                }) || {})[nameField] || 'Bearbeiten',
                _react2.default.createElement(
                  'small',
                  null,
                  collection.specialFields.label,
                  ' bearbeiten'
                )
              ),
              headerColor: true,
              headerInverted: true
            },
            _react2.default.createElement(_detail2.default, {
              id: id === 'new' ? null : id,
              key: id || 'new',
              refetchQuery: refetchQuery,
              fieldNames: fieldNames,
              collection: collection,
              typeName: typeName
            })
          )
        )
      );
    }
  }]);

  return CollectionView;
}(_react.Component)) || _class;

exports.default = CollectionView;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3ZpZXcvdmlldy5lczYiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lciIsInRoZW1lIiwicG9zaXRpb24iLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInNwYWNlMyIsImhlaWdodCIsIm92ZXJmbG93IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJlbmhhbmNlIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwic3RhcnRGaWVsZCIsImVuZEZpZWxkIiwibWFwIiwiaXRlbSIsInN0YXRlIiwiRGF0ZSIsInVwZGF0ZVF1ZXJ5IiwidHlwZU5hbWUiLCJpZCIsInNvcnRCeSIsImtleXMiLCJtZW51SXRlbXMiLCJmaWx0ZXIiLCJ4Iiwia2V5IiwiaW1hZ2UiLCJzcGVjaWFsRmllbGRzIiwiaW1hZ2VGaWVsZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25GaWVsZCIsImZpZWxkcyIsImZpbmQiLCJmaWVsZCIsIm5hbWUiLCJjb2xvckZpZWxkIiwiYWN0aXZlIiwibGFiZWwiLCJuYW1lRmllbGQiLCJvbkNsaWNrIiwidG9Mb3dlckNhc2UiLCJDb2xsZWN0aW9uVmlldyIsInJlbmRlck1lbnUiLCJwcm9wcyIsInNldEtleXMiLCJpY29uIiwibGVuZ3RoIiwiZmllbGROYW1lcyIsInJlZmV0Y2hRdWVyeSIsImlzTG9hZGluZyIsInJlcGxhY2VRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUdBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsZ0NBQ3BCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FB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S0FBRixNQUFhTSxLQUFLLENBQUwsS0FBVyxXQUF4QixDQUFMO0FBQUEsYUFBYjtBQUZUO0FBSkosU0FWRjtBQXFCRTtBQUFBO0FBQUE7QUFDRSxrQkFBTSxDQUFDLENBQUNGLEVBRFY7QUFFRSxtQkFBTyxHQUZUO0FBR0UsdUJBSEY7QUFJRSxxQkFBUztBQUFBLHFCQUNQK0IsdUNBQ09oQyxTQUFTc0IsV0FBVCxFQURQLEVBQ2tDLElBRGxDLEVBRE87QUFBQTtBQUpYO0FBVUU7QUFBQTtBQUFBO0FBQ0Usc0JBQ0VyQixPQUFPLEtBQVAsR0FDRTtBQUFBLCtCQUFNLElBQU47QUFBQSxrQkFBVyxXQUFYO0FBQ0dWLDJCQUFXa0IsYUFBWCxDQUF5QlUsS0FENUI7QUFBQTtBQUFBLGVBREYsR0FLRTtBQUFBLCtCQUFNLElBQU47QUFBQSxrQkFBVyxXQUFYO0FBQ0csaUJBQUMsQ0FBQzNCLFNBQVMsRUFBVixFQUFjc0IsSUFBZCxDQUFtQjtBQUFBLHlCQUFLUixFQUFFTCxFQUFGLEtBQVNBLEVBQWQ7QUFBQSxpQkFBbkIsS0FBd0MsRUFBekMsRUFBNkNtQixTQUE3QyxLQUNDLFlBRko7QUFHRTtBQUFBO0FBQUE7QUFBUTdCLDZCQUFXa0IsYUFBWCxDQUF5QlUsS0FBakM7QUFBQTtBQUFBO0FBSEYsZUFQTjtBQWNFLCtCQWRGO0FBZUU7QUFmRjtBQWlCRTtBQUNFLGtCQUFJbEIsT0FBTyxLQUFQLEdBQWUsSUFBZixHQUFzQkEsRUFENUI7QUFFRSxtQkFBS0EsTUFBTSxLQUZiO0FBR0UsNEJBQWM2QixZQUhoQjtBQUlFLDBCQUFZRCxVQUpkO0FBS0UsMEJBQVl0QyxVQUxkO0FBTUUsd0JBQVVTO0FBTlo7QUFqQkY7QUFWRjtBQXJCRixPQURGO0FBNkREOzs7Ozs7a0JBM0trQnVCLGMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vdmlldy92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTZWFyY2ggfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IFNpZGViYXIsIERyYXdlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IE1lbnUsIHtTdGFja2VkTWVudX0gZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHtcbiAgRmFEYXRhYmFzZSxcbiAgRmFUcmFzaE8sXG4gIEZhQXJjaGl2ZSxcbiAgRmFDbG9ja08sXG4gIEZhUGx1cyxcbiAgRmFBbmdsZVJpZ2h0LFxuICBGYUNoZXZyb25MZWZ0LFxufSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IGlzQWZ0ZXIgZnJvbSAnZGF0ZS1mbnMvaXNBZnRlcic7XG5pbXBvcnQgeyBnZXRQcmludGFibGVWYWx1ZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB3aXRoSXRlbXMgZnJvbSAnLi4vd2l0aC1pdGVtcyc7XG5pbXBvcnQgd2l0aENvbGxlY3Rpb24gZnJvbSAnLi4vd2l0aC1jb2xsZWN0aW9uJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9kZXRhaWwnO1xuXG5jb25zdCBGbGV4Q29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICAnPiAucmJjLWNhbGVuZGFyJzoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2UzLFxuICAgIH0sXG4gICAgJz4gZGl2Jzoge1xuICAgICAgaGFzRmxleDoge1xuICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6ICdhdXRvICFpbXBvcnRhbnQnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICc+IC5yYmMtdG9vbGJhcic6IHtcbiAgICAgICAgJz4gLnJiYy10b29sYmFyLWxhYmVsJzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgICAgICAgZm9udFNpemU6ICcyMDAlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuKTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIHdpdGhTZWFyY2goJ3NlYXJjaCcpLFxuICB3aXRoQ29sbGVjdGlvbixcbiAgd2l0aEl0ZW1zLFxuICB3aXRoU3RhdGUoJ2tleXMnLCAnc2V0S2V5cycsIFtdKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWydjb2xsZWN0aW9uJywgJ2l0ZW1zJ10sICh7IGNvbGxlY3Rpb24sIGl0ZW1zID0gW10gfSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0RmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMuc3RhcnRGaWVsZCcpO1xuICAgIGNvbnN0IGVuZEZpZWxkID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLmVuZEZpZWxkJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6XG4gICAgICAgIHN0YXJ0RmllbGQgfHwgc3RhcnRGaWVsZFxuICAgICAgICAgID8gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgc3RhdGU6XG4gICAgICAgICAgICAgICAgaXRlbS5zdGF0ZSA9PT0gJ1BVQkxJU0hFRCcgJiZcbiAgICAgICAgICAgICAgICAhaXNBZnRlcihpdGVtW2VuZEZpZWxkIHx8IHN0YXJ0RmllbGRdLCBuZXcgRGF0ZSgpKVxuICAgICAgICAgICAgICAgICAgPyAnRVhQSVJFRCdcbiAgICAgICAgICAgICAgICAgIDogJ1BVQkxJU0hFRCcsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IGl0ZW1zLFxuICAgIH07XG4gIH0pLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2NvbGxlY3Rpb24nLCAnaXRlbXMnLCAndHlwZU5hbWUnLCAnaWQnLCAna2V5cyddLFxuICAgICh7IGNvbGxlY3Rpb24sIGl0ZW1zID0gW10sIHVwZGF0ZVF1ZXJ5LCB0eXBlTmFtZSwgaWQsIHNvcnRCeSwga2V5cyB9KSA9PiAoe1xuICAgICAgbWVudUl0ZW1zOiBpdGVtc1xuICAgICAgICAuZmlsdGVyKHggPT4geC5zdGF0ZSA9PT0gKGtleXNbMF0gfHwgJ1BVQkxJU0hFRCcpKVxuICAgICAgICAubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgaW1hZ2U6IGl0ZW1bY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmltYWdlRmllbGRdLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBnZXRQcmludGFibGVWYWx1ZShcbiAgICAgICAgICAgIGl0ZW1bc29ydEJ5IHx8IGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5kZXNjcmlwdGlvbkZpZWxkXSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgIGZpZWxkID0+XG4gICAgICAgICAgICAgICAgZmllbGQubmFtZSA9PT1cbiAgICAgICAgICAgICAgICAoc29ydEJ5IHx8IGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5kZXNjcmlwdGlvbkZpZWxkKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjb2xvcjogaXRlbVtjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuY29sb3JGaWVsZF0sXG4gICAgICAgICAgYWN0aXZlOiBpdGVtLmlkID09PSBpZCxcbiAgICAgICAgICBsYWJlbDogaXRlbVtjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMubmFtZUZpZWxkXSB8fCAnS2VpbiBUaXRlbCcsXG4gICAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5KHsgW2BAJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBpdGVtLmlkIH0pLFxuICAgICAgICB9KSksXG4gICAgfSksXG4gICksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvblZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBtZW51SXRlbXMsXG4gICAgICB0eXBlTmFtZSxcbiAgICAgIHVwZGF0ZVF1ZXJ5LFxuICAgICAga2V5cyxcbiAgICAgIHNldEtleXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RhcnRGaWVsZCA9IGdldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5zdGFydEZpZWxkJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmljb24gPyAoXG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIHR5cGU9e2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5pY29ufVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDMyIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8RmFEYXRhYmFzZSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgZXh0cmE9e1xuICAgICAgICAgICAgICA8TWVudS5FeHRyYVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1gXTogJ25ldycgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEha2V5cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYVBsdXMgLz5cbiAgICAgICAgICAgICAgPC9NZW51LkV4dHJhPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMubGFiZWwnLCBjb2xsZWN0aW9uLm5hbWUpfVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHshIWtleXMubGVuZ3RoICYmIChcbiAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxGYUNoZXZyb25MZWZ0IC8+fSBvbkNsaWNrPXsoKSA9PiBzZXRLZXlzKFtdKX0+XG4gICAgICAgICAgICBadXLDvGNrXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIHsha2V5cy5sZW5ndGggJiZcbiAgICAgICAgICAhIXN0YXJ0RmllbGQgJiYgKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFDbG9ja08gLz59XG4gICAgICAgICAgICAgIGV4dHJhPXs8RmFBbmdsZVJpZ2h0IC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRLZXlzKFsnRVhQSVJFRCddKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWJnZWxhdWZlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgeyFrZXlzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgaWNvbj17PEZhQXJjaGl2ZSAvPn1cbiAgICAgICAgICAgIGV4dHJhPXs8RmFBbmdsZVJpZ2h0IC8+fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0S2V5cyhbJ0RSQUZUJ10pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFyY2hpdlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICApfVxuICAgICAgICB7IWtleXMubGVuZ3RoICYmIChcbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBpY29uPXs8RmFUcmFzaE8gLz59XG4gICAgICAgICAgICBleHRyYT17PEZhQW5nbGVSaWdodCAvPn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEtleXMoWydSRU1PVkVEJ10pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhcGllcmtvcmJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgKX1cbiAgICAgICAgPE1lbnUuRGl2aWRlciAvPlxuICAgICAgICB7bWVudUl0ZW1zLm1hcChcbiAgICAgICAgICAoeyBrZXksIGxhYmVsLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGNvbG9yLCBhY3RpdmUsIG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgaWNvbj17ISFpbWFnZSAmJiA8SW1hZ2UgdmFsdWU9e2ltYWdlfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IC8+fVxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgICAgICAgbGFyZ2U9eyEhaW1hZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xvciA/IDxzcGFuIHN0eWxlPXt7IGNvbG9yIH19PntsYWJlbH08L3NwYW4+IDogbGFiZWx9XG4gICAgICAgICAgICAgIHshIWRlc2NyaXB0aW9uICYmIDxzbWFsbD57ZGVzY3JpcHRpb259PC9zbWFsbD59XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApLFxuICAgICAgICApfVxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBmaWVsZE5hbWVzLFxuICAgICAgdHlwZU5hbWUsXG4gICAgICBpZCxcbiAgICAgIHJlZmV0Y2hRdWVyeSxcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIGtleXMsXG4gICAgICBpdGVtcyxcbiAgICAgIHJlcGxhY2VRdWVyeSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuYW1lRmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMubmFtZUZpZWxkJywgJ25hbWUnKTtcbiAgICBjb25zdCBzdGFydEZpZWxkID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLnN0YXJ0RmllbGQnKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICBmbGV4XG4gICAgICAgIG1lbnU9e1xuICAgICAgICAgIDxTdGFja2VkTWVudVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICBrZXlzPXtrZXlzfVxuICAgICAgICAgICAgcmVuZGVyTWVudT17dGhpcy5yZW5kZXJNZW51fVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEZsZXhDb250YWluZXI+XG4gICAgICAgICAge3N0YXJ0RmllbGQgPyAoXG4gICAgICAgICAgICA8Q2FsZW5kYXIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zLmZpbHRlcih4ID0+IHguc3RhdGUgPT09IChrZXlzWzBdIHx8ICdQVUJMSVNIRUQnKSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleENvbnRhaW5lcj5cblxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgb3Blbj17ISFpZH1cbiAgICAgICAgICB3aWR0aD17NDc1fVxuICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgb25DbG9zZT17KCkgPT5cbiAgICAgICAgICAgIHJlcGxhY2VRdWVyeSh7XG4gICAgICAgICAgICAgIFtgQCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1gXTogbnVsbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgIGlkID09PSAnbmV3JyA/IChcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGxhcmdlPlxuICAgICAgICAgICAgICAgICAge2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5sYWJlbH0gYW5sZWdlblxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbGFyZ2U+XG4gICAgICAgICAgICAgICAgICB7KChpdGVtcyB8fCBbXSkuZmluZCh4ID0+IHguaWQgPT09IGlkKSB8fCB7fSlbbmFtZUZpZWxkXSB8fFxuICAgICAgICAgICAgICAgICAgICAnQmVhcmJlaXRlbid9XG4gICAgICAgICAgICAgICAgICA8c21hbGw+e2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5sYWJlbH0gYmVhcmJlaXRlbjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlckNvbG9yXG4gICAgICAgICAgICBoZWFkZXJJbnZlcnRlZFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEZXRhaWxcbiAgICAgICAgICAgICAgaWQ9e2lkID09PSAnbmV3JyA/IG51bGwgOiBpZH1cbiAgICAgICAgICAgICAga2V5PXtpZCB8fCAnbmV3J31cbiAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJ5PXtyZWZldGNoUXVlcnl9XG4gICAgICAgICAgICAgIGZpZWxkTmFtZXM9e2ZpZWxkTmFtZXN9XG4gICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgIHR5cGVOYW1lPXt0eXBlTmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICApO1xuICB9XG59XG4iXX0=
