import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateReader } from 'olymp-slate';
import { withProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import renderHelmet from 'olymp-utils/helmet';

import { queryPage } from './gql/query';

var Page = function Page(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading,
      pathname = _ref.pathname,
      props = _objectWithoutProperties(_ref, ['children', 'isLoading', 'pathname']);

  return React.createElement(
    ContentLoader,
    { isLoading: isLoading },
    React.createElement(
      SlateReader,
      _extends({}, props, { key: props.id + (props.bindingId || '') }),
      renderHelmet(_extends({}, _get(props, 'binding.blocks', {}), _get(props, 'binding', {})), pathname),
      children
    )
  );
};

Page.propTypes = {
  item: object,
  onChange: func,
  readOnly: bool
};
Page.defaultProps = {
  item: {},
  readOnly: true
};
Page.WithData = queryPage(withProps(function (_ref2) {
  var item = _ref2.item,
      data = _ref2.data;
  return {
    value: item && item.blocks,
    binding: item,
    readOnly: true,
    isLoading: data.loading
  };
})(Page));
export default Page;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3JlYWRlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJvYmplY3QiLCJmdW5jIiwiYm9vbCIsIlNsYXRlUmVhZGVyIiwid2l0aFByb3BzIiwiQ29udGVudExvYWRlciIsInJlbmRlckhlbG1ldCIsInF1ZXJ5UGFnZSIsIlBhZ2UiLCJjaGlsZHJlbiIsImlzTG9hZGluZyIsInBhdGhuYW1lIiwicHJvcHMiLCJpZCIsImJpbmRpbmdJZCIsInByb3BUeXBlcyIsIml0ZW0iLCJvbkNoYW5nZSIsInJlYWRPbmx5IiwiZGVmYXVsdFByb3BzIiwiV2l0aERhdGEiLCJkYXRhIiwidmFsdWUiLCJibG9ja3MiLCJiaW5kaW5nIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLElBQWpCLEVBQXVCQyxJQUF2QixRQUFtQyxZQUFuQztBQUNBLFNBQVNDLFdBQVQsUUFBNEIsYUFBNUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFdBQTFCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixZQUE5QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsb0JBQXpCOztBQUVBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0FBRUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsU0FBYixRQUFhQSxTQUFiO0FBQUEsTUFBd0JDLFFBQXhCLFFBQXdCQSxRQUF4QjtBQUFBLE1BQXFDQyxLQUFyQzs7QUFBQSxTQUNYO0FBQUMsaUJBQUQ7QUFBQSxNQUFlLFdBQVdGLFNBQTFCO0FBQ0U7QUFBQyxpQkFBRDtBQUFBLG1CQUFpQkUsS0FBakIsSUFBd0IsS0FBS0EsTUFBTUMsRUFBTixJQUFZRCxNQUFNRSxTQUFOLElBQW1CLEVBQS9CLENBQTdCO0FBQ0dSLGdDQUNNLEtBQUlNLEtBQUosRUFBVyxnQkFBWCxFQUE2QixFQUE3QixDQUROLEVBQzJDLEtBQUlBLEtBQUosRUFBVyxTQUFYLEVBQXNCLEVBQXRCLENBRDNDLEdBRUNELFFBRkQsQ0FESDtBQUtHRjtBQUxIO0FBREYsR0FEVztBQUFBLENBQWI7O0FBWUFELEtBQUtPLFNBQUwsR0FBaUI7QUFDZkMsUUFBTWhCLE1BRFM7QUFFZmlCLFlBQVVoQixJQUZLO0FBR2ZpQixZQUFVaEI7QUFISyxDQUFqQjtBQUtBTSxLQUFLVyxZQUFMLEdBQW9CO0FBQ2xCSCxRQUFNLEVBRFk7QUFFbEJFLFlBQVU7QUFGUSxDQUFwQjtBQUlBVixLQUFLWSxRQUFMLEdBQWdCYixVQUNkSCxVQUFVO0FBQUEsTUFBR1ksSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0ssSUFBVCxTQUFTQSxJQUFUO0FBQUEsU0FBcUI7QUFDN0JDLFdBQU9OLFFBQVFBLEtBQUtPLE1BRFM7QUFFN0JDLGFBQVNSLElBRm9CO0FBRzdCRSxjQUFVLElBSG1CO0FBSTdCUixlQUFXVyxLQUFLSTtBQUphLEdBQXJCO0FBQUEsQ0FBVixFQUtJakIsSUFMSixDQURjLENBQWhCO0FBUUEsZUFBZUEsSUFBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9yZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JqZWN0LCBmdW5jLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTbGF0ZVJlYWRlciB9IGZyb20gJ29seW1wLXNsYXRlJztcbmltcG9ydCB7IHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgcmVuZGVySGVsbWV0IGZyb20gJ29seW1wLXV0aWxzL2hlbG1ldCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcXVlcnlQYWdlIH0gZnJvbSAnLi9ncWwvcXVlcnknO1xuXG5jb25zdCBQYWdlID0gKHsgY2hpbGRyZW4sIGlzTG9hZGluZywgcGF0aG5hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPENvbnRlbnRMb2FkZXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgIDxTbGF0ZVJlYWRlciB7Li4ucHJvcHN9IGtleT17cHJvcHMuaWQgKyAocHJvcHMuYmluZGluZ0lkIHx8ICcnKX0+XG4gICAgICB7cmVuZGVySGVsbWV0KFxuICAgICAgICB7IC4uLmdldChwcm9wcywgJ2JpbmRpbmcuYmxvY2tzJywge30pLCAuLi5nZXQocHJvcHMsICdiaW5kaW5nJywge30pIH0sXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NsYXRlUmVhZGVyPlxuICA8L0NvbnRlbnRMb2FkZXI+XG4pO1xuXG5QYWdlLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogb2JqZWN0LFxuICBvbkNoYW5nZTogZnVuYyxcbiAgcmVhZE9ubHk6IGJvb2wsXG59O1xuUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGl0ZW06IHt9LFxuICByZWFkT25seTogdHJ1ZSxcbn07XG5QYWdlLldpdGhEYXRhID0gcXVlcnlQYWdlKFxuICB3aXRoUHJvcHMoKHsgaXRlbSwgZGF0YSB9KSA9PiAoe1xuICAgIHZhbHVlOiBpdGVtICYmIGl0ZW0uYmxvY2tzLFxuICAgIGJpbmRpbmc6IGl0ZW0sXG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgaXNMb2FkaW5nOiBkYXRhLmxvYWRpbmcsXG4gIH0pKShQYWdlKSxcbik7XG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19
