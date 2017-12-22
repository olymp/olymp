var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContext } from 'recompose';
import PropTypes from 'prop-types';
import { createUpdateQuery } from 'olymp-router';
import { asyncComponent } from 'react-async-component';

var LightBox = asyncComponent({
  resolve: function resolve() {
    return new Promise(function (resolve) {
      return (
        // Webpack's code splitting API w/naming
        require.ensure([], function (require) {
          resolve(require('olymp-fela/lightbox'));
        }, 'lightbox')
      );
    });
  }
});

var Lightbox = (_dec = getContext({
  gallery: PropTypes.string
}), _dec2 = connect(function (_ref, _ref2) {
  var location = _ref.location,
      lightbox = _ref.lightbox;
  var gallery = _ref2.gallery;

  var images = (gallery ? lightbox[gallery] : lightbox.images) || [];
  var ref = location.query.lightbox;
  var index = images.findIndex(function (img) {
    return img.ref === ref;
  });
  var prev = index > 0 ? index - 1 : images.length - 1;
  var next = index < images.length - 1 ? index + 1 : 0;

  return {
    images: images,
    prev: prev,
    next: next,
    index: index,
    image: index >= 0 ? images[index] : null
  };
}, function (dispatch) {
  return {
    updateQuery: createUpdateQuery(dispatch)
  };
}), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox() {
    _classCallCheck(this, Lightbox);

    return _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).apply(this, arguments));
  }

  _createClass(Lightbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          updateQuery = _props.updateQuery,
          images = _props.images,
          index = _props.index,
          next = _props.next,
          prev = _props.prev,
          image = _props.image,
          rest = _objectWithoutProperties(_props, ['updateQuery', 'images', 'index', 'next', 'prev', 'image']);

      return React.createElement(LightBox, _extends({
        images: images,
        currentImage: index,
        isOpen: index >= 0,
        onClose: function onClose() {
          return updateQuery({ lightbox: undefined });
        },
        onClickPrev: function onClickPrev() {
          return updateQuery({ lightbox: images[prev].ref });
        },
        onClickNext: function onClickNext() {
          return updateQuery({ lightbox: images[next].ref });
        },
        onClickThumbnail: function onClickThumbnail(i) {
          return updateQuery({ lightbox: images[i].ref });
        },
        imageCountSeparator: ' von ',
        backdropClosesModal: true,
        showThumbnails: images.length !== 1
      }, rest));
    }
  }]);

  return Lightbox;
}(Component)) || _class) || _class);
export { Lightbox as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3guZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImdldENvbnRleHQiLCJQcm9wVHlwZXMiLCJjcmVhdGVVcGRhdGVRdWVyeSIsImFzeW5jQ29tcG9uZW50IiwiTGlnaHRCb3giLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlcXVpcmUiLCJlbnN1cmUiLCJMaWdodGJveCIsImdhbGxlcnkiLCJzdHJpbmciLCJsb2NhdGlvbiIsImxpZ2h0Ym94IiwiaW1hZ2VzIiwicmVmIiwicXVlcnkiLCJpbmRleCIsImZpbmRJbmRleCIsImltZyIsInByZXYiLCJsZW5ndGgiLCJuZXh0IiwiaW1hZ2UiLCJ1cGRhdGVRdWVyeSIsImRpc3BhdGNoIiwicHJvcHMiLCJyZXN0IiwidW5kZWZpbmVkIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLFdBQTNCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLGNBQWxDO0FBQ0EsU0FBU0MsY0FBVCxRQUErQix1QkFBL0I7O0FBRUEsSUFBTUMsV0FBV0QsZUFBZTtBQUM5QkUsV0FBUztBQUFBLFdBQ1AsSUFBSUMsT0FBSixDQUFZO0FBQUE7QUFDVjtBQUNBQyxnQkFBUUMsTUFBUixDQUNFLEVBREYsRUFFRSxtQkFBVztBQUNUSCxrQkFBUUUsUUFBUSxxQkFBUixDQUFSO0FBQ0QsU0FKSCxFQUtFLFVBTEY7QUFGVTtBQUFBLEtBQVosQ0FETztBQUFBO0FBRHFCLENBQWYsQ0FBakI7O0lBcUNxQkUsUSxXQXZCcEJULFdBQVc7QUFDVlUsV0FBU1QsVUFBVVU7QUFEVCxDQUFYLEMsVUFHQVosUUFDQyx1QkFBeUM7QUFBQSxNQUF0Q2EsUUFBc0MsUUFBdENBLFFBQXNDO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWRILE9BQWMsU0FBZEEsT0FBYzs7QUFDdkMsTUFBTUksU0FBUyxDQUFDSixVQUFVRyxTQUFTSCxPQUFULENBQVYsR0FBOEJHLFNBQVNDLE1BQXhDLEtBQW1ELEVBQWxFO0FBQ0EsTUFBTUMsTUFBTUgsU0FBU0ksS0FBVCxDQUFlSCxRQUEzQjtBQUNBLE1BQU1JLFFBQVFILE9BQU9JLFNBQVAsQ0FBaUI7QUFBQSxXQUFPQyxJQUFJSixHQUFKLEtBQVlBLEdBQW5CO0FBQUEsR0FBakIsQ0FBZDtBQUNBLE1BQU1LLE9BQU9ILFFBQVEsQ0FBUixHQUFZQSxRQUFRLENBQXBCLEdBQXdCSCxPQUFPTyxNQUFQLEdBQWdCLENBQXJEO0FBQ0EsTUFBTUMsT0FBT0wsUUFBUUgsT0FBT08sTUFBUCxHQUFnQixDQUF4QixHQUE0QkosUUFBUSxDQUFwQyxHQUF3QyxDQUFyRDs7QUFFQSxTQUFPO0FBQ0xILGtCQURLO0FBRUxNLGNBRks7QUFHTEUsY0FISztBQUlMTCxnQkFKSztBQUtMTSxXQUFPTixTQUFTLENBQVQsR0FBYUgsT0FBT0csS0FBUCxDQUFiLEdBQTZCO0FBTC9CLEdBQVA7QUFPRCxDQWZGLEVBZ0JDO0FBQUEsU0FBYTtBQUNYTyxpQkFBYXRCLGtCQUFrQnVCLFFBQWxCO0FBREYsR0FBYjtBQUFBLENBaEJELEM7Ozs7Ozs7Ozs7OzZCQXFCVTtBQUFBLG1CQVNILEtBQUtDLEtBVEY7QUFBQSxVQUVMRixXQUZLLFVBRUxBLFdBRks7QUFBQSxVQUdMVixNQUhLLFVBR0xBLE1BSEs7QUFBQSxVQUlMRyxLQUpLLFVBSUxBLEtBSks7QUFBQSxVQUtMSyxJQUxLLFVBS0xBLElBTEs7QUFBQSxVQU1MRixJQU5LLFVBTUxBLElBTks7QUFBQSxVQU9MRyxLQVBLLFVBT0xBLEtBUEs7QUFBQSxVQVFGSSxJQVJFOztBQVdQLGFBQ0Usb0JBQUMsUUFBRDtBQUNFLGdCQUFRYixNQURWO0FBRUUsc0JBQWNHLEtBRmhCO0FBR0UsZ0JBQVFBLFNBQVMsQ0FIbkI7QUFJRSxpQkFBUztBQUFBLGlCQUFNTyxZQUFZLEVBQUVYLFVBQVVlLFNBQVosRUFBWixDQUFOO0FBQUEsU0FKWDtBQUtFLHFCQUFhO0FBQUEsaUJBQU1KLFlBQVksRUFBRVgsVUFBVUMsT0FBT00sSUFBUCxFQUFhTCxHQUF6QixFQUFaLENBQU47QUFBQSxTQUxmO0FBTUUscUJBQWE7QUFBQSxpQkFBTVMsWUFBWSxFQUFFWCxVQUFVQyxPQUFPUSxJQUFQLEVBQWFQLEdBQXpCLEVBQVosQ0FBTjtBQUFBLFNBTmY7QUFPRSwwQkFBa0I7QUFBQSxpQkFBS1MsWUFBWSxFQUFFWCxVQUFVQyxPQUFPZSxDQUFQLEVBQVVkLEdBQXRCLEVBQVosQ0FBTDtBQUFBLFNBUHBCO0FBUUUsNkJBQW9CLE9BUnRCO0FBU0UsaUNBVEY7QUFVRSx3QkFBZ0JELE9BQU9PLE1BQVAsS0FBa0I7QUFWcEMsU0FXTU0sSUFYTixFQURGO0FBZUQ7Ozs7RUEzQm1DN0IsUztTQUFqQlcsUSIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVVcGRhdGVRdWVyeSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBhc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWFzeW5jLWNvbXBvbmVudCc7XG5cbmNvbnN0IExpZ2h0Qm94ID0gYXN5bmNDb21wb25lbnQoe1xuICByZXNvbHZlOiAoKSA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgIC8vIFdlYnBhY2sncyBjb2RlIHNwbGl0dGluZyBBUEkgdy9uYW1pbmdcbiAgICAgIHJlcXVpcmUuZW5zdXJlKFxuICAgICAgICBbXSxcbiAgICAgICAgcmVxdWlyZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXF1aXJlKCdvbHltcC1mZWxhL2xpZ2h0Ym94JykpO1xuICAgICAgICB9LFxuICAgICAgICAnbGlnaHRib3gnLFxuICAgICAgKSxcbiAgICApLFxufSk7XG5cbkBnZXRDb250ZXh0KHtcbiAgZ2FsbGVyeTogUHJvcFR5cGVzLnN0cmluZyxcbn0pXG5AY29ubmVjdChcbiAgKHsgbG9jYXRpb24sIGxpZ2h0Ym94IH0sIHsgZ2FsbGVyeSB9KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gKGdhbGxlcnkgPyBsaWdodGJveFtnYWxsZXJ5XSA6IGxpZ2h0Ym94LmltYWdlcykgfHwgW107XG4gICAgY29uc3QgcmVmID0gbG9jYXRpb24ucXVlcnkubGlnaHRib3g7XG4gICAgY29uc3QgaW5kZXggPSBpbWFnZXMuZmluZEluZGV4KGltZyA9PiBpbWcucmVmID09PSByZWYpO1xuICAgIGNvbnN0IHByZXYgPSBpbmRleCA+IDAgPyBpbmRleCAtIDEgOiBpbWFnZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gaW5kZXggPCBpbWFnZXMubGVuZ3RoIC0gMSA/IGluZGV4ICsgMSA6IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzLFxuICAgICAgcHJldixcbiAgICAgIG5leHQsXG4gICAgICBpbmRleCxcbiAgICAgIGltYWdlOiBpbmRleCA+PSAwID8gaW1hZ2VzW2luZGV4XSA6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICB1cGRhdGVRdWVyeTogY3JlYXRlVXBkYXRlUXVlcnkoZGlzcGF0Y2gpLFxuICB9KSxcbilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVwZGF0ZVF1ZXJ5LFxuICAgICAgaW1hZ2VzLFxuICAgICAgaW5kZXgsXG4gICAgICBuZXh0LFxuICAgICAgcHJldixcbiAgICAgIGltYWdlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaWdodEJveFxuICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgY3VycmVudEltYWdlPXtpbmRleH1cbiAgICAgICAgaXNPcGVuPXtpbmRleCA+PSAwfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB1cGRhdGVRdWVyeSh7IGxpZ2h0Ym94OiB1bmRlZmluZWQgfSl9XG4gICAgICAgIG9uQ2xpY2tQcmV2PXsoKSA9PiB1cGRhdGVRdWVyeSh7IGxpZ2h0Ym94OiBpbWFnZXNbcHJldl0ucmVmIH0pfVxuICAgICAgICBvbkNsaWNrTmV4dD17KCkgPT4gdXBkYXRlUXVlcnkoeyBsaWdodGJveDogaW1hZ2VzW25leHRdLnJlZiB9KX1cbiAgICAgICAgb25DbGlja1RodW1ibmFpbD17aSA9PiB1cGRhdGVRdWVyeSh7IGxpZ2h0Ym94OiBpbWFnZXNbaV0ucmVmIH0pfVxuICAgICAgICBpbWFnZUNvdW50U2VwYXJhdG9yPVwiIHZvbiBcIlxuICAgICAgICBiYWNrZHJvcENsb3Nlc01vZGFsXG4gICAgICAgIHNob3dUaHVtYm5haWxzPXtpbWFnZXMubGVuZ3RoICE9PSAxfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19
