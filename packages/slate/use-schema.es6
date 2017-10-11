import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import { compose, withPropsOnChange, withContext } from 'recompose';
import useBlockBase from './use-block-base';

const convert = schema =>
  Object.keys(schema.nodes).reduce((result, key) => {
    const { type, isVoid = false, styles, kind = 'block', slate, ...rest } = schema.nodes[key];
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
  withPropsOnChange(['blockTypes'], ({ blockTypes }) => ({
    schema: { nodes: convert({ nodes: blockTypes }) },
  })),
  withContext(
    {
      schema: PropTypes.object,
    },
    ({ schema }) => ({
      schema,
    }),
  ),
);
