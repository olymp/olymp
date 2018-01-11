const repeat = require('repeat-string');
const constantinople = require('constantinople');

module.exports = CodeGenerator;

function CodeGenerator(node, options) {
  this.options = options;
  this.node = node;
  this.buf = [];
  this.indents = -1; // -1 to counter the root-level Block
  // If the current node is a nested node (through the block expansion syntax
  // (`p: strong`) or with nested filters `:uglify-js:babel`). This property
  // makes the visit* methods continue on the previous line instead of
  // starting a new line.
  this.nested = false;
  // This property directs the code generator to continue on the previous line
  // and use inline interpolation tokens (`#{}` and `#[]`) if possible.
  this.inline = false;
}

CodeGenerator.prototype = {
  compile() {
    this.visit(this.node);
    return this.buf.join('\n');
  },

  indent(add) {
    return repeat(
      this.options.indentChar,
      this.indents + (add !== undefined ? add : 0),
    );
  },

  buffer(content) {
    if (content !== undefined) this.buf[this.buf.length - 1] += content;
  },

  bufLine(content, indents) {
    if (content === undefined) content = '';
    this.buf.push(this.indent(indents) + content);
  },

  quote(name) {
    let attrOut = '';
    if (this.options.preferredQuote === "'") {
      if (name.indexOf("'") !== -1 && name.indexOf('"') === -1) {
        attrOut += '"';
        attrOut += name;
        attrOut += '"';
      } else {
        attrOut += "'";
        attrOut += name.replace(/'/g, "\\'");
        attrOut += "'";
      }
    } else if (name.indexOf('"') !== -1 && name.indexOf("'") === -1) {
      attrOut += "'";
      attrOut += name;
      attrOut += "'";
    } else {
      attrOut += '"';
      attrOut += name.replace(/"/g, '\\"');
      attrOut += '"';
    }
    return attrOut;
  },

  attrs(attrs) {
    const regularAttrs = [];
    let classes = '';
    let id;
    attrs.forEach(attr => {
      let constVal = '';
      try {
        constVal = constantinople.toConstant(attr.val);
      } catch (ex) {}

      if (
        attr.name === 'class' &&
        !attr.escaped &&
        constVal &&
        /^\-?[_a-z][_a-z0-9\-]*$/i.test(constVal)
      ) {
        classes += `.${constVal}`;
      } else if (
        attr.name === 'id' &&
        !id &&
        !attr.escaped &&
        constVal &&
        /^[\w-]+$/.test(constVal)
      ) {
        id = constVal;
      } else {
        let attrOut = '';

        // name
        if (/^\w[^()[\]=!,`'"\s]*$/.test(attr.name)) {
          attrOut += attr.name;
        } else {
          const name = attr.name.replace(/\\/g, '\\\\');
          attrOut += this.quote(name);
        }

        if (!(typeof constVal === 'boolean' && constVal === true)) {
          // operator
          if (!attr.escaped) attrOut += '!';
          attrOut += '=';

          // value
          attrOut += attr.val;
        }

        regularAttrs.push(attrOut);
      }
    });

    let out = '';
    if (id) out += `#${id}`;
    out += classes;
    if (regularAttrs.length) out += `(${regularAttrs.join(' ')})`;

    return out;
  },

  attributeBlocks(attributeBlocks) {
    return attributeBlocks.reduce(
      (prev, cur) => `${prev  }&attributes(${  cur  })`,
      '',
    );
  },

  useColon(block, parent) {
    if (!this.options.useColon) return false;

    const parentOk =
      parent &&
      {
        Mixin: parent && parent.call,
        Include: true,
        Tag: true,
        When: true,
      }[parent.type];
    const node = block.nodes[0];
    const blockOk =
      block.nodes.length === 1 &&
      {
        Code: true,
        Filter: true,
        Mixin: node.call,
        Tag: true,
        Text: true,
      }[node.type];
    return parentOk && parent.block === block && blockOk;
  },

  // heuristics to determine if dot syntax is preferred over piped text
  useDot(block, parent) {
    if (!block.nodes.length) return false;

    // line count
    const lines =
      block.nodes[block.nodes.length - 1].line - block.nodes[0].line + 1;
    if (lines === 1) return false;

    // word count of Text node values
    let words = 0;
    // number of Code nodes that are in their own lines
    let codesWithOwnLine = 0;
    // if the previous node was the first in its line
    let prevStartLine = false;

    for (let i = 0; i < block.nodes.length; i++) {
      const node = block.nodes[i];
      const prev = block.nodes[i - 1] || parent || { line: -1 };
      const next = block.nodes[i];

      if (node.type === 'Text') {
        words += (node.val.match(/\w+(\s+|$)/g) || []).length;
      } else if (node.type === 'Code' && node.buffer && !node.block) {
        if (
          (node.line > prev.line ||
            (prev.type === 'Text' && prev.val === '\n')) &&
          prevStartLine
        ) {
          codesWithOwnLine++;
        }
      } else {
        // Technically Tags can also be interpolated, but determine whether to
        // use multiple dot blocks or one single dot block is way too
        // complicated. KISS.
        return false;
      }
      prevStartLine =
        node.line > prev.line || (prev.type === 'Text' && prev.val === '\n');
    }

    return words > 0 && codesWithOwnLine / lines < 0.35;
  },

  visitPipelessText(val, noEscape) {
    let buf = val.replace(/\n/g, `\n${this.indent()}`);
    if (!noEscape) buf = buf.replace(/\\?#([[{])/g, '\\#$1');
    this.buffer(buf);
  },

  visitPipelessTextBlock(block, noEscape) {
    const origIndents = this.indents;
    if (!++this.indents) this.indents++;
    this.bufLine();
    block.nodes.forEach(node => {
      if (node.type === 'Text') {
        this.visitPipelessText(node.val, noEscape);
      } else if (node.type === 'Code' || node.type === 'Tag') {
        this.visit(node, block, true);
      } else {
        throw new Error(`unexpected node: ${JSON.stringify(node)}`);
      }
    });
    this.indents = origIndents;
  },

  visit(node, parent, inline) {
    if (!node) {
      var msg;
      if (parent) {
        msg = `A child of ${parent.type} (${parent.filename ||
          'Pug'}:${parent.line})`;
      } else {
        msg = 'A top-level node';
      }
      msg += ` is ${node}, expected a Pug AST Node.`;
      throw new TypeError(msg);
    }

    if (!this[`visit${node.type}`]) {
      var msg;
      if (parent) {
        msg = `A child of ${parent.type}`;
      } else {
        msg = 'A top-level node';
      }
      msg +=
        ` (${node.filename || 'Pug'}:${node.line})` +
        ` is of type ${node.type},` +
        ` which is not supported by pug-source-gen.`;
      throw new TypeError(msg);
    }

    this[`visit${node.type}`](node, inline, parent);
  },

  visitCase(node) {
    this.bufLine(`case ${node.expr}`);
    this.visit(node.block, node);
  },

  visitWhen(node) {
    if (node.expr == 'default') {
      this.bufLine('default');
    } else {
      this.bufLine(`when ${node.expr}`);
    }
    if (node.block) {
      if (node.block.nodes.length === 0) {
        this.bufLine('', 1);
      } else {
        this.visit(node.block, node);
      }
    }
  },

  visitNamedBlock(block) {
    if (block.mode === 'replace') {
      this.bufLine(`block ${block.name}`);
    } else {
      this.bufLine(`${block.mode} ${block.name}`);
    }
    return this.visitBlock(block);
  },

  visitBlock(block, inline, parent) {
    if (block.yield) {
      this.bufLine('yield');
      return;
    }

    const originalNested = this.nested;
    if (this.useDot(block, parent)) {
      if (parent && (parent.type === 'Tag' || parent.type === 'Mixin')) {
        this.buffer('.');
      } else {
        this.bufLine('.');
      }
      return this.visitPipelessTextBlock(block);
    } else if (this.useColon(block, parent)) {
      this.buffer(': ');
      this.nested = true;
      this.visit(block.nodes[0], block, true);
      this.nested = originalNested;
      return;
    }

    this.nested = false;
    this.indents++;
    let prevNode = parent || {};
    block.nodes.forEach((node, i) => {
      this.visit(node, block, !i ? inline : prevNode.line === node.line);
      prevNode = node;
    });
    this.indents--;
    this.nested = originalNested;
  },

  visitMixinBlock(block) {
    this.bufLine('block');
  },

  visitDoctype(doctype) {
    let buf = 'doctype';
    if (doctype.val) {
      buf += ` ${doctype.val}`;
    }
    this.bufLine(buf);
  },

  visitMixin(mixin, inline, parent) {
    const attrs = mixin.attrs;
    // if there are attrs, `()` needed to disambiguate between args and attrs
    const args = mixin.args || attrs.length ? `(${mixin.args})` : '';
    const block = mixin.block;
    const key = mixin.name;

    if (mixin.call) {
      const buf = `+${key}${args}${this.attrs(attrs)}${this.attributeBlocks(
        mixin.attributeBlocks,
      )}`;
      if (inline) {
        if (!this.nested) this.buffer('#[');
        this.buffer(buf);
        if (!this.nested) this.buffer(']');
      } else {
        this.bufLine(buf);
      }
      if (nodeInline && (nodes[0].type !== 'Code' || nodes.length !== 1))
        this.buffer(' ');
      if (block && block.nodes.length) {
        var nodes = block.nodes;
        var nodeInline =
          nodes[0].line === mixin.line && !this.useColon(block, mixin);
        if (nodeInline && (nodes[0].type !== 'Code' || nodes.length !== 1))
          this.buffer(' ');
        this.visit(block, mixin, nodeInline);
      }
    } else {
      this.bufLine(`mixin ${key}${args}`);
      if (block) this.visit(block, mixin);
    }
  },

  visitTag(tag, inline, parent) {
    let name = tag.name,
      self = this;

    // attrs
    let attrs = this.attrs(tag.attrs);
    attrs += this.attributeBlocks(tag.attributeBlocks);

    let buf = '';

    // tag name
    if (tag.buffer) buf += `#{${name}}`;
    else if (
      tag.selfClosing ||
      name !== 'div' ||
      (attrs[0] !== '.' && attrs[0] !== '#')
    ) {
      buf += name;
    }

    // self-closing
    if (tag.selfClosing) buf += '/';

    buf += attrs;

    // buffer tag stub
    if (inline) {
      if (!this.nested) this.buffer('#[');
      this.buffer(buf);
    } else this.bufLine(buf);

    // if there is code
    if (tag.code) this.visitCode(tag.code, true);

    // if there is a block
    if (tag.block.nodes.length) {
      const nodes = tag.block.nodes;
      const nodeInline =
        nodes[0].line === tag.line && !this.useColon(tag.block, tag);
      if (nodeInline && (nodes[0].type !== 'Code' || nodes.length !== 1))
        this.buffer(' ');
      this.visit(tag.block, tag, nodeInline);
    }

    if (inline && !this.nested) this.buffer(']');
  },

  visitText(text, inline) {
    if (!text.val) return;

    if (text.isHtml) {
      if (!inline && !this.nested) this.bufLine();
      this.visitPipelessText(text.val);
      return;
    } else if (text.val === '\n') {
      if (inline || this.nested) {
        throw new Error('inline text contains new line');
      }
      this.bufLine('| ');
      return;
    }
    const src = text.val.replace(/\\?#([[{])/g, '\\#$1');
    if (inline && !this.nested) {
      this.buffer(src);
    } else if (this.nested) {
      this.buffer(`| ${src}`);
    } else {
      this.bufLine(`| ${src}`);
    }
  },

  visitComment(comment) {
    let buf = '//';
    if (!comment.buffer) buf += '-';
    buf += comment.val;
    this.bufLine(buf);
  },

  visitBlockComment(comment) {
    let buf = '//';
    if (!comment.buffer) buf += '-';
    if (comment.val) buf += comment.val;
    this.bufLine(buf);

    this.visitPipelessTextBlock(comment.block);
  },

  visitCode(code, inline, parent) {
    const parentBlock = parent && getBlock(parent);
    if (inline && parentBlock && parentBlock.nodes.length !== 1) {
      if (code.buffer) this.buffer(`${code.escape ? '#' : '!'}{${code.val}}`);
      else this.buffer(`#[- ${code.val}]`);
    } else {
      let buf = '';

      // operator
      if (code.buffer) {
        if (!code.escape) buf += '!';
        buf += '=';
      } else {
        buf += '-';
      }

      if (inline) this.buffer(buf);
      else this.bufLine(buf);

      // value
      if (code.val.indexOf('\n') === -1) {
        this.buffer(` ${code.val}`);
      } else {
        this.indents++;
        this.bufLine();
        this.visitPipelessText(code.val);
        this.indents--;
      }

      // block
      if (code.block) this.visit(code.block, code);
    }
  },

  visitConditional(cond) {
    const out = `if ${cond.test}`;
    this.bufLine(out);

    this.visit(cond.consequent, cond);

    if (cond.alternate) {
      if (cond.alternate.type === 'Conditional') {
        this.bufLine('else ');
        this.visitConditional(cond.alternate, true);
      } else {
        this.bufLine('else');
        this.visit(cond.alternate, cond);
      }
    }
  },

  visitWhile(loop) {
    const test = loop.test;
    this.bufLine(`while ${test}`);
    this.visit(loop.block, loop);
  },

  visitEach(each) {
    this.bufLine(
      `each ${each.val}${each.key ? `, ${each.key}` : ''} in ${each.obj}`,
    );
    this.visit(each.block, each);
    if (each.alternative) {
      this.bufLine('else');
      this.visit(each.alternative);
    }
  },
  visitRawInclude(include) {
    this.bufLine('include');
    if (include.filter) {
      this.buffer(`:${  include.filter  }${this.attrs(include.attrs)}`);
    }
    this.buffer(' ');
    this.visit(include.file);
  },
  visitExtends(node) {
    this.bufLine('extends ');
    this.visit(node.file);
  },

  visitFileReference(file) {
    this.buffer(file.path);
  },

  visitInclude(include) {
    this.bufLine('include');
    if (include.filter) {
      this.buffer(`:${include.filter}${this.attrs(include.attrs)}`);
    }
    this.buffer(' ');
    this.visit(include.file);
    this.visit(include.block);
  },

  visitFilter(filter, inline, parent) {
    const name = filter.name;

    const buf = `:${name}${this.attrs(filter.attrs)}`;
    if (inline && !this.nested) this.buffer('#[');
    if (inline || this.nested) this.buffer(buf);
    else this.bufLine(buf);

    if (filter.block.nodes.length) {
      if (filter.block.nodes[0].type === 'Filter') {
        if (filter.block.nodes.length > 1)
          throw new Error(
            `filter with more than one non-text nodes: ${JSON.stringify(
              filter,
            )}`,
          );
        const originalNested = this.nested;
        this.nested = true;
        this.visitFilter(filter.block.nodes[0], inline, filter);
        this.nested = originalNested;
      } else if (inline && !this.nested) {
        if (filter.block.nodes[0].type === 'Text') this.buffer(' ');
        this.visit(filter.block, parent, inline);
      } else {
        this.visitPipelessTextBlock(filter.block, true);
      }
    }

    if (inline && !this.nested) this.buffer(']');
  },
};

function getBlock(node) {
  switch (node.type) {
    case 'Block':
    case 'NamedBlock':
      return node;

    case 'BlockComment':
    case 'Case':
    case 'Code':
    case 'Each':
    case 'Filter':
    case 'Mixin':
    case 'Tag':
    case 'When':
    case 'While':
      return node.block;

    case 'Conditional':
      return node.consequent;

    case 'Comment':
    case 'Doctype':
    case 'Extends':
    case 'FileReference':
    case 'Include':
    case 'Text':
    default:
      throw new Error('there is no block in this node');
  }
}
