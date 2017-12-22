import 'antd/lib/menu/style';
import _Menu13 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu12 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu11 from 'antd/lib/menu';
import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/menu/style';
import _Menu10 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu9 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu8 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu7 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu6 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu5 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu4 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu3 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu2 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import FaCog from 'olymp-icons/lib/fa-cog';
import FaChevronDown from 'olymp-icons/lib/fa-chevron-down';
import FaChevronUp from 'olymp-icons/lib/fa-chevron-up';

import Toolbar, { Button } from './toolbar';

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
      return React.createElement(
        _Menu.Item,
        { key: i },
        React.createElement(
          Button,
          { onMouseDown: onClick, tooltip: tooltip },
          React.createElement(Com, {
            setData: setData,
            getData: getData,
            value: value,
            onChange: onChange,
            node: node
          })
        )
      );
    }

    return React.createElement(
      _Menu2.Item,
      { key: i },
      React.createElement(
        Button,
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

var _ref7 = React.createElement(_Menu11.Divider, null);

var _ref8 = React.createElement(_Menu12.Divider, null);

var _ref9 = React.createElement(_Menu13.Divider, null);

var _ref10 = React.createElement(FaCog, null);

export default (function (options) {
  return function (Block) {
    var _class, _temp2;

    var StyledBlock = createComponent(function (_ref3) {
      var isSelected = _ref3.isSelected,
          theme = _ref3.theme,
          node = _ref3.node;
      return {
        outline: isSelected && options.category && '2px solid ' + theme.color
      };
    }, function (p) {
      return React.createElement(Block, p);
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
                return React.createElement(
                  'div',
                  null,
                  React.createElement(FaChevronUp, {
                    onMouseDown: function onMouseDown(e) {
                      onChange(value.change().moveNodeByKey(node.key, value.document.getParent(node.key).key, value.document.getParent(node.key).nodes.indexOf(node) - 1));
                      e.preventDefault();
                    }
                  }),
                  React.createElement(FaChevronDown, {
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
                return React.createElement(
                  _Dropdown,
                  {
                    overlay: React.createElement(
                      _Menu10,
                      { style: { minWidth: 200 } },
                      React.createElement(
                        _Menu3.Item,
                        null,
                        React.createElement(
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
                      React.createElement(
                        _Menu4.Item,
                        null,
                        React.createElement(
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
                      React.createElement(
                        _Menu5.Item,
                        null,
                        React.createElement(
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
                      React.createElement(
                        _Menu6.Item,
                        null,
                        React.createElement(
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
                      node.kind === 'block' && React.createElement(
                        _Menu7.Item,
                        null,
                        React.createElement(
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
                      React.createElement(
                        _Menu8.Item,
                        null,
                        React.createElement(
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
                      React.createElement(
                        _Menu9.Item,
                        null,
                        React.createElement(
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

          return React.createElement(
            StyledBlock,
            _extends({}, this.props, {
              node: node,
              getData: this.getData,
              setData: this.setData,
              setActive: this.setActive,
              readOnly: editor.props.readOnly
            }),
            isSelected && !!actions && !!actions.length && React.createElement(
              Toolbar,
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
    }(Component), _class.slate = options, _temp2);

    return BaseDecorator;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3VzZS1ibG9jay1iYXNlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZUNvbXBvbmVudCIsIlRvb2xiYXIiLCJCdXR0b24iLCJzZXRMaW5rIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm5vZGUiLCJuZXdDb250ZXh0Iiwid2luZG93IiwicHJvbXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9iaiIsInBhcnNlIiwiY2hhbmdlIiwic2V0Tm9kZUJ5S2V5Iiwia2V5IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJzZXQiLCJib3VuZFRvIiwiQWN0aW9uIiwic2NoZW1hIiwiaSIsInRvZ2dsZSIsImFjdGl2ZSIsImxhYmVsIiwiY29tcG9uZW50IiwicmVzdCIsInNldERhdGEiLCJ0cmFuc2Zvcm0iLCJ0b0pTIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXREYXRhIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsImdldCIsInRvb2x0aXAiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQ29tIiwiU3R5bGVkQmxvY2siLCJpc1NlbGVjdGVkIiwidGhlbWUiLCJvdXRsaW5lIiwib3B0aW9ucyIsImNhdGVnb3J5IiwiY29sb3IiLCJwIiwiQmFzZURlY29yYXRvciIsImdldEFjdGlvbnMiLCJhY3Rpb25zIiwicHJvcHMiLCJlZGl0b3IiLCJwdXNoIiwibW92ZU5vZGVCeUtleSIsImRvY3VtZW50IiwiZ2V0UGFyZW50Iiwibm9kZXMiLCJpbmRleE9mIiwibWluV2lkdGgiLCJyZW1vdmVOb2RlQnlLZXkiLCJtb3ZlVG9SYW5nZU9mIiwiZm9jdXMiLCJzZXRUaW1lb3V0IiwiZXhlY0NvbW1hbmQiLCJraW5kIiwidW53cmFwQmxvY2tCeUtleSIsImluc2VydE5vZGVCeUtleSIsInNpemUiLCJ0eXBlIiwibiIsInNldEFjdGl2ZSIsImNoaWxkcmVuIiwiYmluZGluZyIsImtleVNlcSIsInJlYWRPbmx5Iiwi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QUFFTEQsMEJBQVVxRCxPQUFPRCxLQUFQLENBQWFwRCxRQUZsQjtBQUdMRSwwQkFISztBQUlMa0Isd0JBQVF5QixRQUFRekI7QUFKWCxlQUFQLENBREQ7QUFESCxhQVhOO0FBc0JHeUIsb0JBQVFrQyxNQUFSLEtBQW1CLEtBQW5CLEdBQTJCTixRQUEzQixHQUFzQztBQXRCekMsV0FERjtBQTBCRDtBQTlROEI7O0FBQUE7QUFBQSxNQVVMOUUsU0FWSyxVQVd4QnFGLEtBWHdCLEdBV2hCbkMsT0FYZ0I7O0FBZ1JqQyxXQUFPSSxhQUFQO0FBQ0QsR0FqUmM7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL3VzZS1ibG9jay1iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZhQ29nLCBGYUNoZXZyb25Eb3duLCBGYUNoZXZyb25VcCB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCBUb29sYmFyLCB7IEJ1dHRvbiB9IGZyb20gJy4vdG9vbGJhcic7XG5cbmNvbnN0IHNldExpbmsgPSAob25DaGFuZ2UsIHZhbHVlLCBub2RlKSA9PiB7XG4gIGNvbnN0IG5ld0NvbnRleHQgPSB3aW5kb3cucHJvbXB0KCdDb250ZXh0JywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgaWYgKG5ld0NvbnRleHQpIHtcbiAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKG5ld0NvbnRleHQpO1xuICAgIG9uQ2hhbmdlKFxuICAgICAgdmFsdWUuY2hhbmdlKCkuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7XG4gICAgICAgIGRhdGE6IE9iamVjdC5rZXlzKG9iaikucmVkdWNlKFxuICAgICAgICAgIChkYXRhLCBrZXkpID0+IGRhdGEuc2V0KGtleSwgeyBib3VuZFRvOiBvYmpba2V5XSB9KSxcbiAgICAgICAgICBub2RlLmRhdGEsXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBBY3Rpb24gPSAoeyBub2RlLCB2YWx1ZSwgb25DaGFuZ2UsIHNjaGVtYSB9KSA9PiAoXG4gIHsgdG9nZ2xlLCBhY3RpdmUsIGxhYmVsLCBjb21wb25lbnQsIC4uLnJlc3QgfSxcbiAgaSxcbikgPT4ge1xuICBjb25zdCBzZXREYXRhID0gZGF0YSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gdmFsdWVcbiAgICAgIC5jaGFuZ2UoKVxuICAgICAgLnNldE5vZGVCeUtleShub2RlLmtleSwgeyBkYXRhOiB7IC4uLm5vZGUuZGF0YS50b0pTKCksIC4uLmRhdGEgfSB9KTtcbiAgICBvbkNoYW5nZSh0cmFuc2Zvcm0pO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBjb25zdCBnZXREYXRhID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gbm9kZS5kYXRhLmdldChuYW1lKSB8fCBkZWZhdWx0VmFsdWU7XG5cbiAgY29uc3QgdG9vbHRpcCA9XG4gICAgdHlwZW9mIHJlc3QudG9vbHRpcCA9PT0gJ2Z1bmN0aW9uJyA/IHJlc3QudG9vbHRpcChnZXREYXRhKSA6IHJlc3QudG9vbHRpcDtcblxuICBjb25zdCBvbkNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgIHRvZ2dsZSh7XG4gICAgICAgIHNldERhdGEsXG4gICAgICAgIGdldERhdGEsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICBub2RlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBjb25zdCBDb20gPSBjb21wb25lbnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpfT5cbiAgICAgICAgPEJ1dHRvbiBvbk1vdXNlRG93bj17b25DbGlja30gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgPENvbVxuICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cbiAgICAgICAgICAgIGdldERhdGE9e2dldERhdGF9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBub2RlPXtub2RlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1lbnUuSXRlbSBrZXk9e2l9PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBhY3RpdmU9eyEhYWN0aXZlICYmIGFjdGl2ZSh7IGdldERhdGEsIHZhbHVlIH0pfVxuICAgICAgICBvbk1vdXNlRG93bj17b25DbGlja31cbiAgICAgICAgdG9vbHRpcD17dG9vbHRpcH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9NZW51Lkl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zID0+IEJsb2NrID0+IHtcbiAgY29uc3QgU3R5bGVkQmxvY2sgPSBjcmVhdGVDb21wb25lbnQoXG4gICAgKHsgaXNTZWxlY3RlZCwgdGhlbWUsIG5vZGUgfSkgPT4gKHtcbiAgICAgIG91dGxpbmU6IGlzU2VsZWN0ZWQgJiYgb3B0aW9ucy5jYXRlZ29yeSAmJiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3J9YCxcbiAgICB9KSxcbiAgICBwID0+IDxCbG9jayB7Li4ucH0gLz4sXG4gICAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbiAgKTtcblxuICAvLyBAZG5kXG4gIGNsYXNzIEJhc2VEZWNvcmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBzbGF0ZSA9IG9wdGlvbnM7XG5cbiAgICBnZXRBY3Rpb25zID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFsuLi4ob3B0aW9ucy5hY3Rpb25zIHx8IFtdKV07XG4gICAgICBjb25zdCB7IGVkaXRvciwgbm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChvcHRpb25zLmNhdGVnb3J5KSB7XG4gICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgY29tcG9uZW50OiAoeyBvbkNoYW5nZSwgdmFsdWUsIG5vZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvblVwXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgLm1vdmVOb2RlQnlLZXkoXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5ub2Rlcy5pbmRleE9mKG5vZGUpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uRG93blxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgIC5tb3ZlTm9kZUJ5S2V5KFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kb2N1bWVudC5nZXRQYXJlbnQobm9kZS5rZXkpLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkubm9kZXMuaW5kZXhPZihub2RlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICksXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBpZiAoc3RhdGUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5ub2Rlcy5pbmRleE9mKG5vZGUpID4gMCkge1xuICAgICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogPEZhQXJyb3dVcCAvPixcbiAgICAgICAgICAgIHRvZ2dsZTogKHsgb25DaGFuZ2UsIHN0YXRlLCBub2RlIH0pID0+XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgIC5tb3ZlTm9kZUJ5S2V5KFxuICAgICAgICAgICAgICAgICAgICBub2RlLmtleSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5rZXksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkubm9kZXMuaW5kZXhPZihub2RlKSAtIDEsXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdGF0ZS5kb2N1bWVudC5nZXRQYXJlbnQobm9kZS5rZXkpLm5vZGVzLnNpemUgPlxuICAgICAgICAgIHN0YXRlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkubm9kZXMuaW5kZXhPZihub2RlKVxuICAgICAgICApIHtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IDxGYUFycm93RG93biAvPixcbiAgICAgICAgICAgIHRvZ2dsZTogKHsgb25DaGFuZ2UsIHN0YXRlLCBub2RlIH0pID0+XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgIC5tb3ZlTm9kZUJ5S2V5KFxuICAgICAgICAgICAgICAgICAgICBub2RlLmtleSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZG9jdW1lbnQuZ2V0UGFyZW50KG5vZGUua2V5KS5rZXksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkubm9kZXMuaW5kZXhPZihub2RlKSArIDEsXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9ICovXG5cbiAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICBjb21wb25lbnQ6ICh7IHZhbHVlLCBvbkNoYW5nZSwgbm9kZSB9KSA9PiAoXG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgPE1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGluayhvbkNoYW5nZSwgdmFsdWUsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBEYXRlbmFuYmluZHVuZ1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51LkRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEzDtnNjaGVuXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW92ZVRvUmFuZ2VPZihub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEtvcGllcmVuXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW92ZVRvUmFuZ2VPZihub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2N1dCcpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQXVzc2NobmVpZGVuXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAge25vZGUua2luZCA9PT0gJ2Jsb2NrJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkudW53cmFwQmxvY2tCeUtleShub2RlLmtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVudHBhY2tlblxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPE1lbnUuRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KG5vZGUua2V5LCBub2RlLm5vZGVzLnNpemUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIExlZXJlIFplaWxlIChFbmRlKVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluc2VydE5vZGVCeUtleShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRvY3VtZW50LmdldFBhcmVudChub2RlLmtleSkua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFBhcmVudChub2RlLmtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vZGVzLmluZGV4T2Yobm9kZSkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIExlZXJlIFplaWxlIChOYWNoKVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQ29nIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgfTtcblxuICAgIHNldERhdGEgPSBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHsgZWRpdG9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gZWRpdG9yLnZhbHVlXG4gICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAuc2V0Tm9kZUJ5S2V5KHRoaXMubi5rZXksIHsgZGF0YTogeyAuLi50aGlzLm4uZGF0YS50b0pTKCksIC4uLmRhdGEgfSB9KTtcbiAgICAgIGVkaXRvci5vbkNoYW5nZSh0cmFuc2Zvcm0pO1xuICAgIH07XG5cbiAgICBnZXREYXRhID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gdGhpcy5uLmRhdGEuZ2V0KG5hbWUpIHx8IGRlZmF1bHRWYWx1ZTtcblxuICAgIHNldEFjdGl2ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZSwgZWRpdG9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gZWRpdG9yLnZhbHVlLmNoYW5nZSgpLm1vdmVUb1JhbmdlT2Yobm9kZSk7XG4gICAgICBlZGl0b3Iub25DaGFuZ2UodHJhbnNmb3JtKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBlZGl0b3IsIGNoaWxkcmVuLCBpc1NlbGVjdGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbGV0IHsgbm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnMoKTtcbiAgICAgIGlmIChlZGl0b3IucHJvcHMuYmluZGluZykge1xuICAgICAgICBub2RlID0gbm9kZS5zZXQoXG4gICAgICAgICAgJ2RhdGEnLFxuICAgICAgICAgIG5vZGUuZGF0YS5rZXlTZXEoKS5yZWR1Y2UoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmRhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUuYm91bmRUbykge1xuICAgICAgICAgICAgICByZXR1cm4gZGF0YS5zZXQoa2V5LCBlZGl0b3IucHJvcHMuYmluZGluZ1t2YWx1ZS5ib3VuZFRvXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9LCBub2RlLmRhdGEpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5uID0gbm9kZTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEJsb2NrXG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgbm9kZT17bm9kZX1cbiAgICAgICAgICBnZXREYXRhPXt0aGlzLmdldERhdGF9XG4gICAgICAgICAgc2V0RGF0YT17dGhpcy5zZXREYXRhfVxuICAgICAgICAgIHNldEFjdGl2ZT17dGhpcy5zZXRBY3RpdmV9XG4gICAgICAgICAgcmVhZE9ubHk9e2VkaXRvci5wcm9wcy5yZWFkT25seX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc1NlbGVjdGVkICYmXG4gICAgICAgICAgICAhIWFjdGlvbnMgJiZcbiAgICAgICAgICAgICEhYWN0aW9ucy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VG9vbGJhciBzaG93IGlzT3BlbmVkIHBhcmVudD17YFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYH0+XG4gICAgICAgICAgICAgICAge2FjdGlvbnMubWFwKFxuICAgICAgICAgICAgICAgICAgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVkaXRvci5wcm9wcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGVkaXRvci5wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBvcHRpb25zLnNjaGVtYSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAge29wdGlvbnMuaXNWb2lkID09PSBmYWxzZSA/IGNoaWxkcmVuIDogW119XG4gICAgICAgIDwvU3R5bGVkQmxvY2s+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQmFzZURlY29yYXRvcjtcbn07XG4iXX0=
