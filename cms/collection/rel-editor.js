import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import withItems from './with-items';
import withCollection from './with-collection';

var DetailEditor = withCollection(_class = withItems(_class = function (_Component) {
  _inherits(DetailEditor, _Component);

  function DetailEditor() {
    _classCallCheck(this, DetailEditor);

    return _possibleConstructorReturn(this, (DetailEditor.__proto__ || Object.getPrototypeOf(DetailEditor)).apply(this, arguments));
  }

  _createClass(DetailEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          collection = _props.collection,
          items = _props.items,
          children = _props.children,
          value = _props.value,
          _onChange = _props.onChange,
          mode = _props.mode,
          rest = _objectWithoutProperties(_props, ['data', 'collection', 'items', 'children', 'value', 'onChange', 'mode']);

      return items && items.length ? React.createElement(
        _Select2,
        _extends({
          value: value,
          onChange: function onChange(val) {
            return mode === 'tags' && Array.isArray(val) ? _onChange(val.map(function (id) {
              return items.find(function (i) {
                return i.id === id;
              });
            })) : _onChange(val);
          },
          mode: mode
        }, rest, {
          style: { width: '100%' }
        }),
        items.map(function (item) {
          return React.createElement(
            _Select.Option,
            { key: item.id, value: item.id },
            item.name
          );
        })
      ) : React.createElement(_Select3, _extends({}, rest, { disabled: true }));
    }
  }]);

  return DetailEditor;
}(Component)) || _class) || _class;

export { DetailEditor as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vcmVsLWVkaXRvci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoSXRlbXMiLCJ3aXRoQ29sbGVjdGlvbiIsIkRldGFpbEVkaXRvciIsInByb3BzIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImNoaWxkcmVuIiwidmFsdWUiLCJvbkNoYW5nZSIsIm1vZGUiLCJyZXN0IiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsIiwibWFwIiwiZmluZCIsImkiLCJpZCIsIndpZHRoIiwiaXRlbSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLG1CQUEzQjs7SUFJcUJDLFksR0FGcEJELGMsVUFDQUQsUzs7Ozs7Ozs7Ozs7NkJBRVU7QUFBQSxtQkFVSCxLQUFLRyxLQVZGO0FBQUEsVUFFTEMsSUFGSyxVQUVMQSxJQUZLO0FBQUEsVUFHTEMsVUFISyxVQUdMQSxVQUhLO0FBQUEsVUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsVUFLTEMsUUFMSyxVQUtMQSxRQUxLO0FBQUEsVUFNTEMsS0FOSyxVQU1MQSxLQU5LO0FBQUEsVUFPTEMsU0FQSyxVQU9MQSxRQVBLO0FBQUEsVUFRTEMsSUFSSyxVQVFMQSxJQVJLO0FBQUEsVUFTRkMsSUFURTs7QUFZUCxhQUFPTCxTQUFTQSxNQUFNTSxNQUFmLEdBQ0w7QUFBQTtBQUFBO0FBQ0UsaUJBQU9KLEtBRFQ7QUFFRSxvQkFBVTtBQUFBLG1CQUNSRSxTQUFTLE1BQVQsSUFBbUJHLE1BQU1DLE9BQU4sQ0FBY0MsR0FBZCxDQUFuQixHQUNJTixVQUFTTSxJQUFJQyxHQUFKLENBQVE7QUFBQSxxQkFBTVYsTUFBTVcsSUFBTixDQUFXO0FBQUEsdUJBQUtDLEVBQUVDLEVBQUYsS0FBU0EsRUFBZDtBQUFBLGVBQVgsQ0FBTjtBQUFBLGFBQVIsQ0FBVCxDQURKLEdBRUlWLFVBQVNNLEdBQVQsQ0FISTtBQUFBLFdBRlo7QUFNRSxnQkFBTUw7QUFOUixXQU9NQyxJQVBOO0FBUUUsaUJBQU8sRUFBRVMsT0FBTyxNQUFUO0FBUlQ7QUFVR2QsY0FBTVUsR0FBTixDQUFVO0FBQUEsaUJBQ1Q7QUFBQSxvQkFBUSxNQUFSO0FBQUEsY0FBZSxLQUFLSyxLQUFLRixFQUF6QixFQUE2QixPQUFPRSxLQUFLRixFQUF6QztBQUNHRSxpQkFBS0M7QUFEUixXQURTO0FBQUEsU0FBVjtBQVZILE9BREssR0FrQkwsMkNBQVlYLElBQVosSUFBa0IsY0FBbEIsSUFsQkY7QUFvQkQ7Ozs7RUFqQ3VDWixTOztTQUFyQkcsWSIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3JlbC1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgd2l0aEl0ZW1zIGZyb20gJy4vd2l0aC1pdGVtcyc7XG5pbXBvcnQgd2l0aENvbGxlY3Rpb24gZnJvbSAnLi93aXRoLWNvbGxlY3Rpb24nO1xuXG5Ad2l0aENvbGxlY3Rpb25cbkB3aXRoSXRlbXNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGl0ZW1zLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgbW9kZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPyAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PlxuICAgICAgICAgIG1vZGUgPT09ICd0YWdzJyAmJiBBcnJheS5pc0FycmF5KHZhbClcbiAgICAgICAgICAgID8gb25DaGFuZ2UodmFsLm1hcChpZCA9PiBpdGVtcy5maW5kKGkgPT4gaS5pZCA9PT0gaWQpKSlcbiAgICAgICAgICAgIDogb25DaGFuZ2UodmFsKX1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VsZWN0PlxuICAgICkgOiAoXG4gICAgICA8U2VsZWN0IHsuLi5yZXN0fSBkaXNhYmxlZCAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
