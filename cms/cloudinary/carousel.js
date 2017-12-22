var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Image from './image';
// import 'rc-banner-anim/assets/index.css';

var InnerComponent = void 0;
/* if (process.env.IS_WEB) {
  const BannerAnim = require('rc-banner-anim');
  const Element = require('rc-banner-anim').Element;

  InnerComponent = ({ value }) => (
    <BannerAnim
      prefixCls="custom-arrow-thumb"
      autoPlay
      type={['grid', 'gridBar']}
      key={1}
      duration={800}
    >
      {value.map((image, index) => (
        <Element prefixCls="banner-user-elem" key={image.id || image.url || index}>
          <Element.BgElement
            key="bg"
            className="bg"
            style={{
              backgroundColor: 'gray',
              backgroundImage: `url(${cloudinaryUrl(image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
      ))}
    </BannerAnim>
  );
} */

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.state = { mounted: false };
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.setState({ mounted: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          height = _props.height,
          attributes = _props.attributes,
          children = _props.children,
          style = _props.style,
          className = _props.className;

      return value.length > 0 ? React.createElement(
        Image,
        {
          width: '100%',
          value: value[0],
          maxHeight: height || 220,
          className: className,
          attributes: attributes,
          style: style
        },
        children
      ) : null;
      /* let inner = null;
      if (this.state.mounted) {
        inner = <InnerComponent key={2} {...this.props} />;
      } else {
      }
      return <div {...attributes}>{inner}</div>; */
    }
  }]);

  return Carousel;
}(Component);

var styles = function styles(_ref) {
  var height = _ref.height;
  return {
    height: height || 220,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    '& .custom-arrow-thumb': {
      height: height || 220
    },
    '& .banner-user-elem': {
      height: height || 220,
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    },
    '& .banner-user-title': {
      fontSize: 32,
      top: '40%'
    },
    '& .banner-user-text': {
      top: '40%'
    },
    '& .bg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden'
    },
    ifMini: {
      height: 180,
      '& .custom-arrow-thumb': {
        height: 180
      },
      '& .banner-user-elem': {
        height: 180
      }
    }
  };
};

// export default createComponent(styles, Carousel, p => Object.keys(p));
export default Carousel;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY2Fyb3VzZWwuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJJbm5lckNvbXBvbmVudCIsIkNhcm91c2VsIiwicHJvcHMiLCJzdGF0ZSIsIm1vdW50ZWQiLCJ2YWx1ZSIsImhlaWdodCIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsInN0eWxlIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwic3R5bGVzIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsIndpZHRoIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsInRvcCIsImxlZnQiLCJpZk1pbmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBQ0E7O0FBRUEsSUFBSUMsdUJBQUo7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBOEJNQyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBRUMsU0FBUyxLQUFYLEVBQWI7QUFGaUI7QUFHbEI7Ozs7d0NBQ21CO0FBQ2xCO0FBQ0Q7Ozs2QkFDUTtBQUFBLG1CQVFILEtBQUtGLEtBUkY7QUFBQSxVQUVMRyxLQUZLLFVBRUxBLEtBRks7QUFBQSxVQUdMQyxNQUhLLFVBR0xBLE1BSEs7QUFBQSxVQUlMQyxVQUpLLFVBSUxBLFVBSks7QUFBQSxVQUtMQyxRQUxLLFVBS0xBLFFBTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxTQVBLLFVBT0xBLFNBUEs7O0FBU1AsYUFBT0wsTUFBTU0sTUFBTixHQUFlLENBQWYsR0FDTDtBQUFDLGFBQUQ7QUFBQTtBQUNFLGlCQUFNLE1BRFI7QUFFRSxpQkFBT04sTUFBTSxDQUFOLENBRlQ7QUFHRSxxQkFBV0MsVUFBVSxHQUh2QjtBQUlFLHFCQUFXSSxTQUpiO0FBS0Usc0JBQVlILFVBTGQ7QUFNRSxpQkFBT0U7QUFOVDtBQVFHRDtBQVJILE9BREssR0FXSCxJQVhKO0FBWUE7Ozs7OztBQU1EOzs7O0VBbkNvQlYsUzs7QUFxQ3ZCLElBQU1jLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUdOLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCO0FBQzlCQSxZQUFRQSxVQUFVLEdBRFk7QUFFOUJPLGNBQVUsUUFGb0I7QUFHOUJDLGNBQVUsVUFIb0I7QUFJOUJDLFdBQU8sTUFKdUI7QUFLOUIsNkJBQXlCO0FBQ3ZCVCxjQUFRQSxVQUFVO0FBREssS0FMSztBQVE5QiwyQkFBdUI7QUFDckJBLGNBQVFBLFVBQVUsR0FERztBQUVyQlUsaUJBQVcsUUFGVTtBQUdyQkMsYUFBTyxNQUhjO0FBSXJCSCxnQkFBVSxVQUpXO0FBS3JCRCxnQkFBVTtBQUxXLEtBUk87QUFlOUIsNEJBQXdCO0FBQ3RCSyxnQkFBVSxFQURZO0FBRXRCQyxXQUFLO0FBRmlCLEtBZk07QUFtQjlCLDJCQUF1QjtBQUNyQkEsV0FBSztBQURnQixLQW5CTztBQXNCOUIsYUFBUztBQUNQSixhQUFPLE1BREE7QUFFUFQsY0FBUSxNQUZEO0FBR1BRLGdCQUFVLFVBSEg7QUFJUEssV0FBSyxDQUpFO0FBS1BDLFlBQU0sQ0FMQztBQU1QUCxnQkFBVTtBQU5ILEtBdEJxQjtBQThCOUJRLFlBQVE7QUFDTmYsY0FBUSxHQURGO0FBRU4sK0JBQXlCO0FBQ3ZCQSxnQkFBUTtBQURlLE9BRm5CO0FBS04sNkJBQXVCO0FBQ3JCQSxnQkFBUTtBQURhO0FBTGpCO0FBOUJzQixHQUFqQjtBQUFBLENBQWY7O0FBeUNBO0FBQ0EsZUFBZUwsUUFBZiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcbi8vIGltcG9ydCAncmMtYmFubmVyLWFuaW0vYXNzZXRzL2luZGV4LmNzcyc7XG5cbmxldCBJbm5lckNvbXBvbmVudDtcbi8qIGlmIChwcm9jZXNzLmVudi5JU19XRUIpIHtcbiAgY29uc3QgQmFubmVyQW5pbSA9IHJlcXVpcmUoJ3JjLWJhbm5lci1hbmltJyk7XG4gIGNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCdyYy1iYW5uZXItYW5pbScpLkVsZW1lbnQ7XG5cbiAgSW5uZXJDb21wb25lbnQgPSAoeyB2YWx1ZSB9KSA9PiAoXG4gICAgPEJhbm5lckFuaW1cbiAgICAgIHByZWZpeENscz1cImN1c3RvbS1hcnJvdy10aHVtYlwiXG4gICAgICBhdXRvUGxheVxuICAgICAgdHlwZT17WydncmlkJywgJ2dyaWRCYXInXX1cbiAgICAgIGtleT17MX1cbiAgICAgIGR1cmF0aW9uPXs4MDB9XG4gICAgPlxuICAgICAge3ZhbHVlLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxFbGVtZW50IHByZWZpeENscz1cImJhbm5lci11c2VyLWVsZW1cIiBrZXk9e2ltYWdlLmlkIHx8IGltYWdlLnVybCB8fCBpbmRleH0+XG4gICAgICAgICAgPEVsZW1lbnQuQmdFbGVtZW50XG4gICAgICAgICAgICBrZXk9XCJiZ1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZ1wiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2xvdWRpbmFyeVVybChpbWFnZSl9KWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0VsZW1lbnQ+XG4gICAgICApKX1cbiAgICA8L0Jhbm5lckFuaW0+XG4gICk7XG59ICovXG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbW91bnRlZDogZmFsc2UgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgbW91bnRlZDogdHJ1ZSB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCA/IChcbiAgICAgIDxJbWFnZVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICB2YWx1ZT17dmFsdWVbMF19XG4gICAgICAgIG1heEhlaWdodD17aGVpZ2h0IHx8IDIyMH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9JbWFnZT5cbiAgICApIDogbnVsbDtcbiAgICAvKiBsZXQgaW5uZXIgPSBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLm1vdW50ZWQpIHtcbiAgICAgIGlubmVyID0gPElubmVyQ29tcG9uZW50IGtleT17Mn0gey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IHsuLi5hdHRyaWJ1dGVzfT57aW5uZXJ9PC9kaXY+OyAqL1xuICB9XG59XG5jb25zdCBzdHlsZXMgPSAoeyBoZWlnaHQgfSkgPT4gKHtcbiAgaGVpZ2h0OiBoZWlnaHQgfHwgMjIwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnJiAuY3VzdG9tLWFycm93LXRodW1iJzoge1xuICAgIGhlaWdodDogaGVpZ2h0IHx8IDIyMCxcbiAgfSxcbiAgJyYgLmJhbm5lci11c2VyLWVsZW0nOiB7XG4gICAgaGVpZ2h0OiBoZWlnaHQgfHwgMjIwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gICcmIC5iYW5uZXItdXNlci10aXRsZSc6IHtcbiAgICBmb250U2l6ZTogMzIsXG4gICAgdG9wOiAnNDAlJyxcbiAgfSxcbiAgJyYgLmJhbm5lci11c2VyLXRleHQnOiB7XG4gICAgdG9wOiAnNDAlJyxcbiAgfSxcbiAgJyYgLmJnJzoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBpZk1pbmk6IHtcbiAgICBoZWlnaHQ6IDE4MCxcbiAgICAnJiAuY3VzdG9tLWFycm93LXRodW1iJzoge1xuICAgICAgaGVpZ2h0OiAxODAsXG4gICAgfSxcbiAgICAnJiAuYmFubmVyLXVzZXItZWxlbSc6IHtcbiAgICAgIGhlaWdodDogMTgwLFxuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHN0eWxlcywgQ2Fyb3VzZWwsIHAgPT4gT2JqZWN0LmtleXMocCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0=
