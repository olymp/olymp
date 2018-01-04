'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _faAlignLeft = require('olymp-icons/lib/fa-align-left');

var _faAlignLeft2 = _interopRequireDefault(_faAlignLeft);

var _faAlignRight = require('olymp-icons/lib/fa-align-right');

var _faAlignRight2 = _interopRequireDefault(_faAlignRight);

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faMinus = require('olymp-icons/lib/fa-minus');

var _faMinus2 = _interopRequireDefault(_faMinus);

var _slate = require('slate');

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _filestackJs = require('filestack-js');

var _filestackJs2 = _interopRequireDefault(_filestackJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import { LightboxImage, Image, EditText } from 'olymp-cloudinary';


exports.default = {
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
    return _react2.default.createElement(
      _olympFela.Image,
      {
        attributes: attributes,
        className: (0, _classnames2.default)(className, 'image-block'),
        width: 100 / size + '%',
        src: (0, _get3.default)(value, 'url'),
        ratio: (0, _get3.default)(value, 'height') / (0, _get3.default)(value, 'width'),
        srcRatio: (0, _get3.default)(value, 'height') / (0, _get3.default)(value, 'width')
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

      return _react2.default.createElement(EditText, {
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

      return _react2.default.createElement(
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
    label: _react2.default.createElement(_faAlignLeft2.default, null),
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
        onChange(value.change().removeNodeByKey(node.key).collapseToStartOfNextBlock().insertInline(_slate.Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'left')
        })));
      } else if (alignment === 'left') {
        onChange(value.change().removeNodeByKey(node.key).insertInline(_slate.Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'left+')
        })));
      } else {
        onChange(value.change().removeNodeByKey(node.key).insertBlock(_slate.Block.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', null)
        })));
      }
    }
  }, {
    label: _react2.default.createElement(_faAlignRight2.default, null),
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
        onChange(value.change().removeNodeByKey(node.key).insertInline(_slate.Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'right')
        })));
      } else if (alignment === 'right') {
        onChange(value.change().removeNodeByKey(node.key).insertInline(_slate.Inline.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', 'right+')
        })));
      } else {
        onChange(value.change().removeNodeByKey(node.key).insertBlock(_slate.Block.create({
          type: node.type,
          isVoid: node.isVoid,
          data: node.data.set('float', null)
        })));
      }
    }
  }, {
    label: _react2.default.createElement(_faPlus2.default, null),
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
    label: _react2.default.createElement(_faMinus2.default, null),
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


var enhance = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'setOpen', false), (0, _recompose.withPropsOnChange)(['value'], function (_ref11) {
  var value = _ref11.value;
  return {
    value: (Array.isArray(value) ? value : [value]).filter(function (x) {
      return !(0, _isEmpty3.default)(x);
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref12 = EditText.__proto__ || Object.getPrototypeOf(EditText)).call.apply(_ref12, [this].concat(args))), _this), _this.client = _filestackJs2.default.init('A2tR6xLUhRg23XWmrvRX0z'), _temp), _possibleConstructorReturn(_this, _ret);
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

      return _react2.default.createElement(
        'div',
        { onClick: function onClick() {
            return setOpen(true);
          } },
        'W\xE4hlen'
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return setOpen(true);
            } },
          'Hi'
        ),
        _react2.default.createElement(
          _olympFela.Modal,
          {
            portal: true,
            open: isOpen,
            onClose: function onClose() {
              return setOpen(false);
            },
            width: '90%',
            height: '90%'
          },
          _react2.default.createElement(Mediathek, {
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
}(_react.Component)) || _class;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvZmlsZXN0YWNrLWltYWdlLmVzNiJdLCJuYW1lcyI6WyJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJub2RlIiwiY2xhc3NOYW1lIiwiZWRpdG9yIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwidmFsdWUiLCJkYXRhIiwiZ2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwic3R5bGVzIiwidGhlbWUiLCJnZXREYXRhIiwiYWxpZ25tZW50Iiwibm9ybWFsaXplZCIsInJlcGxhY2UiLCJmbG9hdCIsIm1hcmdpbiIsInpJbmRleCIsImV4dGVuZCIsImNvbmRpdGlvbiIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJzcGFjZTMiLCJtYXJnaW5MZWZ0IiwiYWN0aW9ucyIsInRvb2x0aXAiLCJzZXREYXRhIiwicCIsInRvZ2dsZSIsImFjdGl2ZSIsImluZGV4T2YiLCJvbkNoYW5nZSIsImNoYW5nZSIsInJlbW92ZU5vZGVCeUtleSIsImtleSIsImNvbGxhcHNlVG9TdGFydE9mTmV4dEJsb2NrIiwiaW5zZXJ0SW5saW5lIiwiY3JlYXRlIiwic2V0IiwiaW5zZXJ0QmxvY2siLCJlbmhhbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwieCIsIkVkaXRUZXh0IiwiY2xpZW50IiwiaW5pdCIsImlzT3BlbiIsInNldE9wZW4iLCJtdWx0aSIsInByb3BzIiwibGVuZ3RoIiwiaGFuZGxlIiwiY3JvcEZpbGVzIiwibWFwIiwib3JpZ2luYWxIYW5kbGUiLCJmcm9tU291cmNlcyIsImxhbmciLCJ0aGVuIiwiZmlsZXNVcGxvYWRlZCIsIlByb21pc2UiLCJhbGwiLCJpdGVtIiwiaSIsIm1ldGFkYXRhIiwicmVzIiwidXJsIiwibWltZSIsIm1pbWV0eXBlIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwicGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVB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Q0FBTjtBQUFBLGFBQWQ7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSx3QkFERjtBQUVFLGtCQUFNRCxNQUZSO0FBR0UscUJBQVM7QUFBQSxxQkFBTUMsUUFBUSxLQUFSLENBQU47QUFBQSxhQUhYO0FBSUUsbUJBQU0sS0FKUjtBQUtFLG9CQUFPO0FBTFQ7QUFPRSx3Q0FBQyxTQUFEO0FBQ0UseUJBREY7QUFFRSxtQkFBT0MsS0FGVDtBQUdFLHNCQUFVLG9CQUFnQjtBQUFBLGtCQUFmL0MsS0FBZSx1RUFBUCxFQUFPOztBQUN4QjRCLHdCQUFTbUIsUUFBUS9DLEtBQVIsR0FBZ0JBLE1BQU0sQ0FBTixDQUF6QjtBQUNBOEMsc0JBQVEsS0FBUjtBQUNELGFBTkg7QUFPRSxxQkFBUztBQUFBLHFCQUFNQSxRQUFRLEtBQVIsQ0FBTjtBQUFBLGFBUFg7QUFRRSxtQkFBTzlDO0FBUlQ7QUFQRjtBQUZGLE9BREY7QUF1QkQiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9maWxlc3RhY2staW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgTGlnaHRib3hJbWFnZSwgSW1hZ2UsIEVkaXRUZXh0IH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGYUFsaWduTGVmdCwgRmFBbGlnblJpZ2h0LCBGYVBsdXMsIEZhTWludXMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBJbmxpbmUsIEJsb2NrIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgSW1hZ2UsIE1vZGFsIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyB3aXRoU3RhdGUsIHdpdGhQcm9wc09uQ2hhbmdlLCBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGlzRW1wdHksIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZmlsZXN0YWNrIGZyb20gJ2ZpbGVzdGFjay1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2ltYWdlJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ0JpbGQnLFxuICBjYXRlZ29yeTogJ0JpbGRlcicsXG4gIGNvbXBvbmVudDogKHsgbm9kZSwgY2xhc3NOYW1lLCBlZGl0b3IsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGF0YS5nZXQoJ3ZhbHVlJykgfHwge1xuICAgICAgd2lkdGg6IDQwMCxcbiAgICAgIGhlaWdodDogMzAwLFxuICAgIH07XG4gICAgY29uc3Qgc2l6ZSA9IG5vZGUuZGF0YS5nZXQoJ3NpemUnKSB8fCA0O1xuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdpbWFnZS1ibG9jaycpfVxuICAgICAgICB3aWR0aD17YCR7MTAwIC8gc2l6ZX0lYH1cbiAgICAgICAgc3JjPXtnZXQodmFsdWUsICd1cmwnKX1cbiAgICAgICAgcmF0aW89e2dldCh2YWx1ZSwgJ2hlaWdodCcpIC8gZ2V0KHZhbHVlLCAnd2lkdGgnKX1cbiAgICAgICAgc3JjUmF0aW89e2dldCh2YWx1ZSwgJ2hlaWdodCcpIC8gZ2V0KHZhbHVlLCAnd2lkdGgnKX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9JbWFnZT5cbiAgICApO1xuICB9LFxuICBzdHlsZXM6ICh7IHRoZW1lLCBnZXREYXRhIH0pID0+IHtcbiAgICBjb25zdCBhbGlnbm1lbnQgPSBnZXREYXRhKCdmbG9hdCcsICdub25lJyk7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGFsaWdubWVudC5yZXBsYWNlKCcrJywgJycpO1xuICAgIHJldHVybiB7XG4gICAgICBmbG9hdDogbm9ybWFsaXplZCxcbiAgICAgIG1hcmdpbjogYWxpZ25tZW50ID09PSAnbm9uZScgJiYgJzAgYXV0bycsXG4gICAgICAvLyBtYXJnaW5Ub3A6IGFsaWdubWVudCA9PT0gJ25vbmUnICYmIHRoZW1lLnNwYWNlMyxcbiAgICAgIC8vIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2UzLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgZXh0ZW5kOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb25kaXRpb246IG5vcm1hbGl6ZWQgPT09ICdsZWZ0JyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2UzIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb25kaXRpb246IGFsaWdubWVudCA9PT0gJ2xlZnQrJyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5MZWZ0OiAtNzUgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbmRpdGlvbjogbm9ybWFsaXplZCA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjZTMgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbmRpdGlvbjogYWxpZ25tZW50ID09PSAncmlnaHQrJyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5SaWdodDogLTc1IH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0b29sdGlwOiBnZXREYXRhID0+IGBCaWxkICR7Z2V0RGF0YSgndmFsdWUnKSA/ICd3ZWNoc2VsbicgOiAnd8OkaGxlbid9YCxcbiAgICAgIGNvbXBvbmVudDogKHsgc2V0RGF0YSwgZ2V0RGF0YSwgLi4ucCB9KSA9PiAoXG4gICAgICAgIDxFZGl0VGV4dFxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywge30pfVxuICAgICAgICAgIG11bHRpPXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICB0b2dnbGU6ICgpID0+IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29tcG9uZW50OiAoeyBzZXREYXRhLCBnZXREYXRhLCAuLi5wIH0pID0+IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBvbkNsaWNrPXt2YWx1ZSA9PiBzZXREYXRhKHsgdmFsdWU6IG51bGwgfSl9XG4gICAgICAgID5Mw7ZzY2hlblxuICAgICAgICA8L3NwYW4+XG4gICAgICApLFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFBbGlnbkxlZnQgLz4sXG4gICAgICB0b29sdGlwOiAnTGlua3MgYW5vcmRuZW4nLFxuICAgICAgYWN0aXZlOiAoeyBnZXREYXRhIH0pID0+IGdldERhdGEoJ2Zsb2F0JywgJ25vbmUnKS5pbmRleE9mKCdsZWZ0JykgPT09IDAsXG4gICAgICB0b2dnbGU6ICh7IHZhbHVlLCBvbkNoYW5nZSwgbm9kZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGFsaWdubWVudCA9IG5vZGUuZGF0YS5nZXQoJ2Zsb2F0JykgfHwgJ25vbmUnO1xuICAgICAgICBpZiAoYWxpZ25tZW50ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb1N0YXJ0T2ZOZXh0QmxvY2soKVxuICAgICAgICAgICAgICAuaW5zZXJ0SW5saW5lKFxuICAgICAgICAgICAgICAgIElubGluZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgaXNWb2lkOiBub2RlLmlzVm9pZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2Zsb2F0JywgJ2xlZnQnKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSlcbiAgICAgICAgICAgICAgLmluc2VydElubGluZShcbiAgICAgICAgICAgICAgICBJbmxpbmUuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIGlzVm9pZDogbm9kZS5pc1ZvaWQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmbG9hdCcsICdsZWZ0KycpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSlcbiAgICAgICAgICAgICAgLmluc2VydEJsb2NrKFxuICAgICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICBpc1ZvaWQ6IG5vZGUuaXNWb2lkLFxuICAgICAgICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnZmxvYXQnLCBudWxsKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYUFsaWduUmlnaHQgLz4sXG4gICAgICB0b29sdGlwOiAnUmVjaHRzIGFub3JkbmVuJyxcbiAgICAgIGFjdGl2ZTogKHsgZ2V0RGF0YSB9KSA9PiBnZXREYXRhKCdmbG9hdCcsICdub25lJykuaW5kZXhPZigncmlnaHQnKSA9PT0gMCxcbiAgICAgIHRvZ2dsZTogKHsgdmFsdWUsIG9uQ2hhbmdlLCBub2RlIH0pID0+IHtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gbm9kZS5kYXRhLmdldCgnZmxvYXQnKSB8fCAnbm9uZSc7XG5cbiAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSlcbiAgICAgICAgICAgICAgLmluc2VydElubGluZShcbiAgICAgICAgICAgICAgICBJbmxpbmUuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIGlzVm9pZDogbm9kZS5pc1ZvaWQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmbG9hdCcsICdyaWdodCcpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSlcbiAgICAgICAgICAgICAgLmluc2VydElubGluZShcbiAgICAgICAgICAgICAgICBJbmxpbmUuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIGlzVm9pZDogbm9kZS5pc1ZvaWQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmbG9hdCcsICdyaWdodCsnKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpXG4gICAgICAgICAgICAgIC5pbnNlcnRCbG9jayhcbiAgICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgaXNWb2lkOiBub2RlLmlzVm9pZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2Zsb2F0JywgbnVsbCksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFQbHVzIC8+LFxuICAgICAgdG9vbHRpcDogJ0dyw7bDn2VyJyxcbiAgICAgIHRvZ2dsZTogKHsgc2V0RGF0YSwgZ2V0RGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnZXREYXRhKCdzaXplJywgNCk7XG4gICAgICAgIHNldERhdGEoe1xuICAgICAgICAgIHNpemU6IHNpemUgPiAxID8gc2l6ZSAtIDEgOiAxLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogPEZhTWludXMgLz4sXG4gICAgICB0b29sdGlwOiAnS2xlaW5lcicsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gZ2V0RGF0YSgnc2l6ZScsIDQpO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICBzaXplOiBzaXplIDwgOCA/IHNpemUgKyAxIDogOCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFN0YXRlKCdpc09wZW4nLCAnc2V0T3BlbicsIGZhbHNlKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZSddLCAoeyB2YWx1ZSB9KSA9PiAoe1xuICAgIHZhbHVlOiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pLmZpbHRlcih4ID0+ICFpc0VtcHR5KHgpKSxcbiAgfSkpLFxuKTtcblxuQGVuaGFuY2VcbmNsYXNzIEVkaXRUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY2xpZW50ID0gZmlsZXN0YWNrLmluaXQoJ0EydFI2eExVaFJnMjNYV21ydlJYMHonKTtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IG9uQ2hhbmdlLCB2YWx1ZSwgaXNPcGVuLCBzZXRPcGVuLCBtdWx0aSB9KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICE9PSBpc09wZW4gJiYgaXNPcGVuKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmIHZhbHVlWzBdLmhhbmRsZSkge1xuICAgICAgICB0aGlzLmNsaWVudC5jcm9wRmlsZXModmFsdWUubWFwKHggPT4gYGh0dHBzOi8vY2RuLmZpbGVzdGFja2NvbnRlbnQuY29tLyR7eC5vcmlnaW5hbEhhbmRsZSB8fCB4LmhhbmRsZX1gKSwge1xuICAgICAgICAgIGZyb21Tb3VyY2VzOltcInVybFwiLCBcImxvY2FsX2ZpbGVfc3lzdGVtXCIsXCJpbWFnZXNlYXJjaFwiLFwiZmFjZWJvb2tcIixcImluc3RhZ3JhbVwiLFwiZHJvcGJveFwiXSxcbiAgICAgICAgICBsYW5nOlwiZGVcIlxuICAgICAgICB9KS50aGVuKCh7IGZpbGVzVXBsb2FkZWQgfSkgPT4gUHJvbWlzZS5hbGwoZmlsZXNVcGxvYWRlZC5tYXAoKGl0ZW0sIGkpID0+IHRoaXMuY2xpZW50XG4gICAgICAgICAgLm1ldGFkYXRhKGl0ZW0uaGFuZGxlLCB7XG4gICAgICAgICAgICB3aWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGhlaWdodDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgaGFuZGxlOiBpdGVtLmhhbmRsZSxcbiAgICAgICAgICAgIG9yaWdpbmFsSGFuZGxlOiB2YWx1ZVtpXS5oYW5kbGUgfHwgaXRlbS5oYW5kbGUsXG4gICAgICAgICAgICBtaW1lOiBpdGVtLm1pbWV0eXBlLFxuICAgICAgICAgICAgLi4ucmVzXG4gICAgICAgICAgfSkpKSkpLnRoZW4oKGZpbGVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobXVsdGkgPyBmaWxlcyA6IGZpbGVzWzBdKVxuICAgICAgICAgIG9uQ2hhbmdlKG11bHRpID8gZmlsZXM6IGZpbGVzWzBdKTtcbiAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsaWVudC5waWNrKHtcbiAgICAgICAgICBmcm9tU291cmNlczpbXCJ1cmxcIiwgXCJsb2NhbF9maWxlX3N5c3RlbVwiLFwiaW1hZ2VzZWFyY2hcIixcImZhY2Vib29rXCIsXCJpbnN0YWdyYW1cIixcImRyb3Bib3hcIl0sXG4gICAgICAgICAgbGFuZzpcImRlXCJcbiAgICAgICAgfSkudGhlbigoeyBmaWxlc1VwbG9hZGVkIH0pID0+IFByb21pc2UuYWxsKGZpbGVzVXBsb2FkZWQubWFwKGl0ZW0gPT4gdGhpcy5jbGllbnRcbiAgICAgICAgICAubWV0YWRhdGEoaXRlbS5oYW5kbGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgaGVpZ2h0OiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgICBoYW5kbGU6IGl0ZW0uaGFuZGxlLFxuICAgICAgICAgICAgb3JpZ2luYWxIYW5kbGU6IGl0ZW0ub3JpZ2luYWxIYW5kbGUsXG4gICAgICAgICAgICBtaW1lOiBpdGVtLm1pbWV0eXBlLFxuICAgICAgICAgICAgLi4ucmVzXG4gICAgICAgICAgfSkpKSkpLnRoZW4oKGZpbGVzKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UobXVsdGkgPyBmaWxlczogZmlsZXNbMF0pO1xuICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlLCBpc09wZW4sIHNldE9wZW4sIG11bHRpIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PlfDpGhsZW48L2Rpdj5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PkhpPC9kaXY+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHBvcnRhbFxuICAgICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICB3aWR0aD1cIjkwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiOTAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNZWRpYXRoZWtcbiAgICAgICAgICAgIGluTW9kYWxcbiAgICAgICAgICAgIG11bHRpPXttdWx0aX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUgPSBbXSkgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZShtdWx0aSA/IHZhbHVlIDogdmFsdWVbMF0pO1xuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
