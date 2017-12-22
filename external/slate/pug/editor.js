var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange, withState } from 'recompose';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import PluginEditCode from 'slate-edit-code';
import PluginPrism from 'slate-prism';
import cn from 'classnames';

import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-pug';

import toPug from './to-pug';
import toSlate from './to-slate';
import useJsonState from '../use-json-state';

var CodeLine = function CodeLine(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return React.createElement(
    'div',
    attributes,
    children
  );
};

var Code = function Code(_ref2) {
  var children = _ref2.children,
      attributes = _ref2.attributes,
      className = _ref2.className;
  return React.createElement(
    'pre',
    { className: cn(className, 'language-pug') },
    React.createElement(
      'code',
      _extends({ className: 'language-pug' }, attributes),
      children
    )
  );
};

var renderNode = function renderNode(props) {
  if (props.node.type === 'code') {
    return React.createElement(Code, props);
  } else if (props.node.type === 'code-line') {
    return React.createElement(CodeLine, props);
  }
};

var enhance = compose(withState('isFull', 'setIsFull'), withState('isCode', 'setIsCode'), withPropsOnChange(['value'], function (_ref3) {
  var value = _ref3.value,
      onChange = _ref3.onChange;
  return {
    value: {
      kind: 'document',
      nodes: [{
        kind: 'block',
        type: 'code',
        nodes: toPug(value).split('\n').map(function (line) {
          return {
            kind: 'block',
            type: 'code-line',
            nodes: [{
              kind: 'text',
              leaves: [{
                kind: 'leaf',
                text: line
              }]
            }]
          };
        })
      }]
    },
    onChange: function onChange(change) {
      return console.log(toSlate(Plain.serialize(Value.fromJSON({
        document: change,
        kind: 'value'
      }))));
    }
  };
}), useJsonState, withPropsOnChange('plugins', function (_ref4) {
  var _ref4$plugins = _ref4.plugins,
      plugins = _ref4$plugins === undefined ? [] : _ref4$plugins;
  return {
    plugins: [PluginEditCode({
      containerType: 'code',
      lineType: 'code-line',
      exitBlockType: 'paragraph',
      onlyIn: function onlyIn(node) {
        return node.type === 'code';
      }
    }), PluginPrism({
      onlyIn: function onlyIn(node) {
        return node.type === 'code';
      },
      getSyntax: function getSyntax() {
        return 'pug';
      }
    }), {
      renderNode: renderNode
    }]
  };
}));

var Writer = (_temp2 = _class = function (_Component) {
  _inherits(Writer, _Component);

  function Writer() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, Writer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = Writer.__proto__ || Object.getPrototypeOf(Writer)).call.apply(_ref5, [this].concat(args))), _this), _this.onChange = function (change) {
      return _this.props.onChange(change.value);
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          readOnly = _this$props.readOnly,
          className = _this$props.className,
          spellcheck = _this$props.spellcheck,
          _this$props$schema = _this$props.schema,
          schema = _this$props$schema === undefined ? {} : _this$props$schema,
          renderNode = _this$props.renderNode,
          _this$props$style = _this$props.style,
          style = _this$props$style === undefined ? {} : _this$props$style,
          full = _this$props.full,
          isCode = _this$props.isCode,
          setIsCode = _this$props.setIsCode,
          setFull = _this$props.setFull,
          isFull = _this$props.isFull,
          setIsFull = _this$props.setIsFull,
          rest = _objectWithoutProperties(_this$props, ['children', 'readOnly', 'className', 'spellcheck', 'schema', 'renderNode', 'style', 'full', 'isCode', 'setIsCode', 'setFull', 'isFull', 'setIsFull']);

      return React.createElement(Editor, _extends({}, rest, {
        className: 'slate-editor slate-writer',
        spellcheck: spellcheck || false,
        readOnly: false,
        onDrop: _this.onDrop,
        onPaste: _this.onPaste,
        renderNode: renderNode,
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        placeholder: !readOnly && 'Hier Text eingeben...',
        placeholderStyle: { padding: '0 1rem', opacity: 0.33 },
        style: _extends({ height: '100%' }, style)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Writer;
}(Component), _class.propTypes = {
  readOnly: PropTypes.bool,
  showUndo: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.object,
  onChange: PropTypes.func,
  nodes: PropTypes.object,
  autoMarkDownKeyDown: PropTypes.func,
  plugins: PropTypes.array,
  className: PropTypes.string
}, _temp2);


export default enhance(Writer);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3B1Zy9lZGl0b3IuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aFN0YXRlIiwiVmFsdWUiLCJFZGl0b3IiLCJQbGFpbiIsIlBsdWdpbkVkaXRDb2RlIiwiUGx1Z2luUHJpc20iLCJjbiIsInRvUHVnIiwidG9TbGF0ZSIsInVzZUpzb25TdGF0ZSIsIkNvZGVMaW5lIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwiQ29kZSIsImNsYXNzTmFtZSIsInJlbmRlck5vZGUiLCJwcm9wcyIsIm5vZGUiLCJ0eXBlIiwiZW5oYW5jZSIsInZhbHVlIiwib25DaGFuZ2UiLCJraW5kIiwibm9kZXMiLCJzcGxpdCIsIm1hcCIsImxlYXZlcyIsInRleHQiLCJsaW5lIiwiY29uc29sZSIsImxvZyIsInNlcmlhbGl6ZSIsImZyb21KU09OIiwiZG9jdW1lbnQiLCJjaGFuZ2UiLCJwbHVnaW5zIiwiY29udGFpbmVyVHlwZSIsImxpbmVUeXBlIiwiZXhpdEJsb2NrVHlwZSIsIm9ubHlJbiIsImdldFN5bnRheCIsIldyaXRlciIsInJlbmRlciIsInJlYWRPbmx5Iiwic3BlbGxjaGVjayIsInNjaGVtYSIsInN0eWxlIiwiZnVsbCIsImlzQ29kZSIsInNldElzQ29kZSIsInNldEZ1bGwiLCJpc0Z1bGwiLCJzZXRJc0Z1bGwiLCJyZXN0Iiwib25Ecm9wIiwib25QYXN0ZSIsIm9uS2V5RG93biIsInBhZGRpbmciLCJvcGFjaXR5IiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwiYm9vbCIsInNob3dVbmRvIiwib2JqZWN0IiwiZnVuYyIsImF1dG9NYXJrRG93bktleURvd24iLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRC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LEtBSDVCO0FBSUUsa0JBQVUsS0FKWjtBQUtFLGdCQUFRLE1BQUtVLE1BTGY7QUFNRSxpQkFBUyxNQUFLQyxPQU5oQjtBQU9FLG9CQUFZeEMsVUFQZDtBQVFFLGtCQUFVLE1BQUtNLFFBUmpCO0FBU0UsbUJBQVcsTUFBS21DLFNBVGxCO0FBVUUscUJBQWEsQ0FBQ2IsUUFBRCxJQUFhLHVCQVY1QjtBQVdFLDBCQUFrQixFQUFFYyxTQUFTLFFBQVgsRUFBcUJDLFNBQVMsSUFBOUIsRUFYcEI7QUFZRSwwQkFBU0MsUUFBUSxNQUFqQixJQUE0QmIsS0FBNUI7QUFaRixTQURGO0FBZ0JELEs7Ozs7RUFoRGtCbEQsUyxVQUNaZ0UsUyxHQUFZO0FBQ2pCakIsWUFBVTlDLFVBQVVnRSxJQURIO0FBRWpCQyxZQUFVakUsVUFBVWdFLElBRkg7QUFHakJsRCxZQUFVZCxVQUFVb0IsSUFISDtBQUlqQkcsU0FBT3ZCLFVBQVVrRSxNQUpBO0FBS2pCMUMsWUFBVXhCLFVBQVVtRSxJQUxIO0FBTWpCekMsU0FBTzFCLFVBQVVrRSxNQU5BO0FBT2pCRSx1QkFBcUJwRSxVQUFVbUUsSUFQZDtBQVFqQjdCLFdBQVN0QyxVQUFVcUUsS0FSRjtBQVNqQnBELGFBQVdqQixVQUFVc0U7QUFUSixDOzs7QUFrRHJCLGVBQWVoRCxRQUFRc0IsTUFBUixDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL3B1Zy9lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgVmFsdWUgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgUGxhaW4gZnJvbSAnc2xhdGUtcGxhaW4tc2VyaWFsaXplcic7XG5pbXBvcnQgUGx1Z2luRWRpdENvZGUgZnJvbSAnc2xhdGUtZWRpdC1jb2RlJztcbmltcG9ydCBQbHVnaW5QcmlzbSBmcm9tICdzbGF0ZS1wcmlzbSc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLmNzcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ncmFwaHFsJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB1Zyc7XG5cbmltcG9ydCB0b1B1ZyBmcm9tICcuL3RvLXB1Zyc7XG5pbXBvcnQgdG9TbGF0ZSBmcm9tICcuL3RvLXNsYXRlJztcbmltcG9ydCB1c2VKc29uU3RhdGUgZnJvbSAnLi4vdXNlLWpzb24tc3RhdGUnO1xuXG5jb25zdCBDb2RlTGluZSA9ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IChcbiAgPGRpdiB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuY29uc3QgQ29kZSA9ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8cHJlIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBgbGFuZ3VhZ2UtcHVnYCl9PlxuICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLXB1Z1wiIHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2NvZGU+XG4gIDwvcHJlPlxuKTtcblxuY29uc3QgcmVuZGVyTm9kZSA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLm5vZGUudHlwZSA9PT0gJ2NvZGUnKSB7XG4gICAgcmV0dXJuIDxDb2RlIHsuLi5wcm9wc30gLz47XG4gIH0gZWxzZSBpZiAocHJvcHMubm9kZS50eXBlID09PSAnY29kZS1saW5lJykge1xuICAgIHJldHVybiA8Q29kZUxpbmUgey4uLnByb3BzfSAvPjtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZSgnaXNGdWxsJywgJ3NldElzRnVsbCcpLFxuICB3aXRoU3RhdGUoJ2lzQ29kZScsICdzZXRJc0NvZGUnKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZSddLCAoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4gKHtcbiAgICB2YWx1ZToge1xuICAgICAga2luZDogJ2RvY3VtZW50JyxcbiAgICAgIG5vZGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICBub2RlczogdG9QdWcodmFsdWUpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAubWFwKGxpbmUgPT4gKHtcbiAgICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NvZGUtbGluZScsXG4gICAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgbGVhdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnbGVhZicsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogbGluZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvbkNoYW5nZTogY2hhbmdlID0+XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgdG9TbGF0ZShcbiAgICAgICAgICBQbGFpbi5zZXJpYWxpemUoXG4gICAgICAgICAgICBWYWx1ZS5mcm9tSlNPTih7XG4gICAgICAgICAgICAgIGRvY3VtZW50OiBjaGFuZ2UsXG4gICAgICAgICAgICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgfSkpLFxuICB1c2VKc29uU3RhdGUsXG4gIHdpdGhQcm9wc09uQ2hhbmdlKCdwbHVnaW5zJywgKHsgcGx1Z2lucyA9IFtdIH0pID0+ICh7XG4gICAgcGx1Z2luczogW1xuICAgICAgUGx1Z2luRWRpdENvZGUoe1xuICAgICAgICBjb250YWluZXJUeXBlOiAnY29kZScsXG4gICAgICAgIGxpbmVUeXBlOiAnY29kZS1saW5lJyxcbiAgICAgICAgZXhpdEJsb2NrVHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIG9ubHlJbjogbm9kZSA9PiBub2RlLnR5cGUgPT09ICdjb2RlJyxcbiAgICAgIH0pLFxuICAgICAgUGx1Z2luUHJpc20oe1xuICAgICAgICBvbmx5SW46IG5vZGUgPT4gbm9kZS50eXBlID09PSAnY29kZScsXG4gICAgICAgIGdldFN5bnRheDogKCkgPT4gJ3B1ZycsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgcmVuZGVyTm9kZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSkpLFxuKTtcblxuY2xhc3MgV3JpdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1VuZG86IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbm9kZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYXV0b01hcmtEb3duS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGx1Z2luczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBvbkNoYW5nZSA9IGNoYW5nZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGNoYW5nZS52YWx1ZSk7XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzcGVsbGNoZWNrLFxuICAgICAgc2NoZW1hID0ge30sXG4gICAgICByZW5kZXJOb2RlLFxuICAgICAgc3R5bGUgPSB7fSxcbiAgICAgIGZ1bGwsXG4gICAgICBpc0NvZGUsXG4gICAgICBzZXRJc0NvZGUsXG4gICAgICBzZXRGdWxsLFxuICAgICAgaXNGdWxsLFxuICAgICAgc2V0SXNGdWxsLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8RWRpdG9yXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBjbGFzc05hbWU9XCJzbGF0ZS1lZGl0b3Igc2xhdGUtd3JpdGVyXCJcbiAgICAgICAgc3BlbGxjaGVjaz17c3BlbGxjaGVjayB8fCBmYWxzZX1cbiAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgICBvblBhc3RlPXt0aGlzLm9uUGFzdGV9XG4gICAgICAgIHJlbmRlck5vZGU9e3JlbmRlck5vZGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17IXJlYWRPbmx5ICYmICdIaWVyIFRleHQgZWluZ2ViZW4uLi4nfVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlPXt7IHBhZGRpbmc6ICcwIDFyZW0nLCBvcGFjaXR5OiAwLjMzIH19XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCAuLi5zdHlsZSB9fVxuICAgICAgLz5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFdyaXRlcik7XG4iXX0=
