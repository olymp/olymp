'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/menu/style');

require('antd/lib/dropdown/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _faCog = require('olymp-icons/lib/fa-cog');

var _faCog2 = _interopRequireDefault(_faCog);

var _faChevronDown = require('olymp-icons/lib/fa-chevron-down');

var _faChevronDown2 = _interopRequireDefault(_faChevronDown);

var _faChevronUp = require('olymp-icons/lib/fa-chevron-up');

var _faChevronUp2 = _interopRequireDefault(_faChevronUp);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var setLink = function setLink(onChange, value, node) {
  var newContext = window.prompt('Context', JSON.stringify({}));
  if (newContext) {
    var obj = JSON.parse(newContext);
    onChange(value.change().setNodeByKey(node.key, {
      data: Object.keys(obj).reduce(function (data, key) {
        return data.set(key, { boundTo: obj[key] });
      }, node.data)
    }));
  }
};

var Action = function Action(_ref) {
  var node = _ref.node,
      value = _ref.value,
      onChange = _ref.onChange,
      schema = _ref.schema;
  return function (_ref2, i) {
    var toggle = _ref2.toggle,
        active = _ref2.active,
        label = _ref2.label,
        component = _ref2.component,
        rest = _objectWithoutProperties(_ref2, ['toggle', 'active', 'label', 'component']);

    var setData = function setData(data) {
      var transform = value.change().setNodeByKey(node.key, { data: _extends({}, node.data.toJS(), data) });
      onChange(transform);
      return Promise.resolve();
    };

    var getData = function getData(name, defaultValue) {
      return node.data.get(name) || defaultValue;
    };

    var tooltip = typeof rest.tooltip === 'function' ? rest.tooltip(getData) : rest.tooltip;

    var onClick = function onClick(e) {
      e.preventDefault();
      if (toggle) {
        toggle({
          setData: setData,
          getData: getData,
          value: value,
          onChange: onChange,
          schema: schema,
          node: node
        });
      }
    };

    if (component) {
      var Com = component;
      return _react2.default.createElement(
        _menu2.default.Item,
        { key: i },
        _react2.default.createElement(
          _toolbar.Button,
          { onMouseDown: onClick, tooltip: tooltip },
          _react2.default.createElement(Com, {
            setData: setData,
            getData: getData,
            value: value,
            onChange: onChange,
            node: node
          })
        )
      );
    }

    return _react2.default.createElement(
      _menu2.default.Item,
      { key: i },
      _react2.default.createElement(
        _toolbar.Button,
        {
          active: !!active && active({ getData: getData, value: value }),
          onMouseDown: onClick,
          tooltip: tooltip
        },
        label
      )
    );
  };
};

var _ref7 = _react2.default.createElement(_menu2.default.Divider, null);

var _ref8 = _react2.default.createElement(_menu2.default.Divider, null);

var _ref9 = _react2.default.createElement(_menu2.default.Divider, null);

var _ref10 = _react2.default.createElement(_faCog2.default, null);

exports.default = function (options) {
  return function (Block) {
    var _class, _temp2;

    var StyledBlock = (0, _reactFela.createComponent)(function (_ref3) {
      var isSelected = _ref3.isSelected,
          theme = _ref3.theme,
          node = _ref3.node;
      return {
        outline: isSelected && options.category && '2px solid ' + theme.color
      };
    }, function (p) {
      return _react2.default.createElement(Block, p);
    }, function (p) {
      return Object.keys(p);
    });

    // @dnd
    var BaseDecorator = (_temp2 = _class = function (_Component) {
      _inherits(BaseDecorator, _Component);

      function BaseDecorator() {
        var _ref4;

        var _temp, _this, _ret;

        _classCallCheck(this, BaseDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = BaseDecorator.__proto__ || Object.getPrototypeOf(BaseDecorator)).call.apply(_ref4, [this].concat(args))), _this), _this.getActions = function () {
          var actions = [].concat(_toConsumableArray(options.actions || []));
          var _this$props = _this.props,
              editor = _this$props.editor,
              node = _this$props.node;

          if (options.category) {
            actions.push({
              component: function component(_ref5) {
                var onChange = _ref5.onChange,
                    value = _ref5.value,
                    node = _ref5.node;
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_faChevronUp2.default, {
                    onMouseDown: function onMouseDown(e) {
                      onChange(value.change().moveNodeByKey(node.key, value.document.getParent(node.key).key, value.document.getParent(node.key).nodes.indexOf(node) - 1));
                      e.preventDefault();
                    }
                  }),
                  _react2.default.createElement(_faChevronDown2.default, {
                    onMouseDown: function onMouseDown(e) {
                      onChange(value.change().moveNodeByKey(node.key, value.document.getParent(node.key).key, value.document.getParent(node.key).nodes.indexOf(node) + 1));
                      e.preventDefault();
                    }
                  })
                );
              }
            });
            /* if (state.document.getParent(node.key).nodes.indexOf(node) > 0) {
              actions.push({
                label: <FaArrowUp />,
                toggle: ({ onChange, state, node }) =>
                  onChange(
                    state
                      .change()
                      .moveNodeByKey(
                        node.key,
                        state.document.getParent(node.key).key,
                        state.document.getParent(node.key).nodes.indexOf(node) - 1,
                      ),
                  ),
              });
            }
            if (
              state.document.getParent(node.key).nodes.size >
              state.document.getParent(node.key).nodes.indexOf(node)
            ) {
              actions.push({
                label: <FaArrowDown />,
                toggle: ({ onChange, state, node }) =>
                  onChange(
                    state
                      .change()
                      .moveNodeByKey(
                        node.key,
                        state.document.getParent(node.key).key,
                        state.document.getParent(node.key).nodes.indexOf(node) + 1,
                      ),
                  ),
              });
            } */

            actions.push({
              component: function component(_ref6) {
                var value = _ref6.value,
                    onChange = _ref6.onChange,
                    node = _ref6.node;
                return _react2.default.createElement(
                  _dropdown2.default,
                  {
                    overlay: _react2.default.createElement(
                      _menu2.default,
                      { style: { minWidth: 200 } },
                      _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              setLink(onChange, value, node);
                              e.preventDefault();
                            }
                          },
                          'Datenanbindung'
                        )
                      ),
                      _ref7,
                      _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              onChange(value.change().removeNodeByKey(node.key));
                              e.preventDefault();
                            }
                          },
                          'L\xF6schen'
                        )
                      ),
                      _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              onChange(value.change().moveToRangeOf(node).focus());
                              setTimeout(function () {
                                return document.execCommand('copy');
                              }, 1);
                              e.preventDefault();
                            }
                          },
                          'Kopieren'
                        )
                      ),
                      _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              onChange(value.change().moveToRangeOf(node).focus());
                              setTimeout(function () {
                                return document.execCommand('cut');
                              }, 1);
                              e.preventDefault();
                            }
                          },
                          'Ausschneiden'
                        )
                      ),
                      _ref8,
                      node.kind === 'block' && _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              onChange(value.change().unwrapBlockByKey(node.key));
                              e.preventDefault();
                            }
                          },
                          'Entpacken'
                        )
                      ),
                      _ref9,
                      _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              onChange(value.change().insertNodeByKey(node.key, node.nodes.size, {
                                type: 'paragraph',
                                kind: 'block'
                              }));
                              e.preventDefault();
                            }
                          },
                          'Leere Zeile (Ende)'
                        )
                      ),
                      _react2.default.createElement(
                        _menu2.default.Item,
                        null,
                        _react2.default.createElement(
                          'span',
                          {
                            onMouseDown: function onMouseDown(e) {
                              onChange(value.change().insertNodeByKey(value.document.getParent(node.key).key, value.document.getParent(node.key).nodes.indexOf(node) + 1, {
                                type: 'paragraph',
                                kind: 'block'
                              }));
                              e.preventDefault();
                            }
                          },
                          'Leere Zeile (Nach)'
                        )
                      )
                    )
                  },
                  _ref10
                );
              }
            });
          }
          return actions;
        }, _this.setData = function (data) {
          var editor = _this.props.editor;

          var transform = editor.value.change().setNodeByKey(_this.n.key, { data: _extends({}, _this.n.data.toJS(), data) });
          editor.onChange(transform);
        }, _this.getData = function (name, defaultValue) {
          return _this.n.data.get(name) || defaultValue;
        }, _this.setActive = function () {
          var _this$props2 = _this.props,
              node = _this$props2.node,
              editor = _this$props2.editor;

          var transform = editor.value.change().moveToRangeOf(node);
          editor.onChange(transform);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(BaseDecorator, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              editor = _props.editor,
              children = _props.children,
              isSelected = _props.isSelected;
          var node = this.props.node;

          var actions = this.getActions();
          if (editor.props.binding) {
            node = node.set('data', node.data.keySeq().reduce(function (data, key) {
              var value = node.data.get(key);
              if (value && value.boundTo) {
                return data.set(key, editor.props.binding[value.boundTo]);
              }
              return data;
            }, node.data));
          }
          this.n = node;

          return _react2.default.createElement(
            StyledBlock,
            _extends({}, this.props, {
              node: node,
              getData: this.getData,
              setData: this.setData,
              setActive: this.setActive,
              readOnly: editor.props.readOnly
            }),
            isSelected && !!actions && !!actions.length && _react2.default.createElement(
              _toolbar2.default,
              { show: true, isOpened: true, parent: '[data-key="' + node.key + '"]' },
              actions.map(Action({
                value: editor.props.value,
                onChange: editor.props.onChange,
                node: node,
                schema: options.schema
              }))
            ),
            options.isVoid === false ? children : []
          );
        }
      }]);

      return BaseDecorator;
    }(_react.Component), _class.slate = options, _temp2);

    return BaseDecorator;
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3VzZS1ibG9jay1iYXNlLmVzNiJdLCJuYW1lcyI6WyJzZXRMaW5rIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm5vZGUiLCJuZXdDb250ZXh0Iiwid2luZG93IiwicHJvbXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9iaiIsInBhcnNlIiwiY2hhbmdlIiwic2V0Tm9kZUJ5S2V5Iiwia2V5IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJzZXQiLCJib3VuZFRvIiwiQWN0aW9uIiwic2NoZW1hIiwiaSIsInRvZ2dsZSIsImFjdGl2ZSIsImxhYmVsIiwiY29tcG9uZW50IiwicmVzdCIsInNldERhdGEiLCJ0cmFuc2Zvcm0iLCJ0b0pTIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXREYXRhIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsImdldCIsInRvb2x0aXAiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQ29tIiwiU3R5bGVkQmxvY2siLCJpc1NlbGVjdGVkIiwidGhlbWUiLCJvdXRsaW5lIiwib3B0aW9ucyIsImNhdGVnb3J5IiwiY29sb3IiLCJwIiwiQmFzZURlY29yYXRvciIsImdldEFjdGlvbnMiLCJhY3Rpb25zIiwicHJvcHMiLCJlZGl0b3IiLCJwdXNoIiwibW92ZU5vZGVCeUtleSIsImRvY3VtZW50IiwiZ2V0UGFyZW50Iiwibm9kZXMiLCJpbmRleE9mIiwibWluV2lkdGgiLCJyZW1vdmVOb2RlQnlLZXkiLCJtb3ZlVG9SYW5nZU9mIiwiZm9jdXMiLCJzZXRUaW1lb3V0IiwiZXhlY0NvbW1hbmQiLCJraW5kIiwidW53cmFwQmxvY2tCeUtleSIsImluc2VydE5vZGVCeUtleSIsInNpemUiLCJ0eXBlIiwibiIsInNldEFjdGl2ZSIsImNoaWxkcmVuIiwiYmluZGluZyIsImtleVNlcSIsInJlYWRPbmx5IiwibGVuZ3RoIiwibWFwIiwiaXNWb2lkIiwic2xhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEIsRUFBMkI7QUFDekMsTUFBTUMsYUFBYUMsT0FBT0MsTUFBUCxDQUFjLFNBQWQsRUFBeUJDLEtBQUtDLFNBQUwsQ0FBZSxFQUFmLENBQXpCLENBQW5CO0FBQ0EsTUFBSUosVUFBSixFQUFnQjtBQUNkLFFBQU1LLE1BQU1GLEtBQUtHLEtBQUwsQ0FBV04sVUFBWCxDQUFaO0FBQ0FILGFBQ0VDLE1BQU1TLE1BQU4sR0FBZUMsWUFBZixDQUE0QlQsS0FBS1UsR0FBakMsRUFBc0M7QUFDcENDLFlBQU1DLE9BQU9DLElBQVAsQ0FBWVAsR0FBWixFQUFpQlEsTUFBakIsQ0FDSixVQUFDSCxJQUFELEVBQU9ELEdBQVA7QUFBQSxlQUFlQyxLQUFLSSxHQUFMLENBQVNMLEdBQVQsRUFBYyxFQUFFTSxTQUFTVixJQUFJSSxHQUFKLENBQVgsRUFBZCxDQUFmO0FBQUEsT0FESSxFQUVKVixLQUFLVyxJQUZEO0FBRDhCLEtBQXRDLENBREY7QUFRRDtBQUNGLENBYkQ7O0FBZUEsSUFBTU0sU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBR2pCLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNELEtBQVQsUUFBU0EsS0FBVDtBQUFBLE1BQWdCRCxRQUFoQixRQUFnQkEsUUFBaEI7QUFBQSxNQUEwQm9CLE1BQTFCLFFBQTBCQSxNQUExQjtBQUFBLFNBQXVDLGlCQUVwREMsQ0FGb0QsRUFHakQ7QUFBQSxRQUZEQyxNQUVDLFNBRkRBLE1BRUM7QUFBQSxRQUZPQyxNQUVQLFNBRk9BLE1BRVA7QUFBQSxRQUZlQyxLQUVmLFNBRmVBLEtBRWY7QUFBQSxRQUZzQkMsU0FFdEIsU0FGc0JBLFNBRXRCO0FBQUEsUUFGb0NDLElBRXBDOztBQUNILFFBQU1DLFVBQVUsU0FBVkEsT0FBVSxPQUFRO0FBQ3RCLFVBQU1DLFlBQVkzQixNQUNmUyxNQURlLEdBRWZDLFlBRmUsQ0FFRlQsS0FBS1UsR0FGSCxFQUVRLEVBQUVDLG1CQUFXWCxLQUFLVyxJQUFMLENBQVVnQixJQUFWLEVBQVgsRUFBZ0NoQixJQUFoQyxDQUFGLEVBRlIsQ0FBbEI7QUFHQWIsZUFBUzRCLFNBQVQ7QUFDQSxhQUFPRSxRQUFRQyxPQUFSLEVBQVA7QUFDRCxLQU5EOztBQVFBLFFBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9DLFlBQVA7QUFBQSxhQUF3QmhDLEtBQUtXLElBQUwsQ0FBVXNCLEdBQVYsQ0FBY0YsSUFBZCxLQUF1QkMsWUFBL0M7QUFBQSxLQUFoQjs7QUFFQSxRQUFNRSxVQUNKLE9BQU9WLEtBQUtVLE9BQVosS0FBd0IsVUFBeEIsR0FBcUNWLEtBQUtVLE9BQUwsQ0FBYUosT0FBYixDQUFyQyxHQUE2RE4sS0FBS1UsT0FEcEU7O0FBR0EsUUFBTUMsVUFBVSxTQUFWQSxPQUFVLElBQUs7QUFDbkJDLFFBQUVDLGNBQUY7QUFDQSxVQUFJakIsTUFBSixFQUFZO0FBQ1ZBLGVBQU87QUFDTEssMEJBREs7QUFFTEssMEJBRks7QUFHTC9CLHNCQUhLO0FBSUxELDRCQUpLO0FBS0xvQix3QkFMSztBQU1MbEI7QUFOSyxTQUFQO0FBUUQ7QUFDRixLQVpEOztBQWNBLFFBQUl1QixTQUFKLEVBQWU7QUFDYixVQUFNZSxNQUFNZixTQUFaO0FBQ0EsYUFDRTtBQUFBLHVCQUFNLElBQU47QUFBQSxVQUFXLEtBQUtKLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQVEsYUFBYWdCLE9BQXJCLEVBQThCLFNBQVNELE9BQXZDO0FBQ0Usd0NBQUMsR0FBRDtBQUNFLHFCQUFTVCxPQURYO0FBRUUscUJBQVNLLE9BRlg7QUFHRSxtQkFBTy9CLEtBSFQ7QUFJRSxzQkFBVUQsUUFKWjtBQUtFLGtCQUFNRTtBQUxSO0FBREY7QUFERixPQURGO0FBYUQ7O0FBRUQsV0FDRTtBQUFBLHFCQUFNLElBQU47QUFBQSxRQUFXLEtBQUttQixDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNFLGtCQUFRLENBQUMsQ0FBQ0UsTUFBRixJQUFZQSxPQUFPLEVBQUVTLGdCQUFGLEVBQVcvQixZQUFYLEVBQVAsQ0FEdEI7QUFFRSx1QkFBYW9DLE9BRmY7QUFHRSxtQkFBU0Q7QUFIWDtBQUtHWjtBQUxIO0FBREYsS0FERjtBQVdELEdBM0RjO0FBQUEsQ0FBZjs7WUFtS2tCLDZDQUFNLE9BQU4sTzs7WUEyQ0EsNkNBQU0sT0FBTixPOztZQWFBLDZDQUFNLE9BQU4sTzs7YUE0Q0osb0Q7O2tCQTFNQztBQUFBLFNBQVcsaUJBQVM7QUFBQTs7QUFDakMsUUFBTWlCLGNBQWMsZ0NBQ2xCO0FBQUEsVUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsVUFBZUMsS0FBZixTQUFlQSxLQUFmO0FBQUEsVUFBc0J6QyxJQUF0QixTQUFzQkEsSUFBdEI7QUFBQSxhQUFrQztBQUNoQzBDLGlCQUFTRixjQUFjRyxRQUFRQyxRQUF0QixtQkFBK0NILE1BQU1JO0FBRDlCLE9BQWxDO0FBQUEsS0FEa0IsRUFJbEI7QUFBQSxhQUFLLDhCQUFDLEtBQUQsRUFBV0MsQ0FBWCxDQUFMO0FBQUEsS0FKa0IsRUFLbEI7QUFBQSxhQUFLbEMsT0FBT0MsSUFBUCxDQUFZaUMsQ0FBWixDQUFMO0FBQUEsS0FMa0IsQ0FBcEI7O0FBUUE7QUFUaUMsUUFVM0JDLGFBVjJCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsME1BYS9CQyxVQWIrQixHQWFsQixZQUFNO0FBQ2pCLGNBQU1DLHVDQUFlTixRQUFRTSxPQUFSLElBQW1CLEVBQWxDLEVBQU47QUFEaUIsNEJBRVEsTUFBS0MsS0FGYjtBQUFBLGNBRVRDLE1BRlMsZUFFVEEsTUFGUztBQUFBLGNBRURuRCxJQUZDLGVBRURBLElBRkM7O0FBR2pCLGNBQUkyQyxRQUFRQyxRQUFaLEVBQXNCO0FBQ3BCSyxvQkFBUUcsSUFBUixDQUFhO0FBQ1g3Qix5QkFBVztBQUFBLG9CQUFHekIsUUFBSCxTQUFHQSxRQUFIO0FBQUEsb0JBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLG9CQUFvQkMsSUFBcEIsU0FBb0JBLElBQXBCO0FBQUEsdUJBQ1Q7QUFBQTtBQUFBO0FBQ0U7QUFDRSxpQ0FBYSx3QkFBSztBQUNoQkYsK0JBQ0VDLE1BQ0dTLE1BREgsR0FFRzZDLGFBRkgsQ0FHSXJELEtBQUtVLEdBSFQsRUFJSVgsTUFBTXVELFFBQU4sQ0FBZUMsU0FBZixDQUF5QnZELEtBQUtVLEdBQTlCLEVBQW1DQSxHQUp2QyxFQUtJWCxNQUFNdUQsUUFBTixDQUFlQyxTQUFmLENBQXlCdkQsS0FBS1UsR0FBOUIsRUFBbUM4QyxLQUFuQyxDQUF5Q0MsT0FBekMsQ0FBaUR6RCxJQUFqRCxJQUNFLENBTk4sQ0FERjtBQVVBb0Msd0JBQUVDLGNBQUY7QUFDRDtBQWJILG9CQURGO0FBZ0JFO0FBQ0UsaUNBQWEsd0JBQUs7QUFDaEJ2QywrQkFDRUMsTUFDR1MsTUFESCxHQUVHNkMsYUFGSCxDQUdJckQsS0FBS1UsR0FIVCxFQUlJWCxNQUFNdUQsUUFBTixDQUFlQyxTQUFmLENBQXlCdkQsS0FBS1UsR0FBOUIsRUFBbUNBLEdBSnZDLEVBS0lYLE1BQU11RCxRQUFOLENBQWVDLFNBQWYsQ0FBeUJ2RCxLQUFLVSxHQUE5QixFQUFtQzhDLEtBQW5DLENBQXlDQyxPQUF6QyxDQUFpRHpELElBQWpELElBQ0UsQ0FOTixDQURGO0FBVUFvQyx3QkFBRUMsY0FBRjtBQUNEO0FBYkg7QUFoQkYsaUJBRFM7QUFBQTtBQURBLGFBQWI7QUFvQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0FZLG9CQUFRRyxJQUFSLENBQWE7QUFDWDdCLHlCQUFXO0FBQUEsb0JBQUd4QixLQUFILFNBQUdBLEtBQUg7QUFBQSxvQkFBVUQsUUFBVixTQUFVQSxRQUFWO0FBQUEsb0JBQW9CRSxJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSx1QkFDVDtBQUFBO0FBQUE7QUFDRSw2QkFDRTtBQUFBO0FBQUEsd0JBQU0sT0FBTyxFQUFFMEQsVUFBVSxHQUFaLEVBQWI7QUFDRTtBQUFBLHVDQUFNLElBQU47QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFhLHdCQUFLO0FBQ2hCN0Qsc0NBQVFDLFFBQVIsRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QjtBQUNBb0MsZ0NBQUVDLGNBQUY7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQURGLHVCQURGO0FBQUE7QUFZRTtBQUFBLHVDQUFNLElBQU47QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFhLHdCQUFLO0FBQ2hCdkMsdUNBQVNDLE1BQU1TLE1BQU4sR0FBZW1ELGVBQWYsQ0FBK0IzRCxLQUFLVSxHQUFwQyxDQUFUO0FBQ0EwQixnQ0FBRUMsY0FBRjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBREYsdUJBWkY7QUFzQkU7QUFBQSx1Q0FBTSxJQUFOO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSx5Q0FBYSx3QkFBSztBQUNoQnZDLHVDQUNFQyxNQUNHUyxNQURILEdBRUdvRCxhQUZILENBRWlCNUQsSUFGakIsRUFHRzZELEtBSEgsRUFERjtBQU1BQyx5Q0FBVztBQUFBLHVDQUFNUixTQUFTUyxXQUFULENBQXFCLE1BQXJCLENBQU47QUFBQSwrQkFBWCxFQUErQyxDQUEvQztBQUNBM0IsZ0NBQUVDLGNBQUY7QUFDRDtBQVZIO0FBQUE7QUFBQTtBQURGLHVCQXRCRjtBQXNDRTtBQUFBLHVDQUFNLElBQU47QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFhLHdCQUFLO0FBQ2hCdkMsdUNBQ0VDLE1BQ0dTLE1BREgsR0FFR29ELGFBRkgsQ0FFaUI1RCxJQUZqQixFQUdHNkQsS0FISCxFQURGO0FBTUFDLHlDQUFXO0FBQUEsdUNBQU1SLFNBQVNTLFdBQVQsQ0FBcUIsS0FBckIsQ0FBTjtBQUFBLCtCQUFYLEVBQThDLENBQTlDO0FBQ0EzQixnQ0FBRUMsY0FBRjtBQUNEO0FBVkg7QUFBQTtBQUFBO0FBREYsdUJBdENGO0FBQUE7QUF1REdyQywyQkFBS2dFLElBQUwsS0FBYyxPQUFkLElBQ0M7QUFBQSx1Q0FBTSxJQUFOO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSx5Q0FBYSx3QkFBSztBQUNoQmxFLHVDQUFTQyxNQUFNUyxNQUFOLEdBQWV5RCxnQkFBZixDQUFnQ2pFLEtBQUtVLEdBQXJDLENBQVQ7QUFDQTBCLGdDQUFFQyxjQUFGO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFERix1QkF4REo7QUFBQTtBQW9FRTtBQUFBLHVDQUFNLElBQU47QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFhLHdCQUFLO0FBQ2hCdkMsdUNBQ0VDLE1BQ0dTLE1BREgsR0FFRzBELGVBRkgsQ0FFbUJsRSxLQUFLVSxHQUZ4QixFQUU2QlYsS0FBS3dELEtBQUwsQ0FBV1csSUFGeEMsRUFFOEM7QUFDMUNDLHNDQUFNLFdBRG9DO0FBRTFDSixzQ0FBTTtBQUZvQywrQkFGOUMsQ0FERjtBQVFBNUIsZ0NBQUVDLGNBQUY7QUFDRDtBQVhIO0FBQUE7QUFBQTtBQURGLHVCQXBFRjtBQXFGRTtBQUFBLHVDQUFNLElBQU47QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFhLHdCQUFLO0FBQ2hCdkMsdUNBQ0VDLE1BQ0dTLE1BREgsR0FFRzBELGVBRkgsQ0FHSW5FLE1BQU11RCxRQUFOLENBQWVDLFNBQWYsQ0FBeUJ2RCxLQUFLVSxHQUE5QixFQUFtQ0EsR0FIdkMsRUFJSVgsTUFBTXVELFFBQU4sQ0FDR0MsU0FESCxDQUNhdkQsS0FBS1UsR0FEbEIsRUFFRzhDLEtBRkgsQ0FFU0MsT0FGVCxDQUVpQnpELElBRmpCLElBRXlCLENBTjdCLEVBT0k7QUFDRW9FLHNDQUFNLFdBRFI7QUFFRUosc0NBQU07QUFGUiwrQkFQSixDQURGO0FBY0E1QixnQ0FBRUMsY0FBRjtBQUNEO0FBakJIO0FBQUE7QUFBQTtBQURGO0FBckZGO0FBRko7QUFBQTtBQUFBLGlCQURTO0FBQUE7QUFEQSxhQUFiO0FBdUhEO0FBQ0QsaUJBQU9ZLE9BQVA7QUFDRCxTQWhOOEIsUUFrTi9CeEIsT0FsTitCLEdBa05yQixnQkFBUTtBQUFBLGNBQ1IwQixNQURRLEdBQ0csTUFBS0QsS0FEUixDQUNSQyxNQURROztBQUVoQixjQUFNekIsWUFBWXlCLE9BQU9wRCxLQUFQLENBQ2ZTLE1BRGUsR0FFZkMsWUFGZSxDQUVGLE1BQUs0RCxDQUFMLENBQU8zRCxHQUZMLEVBRVUsRUFBRUMsbUJBQVcsTUFBSzBELENBQUwsQ0FBTzFELElBQVAsQ0FBWWdCLElBQVosRUFBWCxFQUFrQ2hCLElBQWxDLENBQUYsRUFGVixDQUFsQjtBQUdBd0MsaUJBQU9yRCxRQUFQLENBQWdCNEIsU0FBaEI7QUFDRCxTQXhOOEIsUUEwTi9CSSxPQTFOK0IsR0EwTnJCLFVBQUNDLElBQUQsRUFBT0MsWUFBUDtBQUFBLGlCQUF3QixNQUFLcUMsQ0FBTCxDQUFPMUQsSUFBUCxDQUFZc0IsR0FBWixDQUFnQkYsSUFBaEIsS0FBeUJDLFlBQWpEO0FBQUEsU0ExTnFCLFFBNE4vQnNDLFNBNU4rQixHQTRObkIsWUFBTTtBQUFBLDZCQUNTLE1BQUtwQixLQURkO0FBQUEsY0FDUmxELElBRFEsZ0JBQ1JBLElBRFE7QUFBQSxjQUNGbUQsTUFERSxnQkFDRkEsTUFERTs7QUFFaEIsY0FBTXpCLFlBQVl5QixPQUFPcEQsS0FBUCxDQUFhUyxNQUFiLEdBQXNCb0QsYUFBdEIsQ0FBb0M1RCxJQUFwQyxDQUFsQjtBQUNBbUQsaUJBQU9yRCxRQUFQLENBQWdCNEIsU0FBaEI7QUFDRCxTQWhPOEI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUNBa090QjtBQUFBLHVCQUNrQyxLQUFLd0IsS0FEdkM7QUFBQSxjQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxjQUNTb0IsUUFEVCxVQUNTQSxRQURUO0FBQUEsY0FDbUIvQixVQURuQixVQUNtQkEsVUFEbkI7QUFBQSxjQUVEeEMsSUFGQyxHQUVRLEtBQUtrRCxLQUZiLENBRURsRCxJQUZDOztBQUdQLGNBQU1pRCxVQUFVLEtBQUtELFVBQUwsRUFBaEI7QUFDQSxjQUFJRyxPQUFPRCxLQUFQLENBQWFzQixPQUFqQixFQUEwQjtBQUN4QnhFLG1CQUFPQSxLQUFLZSxHQUFMLENBQ0wsTUFESyxFQUVMZixLQUFLVyxJQUFMLENBQVU4RCxNQUFWLEdBQW1CM0QsTUFBbkIsQ0FBMEIsVUFBQ0gsSUFBRCxFQUFPRCxHQUFQLEVBQWU7QUFDdkMsa0JBQU1YLFFBQVFDLEtBQUtXLElBQUwsQ0FBVXNCLEdBQVYsQ0FBY3ZCLEdBQWQsQ0FBZDtBQUNBLGtCQUFJWCxTQUFTQSxNQUFNaUIsT0FBbkIsRUFBNEI7QUFDMUIsdUJBQU9MLEtBQUtJLEdBQUwsQ0FBU0wsR0FBVCxFQUFjeUMsT0FBT0QsS0FBUCxDQUFhc0IsT0FBYixDQUFxQnpFLE1BQU1pQixPQUEzQixDQUFkLENBQVA7QUFDRDtBQUNELHFCQUFPTCxJQUFQO0FBQ0QsYUFORCxFQU1HWCxLQUFLVyxJQU5SLENBRkssQ0FBUDtBQVVEO0FBQ0QsZUFBSzBELENBQUwsR0FBU3JFLElBQVQ7O0FBRUEsaUJBQ0U7QUFBQyx1QkFBRDtBQUFBLHlCQUNNLEtBQUtrRCxLQURYO0FBRUUsb0JBQU1sRCxJQUZSO0FBR0UsdUJBQVMsS0FBSzhCLE9BSGhCO0FBSUUsdUJBQVMsS0FBS0wsT0FKaEI7QUFLRSx5QkFBVyxLQUFLNkMsU0FMbEI7QUFNRSx3QkFBVW5CLE9BQU9ELEtBQVAsQ0FBYXdCO0FBTnpCO0FBUUdsQywwQkFDQyxDQUFDLENBQUNTLE9BREgsSUFFQyxDQUFDLENBQUNBLFFBQVEwQixNQUZYLElBR0c7QUFBQTtBQUFBLGdCQUFTLFVBQVQsRUFBYyxjQUFkLEVBQXVCLHdCQUFzQjNFLEtBQUtVLEdBQTNCLE9BQXZCO0FBQ0d1QyxzQkFBUTJCLEdBQVIsQ0FDQzNELE9BQU87QUFDTGxCLHVCQUFPb0QsT0FBT0QsS0FBUCxDQUFhbkQsS0FEZjtBQUVMRCwwQkFBVXFELE9BQU9ELEtBQVAsQ0FBYXBELFFBRmxCO0FBR0xFLDBCQUhLO0FBSUxrQix3QkFBUXlCLFFBQVF6QjtBQUpYLGVBQVAsQ0FERDtBQURILGFBWE47QUFzQkd5QixvQkFBUWtDLE1BQVIsS0FBbUIsS0FBbkIsR0FBMkJOLFFBQTNCLEdBQXNDO0FBdEJ6QyxXQURGO0FBMEJEO0FBOVE4Qjs7QUFBQTtBQUFBLGdDQVd4Qk8sS0FYd0IsR0FXaEJuQyxPQVhnQjs7QUFnUmpDLFdBQU9JLGFBQVA7QUFDRCxHQWpSYztBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvdXNlLWJsb2NrLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBEcm9wZG93biwgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFDb2csIEZhQ2hldnJvbkRvd24sIEZhQ2hldnJvblVwIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IFRvb2xiYXIsIHsgQnV0dG9uIH0gZnJvbSAnLi90b29sYmFyJztcblxuY29uc3Qgc2V0TGluayA9IChvbkNoYW5nZSwgdmFsdWUsIG5vZGUpID0+IHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IHdpbmRvdy5wcm9tcHQoJ0NvbnRleHQnLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICBpZiAobmV3Q29udGV4dCkge1xuICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UobmV3Q29udGV4dCk7XG4gICAgb25DaGFuZ2UoXG4gICAgICB2YWx1ZS5jaGFuZ2UoKS5zZXROb2RlQnlLZXkobm9kZS5rZXksIHtcbiAgICAgICAgZGF0YTogT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoXG4gICAgICAgICAgKGRhdGEsIGtleSkgPT4gZGF0YS5zZXQoa2V5LCB7IGJvdW5kVG86IG9ialtrZXldIH0pLFxuICAgICAgICAgIG5vZGUuZGF0YSxcbiAgICAgICAgKSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IEFjdGlvbiA9ICh7IG5vZGUsIHZhbHVlLCBvbkNoYW5nZSwgc2NoZW1hIH0pID0+IChcbiAgeyB0b2dnbGUsIGFjdGl2ZSwgbGFiZWwsIGNvbXBvbmVudCwgLi4ucmVzdCB9LFxuICBpLFxuKSA9PiB7XG4gIGNvbnN0IHNldERhdGEgPSBkYXRhID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSB2YWx1ZVxuICAgICAgLmNoYW5nZSgpXG4gICAgICAuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7IGRhdGE6IHsgLi4ubm9kZS5kYXRhLnRvSlMoKSwgLi4uZGF0YSB9IH0pO1xuICAgIG9uQ2hhbmdlKHRyYW5zZm9ybSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGEgPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBub2RlLmRhdGEuZ2V0KG5hbWUpIHx8IGRlZmF1bHRWYWx1ZTtcblxuICBjb25zdCB0b29sdGlwID1cbiAgICB0eXBlb2YgcmVzdC50b29sdGlwID09PSAnZnVuY3Rpb24nID8gcmVzdC50b29sdGlwKGdldERhdGEpIDogcmVzdC50b29sdGlwO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgdG9nZ2xlKHtcbiAgICAgICAgc2V0RGF0YSxcbiAgICAgICAgZ2V0RGF0YSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICBzY2hlbWEsXG4gICAgICAgIG5vZGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IENvbSA9IGNvbXBvbmVudDtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnUuSXRlbSBrZXk9e2l9PlxuICAgICAgICA8QnV0dG9uIG9uTW91c2VEb3duPXtvbkNsaWNrfSB0b29sdGlwPXt0b29sdGlwfT5cbiAgICAgICAgICA8Q29tXG4gICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxuICAgICAgICAgICAgZ2V0RGF0YT17Z2V0RGF0YX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG5vZGU9e25vZGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWVudS5JdGVtIGtleT17aX0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGFjdGl2ZT17ISFhY3RpdmUgJiYgYWN0aXZlKHsgZ2V0RGF0YSwgdmFsdWUgfSl9XG4gICAgICAgIG9uTW91c2VEb3duPXtvbkNsaWNrfVxuICAgICAgICB0b29sdGlwPXt0b29sdGlwfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L01lbnUuSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnMgPT4gQmxvY2sgPT4ge1xuICBjb25zdCBTdHlsZWRCbG9jayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgICAoeyBpc1NlbGVjdGVkLCB0aGVtZSwgbm9kZSB9KSA9PiAoe1xuICAgICAgb3V0bGluZTogaXNTZWxlY3RlZCAmJiBvcHRpb25zLmNhdGVnb3J5ICYmIGAycHggc29saWQgJHt0aGVtZS5jb2xvcn1gLFxuICAgIH0pLFxuICAgIHAgPT4gPEJsb2NrIHsuLi5wfSAvPixcbiAgICBwID0+IE9iamVjdC5rZXlzKHApLFxuICApO1xuXG4gIC8vIEBkbmRcbiAgY2xhc3MgQmFzZURlY29yYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHNsYXRlID0gb3B0aW9ucztcblxuICAgIGdldEFjdGlvbnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gWy4uLihvcHRpb25zLmFjdGlvbnMgfHwgW10pXTtcbiAgICAgIGNvbnN0IHsgZWRpdG9yLCBub2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKG9wdGlvbnMuY2F0ZWdvcnkpIHtcbiAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICBjb21wb25lbnQ6ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgbm9kZSB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uVXBcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAubW92ZU5vZGVCeUtleShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kb2N1bWVudC5nZXRQYXJlbnQobm9kZS5rZXkpLm5vZGVzLmluZGV4T2Yobm9kZSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxGYUNoZXZyb25Eb3duXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgLm1vdmVOb2RlQnlLZXkoXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5ub2Rlcy5pbmRleE9mKG5vZGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIGlmIChzdGF0ZS5kb2N1bWVudC5nZXRQYXJlbnQobm9kZS5rZXkpLm5vZGVzLmluZGV4T2Yobm9kZSkgPiAwKSB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiA8RmFBcnJvd1VwIC8+LFxuICAgICAgICAgICAgdG9nZ2xlOiAoeyBvbkNoYW5nZSwgc3RhdGUsIG5vZGUgfSkgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgLm1vdmVOb2RlQnlLZXkoXG4gICAgICAgICAgICAgICAgICAgIG5vZGUua2V5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kb2N1bWVudC5nZXRQYXJlbnQobm9kZS5rZXkpLmtleSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5ub2Rlcy5pbmRleE9mKG5vZGUpIC0gMSxcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN0YXRlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkubm9kZXMuc2l6ZSA+XG4gICAgICAgICAgc3RhdGUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5ub2Rlcy5pbmRleE9mKG5vZGUpXG4gICAgICAgICkge1xuICAgICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogPEZhQXJyb3dEb3duIC8+LFxuICAgICAgICAgICAgdG9nZ2xlOiAoeyBvbkNoYW5nZSwgc3RhdGUsIG5vZGUgfSkgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgLm1vdmVOb2RlQnlLZXkoXG4gICAgICAgICAgICAgICAgICAgIG5vZGUua2V5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kb2N1bWVudC5nZXRQYXJlbnQobm9kZS5rZXkpLmtleSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5ub2Rlcy5pbmRleE9mKG5vZGUpICsgMSxcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gKi9cblxuICAgICAgICBhY3Rpb25zLnB1c2goe1xuICAgICAgICAgIGNvbXBvbmVudDogKHsgdmFsdWUsIG9uQ2hhbmdlLCBub2RlIH0pID0+IChcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICA8TWVudSBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19PlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMaW5rKG9uQ2hhbmdlLCB2YWx1ZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERhdGVuYW5iaW5kdW5nXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS5jaGFuZ2UoKS5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTMO2c2NoZW5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb3ZlVG9SYW5nZU9mKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvY3VzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgS29waWVyZW5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb3ZlVG9SYW5nZU9mKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvY3VzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnY3V0JyksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBdXNzY2huZWlkZW5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICB7bm9kZS5raW5kID09PSAnYmxvY2snICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS5jaGFuZ2UoKS51bndyYXBCbG9ja0J5S2V5KG5vZGUua2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW50cGFja2VuXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8TWVudS5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkobm9kZS5rZXksIG5vZGUubm9kZXMuc2l6ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTGVlcmUgWmVpbGUgKEVuZGUpXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UGFyZW50KG5vZGUua2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9kZXMuaW5kZXhPZihub2RlKSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTGVlcmUgWmVpbGUgKE5hY2gpXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFDb2cgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWN0aW9ucztcbiAgICB9O1xuXG4gICAgc2V0RGF0YSA9IGRhdGEgPT4ge1xuICAgICAgY29uc3QgeyBlZGl0b3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBlZGl0b3IudmFsdWVcbiAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgIC5zZXROb2RlQnlLZXkodGhpcy5uLmtleSwgeyBkYXRhOiB7IC4uLnRoaXMubi5kYXRhLnRvSlMoKSwgLi4uZGF0YSB9IH0pO1xuICAgICAgZWRpdG9yLm9uQ2hhbmdlKHRyYW5zZm9ybSk7XG4gICAgfTtcblxuICAgIGdldERhdGEgPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiB0aGlzLm4uZGF0YS5nZXQobmFtZSkgfHwgZGVmYXVsdFZhbHVlO1xuXG4gICAgc2V0QWN0aXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlLCBlZGl0b3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBlZGl0b3IudmFsdWUuY2hhbmdlKCkubW92ZVRvUmFuZ2VPZihub2RlKTtcbiAgICAgIGVkaXRvci5vbkNoYW5nZSh0cmFuc2Zvcm0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGVkaXRvciwgY2hpbGRyZW4sIGlzU2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBsZXQgeyBub2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9ucygpO1xuICAgICAgaWYgKGVkaXRvci5wcm9wcy5iaW5kaW5nKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnNldChcbiAgICAgICAgICAnZGF0YScsXG4gICAgICAgICAgbm9kZS5kYXRhLmtleVNlcSgpLnJlZHVjZSgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5ib3VuZFRvKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLnNldChrZXksIGVkaXRvci5wcm9wcy5iaW5kaW5nW3ZhbHVlLmJvdW5kVG9dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0sIG5vZGUuZGF0YSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLm4gPSBub2RlO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQmxvY2tcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBub2RlPXtub2RlfVxuICAgICAgICAgIGdldERhdGE9e3RoaXMuZ2V0RGF0YX1cbiAgICAgICAgICBzZXREYXRhPXt0aGlzLnNldERhdGF9XG4gICAgICAgICAgc2V0QWN0aXZlPXt0aGlzLnNldEFjdGl2ZX1cbiAgICAgICAgICByZWFkT25seT17ZWRpdG9yLnByb3BzLnJlYWRPbmx5fVxuICAgICAgICA+XG4gICAgICAgICAge2lzU2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICEhYWN0aW9ucyAmJlxuICAgICAgICAgICAgISFhY3Rpb25zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxUb29sYmFyIHNob3cgaXNPcGVuZWQgcGFyZW50PXtgW2RhdGEta2V5PVwiJHtub2RlLmtleX1cIl1gfT5cbiAgICAgICAgICAgICAgICB7YWN0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgICBBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZWRpdG9yLnByb3BzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZWRpdG9yLnByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IG9wdGlvbnMuc2NoZW1hLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7b3B0aW9ucy5pc1ZvaWQgPT09IGZhbHNlID8gY2hpbGRyZW4gOiBbXX1cbiAgICAgICAgPC9TdHlsZWRCbG9jaz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBCYXNlRGVjb3JhdG9yO1xufTtcbiJdfQ==
