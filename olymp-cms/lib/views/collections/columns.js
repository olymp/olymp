'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _olymp = require('olymp');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCategory = {
  // Funktion die Items Kategorie zuweist
  getCategory: function getCategory(item) {
    return item || 'Nicht angegeben';
  },

  // Funktion die Items Sub-Kategorie zuweist
  getSubCategory: function getSubCategory() {
    return undefined;
  },

  // Filter, der entscheidet welche Kategorien nicht in der Kategorie "Sonstige" gebündelt werden
  getCategoryFilter: function getCategoryFilter(item) {
    return item.count > 1;
  },

  // Filter, der entscheidet welche Sub-Kategorien nicht
  // in der Kategorie "Sonstige" gebündelt werden
  getSubCategoryFilter: function getSubCategoryFilter() {
    return true;
  },

  // sortBy-Aufruf der Kategorie
  getCategorySortOrder: 'count',

  // sortBy-Aufruf der Sub-Kategorie
  getSubCategorySortOrder: 'count'
};

var getCategory = function getCategory(meta) {
  if (meta.type.kind === 'SCALAR' && meta.type.name !== 'Json' || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
      case 'DateTime':
        return {
          getCategory: function getCategory(item) {
            return item ? (0, _moment2.default)(item).format('YYYY') : 'Kein Datum';
          },
          getSubCategory: function getSubCategory(item) {
            return item ? (0, _moment2.default)(item).format('MMMM') : undefined;
          },
          getCategoryFilter: function getCategoryFilter() {
            return true;
          }, // Alle Kategorien
          getSubCategoryFilter: function getSubCategoryFilter() {
            return true;
          }, // Alle Kategorien
          getCategorySortOrder: function getCategorySortOrder(item) {
            return -item.value;
          }, // = reverse()
          getSubCategorySortOrder: function getSubCategorySortOrder(item) {
            return ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'].indexOf(item.value);
          } };

      default:
        return {};
    }
  } else if (meta.type.kind === 'LIST') {
    // noch nichts

  } else /* if (meta.type.kind === 'OBJECT') */{
      switch (meta.type.name) {
        case 'Image':
          return {
            getCategory: function getCategory(item) {
              if (item) {
                return item.width * item.height > 500000 ? 'HD-Bild' : 'SD-Bild';
              }

              return 'Kein Bild';
            },
            getCategoryFilter: function getCategoryFilter() {
              return true;
            }
          };

        default:
          return { getCategory: function getCategory(item) {
              return item ? item.name || 'Ja' : 'Sonstige';
            } };
      }
    }

  return {};
};

var getFilters = function getFilters(filters, category, subCategory) {
  // Index der Kategorie finden (gegebenenfalls anlegen)
  var index = (0, _lodash.findIndex)(filters, { value: category });
  if (index < 0) {
    index = filters.length;
    filters.push({
      value: category,
      children: subCategory ? [{
        text: 'Alle',
        value: category
      }] : [],
      count: 0
    });
  }
  var filter = filters[index];

  // Kategorie-Text updaten und Counter erhöhen
  filter.count += 1;
  filter.text = category + ' (' + filters[index].count + ')';

  if (subCategory) {
    getFilters(filter.children, subCategory);
  }
};

var sortFilters = function sortFilters(meta, filters, sorting) {
  var categoryFnc = _extends({}, defaultCategory, getCategory(meta));

  // Nächste Ebene filtern und sortieren
  var sortedFilters = (filters || []).map(function (filter) {
    return _extends({}, filter, {
      children: filter.children ? sortFilters(meta, filter.children, categoryFnc.getSubCategorySortOrder) : []
    });
  });

  // Aktuelle Ebene filtern
  sortedFilters = sortedFilters.filter(function (f) {
    return categoryFnc.getCategoryFilter(f);
  });

  var count = (filters || []).length - sortedFilters.length;
  if (count) {
    sortedFilters.push({
      text: 'Sonstige (' + count + ')',
      value: '__sonstige'
    });
  }

  return (0, _lodash.sortBy)(sortedFilters, sorting);
};

var _onFilter = function _onFilter(meta, filters, selection, item) {
  var isCategory = (0, _lodash.findIndex)(filters[meta.type.kind][meta.type.name], {
    id: item.id,
    category: selection
  }) >= 0;
  var isSubCategory = (0, _lodash.findIndex)(filters[meta.type.kind][meta.type.name], {
    id: item.id,
    subCategory: selection
  }) >= 0;

  return isCategory || isSubCategory || selection === '__sonstige' && !isCategory && !isSubCategory;
};

var resolveFilter = function resolveFilter(meta, items, filters) {
  var name = meta.name,
      type = meta.type;

  var categoryFnc = _extends({}, defaultCategory, getCategory(meta));
  var filterArray = [];

  // Filter gruppieren
  (items || []).map(function (item) {
    var category = categoryFnc.getCategory(item[name]);
    var subCategory = categoryFnc.getSubCategory(item[name]);

    filters[type.kind][type.name].push({
      id: item.id,
      category: category,
      subCategory: subCategory
    });

    getFilters(filterArray, category, subCategory);

    return false;
  });

  return sortFilters(meta, filterArray, categoryFnc.getCategorySortOrder);
};

var resolveFieldValue = function resolveFieldValue(value, meta) {
  if (meta.type.kind === 'SCALAR' && meta.type.name !== 'Json' || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
        return value ? (0, _moment2.default)(value).format('DD.MM.YYYY') : '';

      case 'DateTime':
        return value ? (0, _moment2.default)(value).format('DD.MM.YYYY, HH:mm') + ' Uhr' : '';

      case 'Boolean':
        return _react2.default.createElement(
          _antd.Checkbox,
          { checked: value, disabled: true },
          value ? 'Ja' : 'Nein'
        );

      default:
        return value;
    }
  } else if (meta.type.kind === 'LIST') {
    if (value && value.length && value.map(function (x) {
      return x.name;
    }).join('').length > 0) return value.map(function (x) {
      return x.name;
    }).join(', ');
    if (value && value.length) return value.length + ' ' + (value.length > 1 ? 'Elemente' : 'Element');
    return '';
  } else /* if (meta.type.kind === 'OBJECT') */{
      switch (meta.type.name) {
        case 'Image':
          return value ? _react2.default.createElement('img', { alt: value.url, src: (0, _olymp.cloudinaryUrl)(value.url, { width: 50, height: 50 }) }) : '';

        default:
          return value ? value.name || 'Ja' : '';
      }
    }
};

exports.default = function (meta, items) {
  var name = meta.name;

  var filters = {};

  if (!filters[meta.type.kind]) {
    filters[meta.type.kind] = {};
  }
  if (!filters[meta.type.kind][meta.type.name]) {
    filters[meta.type.kind][meta.type.name] = [];
  }

  return {
    filters: resolveFilter(meta, items, filters),
    onFilter: function onFilter(selection, item) {
      return _onFilter(meta, filters, selection, item);
    },
    sorter: function sorter(a, b) {
      if (a[name] >= b[name]) {
        return a[name] > b[name] ? 1 : 0;
      }

      return -1;
    },
    render: function render(text) {
      return resolveFieldValue(text, meta);
    }
  };
};