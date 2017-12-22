import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
// import { LightboxImage, Image, EditText } from 'olymp-cloudinary';
import cn from 'classnames';
import FaAlignLeft from 'olymp-icons/lib/fa-align-left';
import FaAlignRight from 'olymp-icons/lib/fa-align-right';
import FaPlus from 'olymp-icons/lib/fa-plus';
import FaMinus from 'olymp-icons/lib/fa-minus';

import { Inline, Block } from 'slate';
import { Image, Modal } from 'olymp-fela';
import { withState, withPropsOnChange, compose } from 'recompose';

import filestack from 'filestack-js';

export default {
  type: 'image',
  isVoid: true,
  kind: 'block',
  label: 'Bild',
  category: 'Bilder',
  component: function component(_ref) {
    var node = _ref.node,
        className = _ref.className,
        editor = _ref.editor,
        attributes = _ref.attributes,
        children = _ref.children;

    var value = node.data.get('value') || {
      width: 400,
      height: 300
    };
    var size = node.data.get('size') || 4;
    return React.createElement(
      Image,
      {
        attributes: attributes,
        className: cn(className, 'image-block'),
        width: 100 / size + '%',
        src: _get(value, 'url'),
        ratio: _get(value, 'height') / _get(value, 'width'),
        srcRatio: _get(value, 'height') / _get(value, 'width')
      },
      children
    );
  },
  styles: function styles(_ref2) {
    var theme = _ref2.theme,
        getData = _ref2.getData;

    var alignment = getData('float', 'none');
    var normalized = alignment.replace('+', '');
    return {
      float: normalized,
      margin: alignment === 'none' && '0 auto',
      // marginTop: alignment === 'none' && theme.space3,
      // marginBottom: theme.space3,
      zIndex: 1,
      extend: [{
        condition: normalized === 'left',
        style: { marginRight: theme.space3 }
      }, {
        condition: alignment === 'left+',
        style: { marginLeft: -75 }
      }, {
        condition: normalized === 'right',
        style: { marginLeft: theme.space3 }
      }, {
        condition: alignment === 'right+',
        style: { marginRight: -75 }
      }]
    };
  },
  actions: [{
    tooltip: function tooltip(getData) {
      return 'Bild ' + (getData('value') ? 'wechseln' : 'wählen');
    },
    component: function component(_ref3) {
      var setData = _ref3.setData,
          getData = _ref3.getData,
          p = _objectWithoutProperties(_ref3, ['setData', 'getData']);

      return React.createElement(EditText, {
        onChange: function onChange(value) {
          return setData({ value: value });
        },
        value: getData('value', {}),
        multi: false
      });
    },
    toggle: function toggle() {}
  }, {
    component: function component(_ref4) {
      var setData = _ref4.setData,
          getData = _ref4.getData,
          p = _objectWithoutProperties(_ref4, ['setData', 'getData']);

      return React.createElement(
        'span',
        {
          onClick: function onClick(value) {
            return setData({ value: null });
          }
        },
        'L\xF6schen'
      );
    },
    toggle: function toggle() {}
  }, {
    label: React.createElement(FaAlignLeft, null),
    tooltip: 'Links anordnen',
    active: function active(_ref5) {
      var getData = _ref5.getData;
      return getData('float', 'none').indexOf('left') === 0;
    },
    toggle: function toggle(_ref6) {
      var value = _ref6.value,
          onChange = _ref6.onChange,
          node = _ref6.node;

      var alignment = node.data.get('float') || 'none';
      if (alignment === 'none') {
        onChange(value.change().removeNodeByKey(node.key).collapseToStartOfNextBlock().insertInline(Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'left')
        })));
      } else if (alignment === 'left') {
        onChange(value.change().removeNodeByKey(node.key).insertInline(Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'left+')
        })));
      } else {
        onChange(value.change().removeNodeByKey(node.key).insertBlock(Block.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', null)
        })));
      }
    }
  }, {
    label: React.createElement(FaAlignRight, null),
    tooltip: 'Rechts anordnen',
    active: function active(_ref7) {
      var getData = _ref7.getData;
      return getData('float', 'none').indexOf('right') === 0;
    },
    toggle: function toggle(_ref8) {
      var value = _ref8.value,
          onChange = _ref8.onChange,
          node = _ref8.node;

      var alignment = node.data.get('float') || 'none';

      if (alignment === 'none') {
        onChange(value.change().removeNodeByKey(node.key).insertInline(Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'right')
        })));
      } else if (alignment === 'right') {
        onChange(value.change().removeNodeByKey(node.key).insertInline(Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'right+')
        })));
      } else {
        onChange(value.change().removeNodeByKey(node.key).insertBlock(Block.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', null)
        })));
      }
    }
  }, {
    label: React.createElement(FaPlus, null),
    tooltip: 'Größer',
    toggle: function toggle(_ref9) {
      var setData = _ref9.setData,
          getData = _ref9.getData;

      var size = getData('size', 4);
      setData({
        size: size > 1 ? size - 1 : 1
      });
    }
  }, {
    label: React.createElement(FaMinus, null),
    tooltip: 'Kleiner',
    toggle: function toggle(_ref10) {
      var setData = _ref10.setData,
          getData = _ref10.getData;

      var size = getData('size', 4);
      setData({
        size: size < 8 ? size + 1 : 8
      });
    }
  }]
};

var enhance = compose(withState('isOpen', 'setOpen', false), withPropsOnChange(['value'], function (_ref11) {
  var value = _ref11.value;
  return {
    value: (Array.isArray(value) ? value : [value]).filter(function (x) {
      return !_isEmpty(x);
    })
  };
}));

var EditText = enhance(_class = function (_Component) {
  _inherits(EditText, _Component);

  function EditText() {
    var _ref12;

    var _temp, _this, _ret;

    _classCallCheck(this, EditText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref12 = EditText.__proto__ || Object.getPrototypeOf(EditText)).call.apply(_ref12, [this].concat(args))), _this), _this.client = filestack.init('A2tR6xLUhRg23XWmrvRX0z'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref13) {
      var _this2 = this;

      var onChange = _ref13.onChange,
          value = _ref13.value,
          isOpen = _ref13.isOpen,
          setOpen = _ref13.setOpen,
          multi = _ref13.multi;

      if (this.props.isOpen !== isOpen && isOpen) {
        if (value.length && value[0].handle) {
          this.client.cropFiles(value.map(function (x) {
            return 'https://cdn.filestackcontent.com/' + (x.originalHandle || x.handle);
          }), {
            fromSources: ["url", "local_file_system", "imagesearch", "facebook", "instagram", "dropbox"],
            lang: "de"
          }).then(function (_ref14) {
            var filesUploaded = _ref14.filesUploaded;
            return Promise.all(filesUploaded.map(function (item, i) {
              return _this2.client.metadata(item.handle, {
                width: true,
                height: true
              }).then(function (res) {
                return _extends({
                  url: item.url,
                  handle: item.handle,
                  originalHandle: value[i].handle || item.handle,
                  mime: item.mimetype
                }, res);
              });
            }));
          }).then(function (files) {
            console.log(multi ? files : files[0]);
            onChange(multi ? files : files[0]);
            setOpen(false);
          });
        } else {
          this.client.pick({
            fromSources: ["url", "local_file_system", "imagesearch", "facebook", "instagram", "dropbox"],
            lang: "de"
          }).then(function (_ref15) {
            var filesUploaded = _ref15.filesUploaded;
            return Promise.all(filesUploaded.map(function (item) {
              return _this2.client.metadata(item.handle, {
                width: true,
                height: true
              }).then(function (res) {
                return _extends({
                  url: item.url,
                  handle: item.handle,
                  originalHandle: item.originalHandle,
                  mime: item.mimetype
                }, res);
              });
            }));
          }).then(function (files) {
            onChange(multi ? files : files[0]);
            setOpen(false);
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _onChange = _props.onChange,
          value = _props.value,
          isOpen = _props.isOpen,
          setOpen = _props.setOpen,
          multi = _props.multi;

      return React.createElement(
        'div',
        { onClick: function onClick() {
            return setOpen(true);
          } },
        'W\xE4hlen'
      );
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { onClick: function onClick() {
              return setOpen(true);
            } },
          'Hi'
        ),
        React.createElement(
          Modal,
          {
            portal: true,
            open: isOpen,
            onClose: function onClose() {
              return setOpen(false);
            },
            width: '90%',
            height: '90%'
          },
          React.createElement(Mediathek, {
            inModal: true,
            multi: multi,
            onChange: function onChange() {
              var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

              _onChange(multi ? value : value[0]);
              setOpen(false);
            },
            onClose: function onClose() {
              return setOpen(false);
            },
            value: value
          })
        )
      );
    }
  }]);

  return EditText;
}(Component)) || _class;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9maWxlc3RhY2staW1hZ2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY24iLCJJbmxpbmUiLCJCbG9jayIsIkltYWdlIiwiTW9kYWwiLCJ3aXRoU3RhdGUiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsImNvbXBvc2UiLCJmaWxlc3RhY2siLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJub2RlIiwiY2xhc3NOYW1lIiwiZWRpdG9yIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwidmFsdWUiLCJkYXRhIiwiZ2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwic3R5bGVzIiwidGhlbWUiLCJnZXREYXRhIiwiYWxpZ25tZW50Iiwibm9ybWFsaXplZCIsInJlcGxhY2UiLCJmbG9hdCIsIm1hcmdpbiIsInpJbmRleCIsImV4dGVuZCIsImNvbmRpdGlvbiIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJzcGFjZTMiLCJtYXJnaW5MZWZ0IiwiYWN0aW9ucyIsInRvb2x0aXAiLCJzZXREYXRhIiwicCIsInRvZ2dsZSIsImFjdGl2ZSIsImluZGV4T2YiLCJvbkNoYW5nZSIsImNoYW5nZSIsInJlbW92ZU5vZGVCeUtleSIsImtleSIsImNvbGxhcHNlVG9TdGFydE9mTmV4dEJsb2NrIiwiaW5zZXJ0SW5saW5lIiwiY3JlYXRlIiwic2V0IiwiaW5zZXJ0QmxvY2siLCJlbmhhbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwieCIsIkVkaXRUZXh0IiwiY2xpZW50IiwiaW5pdCIsImlzT3BlbiIsInNldE9wZW4iLCJtdWx0aSIsInByb3BzIiwibGVuZ3RoIiwiaGFuZGxlIiwiY3JvcEZpbGVzIiwibWFwIiwib3JpZ2luYWxIYW5kbGUiLCJmcm9tU291cmNlcyIsImxhbmciLCJ0aGVuIiwiZmlsZXNVcGxvYWRlZCIsIlByb21pc2UiLCJhbGwiLCJpdGVtIiwiaSIsIm1ldGFkYXRhIiwicmVzIiwidXJsIiwibWltZSIsIm1pbWV0eXBlIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwicGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7Ozs7OztBQUVBLFNBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLFFBQThCLE9BQTlCO0FBQ0EsU0FBU0MsS0FBVCxFQUFnQkMsS0FBaEIsUUFBNkIsWUFBN0I7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxpQkFBcEIsRUFBdUNDLE9BQXZDLFFBQXNELFdBQXREOztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7O0FBRUEsZUFBZTtBQUNiQyxRQUFNLE9BRE87QUFFYkMsVUFBUSxJQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLE1BSk07QUFLYkMsWUFBVSxRQUxHO0FBTWJDLGFBQVcseUJBQXVEO0FBQUEsUUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLFFBQTlDQyxTQUE4QyxRQUE5Q0EsU0FBOEM7QUFBQSxRQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsUUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLFFBQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDaEUsUUFBTUMsUUFBUUwsS0FBS00sSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxLQUEwQjtBQUN0Q0MsYUFBTyxHQUQrQjtBQUV0Q0MsY0FBUTtBQUY4QixLQUF4QztBQUlBLFFBQU1DLE9BQU9WLEtBQUtNLElBQUwsQ0FBVUMsR0FBVixDQUFjLE1BQWQsS0FBeUIsQ0FBdEM7QUFDQSxXQUNFO0FBQUMsV0FBRDtBQUFBO0FBQ0Usb0JBQVlKLFVBRGQ7QUFFRSxtQkFBV2xCLEdBQUdnQixTQUFILEVBQWMsYUFBZCxDQUZiO0FBR0UsZUFBVSxNQUFNUyxJQUFoQixNQUhGO0FBSUUsYUFBSyxLQUFJTCxLQUFKLEVBQVcs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akJEO0FBa0JEO0FBQ0Y7QUFDRjs7OzZCQUNRO0FBQUEsbUJBQzZDLEtBQUtFLEtBRGxEO0FBQUEsVUFDQ3BCLFNBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1c1QixLQURYLFVBQ1dBLEtBRFg7QUFBQSxVQUNrQjZDLE1BRGxCLFVBQ2tCQSxNQURsQjtBQUFBLFVBQzBCQyxPQUQxQixVQUMwQkEsT0FEMUI7QUFBQSxVQUNtQ0MsS0FEbkMsVUFDbUNBLEtBRG5DOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssU0FBUztBQUFBLG1CQUFNRCxRQUFRLElBQVIsQ0FBTjtBQUFBLFdBQWQ7QUFBQTtBQUFBLE9BREY7QUFHQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFNBQVM7QUFBQSxxQkFBTUEsUUFBUSxJQUFSLENBQU47QUFBQSxhQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQyxlQUFEO0FBQUE7QUFDRSx3QkFERjtBQUVFLGtCQUFNRCxNQUZSO0FBR0UscUJBQVM7QUFBQSxxQkFBTUMsUUFBUSxLQUFSLENBQU47QUFBQSxhQUhYO0FBSUUsbUJBQU0sS0FKUjtBQUtFLG9CQUFPO0FBTFQ7QUFPRSw4QkFBQyxTQUFEO0FBQ0UseUJBREY7QUFFRSxtQkFBT0MsS0FGVDtBQUdFLHNCQUFVLG9CQUFnQjtBQUFBLGtCQUFmL0MsS0FBZSx1RUFBUCxFQUFPOztBQUN4QjRCLHdCQUFTbUIsUUFBUS9DLEtBQVIsR0FBZ0JBLE1BQU0sQ0FBTixDQUF6QjtBQUNBOEMsc0JBQVEsS0FBUjtBQUNELGFBTkg7QUFPRSxxQkFBUztBQUFBLHFCQUFNQSxRQUFRLEtBQVIsQ0FBTjtBQUFBLGFBUFg7QUFRRSxtQkFBTzlDO0FBUlQ7QUFQRjtBQUZGLE9BREY7QUF1QkQ7Ozs7RUExRW9CckIsUyIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvZmlsZXN0YWNrLWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IExpZ2h0Ym94SW1hZ2UsIEltYWdlLCBFZGl0VGV4dCB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgRmFBbGlnbkxlZnQsIEZhQWxpZ25SaWdodCwgRmFQbHVzLCBGYU1pbnVzIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgSW5saW5lLCBCbG9jayB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IEltYWdlLCBNb2RhbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFN0YXRlLCB3aXRoUHJvcHNPbkNoYW5nZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBpc0VtcHR5LCBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGZpbGVzdGFjayBmcm9tICdmaWxlc3RhY2stanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdpbWFnZScsXG4gIGlzVm9pZDogdHJ1ZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdCaWxkJyxcbiAgY2F0ZWdvcnk6ICdCaWxkZXInLFxuICBjb21wb25lbnQ6ICh7IG5vZGUsIGNsYXNzTmFtZSwgZWRpdG9yLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBub2RlLmRhdGEuZ2V0KCd2YWx1ZScpIHx8IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICB9O1xuICAgIGNvbnN0IHNpemUgPSBub2RlLmRhdGEuZ2V0KCdzaXplJykgfHwgNDtcbiAgICByZXR1cm4gKFxuICAgICAgPEltYWdlXG4gICAgICAgIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnaW1hZ2UtYmxvY2snKX1cbiAgICAgICAgd2lkdGg9e2AkezEwMCAvIHNpemV9JWB9XG4gICAgICAgIHNyYz17Z2V0KHZhbHVlLCAndXJsJyl9XG4gICAgICAgIHJhdGlvPXtnZXQodmFsdWUsICdoZWlnaHQnKSAvIGdldCh2YWx1ZSwgJ3dpZHRoJyl9XG4gICAgICAgIHNyY1JhdGlvPXtnZXQodmFsdWUsICdoZWlnaHQnKSAvIGdldCh2YWx1ZSwgJ3dpZHRoJyl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvSW1hZ2U+XG4gICAgKTtcbiAgfSxcbiAgc3R5bGVzOiAoeyB0aGVtZSwgZ2V0RGF0YSB9KSA9PiB7XG4gICAgY29uc3QgYWxpZ25tZW50ID0gZ2V0RGF0YSgnZmxvYXQnLCAnbm9uZScpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBhbGlnbm1lbnQucmVwbGFjZSgnKycsICcnKTtcbiAgICByZXR1cm4ge1xuICAgICAgZmxvYXQ6IG5vcm1hbGl6ZWQsXG4gICAgICBtYXJnaW46IGFsaWdubWVudCA9PT0gJ25vbmUnICYmICcwIGF1dG8nLFxuICAgICAgLy8gbWFyZ2luVG9wOiBhbGlnbm1lbnQgPT09ICdub25lJyAmJiB0aGVtZS5zcGFjZTMsXG4gICAgICAvLyBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGV4dGVuZDogW1xuICAgICAgICB7XG4gICAgICAgICAgY29uZGl0aW9uOiBub3JtYWxpemVkID09PSAnbGVmdCcsXG4gICAgICAgICAgc3R5bGU6IHsgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNlMyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29uZGl0aW9uOiBhbGlnbm1lbnQgPT09ICdsZWZ0KycsXG4gICAgICAgICAgc3R5bGU6IHsgbWFyZ2luTGVmdDogLTc1IH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb25kaXRpb246IG5vcm1hbGl6ZWQgPT09ICdyaWdodCcsXG4gICAgICAgICAgc3R5bGU6IHsgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2UzIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb25kaXRpb246IGFsaWdubWVudCA9PT0gJ3JpZ2h0KycsXG4gICAgICAgICAgc3R5bGU6IHsgbWFyZ2luUmlnaHQ6IC03NSB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBhY3Rpb25zOiBbXG4gICAge1xuICAgICAgdG9vbHRpcDogZ2V0RGF0YSA9PiBgQmlsZCAke2dldERhdGEoJ3ZhbHVlJykgPyAnd2VjaHNlbG4nIDogJ3fDpGhsZW4nfWAsXG4gICAgICBjb21wb25lbnQ6ICh7IHNldERhdGEsIGdldERhdGEsIC4uLnAgfSkgPT4gKFxuICAgICAgICA8RWRpdFRleHRcbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0RGF0YSh7IHZhbHVlIH0pfVxuICAgICAgICAgIHZhbHVlPXtnZXREYXRhKCd2YWx1ZScsIHt9KX1cbiAgICAgICAgICBtdWx0aT17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogKHsgc2V0RGF0YSwgZ2V0RGF0YSwgLi4ucCB9KSA9PiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17dmFsdWUgPT4gc2V0RGF0YSh7IHZhbHVlOiBudWxsIH0pfVxuICAgICAgICA+TMO2c2NoZW5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSxcbiAgICAgIHRvZ2dsZTogKCkgPT4ge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogPEZhQWxpZ25MZWZ0IC8+LFxuICAgICAgdG9vbHRpcDogJ0xpbmtzIGFub3JkbmVuJyxcbiAgICAgIGFjdGl2ZTogKHsgZ2V0RGF0YSB9KSA9PiBnZXREYXRhKCdmbG9hdCcsICdub25lJykuaW5kZXhPZignbGVmdCcpID09PSAwLFxuICAgICAgdG9nZ2xlOiAoeyB2YWx1ZSwgb25DaGFuZ2UsIG5vZGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSBub2RlLmRhdGEuZ2V0KCdmbG9hdCcpIHx8ICdub25lJztcbiAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSlcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mTmV4dEJsb2NrKClcbiAgICAgICAgICAgICAgLmluc2VydElubGluZShcbiAgICAgICAgICAgICAgICBJbmxpbmUuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIGlzVm9pZDogbm9kZS5pc1ZvaWQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmbG9hdCcsICdsZWZ0JyksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpXG4gICAgICAgICAgICAgIC5pbnNlcnRJbmxpbmUoXG4gICAgICAgICAgICAgICAgSW5saW5lLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICBpc1ZvaWQ6IG5vZGUuaXNWb2lkLFxuICAgICAgICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnZmxvYXQnLCAnbGVmdCsnKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpXG4gICAgICAgICAgICAgIC5pbnNlcnRCbG9jayhcbiAgICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgaXNWb2lkOiBub2RlLmlzVm9pZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2Zsb2F0JywgbnVsbCksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFBbGlnblJpZ2h0IC8+LFxuICAgICAgdG9vbHRpcDogJ1JlY2h0cyBhbm9yZG5lbicsXG4gICAgICBhY3RpdmU6ICh7IGdldERhdGEgfSkgPT4gZ2V0RGF0YSgnZmxvYXQnLCAnbm9uZScpLmluZGV4T2YoJ3JpZ2h0JykgPT09IDAsXG4gICAgICB0b2dnbGU6ICh7IHZhbHVlLCBvbkNoYW5nZSwgbm9kZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGFsaWdubWVudCA9IG5vZGUuZGF0YS5nZXQoJ2Zsb2F0JykgfHwgJ25vbmUnO1xuXG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT09ICdub25lJykge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpXG4gICAgICAgICAgICAgIC5pbnNlcnRJbmxpbmUoXG4gICAgICAgICAgICAgICAgSW5saW5lLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICBpc1ZvaWQ6IG5vZGUuaXNWb2lkLFxuICAgICAgICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnZmxvYXQnLCAncmlnaHQnKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpXG4gICAgICAgICAgICAgIC5pbnNlcnRJbmxpbmUoXG4gICAgICAgICAgICAgICAgSW5saW5lLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICBpc1ZvaWQ6IG5vZGUuaXNWb2lkLFxuICAgICAgICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnZmxvYXQnLCAncmlnaHQrJyksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KVxuICAgICAgICAgICAgICAuaW5zZXJ0QmxvY2soXG4gICAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIGlzVm9pZDogbm9kZS5pc1ZvaWQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmbG9hdCcsIG51bGwpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogPEZhUGx1cyAvPixcbiAgICAgIHRvb2x0aXA6ICdHcsO2w59lcicsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gZ2V0RGF0YSgnc2l6ZScsIDQpO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICBzaXplOiBzaXplID4gMSA/IHNpemUgLSAxIDogMSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYU1pbnVzIC8+LFxuICAgICAgdG9vbHRpcDogJ0tsZWluZXInLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCA0KTtcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZSA8IDggPyBzaXplICsgMSA6IDgsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZSgnaXNPcGVuJywgJ3NldE9wZW4nLCBmYWxzZSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsndmFsdWUnXSwgKHsgdmFsdWUgfSkgPT4gKHtcbiAgICB2YWx1ZTogKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKS5maWx0ZXIoeCA9PiAhaXNFbXB0eSh4KSksXG4gIH0pKSxcbik7XG5cbkBlbmhhbmNlXG5jbGFzcyBFZGl0VGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNsaWVudCA9IGZpbGVzdGFjay5pbml0KCdBMnRSNnhMVWhSZzIzWFdtcnZSWDB6Jyk7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBvbkNoYW5nZSwgdmFsdWUsIGlzT3Blbiwgc2V0T3BlbiwgbXVsdGkgfSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAhPT0gaXNPcGVuICYmIGlzT3Blbikge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCAmJiB2YWx1ZVswXS5oYW5kbGUpIHtcbiAgICAgICAgdGhpcy5jbGllbnQuY3JvcEZpbGVzKHZhbHVlLm1hcCh4ID0+IGBodHRwczovL2Nkbi5maWxlc3RhY2tjb250ZW50LmNvbS8ke3gub3JpZ2luYWxIYW5kbGUgfHwgeC5oYW5kbGV9YCksIHtcbiAgICAgICAgICBmcm9tU291cmNlczpbXCJ1cmxcIiwgXCJsb2NhbF9maWxlX3N5c3RlbVwiLFwiaW1hZ2VzZWFyY2hcIixcImZhY2Vib29rXCIsXCJpbnN0YWdyYW1cIixcImRyb3Bib3hcIl0sXG4gICAgICAgICAgbGFuZzpcImRlXCJcbiAgICAgICAgfSkudGhlbigoeyBmaWxlc1VwbG9hZGVkIH0pID0+IFByb21pc2UuYWxsKGZpbGVzVXBsb2FkZWQubWFwKChpdGVtLCBpKSA9PiB0aGlzLmNsaWVudFxuICAgICAgICAgIC5tZXRhZGF0YShpdGVtLmhhbmRsZSwge1xuICAgICAgICAgICAgd2lkdGg6IHRydWUsXG4gICAgICAgICAgICBoZWlnaHQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICAgIGhhbmRsZTogaXRlbS5oYW5kbGUsXG4gICAgICAgICAgICBvcmlnaW5hbEhhbmRsZTogdmFsdWVbaV0uaGFuZGxlIHx8IGl0ZW0uaGFuZGxlLFxuICAgICAgICAgICAgbWltZTogaXRlbS5taW1ldHlwZSxcbiAgICAgICAgICAgIC4uLnJlc1xuICAgICAgICAgIH0pKSkpKS50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG11bHRpID8gZmlsZXMgOiBmaWxlc1swXSlcbiAgICAgICAgICBvbkNoYW5nZShtdWx0aSA/IGZpbGVzOiBmaWxlc1swXSk7XG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGllbnQucGljayh7XG4gICAgICAgICAgZnJvbVNvdXJjZXM6W1widXJsXCIsIFwibG9jYWxfZmlsZV9zeXN0ZW1cIixcImltYWdlc2VhcmNoXCIsXCJmYWNlYm9va1wiLFwiaW5zdGFncmFtXCIsXCJkcm9wYm94XCJdLFxuICAgICAgICAgIGxhbmc6XCJkZVwiXG4gICAgICAgIH0pLnRoZW4oKHsgZmlsZXNVcGxvYWRlZCB9KSA9PiBQcm9taXNlLmFsbChmaWxlc1VwbG9hZGVkLm1hcChpdGVtID0+IHRoaXMuY2xpZW50XG4gICAgICAgICAgLm1ldGFkYXRhKGl0ZW0uaGFuZGxlLCB7XG4gICAgICAgICAgICB3aWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGhlaWdodDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgaGFuZGxlOiBpdGVtLmhhbmRsZSxcbiAgICAgICAgICAgIG9yaWdpbmFsSGFuZGxlOiBpdGVtLm9yaWdpbmFsSGFuZGxlLFxuICAgICAgICAgICAgbWltZTogaXRlbS5taW1ldHlwZSxcbiAgICAgICAgICAgIC4uLnJlc1xuICAgICAgICAgIH0pKSkpKS50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKG11bHRpID8gZmlsZXM6IGZpbGVzWzBdKTtcbiAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCB2YWx1ZSwgaXNPcGVuLCBzZXRPcGVuLCBtdWx0aSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT5Xw6RobGVuPC9kaXY+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT5IaTwvZGl2PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBwb3J0YWxcbiAgICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgd2lkdGg9XCI5MCVcIlxuICAgICAgICAgIGhlaWdodD1cIjkwJVwiXG4gICAgICAgID5cbiAgICAgICAgICA8TWVkaWF0aGVrXG4gICAgICAgICAgICBpbk1vZGFsXG4gICAgICAgICAgICBtdWx0aT17bXVsdGl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlID0gW10pID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UobXVsdGkgPyB2YWx1ZSA6IHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
