import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { metricsObj, dimensionsObj } from '../../definitions';

// Muss Klasse sein, sonst klappt der getFieldDecorator nicht!!!

var MetricSelet = function (_Component) {
  _inherits(MetricSelet, _Component);

  function MetricSelet() {
    _classCallCheck(this, MetricSelet);

    return _possibleConstructorReturn(this, (MetricSelet.__proto__ || Object.getPrototypeOf(MetricSelet)).apply(this, arguments));
  }

  _createClass(MetricSelet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDimension = _props.isDimension,
          rest = _objectWithoutProperties(_props, ['isDimension']);

      var obj = isDimension ? dimensionsObj : metricsObj;

      var categories = {};
      Object.keys(obj).forEach(function (key) {
        var category = obj[key].category;


        if (!categories[category]) {
          categories[category] = [];
        }

        categories[category].push(_extends({}, obj[key], {
          key: key
        }));
      });

      return React.createElement(
        _Select3,
        _extends({
          mode: 'multiple',
          placeholder: isDimension ? 'Dimensionen' : 'Messwerte',
          filterOption: function filterOption(val, _ref) {
            var props = _ref.props;
            return props.children.toLowerCase().includes(val.toLowerCase());
          },
          style: { width: '100%' }
        }, rest),
        Object.keys(categories).map(function (category) {
          return React.createElement(
            _Select2.OptGroup,
            { label: category, key: category },
            categories[category].map(function (x) {
              return React.createElement(
                _Select.Option,
                { value: x.key, key: x.key },
                x.label
              );
            })
          );
        })
      );
    }
  }]);

  return MetricSelet;
}(Component);

export { MetricSelet as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9zZWxlY3QuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwibWV0cmljc09iaiIsImRpbWVuc2lvbnNPYmoiLCJNZXRyaWNTZWxldCIsInByb3BzIiwiaXNEaW1lbnNpb24iLCJyZXN0Iiwib2JqIiwiY2F0ZWdvcmllcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJrZXkiLCJwdXNoIiwidmFsIiwiY2hpbGRyZW4iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwid2lkdGgiLCJtYXAiLCJ4IiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQzs7QUFFQSxTQUFTQyxVQUFULEVBQXFCQyxhQUFyQixRQUEwQyxtQkFBMUM7O0FBRUE7O0lBQ3FCQyxXOzs7Ozs7Ozs7Ozs2QkFDVjtBQUFBLG1CQUMwQixLQUFLQyxLQUQvQjtBQUFBLFVBQ0NDLFdBREQsVUFDQ0EsV0FERDtBQUFBLFVBQ2lCQyxJQURqQjs7QUFFUCxVQUFNQyxNQUFNRixjQUFjSCxhQUFkLEdBQThCRCxVQUExQzs7QUFFQSxVQUFNTyxhQUFhLEVBQW5CO0FBQ0FDLGFBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsZUFBTztBQUFBLFlBQ3RCQyxRQURzQixHQUNUTCxJQUFJTSxHQUFKLENBRFMsQ0FDdEJELFFBRHNCOzs7QUFHOUIsWUFBSSxDQUFDSixXQUFXSSxRQUFYLENBQUwsRUFBMkI7QUFDekJKLHFCQUFXSSxRQUFYLElBQXVCLEVBQXZCO0FBQ0Q7O0FBRURKLG1CQUFXSSxRQUFYLEVBQXFCRSxJQUFyQixjQUNLUCxJQUFJTSxHQUFKLENBREw7QUFFRUE7QUFGRjtBQUlELE9BWEQ7O0FBYUEsYUFDRTtBQUFBO0FBQUE7QUFDRSxnQkFBSyxVQURQO0FBRUUsdUJBQWFSLGNBQWMsYUFBZCxHQUE4QixXQUY3QztBQUdFLHdCQUFjLHNCQUFDVSxHQUFEO0FBQUEsZ0JBQVFYLEtBQVIsUUFBUUEsS0FBUjtBQUFBLG1CQUNaQSxNQUFNWSxRQUFOLENBQWVDLFdBQWYsR0FBNkJDLFFBQTdCLENBQXNDSCxJQUFJRSxXQUFKLEVBQXRDLENBRFk7QUFBQSxXQUhoQjtBQUtFLGlCQUFPLEVBQUVFLE9BQU8sTUFBVDtBQUxULFdBTU1iLElBTk47QUFRR0csZUFBT0MsSUFBUCxDQUFZRixVQUFaLEVBQXdCWSxHQUF4QixDQUE0QjtBQUFBLGlCQUMzQjtBQUFBLHFCQUFRLFFBQVI7QUFBQSxjQUFpQixPQUFPUixRQUF4QixFQUFrQyxLQUFLQSxRQUF2QztBQUNHSix1QkFBV0ksUUFBWCxFQUFxQlEsR0FBckIsQ0FBeUI7QUFBQSxxQkFDeEI7QUFBQSx3QkFBUSxNQUFSO0FBQUEsa0JBQWUsT0FBT0MsRUFBRVIsR0FBeEIsRUFBNkIsS0FBS1EsRUFBRVIsR0FBcEM7QUFDR1Esa0JBQUVDO0FBREwsZUFEd0I7QUFBQSxhQUF6QjtBQURILFdBRDJCO0FBQUEsU0FBNUI7QUFSSCxPQURGO0FBb0JEOzs7O0VBdkNzQ3RCLFM7O1NBQXBCRyxXIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9zZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBtZXRyaWNzT2JqLCBkaW1lbnNpb25zT2JqIH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMnO1xuXG4vLyBNdXNzIEtsYXNzZSBzZWluLCBzb25zdCBrbGFwcHQgZGVyIGdldEZpZWxkRGVjb3JhdG9yIG5pY2h0ISEhXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNTZWxldCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzRGltZW5zaW9uLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9iaiA9IGlzRGltZW5zaW9uID8gZGltZW5zaW9uc09iaiA6IG1ldHJpY3NPYmo7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0ge307XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCFjYXRlZ29yaWVzW2NhdGVnb3J5XSkge1xuICAgICAgICBjYXRlZ29yaWVzW2NhdGVnb3J5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjYXRlZ29yaWVzW2NhdGVnb3J5XS5wdXNoKHtcbiAgICAgICAgLi4ub2JqW2tleV0sXG4gICAgICAgIGtleSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2lzRGltZW5zaW9uID8gJ0RpbWVuc2lvbmVuJyA6ICdNZXNzd2VydGUnfVxuICAgICAgICBmaWx0ZXJPcHRpb249eyh2YWwsIHsgcHJvcHMgfSkgPT5cbiAgICAgICAgICBwcm9wcy5jaGlsZHJlbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbC50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge09iamVjdC5rZXlzKGNhdGVnb3JpZXMpLm1hcChjYXRlZ29yeSA9PlxuICAgICAgICAgIDxTZWxlY3QuT3B0R3JvdXAgbGFiZWw9e2NhdGVnb3J5fSBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzW2NhdGVnb3J5XS5tYXAoeCA9PlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17eC5rZXl9IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgIHt4LmxhYmVsfVxuICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU2VsZWN0Lk9wdEdyb3VwPlxuICAgICAgICApfVxuICAgICAgPC9TZWxlY3Q+XG4gICAgKTtcbiAgfVxufVxuIl19
