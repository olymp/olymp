import convertAttrs from './attrs';
import gen from './utils';

const convertSlateToPug = (value, line = 0, column = 0) => {
  if (value.kind === 'value') {
    const nodes = [...(value.document.nodes || [])]
      .map((x, i) => convertSlateToPug(x, line + i + 1, column + 1))
      .filter(x => x);
    return gen({
      line,
      column,
      type: 'Block',
      attrs: convertAttrs(value.data),
      attributeBlocks: [],
      nodes,
    });
  } else if (value.kind === 'block') {
    const isBlock = !![...(value.nodes || [])].find(x => x.kind === 'block');
    const isInline =
      !isBlock && !![...(value.nodes || [])].find(x => x.kind === 'inline');
    const nodes = isBlock
      ? [...(value.nodes || [])]
          .map((x, i) => convertSlateToPug(x, line + i + 1, column + 1))
          .filter(x => x)
      : isInline
        ? [...(value.nodes || [])]
            .map((x, i) =>
              convertSlateToPug(x, line + i + 1, column + 1, isInline),
            )
            .filter(x => x)
        : [...(value.nodes || [])]
            .map((x, i) => convertSlateToPug(x, line, column + 1))
            .filter(x => x);
    return {
      line,
      column,
      type: 'Tag',
      name: value.type,
      attrs: convertAttrs(value.data),
      textOnly: isInline,
      attributeBlocks: [],
      block: {
        line,
        column,
        type: 'Block',
        nodes,
      },
    };
  } else if (value.kind === 'text') {
    const val =
      value.text || [...(value.leaves || [])].map(x => x.text).join('');
    return {
      line,
      column,
      type: 'Text',
      attributeBlocks: [],
      attrs: [],
      val,
    };
  } else if (value.kind === 'inline') {
    const text =
      value.text || [...(value.leaves || [])].map(x => x.text).join('');
    return {
      line,
      column,
      attrs: convertAttrs(value.data),
      attributeBlocks: [],
      type: 'Tag',
      name: value.type,
      isInline: true,
      block: {
        line,
        column,
        type: 'Block',
        nodes: text ? [{ type: 'Text', val: text, line, column }] : [],
      },
    };
  }
};

export default convertSlateToPug;
