import { groupBy, reduce } from 'lodash';

export const makeTree = (items, propertyName) => {
  const results = items ? reduce(groupBy(items, propertyName), (array, children, key) => {
    array.push({ id: `${key} (${children.length})`, name: '', children });
    return array;
  }, []) : null;
  return results;
};
