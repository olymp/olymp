'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _olympScrape = require('olymp-scrape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardContainer = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '100%',
    position: 'relative',
    display: 'block'
  };
}, function (_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      node = _ref2.node,
      children = _ref2.children;
  return _react2.default.createElement(
    _olympScrape.Card,
    _extends({}, attributes, {
      className: className,
      xy: console.log(node.data.get('value')),
      value: node.data.get('value')
    }),
    children
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = {
  type: 'cardLink',
  isVoid: true,
  kind: 'block',
  label: 'Meta-Link',
  category: 'Sonstiges',
  component: CardContainer,
  actions: [{
    type: 'small',
    icon: 'chain',
    label: 'Link',
    toggle: function toggle(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value,
          node = _ref3.node;

      var href = window.prompt('Link');
      if (href) {
        onChange(value.change().setNodeByKey(node.key, {
          data: node.data.set('value', href)
        }));
      } else {
        onChange(value.change().setNodeByKey(node.key, {
          data: node.data.set('value', null)
        }));
      }
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY2FyZC1saW5rLmVzNiJdLCJuYW1lcyI6WyJDYXJkQ29udGFpbmVyIiwidGhlbWUiLCJ3aWR0aCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJub2RlIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImdldCIsIk9iamVjdCIsImtleXMiLCJwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50IiwiYWN0aW9ucyIsImljb24iLCJ0b2dnbGUiLCJvbkNoYW5nZSIsInZhbHVlIiwiaHJlZiIsIndpbmRvdyIsInByb21wdCIsImNoYW5nZSIsInNldE5vZGVCeUtleSIsImtleSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLGdDQUNwQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFdBQU8sTUFETztBQUVkQyxjQUFVLFVBRkk7QUFHZEMsYUFBUztBQUhLLEdBQWhCO0FBQUEsQ0FEb0IsRUFNcEI7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlQyxTQUFmLFNBQWVBLFNBQWY7QUFBQSxNQUEwQkMsSUFBMUIsU0FBMEJBLElBQTFCO0FBQUEsTUFBZ0NDLFFBQWhDLFNBQWdDQSxRQUFoQztBQUFBLFNBQ0U7QUFBQTtBQUFBLGlCQUNNSCxVQUROO0FBRUUsaUJBQVdDLFNBRmI7QUFHRSxVQUFJRyxRQUFRQyxHQUFSLENBQVlILEtBQUtJLElBQUwsQ0FBVUMsR0FBVixDQUFjLE9BQWQsQ0FBWixDQUhOO0FBSUUsYUFBT0wsS0FBS0ksSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZDtBQUpUO0FBTUdKO0FBTkgsR0FERjtBQUFBLENBTm9CLEVBZ0JwQjtBQUFBLFNBQUtLLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FoQm9CLENBQXRCOztrQkFtQmU7QUFDYkMsUUFBTSxVQURPO0FBRWJDLFVBQVEsSUFGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxXQUpNO0FBS2JDLFlBQVUsV0FMRztBQU1iQyxhQUFXckIsYUFORTtBQU9ic0IsV0FBUyxDQUNQO0FBQ0VOLFVBQU0sT0FEUjtBQUVFTyxVQUFNLE9BRlI7QUFHRUosV0FBTyxNQUhUO0FBSUVLLFlBQVEsdUJBQStCO0FBQUEsVUFBNUJDLFFBQTRCLFNBQTVCQSxRQUE0QjtBQUFBLFVBQWxCQyxLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxVQUFYbkIsSUFBVyxTQUFYQSxJQUFXOztBQUNyQyxVQUFNb0IsT0FBT0MsT0FBT0MsTUFBUCxDQUFjLE1BQWQsQ0FBYjtBQUNBLFVBQUlGLElBQUosRUFBVTtBQUNSRixpQkFDRUMsTUFBTUksTUFBTixHQUFlQyxZQUFmLENBQTRCeEIsS0FBS3lCLEdBQWpDLEVBQXNDO0FBQ3BDckIsZ0JBQU1KLEtBQUtJLElBQUwsQ0FBVXNCLEdBQVYsQ0FBYyxPQUFkLEVBQXVCTixJQUF2QjtBQUQ4QixTQUF0QyxDQURGO0FBS0QsT0FORCxNQU1PO0FBQ0xGLGlCQUNFQyxNQUFNSSxNQUFOLEdBQWVDLFlBQWYsQ0FBNEJ4QixLQUFLeUIsR0FBakMsRUFBc0M7QUFDcENyQixnQkFBTUosS0FBS0ksSUFBTCxDQUFVc0IsR0FBVixDQUFjLE9BQWQsRUFBdUIsSUFBdkI7QUFEOEIsU0FBdEMsQ0FERjtBQUtEO0FBQ0Y7QUFuQkgsR0FETztBQVBJLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9jYXJkLWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnb2x5bXAtc2NyYXBlJztcblxuY29uc3QgQ2FyZENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0pLFxuICAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUsIGNoaWxkcmVuIH0pID0+IChcbiAgICA8Q2FyZFxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHh5PXtjb25zb2xlLmxvZyhub2RlLmRhdGEuZ2V0KCd2YWx1ZScpKX1cbiAgICAgIHZhbHVlPXtub2RlLmRhdGEuZ2V0KCd2YWx1ZScpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcmQ+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdjYXJkTGluaycsXG4gIGlzVm9pZDogdHJ1ZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdNZXRhLUxpbmsnLFxuICBjYXRlZ29yeTogJ1NvbnN0aWdlcycsXG4gIGNvbXBvbmVudDogQ2FyZENvbnRhaW5lcixcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdzbWFsbCcsXG4gICAgICBpY29uOiAnY2hhaW4nLFxuICAgICAgbGFiZWw6ICdMaW5rJyxcbiAgICAgIHRvZ2dsZTogKHsgb25DaGFuZ2UsIHZhbHVlLCBub2RlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IHdpbmRvdy5wcm9tcHQoJ0xpbmsnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwge1xuICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCd2YWx1ZScsIGhyZWYpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwge1xuICAgICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCd2YWx1ZScsIG51bGwpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==
