var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import addMinutes from 'date-fns/addMinutes';
import startOfDay from 'date-fns/startOfDay';
import format from 'date-fns/format';

import Slider from 'multirangeslider';
import { createComponent } from 'olymp-fela';

var Elessar = function (_Component) {
  _inherits(Elessar, _Component);

  function Elessar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Elessar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Elessar.__proto__ || Object.getPrototypeOf(Elessar)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      if (_this.dontChange) {
        return;
      }
      var onChange = _this.props.onChange;

      var keys = Object.keys(e.data);
      var array = keys.map(function (key) {
        return [e.data[key].val[0], e.data[key].val[1]];
      });
      onChange(array);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Elessar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slider = new Slider({
        min: 7 * 60,
        max: 21 * 60,
        minWidth: 60,
        step: 30,
        label: function label(value) {
          var start = addMinutes(startOfDay(new Date()), value[0]);
          var end = addMinutes(startOfDay(new Date()), value[1]);
          return format(start, 'HH:mm') + '-' + format(end, 'HH:mm');
        }
      });
      this.slider.on('change', this.onChange);
      ReactDOM.findDOMNode(this).appendChild(this.slider.el);
      this.resetValues();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.dontChange) {
        return;
      }
      this.resetValues(newProps);
    }
  }, {
    key: 'resetValues',
    value: function resetValues() {
      var _this2 = this;

      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      this.dontChange = true;
      this.slider.removeAll();
      var value = newProps.value;

      if (!value) {
        value = [];
      } else if (!Array.isArray(value)) {
        value = [];
      }
      value.filter(function (item) {
        return Array.isArray(item);
      }).forEach(function (item) {
        _this2.slider.add(item);
      });
      this.dontChange = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = this.props.className;

      return React.createElement('div', { className: className, ref: function ref(x) {
          return _this3.dev = x;
        } });
    }
  }]);

  return Elessar;
}(Component);

export default createComponent(function (_ref2) {
  var theme = _ref2.theme;

  var height = 32;
  return {
    '> .multirangeslider-slider': {
      display: 'block',
      userSelect: 'none',
      '> .multirangeslider-allowChangeFalse': {
        '> .multirangeslider-range': {
          cursor: 'default',
          '> .multirangeslider-left-handler': {
            cursor: 'default'
          },
          '> .multirangeslider-right-handler': {
            cursor: 'default'
          }
        }
      },
      '> .multirangeslider-bar': {
        height: height,
        border: '1px solid #d9d9d9',
        borderRadius: 4,
        width: '100%',
        display: 'block',
        background: theme.light,
        position: 'relative',
        boxSizing: 'border-box',

        '> .multirangeslider-ghost': {
          position: 'absolute',
          height: '100%',
          textAlign: 'center',
          lineHeight: height + 'px',
          top: 0,
          color: theme.color,
          background: 'rgba(0, 0, 0, 0.05)',
          cursor: 'pointer'
        },
        '> .multirangeslider-pressed': {
          background: theme.light2
        },
        '> .multirangeslider-zero-width.multirangeslider-pressed-right': {
          '> .multirangeslider-right-handler': {
            left: -8
          }
        },
        '> .multirangeslider-zero-width.multirangeslider-pressed-left': {
          '> .multirangeslider-left-handler': {
            left: -8
          }
        },
        '> .multirangeslider-zero-width.multirangeslider-remove-popup': {
          left: -12
        },
        '> .multirangeslider-range': {
          position: 'absolute',
          height: '100%',
          top: 0,
          cursor: 'move',
          '-webkit-user-drag': 'none',
          color: theme.light,
          backgroundColor: theme.color,

          '> .multirangeslider-label': {
            position: 'absolute',
            textAlign: 'center',
            lineHeight: height + 'px',
            width: '100%',
            display: 'inline'
          },
          '> .multirangeslider-left-handler': {
            position: 'absolute',
            width: 8,
            background: theme.light2,
            height: '100%',
            cursor: 'ew-resize',
            '-webkit-user-drag': 'none',
            left: 0
          },
          '> .multirangeslider-right-handler': {
            position: 'absolute',
            width: 8,
            background: theme.light2,
            height: '100%',
            cursor: 'ew-resize',
            '-webkit-user-drag': 'none',
            right: 0
          },
          '> .multirangeslider-remove-popup': {
            transition: '0.5s',
            position: 'absolute',
            top: -30,
            textAlign: 'center',
            width: '100%',
            '> .multirangeslider-remove-label': {
              width: 20,
              height: 20,
              lineHeight: '20px',
              background: theme.color,
              color: theme.light,
              opacity: '0.5',
              display: 'inline-block'
            }
          }
        }
      }
    }
  };
}, function (x) {
  return React.createElement(Elessar, x);
}, function (x) {
  return Object.keys(x);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL3RpbWUtcmFuZ2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJTbGlkZXIiLCJjcmVhdGVDb21wb25lbnQiLCJFbGVzc2FyIiwib25DaGFuZ2UiLCJkb250Q2hhbmdlIiwicHJvcHMiLCJrZXlzIiwiT2JqZWN0IiwiZSIsImRhdGEiLCJhcnJheSIsIm1hcCIsImtleSIsInZhbCIsInNsaWRlciIsIm1pbiIsIm1heCIsIm1pbldpZHRoIiwic3RlcCIsImxhYmVsIiwic3RhcnQiLCJhZGRNaW51dGVzIiwic3RhcnRPZkRheSIsIkRhdGUiLCJ2YWx1ZSIsImVuZCIsImZvcm1hdCIsIm9uIiwiZmluZERPTU5vZGUiLCJhcHBlbmRDaGlsZCIsImVsIiwicmVzZXRWYWx1ZXMiLCJuZXdQcm9wcyIsInJlbW92ZUFsbCIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsIml0ZW0iLCJmb3JFYWNoIiwiYWRkIiwiY2xhc3NOYW1lIiwiZGV2IiwieCIsInRoZW1lIiwiaGVpZ2h0IiwiZGlzcGxheSIsInVzZXJTZWxlY3QiLCJjdXJzb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJsaWdodCIsInBvc2l0aW9uIiwiYm94U2l6aW5nIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsInRvcCIsImNvbG9yIiwibGlnaHQyIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInJpZ2h0IiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCOzs7OztBQUVBLE9BQU9DLE1BQVAsTUFBbUIsa0JBQW5CO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7SUFFTUMsTzs7Ozs7Ozs7Ozs7Ozs7d0xBeUJKQyxRLEdBQVcsYUFB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O0FBTGtCLFdBVEY7QUFnQjNCLDhDQUFvQztBQUNsQ1Esc0JBQVUsVUFEd0I7QUFFbENILG1CQUFPLENBRjJCO0FBR2xDQyx3QkFBWVIsTUFBTWdCLE1BSGdCO0FBSWxDZixvQkFBUSxNQUowQjtBQUtsQ0csb0JBQVEsV0FMMEI7QUFNbEMsaUNBQXFCLE1BTmE7QUFPbENhLGtCQUFNO0FBUDRCLFdBaEJUO0FBeUIzQiwrQ0FBcUM7QUFDbkNQLHNCQUFVLFVBRHlCO0FBRW5DSCxtQkFBTyxDQUY0QjtBQUduQ0Msd0JBQVlSLE1BQU1nQixNQUhpQjtBQUluQ2Ysb0JBQVEsTUFKMkI7QUFLbkNHLG9CQUFRLFdBTDJCO0FBTW5DLGlDQUFxQixNQU5jO0FBT25DZSxtQkFBTztBQVA0QixXQXpCVjtBQWtDM0IsOENBQW9DO0FBQ2xDQyx3QkFBWSxNQURzQjtBQUVsQ1Ysc0JBQVUsVUFGd0I7QUFHbENJLGlCQUFLLENBQUMsRUFINEI7QUFJbENGLHVCQUFXLFFBSnVCO0FBS2xDTCxtQkFBTyxNQUwyQjtBQU1sQyxnREFBb0M7QUFDbENBLHFCQUFPLEVBRDJCO0FBRWxDTixzQkFBUSxFQUYwQjtBQUdsQ1ksMEJBQVksTUFIc0I7QUFJbENMLDBCQUFZUixNQUFNZSxLQUpnQjtBQUtsQ0EscUJBQU9mLE1BQU1TLEtBTHFCO0FBTWxDWSx1QkFBUyxLQU55QjtBQU9sQ25CLHVCQUFTO0FBUHlCO0FBTkY7QUFsQ1Q7QUFwQ0o7QUFkQztBQUR6QixHQUFQO0FBeUdELENBNUdZLEVBNkdiO0FBQUEsU0FBSyxvQkFBQyxPQUFELEVBQWFILENBQWIsQ0FBTDtBQUFBLENBN0dhLEVBOEdiO0FBQUEsU0FBS25DLE9BQU9ELElBQVAsQ0FBWW9DLENBQVosQ0FBTDtBQUFBLENBOUdhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvdWkvZWRpdHMvdGltZS1yYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFkZE1pbnV0ZXMsIHN0YXJ0T2ZEYXksIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnbXVsdGlyYW5nZXNsaWRlcic7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuY2xhc3MgRWxlc3NhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlcih7XG4gICAgICBtaW46IDcgKiA2MCxcbiAgICAgIG1heDogMjEgKiA2MCxcbiAgICAgIG1pbldpZHRoOiA2MCxcbiAgICAgIHN0ZXA6IDMwLFxuICAgICAgbGFiZWw6IHZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBhZGRNaW51dGVzKHN0YXJ0T2ZEYXkobmV3IERhdGUoKSksIHZhbHVlWzBdKTtcbiAgICAgICAgY29uc3QgZW5kID0gYWRkTWludXRlcyhzdGFydE9mRGF5KG5ldyBEYXRlKCkpLCB2YWx1ZVsxXSk7XG4gICAgICAgIHJldHVybiBgJHtmb3JtYXQoc3RhcnQsICdISDptbScpfS0ke2Zvcm1hdChlbmQsICdISDptbScpfWA7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuc2xpZGVyLm9uKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlci5lbCk7XG4gICAgdGhpcy5yZXNldFZhbHVlcygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIGlmICh0aGlzLmRvbnRDaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXNldFZhbHVlcyhuZXdQcm9wcyk7XG4gIH1cblxuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmICh0aGlzLmRvbnRDaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZS5kYXRhKTtcbiAgICBjb25zdCBhcnJheSA9IGtleXMubWFwKGtleSA9PiBbZS5kYXRhW2tleV0udmFsWzBdLCBlLmRhdGFba2V5XS52YWxbMV1dKTtcbiAgICBvbkNoYW5nZShhcnJheSk7XG4gIH07XG5cbiAgcmVzZXRWYWx1ZXMobmV3UHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgdGhpcy5kb250Q2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLnNsaWRlci5yZW1vdmVBbGwoKTtcbiAgICBsZXQgeyB2YWx1ZSB9ID0gbmV3UHJvcHM7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBbXTtcbiAgICB9XG4gICAgdmFsdWUuZmlsdGVyKGl0ZW0gPT4gQXJyYXkuaXNBcnJheShpdGVtKSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuc2xpZGVyLmFkZChpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLmRvbnRDaGFuZ2UgPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmVmPXt4ID0+ICh0aGlzLmRldiA9IHgpfSAvPjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gMzI7XG4gICAgcmV0dXJuIHtcbiAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXNsaWRlcic6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1hbGxvd0NoYW5nZUZhbHNlJzoge1xuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJhbmdlJzoge1xuICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1sZWZ0LWhhbmRsZXInOiB7XG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJpZ2h0LWhhbmRsZXInOiB7XG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1iYXInOiB7XG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDlkOWQ5JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmxpZ2h0LFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItZ2hvc3QnOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXByZXNzZWQnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5saWdodDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci16ZXJvLXdpZHRoLm11bHRpcmFuZ2VzbGlkZXItcHJlc3NlZC1yaWdodCc6IHtcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJpZ2h0LWhhbmRsZXInOiB7XG4gICAgICAgICAgICAgIGxlZnQ6IC04LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXplcm8td2lkdGgubXVsdGlyYW5nZXNsaWRlci1wcmVzc2VkLWxlZnQnOiB7XG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1sZWZ0LWhhbmRsZXInOiB7XG4gICAgICAgICAgICAgIGxlZnQ6IC04LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXplcm8td2lkdGgubXVsdGlyYW5nZXNsaWRlci1yZW1vdmUtcG9wdXAnOiB7XG4gICAgICAgICAgICBsZWZ0OiAtMTIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yYW5nZSc6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgICAgICAgICctd2Via2l0LXVzZXItZHJhZyc6ICdub25lJyxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG5cbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWxhYmVsJzoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItbGVmdC1oYW5kbGVyJzoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmxpZ2h0MixcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2V3LXJlc2l6ZScsXG4gICAgICAgICAgICAgICctd2Via2l0LXVzZXItZHJhZyc6ICdub25lJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yaWdodC1oYW5kbGVyJzoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmxpZ2h0MixcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2V3LXJlc2l6ZScsXG4gICAgICAgICAgICAgICctd2Via2l0LXVzZXItZHJhZyc6ICdub25lJyxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmVtb3ZlLXBvcHVwJzoge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnMC41cycsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6IC0zMCxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmVtb3ZlLWxhYmVsJzoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcixcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuNScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIHggPT4gPEVsZXNzYXIgey4uLnh9IC8+LFxuICB4ID0+IE9iamVjdC5rZXlzKHgpLFxuKTtcbiJdfQ==
