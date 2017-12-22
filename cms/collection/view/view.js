import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _get from 'lodash/get';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { withSearch } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { Sidebar, Drawer } from 'olymp-fela';
import Menu, { StackedMenu } from 'olymp-fela/menu';
import { createComponent } from 'react-fela';
import FaDatabase from 'olymp-icons/lib/fa-database';
import FaTrashO from 'olymp-icons/lib/fa-trash-o';
import FaArchive from 'olymp-icons/lib/fa-archive';
import FaClockO from 'olymp-icons/lib/fa-clock-o';
import FaPlus from 'olymp-icons/lib/fa-plus';
import FaAngleRight from 'olymp-icons/lib/fa-angle-right';
import FaChevronLeft from 'olymp-icons/lib/fa-chevron-left';

import { Image } from 'olymp-cloudinary';

import { compose, withPropsOnChange, withState } from 'recompose';
import isAfter from 'date-fns/isAfter';
import { getPrintableValue } from '../utils';
import withItems from '../with-items';
import withCollection from '../with-collection';
import Calendar from './calendar';
import Table from './table';
import Detail from './detail';

var FlexContainer = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column'
    },
    '> .rbc-calendar': {
      padding: theme.space3
    },
    '> div': {
      hasFlex: {
        flex: '1 1 0%'
      },
      height: 'auto !important',
      overflow: 'auto',
      '> .rbc-toolbar': {
        '> .rbc-toolbar-label': {
          color: theme.color,
          fontWeight: 200,
          fontSize: '200%'
        }
      }
    }
  };
}, 'div');

var enhance = compose(withRouter, withSearch('search'), withCollection, withItems, withState('keys', 'setKeys', []), withPropsOnChange(['collection', 'items'], function (_ref2) {
  var collection = _ref2.collection,
      _ref2$items = _ref2.items,
      items = _ref2$items === undefined ? [] : _ref2$items;

  var startField = _get(collection, 'specialFields.startField');
  var endField = _get(collection, 'specialFields.endField');

  return {
    items: startField || startField ? items.map(function (item) {
      return _extends({}, item, {
        state: item.state === 'PUBLISHED' && !isAfter(item[endField || startField], new Date()) ? 'EXPIRED' : 'PUBLISHED'
      });
    }) : items
  };
}), withPropsOnChange(['collection', 'items', 'typeName', 'id', 'keys'], function (_ref3) {
  var collection = _ref3.collection,
      _ref3$items = _ref3.items,
      items = _ref3$items === undefined ? [] : _ref3$items,
      updateQuery = _ref3.updateQuery,
      typeName = _ref3.typeName,
      id = _ref3.id,
      sortBy = _ref3.sortBy,
      keys = _ref3.keys;
  return {
    menuItems: items.filter(function (x) {
      return x.state === (keys[0] || 'PUBLISHED');
    }).map(function (item) {
      return {
        key: item.id,
        image: item[collection.specialFields.imageField],
        description: getPrintableValue(item[sortBy || collection.specialFields.descriptionField], collection.fields.find(function (field) {
          return field.name === (sortBy || collection.specialFields.descriptionField);
        })),
        color: item[collection.specialFields.colorField],
        active: item.id === id,
        label: item[collection.specialFields.nameField] || 'Kein Titel',
        onClick: function onClick() {
          return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), item.id));
        }
      };
    })
  };
}));

var _ref5 = React.createElement(FaDatabase, null);

var _ref6 = React.createElement(FaPlus, null);

var _ref7 = React.createElement(FaChevronLeft, null);

var _ref8 = React.createElement(FaClockO, null);

var _ref9 = React.createElement(FaAngleRight, null);

var _ref10 = React.createElement(FaArchive, null);

var _ref11 = React.createElement(FaAngleRight, null);

var _ref12 = React.createElement(FaTrashO, null);

var _ref13 = React.createElement(FaAngleRight, null);

var _ref14 = React.createElement(Menu.Divider, null);

var CollectionView = enhance(_class = function (_Component) {
  _inherits(CollectionView, _Component);

  function CollectionView() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, CollectionView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).call.apply(_ref4, [this].concat(args))), _this), _this.renderMenu = function () {
      var _this$props = _this.props,
          collection = _this$props.collection,
          menuItems = _this$props.menuItems,
          typeName = _this$props.typeName,
          updateQuery = _this$props.updateQuery,
          keys = _this$props.keys,
          setKeys = _this$props.setKeys;

      var startField = _get(collection, 'specialFields.startField');

      return React.createElement(
        Menu,
        {
          header: React.createElement(
            Menu.Item,
            {
              icon: collection.specialFields.icon ? React.createElement(_Icon, {
                type: collection.specialFields.icon,
                style: { fontSize: 32 }
              }) : _ref5,
              large: true,
              extra: React.createElement(
                Menu.Extra,
                {
                  onClick: function onClick() {
                    return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), 'new'));
                  },
                  disabled: !!keys.length,
                  large: true
                },
                _ref6
              )
            },
            _get(collection, 'specialFields.label', collection.name)
          )
        },
        !!keys.length && React.createElement(
          Menu.Item,
          { icon: _ref7, onClick: function onClick() {
              return setKeys([]);
            } },
          'Zur\xFCck'
        ),
        !keys.length && !!startField && React.createElement(
          Menu.Item,
          {
            icon: _ref8,
            extra: _ref9,
            onClick: function onClick() {
              return setKeys(['EXPIRED']);
            }
          },
          'Abgelaufen'
        ),
        !keys.length && React.createElement(
          Menu.Item,
          {
            icon: _ref10,
            extra: _ref11,
            onClick: function onClick() {
              return setKeys(['DRAFT']);
            }
          },
          'Archiv'
        ),
        !keys.length && React.createElement(
          Menu.Item,
          {
            icon: _ref12,
            extra: _ref13,
            onClick: function onClick() {
              return setKeys(['REMOVED']);
            }
          },
          'Papierkorb'
        ),
        _ref14,
        menuItems.map(function (_ref15) {
          var key = _ref15.key,
              label = _ref15.label,
              description = _ref15.description,
              image = _ref15.image,
              color = _ref15.color,
              active = _ref15.active,
              onClick = _ref15.onClick;
          return React.createElement(
            Menu.Item,
            {
              key: key,
              onClick: onClick,
              icon: !!image && React.createElement(Image, { value: image, width: 40, height: 40 }),
              active: active,
              large: !!image
            },
            color ? React.createElement(
              'span',
              { style: { color: color } },
              label
            ) : label,
            !!description && React.createElement(
              'small',
              null,
              description
            )
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollectionView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          collection = _props.collection,
          fieldNames = _props.fieldNames,
          typeName = _props.typeName,
          id = _props.id,
          refetchQuery = _props.refetchQuery,
          isLoading = _props.isLoading,
          keys = _props.keys,
          items = _props.items,
          replaceQuery = _props.replaceQuery;

      var nameField = _get(collection, 'specialFields.nameField', 'name');
      var startField = _get(collection, 'specialFields.startField');

      return React.createElement(
        Sidebar,
        {
          flex: true,
          menu: React.createElement(StackedMenu, {
            isLoading: isLoading,
            keys: keys,
            renderMenu: this.renderMenu
          })
        },
        React.createElement(
          FlexContainer,
          null,
          startField ? React.createElement(Calendar, this.props) : React.createElement(Table, _extends({}, this.props, {
            items: items.filter(function (x) {
              return x.state === (keys[0] || 'PUBLISHED');
            })
          }))
        ),
        React.createElement(
          Drawer,
          {
            open: !!id,
            width: 475,
            right: true,
            onClose: function onClose() {
              return replaceQuery(_defineProperty({}, '@' + typeName.toLowerCase(), null));
            }
          },
          React.createElement(
            Menu,
            {
              header: id === 'new' ? React.createElement(
                Menu.Item,
                { large: true },
                collection.specialFields.label,
                ' anlegen'
              ) : React.createElement(
                Menu.Item,
                { large: true },
                ((items || []).find(function (x) {
                  return x.id === id;
                }) || {})[nameField] || 'Bearbeiten',
                React.createElement(
                  'small',
                  null,
                  collection.specialFields.label,
                  ' bearbeiten'
                )
              ),
              headerColor: true,
              headerInverted: true
            },
            React.createElement(Detail, {
              id: id === 'new' ? null : id,
              key: id || 'new',
              refetchQuery: refetchQuery,
              fieldNames: fieldNames,
              collection: collection,
              typeName: typeName
            })
          )
        )
      );
    }
  }]);

  return CollectionView;
}(Component)) || _class;

export { CollectionView as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy92aWV3LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTZWFyY2giLCJ3aXRoUm91dGVyIiwiU2lkZWJhciIsIkRyYXdlciIsIk1lbnUiLCJTdGFja2VkTWVudSIsImNyZWF0ZUNvbXBvbmVudCIsIkltYWdlIiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aFN0YXRlIiwiaXNBZnRlciIsImdldFByaW50YWJsZVZhbHVlIiwid2l0aEl0ZW1zIiwid2l0aENvbGxlY3Rpb24iLCJDYWxlbmRhciIsIlRhYmxlIiwiRGV0YWlsIiwiRmxleENvbnRhaW5lciIsInRoZW1lIiwicG9zaXRpb24iLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInNwYWNlMyIsImhlaWdodCIsIm92ZXJmbG93IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJlbmhhbmNlIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwic3RhcnRGaWVsZCIsImVuZEZpZWxkIiwibWFwIiwiaXRlbSIsInN0YXRlIiwiRGF0ZSIsInVwZGF0ZVF1ZXJ5IiwidHlwZU5hbWUiLCJpZCIsInNvcnRCeSIsImtleXMiLCJtZW51SXRlbXMiLCJmaWx0ZXIiLCJ4Iiwia2V5IiwiaW1hZ2UiLCJzcGVjaWFsRmllbGRzIiwiaW1hZ2VGaWVsZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25GaWVsZCIsImZpZWxkcyIsImZpbmQiLCJmaWVsZCIsIm5hbWUiLCJjb2xvckZpZWxkIiwiYWN0aXZlIiwibGFiZWwiLCJuYW1lRmllbGQiLCJvbkNsaWNrIiwidG9Mb3dlckNhc2UiLCJDb2xsZWN0aW9uVmlldyIsInJlbmRlck1lbnUiLCJwcm9wcyIsInNldEtleXMiLCJpY29uIiwibGVuZ3RoIiwiZmllbGROYW1lcyIsInJlZmV0Y2hRdWVyeSIsImlzTG9hZGluZyIsInJlcGxhY2VR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O0FBQ0Usa0JBQU0sQ0FBQyxDQUFDRixFQURWO0FBRUUsbUJBQU8sR0FGVDtBQUdFLHVCQUhGO0FBSUUscUJBQVM7QUFBQSxxQkFDUCtCLHVDQUNPaEMsU0FBU3NCLFdBQVQsRUFEUCxFQUNrQyxJQURsQyxFQURPO0FBQUE7QUFKWDtBQVVFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLHNCQUNFckIsT0FBTyxLQUFQLEdBQ0U7QUFBQyxvQkFBRCxDQUFNLElBQU47QUFBQSxrQkFBVyxXQUFYO0FBQ0dWLDJCQUFXa0IsYUFBWCxDQUF5QlUsS0FENUI7QUFBQTtBQUFBLGVBREYsR0FLRTtBQUFDLG9CQUFELENBQU0sSUFBTjtBQUFBLGtCQUFXLFdBQVg7QUFDRyxpQkFBQyxDQUFDM0IsU0FBUyxFQUFWLEVBQWNzQixJQUFkLENBQW1CO0FBQUEseUJBQUtSLEVBQUVMLEVBQUYsS0FBU0EsRUFBZDtBQUFBLGlCQUFuQixLQUF3QyxFQUF6QyxFQUE2Q21CLFNBQTdDLEtBQ0MsWUFGSjtBQUdFO0FBQUE7QUFBQTtBQUFRN0IsNkJBQVdrQixhQUFYLENBQXlCVSxLQUFqQztBQUFBO0FBQUE7QUFIRixlQVBOO0FBY0UsK0JBZEY7QUFlRTtBQWZGO0FBaUJFLGdDQUFDLE1BQUQ7QUFDRSxrQkFBSWxCLE9BQU8sS0FBUCxHQUFlLElBQWYsR0FBc0JBLEVBRDVCO0FBRUUsbUJBQUtBLE1BQU0sS0FGYjtBQUdFLDRCQUFjNkIsWUFIaEI7QUFJRSwwQkFBWUQsVUFKZDtBQUtFLDBCQUFZdEMsVUFMZDtBQU1FLHdCQUFVUztBQU5aO0FBakJGO0FBVkY7QUFyQkYsT0FERjtBQTZERDs7OztFQTNLeUMzQyxTOztTQUF2QmtFLGMiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi92aWV3L3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgU2lkZWJhciwgRHJhd2VyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSwge1N0YWNrZWRNZW51fSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQge1xuICBGYURhdGFiYXNlLFxuICBGYVRyYXNoTyxcbiAgRmFBcmNoaXZlLFxuICBGYUNsb2NrTyxcbiAgRmFQbHVzLFxuICBGYUFuZ2xlUmlnaHQsXG4gIEZhQ2hldnJvbkxlZnQsXG59IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgaXNBZnRlciBmcm9tICdkYXRlLWZucy9pc0FmdGVyJztcbmltcG9ydCB7IGdldFByaW50YWJsZVZhbHVlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHdpdGhJdGVtcyBmcm9tICcuLi93aXRoLWl0ZW1zJztcbmltcG9ydCB3aXRoQ29sbGVjdGlvbiBmcm9tICcuLi93aXRoLWNvbGxlY3Rpb24nO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IERldGFpbCBmcm9tICcuL2RldGFpbCc7XG5cbmNvbnN0IEZsZXhDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleDogJzEgMSAwJScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgICc+IC5yYmMtY2FsZW5kYXInOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTMsXG4gICAgfSxcbiAgICAnPiBkaXYnOiB7XG4gICAgICBoYXNGbGV4OiB7XG4gICAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgICAgfSxcbiAgICAgIGhlaWdodDogJ2F1dG8gIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgJz4gLnJiYy10b29sYmFyJzoge1xuICAgICAgICAnPiAucmJjLXRvb2xiYXItbGFiZWwnOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICAgICAgICBmb250U2l6ZTogJzIwMCUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4pO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgd2l0aFNlYXJjaCgnc2VhcmNoJyksXG4gIHdpdGhDb2xsZWN0aW9uLFxuICB3aXRoSXRlbXMsXG4gIHdpdGhTdGF0ZSgna2V5cycsICdzZXRLZXlzJywgW10pLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2NvbGxlY3Rpb24nLCAnaXRlbXMnXSwgKHsgY29sbGVjdGlvbiwgaXRlbXMgPSBbXSB9KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRGaWVsZCA9IGdldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5zdGFydEZpZWxkJyk7XG4gICAgY29uc3QgZW5kRmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMuZW5kRmllbGQnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtczpcbiAgICAgICAgc3RhcnRGaWVsZCB8fCBzdGFydEZpZWxkXG4gICAgICAgICAgPyBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBzdGF0ZTpcbiAgICAgICAgICAgICAgICBpdGVtLnN0YXRlID09PSAnUFVCTElTSEVEJyAmJlxuICAgICAgICAgICAgICAgICFpc0FmdGVyKGl0ZW1bZW5kRmllbGQgfHwgc3RhcnRGaWVsZF0sIG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAgICAgICA/ICdFWFBJUkVEJ1xuICAgICAgICAgICAgICAgICAgOiAnUFVCTElTSEVEJyxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogaXRlbXMsXG4gICAgfTtcbiAgfSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFxuICAgIFsnY29sbGVjdGlvbicsICdpdGVtcycsICd0eXBlTmFtZScsICdpZCcsICdrZXlzJ10sXG4gICAgKHsgY29sbGVjdGlvbiwgaXRlbXMgPSBbXSwgdXBkYXRlUXVlcnksIHR5cGVOYW1lLCBpZCwgc29ydEJ5LCBrZXlzIH0pID0+ICh7XG4gICAgICBtZW51SXRlbXM6IGl0ZW1zXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4LnN0YXRlID09PSAoa2V5c1swXSB8fCAnUFVCTElTSEVEJykpXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgICAgICBpbWFnZTogaXRlbVtjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuaW1hZ2VGaWVsZF0sXG4gICAgICAgICAgZGVzY3JpcHRpb246IGdldFByaW50YWJsZVZhbHVlKFxuICAgICAgICAgICAgaXRlbVtzb3J0QnkgfHwgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmRlc2NyaXB0aW9uRmllbGRdLFxuICAgICAgICAgICAgY29sbGVjdGlvbi5maWVsZHMuZmluZChcbiAgICAgICAgICAgICAgZmllbGQgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5uYW1lID09PVxuICAgICAgICAgICAgICAgIChzb3J0QnkgfHwgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmRlc2NyaXB0aW9uRmllbGQpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLFxuICAgICAgICAgIGNvbG9yOiBpdGVtW2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5jb2xvckZpZWxkXSxcbiAgICAgICAgICBhY3RpdmU6IGl0ZW0uaWQgPT09IGlkLFxuICAgICAgICAgIGxhYmVsOiBpdGVtW2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5uYW1lRmllbGRdIHx8ICdLZWluIFRpdGVsJyxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgdXBkYXRlUXVlcnkoeyBbYEAke3R5cGVOYW1lLnRvTG93ZXJDYXNlKCl9YF06IGl0ZW0uaWQgfSksXG4gICAgICAgIH0pKSxcbiAgICB9KSxcbiAgKSxcbik7XG5cbkBlbmhhbmNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIG1lbnVJdGVtcyxcbiAgICAgIHR5cGVOYW1lLFxuICAgICAgdXBkYXRlUXVlcnksXG4gICAgICBrZXlzLFxuICAgICAgc2V0S2V5cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydEZpZWxkID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLnN0YXJ0RmllbGQnKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuaWNvbiA/IChcbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgdHlwZT17Y29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmljb259XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMzIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxGYURhdGFiYXNlIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICAgIDxNZW51LkV4dHJhXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5KHsgW2BAJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfWBdOiAnbmV3JyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ISFrZXlzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgICAgICA8L01lbnUuRXh0cmE+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5sYWJlbCcsIGNvbGxlY3Rpb24ubmFtZSl9XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgeyEha2V5cy5sZW5ndGggJiYgKFxuICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PEZhQ2hldnJvbkxlZnQgLz59IG9uQ2xpY2s9eygpID0+IHNldEtleXMoW10pfT5cbiAgICAgICAgICAgIFp1csO8Y2tcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgKX1cbiAgICAgICAgeyFrZXlzLmxlbmd0aCAmJlxuICAgICAgICAgICEhc3RhcnRGaWVsZCAmJiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYUNsb2NrTyAvPn1cbiAgICAgICAgICAgICAgZXh0cmE9ezxGYUFuZ2xlUmlnaHQgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEtleXMoWydFWFBJUkVEJ10pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYmdlbGF1ZmVuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICB7IWtleXMubGVuZ3RoICYmIChcbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBpY29uPXs8RmFBcmNoaXZlIC8+fVxuICAgICAgICAgICAgZXh0cmE9ezxGYUFuZ2xlUmlnaHQgLz59XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRLZXlzKFsnRFJBRlQnXSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQXJjaGl2XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIHsha2V5cy5sZW5ndGggJiYgKFxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIGljb249ezxGYVRyYXNoTyAvPn1cbiAgICAgICAgICAgIGV4dHJhPXs8RmFBbmdsZVJpZ2h0IC8+fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0S2V5cyhbJ1JFTU9WRUQnXSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGFwaWVya29yYlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICApfVxuICAgICAgICA8TWVudS5EaXZpZGVyIC8+XG4gICAgICAgIHttZW51SXRlbXMubWFwKFxuICAgICAgICAgICh7IGtleSwgbGFiZWwsIGRlc2NyaXB0aW9uLCBpbWFnZSwgY29sb3IsIGFjdGl2ZSwgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICBpY29uPXshIWltYWdlICYmIDxJbWFnZSB2YWx1ZT17aW1hZ2V9IHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgICBsYXJnZT17ISFpbWFnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbG9yID8gPHNwYW4gc3R5bGU9e3sgY29sb3IgfX0+e2xhYmVsfTwvc3Bhbj4gOiBsYWJlbH1cbiAgICAgICAgICAgICAgeyEhZGVzY3JpcHRpb24gJiYgPHNtYWxsPntkZXNjcmlwdGlvbn08L3NtYWxsPn1cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICksXG4gICAgICAgICl9XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGZpZWxkTmFtZXMsXG4gICAgICB0eXBlTmFtZSxcbiAgICAgIGlkLFxuICAgICAgcmVmZXRjaFF1ZXJ5LFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAga2V5cyxcbiAgICAgIGl0ZW1zLFxuICAgICAgcmVwbGFjZVF1ZXJ5LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGdldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5uYW1lRmllbGQnLCAnbmFtZScpO1xuICAgIGNvbnN0IHN0YXJ0RmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMuc3RhcnRGaWVsZCcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGZsZXhcbiAgICAgICAgbWVudT17XG4gICAgICAgICAgPFN0YWNrZWRNZW51XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgIGtleXM9e2tleXN9XG4gICAgICAgICAgICByZW5kZXJNZW51PXt0aGlzLnJlbmRlck1lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8RmxleENvbnRhaW5lcj5cbiAgICAgICAgICB7c3RhcnRGaWVsZCA/IChcbiAgICAgICAgICAgIDxDYWxlbmRhciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXMuZmlsdGVyKHggPT4geC5zdGF0ZSA9PT0gKGtleXNbMF0gfHwgJ1BVQkxJU0hFRCcpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4Q29udGFpbmVyPlxuXG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICBvcGVuPXshIWlkfVxuICAgICAgICAgIHdpZHRoPXs0NzV9XG4gICAgICAgICAgcmlnaHRcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PlxuICAgICAgICAgICAgcmVwbGFjZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgW2BAJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBudWxsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgaWQgPT09ICduZXcnID8gKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbGFyZ2U+XG4gICAgICAgICAgICAgICAgICB7Y29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmxhYmVsfSBhbmxlZ2VuXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBsYXJnZT5cbiAgICAgICAgICAgICAgICAgIHsoKGl0ZW1zIHx8IFtdKS5maW5kKHggPT4geC5pZCA9PT0gaWQpIHx8IHt9KVtuYW1lRmllbGRdIHx8XG4gICAgICAgICAgICAgICAgICAgICdCZWFyYmVpdGVuJ31cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD57Y29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmxhYmVsfSBiZWFyYmVpdGVuPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyQ29sb3JcbiAgICAgICAgICAgIGhlYWRlckludmVydGVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERldGFpbFxuICAgICAgICAgICAgICBpZD17aWQgPT09ICduZXcnID8gbnVsbCA6IGlkfVxuICAgICAgICAgICAgICBrZXk9e2lkIHx8ICduZXcnfVxuICAgICAgICAgICAgICByZWZldGNoUXVlcnk9e3JlZmV0Y2hRdWVyeX1cbiAgICAgICAgICAgICAgZmllbGROYW1lcz17ZmllbGROYW1lc31cbiAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgdHlwZU5hbWU9e3R5cGVOYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
