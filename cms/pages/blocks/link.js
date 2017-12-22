var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import FaExternalLink from 'olymp-icons/lib/fa-external-link';
import FaLink from 'olymp-icons/lib/fa-link';
import FaUnlink from 'olymp-icons/lib/fa-unlink';

import PrefetchLink from '../prefetch-link';

var LinkContainer = function LinkContainer(_ref) {
  var node = _ref.node,
      attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      editor = _ref.editor;

  var href = node.data.get('href');
  if (!editor.props.readOnly) {
    return React.createElement(
      'a',
      _extends({}, attributes, { className: className }),
      children
    );
  }
  if (href && href.indexOf('/') === 0) {
    return React.createElement(
      PrefetchLink,
      _extends({}, attributes, { to: href, className: className }),
      children
    );
  }
  return React.createElement(
    'a',
    _extends({}, attributes, {
      href: href,
      className: className,
      target: '_blank',
      rel: 'noopener noreferrer'
    }),
    children
  );
};

var setLink = function setLink(onChange, value, node) {
  var href = window.prompt('Link', node.data.get('href') || '');
  if (href) {
    onChange(value.change().setNodeByKey(node.key, {
      data: node.data.set('href', href)
    }));
  }
};

var _ref3 = React.createElement(FaExternalLink, null);

export default {
  type: 'link',
  isVoid: false,
  kind: 'inline',
  component: LinkContainer,
  actions: [{
    type: 'small',
    component: function component(_ref2) {
      var node = _ref2.node;
      return React.createElement(
        LinkContainer,
        {
          node: node,
          attributes: {},
          editor: { props: { readOnly: true } }
        },
        _ref3
      );
    },
    tooltip: 'Öffnen'
  }, {
    type: 'small',
    component: function component(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value,
          node = _ref4.node;
      return React.createElement(FaLink, { onClick: function onClick() {
          return setLink(onChange, value, node);
        } });
    },
    tooltip: 'Neu verlinken'
  }, {
    type: 'small',
    component: function component(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return React.createElement(FaUnlink, {
        onClick: function onClick() {
          return onChange(value.change().unwrapInline('link'));
        }
      });
    },
    tooltip: 'Link entfernen'
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9saW5rLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByZWZldGNoTGluayIsIkxpbmtDb250YWluZXIiLCJub2RlIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZWRpdG9yIiwiaHJlZiIsImRhdGEiLCJnZXQiLCJwcm9wcyIsInJlYWRPbmx5IiwiaW5kZXhPZiIsInNldExpbmsiLCJvbkNoYW5nZSIsInZhbHVlIiwid2luZG93IiwicHJvbXB0IiwiY2hhbmdlIiwic2V0Tm9kZUJ5S2V5Iiwia2V5Iiwic2V0IiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJjb21wb25lbnQiLCJhY3Rpb25zIiwidG9vbHRpcCIsInVud3JhcElubGluZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOzs7OztBQUVBLE9BQU9DLFlBQVAsTUFBeUIsa0JBQXpCOztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsT0FBdUQ7QUFBQSxNQUFwREMsSUFBb0QsUUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUMzRSxNQUFNQyxPQUFPTCxLQUFLTSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxNQUFkLENBQWI7QUFDQSxNQUFJLENBQUNILE9BQU9JLEtBQVAsQ0FBYUMsUUFBbEIsRUFBNEI7QUFDMUIsV0FDRTtBQUFBO0FBQUEsbUJBQU9SLFVBQVAsSUFBbUIsV0FBV0UsU0FBOUI7QUFDR0Q7QUFESCxLQURGO0FBS0Q7QUFDRCxNQUFJRyxRQUFRQSxLQUFLSyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUFsQyxFQUFxQztBQUNuQyxXQUNFO0FBQUMsa0JBQUQ7QUFBQSxtQkFBa0JULFVBQWxCLElBQThCLElBQUlJLElBQWxDLEVBQXdDLFdBQVdGLFNBQW5EO0FBQ0dEO0FBREgsS0FERjtBQUtEO0FBQ0QsU0FDRTtBQUFBO0FBQUEsaUJBQ01ELFVBRE47QUFFRSxZQUFNSSxJQUZSO0FBR0UsaUJBQVdGLFNBSGI7QUFJRSxjQUFPLFFBSlQ7QUFLRSxXQUFJO0FBTE47QUFPR0Q7QUFQSCxHQURGO0FBV0QsQ0EzQkQ7O0FBNkJBLElBQU1TLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBa0JiLElBQWxCLEVBQTJCO0FBQ3pDLE1BQU1LLE9BQU9TLE9BQU9DLE1BQVAsQ0FBYyxNQUFkLEVBQXNCZixLQUFLTSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxNQUFkLEtBQXlCLEVBQS9DLENBQWI7QUFDQSxNQUFJRixJQUFKLEVBQVU7QUFDUk8sYUFDRUMsTUFBTUcsTUFBTixHQUFlQyxZQUFmLENBQTRCakIsS0FBS2tCLEdBQWpDLEVBQXNDO0FBQ3BDWixZQUFNTixLQUFLTSxJQUFMLENBQVVhLEdBQVYsQ0FBYyxNQUFkLEVBQXNCZCxJQUF0QjtBQUQ4QixLQUF0QyxDQURGO0FBS0Q7QUFDRixDQVREOztZQXlCVSxvQkFBQyxjQUFELE87O0FBZFYsZUFBZTtBQUNiZSxRQUFNLE1BRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sUUFITztBQUliQyxhQUFXeEIsYUFKRTtBQUtieUIsV0FBUyxDQUNQO0FBQ0VKLFVBQU0sT0FEUjtBQUVFRyxlQUFXO0FBQUEsVUFBR3ZCLElBQUgsU0FBR0EsSUFBSDtBQUFBLGFBQ1Q7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsZ0JBQU1BLElBRFI7QUFFRSxzQkFBWSxFQUZkO0FBR0Usa0JBQVEsRUFBRVEsT0FBTyxFQUFFQyxVQUFVLElBQVosRUFBVDtBQUhWO0FBQUE7QUFBQSxPQURTO0FBQUEsS0FGYjtBQVdFZ0IsYUFBUztBQVhYLEdBRE8sRUFjUDtBQUNFTCxVQUFNLE9BRFI7QUFFRUcsZUFBVztBQUFBLFVBQUdYLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFVBQW9CYixJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSxhQUNULG9CQUFDLE1BQUQsSUFBUSxTQUFTO0FBQUEsaUJBQU1XLFFBQVFDLFFBQVIsRUFBa0JDLEtBQWxCLEVBQXlCYixJQUF6QixDQUFOO0FBQUEsU0FBakIsR0FEUztBQUFBLEtBRmI7QUFLRXlCLGFBQVM7QUFMWCxHQWRPLEVBcUJQO0FBQ0VMLFVBQU0sT0FEUjtBQUVFRyxlQUFXO0FBQUEsVUFBR1gsUUFBSCxTQUFHQSxRQUFIO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsYUFDVCxvQkFBQyxRQUFEO0FBQ0UsaUJBQVM7QUFBQSxpQkFBTUQsU0FBU0MsTUFBTUcsTUFBTixHQUFlVSxZQUFmLENBQTRCLE1BQTVCLENBQVQsQ0FBTjtBQUFBO0FBRFgsUUFEUztBQUFBLEtBRmI7QUFPRUQsYUFBUztBQVBYLEdBckJPO0FBTEksQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUV4dGVybmFsTGluaywgRmFMaW5rLCBGYVVubGluayB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCBQcmVmZXRjaExpbmsgZnJvbSAnLi4vcHJlZmV0Y2gtbGluayc7XG5cbmNvbnN0IExpbmtDb250YWluZXIgPSAoeyBub2RlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBlZGl0b3IgfSkgPT4ge1xuICBjb25zdCBocmVmID0gbm9kZS5kYXRhLmdldCgnaHJlZicpO1xuICBpZiAoIWVkaXRvci5wcm9wcy5yZWFkT25seSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxuICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJlZmV0Y2hMaW5rIHsuLi5hdHRyaWJ1dGVzfSB0bz17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1ByZWZldGNoTGluaz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5jb25zdCBzZXRMaW5rID0gKG9uQ2hhbmdlLCB2YWx1ZSwgbm9kZSkgPT4ge1xuICBjb25zdCBocmVmID0gd2luZG93LnByb21wdCgnTGluaycsIG5vZGUuZGF0YS5nZXQoJ2hyZWYnKSB8fCAnJyk7XG4gIGlmIChocmVmKSB7XG4gICAgb25DaGFuZ2UoXG4gICAgICB2YWx1ZS5jaGFuZ2UoKS5zZXROb2RlQnlLZXkobm9kZS5rZXksIHtcbiAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnaHJlZicsIGhyZWYpLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnbGluaycsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdpbmxpbmUnLFxuICBjb21wb25lbnQ6IExpbmtDb250YWluZXIsXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0eXBlOiAnc21hbGwnLFxuICAgICAgY29tcG9uZW50OiAoeyBub2RlIH0pID0+IChcbiAgICAgICAgPExpbmtDb250YWluZXJcbiAgICAgICAgICBub2RlPXtub2RlfVxuICAgICAgICAgIGF0dHJpYnV0ZXM9e3t9fVxuICAgICAgICAgIGVkaXRvcj17eyBwcm9wczogeyByZWFkT25seTogdHJ1ZSB9IH19XG4gICAgICAgID5cbiAgICAgICAgICA8RmFFeHRlcm5hbExpbmsgLz5cbiAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgKSxcbiAgICAgIHRvb2x0aXA6ICfDlmZmbmVuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdzbWFsbCcsXG4gICAgICBjb21wb25lbnQ6ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgbm9kZSB9KSA9PiAoXG4gICAgICAgIDxGYUxpbmsgb25DbGljaz17KCkgPT4gc2V0TGluayhvbkNoYW5nZSwgdmFsdWUsIG5vZGUpfSAvPlxuICAgICAgKSxcbiAgICAgIHRvb2x0aXA6ICdOZXUgdmVybGlua2VuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdzbWFsbCcsXG4gICAgICBjb21wb25lbnQ6ICh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgIDxGYVVubGlua1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKHZhbHVlLmNoYW5nZSgpLnVud3JhcElubGluZSgnbGluaycpKX1cbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICB0b29sdGlwOiAnTGluayBlbnRmZXJuZW4nLFxuICAgIH0sXG4gIF0sXG59O1xuIl19
