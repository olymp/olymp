import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { compose, withPropsOnChange, withContext } from 'recompose';
import useBlockBase from './use-block-base';
import registry from './registry';

const convert = schema =>
  Object.keys(schema.nodes).reduce((result, key) => {
    const {
      type,
      isVoid = false,
      styles,
      kind = 'block',
      slate,
      ...rest
    } = schema.nodes[key];
    let { component } = schema.nodes[key];
    if (styles && typeof styles === 'object') {
      component = createComponent(() => styles, component, p => Object.keys(p));
    }
    if (styles && typeof styles === 'function') {
      component = createComponent(styles, component, p => Object.keys(p));
    }

    result[type] = useBlockBase({
      ...slate,
      ...rest,
      schema,
      isVoid,
      kind,
      type,
    })(component);
    return result;
  }, {});

export default compose(
  withPropsOnChange(['blockTypes'], ({ blockTypes = {} }) => {
    const nodes = convert({ nodes: { ...registry.blocks, ...blockTypes } });
    return {
      schema: { nodes },
      renderNode: props => {
        const Com = nodes[props.node.type] || null;
        if (Com) {
          return <Com {...props} />;
        }
        return null;
      },
    };
  }),
  withContext(
    {
      renderNode: PropTypes.func,
      schema: PropTypes.object,
    },
    ({ schema, renderNode }) => ({
      schema,
      renderNode,
    }),
  ),
);
