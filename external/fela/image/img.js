var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

var ImageImg = createComponent(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      circle = _ref.circle;
  return {
    width: width,
    height: height,
    borderRadius: circle ? '50%' : 0
  };
}, function (_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      src = _ref2.src,
      srcSet = _ref2.srcSet,
      alt = _ref2.alt,
      className = _ref2.className,
      attributes = _ref2.attributes,
      onLoad = _ref2.onLoad;
  return React.createElement('img', _extends({}, attributes, {
    src: src,
    srcSet: srcSet,
    alt: alt,
    className: className,
    width: width,
    height: height,
    onLoad: onLoad
  }));
}, function (p) {
  return Object.keys(p);
});

ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  circle: PropTypes.bool
};
ImageImg.defaultProps = {
  alt: '',
  onClick: function onClick() {},
  circle: false,
  attributes: {}
};
export default ImageImg;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvaW1hZ2UvaW1nLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIkltYWdlSW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjaXJjbGUiLCJib3JkZXJSYWRpdXMiLCJzcmMiLCJzcmNTZXQiLCJhbHQiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwib25Mb2FkIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvbkNsaWNrIiwiZnVuYyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVBLElBQU1DLFdBQVdELGdCQUNmO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsTUFBa0JDLE1BQWxCLFFBQWtCQSxNQUFsQjtBQUFBLFNBQWdDO0FBQzlCRixnQkFEOEI7QUFFOUJDLGtCQUY4QjtBQUc5QkUsa0JBQWNELFNBQVMsS0FBVCxHQUFpQjtBQUhELEdBQWhDO0FBQUEsQ0FEZSxFQU1mO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixTQUFVQSxNQUFWO0FBQUEsTUFBa0JHLEdBQWxCLFNBQWtCQSxHQUFsQjtBQUFBLE1BQXVCQyxNQUF2QixTQUF1QkEsTUFBdkI7QUFBQSxNQUErQkMsR0FBL0IsU0FBK0JBLEdBQS9CO0FBQUEsTUFBb0NDLFNBQXBDLFNBQW9DQSxTQUFwQztBQUFBLE1BQStDQyxVQUEvQyxTQUErQ0EsVUFBL0M7QUFBQSxNQUEyREMsTUFBM0QsU0FBMkRBLE1BQTNEO0FBQUEsU0FDRSx3Q0FDTUQsVUFETjtBQUVFLFNBQUtKLEdBRlA7QUFHRSxZQUFRQyxNQUhWO0FBSUUsU0FBS0MsR0FKUDtBQUtFLGVBQVdDLFNBTGI7QUFNRSxXQUFPUCxLQU5UO0FBT0UsWUFBUUMsTUFQVjtBQVFFLFlBQVFRO0FBUlYsS0FERjtBQUFBLENBTmUsRUFrQmY7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBbEJlLENBQWpCOztBQXFCQWIsU0FBU2MsV0FBVCxHQUF1QixXQUF2QjtBQUNBZCxTQUFTZSxTQUFULEdBQXFCO0FBQ25CZCxTQUFPSCxVQUFVa0IsU0FBVixDQUFvQixDQUFDbEIsVUFBVW1CLE1BQVgsRUFBbUJuQixVQUFVb0IsTUFBN0IsQ0FBcEIsRUFBMERDLFVBRDlDO0FBRW5CakIsVUFBUUosVUFBVWtCLFNBQVYsQ0FBb0IsQ0FBQ2xCLFVBQVVtQixNQUFYLEVBQW1CbkIsVUFBVW9CLE1BQTdCLENBQXBCLEVBQTBEQyxVQUYvQztBQUduQmQsT0FBS1AsVUFBVW1CLE1BQVYsQ0FBaUJFLFVBSEg7QUFJbkJiLFVBQVFSLFVBQVVtQixNQUpDO0FBS25CVixPQUFLVCxVQUFVbUIsTUFMSTtBQU1uQkcsV0FBU3RCLFVBQVV1QixJQU5BO0FBT25CbEIsVUFBUUwsVUFBVXdCO0FBUEMsQ0FBckI7QUFTQXRCLFNBQVN1QixZQUFULEdBQXdCO0FBQ3RCaEIsT0FBSyxFQURpQjtBQUV0QmEsV0FBUyxtQkFBTSxDQUFFLENBRks7QUFHdEJqQixVQUFRLEtBSGM7QUFJdEJNLGNBQVk7QUFKVSxDQUF4QjtBQU1BLGVBQWVULFFBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9pbWFnZS9pbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBJbWFnZUltZyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgd2lkdGgsIGhlaWdodCwgY2lyY2xlIH0pID0+ICh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGJvcmRlclJhZGl1czogY2lyY2xlID8gJzUwJScgOiAwLFxuICB9KSxcbiAgKHsgd2lkdGgsIGhlaWdodCwgc3JjLCBzcmNTZXQsIGFsdCwgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBvbkxvYWQgfSkgPT4gKFxuICAgIDxpbWdcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgc3JjPXtzcmN9XG4gICAgICBzcmNTZXQ9e3NyY1NldH1cbiAgICAgIGFsdD17YWx0fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgIC8+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5JbWFnZUltZy5kaXNwbGF5TmFtZSA9ICdJbWFnZS5JbWcnO1xuSW1hZ2VJbWcucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNpcmNsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuSW1hZ2VJbWcuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgY2lyY2xlOiBmYWxzZSxcbiAgYXR0cmlidXRlczoge30sXG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VJbWc7XG4iXX0=
