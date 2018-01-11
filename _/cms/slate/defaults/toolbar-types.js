'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _faHeader = require('olymp-icons/lib/fa-header');

var _faHeader2 = _interopRequireDefault(_faHeader);

var _faListOl = require('olymp-icons/lib/fa-list-ol');

var _faListOl2 = _interopRequireDefault(_faListOl);

var _faIndent = require('olymp-icons/lib/fa-indent');

var _faIndent2 = _interopRequireDefault(_faIndent);

var _faListUl = require('olymp-icons/lib/fa-list-ul');

var _faListUl2 = _interopRequireDefault(_faListUl);

var _icon = require('../components/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  type: ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six'],
  label: _react2.default.createElement(_icon2.default, { icon: _faHeader2.default }),
  description: ['Überschrift 1', 'Überschrift 2', 'Überschrift 3', 'Überschrift 4', 'Überschrift 5', 'Überschrift 6']
}, { type: 'block-quote', label: _react2.default.createElement(_icon2.default, { icon: _faIndent2.default }) }, {
  type: 'numbered-list',
  label: _react2.default.createElement(_icon2.default, { icon: _faListOl2.default }),
  onClick: function onClick(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange;

    onChange(value.change().call(plugin.changes.wrapInList));
  }
}, {
  type: 'bulleted-list',
  label: _react2.default.createElement(_icon2.default, { icon: _faListUl2.default }),
  onClick: function onClick(_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange;

    onChange(value.change().call(plugin.changes.wrapInList));
  }
}];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL3Rvb2xiYXItdHlwZXMuZXM2Il0sIm5hbWVzIjpbInR5cGUiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwib25DbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJjaGFuZ2UiLCJjYWxsIiwicGx1Z2luIiwiY2hhbmdlcyIsIndyYXBJbkxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7a0JBRWUsQ0FDYjtBQUNFQSxRQUFNLENBQ0osYUFESSxFQUVKLGFBRkksRUFHSixlQUhJLEVBSUosY0FKSSxFQUtKLGNBTEksRUFNSixhQU5JLENBRFI7QUFTRUMsU0FBTyxnREFBRyx3QkFBSCxHQVRUO0FBVUVDLGVBQWEsQ0FDWCxlQURXLEVBRVgsZUFGVyxFQUdYLGVBSFcsRUFJWCxlQUpXLEVBS1gsZUFMVyxFQU1YLGVBTlc7QUFWZixDQURhLEVBb0JiLEVBQUVGLE1BQU0sYUFBUixFQUF1QkMsT0FBTyxnREFBRyx3QkFBSCxHQUE5QixFQXBCYSxFQXFCYjtBQUNFRCxRQUFNLGVBRFI7QUFFRUMsU0FBTyxnREFBRyx3QkFBSCxHQUZUO0FBR0VFLFdBQVMsdUJBQXlCO0FBQUEsUUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLFFBQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDaENBLGFBQVNELE1BQU1FLE1BQU4sR0FBZUMsSUFBZixDQUFvQkMsT0FBT0MsT0FBUCxDQUFlQyxVQUFuQyxDQUFUO0FBQ0Q7QUFMSCxDQXJCYSxFQTRCYjtBQUNFVixRQUFNLGVBRFI7QUFFRUMsU0FBTyxnREFBRyx3QkFBSCxHQUZUO0FBR0VFLFdBQVMsd0JBQXlCO0FBQUEsUUFBdEJDLEtBQXNCLFNBQXRCQSxLQUFzQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTs7QUFDaENBLGFBQVNELE1BQU1FLE1BQU4sR0FBZUMsSUFBZixDQUFvQkMsT0FBT0MsT0FBUCxDQUFlQyxVQUFuQyxDQUFUO0FBQ0Q7QUFMSCxDQTVCYSxDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL3Rvb2xiYXItdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFIZWFkZXIsIEZhTGlzdE9sLCBGYUluZGVudCwgRmFMaXN0VWwgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgSSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB0eXBlOiBbXG4gICAgICAnaGVhZGluZy1vbmUnLFxuICAgICAgJ2hlYWRpbmctdHdvJyxcbiAgICAgICdoZWFkaW5nLXRocmVlJyxcbiAgICAgICdoZWFkaW5nLWZvdXInLFxuICAgICAgJ2hlYWRpbmctZml2ZScsXG4gICAgICAnaGVhZGluZy1zaXgnLFxuICAgIF0sXG4gICAgbGFiZWw6IDxJIGljb249e0ZhSGVhZGVyfSAvPixcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ8OcYmVyc2NocmlmdCAxJyxcbiAgICAgICfDnGJlcnNjaHJpZnQgMicsXG4gICAgICAnw5xiZXJzY2hyaWZ0IDMnLFxuICAgICAgJ8OcYmVyc2NocmlmdCA0JyxcbiAgICAgICfDnGJlcnNjaHJpZnQgNScsXG4gICAgICAnw5xiZXJzY2hyaWZ0IDYnLFxuICAgIF0sXG4gIH0sXG4gIHsgdHlwZTogJ2Jsb2NrLXF1b3RlJywgbGFiZWw6IDxJIGljb249e0ZhSW5kZW50fSAvPiB9LFxuICB7XG4gICAgdHlwZTogJ251bWJlcmVkLWxpc3QnLFxuICAgIGxhYmVsOiA8SSBpY29uPXtGYUxpc3RPbH0gLz4sXG4gICAgb25DbGljazogKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlLmNoYW5nZSgpLmNhbGwocGx1Z2luLmNoYW5nZXMud3JhcEluTGlzdCkpO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnYnVsbGV0ZWQtbGlzdCcsXG4gICAgbGFiZWw6IDxJIGljb249e0ZhTGlzdFVsfSAvPixcbiAgICBvbkNsaWNrOiAoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xuICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkuY2FsbChwbHVnaW4uY2hhbmdlcy53cmFwSW5MaXN0KSk7XG4gICAgfSxcbiAgfSxcbl07XG4iXX0=
