'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympCloudinary = require('olymp-cloudinary');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

    var Img = editor.props.readOnly === true ? _olympCloudinary.LightboxImage : _olympCloudinary.Image;
    var value = node.data.get('value') || {
      width: 400,
      height: 300
    };
    var size = node.data.get('size') || 4;
    return _react2.default.createElement(
      Img,
      {
        attributes: attributes,
        className: (0, _classnames2.default)(className, 'image-block'),
        width: 100 / size + '%',
        value: value
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
      marginTop: alignment === 'none' && theme.space3,
      marginBottom: theme.space3,
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

      return _react2.default.createElement(_olympCloudinary.EditText, {
        onChange: function onChange(value) {
          return setData({ value: value });
        },
        value: getData('value', {}),
        multi: false
      });
    },
    toggle: function toggle() {}
  }, {
    label: _react2.default.createElement(_faAlignLeft2.default, null),
    tooltip: 'Links anordnen',
    active: function active(_ref4) {
      var getData = _ref4.getData;
      return getData('float', 'none').indexOf('left') === 0;
    },
    toggle: function toggle(_ref5) {
      var value = _ref5.value,
          onChange = _ref5.onChange,
          node = _ref5.node;

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
    active: function active(_ref6) {
      var getData = _ref6.getData;
      return getData('float', 'none').indexOf('right') === 0;
    },
    toggle: function toggle(_ref7) {
      var value = _ref7.value,
          onChange = _ref7.onChange,
          node = _ref7.node;

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
    toggle: function toggle(_ref8) {
      var setData = _ref8.setData,
          getData = _ref8.getData;

      var size = getData('size', 4);
      setData({
        size: size > 1 ? size - 1 : 1
      });
    }
  }, {
    label: _react2.default.createElement(_faMinus2.default, null),
    tooltip: 'Kleiner',
    toggle: function toggle(_ref9) {
      var setData = _ref9.setData,
          getData = _ref9.getData;

      var size = getData('size', 4);
      setData({
        size: size < 8 ? size + 1 : 8
      });
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvaW1hZ2UvaW1hZ2UuZXM2Il0sIm5hbWVzIjpbInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsImNvbXBvbmVudCIsIm5vZGUiLCJjbGFzc05hbWUiLCJlZGl0b3IiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJJbWciLCJwcm9wcyIsInJlYWRPbmx5IiwidmFsdWUiLCJkYXRhIiwiZ2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwic3R5bGVzIiwidGhlbWUiLCJnZXREYXRhIiwiYWxpZ25tZW50Iiwibm9ybWFsaXplZCIsInJlcGxhY2UiLCJmbG9hdCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInNwYWNlMyIsIm1hcmdpbkJvdHRvbSIsInpJbmRleCIsImV4dGVuZCIsImNvbmRpdGlvbiIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiYWN0aW9ucyIsInRvb2x0aXAiLCJzZXREYXRhIiwicCIsInRvZ2dsZSIsImFjdGl2ZSIsImluZGV4T2YiLCJvbkNoYW5nZSIsImNoYW5nZSIsInJlbW92ZU5vZGVCeUtleSIsImtleSIsImNvbGxhcHNlVG9TdGFydE9mTmV4dEJsb2NrIiwiaW5zZXJ0SW5saW5lIiwiY3JlYXRlIiwic2V0IiwiaW5zZXJ0QmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztrQkFFZTtBQUNiQSxRQUFNLE9BRE87QUFFYkMsVUFBUSxJQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLE1BSk07QUFLYkMsWUFBVSxRQUxHO0FBTWJDLGFBQVcseUJBQXVEO0FBQUEsUUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLFFBQTlDQyxTQUE4QyxRQUE5Q0EsU0FBOEM7QUFBQSxRQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsUUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtB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QUNFaEQsV0FBTyxxREFEVDtBQUVFbUMsYUFBUyxRQUZYO0FBR0VHLFlBQVEsdUJBQTBCO0FBQUEsVUFBdkJGLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFVBQWRqQixPQUFjLFNBQWRBLE9BQWM7O0FBQ2hDLFVBQU1ILE9BQU9HLFFBQVEsTUFBUixFQUFnQixDQUFoQixDQUFiO0FBQ0FpQixjQUFRO0FBQ05wQixjQUFNQSxPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQjtBQUR0QixPQUFSO0FBR0Q7QUFSSCxHQTlHTyxFQXdIUDtBQUNFaEIsV0FBTyxzREFEVDtBQUVFbUMsYUFBUyxTQUZYO0FBR0VHLFlBQVEsdUJBQTBCO0FBQUEsVUFBdkJGLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFVBQWRqQixPQUFjLFNBQWRBLE9BQWM7O0FBQ2hDLFVBQU1ILE9BQU9HLFFBQVEsTUFBUixFQUFnQixDQUFoQixDQUFiO0FBQ0FpQixjQUFRO0FBQ05wQixjQUFNQSxPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQjtBQUR0QixPQUFSO0FBR0Q7QUFSSCxHQXhITztBQXJESSxDIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MvaW1hZ2UvaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlnaHRib3hJbWFnZSwgSW1hZ2UsIEVkaXRUZXh0IH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGYUFsaWduTGVmdCwgRmFBbGlnblJpZ2h0LCBGYVBsdXMsIEZhTWludXMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBJbmxpbmUsIEJsb2NrIH0gZnJvbSAnc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdpbWFnZScsXG4gIGlzVm9pZDogdHJ1ZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdCaWxkJyxcbiAgY2F0ZWdvcnk6ICdCaWxkZXInLFxuICBjb21wb25lbnQ6ICh7IG5vZGUsIGNsYXNzTmFtZSwgZWRpdG9yLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgSW1nID0gZWRpdG9yLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gTGlnaHRib3hJbWFnZSA6IEltYWdlO1xuICAgIGNvbnN0IHZhbHVlID0gbm9kZS5kYXRhLmdldCgndmFsdWUnKSB8fCB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfTtcbiAgICBjb25zdCBzaXplID0gbm9kZS5kYXRhLmdldCgnc2l6ZScpIHx8IDQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbWdcbiAgICAgICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdpbWFnZS1ibG9jaycpfVxuICAgICAgICB3aWR0aD17YCR7MTAwIC8gc2l6ZX0lYH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0ltZz5cbiAgICApO1xuICB9LFxuICBzdHlsZXM6ICh7IHRoZW1lLCBnZXREYXRhIH0pID0+IHtcbiAgICBjb25zdCBhbGlnbm1lbnQgPSBnZXREYXRhKCdmbG9hdCcsICdub25lJyk7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGFsaWdubWVudC5yZXBsYWNlKCcrJywgJycpO1xuICAgIHJldHVybiB7XG4gICAgICBmbG9hdDogbm9ybWFsaXplZCxcbiAgICAgIG1hcmdpbjogYWxpZ25tZW50ID09PSAnbm9uZScgJiYgJzAgYXV0bycsXG4gICAgICBtYXJnaW5Ub3A6IGFsaWdubWVudCA9PT0gJ25vbmUnICYmIHRoZW1lLnNwYWNlMyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2UzLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgZXh0ZW5kOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb25kaXRpb246IG5vcm1hbGl6ZWQgPT09ICdsZWZ0JyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2UzIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb25kaXRpb246IGFsaWdubWVudCA9PT0gJ2xlZnQrJyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5MZWZ0OiAtNzUgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbmRpdGlvbjogbm9ybWFsaXplZCA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjZTMgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbmRpdGlvbjogYWxpZ25tZW50ID09PSAncmlnaHQrJyxcbiAgICAgICAgICBzdHlsZTogeyBtYXJnaW5SaWdodDogLTc1IH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0b29sdGlwOiBnZXREYXRhID0+IGBCaWxkICR7Z2V0RGF0YSgndmFsdWUnKSA/ICd3ZWNoc2VsbicgOiAnd8OkaGxlbid9YCxcbiAgICAgIGNvbXBvbmVudDogKHsgc2V0RGF0YSwgZ2V0RGF0YSwgLi4ucCB9KSA9PiAoXG4gICAgICAgIDxFZGl0VGV4dFxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywge30pfVxuICAgICAgICAgIG11bHRpPXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICB0b2dnbGU6ICgpID0+IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYUFsaWduTGVmdCAvPixcbiAgICAgIHRvb2x0aXA6ICdMaW5rcyBhbm9yZG5lbicsXG4gICAgICBhY3RpdmU6ICh7IGdldERhdGEgfSkgPT4gZ2V0RGF0YSgnZmxvYXQnLCAnbm9uZScpLmluZGV4T2YoJ2xlZnQnKSA9PT0gMCxcbiAgICAgIHRvZ2dsZTogKHsgdmFsdWUsIG9uQ2hhbmdlLCBub2RlIH0pID0+IHtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gbm9kZS5kYXRhLmdldCgnZmxvYXQnKSB8fCAnbm9uZSc7XG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT09ICdub25lJykge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVOb2RlQnlLZXkobm9kZS5rZXkpXG4gICAgICAgICAgICAgIC5jb2xsYXBzZVRvU3RhcnRPZk5leHRCbG9jaygpXG4gICAgICAgICAgICAgIC5pbnNlcnRJbmxpbmUoXG4gICAgICAgICAgICAgICAgSW5saW5lLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICBpc1ZvaWQ6IG5vZGUuaXNWb2lkLFxuICAgICAgICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnZmxvYXQnLCAnbGVmdCcpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KVxuICAgICAgICAgICAgICAuaW5zZXJ0SW5saW5lKFxuICAgICAgICAgICAgICAgIElubGluZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgaXNWb2lkOiBub2RlLmlzVm9pZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2Zsb2F0JywgJ2xlZnQrJyksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KVxuICAgICAgICAgICAgICAuaW5zZXJ0QmxvY2soXG4gICAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIGlzVm9pZDogbm9kZS5pc1ZvaWQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmbG9hdCcsIG51bGwpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogPEZhQWxpZ25SaWdodCAvPixcbiAgICAgIHRvb2x0aXA6ICdSZWNodHMgYW5vcmRuZW4nLFxuICAgICAgYWN0aXZlOiAoeyBnZXREYXRhIH0pID0+IGdldERhdGEoJ2Zsb2F0JywgJ25vbmUnKS5pbmRleE9mKCdyaWdodCcpID09PSAwLFxuICAgICAgdG9nZ2xlOiAoeyB2YWx1ZSwgb25DaGFuZ2UsIG5vZGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSBub2RlLmRhdGEuZ2V0KCdmbG9hdCcpIHx8ICdub25lJztcblxuICAgICAgICBpZiAoYWxpZ25tZW50ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KVxuICAgICAgICAgICAgICAuaW5zZXJ0SW5saW5lKFxuICAgICAgICAgICAgICAgIElubGluZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgaXNWb2lkOiBub2RlLmlzVm9pZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2Zsb2F0JywgJ3JpZ2h0JyksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAucmVtb3ZlTm9kZUJ5S2V5KG5vZGUua2V5KVxuICAgICAgICAgICAgICAuaW5zZXJ0SW5saW5lKFxuICAgICAgICAgICAgICAgIElubGluZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgaXNWb2lkOiBub2RlLmlzVm9pZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2Zsb2F0JywgJ3JpZ2h0KycpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSlcbiAgICAgICAgICAgICAgLmluc2VydEJsb2NrKFxuICAgICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICBpc1ZvaWQ6IG5vZGUuaXNWb2lkLFxuICAgICAgICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnZmxvYXQnLCBudWxsKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYVBsdXMgLz4sXG4gICAgICB0b29sdGlwOiAnR3LDtsOfZXInLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCA0KTtcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZSA+IDEgPyBzaXplIC0gMSA6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFNaW51cyAvPixcbiAgICAgIHRvb2x0aXA6ICdLbGVpbmVyJyxcbiAgICAgIHRvZ2dsZTogKHsgc2V0RGF0YSwgZ2V0RGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnZXREYXRhKCdzaXplJywgNCk7XG4gICAgICAgIHNldERhdGEoe1xuICAgICAgICAgIHNpemU6IHNpemUgPCA4ID8gc2l6ZSArIDEgOiA4LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=
