import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { createComponent } from 'react-fela';
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
  withPropsOnChange(['blockTypes'], ({ blockTypes, renderNode }) => {
    const nodes = convert({ nodes: blockTypes || registry.blocks });
    return {
      schema: { nodes },
      renderNode: props => {
        const v = renderNode && renderNode(props);
        if (v !== undefined) {
          return v;
        }
        const Com = nodes[props.node.type] || null;
        if (Com) {
          return <Com {...props} />;
        }
        return null;
      },
    };
  }),
);
