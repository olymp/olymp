import React from 'react';
import { sortBy, findIndex } from 'lodash';
import moment from 'moment';
import { cloudinaryUrl } from 'olymp';

const defaultCategory = {
  // Funktion die Items Kategorie zuweist
  getCategory: item => item || 'Nicht angegeben',

  // Funktion die Items Sub-Kategorie zuweist
  getSubCategory: () => undefined,

  // Filter, der entscheidet welche Kategorien nicht in der Kategorie "Sonstige" gebündelt werden
  getCategoryFilter: item => item.count > 1,

  // Filter, der entscheidet welche Sub-Kategorien nicht
  // in der Kategorie "Sonstige" gebündelt werden
  getSubCategoryFilter: () => true,

  // sortBy-Aufruf der Kategorie
  getCategorySortOrder: 'count',

  // sortBy-Aufruf der Sub-Kategorie
  getSubCategorySortOrder: 'count',
};

const getCategory = (meta) => {
  if ((meta.type.kind === 'SCALAR' && meta.type.name !== 'Json') || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
      case 'DateTime':
        return {
          getCategory: item => item ? moment(item).format('YYYY') : 'Kein Datum',
          getSubCategory: item => item ? moment(item).format('MMMM') : undefined,
          getCategoryFilter: item => true, // Alle Kategorien
          getSubCategoryFilter: item => true, // Alle Kategorien
          getCategorySortOrder: item => -item.value, // = reverse()
          getSubCategorySortOrder: item => ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'].indexOf(item.value), // = reverse()
        };
    }
  } else if (meta.type.kind === 'LIST') {
    // noch nichts

  } else /*if (meta.type.kind === 'OBJECT')*/ {
    switch (meta.type.name) {
      case 'image':
        return {
          getCategory: (item) => item ? (item.width * item.height > 500000 ? 'HD-Bild' : 'SD-Bild') : 'Kein Bild',
          getCategoryFilter: (item) => true,
        };

      default:
        return { getCategory: (item) => item ? item.name || 'Ja' : 'Sonstige' };
    }
  }

  return {};
};

const getFilters = (filters, category, subCategory) => {
  // Index der Kategorie finden (gegebenenfalls anlegen)
  let index = findIndex(filters, { value: category });
  if (index < 0) {
    index = filters.length;
    filters.push({
      value: category,
      children: subCategory ? [{
        text: 'Alle',
        value: category,
      }] : [],
      count: 0,
    });
  }

  // Kategorie-Text updaten und Counter erhöhen
  filters[index].count++;
  filters[index].text = `${category} (${filters[index].count})`;

  if (subCategory) {
    getFilters(filters[index].children, subCategory);
  }
};

const sortFilters = (meta, filters, sorting) => {
  const categoryFnc = { ...defaultCategory, ...getCategory(meta) };

  // Nächste Ebene filtern und sortieren
  let _filters = (filters || []).map(filter => ({
    ...filter,
    children: filter.children ? sortFilters(meta, filter.children, categoryFnc.getSubCategorySortOrder) : []
  }));

  // Aktuelle Ebene filtern
  _filters = _filters.filter(f => categoryFnc.getCategoryFilter(f));

  const count = (filters || []).length - _filters.length;
  if (count) {
    _filters.push({
      text: `Sonstige (${count})`,
      value: '__sonstige',
    })
  }

  return sortBy(_filters, sorting);
};

const onFilter = (meta, filters, selection, item) => {
  const isCategory = findIndex(filters[meta.type.kind][meta.type.name], {
    id: item.id,
    category: selection,
  }) >= 0;
  const isSubCategory = findIndex(filters[meta.type.kind][meta.type.name], {
    id: item.id,
    subCategory: selection,
  }) >= 0;

  return isCategory || isSubCategory || ( selection === '__sonstige' && !isCategory && !isSubCategory );
}

const resolveFilter = (meta, items, filters) => {
  const { name, type } = meta;
  const categoryFnc = { ...defaultCategory, ...getCategory(meta) };
  const _filters = [];

  // Filter gruppieren
  (items || []).map((item) => {
    const category = categoryFnc.getCategory(item[name]);
    const subCategory = categoryFnc.getSubCategory(item[name]);

    filters[type.kind][type.name].push({
      id: item.id,
      category,
      subCategory,
    });

    getFilters(_filters, category, subCategory);

    return false;
  });

  return sortFilters(meta, _filters, categoryFnc.getCategorySortOrder);
};

const resolveFieldValue = (value, meta) => {
  if ((meta.type.kind === 'SCALAR' && meta.type.name !== 'Json') || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
        return value ? moment(value).format('DD.MM.YYYY') : '';
        break;

      case 'DateTime':
        return value ? `${moment(value).format('DD.MM.YYYY, HH:mm')} Uhr` : '';
        break;
    }

  } else if (meta.type.kind === 'LIST') {
    if (value && value.length && value.map(x => x.name).join('').length > 0) return value.map(x => x.name).join(', ');
    if (value && value.length) return `${value.length} ${value.length > 1 ? 'Elemente' : 'Element'}`;
    return '';

  } else /*if (meta.type.kind === 'OBJECT')*/ {
    switch (meta.type.name) {
      case 'image':
        return value ? <img src={cloudinaryUrl(value.url, { width: 50, height: 50 })} /> : '';
        break;

      default:
        return value ? (value.name || 'Ja') : '';
    }
  }

  return value;
};

export default (meta, items) => {
  const filters = {};

  if (!filters[meta.type.kind]) {
    filters[meta.type.kind] = {};
  }
  if (!filters[meta.type.kind][meta.type.name]) {
    filters[meta.type.kind][meta.type.name] = [];
  }

  return {
    filters: resolveFilter(meta, items, filters),
    onFilter: (selection, item) => onFilter(meta, filters, selection, item),
    sorter: (a, b) => (a[name] < b[name] ? -1 : (a[name] > b[name] ? 1 : 0)),
    render: text => resolveFieldValue(text, meta),
  };
};
