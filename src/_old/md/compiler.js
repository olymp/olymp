

module.exports = remarkReact;

// var toHAST = require('mdast-util-to-hast');
// var sanitize = require('hast-util-sanitize');
// var toH = require('hast-to-hyperscript');
let globalCreateElement;

try {
  globalCreateElement = require('react').createElement;
} catch (err) {}

const own = {}.hasOwnProperty;

const TABLE_ELEMENTS = ['table', 'thead', 'tbody', 'tfoot', 'tr'];

/**
 * Attach a react compiler.
 *
 * @param {Unified} processor - Instance.
 * @param {Object?} [options]
 * @param {Object?} [options.sanitize]
 *   - Sanitation schema.
 * @param {Object?} [options.remarkReactComponents]
 *   - Components.
 * @param {string?} [options.prefix]
 *   - Key prefix.
 * @param {Function?} [options.createElement]
 *   - `h()`.
 */
function remarkReact(options) {
  const settings = options || {};
  const createElement = settings.createElement || globalCreateElement;
  const clean = settings.sanitize !== false;
  const scheme = clean && typeof settings.sanitize !== 'boolean'
    ? settings.sanitize
    : null;
  const toHastOptions = settings.toHast || {};
  const components = Object.assign(
    {
      td: createTableCellComponent('td'),
      th: createTableCellComponent('th'),
    },
    settings.remarkReactComponents
  );

  this.Compiler = compile;

  function h(name, props, children) {
    const component = own.call(components, name) ? components[name] : name;
    if (!component) { return null; }

    if (children && TABLE_ELEMENTS.indexOf(component) !== -1) {
      children = children.filter(child => child !== '\n');
    }

    return createElement(component, props, children);
  }

  function compile(node, key) {
    const {
      tag,
      type,
      position,
      depth,
      value,
      ordered,
      url,
      props = {},
      children = [],
    } = node;
    let t = tag || type;
    if (!props.key) { props.key = key; }
    if (!props.value) { props.value = value; }
    if (t === 'heading') {
      t = `heading${depth || 1}`;
    } else if (t === 'link') {
      props.href = url;
    } else if (t === 'text') {
    } else if (t === 'list') {
      t = ordered ? 'ol' : 'ul';
    } else if (t === 'listItem') {
      t = 'li';
    } else if (t === 'root') {
      t = 'div';
    }
    return h(t, props, children.map((child, key) => compile(child, key)));
  }

  function createTableCellComponent(tagName) {
    return TableCell;

    function TableCell(props) {
      const fixedProps = xtend(props, {
        children: undefined,
        style: { textAlign: props.align },
      });
      delete fixedProps.align;
      return createElement(tagName, fixedProps, props.children);
    }
  }
}
