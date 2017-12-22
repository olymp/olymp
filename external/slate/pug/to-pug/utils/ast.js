var repeat = require('repeat-string');
var constantinople = require('constantinople');

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
  compile: function compile() {
    this.visit(this.node);
    return this.buf.join('\n');
  },
  indent: function indent(add) {
    return repeat(this.options.indentChar, this.indents + (add !== undefined ? add : 0));
  },
  buffer: function buffer(content) {
    if (content !== undefined) this.buf[this.buf.length - 1] += content;
  },
  bufLine: function bufLine(content, indents) {
    if (content === undefined) content = '';
    this.buf.push(this.indent(indents) + content);
  },
  quote: function quote(name) {
    var attrOut = '';
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
  attrs: function attrs(_attrs) {
    var _this = this;

    var regularAttrs = [];
    var classes = '';
    var id = void 0;
    _attrs.forEach(function (attr) {
      var constVal = '';
      try {
        constVal = constantinople.toConstant(attr.val);
      } catch (ex) {}

      if (attr.name === 'class' && !attr.escaped && constVal && /^\-?[_a-z][_a-z0-9\-]*$/i.test(constVal)) {
        classes += '.' + constVal;
      } else if (attr.name === 'id' && !id && !attr.escaped && constVal && /^[\w-]+$/.test(constVal)) {
        id = constVal;
      } else {
        var attrOut = '';

        // name
        if (/^\w[^()[\]=!,`'"\s]*$/.test(attr.name)) {
          attrOut += attr.name;
        } else {
          var name = attr.name.replace(/\\/g, '\\\\');
          attrOut += _this.quote(name);
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

    var out = '';
    if (id) out += '#' + id;
    out += classes;
    if (regularAttrs.length) out += '(' + regularAttrs.join(' ') + ')';

    return out;
  },
  attributeBlocks: function attributeBlocks(_attributeBlocks) {
    return _attributeBlocks.reduce(function (prev, cur) {
      return prev + '&attributes(' + cur + ')';
    }, '');
  },
  useColon: function useColon(block, parent) {
    if (!this.options.useColon) return false;

    var parentOk = parent && {
      Mixin: parent && parent.call,
      Include: true,
      Tag: true,
      When: true
    }[parent.type];
    var node = block.nodes[0];
    var blockOk = block.nodes.length === 1 && {
      Code: true,
      Filter: true,
      Mixin: node.call,
      Tag: true,
      Text: true
    }[node.type];
    return parentOk && parent.block === block && blockOk;
  },


  // heuristics to determine if dot syntax is preferred over piped text
  useDot: function useDot(block, parent) {
    if (!block.nodes.length) return false;

    // line count
    var lines = block.nodes[block.nodes.length - 1].line - block.nodes[0].line + 1;
    if (lines === 1) return false;

    // word count of Text node values
    var words = 0;
    // number of Code nodes that are in their own lines
    var codesWithOwnLine = 0;
    // if the previous node was the first in its line
    var prevStartLine = false;

    for (var i = 0; i < block.nodes.length; i++) {
      var node = block.nodes[i];
      var prev = block.nodes[i - 1] || parent || { line: -1 };
      var next = block.nodes[i];

      if (node.type === 'Text') {
        words += (node.val.match(/\w+(\s+|$)/g) || []).length;
      } else if (node.type === 'Code' && node.buffer && !node.block) {
        if ((node.line > prev.line || prev.type === 'Text' && prev.val === '\n') && prevStartLine) {
          codesWithOwnLine++;
        }
      } else {
        // Technically Tags can also be interpolated, but determine whether to
        // use multiple dot blocks or one single dot block is way too
        // complicated. KISS.
        return false;
      }
      prevStartLine = node.line > prev.line || prev.type === 'Text' && prev.val === '\n';
    }

    return words > 0 && codesWithOwnLine / lines < 0.35;
  },
  visitPipelessText: function visitPipelessText(val, noEscape) {
    var buf = val.replace(/\n/g, '\n' + this.indent());
    if (!noEscape) buf = buf.replace(/\\?#([[{])/g, '\\#$1');
    this.buffer(buf);
  },
  visitPipelessTextBlock: function visitPipelessTextBlock(block, noEscape) {
    var _this2 = this;

    var origIndents = this.indents;
    if (!++this.indents) this.indents++;
    this.bufLine();
    block.nodes.forEach(function (node) {
      if (node.type === 'Text') {
        _this2.visitPipelessText(node.val, noEscape);
      } else if (node.type === 'Code' || node.type === 'Tag') {
        _this2.visit(node, block, true);
      } else {
        throw new Error('unexpected node: ' + JSON.stringify(node));
      }
    });
    this.indents = origIndents;
  },
  visit: function visit(node, parent, inline) {
    if (!node) {
      var msg;
      if (parent) {
        msg = 'A child of ' + parent.type + ' (' + (parent.filename || 'Pug') + ':' + parent.line + ')';
      } else {
        msg = 'A top-level node';
      }
      msg += ' is ' + node + ', expected a Pug AST Node.';
      throw new TypeError(msg);
    }

    if (!this['visit' + node.type]) {
      var msg;
      if (parent) {
        msg = 'A child of ' + parent.type;
      } else {
        msg = 'A top-level node';
      }
      msg += ' (' + (node.filename || 'Pug') + ':' + node.line + ')' + (' is of type ' + node.type + ',') + ' which is not supported by pug-source-gen.';
      throw new TypeError(msg);
    }

    this['visit' + node.type](node, inline, parent);
  },
  visitCase: function visitCase(node) {
    this.bufLine('case ' + node.expr);
    this.visit(node.block, node);
  },
  visitWhen: function visitWhen(node) {
    if (node.expr == 'default') {
      this.bufLine('default');
    } else {
      this.bufLine('when ' + node.expr);
    }
    if (node.block) {
      if (node.block.nodes.length === 0) {
        this.bufLine('', 1);
      } else {
        this.visit(node.block, node);
      }
    }
  },
  visitNamedBlock: function visitNamedBlock(block) {
    if (block.mode === 'replace') {
      this.bufLine('block ' + block.name);
    } else {
      this.bufLine(block.mode + ' ' + block.name);
    }
    return this.visitBlock(block);
  },
  visitBlock: function visitBlock(block, inline, parent) {
    var _this3 = this;

    if (block.yield) {
      this.bufLine('yield');
      return;
    }

    var originalNested = this.nested;
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
    var prevNode = parent || {};
    block.nodes.forEach(function (node, i) {
      _this3.visit(node, block, !i ? inline : prevNode.line === node.line);
      prevNode = node;
    });
    this.indents--;
    this.nested = originalNested;
  },
  visitMixinBlock: function visitMixinBlock(block) {
    this.bufLine('block');
  },
  visitDoctype: function visitDoctype(doctype) {
    var buf = 'doctype';
    if (doctype.val) {
      buf += ' ' + doctype.val;
    }
    this.bufLine(buf);
  },
  visitMixin: function visitMixin(mixin, inline, parent) {
    var attrs = mixin.attrs;
    // if there are attrs, `()` needed to disambiguate between args and attrs
    var args = mixin.args || attrs.length ? '(' + mixin.args + ')' : '';
    var block = mixin.block;
    var key = mixin.name;

    if (mixin.call) {
      var buf = '+' + key + args + this.attrs(attrs) + this.attributeBlocks(mixin.attributeBlocks);
      if (inline) {
        if (!this.nested) this.buffer('#[');
        this.buffer(buf);
        if (!this.nested) this.buffer(']');
      } else {
        this.bufLine(buf);
      }
      if (nodeInline && (nodes[0].type !== 'Code' || nodes.length !== 1)) this.buffer(' ');
      if (block && block.nodes.length) {
        var nodes = block.nodes;
        var nodeInline = nodes[0].line === mixin.line && !this.useColon(block, mixin);
        if (nodeInline && (nodes[0].type !== 'Code' || nodes.length !== 1)) this.buffer(' ');
        this.visit(block, mixin, nodeInline);
      }
    } else {
      this.bufLine('mixin ' + key + args);
      if (block) this.visit(block, mixin);
    }
  },
  visitTag: function visitTag(tag, inline, parent) {
    var name = tag.name,
        self = this;

    // attrs
    var attrs = this.attrs(tag.attrs);
    attrs += this.attributeBlocks(tag.attributeBlocks);

    var buf = '';

    // tag name
    if (tag.buffer) buf += '#{' + name + '}';else if (tag.selfClosing || name !== 'div' || attrs[0] !== '.' && attrs[0] !== '#') {
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
      var nodes = tag.block.nodes;
      var nodeInline = nodes[0].line === tag.line && !this.useColon(tag.block, tag);
      if (nodeInline && (nodes[0].type !== 'Code' || nodes.length !== 1)) this.buffer(' ');
      this.visit(tag.block, tag, nodeInline);
    }

    if (inline && !this.nested) this.buffer(']');
  },
  visitText: function visitText(text, inline) {
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
    var src = text.val.replace(/\\?#([[{])/g, '\\#$1');
    if (inline && !this.nested) {
      this.buffer(src);
    } else if (this.nested) {
      this.buffer('| ' + src);
    } else {
      this.bufLine('| ' + src);
    }
  },
  visitComment: function visitComment(comment) {
    var buf = '//';
    if (!comment.buffer) buf += '-';
    buf += comment.val;
    this.bufLine(buf);
  },
  visitBlockComment: function visitBlockComment(comment) {
    var buf = '//';
    if (!comment.buffer) buf += '-';
    if (comment.val) buf += comment.val;
    this.bufLine(buf);

    this.visitPipelessTextBlock(comment.block);
  },
  visitCode: function visitCode(code, inline, parent) {
    var parentBlock = parent && getBlock(parent);
    if (inline && parentBlock && parentBlock.nodes.length !== 1) {
      if (code.buffer) this.buffer((code.escape ? '#' : '!') + '{' + code.val + '}');else this.buffer('#[- ' + code.val + ']');
    } else {
      var buf = '';

      // operator
      if (code.buffer) {
        if (!code.escape) buf += '!';
        buf += '=';
      } else {
        buf += '-';
      }

      if (inline) this.buffer(buf);else this.bufLine(buf);

      // value
      if (code.val.indexOf('\n') === -1) {
        this.buffer(' ' + code.val);
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
  visitConditional: function visitConditional(cond) {
    var out = 'if ' + cond.test;
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
  visitWhile: function visitWhile(loop) {
    var test = loop.test;
    this.bufLine('while ' + test);
    this.visit(loop.block, loop);
  },
  visitEach: function visitEach(each) {
    this.bufLine('each ' + each.val + (each.key ? ', ' + each.key : '') + ' in ' + each.obj);
    this.visit(each.block, each);
    if (each.alternative) {
      this.bufLine('else');
      this.visit(each.alternative);
    }
  },
  visitRawInclude: function visitRawInclude(include) {
    this.bufLine('include');
    if (include.filter) {
      this.buffer(':' + include.filter + this.attrs(include.attrs));
    }
    this.buffer(' ');
    this.visit(include.file);
  },
  visitExtends: function visitExtends(node) {
    this.bufLine('extends ');
    this.visit(node.file);
  },
  visitFileReference: function visitFileReference(file) {
    this.buffer(file.path);
  },
  visitInclude: function visitInclude(include) {
    this.bufLine('include');
    if (include.filter) {
      this.buffer(':' + include.filter + this.attrs(include.attrs));
    }
    this.buffer(' ');
    this.visit(include.file);
    this.visit(include.block);
  },
  visitFilter: function visitFilter(filter, inline, parent) {
    var name = filter.name;

    var buf = ':' + name + this.attrs(filter.attrs);
    if (inline && !this.nested) this.buffer('#[');
    if (inline || this.nested) this.buffer(buf);else this.bufLine(buf);

    if (filter.block.nodes.length) {
      if (filter.block.nodes[0].type === 'Filter') {
        if (filter.block.nodes.length > 1) throw new Error('filter with more than one non-text nodes: ' + JSON.stringify(filter));
        var originalNested = this.nested;
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
  }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3B1Zy90by1wdWcvdXRpbHMvYXN0LmVzNiJdLCJuYW1lcyI6WyJyZXBlYXQiLCJyZXF1aXJlIiwiY29uc3RhbnRpbm9wbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29kZUdlbmVyYXRvciIsIm5vZGUiLCJvcHRpb25zIiwiYnVmIiwiaW5kZW50cyIsIm5lc3RlZCIsImlubGluZSIsInByb3RvdHlwZSIsImNvbXBpbGUiLCJ2aXNpdCIsImpvaW4iLCJpbmRlbnQiLCJhZGQiLCJpbmRlbnRDaGFyIiwidW5kZWZpbmVkIiwiYnVmZmVyIiwiY29udGVudCIsImxlbmd0aCIsImJ1ZkxpbmUiLCJwdXNoIiwicXVvdGUiLCJuYW1lIiwiYXR0ck91dCIsInByZWZlcnJlZFF1b3RlIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJhdHRycyIsInJlZ3VsYXJBdHRycyIsImNsYXNzZXMiLCJpZCIsImZvckVhY2giLCJjb25zdFZhbCIsInRvQ29uc3RhbnQiLCJhdHRyIiwidmFsIiwiZXgiLCJlc2NhcGVkIiwidGVzdCIsIm91dCIsImF0dHJpYnV0ZUJsb2NrcyIsInJlZHVjZSIsInByZXYiLCJjdXIiLCJ1c2VDb2xvbiIsImJsb2NrIiwicGFyZW50IiwicGFyZW50T2siLCJNaXhpbiIsImNhbGwiLCJJbmNsdWRlIiwiVGFnIiwiV2hlbiIsInR5cGUiLCJub2RlcyIsImJsb2NrT2siLCJDb2RlIiwiRmlsdGVyIiwiVGV4dCIsInVzZURvdCIsImxpbmVzIiwibGluZSIsIndvcmRzIiwiY29kZXNXaXRoT3duTGluZSIsInByZXZTdGFydExpbmUiLCJpIiwibmV4dCIsIm1hdGNoIiwidmlzaXRQaXBlbGVzc1RleHQiLCJub0VzY2FwZSIsInZpc2l0UGlwZWxlc3NUZXh0QmxvY2siLCJvcmlnSW5kZW50cyIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsImZpbGVuYW1lIiwiVHlwZUVycm9yIiwidmlzaXRDYXNlIiwiZXhwciIsInZpc2l0V2hlbiIsInZpc2l0TmFtZWRCbG9jayIsIm1vZGUiLCJ2aXNpdEJsb2NrIiwieWllbGQiLCJvcmlnaW5hbE5lc3RlZCIsInByZXZOb2RlIiwidmlzaXRNaXhpbkJsb2NrIiwidmlzaXREb2N0eXBlIiwiZG9jdHlwZSIsInZpc2l0TWl4aW4iLCJtaXhpbiIsImFyZ3MiLCJrZXkiLCJub2RlSW5saW5lIiwidmlzaXRUYWciLCJ0YWciLCJzZWxmIiwic2VsZkNsb3NpbmciLCJjb2RlIiwidmlzaXRDb2RlIiwidmlzaXRUZXh0IiwidGV4dCIsImlzSHRtbCIsInNyYyIsInZpc2l0Q29tbWVudCIsImNvbW1lbnQiLCJ2aXNpdEJsb2NrQ29tbWVudCIsInBhcmVudEJsb2NrIiwiZ2V0QmxvY2siLCJlc2NhcGUiLCJ2aXNpdENvbmRpdGlvbmFsIiwiY29uZCIsImNvbnNlcXVlbnQiLCJhbHRlcm5hdGUiLCJ2aXNpdFdoaWxlIiwibG9vcCIsInZpc2l0RWFjaCIsImVhY2giLCJvYmoiLCJhbHRlcm5hdGl2ZSIsInZpc2l0UmF3SW5jbHVkZSIsImluY2x1ZGUiLCJmaWx0ZXIiLCJmaWxlIiwidmlzaXRFeHRlbmRzIiwidmlzaXRGaWxlUmVmZXJlbmNlIiwicGF0aCIsInZpc2l0SW5jbHVkZSIsInZpc2l0RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxTQUFTQyxRQUFRLGVBQVIsQ0FBZjtBQUNBLElBQU1DLGlCQUFpQkQsUUFBUSxnQkFBUixDQUF2Qjs7QUFFQUUsT0FBT0MsT0FBUCxHQUFpQkMsYUFBakI7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3BDLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtFLEdBQUwsR0FBVyxFQUFYO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLENBQUMsQ0FBaEIsQ0FKb0MsQ0FJakI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBO0FBQ0E7QUFDQSxPQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNEOztBQUVETixjQUFjTyxTQUFkLEdBQTBCO0FBQ3hCQyxTQUR3QixxQkFDZDtBQUNSLFNBQUtDLEtBQUwsQ0FBVyxLQUFLUixJQUFoQjtBQUNBLFdBQU8sS0FBS0UsR0FBTCxDQUFTTyxJQUFULENBQWMsSUFBZCxDQUFQO0FBQ0QsR0FKdUI7QUFNeEJDLFFBTndCLGtCQU1qQkMsR0FOaUIsRUFNWjtBQUNWLFdBQU9qQixPQUNMLEtBQUtPLE9BQUwsQ0FBYVcsVUFEUixFQUVMLEtBQUtULE9BQUwsSUFBZ0JRLFFBQVFFLFNBQVIsR0FBb0JGLEdBQXBCLEdBQTBCLENBQTFDLENBRkssQ0FBUDtBQUlELEdBWHVCO0FBYXhCRyxRQWJ3QixrQkFhakJDLE9BYmlCLEVBYVI7QUFDZCxRQUFJQSxZQUFZRixTQUFoQixFQUEyQixLQUFLWCxHQUFMLENBQVMsS0FBS0EsR0FBTCxDQUFTYyxNQUFULEdBQWtCLENBQTNCLEtBQWlDRCxPQUFqQztBQUM1QixHQWZ1QjtBQWlCeEJFLFNBakJ3QixtQkFpQmhCRixPQWpCZ0IsRUFpQlBaLE9BakJPLEVBaUJFO0FBQ3hCLFFBQUlZLFlBQVlGLFNBQWhCLEVBQTJCRSxVQUFVLEVBQVY7QUFDM0IsU0FBS2IsR0FBTCxDQUFTZ0IsSUFBVCxDQUFjLEtBQUtSLE1BQUwsQ0FBWVAsT0FBWixJQUF1QlksT0FBckM7QUFDRCxHQXBCdUI7QUFzQnhCSSxPQXRCd0IsaUJBc0JsQkMsSUF0QmtCLEVBc0JaO0FBQ1YsUUFBSUMsVUFBVSxFQUFkO0FBQ0EsUUFBSSxLQUFLcEIsT0FBTCxDQUFhcUIsY0FBYixLQUFnQyxHQUFwQyxFQUF5QztBQUN2QyxVQUFJRixLQUFLRyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUFDLENBQXZCLElBQTRCSCxLQUFLRyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUFDLENBQXZELEVBQTBEO0FBQ3hERixtQkFBVyxHQUFYO0FBQ0FBLG1CQUFXRCxJQUFYO0FBQ0FDLG1CQUFXLEdBQVg7QUFDRCxPQUpELE1BSU87QUFDTEEsbUJBQVcsR0FBWDtBQUNBQSxtQkFBV0QsS0FBS0ksT0FBTCxDQUFhLElBQWIsRUFBbUIsS0FBbkIsQ0FBWDtBQUNBSCxtQkFBVyxHQUFYO0FBQ0Q7QUFDRixLQVZELE1BVU8sSUFBSUQsS0FBS0csT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBQyxDQUF2QixJQUE0QkgsS0FBS0csT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBQyxDQUF2RCxFQUEwRDtBQUMvREYsaUJBQVcsR0FBWDtBQUNBQSxpQkFBV0QsSUFBWDtBQUNBQyxpQkFBVyxHQUFYO0FBQ0QsS0FKTSxNQUlBO0FBQ0xBLGlCQUFXLEdBQVg7QUFDQUEsaUJBQVdELEtBQUtJLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CLENBQVg7QUFDQUgsaUJBQVcsR0FBWDtBQUNEO0FBQ0QsV0FBT0EsT0FBUDtBQUNELEdBNUN1QjtBQThDeEJJLE9BOUN3QixpQkE4Q2xCQSxNQTlDa0IsRUE4Q1g7QUFBQTs7QUFDWCxRQUFNQyxlQUFlLEVBQXJCO0FBQ0EsUUFBSUMsVUFBVSxFQUFkO0FBQ0EsUUFBSUMsV0FBSjtBQUNBSCxXQUFNSSxPQUFOLENBQWMsZ0JBQVE7QUFDcEIsVUFBSUMsV0FBVyxFQUFmO0FBQ0EsVUFBSTtBQUNGQSxtQkFBV2xDLGVBQWVtQyxVQUFmLENBQTBCQyxLQUFLQyxHQUEvQixDQUFYO0FBQ0QsT0FGRCxDQUVFLE9BQU9DLEVBQVAsRUFBVyxDQUFFOztBQUVmLFVBQ0VGLEtBQUtaLElBQUwsS0FBYyxPQUFkLElBQ0EsQ0FBQ1ksS0FBS0csT0FETixJQUVBTCxRQUZBLElBR0EsMkJBQTJCTSxJQUEzQixDQUFnQ04sUUFBaEMsQ0FKRixFQUtFO0FBQ0FILHlCQUFlRyxRQUFmO0FBQ0QsT0FQRCxNQU9PLElBQ0xFLEtBQUtaLElBQUwsS0FBYyxJQUFkLElBQ0EsQ0FBQ1EsRUFERCxJQUVBLENBQUNJLEtBQUtHLE9BRk4sSUFHQUwsUUFIQSxJQUlBLFdBQVdNLElBQVgsQ0FBZ0JOLFFBQWhCLENBTEssRUFNTDtBQUNBRixhQUFLRSxRQUFMO0FBQ0QsT0FSTSxNQVFBO0FBQ0wsWUFBSVQsVUFBVSxFQUFkOztBQUVBO0FBQ0EsWUFBSSx3QkFBd0JlLElBQXhCLENBQTZCSixLQUFLWixJQUFsQyxDQUFKLEVBQTZDO0FBQzNDQyxxQkFBV1csS0FBS1osSUFBaEI7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNQSxPQUFPWSxLQUFLWixJQUFMLENBQVVJLE9BQVYsQ0FBa0IsS0FBbEIsRUFBeUIsTUFBekIsQ0FBYjtBQUNBSCxxQkFBVyxNQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBWDtBQUNEOztBQUVELFlBQUksRUFBRSxPQUFPVSxRQUFQLEtBQW9CLFNBQXBCLElBQWlDQSxhQUFhLElBQWhELENBQUosRUFBMkQ7QUFDekQ7QUFDQSxjQUFJLENBQUNFLEtBQUtHLE9BQVYsRUFBbUJkLFdBQVcsR0FBWDtBQUNuQkEscUJBQVcsR0FBWDs7QUFFQTtBQUNBQSxxQkFBV1csS0FBS0MsR0FBaEI7QUFDRDs7QUFFRFAscUJBQWFSLElBQWIsQ0FBa0JHLE9BQWxCO0FBQ0Q7QUFDRixLQTNDRDs7QUE2Q0EsUUFBSWdCLE1BQU0sRUFBVjtBQUNBLFFBQUlULEVBQUosRUFBUVMsYUFBV1QsRUFBWDtBQUNSUyxXQUFPVixPQUFQO0FBQ0EsUUFBSUQsYUFBYVYsTUFBakIsRUFBeUJxQixhQUFXWCxhQUFhakIsSUFBYixDQUFrQixHQUFsQixDQUFYOztBQUV6QixXQUFPNEIsR0FBUDtBQUNELEdBckd1QjtBQXVHeEJDLGlCQXZHd0IsMkJBdUdSQSxnQkF2R1EsRUF1R1M7QUFDL0IsV0FBT0EsaUJBQWdCQyxNQUFoQixDQUNMLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLGFBQWtCRCxJQUFsQixvQkFBeUNDLEdBQXpDO0FBQUEsS0FESyxFQUVMLEVBRkssQ0FBUDtBQUlELEdBNUd1QjtBQThHeEJDLFVBOUd3QixvQkE4R2ZDLEtBOUdlLEVBOEdSQyxNQTlHUSxFQThHQTtBQUN0QixRQUFJLENBQUMsS0FBSzNDLE9BQUwsQ0FBYXlDLFFBQWxCLEVBQTRCLE9BQU8sS0FBUDs7QUFFNUIsUUFBTUcsV0FDSkQsVUFDQTtBQUNFRSxhQUFPRixVQUFVQSxPQUFPRyxJQUQxQjtBQUVFQyxlQUFTLElBRlg7QUFHRUMsV0FBSyxJQUhQO0FBSUVDLFlBQU07QUFKUixNQUtFTixPQUFPTyxJQUxULENBRkY7QUFRQSxRQUFNbkQsT0FBTzJDLE1BQU1TLEtBQU4sQ0FBWSxDQUFaLENBQWI7QUFDQSxRQUFNQyxVQUNKVixNQUFNUyxLQUFOLENBQVlwQyxNQUFaLEtBQXVCLENBQXZCLElBQ0E7QUFDRXNDLFlBQU0sSUFEUjtBQUVFQyxjQUFRLElBRlY7QUFHRVQsYUFBTzlDLEtBQUsrQyxJQUhkO0FBSUVFLFdBQUssSUFKUDtBQUtFTyxZQUFNO0FBTFIsTUFNRXhELEtBQUttRCxJQU5QLENBRkY7QUFTQSxXQUFPTixZQUFZRCxPQUFPRCxLQUFQLEtBQWlCQSxLQUE3QixJQUFzQ1UsT0FBN0M7QUFDRCxHQXBJdUI7OztBQXNJeEI7QUFDQUksUUF2SXdCLGtCQXVJakJkLEtBdklpQixFQXVJVkMsTUF2SVUsRUF1SUY7QUFDcEIsUUFBSSxDQUFDRCxNQUFNUyxLQUFOLENBQVlwQyxNQUFqQixFQUF5QixPQUFPLEtBQVA7O0FBRXpCO0FBQ0EsUUFBTTBDLFFBQ0pmLE1BQU1TLEtBQU4sQ0FBWVQsTUFBTVMsS0FBTixDQUFZcEMsTUFBWixHQUFxQixDQUFqQyxFQUFvQzJDLElBQXBDLEdBQTJDaEIsTUFBTVMsS0FBTixDQUFZLENBQVosRUFBZU8sSUFBMUQsR0FBaUUsQ0FEbkU7QUFFQSxRQUFJRCxVQUFVLENBQWQsRUFBaUIsT0FBTyxLQUFQOztBQUVqQjtBQUNBLFFBQUlFLFFBQVEsQ0FBWjtBQUNBO0FBQ0EsUUFBSUMsbUJBQW1CLENBQXZCO0FBQ0E7QUFDQSxRQUFJQyxnQkFBZ0IsS0FBcEI7O0FBRUEsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlwQixNQUFNUyxLQUFOLENBQVlwQyxNQUFoQyxFQUF3QytDLEdBQXhDLEVBQTZDO0FBQzNDLFVBQU0vRCxPQUFPMkMsTUFBTVMsS0FBTixDQUFZVyxDQUFaLENBQWI7QUFDQSxVQUFNdkIsT0FBT0csTUFBTVMsS0FBTixDQUFZVyxJQUFJLENBQWhCLEtBQXNCbkIsTUFBdEIsSUFBZ0MsRUFBRWUsTUFBTSxDQUFDLENBQVQsRUFBN0M7QUFDQSxVQUFNSyxPQUFPckIsTUFBTVMsS0FBTixDQUFZVyxDQUFaLENBQWI7O0FBRUEsVUFBSS9ELEtBQUttRCxJQUFMLEtBQWMsTUFBbEIsRUFBMEI7QUFDeEJTLGlCQUFTLENBQUM1RCxLQUFLaUMsR0FBTCxDQUFTZ0MsS0FBVCxDQUFlLGFBQWYsS0FBaUMsRUFBbEMsRUFBc0NqRCxNQUEvQztBQUNELE9BRkQsTUFFTyxJQUFJaEIsS0FBS21ELElBQUwsS0FBYyxNQUFkLElBQXdCbkQsS0FBS2MsTUFBN0IsSUFBdUMsQ0FBQ2QsS0FBSzJDLEtBQWpELEVBQXdEO0FBQzdELFlBQ0UsQ0FBQzNDLEtBQUsyRCxJQUFMLEdBQVluQixLQUFLbUIsSUFBakIsSUFDRW5CLEtBQUtXLElBQUwsS0FBYyxNQUFkLElBQXdCWCxLQUFLUCxHQUFMLEtBQWEsSUFEeEMsS0FFQTZCLGFBSEYsRUFJRTtBQUNBRDtBQUNEO0FBQ0YsT0FSTSxNQVFBO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7QUFDREMsc0JBQ0U5RCxLQUFLMkQsSUFBTCxHQUFZbkIsS0FBS21CLElBQWpCLElBQTBCbkIsS0FBS1csSUFBTCxLQUFjLE1BQWQsSUFBd0JYLEtBQUtQLEdBQUwsS0FBYSxJQURqRTtBQUVEOztBQUVELFdBQU8yQixRQUFRLENBQVIsSUFBYUMsbUJBQW1CSCxLQUFuQixHQUEyQixJQUEvQztBQUNELEdBaEx1QjtBQWtMeEJRLG1CQWxMd0IsNkJBa0xOakMsR0FsTE0sRUFrTERrQyxRQWxMQyxFQWtMUztBQUMvQixRQUFJakUsTUFBTStCLElBQUlULE9BQUosQ0FBWSxLQUFaLFNBQXdCLEtBQUtkLE1BQUwsRUFBeEIsQ0FBVjtBQUNBLFFBQUksQ0FBQ3lELFFBQUwsRUFBZWpFLE1BQU1BLElBQUlzQixPQUFKLENBQVksYUFBWixFQUEyQixPQUEzQixDQUFOO0FBQ2YsU0FBS1YsTUFBTCxDQUFZWixHQUFaO0FBQ0QsR0F0THVCO0FBd0x4QmtFLHdCQXhMd0Isa0NBd0xEekIsS0F4TEMsRUF3TE13QixRQXhMTixFQXdMZ0I7QUFBQTs7QUFDdEMsUUFBTUUsY0FBYyxLQUFLbEUsT0FBekI7QUFDQSxRQUFJLENBQUMsRUFBRSxLQUFLQSxPQUFaLEVBQXFCLEtBQUtBLE9BQUw7QUFDckIsU0FBS2MsT0FBTDtBQUNBMEIsVUFBTVMsS0FBTixDQUFZdkIsT0FBWixDQUFvQixnQkFBUTtBQUMxQixVQUFJN0IsS0FBS21ELElBQUwsS0FBYyxNQUFsQixFQUEwQjtBQUN4QixlQUFLZSxpQkFBTCxDQUF1QmxFLEtBQUtpQyxHQUE1QixFQUFpQ2tDLFFBQWpDO0FBQ0QsT0FGRCxNQUVPLElBQUluRSxLQUFLbUQsSUFBTCxLQUFjLE1BQWQsSUFBd0JuRCxLQUFLbUQsSUFBTCxLQUFjLEtBQTFDLEVBQWlEO0FBQ3RELGVBQUszQyxLQUFMLENBQVdSLElBQVgsRUFBaUIyQyxLQUFqQixFQUF3QixJQUF4QjtBQUNELE9BRk0sTUFFQTtBQUNMLGNBQU0sSUFBSTJCLEtBQUosdUJBQThCQyxLQUFLQyxTQUFMLENBQWV4RSxJQUFmLENBQTlCLENBQU47QUFDRDtBQUNGLEtBUkQ7QUFTQSxTQUFLRyxPQUFMLEdBQWVrRSxXQUFmO0FBQ0QsR0F0TXVCO0FBd014QjdELE9BeE13QixpQkF3TWxCUixJQXhNa0IsRUF3TVo0QyxNQXhNWSxFQXdNSnZDLE1BeE1JLEVBd01JO0FBQzFCLFFBQUksQ0FBQ0wsSUFBTCxFQUFXO0FBQ1QsVUFBSXlFLEdBQUo7QUFDQSxVQUFJN0IsTUFBSixFQUFZO0FBQ1Y2Qiw4QkFBb0I3QixPQUFPTyxJQUEzQixXQUFvQ1AsT0FBTzhCLFFBQVAsSUFDbEMsS0FERixVQUNXOUIsT0FBT2UsSUFEbEI7QUFFRCxPQUhELE1BR087QUFDTGMsY0FBTSxrQkFBTjtBQUNEO0FBQ0RBLHNCQUFjekUsSUFBZDtBQUNBLFlBQU0sSUFBSTJFLFNBQUosQ0FBY0YsR0FBZCxDQUFOO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLGVBQWF6RSxLQUFLbUQsSUFBbEIsQ0FBTCxFQUFnQztBQUM5QixVQUFJc0IsR0FBSjtBQUNBLFVBQUk3QixNQUFKLEVBQVk7QUFDVjZCLDhCQUFvQjdCLE9BQU9PLElBQTNCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xzQixjQUFNLGtCQUFOO0FBQ0Q7QUFDREEsYUFDRSxRQUFLekUsS0FBSzBFLFFBQUwsSUFBaUIsS0FBdEIsVUFBK0IxRSxLQUFLMkQsSUFBcEMsMkJBQ2UzRCxLQUFLbUQsSUFEcEIsc0RBREY7QUFJQSxZQUFNLElBQUl3QixTQUFKLENBQWNGLEdBQWQsQ0FBTjtBQUNEOztBQUVELG1CQUFhekUsS0FBS21ELElBQWxCLEVBQTBCbkQsSUFBMUIsRUFBZ0NLLE1BQWhDLEVBQXdDdUMsTUFBeEM7QUFDRCxHQXBPdUI7QUFzT3hCZ0MsV0F0T3dCLHFCQXNPZDVFLElBdE9jLEVBc09SO0FBQ2QsU0FBS2lCLE9BQUwsV0FBcUJqQixLQUFLNkUsSUFBMUI7QUFDQSxTQUFLckUsS0FBTCxDQUFXUixLQUFLMkMsS0FBaEIsRUFBdUIzQyxJQUF2QjtBQUNELEdBek91QjtBQTJPeEI4RSxXQTNPd0IscUJBMk9kOUUsSUEzT2MsRUEyT1I7QUFDZCxRQUFJQSxLQUFLNkUsSUFBTCxJQUFhLFNBQWpCLEVBQTRCO0FBQzFCLFdBQUs1RCxPQUFMLENBQWEsU0FBYjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtBLE9BQUwsV0FBcUJqQixLQUFLNkUsSUFBMUI7QUFDRDtBQUNELFFBQUk3RSxLQUFLMkMsS0FBVCxFQUFnQjtBQUNkLFVBQUkzQyxLQUFLMkMsS0FBTCxDQUFXUyxLQUFYLENBQWlCcEMsTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakMsYUFBS0MsT0FBTCxDQUFhLEVBQWIsRUFBaUIsQ0FBakI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLVCxLQUFMLENBQVdSLEtBQUsyQyxLQUFoQixFQUF1QjNDLElBQXZCO0FBQ0Q7QUFDRjtBQUNGLEdBeFB1QjtBQTBQeEIrRSxpQkExUHdCLDJCQTBQUnBDLEtBMVBRLEVBMFBEO0FBQ3JCLFFBQUlBLE1BQU1xQyxJQUFOLEtBQWUsU0FBbkIsRUFBOEI7QUFDNUIsV0FBSy9ELE9BQUwsWUFBc0IwQixNQUFNdkIsSUFBNUI7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLSCxPQUFMLENBQWdCMEIsTUFBTXFDLElBQXRCLFNBQThCckMsTUFBTXZCLElBQXBDO0FBQ0Q7QUFDRCxXQUFPLEtBQUs2RCxVQUFMLENBQWdCdEMsS0FBaEIsQ0FBUDtBQUNELEdBalF1QjtBQW1ReEJzQyxZQW5Rd0Isc0JBbVFidEMsS0FuUWEsRUFtUU50QyxNQW5RTSxFQW1RRXVDLE1BblFGLEVBbVFVO0FBQUE7O0FBQ2hDLFFBQUlELE1BQU11QyxLQUFWLEVBQWlCO0FBQ2YsV0FBS2pFLE9BQUwsQ0FBYSxPQUFiO0FBQ0E7QUFDRDs7QUFFRCxRQUFNa0UsaUJBQWlCLEtBQUsvRSxNQUE1QjtBQUNBLFFBQUksS0FBS3FELE1BQUwsQ0FBWWQsS0FBWixFQUFtQkMsTUFBbkIsQ0FBSixFQUFnQztBQUM5QixVQUFJQSxXQUFXQSxPQUFPTyxJQUFQLEtBQWdCLEtBQWhCLElBQXlCUCxPQUFPTyxJQUFQLEtBQWdCLE9BQXBELENBQUosRUFBa0U7QUFDaEUsYUFBS3JDLE1BQUwsQ0FBWSxHQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0csT0FBTCxDQUFhLEdBQWI7QUFDRDtBQUNELGFBQU8sS0FBS21ELHNCQUFMLENBQTRCekIsS0FBNUIsQ0FBUDtBQUNELEtBUEQsTUFPTyxJQUFJLEtBQUtELFFBQUwsQ0FBY0MsS0FBZCxFQUFxQkMsTUFBckIsQ0FBSixFQUFrQztBQUN2QyxXQUFLOUIsTUFBTCxDQUFZLElBQVo7QUFDQSxXQUFLVixNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUtJLEtBQUwsQ0FBV21DLE1BQU1TLEtBQU4sQ0FBWSxDQUFaLENBQVgsRUFBMkJULEtBQTNCLEVBQWtDLElBQWxDO0FBQ0EsV0FBS3ZDLE1BQUwsR0FBYytFLGNBQWQ7QUFDQTtBQUNEOztBQUVELFNBQUsvRSxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELE9BQUw7QUFDQSxRQUFJaUYsV0FBV3hDLFVBQVUsRUFBekI7QUFDQUQsVUFBTVMsS0FBTixDQUFZdkIsT0FBWixDQUFvQixVQUFDN0IsSUFBRCxFQUFPK0QsQ0FBUCxFQUFhO0FBQy9CLGFBQUt2RCxLQUFMLENBQVdSLElBQVgsRUFBaUIyQyxLQUFqQixFQUF3QixDQUFDb0IsQ0FBRCxHQUFLMUQsTUFBTCxHQUFjK0UsU0FBU3pCLElBQVQsS0FBa0IzRCxLQUFLMkQsSUFBN0Q7QUFDQXlCLGlCQUFXcEYsSUFBWDtBQUNELEtBSEQ7QUFJQSxTQUFLRyxPQUFMO0FBQ0EsU0FBS0MsTUFBTCxHQUFjK0UsY0FBZDtBQUNELEdBbFN1QjtBQW9TeEJFLGlCQXBTd0IsMkJBb1NSMUMsS0FwU1EsRUFvU0Q7QUFDckIsU0FBSzFCLE9BQUwsQ0FBYSxPQUFiO0FBQ0QsR0F0U3VCO0FBd1N4QnFFLGNBeFN3Qix3QkF3U1hDLE9BeFNXLEVBd1NGO0FBQ3BCLFFBQUlyRixNQUFNLFNBQVY7QUFDQSxRQUFJcUYsUUFBUXRELEdBQVosRUFBaUI7QUFDZi9CLG1CQUFXcUYsUUFBUXRELEdBQW5CO0FBQ0Q7QUFDRCxTQUFLaEIsT0FBTCxDQUFhZixHQUFiO0FBQ0QsR0E5U3VCO0FBZ1R4QnNGLFlBaFR3QixzQkFnVGJDLEtBaFRhLEVBZ1ROcEYsTUFoVE0sRUFnVEV1QyxNQWhURixFQWdUVTtBQUNoQyxRQUFNbkIsUUFBUWdFLE1BQU1oRSxLQUFwQjtBQUNBO0FBQ0EsUUFBTWlFLE9BQU9ELE1BQU1DLElBQU4sSUFBY2pFLE1BQU1ULE1BQXBCLFNBQWlDeUUsTUFBTUMsSUFBdkMsU0FBaUQsRUFBOUQ7QUFDQSxRQUFNL0MsUUFBUThDLE1BQU05QyxLQUFwQjtBQUNBLFFBQU1nRCxNQUFNRixNQUFNckUsSUFBbEI7O0FBRUEsUUFBSXFFLE1BQU0xQyxJQUFWLEVBQWdCO0FBQ2QsVUFBTTdDLFlBQVV5RixHQUFWLEdBQWdCRCxJQUFoQixHQUF1QixLQUFLakUsS0FBTCxDQUFXQSxLQUFYLENBQXZCLEdBQTJDLEtBQUthLGVBQUwsQ0FDL0NtRCxNQUFNbkQsZUFEeUMsQ0FBakQ7QUFHQSxVQUFJakMsTUFBSixFQUFZO0FBQ1YsWUFBSSxDQUFDLEtBQUtELE1BQVYsRUFBa0IsS0FBS1UsTUFBTCxDQUFZLElBQVo7QUFDbEIsYUFBS0EsTUFBTCxDQUFZWixHQUFaO0FBQ0EsWUFBSSxDQUFDLEtBQUtFLE1BQVYsRUFBa0IsS0FBS1UsTUFBTCxDQUFZLEdBQVo7QUFDbkIsT0FKRCxNQUlPO0FBQ0wsYUFBS0csT0FBTCxDQUFhZixHQUFiO0FBQ0Q7QUFDRCxVQUFJMEYsZUFBZXhDLE1BQU0sQ0FBTixFQUFTRCxJQUFULEtBQWtCLE1BQWxCLElBQTRCQyxNQUFNcEMsTUFBTixLQUFpQixDQUE1RCxDQUFKLEVBQ0UsS0FBS0YsTUFBTCxDQUFZLEdBQVo7QUFDRixVQUFJNkIsU0FBU0EsTUFBTVMsS0FBTixDQUFZcEMsTUFBekIsRUFBaUM7QUFDL0IsWUFBSW9DLFFBQVFULE1BQU1TLEtBQWxCO0FBQ0EsWUFBSXdDLGFBQ0Z4QyxNQUFNLENBQU4sRUFBU08sSUFBVCxLQUFrQjhCLE1BQU05QixJQUF4QixJQUFnQyxDQUFDLEtBQUtqQixRQUFMLENBQWNDLEtBQWQsRUFBcUI4QyxLQUFyQixDQURuQztBQUVBLFlBQUlHLGVBQWV4QyxNQUFNLENBQU4sRUFBU0QsSUFBVCxLQUFrQixNQUFsQixJQUE0QkMsTUFBTXBDLE1BQU4sS0FBaUIsQ0FBNUQsQ0FBSixFQUNFLEtBQUtGLE1BQUwsQ0FBWSxHQUFaO0FBQ0YsYUFBS04sS0FBTCxDQUFXbUMsS0FBWCxFQUFrQjhDLEtBQWxCLEVBQXlCRyxVQUF6QjtBQUNEO0FBQ0YsS0FyQkQsTUFxQk87QUFDTCxXQUFLM0UsT0FBTCxZQUFzQjBFLEdBQXRCLEdBQTRCRCxJQUE1QjtBQUNBLFVBQUkvQyxLQUFKLEVBQVcsS0FBS25DLEtBQUwsQ0FBV21DLEtBQVgsRUFBa0I4QyxLQUFsQjtBQUNaO0FBQ0YsR0FoVnVCO0FBa1Z4QkksVUFsVndCLG9CQWtWZkMsR0FsVmUsRUFrVlZ6RixNQWxWVSxFQWtWRnVDLE1BbFZFLEVBa1ZNO0FBQzVCLFFBQUl4QixPQUFPMEUsSUFBSTFFLElBQWY7QUFBQSxRQUNFMkUsT0FBTyxJQURUOztBQUdBO0FBQ0EsUUFBSXRFLFFBQVEsS0FBS0EsS0FBTCxDQUFXcUUsSUFBSXJFLEtBQWYsQ0FBWjtBQUNBQSxhQUFTLEtBQUthLGVBQUwsQ0FBcUJ3RCxJQUFJeEQsZUFBekIsQ0FBVDs7QUFFQSxRQUFJcEMsTUFBTSxFQUFWOztBQUVBO0FBQ0EsUUFBSTRGLElBQUloRixNQUFSLEVBQWdCWixjQUFZa0IsSUFBWixPQUFoQixLQUNLLElBQ0gwRSxJQUFJRSxXQUFKLElBQ0E1RSxTQUFTLEtBRFQsSUFFQ0ssTUFBTSxDQUFOLE1BQWEsR0FBYixJQUFvQkEsTUFBTSxDQUFOLE1BQWEsR0FIL0IsRUFJSDtBQUNBdkIsYUFBT2tCLElBQVA7QUFDRDs7QUFFRDtBQUNBLFFBQUkwRSxJQUFJRSxXQUFSLEVBQXFCOUYsT0FBTyxHQUFQOztBQUVyQkEsV0FBT3VCLEtBQVA7O0FBRUE7QUFDQSxRQUFJcEIsTUFBSixFQUFZO0FBQ1YsVUFBSSxDQUFDLEtBQUtELE1BQVYsRUFBa0IsS0FBS1UsTUFBTCxDQUFZLElBQVo7QUFDbEIsV0FBS0EsTUFBTCxDQUFZWixHQUFaO0FBQ0QsS0FIRCxNQUdPLEtBQUtlLE9BQUwsQ0FBYWYsR0FBYjs7QUFFUDtBQUNBLFFBQUk0RixJQUFJRyxJQUFSLEVBQWMsS0FBS0MsU0FBTCxDQUFlSixJQUFJRyxJQUFuQixFQUF5QixJQUF6Qjs7QUFFZDtBQUNBLFFBQUlILElBQUluRCxLQUFKLENBQVVTLEtBQVYsQ0FBZ0JwQyxNQUFwQixFQUE0QjtBQUMxQixVQUFNb0MsUUFBUTBDLElBQUluRCxLQUFKLENBQVVTLEtBQXhCO0FBQ0EsVUFBTXdDLGFBQ0p4QyxNQUFNLENBQU4sRUFBU08sSUFBVCxLQUFrQm1DLElBQUluQyxJQUF0QixJQUE4QixDQUFDLEtBQUtqQixRQUFMLENBQWNvRCxJQUFJbkQsS0FBbEIsRUFBeUJtRCxHQUF6QixDQURqQztBQUVBLFVBQUlGLGVBQWV4QyxNQUFNLENBQU4sRUFBU0QsSUFBVCxLQUFrQixNQUFsQixJQUE0QkMsTUFBTXBDLE1BQU4sS0FBaUIsQ0FBNUQsQ0FBSixFQUNFLEtBQUtGLE1BQUwsQ0FBWSxHQUFaO0FBQ0YsV0FBS04sS0FBTCxDQUFXc0YsSUFBSW5ELEtBQWYsRUFBc0JtRCxHQUF0QixFQUEyQkYsVUFBM0I7QUFDRDs7QUFFRCxRQUFJdkYsVUFBVSxDQUFDLEtBQUtELE1BQXBCLEVBQTRCLEtBQUtVLE1BQUwsQ0FBWSxHQUFaO0FBQzdCLEdBL1h1QjtBQWlZeEJxRixXQWpZd0IscUJBaVlkQyxJQWpZYyxFQWlZUi9GLE1BallRLEVBaVlBO0FBQ3RCLFFBQUksQ0FBQytGLEtBQUtuRSxHQUFWLEVBQWU7O0FBRWYsUUFBSW1FLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixVQUFJLENBQUNoRyxNQUFELElBQVcsQ0FBQyxLQUFLRCxNQUFyQixFQUE2QixLQUFLYSxPQUFMO0FBQzdCLFdBQUtpRCxpQkFBTCxDQUF1QmtDLEtBQUtuRSxHQUE1QjtBQUNBO0FBQ0QsS0FKRCxNQUlPLElBQUltRSxLQUFLbkUsR0FBTCxLQUFhLElBQWpCLEVBQXVCO0FBQzVCLFVBQUk1QixVQUFVLEtBQUtELE1BQW5CLEVBQTJCO0FBQ3pCLGNBQU0sSUFBSWtFLEtBQUosQ0FBVSwrQkFBVixDQUFOO0FBQ0Q7QUFDRCxXQUFLckQsT0FBTCxDQUFhLElBQWI7QUFDQTtBQUNEO0FBQ0QsUUFBTXFGLE1BQU1GLEtBQUtuRSxHQUFMLENBQVNULE9BQVQsQ0FBaUIsYUFBakIsRUFBZ0MsT0FBaEMsQ0FBWjtBQUNBLFFBQUluQixVQUFVLENBQUMsS0FBS0QsTUFBcEIsRUFBNEI7QUFDMUIsV0FBS1UsTUFBTCxDQUFZd0YsR0FBWjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUtsRyxNQUFULEVBQWlCO0FBQ3RCLFdBQUtVLE1BQUwsUUFBaUJ3RixHQUFqQjtBQUNELEtBRk0sTUFFQTtBQUNMLFdBQUtyRixPQUFMLFFBQWtCcUYsR0FBbEI7QUFDRDtBQUNGLEdBdlp1QjtBQXlaeEJDLGNBelp3Qix3QkF5WlhDLE9BelpXLEVBeVpGO0FBQ3BCLFFBQUl0RyxNQUFNLElBQVY7QUFDQSxRQUFJLENBQUNzRyxRQUFRMUYsTUFBYixFQUFxQlosT0FBTyxHQUFQO0FBQ3JCQSxXQUFPc0csUUFBUXZFLEdBQWY7QUFDQSxTQUFLaEIsT0FBTCxDQUFhZixHQUFiO0FBQ0QsR0E5WnVCO0FBZ2F4QnVHLG1CQWhhd0IsNkJBZ2FORCxPQWhhTSxFQWdhRztBQUN6QixRQUFJdEcsTUFBTSxJQUFWO0FBQ0EsUUFBSSxDQUFDc0csUUFBUTFGLE1BQWIsRUFBcUJaLE9BQU8sR0FBUDtBQUNyQixRQUFJc0csUUFBUXZFLEdBQVosRUFBaUIvQixPQUFPc0csUUFBUXZFLEdBQWY7QUFDakIsU0FBS2hCLE9BQUwsQ0FBYWYsR0FBYjs7QUFFQSxTQUFLa0Usc0JBQUwsQ0FBNEJvQyxRQUFRN0QsS0FBcEM7QUFDRCxHQXZhdUI7QUF5YXhCdUQsV0F6YXdCLHFCQXlhZEQsSUF6YWMsRUF5YVI1RixNQXphUSxFQXlhQXVDLE1BemFBLEVBeWFRO0FBQzlCLFFBQU04RCxjQUFjOUQsVUFBVStELFNBQVMvRCxNQUFULENBQTlCO0FBQ0EsUUFBSXZDLFVBQVVxRyxXQUFWLElBQXlCQSxZQUFZdEQsS0FBWixDQUFrQnBDLE1BQWxCLEtBQTZCLENBQTFELEVBQTZEO0FBQzNELFVBQUlpRixLQUFLbkYsTUFBVCxFQUFpQixLQUFLQSxNQUFMLEVBQWVtRixLQUFLVyxNQUFMLEdBQWMsR0FBZCxHQUFvQixHQUFuQyxVQUEwQ1gsS0FBS2hFLEdBQS9DLFFBQWpCLEtBQ0ssS0FBS25CLE1BQUwsVUFBbUJtRixLQUFLaEUsR0FBeEI7QUFDTixLQUhELE1BR087QUFDTCxVQUFJL0IsTUFBTSxFQUFWOztBQUVBO0FBQ0EsVUFBSStGLEtBQUtuRixNQUFULEVBQWlCO0FBQ2YsWUFBSSxDQUFDbUYsS0FBS1csTUFBVixFQUFrQjFHLE9BQU8sR0FBUDtBQUNsQkEsZUFBTyxHQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0xBLGVBQU8sR0FBUDtBQUNEOztBQUVELFVBQUlHLE1BQUosRUFBWSxLQUFLUyxNQUFMLENBQVlaLEdBQVosRUFBWixLQUNLLEtBQUtlLE9BQUwsQ0FBYWYsR0FBYjs7QUFFTDtBQUNBLFVBQUkrRixLQUFLaEUsR0FBTCxDQUFTVixPQUFULENBQWlCLElBQWpCLE1BQTJCLENBQUMsQ0FBaEMsRUFBbUM7QUFDakMsYUFBS1QsTUFBTCxPQUFnQm1GLEtBQUtoRSxHQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUs5QixPQUFMO0FBQ0EsYUFBS2MsT0FBTDtBQUNBLGFBQUtpRCxpQkFBTCxDQUF1QitCLEtBQUtoRSxHQUE1QjtBQUNBLGFBQUs5QixPQUFMO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJOEYsS0FBS3RELEtBQVQsRUFBZ0IsS0FBS25DLEtBQUwsQ0FBV3lGLEtBQUt0RCxLQUFoQixFQUF1QnNELElBQXZCO0FBQ2pCO0FBQ0YsR0F6Y3VCO0FBMmN4Qlksa0JBM2N3Qiw0QkEyY1BDLElBM2NPLEVBMmNEO0FBQ3JCLFFBQU16RSxjQUFZeUUsS0FBSzFFLElBQXZCO0FBQ0EsU0FBS25CLE9BQUwsQ0FBYW9CLEdBQWI7O0FBRUEsU0FBSzdCLEtBQUwsQ0FBV3NHLEtBQUtDLFVBQWhCLEVBQTRCRCxJQUE1Qjs7QUFFQSxRQUFJQSxLQUFLRSxTQUFULEVBQW9CO0FBQ2xCLFVBQUlGLEtBQUtFLFNBQUwsQ0FBZTdELElBQWYsS0FBd0IsYUFBNUIsRUFBMkM7QUFDekMsYUFBS2xDLE9BQUwsQ0FBYSxPQUFiO0FBQ0EsYUFBSzRGLGdCQUFMLENBQXNCQyxLQUFLRSxTQUEzQixFQUFzQyxJQUF0QztBQUNELE9BSEQsTUFHTztBQUNMLGFBQUsvRixPQUFMLENBQWEsTUFBYjtBQUNBLGFBQUtULEtBQUwsQ0FBV3NHLEtBQUtFLFNBQWhCLEVBQTJCRixJQUEzQjtBQUNEO0FBQ0Y7QUFDRixHQTFkdUI7QUE0ZHhCRyxZQTVkd0Isc0JBNGRiQyxJQTVkYSxFQTRkUDtBQUNmLFFBQU05RSxPQUFPOEUsS0FBSzlFLElBQWxCO0FBQ0EsU0FBS25CLE9BQUwsWUFBc0JtQixJQUF0QjtBQUNBLFNBQUs1QixLQUFMLENBQVcwRyxLQUFLdkUsS0FBaEIsRUFBdUJ1RSxJQUF2QjtBQUNELEdBaGV1QjtBQWtleEJDLFdBbGV3QixxQkFrZWRDLElBbGVjLEVBa2VSO0FBQ2QsU0FBS25HLE9BQUwsV0FDVW1HLEtBQUtuRixHQURmLElBQ3FCbUYsS0FBS3pCLEdBQUwsVUFBZ0J5QixLQUFLekIsR0FBckIsR0FBNkIsRUFEbEQsYUFDMkR5QixLQUFLQyxHQURoRTtBQUdBLFNBQUs3RyxLQUFMLENBQVc0RyxLQUFLekUsS0FBaEIsRUFBdUJ5RSxJQUF2QjtBQUNBLFFBQUlBLEtBQUtFLFdBQVQsRUFBc0I7QUFDcEIsV0FBS3JHLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsV0FBS1QsS0FBTCxDQUFXNEcsS0FBS0UsV0FBaEI7QUFDRDtBQUNGLEdBM2V1QjtBQTRleEJDLGlCQTVld0IsMkJBNGVSQyxPQTVlUSxFQTRlQztBQUN2QixTQUFLdkcsT0FBTCxDQUFhLFNBQWI7QUFDQSxRQUFJdUcsUUFBUUMsTUFBWixFQUFvQjtBQUNsQixXQUFLM0csTUFBTCxPQUFrQjBHLFFBQVFDLE1BQTFCLEdBQXFDLEtBQUtoRyxLQUFMLENBQVcrRixRQUFRL0YsS0FBbkIsQ0FBckM7QUFDRDtBQUNELFNBQUtYLE1BQUwsQ0FBWSxHQUFaO0FBQ0EsU0FBS04sS0FBTCxDQUFXZ0gsUUFBUUUsSUFBbkI7QUFDRCxHQW5mdUI7QUFvZnhCQyxjQXBmd0Isd0JBb2ZYM0gsSUFwZlcsRUFvZkw7QUFDakIsU0FBS2lCLE9BQUwsQ0FBYSxVQUFiO0FBQ0EsU0FBS1QsS0FBTCxDQUFXUixLQUFLMEgsSUFBaEI7QUFDRCxHQXZmdUI7QUF5ZnhCRSxvQkF6ZndCLDhCQXlmTEYsSUF6ZkssRUF5ZkM7QUFDdkIsU0FBSzVHLE1BQUwsQ0FBWTRHLEtBQUtHLElBQWpCO0FBQ0QsR0EzZnVCO0FBNmZ4QkMsY0E3ZndCLHdCQTZmWE4sT0E3ZlcsRUE2ZkY7QUFDcEIsU0FBS3ZHLE9BQUwsQ0FBYSxTQUFiO0FBQ0EsUUFBSXVHLFFBQVFDLE1BQVosRUFBb0I7QUFDbEIsV0FBSzNHLE1BQUwsT0FBZ0IwRyxRQUFRQyxNQUF4QixHQUFpQyxLQUFLaEcsS0FBTCxDQUFXK0YsUUFBUS9GLEtBQW5CLENBQWpDO0FBQ0Q7QUFDRCxTQUFLWCxNQUFMLENBQVksR0FBWjtBQUNBLFNBQUtOLEtBQUwsQ0FBV2dILFFBQVFFLElBQW5CO0FBQ0EsU0FBS2xILEtBQUwsQ0FBV2dILFFBQVE3RSxLQUFuQjtBQUNELEdBcmdCdUI7QUF1Z0J4Qm9GLGFBdmdCd0IsdUJBdWdCWk4sTUF2Z0JZLEVBdWdCSnBILE1BdmdCSSxFQXVnQkl1QyxNQXZnQkosRUF1Z0JZO0FBQ2xDLFFBQU14QixPQUFPcUcsT0FBT3JHLElBQXBCOztBQUVBLFFBQU1sQixZQUFVa0IsSUFBVixHQUFpQixLQUFLSyxLQUFMLENBQVdnRyxPQUFPaEcsS0FBbEIsQ0FBdkI7QUFDQSxRQUFJcEIsVUFBVSxDQUFDLEtBQUtELE1BQXBCLEVBQTRCLEtBQUtVLE1BQUwsQ0FBWSxJQUFaO0FBQzVCLFFBQUlULFVBQVUsS0FBS0QsTUFBbkIsRUFBMkIsS0FBS1UsTUFBTCxDQUFZWixHQUFaLEVBQTNCLEtBQ0ssS0FBS2UsT0FBTCxDQUFhZixHQUFiOztBQUVMLFFBQUl1SCxPQUFPOUUsS0FBUCxDQUFhUyxLQUFiLENBQW1CcEMsTUFBdkIsRUFBK0I7QUFDN0IsVUFBSXlHLE9BQU85RSxLQUFQLENBQWFTLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JELElBQXRCLEtBQStCLFFBQW5DLEVBQTZDO0FBQzNDLFlBQUlzRSxPQUFPOUUsS0FBUCxDQUFhUyxLQUFiLENBQW1CcEMsTUFBbkIsR0FBNEIsQ0FBaEMsRUFDRSxNQUFNLElBQUlzRCxLQUFKLGdEQUN5Q0MsS0FBS0MsU0FBTCxDQUMzQ2lELE1BRDJDLENBRHpDLENBQU47QUFLRixZQUFNdEMsaUJBQWlCLEtBQUsvRSxNQUE1QjtBQUNBLGFBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBSzJILFdBQUwsQ0FBaUJOLE9BQU85RSxLQUFQLENBQWFTLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBakIsRUFBd0MvQyxNQUF4QyxFQUFnRG9ILE1BQWhEO0FBQ0EsYUFBS3JILE1BQUwsR0FBYytFLGNBQWQ7QUFDRCxPQVhELE1BV08sSUFBSTlFLFVBQVUsQ0FBQyxLQUFLRCxNQUFwQixFQUE0QjtBQUNqQyxZQUFJcUgsT0FBTzlFLEtBQVAsQ0FBYVMsS0FBYixDQUFtQixDQUFuQixFQUFzQkQsSUFBdEIsS0FBK0IsTUFBbkMsRUFBMkMsS0FBS3JDLE1BQUwsQ0FBWSxHQUFaO0FBQzNDLGFBQUtOLEtBQUwsQ0FBV2lILE9BQU85RSxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUN2QyxNQUFqQztBQUNELE9BSE0sTUFHQTtBQUNMLGFBQUsrRCxzQkFBTCxDQUE0QnFELE9BQU85RSxLQUFuQyxFQUEwQyxJQUExQztBQUNEO0FBQ0Y7O0FBRUQsUUFBSXRDLFVBQVUsQ0FBQyxLQUFLRCxNQUFwQixFQUE0QixLQUFLVSxNQUFMLENBQVksR0FBWjtBQUM3QjtBQXBpQnVCLENBQTFCOztBQXVpQkEsU0FBUzZGLFFBQVQsQ0FBa0IzRyxJQUFsQixFQUF3QjtBQUN0QixVQUFRQSxLQUFLbUQsSUFBYjtBQUNFLFNBQUssT0FBTDtBQUNBLFNBQUssWUFBTDtBQUNFLGFBQU9uRCxJQUFQOztBQUVGLFNBQUssY0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssT0FBTDtBQUNFLGFBQU9BLEtBQUsyQyxLQUFaOztBQUVGLFNBQUssYUFBTDtBQUNFLGFBQU8zQyxLQUFLK0csVUFBWjs7QUFFRixTQUFLLFNBQUw7QUFDQSxTQUFLLFNBQUw7QUFDQSxTQUFLLFNBQUw7QUFDQSxTQUFLLGVBQUw7QUFDQSxTQUFLLFNBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQTtBQUNFLFlBQU0sSUFBSXpDLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBMUJKO0FBNEJEIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL3B1Zy90by1wdWcvdXRpbHMvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xuY29uc3QgY29uc3RhbnRpbm9wbGUgPSByZXF1aXJlKCdjb25zdGFudGlub3BsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvZGVHZW5lcmF0b3I7XG5cbmZ1bmN0aW9uIENvZGVHZW5lcmF0b3Iobm9kZSwgb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLm5vZGUgPSBub2RlO1xuICB0aGlzLmJ1ZiA9IFtdO1xuICB0aGlzLmluZGVudHMgPSAtMTsgLy8gLTEgdG8gY291bnRlciB0aGUgcm9vdC1sZXZlbCBCbG9ja1xuICAvLyBJZiB0aGUgY3VycmVudCBub2RlIGlzIGEgbmVzdGVkIG5vZGUgKHRocm91Z2ggdGhlIGJsb2NrIGV4cGFuc2lvbiBzeW50YXhcbiAgLy8gKGBwOiBzdHJvbmdgKSBvciB3aXRoIG5lc3RlZCBmaWx0ZXJzIGA6dWdsaWZ5LWpzOmJhYmVsYCkuIFRoaXMgcHJvcGVydHlcbiAgLy8gbWFrZXMgdGhlIHZpc2l0KiBtZXRob2RzIGNvbnRpbnVlIG9uIHRoZSBwcmV2aW91cyBsaW5lIGluc3RlYWQgb2ZcbiAgLy8gc3RhcnRpbmcgYSBuZXcgbGluZS5cbiAgdGhpcy5uZXN0ZWQgPSBmYWxzZTtcbiAgLy8gVGhpcyBwcm9wZXJ0eSBkaXJlY3RzIHRoZSBjb2RlIGdlbmVyYXRvciB0byBjb250aW51ZSBvbiB0aGUgcHJldmlvdXMgbGluZVxuICAvLyBhbmQgdXNlIGlubGluZSBpbnRlcnBvbGF0aW9uIHRva2VucyAoYCN7fWAgYW5kIGAjW11gKSBpZiBwb3NzaWJsZS5cbiAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbn1cblxuQ29kZUdlbmVyYXRvci5wcm90b3R5cGUgPSB7XG4gIGNvbXBpbGUoKSB7XG4gICAgdGhpcy52aXNpdCh0aGlzLm5vZGUpO1xuICAgIHJldHVybiB0aGlzLmJ1Zi5qb2luKCdcXG4nKTtcbiAgfSxcblxuICBpbmRlbnQoYWRkKSB7XG4gICAgcmV0dXJuIHJlcGVhdChcbiAgICAgIHRoaXMub3B0aW9ucy5pbmRlbnRDaGFyLFxuICAgICAgdGhpcy5pbmRlbnRzICsgKGFkZCAhPT0gdW5kZWZpbmVkID8gYWRkIDogMCksXG4gICAgKTtcbiAgfSxcblxuICBidWZmZXIoY29udGVudCkge1xuICAgIGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHRoaXMuYnVmW3RoaXMuYnVmLmxlbmd0aCAtIDFdICs9IGNvbnRlbnQ7XG4gIH0sXG5cbiAgYnVmTGluZShjb250ZW50LCBpbmRlbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkgY29udGVudCA9ICcnO1xuICAgIHRoaXMuYnVmLnB1c2godGhpcy5pbmRlbnQoaW5kZW50cykgKyBjb250ZW50KTtcbiAgfSxcblxuICBxdW90ZShuYW1lKSB7XG4gICAgbGV0IGF0dHJPdXQgPSAnJztcbiAgICBpZiAodGhpcy5vcHRpb25zLnByZWZlcnJlZFF1b3RlID09PSBcIidcIikge1xuICAgICAgaWYgKG5hbWUuaW5kZXhPZihcIidcIikgIT09IC0xICYmIG5hbWUuaW5kZXhPZignXCInKSA9PT0gLTEpIHtcbiAgICAgICAgYXR0ck91dCArPSAnXCInO1xuICAgICAgICBhdHRyT3V0ICs9IG5hbWU7XG4gICAgICAgIGF0dHJPdXQgKz0gJ1wiJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJPdXQgKz0gXCInXCI7XG4gICAgICAgIGF0dHJPdXQgKz0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIik7XG4gICAgICAgIGF0dHJPdXQgKz0gXCInXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ1wiJykgIT09IC0xICYmIG5hbWUuaW5kZXhPZihcIidcIikgPT09IC0xKSB7XG4gICAgICBhdHRyT3V0ICs9IFwiJ1wiO1xuICAgICAgYXR0ck91dCArPSBuYW1lO1xuICAgICAgYXR0ck91dCArPSBcIidcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0ck91dCArPSAnXCInO1xuICAgICAgYXR0ck91dCArPSBuYW1lLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcbiAgICAgIGF0dHJPdXQgKz0gJ1wiJztcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJPdXQ7XG4gIH0sXG5cbiAgYXR0cnMoYXR0cnMpIHtcbiAgICBjb25zdCByZWd1bGFyQXR0cnMgPSBbXTtcbiAgICBsZXQgY2xhc3NlcyA9ICcnO1xuICAgIGxldCBpZDtcbiAgICBhdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgbGV0IGNvbnN0VmFsID0gJyc7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdFZhbCA9IGNvbnN0YW50aW5vcGxlLnRvQ29uc3RhbnQoYXR0ci52YWwpO1xuICAgICAgfSBjYXRjaCAoZXgpIHt9XG5cbiAgICAgIGlmIChcbiAgICAgICAgYXR0ci5uYW1lID09PSAnY2xhc3MnICYmXG4gICAgICAgICFhdHRyLmVzY2FwZWQgJiZcbiAgICAgICAgY29uc3RWYWwgJiZcbiAgICAgICAgL15cXC0/W19hLXpdW19hLXowLTlcXC1dKiQvaS50ZXN0KGNvbnN0VmFsKVxuICAgICAgKSB7XG4gICAgICAgIGNsYXNzZXMgKz0gYC4ke2NvbnN0VmFsfWA7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBhdHRyLm5hbWUgPT09ICdpZCcgJiZcbiAgICAgICAgIWlkICYmXG4gICAgICAgICFhdHRyLmVzY2FwZWQgJiZcbiAgICAgICAgY29uc3RWYWwgJiZcbiAgICAgICAgL15bXFx3LV0rJC8udGVzdChjb25zdFZhbClcbiAgICAgICkge1xuICAgICAgICBpZCA9IGNvbnN0VmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dHJPdXQgPSAnJztcblxuICAgICAgICAvLyBuYW1lXG4gICAgICAgIGlmICgvXlxcd1teKClbXFxdPSEsYCdcIlxcc10qJC8udGVzdChhdHRyLm5hbWUpKSB7XG4gICAgICAgICAgYXR0ck91dCArPSBhdHRyLm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHIubmFtZS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpO1xuICAgICAgICAgIGF0dHJPdXQgKz0gdGhpcy5xdW90ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHR5cGVvZiBjb25zdFZhbCA9PT0gJ2Jvb2xlYW4nICYmIGNvbnN0VmFsID09PSB0cnVlKSkge1xuICAgICAgICAgIC8vIG9wZXJhdG9yXG4gICAgICAgICAgaWYgKCFhdHRyLmVzY2FwZWQpIGF0dHJPdXQgKz0gJyEnO1xuICAgICAgICAgIGF0dHJPdXQgKz0gJz0nO1xuXG4gICAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgICBhdHRyT3V0ICs9IGF0dHIudmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVndWxhckF0dHJzLnB1c2goYXR0ck91dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgaWYgKGlkKSBvdXQgKz0gYCMke2lkfWA7XG4gICAgb3V0ICs9IGNsYXNzZXM7XG4gICAgaWYgKHJlZ3VsYXJBdHRycy5sZW5ndGgpIG91dCArPSBgKCR7cmVndWxhckF0dHJzLmpvaW4oJyAnKX0pYDtcblxuICAgIHJldHVybiBvdXQ7XG4gIH0sXG5cbiAgYXR0cmlidXRlQmxvY2tzKGF0dHJpYnV0ZUJsb2Nrcykge1xuICAgIHJldHVybiBhdHRyaWJ1dGVCbG9ja3MucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cikgPT4gYCR7cHJldiAgfSZhdHRyaWJ1dGVzKCR7ICBjdXIgIH0pYCxcbiAgICAgICcnLFxuICAgICk7XG4gIH0sXG5cbiAgdXNlQ29sb24oYmxvY2ssIHBhcmVudCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnVzZUNvbG9uKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJlbnRPayA9XG4gICAgICBwYXJlbnQgJiZcbiAgICAgIHtcbiAgICAgICAgTWl4aW46IHBhcmVudCAmJiBwYXJlbnQuY2FsbCxcbiAgICAgICAgSW5jbHVkZTogdHJ1ZSxcbiAgICAgICAgVGFnOiB0cnVlLFxuICAgICAgICBXaGVuOiB0cnVlLFxuICAgICAgfVtwYXJlbnQudHlwZV07XG4gICAgY29uc3Qgbm9kZSA9IGJsb2NrLm5vZGVzWzBdO1xuICAgIGNvbnN0IGJsb2NrT2sgPVxuICAgICAgYmxvY2subm9kZXMubGVuZ3RoID09PSAxICYmXG4gICAgICB7XG4gICAgICAgIENvZGU6IHRydWUsXG4gICAgICAgIEZpbHRlcjogdHJ1ZSxcbiAgICAgICAgTWl4aW46IG5vZGUuY2FsbCxcbiAgICAgICAgVGFnOiB0cnVlLFxuICAgICAgICBUZXh0OiB0cnVlLFxuICAgICAgfVtub2RlLnR5cGVdO1xuICAgIHJldHVybiBwYXJlbnRPayAmJiBwYXJlbnQuYmxvY2sgPT09IGJsb2NrICYmIGJsb2NrT2s7XG4gIH0sXG5cbiAgLy8gaGV1cmlzdGljcyB0byBkZXRlcm1pbmUgaWYgZG90IHN5bnRheCBpcyBwcmVmZXJyZWQgb3ZlciBwaXBlZCB0ZXh0XG4gIHVzZURvdChibG9jaywgcGFyZW50KSB7XG4gICAgaWYgKCFibG9jay5ub2Rlcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGxpbmUgY291bnRcbiAgICBjb25zdCBsaW5lcyA9XG4gICAgICBibG9jay5ub2Rlc1tibG9jay5ub2Rlcy5sZW5ndGggLSAxXS5saW5lIC0gYmxvY2subm9kZXNbMF0ubGluZSArIDE7XG4gICAgaWYgKGxpbmVzID09PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyB3b3JkIGNvdW50IG9mIFRleHQgbm9kZSB2YWx1ZXNcbiAgICBsZXQgd29yZHMgPSAwO1xuICAgIC8vIG51bWJlciBvZiBDb2RlIG5vZGVzIHRoYXQgYXJlIGluIHRoZWlyIG93biBsaW5lc1xuICAgIGxldCBjb2Rlc1dpdGhPd25MaW5lID0gMDtcbiAgICAvLyBpZiB0aGUgcHJldmlvdXMgbm9kZSB3YXMgdGhlIGZpcnN0IGluIGl0cyBsaW5lXG4gICAgbGV0IHByZXZTdGFydExpbmUgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2subm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBibG9jay5ub2Rlc1tpXTtcbiAgICAgIGNvbnN0IHByZXYgPSBibG9jay5ub2Rlc1tpIC0gMV0gfHwgcGFyZW50IHx8IHsgbGluZTogLTEgfTtcbiAgICAgIGNvbnN0IG5leHQgPSBibG9jay5ub2Rlc1tpXTtcblxuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1RleHQnKSB7XG4gICAgICAgIHdvcmRzICs9IChub2RlLnZhbC5tYXRjaCgvXFx3KyhcXHMrfCQpL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ0NvZGUnICYmIG5vZGUuYnVmZmVyICYmICFub2RlLmJsb2NrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAobm9kZS5saW5lID4gcHJldi5saW5lIHx8XG4gICAgICAgICAgICAocHJldi50eXBlID09PSAnVGV4dCcgJiYgcHJldi52YWwgPT09ICdcXG4nKSkgJiZcbiAgICAgICAgICBwcmV2U3RhcnRMaW5lXG4gICAgICAgICkge1xuICAgICAgICAgIGNvZGVzV2l0aE93bkxpbmUrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGVjaG5pY2FsbHkgVGFncyBjYW4gYWxzbyBiZSBpbnRlcnBvbGF0ZWQsIGJ1dCBkZXRlcm1pbmUgd2hldGhlciB0b1xuICAgICAgICAvLyB1c2UgbXVsdGlwbGUgZG90IGJsb2NrcyBvciBvbmUgc2luZ2xlIGRvdCBibG9jayBpcyB3YXkgdG9vXG4gICAgICAgIC8vIGNvbXBsaWNhdGVkLiBLSVNTLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwcmV2U3RhcnRMaW5lID1cbiAgICAgICAgbm9kZS5saW5lID4gcHJldi5saW5lIHx8IChwcmV2LnR5cGUgPT09ICdUZXh0JyAmJiBwcmV2LnZhbCA9PT0gJ1xcbicpO1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkcyA+IDAgJiYgY29kZXNXaXRoT3duTGluZSAvIGxpbmVzIDwgMC4zNTtcbiAgfSxcblxuICB2aXNpdFBpcGVsZXNzVGV4dCh2YWwsIG5vRXNjYXBlKSB7XG4gICAgbGV0IGJ1ZiA9IHZhbC5yZXBsYWNlKC9cXG4vZywgYFxcbiR7dGhpcy5pbmRlbnQoKX1gKTtcbiAgICBpZiAoIW5vRXNjYXBlKSBidWYgPSBidWYucmVwbGFjZSgvXFxcXD8jKFtbe10pL2csICdcXFxcIyQxJyk7XG4gICAgdGhpcy5idWZmZXIoYnVmKTtcbiAgfSxcblxuICB2aXNpdFBpcGVsZXNzVGV4dEJsb2NrKGJsb2NrLCBub0VzY2FwZSkge1xuICAgIGNvbnN0IG9yaWdJbmRlbnRzID0gdGhpcy5pbmRlbnRzO1xuICAgIGlmICghKyt0aGlzLmluZGVudHMpIHRoaXMuaW5kZW50cysrO1xuICAgIHRoaXMuYnVmTGluZSgpO1xuICAgIGJsb2NrLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZS50eXBlID09PSAnVGV4dCcpIHtcbiAgICAgICAgdGhpcy52aXNpdFBpcGVsZXNzVGV4dChub2RlLnZhbCwgbm9Fc2NhcGUpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdDb2RlJyB8fCBub2RlLnR5cGUgPT09ICdUYWcnKSB7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZSwgYmxvY2ssIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIG5vZGU6ICR7SlNPTi5zdHJpbmdpZnkobm9kZSl9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbmRlbnRzID0gb3JpZ0luZGVudHM7XG4gIH0sXG5cbiAgdmlzaXQobm9kZSwgcGFyZW50LCBpbmxpbmUpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHZhciBtc2c7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIG1zZyA9IGBBIGNoaWxkIG9mICR7cGFyZW50LnR5cGV9ICgke3BhcmVudC5maWxlbmFtZSB8fFxuICAgICAgICAgICdQdWcnfToke3BhcmVudC5saW5lfSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gJ0EgdG9wLWxldmVsIG5vZGUnO1xuICAgICAgfVxuICAgICAgbXNnICs9IGAgaXMgJHtub2RlfSwgZXhwZWN0ZWQgYSBQdWcgQVNUIE5vZGUuYDtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobXNnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXNbYHZpc2l0JHtub2RlLnR5cGV9YF0pIHtcbiAgICAgIHZhciBtc2c7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIG1zZyA9IGBBIGNoaWxkIG9mICR7cGFyZW50LnR5cGV9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9ICdBIHRvcC1sZXZlbCBub2RlJztcbiAgICAgIH1cbiAgICAgIG1zZyArPVxuICAgICAgICBgICgke25vZGUuZmlsZW5hbWUgfHwgJ1B1Zyd9OiR7bm9kZS5saW5lfSlgICtcbiAgICAgICAgYCBpcyBvZiB0eXBlICR7bm9kZS50eXBlfSxgICtcbiAgICAgICAgYCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHB1Zy1zb3VyY2UtZ2VuLmA7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgfVxuXG4gICAgdGhpc1tgdmlzaXQke25vZGUudHlwZX1gXShub2RlLCBpbmxpbmUsIHBhcmVudCk7XG4gIH0sXG5cbiAgdmlzaXRDYXNlKG5vZGUpIHtcbiAgICB0aGlzLmJ1ZkxpbmUoYGNhc2UgJHtub2RlLmV4cHJ9YCk7XG4gICAgdGhpcy52aXNpdChub2RlLmJsb2NrLCBub2RlKTtcbiAgfSxcblxuICB2aXNpdFdoZW4obm9kZSkge1xuICAgIGlmIChub2RlLmV4cHIgPT0gJ2RlZmF1bHQnKSB7XG4gICAgICB0aGlzLmJ1ZkxpbmUoJ2RlZmF1bHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWZMaW5lKGB3aGVuICR7bm9kZS5leHByfWApO1xuICAgIH1cbiAgICBpZiAobm9kZS5ibG9jaykge1xuICAgICAgaWYgKG5vZGUuYmxvY2subm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYnVmTGluZSgnJywgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZpc2l0KG5vZGUuYmxvY2ssIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB2aXNpdE5hbWVkQmxvY2soYmxvY2spIHtcbiAgICBpZiAoYmxvY2subW9kZSA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICB0aGlzLmJ1ZkxpbmUoYGJsb2NrICR7YmxvY2submFtZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWZMaW5lKGAke2Jsb2NrLm1vZGV9ICR7YmxvY2submFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzaXRCbG9jayhibG9jayk7XG4gIH0sXG5cbiAgdmlzaXRCbG9jayhibG9jaywgaW5saW5lLCBwYXJlbnQpIHtcbiAgICBpZiAoYmxvY2sueWllbGQpIHtcbiAgICAgIHRoaXMuYnVmTGluZSgneWllbGQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcmlnaW5hbE5lc3RlZCA9IHRoaXMubmVzdGVkO1xuICAgIGlmICh0aGlzLnVzZURvdChibG9jaywgcGFyZW50KSkge1xuICAgICAgaWYgKHBhcmVudCAmJiAocGFyZW50LnR5cGUgPT09ICdUYWcnIHx8IHBhcmVudC50eXBlID09PSAnTWl4aW4nKSkge1xuICAgICAgICB0aGlzLmJ1ZmZlcignLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idWZMaW5lKCcuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy52aXNpdFBpcGVsZXNzVGV4dEJsb2NrKGJsb2NrKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudXNlQ29sb24oYmxvY2ssIHBhcmVudCkpIHtcbiAgICAgIHRoaXMuYnVmZmVyKCc6ICcpO1xuICAgICAgdGhpcy5uZXN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy52aXNpdChibG9jay5ub2Rlc1swXSwgYmxvY2ssIHRydWUpO1xuICAgICAgdGhpcy5uZXN0ZWQgPSBvcmlnaW5hbE5lc3RlZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5lc3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kZW50cysrO1xuICAgIGxldCBwcmV2Tm9kZSA9IHBhcmVudCB8fCB7fTtcbiAgICBibG9jay5ub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUsIGJsb2NrLCAhaSA/IGlubGluZSA6IHByZXZOb2RlLmxpbmUgPT09IG5vZGUubGluZSk7XG4gICAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgfSk7XG4gICAgdGhpcy5pbmRlbnRzLS07XG4gICAgdGhpcy5uZXN0ZWQgPSBvcmlnaW5hbE5lc3RlZDtcbiAgfSxcblxuICB2aXNpdE1peGluQmxvY2soYmxvY2spIHtcbiAgICB0aGlzLmJ1ZkxpbmUoJ2Jsb2NrJyk7XG4gIH0sXG5cbiAgdmlzaXREb2N0eXBlKGRvY3R5cGUpIHtcbiAgICBsZXQgYnVmID0gJ2RvY3R5cGUnO1xuICAgIGlmIChkb2N0eXBlLnZhbCkge1xuICAgICAgYnVmICs9IGAgJHtkb2N0eXBlLnZhbH1gO1xuICAgIH1cbiAgICB0aGlzLmJ1ZkxpbmUoYnVmKTtcbiAgfSxcblxuICB2aXNpdE1peGluKG1peGluLCBpbmxpbmUsIHBhcmVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gbWl4aW4uYXR0cnM7XG4gICAgLy8gaWYgdGhlcmUgYXJlIGF0dHJzLCBgKClgIG5lZWRlZCB0byBkaXNhbWJpZ3VhdGUgYmV0d2VlbiBhcmdzIGFuZCBhdHRyc1xuICAgIGNvbnN0IGFyZ3MgPSBtaXhpbi5hcmdzIHx8IGF0dHJzLmxlbmd0aCA/IGAoJHttaXhpbi5hcmdzfSlgIDogJyc7XG4gICAgY29uc3QgYmxvY2sgPSBtaXhpbi5ibG9jaztcbiAgICBjb25zdCBrZXkgPSBtaXhpbi5uYW1lO1xuXG4gICAgaWYgKG1peGluLmNhbGwpIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IGArJHtrZXl9JHthcmdzfSR7dGhpcy5hdHRycyhhdHRycyl9JHt0aGlzLmF0dHJpYnV0ZUJsb2NrcyhcbiAgICAgICAgbWl4aW4uYXR0cmlidXRlQmxvY2tzLFxuICAgICAgKX1gO1xuICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICBpZiAoIXRoaXMubmVzdGVkKSB0aGlzLmJ1ZmZlcignI1snKTtcbiAgICAgICAgdGhpcy5idWZmZXIoYnVmKTtcbiAgICAgICAgaWYgKCF0aGlzLm5lc3RlZCkgdGhpcy5idWZmZXIoJ10nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVmTGluZShidWYpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGVJbmxpbmUgJiYgKG5vZGVzWzBdLnR5cGUgIT09ICdDb2RlJyB8fCBub2Rlcy5sZW5ndGggIT09IDEpKVxuICAgICAgICB0aGlzLmJ1ZmZlcignICcpO1xuICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbm9kZXMgPSBibG9jay5ub2RlcztcbiAgICAgICAgdmFyIG5vZGVJbmxpbmUgPVxuICAgICAgICAgIG5vZGVzWzBdLmxpbmUgPT09IG1peGluLmxpbmUgJiYgIXRoaXMudXNlQ29sb24oYmxvY2ssIG1peGluKTtcbiAgICAgICAgaWYgKG5vZGVJbmxpbmUgJiYgKG5vZGVzWzBdLnR5cGUgIT09ICdDb2RlJyB8fCBub2Rlcy5sZW5ndGggIT09IDEpKVxuICAgICAgICAgIHRoaXMuYnVmZmVyKCcgJyk7XG4gICAgICAgIHRoaXMudmlzaXQoYmxvY2ssIG1peGluLCBub2RlSW5saW5lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWZMaW5lKGBtaXhpbiAke2tleX0ke2FyZ3N9YCk7XG4gICAgICBpZiAoYmxvY2spIHRoaXMudmlzaXQoYmxvY2ssIG1peGluKTtcbiAgICB9XG4gIH0sXG5cbiAgdmlzaXRUYWcodGFnLCBpbmxpbmUsIHBhcmVudCkge1xuICAgIGxldCBuYW1lID0gdGFnLm5hbWUsXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgIC8vIGF0dHJzXG4gICAgbGV0IGF0dHJzID0gdGhpcy5hdHRycyh0YWcuYXR0cnMpO1xuICAgIGF0dHJzICs9IHRoaXMuYXR0cmlidXRlQmxvY2tzKHRhZy5hdHRyaWJ1dGVCbG9ja3MpO1xuXG4gICAgbGV0IGJ1ZiA9ICcnO1xuXG4gICAgLy8gdGFnIG5hbWVcbiAgICBpZiAodGFnLmJ1ZmZlcikgYnVmICs9IGAjeyR7bmFtZX19YDtcbiAgICBlbHNlIGlmIChcbiAgICAgIHRhZy5zZWxmQ2xvc2luZyB8fFxuICAgICAgbmFtZSAhPT0gJ2RpdicgfHxcbiAgICAgIChhdHRyc1swXSAhPT0gJy4nICYmIGF0dHJzWzBdICE9PSAnIycpXG4gICAgKSB7XG4gICAgICBidWYgKz0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyBzZWxmLWNsb3NpbmdcbiAgICBpZiAodGFnLnNlbGZDbG9zaW5nKSBidWYgKz0gJy8nO1xuXG4gICAgYnVmICs9IGF0dHJzO1xuXG4gICAgLy8gYnVmZmVyIHRhZyBzdHViXG4gICAgaWYgKGlubGluZSkge1xuICAgICAgaWYgKCF0aGlzLm5lc3RlZCkgdGhpcy5idWZmZXIoJyNbJyk7XG4gICAgICB0aGlzLmJ1ZmZlcihidWYpO1xuICAgIH0gZWxzZSB0aGlzLmJ1ZkxpbmUoYnVmKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGNvZGVcbiAgICBpZiAodGFnLmNvZGUpIHRoaXMudmlzaXRDb2RlKHRhZy5jb2RlLCB0cnVlKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgYmxvY2tcbiAgICBpZiAodGFnLmJsb2NrLm5vZGVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB0YWcuYmxvY2subm9kZXM7XG4gICAgICBjb25zdCBub2RlSW5saW5lID1cbiAgICAgICAgbm9kZXNbMF0ubGluZSA9PT0gdGFnLmxpbmUgJiYgIXRoaXMudXNlQ29sb24odGFnLmJsb2NrLCB0YWcpO1xuICAgICAgaWYgKG5vZGVJbmxpbmUgJiYgKG5vZGVzWzBdLnR5cGUgIT09ICdDb2RlJyB8fCBub2Rlcy5sZW5ndGggIT09IDEpKVxuICAgICAgICB0aGlzLmJ1ZmZlcignICcpO1xuICAgICAgdGhpcy52aXNpdCh0YWcuYmxvY2ssIHRhZywgbm9kZUlubGluZSk7XG4gICAgfVxuXG4gICAgaWYgKGlubGluZSAmJiAhdGhpcy5uZXN0ZWQpIHRoaXMuYnVmZmVyKCddJyk7XG4gIH0sXG5cbiAgdmlzaXRUZXh0KHRleHQsIGlubGluZSkge1xuICAgIGlmICghdGV4dC52YWwpIHJldHVybjtcblxuICAgIGlmICh0ZXh0LmlzSHRtbCkge1xuICAgICAgaWYgKCFpbmxpbmUgJiYgIXRoaXMubmVzdGVkKSB0aGlzLmJ1ZkxpbmUoKTtcbiAgICAgIHRoaXMudmlzaXRQaXBlbGVzc1RleHQodGV4dC52YWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGV4dC52YWwgPT09ICdcXG4nKSB7XG4gICAgICBpZiAoaW5saW5lIHx8IHRoaXMubmVzdGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5saW5lIHRleHQgY29udGFpbnMgbmV3IGxpbmUnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnVmTGluZSgnfCAnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3JjID0gdGV4dC52YWwucmVwbGFjZSgvXFxcXD8jKFtbe10pL2csICdcXFxcIyQxJyk7XG4gICAgaWYgKGlubGluZSAmJiAhdGhpcy5uZXN0ZWQpIHtcbiAgICAgIHRoaXMuYnVmZmVyKHNyYyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lc3RlZCkge1xuICAgICAgdGhpcy5idWZmZXIoYHwgJHtzcmN9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVmTGluZShgfCAke3NyY31gKTtcbiAgICB9XG4gIH0sXG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQpIHtcbiAgICBsZXQgYnVmID0gJy8vJztcbiAgICBpZiAoIWNvbW1lbnQuYnVmZmVyKSBidWYgKz0gJy0nO1xuICAgIGJ1ZiArPSBjb21tZW50LnZhbDtcbiAgICB0aGlzLmJ1ZkxpbmUoYnVmKTtcbiAgfSxcblxuICB2aXNpdEJsb2NrQ29tbWVudChjb21tZW50KSB7XG4gICAgbGV0IGJ1ZiA9ICcvLyc7XG4gICAgaWYgKCFjb21tZW50LmJ1ZmZlcikgYnVmICs9ICctJztcbiAgICBpZiAoY29tbWVudC52YWwpIGJ1ZiArPSBjb21tZW50LnZhbDtcbiAgICB0aGlzLmJ1ZkxpbmUoYnVmKTtcblxuICAgIHRoaXMudmlzaXRQaXBlbGVzc1RleHRCbG9jayhjb21tZW50LmJsb2NrKTtcbiAgfSxcblxuICB2aXNpdENvZGUoY29kZSwgaW5saW5lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBwYXJlbnRCbG9jayA9IHBhcmVudCAmJiBnZXRCbG9jayhwYXJlbnQpO1xuICAgIGlmIChpbmxpbmUgJiYgcGFyZW50QmxvY2sgJiYgcGFyZW50QmxvY2subm9kZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICBpZiAoY29kZS5idWZmZXIpIHRoaXMuYnVmZmVyKGAke2NvZGUuZXNjYXBlID8gJyMnIDogJyEnfXske2NvZGUudmFsfX1gKTtcbiAgICAgIGVsc2UgdGhpcy5idWZmZXIoYCNbLSAke2NvZGUudmFsfV1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJ1ZiA9ICcnO1xuXG4gICAgICAvLyBvcGVyYXRvclxuICAgICAgaWYgKGNvZGUuYnVmZmVyKSB7XG4gICAgICAgIGlmICghY29kZS5lc2NhcGUpIGJ1ZiArPSAnISc7XG4gICAgICAgIGJ1ZiArPSAnPSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWYgKz0gJy0nO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5saW5lKSB0aGlzLmJ1ZmZlcihidWYpO1xuICAgICAgZWxzZSB0aGlzLmJ1ZkxpbmUoYnVmKTtcblxuICAgICAgLy8gdmFsdWVcbiAgICAgIGlmIChjb2RlLnZhbC5pbmRleE9mKCdcXG4nKSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5idWZmZXIoYCAke2NvZGUudmFsfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmRlbnRzKys7XG4gICAgICAgIHRoaXMuYnVmTGluZSgpO1xuICAgICAgICB0aGlzLnZpc2l0UGlwZWxlc3NUZXh0KGNvZGUudmFsKTtcbiAgICAgICAgdGhpcy5pbmRlbnRzLS07XG4gICAgICB9XG5cbiAgICAgIC8vIGJsb2NrXG4gICAgICBpZiAoY29kZS5ibG9jaykgdGhpcy52aXNpdChjb2RlLmJsb2NrLCBjb2RlKTtcbiAgICB9XG4gIH0sXG5cbiAgdmlzaXRDb25kaXRpb25hbChjb25kKSB7XG4gICAgY29uc3Qgb3V0ID0gYGlmICR7Y29uZC50ZXN0fWA7XG4gICAgdGhpcy5idWZMaW5lKG91dCk7XG5cbiAgICB0aGlzLnZpc2l0KGNvbmQuY29uc2VxdWVudCwgY29uZCk7XG5cbiAgICBpZiAoY29uZC5hbHRlcm5hdGUpIHtcbiAgICAgIGlmIChjb25kLmFsdGVybmF0ZS50eXBlID09PSAnQ29uZGl0aW9uYWwnKSB7XG4gICAgICAgIHRoaXMuYnVmTGluZSgnZWxzZSAnKTtcbiAgICAgICAgdGhpcy52aXNpdENvbmRpdGlvbmFsKGNvbmQuYWx0ZXJuYXRlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVmTGluZSgnZWxzZScpO1xuICAgICAgICB0aGlzLnZpc2l0KGNvbmQuYWx0ZXJuYXRlLCBjb25kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdmlzaXRXaGlsZShsb29wKSB7XG4gICAgY29uc3QgdGVzdCA9IGxvb3AudGVzdDtcbiAgICB0aGlzLmJ1ZkxpbmUoYHdoaWxlICR7dGVzdH1gKTtcbiAgICB0aGlzLnZpc2l0KGxvb3AuYmxvY2ssIGxvb3ApO1xuICB9LFxuXG4gIHZpc2l0RWFjaChlYWNoKSB7XG4gICAgdGhpcy5idWZMaW5lKFxuICAgICAgYGVhY2ggJHtlYWNoLnZhbH0ke2VhY2gua2V5ID8gYCwgJHtlYWNoLmtleX1gIDogJyd9IGluICR7ZWFjaC5vYmp9YCxcbiAgICApO1xuICAgIHRoaXMudmlzaXQoZWFjaC5ibG9jaywgZWFjaCk7XG4gICAgaWYgKGVhY2guYWx0ZXJuYXRpdmUpIHtcbiAgICAgIHRoaXMuYnVmTGluZSgnZWxzZScpO1xuICAgICAgdGhpcy52aXNpdChlYWNoLmFsdGVybmF0aXZlKTtcbiAgICB9XG4gIH0sXG4gIHZpc2l0UmF3SW5jbHVkZShpbmNsdWRlKSB7XG4gICAgdGhpcy5idWZMaW5lKCdpbmNsdWRlJyk7XG4gICAgaWYgKGluY2x1ZGUuZmlsdGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlcihgOiR7ICBpbmNsdWRlLmZpbHRlciAgfSR7dGhpcy5hdHRycyhpbmNsdWRlLmF0dHJzKX1gKTtcbiAgICB9XG4gICAgdGhpcy5idWZmZXIoJyAnKTtcbiAgICB0aGlzLnZpc2l0KGluY2x1ZGUuZmlsZSk7XG4gIH0sXG4gIHZpc2l0RXh0ZW5kcyhub2RlKSB7XG4gICAgdGhpcy5idWZMaW5lKCdleHRlbmRzICcpO1xuICAgIHRoaXMudmlzaXQobm9kZS5maWxlKTtcbiAgfSxcblxuICB2aXNpdEZpbGVSZWZlcmVuY2UoZmlsZSkge1xuICAgIHRoaXMuYnVmZmVyKGZpbGUucGF0aCk7XG4gIH0sXG5cbiAgdmlzaXRJbmNsdWRlKGluY2x1ZGUpIHtcbiAgICB0aGlzLmJ1ZkxpbmUoJ2luY2x1ZGUnKTtcbiAgICBpZiAoaW5jbHVkZS5maWx0ZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyKGA6JHtpbmNsdWRlLmZpbHRlcn0ke3RoaXMuYXR0cnMoaW5jbHVkZS5hdHRycyl9YCk7XG4gICAgfVxuICAgIHRoaXMuYnVmZmVyKCcgJyk7XG4gICAgdGhpcy52aXNpdChpbmNsdWRlLmZpbGUpO1xuICAgIHRoaXMudmlzaXQoaW5jbHVkZS5ibG9jayk7XG4gIH0sXG5cbiAgdmlzaXRGaWx0ZXIoZmlsdGVyLCBpbmxpbmUsIHBhcmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWx0ZXIubmFtZTtcblxuICAgIGNvbnN0IGJ1ZiA9IGA6JHtuYW1lfSR7dGhpcy5hdHRycyhmaWx0ZXIuYXR0cnMpfWA7XG4gICAgaWYgKGlubGluZSAmJiAhdGhpcy5uZXN0ZWQpIHRoaXMuYnVmZmVyKCcjWycpO1xuICAgIGlmIChpbmxpbmUgfHwgdGhpcy5uZXN0ZWQpIHRoaXMuYnVmZmVyKGJ1Zik7XG4gICAgZWxzZSB0aGlzLmJ1ZkxpbmUoYnVmKTtcblxuICAgIGlmIChmaWx0ZXIuYmxvY2subm9kZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoZmlsdGVyLmJsb2NrLm5vZGVzWzBdLnR5cGUgPT09ICdGaWx0ZXInKSB7XG4gICAgICAgIGlmIChmaWx0ZXIuYmxvY2subm9kZXMubGVuZ3RoID4gMSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgZmlsdGVyIHdpdGggbW9yZSB0aGFuIG9uZSBub24tdGV4dCBub2RlczogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTmVzdGVkID0gdGhpcy5uZXN0ZWQ7XG4gICAgICAgIHRoaXMubmVzdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aXNpdEZpbHRlcihmaWx0ZXIuYmxvY2subm9kZXNbMF0sIGlubGluZSwgZmlsdGVyKTtcbiAgICAgICAgdGhpcy5uZXN0ZWQgPSBvcmlnaW5hbE5lc3RlZDtcbiAgICAgIH0gZWxzZSBpZiAoaW5saW5lICYmICF0aGlzLm5lc3RlZCkge1xuICAgICAgICBpZiAoZmlsdGVyLmJsb2NrLm5vZGVzWzBdLnR5cGUgPT09ICdUZXh0JykgdGhpcy5idWZmZXIoJyAnKTtcbiAgICAgICAgdGhpcy52aXNpdChmaWx0ZXIuYmxvY2ssIHBhcmVudCwgaW5saW5lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmlzaXRQaXBlbGVzc1RleHRCbG9jayhmaWx0ZXIuYmxvY2ssIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmxpbmUgJiYgIXRoaXMubmVzdGVkKSB0aGlzLmJ1ZmZlcignXScpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZ2V0QmxvY2sobm9kZSkge1xuICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgIGNhc2UgJ0Jsb2NrJzpcbiAgICBjYXNlICdOYW1lZEJsb2NrJzpcbiAgICAgIHJldHVybiBub2RlO1xuXG4gICAgY2FzZSAnQmxvY2tDb21tZW50JzpcbiAgICBjYXNlICdDYXNlJzpcbiAgICBjYXNlICdDb2RlJzpcbiAgICBjYXNlICdFYWNoJzpcbiAgICBjYXNlICdGaWx0ZXInOlxuICAgIGNhc2UgJ01peGluJzpcbiAgICBjYXNlICdUYWcnOlxuICAgIGNhc2UgJ1doZW4nOlxuICAgIGNhc2UgJ1doaWxlJzpcbiAgICAgIHJldHVybiBub2RlLmJsb2NrO1xuXG4gICAgY2FzZSAnQ29uZGl0aW9uYWwnOlxuICAgICAgcmV0dXJuIG5vZGUuY29uc2VxdWVudDtcblxuICAgIGNhc2UgJ0NvbW1lbnQnOlxuICAgIGNhc2UgJ0RvY3R5cGUnOlxuICAgIGNhc2UgJ0V4dGVuZHMnOlxuICAgIGNhc2UgJ0ZpbGVSZWZlcmVuY2UnOlxuICAgIGNhc2UgJ0luY2x1ZGUnOlxuICAgIGNhc2UgJ1RleHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZXJlIGlzIG5vIGJsb2NrIGluIHRoaXMgbm9kZScpO1xuICB9XG59XG4iXX0=
