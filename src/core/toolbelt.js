import lget from 'lodash/get';
import lset from 'lodash/set';
import ltoString from 'lodash/toString';
import ltoArray from 'lodash/toArray';
import ltoObject from 'lodash/toPlainObject';
import lupperFirst from 'lodash/upperFirst';
import llowerCase from 'lodash/lowerCase';
import lsortBy from 'lodash/sortBy';
import lgroupBy from 'lodash/groupBy';
import ltake from 'lodash/take';
import lisEqual from 'lodash/isEqual';
import lintersection from 'lodash/intersection';

export const toString = (arg) => {
  if (arg && typeof arg === 'object') return arg.name || arg.id;
  return ltoString(arg);
}

export const toObject = (arg) => {
  return ltoObject(arg);
}

export const toArray = (arg) => {
  return ltoArray(arg);
}

export const intersection = lintersection;
export const get = lget;
export const set = lset;
export const upperFirst = lupperFirst;
export const lowerCase = llowerCase;
export const sortBy = lsortBy;
export const groupBy = lgroupBy;
export const isEqual = lisEqual;
export const take = ltake;
export const addOrRemove = (arr = [], item, shouldAdd) => shouldAdd ? [...arr, item] : arr.filter(x => x !== item);
