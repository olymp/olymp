import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import { compose, withPropsOnChange, withContext } from 'recompose';
import useBlockBase from '../block-decorators/base';

const convert = types =>
  Object.keys(types).reduce((result, key) => {
    const { type, isVoid = false, styles, kind = 'block', slate, ...rest } = types[key];
    let { component } = types[key];
    if (styles && typeof styles === 'object') {
      component = createComponent(() => styles, component, p => Object.keys(p));
    }
    if (styles && typeof styles === 'function') {
      component = createComponent(styles, component, p => Object.keys(p));
    }
    result[type] = useBlockBase({
      ...slate,
      ...rest,
      isVoid,
      kind,
      type,
    })(component);
    return result;
  }, {});

export default compose(
  withPropsOnChange(['blockTypes'], ({ blockTypes }) => ({
    blockTypes: convert(blockTypes),
  })),
  withContext(
    {
      blockTypes: PropTypes.object,
    },
    ({ blockTypes }) => ({
      blockTypes,
    }),
  ),
);
