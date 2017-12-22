var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { shallowEqual } from 'recompose';

var SlideIn = createComponent(function (_ref) {
  var isBack = _ref.isBack;
  return {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
    '> :nth-child(1)': {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0
    },
    '> :nth-child(2)': {
      position: 'absolute',
      zIndex: 1,
      animationDuration: '200ms',
      animationTimingFunction: 'ease-out',
      animationName: {
        '0%': {
          transform: isBack ? 'translateX(-100%)' : 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
      }
    }
  };
}, 'div', function (_ref2) {
  var isBack = _ref2.isBack,
      p = _objectWithoutProperties(_ref2, ['isBack']);

  return Object.keys(p);
});

var StackedMenu = function (_Component) {
  _inherits(StackedMenu, _Component);

  function StackedMenu() {
    _classCallCheck(this, StackedMenu);

    return _possibleConstructorReturn(this, (StackedMenu.__proto__ || Object.getPrototypeOf(StackedMenu)).apply(this, arguments));
  }

  _createClass(StackedMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!shallowEqual(newProps.keys, this.props.keys)) {
        this.isBack = newProps.keys.length < this.props.keys.length;
        this.oldKeys = this.props.keys;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          renderMenu = _props.renderMenu,
          keys = _props.keys,
          children = _props.children;

      if (!isLoading && renderMenu) {
        return React.createElement(
          SlideIn,
          { isBack: this.isBack },
          this.oldKeys && renderMenu(this.oldKeys),
          renderMenu(keys, this.oldKeys)
        );
      }
      return React.createElement(
        SlideIn,
        { isBack: this.isBack },
        children
      );
    }
  }]);

  return StackedMenu;
}(Component);

export { StackedMenu as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9zdGFja2VkL21lbnUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlQ29tcG9uZW50Iiwic2hhbGxvd0VxdWFsIiwiU2xpZGVJbiIsImlzQmFjayIsImhlaWdodCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJmbGV4R3JvdyIsInpJbmRleCIsInRvcCIsImxlZnQiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uTmFtZSIsInRyYW5zZm9ybSIsInAiLCJPYmplY3QiLCJrZXlzIiwiU3RhY2tlZE1lbnUiLCJuZXdQcm9wcyIsInByb3BzIiwibGVuZ3RoIiwib2xkS2V5cyIsImlzTG9hZGluZyIsInJlbmRlck1lbnUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLFlBQVQsUUFBNkIsV0FBN0I7O0FBRUEsSUFBTUMsVUFBVUYsZ0JBQ2Q7QUFBQSxNQUFHRyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUFpQjtBQUNmQyxZQUFRLE1BRE87QUFFZkMsY0FBVSxVQUZLO0FBR2ZDLGNBQVUsUUFISztBQUlmQyxjQUFVLENBSks7QUFLZix1QkFBbUI7QUFDakJDLGNBQVEsQ0FEUztBQUVqQkgsZ0JBQVUsVUFGTztBQUdqQkksV0FBSyxDQUhZO0FBSWpCQyxZQUFNO0FBSlcsS0FMSjtBQVdmLHVCQUFtQjtBQUNqQkwsZ0JBQVUsVUFETztBQUVqQkcsY0FBUSxDQUZTO0FBR2pCRyx5QkFBbUIsT0FIRjtBQUlqQkMsK0JBQXlCLFVBSlI7QUFLakJDLHFCQUFlO0FBQ2IsY0FBTTtBQUNKQyxxQkFBV1gsU0FBUyxtQkFBVCxHQUErQjtBQUR0QyxTQURPO0FBSWIsZ0JBQVE7QUFDTlcscUJBQVc7QUFETDtBQUpLO0FBTEU7QUFYSixHQUFqQjtBQUFBLENBRGMsRUEyQmQsS0EzQmMsRUE0QmQ7QUFBQSxNQUFHWCxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFjWSxDQUFkOztBQUFBLFNBQXNCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBdEI7QUFBQSxDQTVCYyxDQUFoQjs7SUErQnFCRyxXOzs7Ozs7Ozs7Ozs4Q0FDT0MsUSxFQUFVO0FBQ2xDLFVBQUksQ0FBQ2xCLGFBQWFrQixTQUFTRixJQUF0QixFQUE0QixLQUFLRyxLQUFMLENBQVdILElBQXZDLENBQUwsRUFBbUQ7QUFDakQsYUFBS2QsTUFBTCxHQUFjZ0IsU0FBU0YsSUFBVCxDQUFjSSxNQUFkLEdBQXVCLEtBQUtELEtBQUwsQ0FBV0gsSUFBWCxDQUFnQkksTUFBckQ7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBS0YsS0FBTCxDQUFXSCxJQUExQjtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUFBLG1CQUMyQyxLQUFLRyxLQURoRDtBQUFBLFVBQ0NHLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lDLFVBRFosVUFDWUEsVUFEWjtBQUFBLFVBQ3dCUCxJQUR4QixVQUN3QkEsSUFEeEI7QUFBQSxVQUM4QlEsUUFEOUIsVUFDOEJBLFFBRDlCOztBQUVQLFVBQUksQ0FBQ0YsU0FBRCxJQUFjQyxVQUFsQixFQUE4QjtBQUM1QixlQUNFO0FBQUMsaUJBQUQ7QUFBQSxZQUFTLFFBQVEsS0FBS3JCLE1BQXRCO0FBQ0csZUFBS21CLE9BQUwsSUFBZ0JFLFdBQVcsS0FBS0YsT0FBaEIsQ0FEbkI7QUFFR0UscUJBQVdQLElBQVgsRUFBaUIsS0FBS0ssT0FBdEI7QUFGSCxTQURGO0FBTUQ7QUFDRCxhQUFPO0FBQUMsZUFBRDtBQUFBLFVBQVMsUUFBUSxLQUFLbkIsTUFBdEI7QUFBK0JzQjtBQUEvQixPQUFQO0FBQ0Q7Ozs7RUFsQnNDMUIsUzs7U0FBcEJtQixXIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbWVudS9zdGFja2VkL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5jb25zdCBTbGlkZUluID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBpc0JhY2sgfSkgPT4gKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgJz4gOm50aC1jaGlsZCgxKSc6IHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICAgICc+IDpudGgtY2hpbGQoMiknOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMjAwbXMnLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlLW91dCcsXG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGlzQmFjayA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgIH0sXG4gICAgICAgICcxMDAlJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGlzQmFjaywgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrZWRNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIGlmICghc2hhbGxvd0VxdWFsKG5ld1Byb3BzLmtleXMsIHRoaXMucHJvcHMua2V5cykpIHtcbiAgICAgIHRoaXMuaXNCYWNrID0gbmV3UHJvcHMua2V5cy5sZW5ndGggPCB0aGlzLnByb3BzLmtleXMubGVuZ3RoO1xuICAgICAgdGhpcy5vbGRLZXlzID0gdGhpcy5wcm9wcy5rZXlzO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIHJlbmRlck1lbnUsIGtleXMsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghaXNMb2FkaW5nICYmIHJlbmRlck1lbnUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTbGlkZUluIGlzQmFjaz17dGhpcy5pc0JhY2t9PlxuICAgICAgICAgIHt0aGlzLm9sZEtleXMgJiYgcmVuZGVyTWVudSh0aGlzLm9sZEtleXMpfVxuICAgICAgICAgIHtyZW5kZXJNZW51KGtleXMsIHRoaXMub2xkS2V5cyl9XG4gICAgICAgIDwvU2xpZGVJbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8U2xpZGVJbiBpc0JhY2s9e3RoaXMuaXNCYWNrfT57Y2hpbGRyZW59PC9TbGlkZUluPjtcbiAgfVxufVxuIl19
