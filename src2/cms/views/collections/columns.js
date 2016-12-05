import React from 'react';
import { sortBy, findIndex } from 'lodash';
import moment from 'moment';
import { cloudinaryUrl } from 'olymp';
import { Checkbox } from 'antd';

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
          getCategory: item => (item ? moment(item).format('YYYY') : 'Kein Datum'),
          getSubCategory: item => (item ? moment(item).format('MMMM') : undefined),
          getCategoryFilter: () => true, // Alle Kategorien
          getSubCategoryFilter: () => true, // Alle Kategorien
          getCategorySortOrder: item => -item.value, // = reverse()
          getSubCategorySortOrder: item => ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'].indexOf(item.value), // = reverse()
        };

      default:
        return {};
    }
  } else if (meta.type.kind === 'LIST') {
    // noch nichts

  } else /* if (meta.type.kind === 'OBJECT') */ {
    switch (meta.type.name) {
      case 'image':
        return {
          getCategory: (item) => {
            if (item) {
              return (item.width * item.height > 500000 ? 'HD-Bild' : 'SD-Bild');
            }

            return 'Kein Bild';
          },
          getCategoryFilter: () => true,
        };

      default:
        return { getCategory: item => (item ? item.name || 'Ja' : 'Sonstige') };
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
  const filter = filters[index];

  // Kategorie-Text updaten und Counter erhöhen
  filter.count += 1;
  filter.text = `${category} (${filters[index].count})`;

  if (subCategory) {
    getFilters(filter.children, subCategory);
  }
};

const sortFilters = (meta, filters, sorting) => {
  const categoryFnc = { ...defaultCategory, ...getCategory(meta) };

  // Nächste Ebene filtern und sortieren
  let sortedFilters = (filters || []).map(filter => ({
    ...filter,
    children: filter.children ?
    sortFilters(meta, filter.children, categoryFnc.getSubCategorySortOrder) :
    [],
  }));

  // Aktuelle Ebene filtern
  sortedFilters = sortedFilters.filter(f => categoryFnc.getCategoryFilter(f));

  const count = (filters || []).length - sortedFilters.length;
  if (count) {
    sortedFilters.push({
      text: `Sonstige (${count})`,
      value: '__sonstige',
    });
  }

  return sortBy(sortedFilters, sorting);
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

  return isCategory || isSubCategory || (selection === '__sonstige' && !isCategory && !isSubCategory);
};

const resolveFilter = (meta, items, filters) => {
  const { name, type } = meta;
  const categoryFnc = { ...defaultCategory, ...getCategory(meta) };
  const filterArray = [];

  // Filter gruppieren
  (items || []).map((item) => {
    const category = categoryFnc.getCategory(item[name]);
    const subCategory = categoryFnc.getSubCategory(item[name]);

    filters[type.kind][type.name].push({
      id: item.id,
      category,
      subCategory,
    });

    getFilters(filterArray, category, subCategory);

    return false;
  });

  return sortFilters(meta, filterArray, categoryFnc.getCategorySortOrder);
};

const resolveFieldValue = (value, meta) => {
  if ((meta.type.kind === 'SCALAR' && meta.type.name !== 'Json') || meta.type.kind === 'ENUM') {
    switch (meta.type.name) {
      case 'Date':
        return value ? moment(value).format('DD.MM.YYYY') : '';

      case 'DateTime':
        return value ? `${moment(value).format('DD.MM.YYYY, HH:mm')} Uhr` : '';

      case 'Boolean':
        return <Checkbox checked={value} disabled>{value ? 'Ja' : 'Nein'}</Checkbox>;

      default:
        return value;
    }
  } else if (meta.type.kind === 'LIST') {
    if (value && value.length && value.map(x => x.name).join('').length > 0) return value.map(x => x.name).join(', ');
    if (value && value.length) return `${value.length} ${value.length > 1 ? 'Elemente' : 'Element'}`;
    return '';
  } else /* if (meta.type.kind === 'OBJECT') */ {
    switch (meta.type.name) {
      case 'image':
        return value ? <img alt={value.url} src={cloudinaryUrl(value.url, { width: 50, height: 50 })} /> : '';

      default:
        return value ? (value.name || 'Ja') : '';
    }
  }
};

export default (meta, items) => {
  const { name } = meta;
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
    sorter: (a, b) => {
      if (a[name] >= b[name]) {
        return a[name] > b[name] ? 1 : 0;
      }

      return -1;
    },
    render: text => resolveFieldValue(text, meta),
  };
};
