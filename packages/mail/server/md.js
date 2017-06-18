const remark = require('remark');
const compose = require('./templates/default');

function compiler(handlers) {
  this.Compiler = compile;

  function compile(node, key, parent) {
    const handler = handlers[node.type] || handlers.default;
    return handler(
      node,
      (node.children || []).map((child, key) => compile(child, key, node)),
      parent
    );
  }
}

module.exports = {
  toHTML: (value, options) => {
    const handlers = {
      root: (props, children) => children.join('\n'),
      link: (props, children, parent) =>
        parent.type === 'paragraph'
          ? `
        <a href="${props.url}" class="btn-primary" itemprop="url" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">
          ${children}
        </a>
      `
          : `
        <a href="${props.url}" itemprop="url">
          ${children}
        </a>
      `,
      text: (props, children) => props.value,
      heading: (props, children) =>
        handlers.paragraph(
          {},
          `<h${props.depth}>${children.join('')}</h${props.depth}>`
        ),
      default: (props, children) => children.join('\n'),
      div: (props, children) => children.join('\n'),
      paragraph: (props, children) => `
        <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
          <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
            ${Array.isArray(children) ? children.join('') : children}
          </td>
        </tr>
      `,
    };

    return compose(
      remark().use(compiler, handlers).processSync(value).contents,
      options
    );
  },
  toPlain: value => {
    const handlers = {
      root: (props, children) => children.join('\n'),
      link: (props, children) => `${children} (${props.url})`,
      text: (props, children) => props.value,
      heading: (props, children) => handlers.paragraph({}, children.join('')),
      default: (props, children) => children.join('\n'),
      div: (props, children) => children.join('\n'),
      paragraph: (props, children) => `${children}\n`,
    };

    return remark().use(compiler, handlers).processSync(value).contents;
  },
};

/*
const template = `
Hallo
## kopo [Anmelden](http://google.de)
[Anmelden](http://google.de)
`;
console.log(toHTML(template));
console.log(toPlain(template));
*/
