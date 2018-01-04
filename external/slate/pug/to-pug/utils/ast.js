'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3B1Zy90by1wdWcvdXRpbHMvYXN0LmVzNiJdLCJuYW1lcyI6WyJyZXBlYXQiLCJyZXF1aXJlIiwiY29uc3RhbnRpbm9wbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29kZUdlbmVyYXRvciIsIm5vZGUiLCJvcHRpb25zIiwiYnVmIiwiaW5kZW50cyIsIm5lc3RlZCIsImlubGluZSIsInByb3RvdHlwZSIsImNvbXBpbGUiLCJ2aXNpdCIsImpvaW4iLCJpbmRlbnQiLCJhZGQiLCJpbmRlbnRDaGFyIiwidW5kZWZpbmVkIiwiYnVmZmVyIiwiY29udGVudCIsImxlbmd0aCIsImJ1ZkxpbmUiLCJwdXNoIiwicXVvdGUiLCJuYW1lIiwiYXR0ck91dCIsInByZWZlcnJlZFF1b3RlIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJhdHRycyIsInJlZ3VsYXJBdHRycyIsImNsYXNzZXMiLCJpZCIsImZvckVhY2giLCJjb25zdFZhbCIsInRvQ29uc3RhbnQiLCJhdHRyIiwidmFsIiwiZXgiLCJlc2NhcGVkIiwidGVzdCIsIm91dCIsImF0dHJpYnV0ZUJsb2NrcyIsInJlZHVjZSIsInByZXYiLCJjdXIiLCJ1c2VDb2xvbiIsImJsb2NrIiwicGFyZW50IiwicGFyZW50T2siLCJNaXhpbiIsImNhbGwiLCJJbmNsdWRlIiwiVGFnIiwiV2hlbiIsInR5cGUiLCJub2RlcyIsImJsb2NrT2siLCJDb2RlIiwiRmlsdGVyIiwiVGV4dCIsInVzZURvdCIsImxpbmVzIiwibGluZSIsIndvcmRzIiwiY29kZXNXaXRoT3duTGluZSIsInByZXZTdGFydExpbmUiLCJpIiwibmV4dCIsIm1hdGNoIiwidmlzaXRQaXBlbGVzc1RleHQiLCJub0VzY2FwZSIsInZpc2l0UGlwZWxlc3NUZXh0QmxvY2siLCJvcmlnSW5kZW50cyIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsImZpbGVuYW1lIiwiVHlwZUVycm9yIiwidmlzaXRDYXNlIiwiZXhwciIsInZpc2l0V2hlbiIsInZpc2l0TmFtZWRCbG9jayIsIm1vZGUiLCJ2aXNpdEJsb2NrIiwieWllbGQiLCJvcmlnaW5hbE5lc3RlZCIsInByZXZOb2RlIiwidmlzaXRNaXhpbkJsb2NrIiwidmlzaXREb2N0eXBlIiwiZG9jdHlwZSIsInZpc2l0TWl4aW4iLCJtaXhpbiIsImFyZ3MiLCJrZXkiLCJub2RlSW5saW5lIiwidmlzaXRUYWciLCJ0YWciLCJzZWxmIiwic2VsZkNsb3NpbmciLCJjb2RlIiwidmlzaXRDb2RlIiwidmlzaXRUZXh0IiwidGV4dCIsImlzSHRtbCIsInNyYyIsInZpc2l0Q29tbWVudCIsImNvbW1lbnQiLCJ2aXNpdEJsb2NrQ29tbWVudCIsInBhcmVudEJsb2NrIiwiZ2V0QmxvY2siLCJlc2NhcGUiLCJ2aXNpdENvbmRpdGlvbmFsIiwiY29uZCIsImNvbnNlcXVlbnQiLCJhbHRlcm5hdGUiLCJ2aXNpdFdoaWxlIiwibG9vcCIsInZpc2l0RWFjaCIsImVhY2giLCJvYmoiLCJhbHRlcm5hdGl2ZSIsInZpc2l0UmF3SW5jbHVkZSIsImluY2x1ZGUiLCJmaWx0ZXIiLCJmaWxlIiwidmlzaXRFeHRlbmRzIiwidmlzaXRGaWxlUmVmZXJlbmNlIiwicGF0aCIsInZpc2l0SW5jbHVkZSIsInZpc2l0RmlsdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVNDLFFBQVEsZUFBUixDQUFmO0FBQ0EsSUFBTUMsaUJBQWlCRCxRQUFRLGdCQUFSLENBQXZCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCQyxhQUFqQjs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFDcEMsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0UsR0FBTCxHQUFXLEVBQVg7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBQyxDQUFoQixDQUpvQyxDQUlqQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQUtDLE1BQUwsR0FBYyxLQUFkO0FB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QUNBLFNBQUssU0FBTDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBO0FBQ0UsWUFBTSxJQUFJekMsS0FBSixDQUFVLGdDQUFWLENBQU47QUExQko7QUE0QkQiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvcHVnL3RvLXB1Zy91dGlscy9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJyk7XG5jb25zdCBjb25zdGFudGlub3BsZSA9IHJlcXVpcmUoJ2NvbnN0YW50aW5vcGxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29kZUdlbmVyYXRvcjtcblxuZnVuY3Rpb24gQ29kZUdlbmVyYXRvcihub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMuYnVmID0gW107XG4gIHRoaXMuaW5kZW50cyA9IC0xOyAvLyAtMSB0byBjb3VudGVyIHRoZSByb290LWxldmVsIEJsb2NrXG4gIC8vIElmIHRoZSBjdXJyZW50IG5vZGUgaXMgYSBuZXN0ZWQgbm9kZSAodGhyb3VnaCB0aGUgYmxvY2sgZXhwYW5zaW9uIHN5bnRheFxuICAvLyAoYHA6IHN0cm9uZ2ApIG9yIHdpdGggbmVzdGVkIGZpbHRlcnMgYDp1Z2xpZnktanM6YmFiZWxgKS4gVGhpcyBwcm9wZXJ0eVxuICAvLyBtYWtlcyB0aGUgdmlzaXQqIG1ldGhvZHMgY29udGludWUgb24gdGhlIHByZXZpb3VzIGxpbmUgaW5zdGVhZCBvZlxuICAvLyBzdGFydGluZyBhIG5ldyBsaW5lLlxuICB0aGlzLm5lc3RlZCA9IGZhbHNlO1xuICAvLyBUaGlzIHByb3BlcnR5IGRpcmVjdHMgdGhlIGNvZGUgZ2VuZXJhdG9yIHRvIGNvbnRpbnVlIG9uIHRoZSBwcmV2aW91cyBsaW5lXG4gIC8vIGFuZCB1c2UgaW5saW5lIGludGVycG9sYXRpb24gdG9rZW5zIChgI3t9YCBhbmQgYCNbXWApIGlmIHBvc3NpYmxlLlxuICB0aGlzLmlubGluZSA9IGZhbHNlO1xufVxuXG5Db2RlR2VuZXJhdG9yLnByb3RvdHlwZSA9IHtcbiAgY29tcGlsZSgpIHtcbiAgICB0aGlzLnZpc2l0KHRoaXMubm9kZSk7XG4gICAgcmV0dXJuIHRoaXMuYnVmLmpvaW4oJ1xcbicpO1xuICB9LFxuXG4gIGluZGVudChhZGQpIHtcbiAgICByZXR1cm4gcmVwZWF0KFxuICAgICAgdGhpcy5vcHRpb25zLmluZGVudENoYXIsXG4gICAgICB0aGlzLmluZGVudHMgKyAoYWRkICE9PSB1bmRlZmluZWQgPyBhZGQgOiAwKSxcbiAgICApO1xuICB9LFxuXG4gIGJ1ZmZlcihjb250ZW50KSB7XG4gICAgaWYgKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkgdGhpcy5idWZbdGhpcy5idWYubGVuZ3RoIC0gMV0gKz0gY29udGVudDtcbiAgfSxcblxuICBidWZMaW5lKGNvbnRlbnQsIGluZGVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSBjb250ZW50ID0gJyc7XG4gICAgdGhpcy5idWYucHVzaCh0aGlzLmluZGVudChpbmRlbnRzKSArIGNvbnRlbnQpO1xuICB9LFxuXG4gIHF1b3RlKG5hbWUpIHtcbiAgICBsZXQgYXR0ck91dCA9ICcnO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJlZmVycmVkUXVvdGUgPT09IFwiJ1wiKSB7XG4gICAgICBpZiAobmFtZS5pbmRleE9mKFwiJ1wiKSAhPT0gLTEgJiYgbmFtZS5pbmRleE9mKCdcIicpID09PSAtMSkge1xuICAgICAgICBhdHRyT3V0ICs9ICdcIic7XG4gICAgICAgIGF0dHJPdXQgKz0gbmFtZTtcbiAgICAgICAgYXR0ck91dCArPSAnXCInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0ck91dCArPSBcIidcIjtcbiAgICAgICAgYXR0ck91dCArPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKTtcbiAgICAgICAgYXR0ck91dCArPSBcIidcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZignXCInKSAhPT0gLTEgJiYgbmFtZS5pbmRleE9mKFwiJ1wiKSA9PT0gLTEpIHtcbiAgICAgIGF0dHJPdXQgKz0gXCInXCI7XG4gICAgICBhdHRyT3V0ICs9IG5hbWU7XG4gICAgICBhdHRyT3V0ICs9IFwiJ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyT3V0ICs9ICdcIic7XG4gICAgICBhdHRyT3V0ICs9IG5hbWUucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpO1xuICAgICAgYXR0ck91dCArPSAnXCInO1xuICAgIH1cbiAgICByZXR1cm4gYXR0ck91dDtcbiAgfSxcblxuICBhdHRycyhhdHRycykge1xuICAgIGNvbnN0IHJlZ3VsYXJBdHRycyA9IFtdO1xuICAgIGxldCBjbGFzc2VzID0gJyc7XG4gICAgbGV0IGlkO1xuICAgIGF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBsZXQgY29uc3RWYWwgPSAnJztcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0VmFsID0gY29uc3RhbnRpbm9wbGUudG9Db25zdGFudChhdHRyLnZhbCk7XG4gICAgICB9IGNhdGNoIChleCkge31cblxuICAgICAgaWYgKFxuICAgICAgICBhdHRyLm5hbWUgPT09ICdjbGFzcycgJiZcbiAgICAgICAgIWF0dHIuZXNjYXBlZCAmJlxuICAgICAgICBjb25zdFZhbCAmJlxuICAgICAgICAvXlxcLT9bX2Etel1bX2EtejAtOVxcLV0qJC9pLnRlc3QoY29uc3RWYWwpXG4gICAgICApIHtcbiAgICAgICAgY2xhc3NlcyArPSBgLiR7Y29uc3RWYWx9YDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGF0dHIubmFtZSA9PT0gJ2lkJyAmJlxuICAgICAgICAhaWQgJiZcbiAgICAgICAgIWF0dHIuZXNjYXBlZCAmJlxuICAgICAgICBjb25zdFZhbCAmJlxuICAgICAgICAvXltcXHctXSskLy50ZXN0KGNvbnN0VmFsKVxuICAgICAgKSB7XG4gICAgICAgIGlkID0gY29uc3RWYWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXR0ck91dCA9ICcnO1xuXG4gICAgICAgIC8vIG5hbWVcbiAgICAgICAgaWYgKC9eXFx3W14oKVtcXF09ISxgJ1wiXFxzXSokLy50ZXN0KGF0dHIubmFtZSkpIHtcbiAgICAgICAgICBhdHRyT3V0ICs9IGF0dHIubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gYXR0ci5uYW1lLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJyk7XG4gICAgICAgICAgYXR0ck91dCArPSB0aGlzLnF1b3RlKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEodHlwZW9mIGNvbnN0VmFsID09PSAnYm9vbGVhbicgJiYgY29uc3RWYWwgPT09IHRydWUpKSB7XG4gICAgICAgICAgLy8gb3BlcmF0b3JcbiAgICAgICAgICBpZiAoIWF0dHIuZXNjYXBlZCkgYXR0ck91dCArPSAnISc7XG4gICAgICAgICAgYXR0ck91dCArPSAnPSc7XG5cbiAgICAgICAgICAvLyB2YWx1ZVxuICAgICAgICAgIGF0dHJPdXQgKz0gYXR0ci52YWw7XG4gICAgICAgIH1cblxuICAgICAgICByZWd1bGFyQXR0cnMucHVzaChhdHRyT3V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZiAoaWQpIG91dCArPSBgIyR7aWR9YDtcbiAgICBvdXQgKz0gY2xhc3NlcztcbiAgICBpZiAocmVndWxhckF0dHJzLmxlbmd0aCkgb3V0ICs9IGAoJHtyZWd1bGFyQXR0cnMuam9pbignICcpfSlgO1xuXG4gICAgcmV0dXJuIG91dDtcbiAgfSxcblxuICBhdHRyaWJ1dGVCbG9ja3MoYXR0cmlidXRlQmxvY2tzKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZUJsb2Nrcy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VyKSA9PiBgJHtwcmV2ICB9JmF0dHJpYnV0ZXMoJHsgIGN1ciAgfSlgLFxuICAgICAgJycsXG4gICAgKTtcbiAgfSxcblxuICB1c2VDb2xvbihibG9jaywgcGFyZW50KSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMudXNlQ29sb24pIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBhcmVudE9rID1cbiAgICAgIHBhcmVudCAmJlxuICAgICAge1xuICAgICAgICBNaXhpbjogcGFyZW50ICYmIHBhcmVudC5jYWxsLFxuICAgICAgICBJbmNsdWRlOiB0cnVlLFxuICAgICAgICBUYWc6IHRydWUsXG4gICAgICAgIFdoZW46IHRydWUsXG4gICAgICB9W3BhcmVudC50eXBlXTtcbiAgICBjb25zdCBub2RlID0gYmxvY2subm9kZXNbMF07XG4gICAgY29uc3QgYmxvY2tPayA9XG4gICAgICBibG9jay5ub2Rlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIHtcbiAgICAgICAgQ29kZTogdHJ1ZSxcbiAgICAgICAgRmlsdGVyOiB0cnVlLFxuICAgICAgICBNaXhpbjogbm9kZS5jYWxsLFxuICAgICAgICBUYWc6IHRydWUsXG4gICAgICAgIFRleHQ6IHRydWUsXG4gICAgICB9W25vZGUudHlwZV07XG4gICAgcmV0dXJuIHBhcmVudE9rICYmIHBhcmVudC5ibG9jayA9PT0gYmxvY2sgJiYgYmxvY2tPaztcbiAgfSxcblxuICAvLyBoZXVyaXN0aWNzIHRvIGRldGVybWluZSBpZiBkb3Qgc3ludGF4IGlzIHByZWZlcnJlZCBvdmVyIHBpcGVkIHRleHRcbiAgdXNlRG90KGJsb2NrLCBwYXJlbnQpIHtcbiAgICBpZiAoIWJsb2NrLm5vZGVzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gbGluZSBjb3VudFxuICAgIGNvbnN0IGxpbmVzID1cbiAgICAgIGJsb2NrLm5vZGVzW2Jsb2NrLm5vZGVzLmxlbmd0aCAtIDFdLmxpbmUgLSBibG9jay5ub2Rlc1swXS5saW5lICsgMTtcbiAgICBpZiAobGluZXMgPT09IDEpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIHdvcmQgY291bnQgb2YgVGV4dCBub2RlIHZhbHVlc1xuICAgIGxldCB3b3JkcyA9IDA7XG4gICAgLy8gbnVtYmVyIG9mIENvZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlaXIgb3duIGxpbmVzXG4gICAgbGV0IGNvZGVzV2l0aE93bkxpbmUgPSAwO1xuICAgIC8vIGlmIHRoZSBwcmV2aW91cyBub2RlIHdhcyB0aGUgZmlyc3QgaW4gaXRzIGxpbmVcbiAgICBsZXQgcHJldlN0YXJ0TGluZSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9jay5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGJsb2NrLm5vZGVzW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGJsb2NrLm5vZGVzW2kgLSAxXSB8fCBwYXJlbnQgfHwgeyBsaW5lOiAtMSB9O1xuICAgICAgY29uc3QgbmV4dCA9IGJsb2NrLm5vZGVzW2ldO1xuXG4gICAgICBpZiAobm9kZS50eXBlID09PSAnVGV4dCcpIHtcbiAgICAgICAgd29yZHMgKz0gKG5vZGUudmFsLm1hdGNoKC9cXHcrKFxccyt8JCkvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnQ29kZScgJiYgbm9kZS5idWZmZXIgJiYgIW5vZGUuYmxvY2spIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChub2RlLmxpbmUgPiBwcmV2LmxpbmUgfHxcbiAgICAgICAgICAgIChwcmV2LnR5cGUgPT09ICdUZXh0JyAmJiBwcmV2LnZhbCA9PT0gJ1xcbicpKSAmJlxuICAgICAgICAgIHByZXZTdGFydExpbmVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29kZXNXaXRoT3duTGluZSsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUZWNobmljYWxseSBUYWdzIGNhbiBhbHNvIGJlIGludGVycG9sYXRlZCwgYnV0IGRldGVybWluZSB3aGV0aGVyIHRvXG4gICAgICAgIC8vIHVzZSBtdWx0aXBsZSBkb3QgYmxvY2tzIG9yIG9uZSBzaW5nbGUgZG90IGJsb2NrIGlzIHdheSB0b29cbiAgICAgICAgLy8gY29tcGxpY2F0ZWQuIEtJU1MuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHByZXZTdGFydExpbmUgPVxuICAgICAgICBub2RlLmxpbmUgPiBwcmV2LmxpbmUgfHwgKHByZXYudHlwZSA9PT0gJ1RleHQnICYmIHByZXYudmFsID09PSAnXFxuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRzID4gMCAmJiBjb2Rlc1dpdGhPd25MaW5lIC8gbGluZXMgPCAwLjM1O1xuICB9LFxuXG4gIHZpc2l0UGlwZWxlc3NUZXh0KHZhbCwgbm9Fc2NhcGUpIHtcbiAgICBsZXQgYnVmID0gdmFsLnJlcGxhY2UoL1xcbi9nLCBgXFxuJHt0aGlzLmluZGVudCgpfWApO1xuICAgIGlmICghbm9Fc2NhcGUpIGJ1ZiA9IGJ1Zi5yZXBsYWNlKC9cXFxcPyMoW1t7XSkvZywgJ1xcXFwjJDEnKTtcbiAgICB0aGlzLmJ1ZmZlcihidWYpO1xuICB9LFxuXG4gIHZpc2l0UGlwZWxlc3NUZXh0QmxvY2soYmxvY2ssIG5vRXNjYXBlKSB7XG4gICAgY29uc3Qgb3JpZ0luZGVudHMgPSB0aGlzLmluZGVudHM7XG4gICAgaWYgKCErK3RoaXMuaW5kZW50cykgdGhpcy5pbmRlbnRzKys7XG4gICAgdGhpcy5idWZMaW5lKCk7XG4gICAgYmxvY2subm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLnR5cGUgPT09ICdUZXh0Jykge1xuICAgICAgICB0aGlzLnZpc2l0UGlwZWxlc3NUZXh0KG5vZGUudmFsLCBub0VzY2FwZSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ0NvZGUnIHx8IG5vZGUudHlwZSA9PT0gJ1RhZycpIHtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLCBibG9jaywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgbm9kZTogJHtKU09OLnN0cmluZ2lmeShub2RlKX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmluZGVudHMgPSBvcmlnSW5kZW50cztcbiAgfSxcblxuICB2aXNpdChub2RlLCBwYXJlbnQsIGlubGluZSkge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgdmFyIG1zZztcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbXNnID0gYEEgY2hpbGQgb2YgJHtwYXJlbnQudHlwZX0gKCR7cGFyZW50LmZpbGVuYW1lIHx8XG4gICAgICAgICAgJ1B1Zyd9OiR7cGFyZW50LmxpbmV9KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSAnQSB0b3AtbGV2ZWwgbm9kZSc7XG4gICAgICB9XG4gICAgICBtc2cgKz0gYCBpcyAke25vZGV9LCBleHBlY3RlZCBhIFB1ZyBBU1QgTm9kZS5gO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIGlmICghdGhpc1tgdmlzaXQke25vZGUudHlwZX1gXSkge1xuICAgICAgdmFyIG1zZztcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbXNnID0gYEEgY2hpbGQgb2YgJHtwYXJlbnQudHlwZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gJ0EgdG9wLWxldmVsIG5vZGUnO1xuICAgICAgfVxuICAgICAgbXNnICs9XG4gICAgICAgIGAgKCR7bm9kZS5maWxlbmFtZSB8fCAnUHVnJ306JHtub2RlLmxpbmV9KWAgK1xuICAgICAgICBgIGlzIG9mIHR5cGUgJHtub2RlLnR5cGV9LGAgK1xuICAgICAgICBgIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgYnkgcHVnLXNvdXJjZS1nZW4uYDtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobXNnKTtcbiAgICB9XG5cbiAgICB0aGlzW2B2aXNpdCR7bm9kZS50eXBlfWBdKG5vZGUsIGlubGluZSwgcGFyZW50KTtcbiAgfSxcblxuICB2aXNpdENhc2Uobm9kZSkge1xuICAgIHRoaXMuYnVmTGluZShgY2FzZSAke25vZGUuZXhwcn1gKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYmxvY2ssIG5vZGUpO1xuICB9LFxuXG4gIHZpc2l0V2hlbihub2RlKSB7XG4gICAgaWYgKG5vZGUuZXhwciA9PSAnZGVmYXVsdCcpIHtcbiAgICAgIHRoaXMuYnVmTGluZSgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1ZkxpbmUoYHdoZW4gJHtub2RlLmV4cHJ9YCk7XG4gICAgfVxuICAgIGlmIChub2RlLmJsb2NrKSB7XG4gICAgICBpZiAobm9kZS5ibG9jay5ub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5idWZMaW5lKCcnLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS5ibG9jaywgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHZpc2l0TmFtZWRCbG9jayhibG9jaykge1xuICAgIGlmIChibG9jay5tb2RlID09PSAncmVwbGFjZScpIHtcbiAgICAgIHRoaXMuYnVmTGluZShgYmxvY2sgJHtibG9jay5uYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1ZkxpbmUoYCR7YmxvY2subW9kZX0gJHtibG9jay5uYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXNpdEJsb2NrKGJsb2NrKTtcbiAgfSxcblxuICB2aXNpdEJsb2NrKGJsb2NrLCBpbmxpbmUsIHBhcmVudCkge1xuICAgIGlmIChibG9jay55aWVsZCkge1xuICAgICAgdGhpcy5idWZMaW5lKCd5aWVsZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9yaWdpbmFsTmVzdGVkID0gdGhpcy5uZXN0ZWQ7XG4gICAgaWYgKHRoaXMudXNlRG90KGJsb2NrLCBwYXJlbnQpKSB7XG4gICAgICBpZiAocGFyZW50ICYmIChwYXJlbnQudHlwZSA9PT0gJ1RhZycgfHwgcGFyZW50LnR5cGUgPT09ICdNaXhpbicpKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyKCcuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ1ZkxpbmUoJy4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnZpc2l0UGlwZWxlc3NUZXh0QmxvY2soYmxvY2spO1xuICAgIH0gZWxzZSBpZiAodGhpcy51c2VDb2xvbihibG9jaywgcGFyZW50KSkge1xuICAgICAgdGhpcy5idWZmZXIoJzogJyk7XG4gICAgICB0aGlzLm5lc3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnZpc2l0KGJsb2NrLm5vZGVzWzBdLCBibG9jaywgdHJ1ZSk7XG4gICAgICB0aGlzLm5lc3RlZCA9IG9yaWdpbmFsTmVzdGVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmVzdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRlbnRzKys7XG4gICAgbGV0IHByZXZOb2RlID0gcGFyZW50IHx8IHt9O1xuICAgIGJsb2NrLm5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgIHRoaXMudmlzaXQobm9kZSwgYmxvY2ssICFpID8gaW5saW5lIDogcHJldk5vZGUubGluZSA9PT0gbm9kZS5saW5lKTtcbiAgICAgIHByZXZOb2RlID0gbm9kZTtcbiAgICB9KTtcbiAgICB0aGlzLmluZGVudHMtLTtcbiAgICB0aGlzLm5lc3RlZCA9IG9yaWdpbmFsTmVzdGVkO1xuICB9LFxuXG4gIHZpc2l0TWl4aW5CbG9jayhibG9jaykge1xuICAgIHRoaXMuYnVmTGluZSgnYmxvY2snKTtcbiAgfSxcblxuICB2aXNpdERvY3R5cGUoZG9jdHlwZSkge1xuICAgIGxldCBidWYgPSAnZG9jdHlwZSc7XG4gICAgaWYgKGRvY3R5cGUudmFsKSB7XG4gICAgICBidWYgKz0gYCAke2RvY3R5cGUudmFsfWA7XG4gICAgfVxuICAgIHRoaXMuYnVmTGluZShidWYpO1xuICB9LFxuXG4gIHZpc2l0TWl4aW4obWl4aW4sIGlubGluZSwgcGFyZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSBtaXhpbi5hdHRycztcbiAgICAvLyBpZiB0aGVyZSBhcmUgYXR0cnMsIGAoKWAgbmVlZGVkIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIGFyZ3MgYW5kIGF0dHJzXG4gICAgY29uc3QgYXJncyA9IG1peGluLmFyZ3MgfHwgYXR0cnMubGVuZ3RoID8gYCgke21peGluLmFyZ3N9KWAgOiAnJztcbiAgICBjb25zdCBibG9jayA9IG1peGluLmJsb2NrO1xuICAgIGNvbnN0IGtleSA9IG1peGluLm5hbWU7XG5cbiAgICBpZiAobWl4aW4uY2FsbCkge1xuICAgICAgY29uc3QgYnVmID0gYCske2tleX0ke2FyZ3N9JHt0aGlzLmF0dHJzKGF0dHJzKX0ke3RoaXMuYXR0cmlidXRlQmxvY2tzKFxuICAgICAgICBtaXhpbi5hdHRyaWJ1dGVCbG9ja3MsXG4gICAgICApfWA7XG4gICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgIGlmICghdGhpcy5uZXN0ZWQpIHRoaXMuYnVmZmVyKCcjWycpO1xuICAgICAgICB0aGlzLmJ1ZmZlcihidWYpO1xuICAgICAgICBpZiAoIXRoaXMubmVzdGVkKSB0aGlzLmJ1ZmZlcignXScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idWZMaW5lKGJ1Zik7XG4gICAgICB9XG4gICAgICBpZiAobm9kZUlubGluZSAmJiAobm9kZXNbMF0udHlwZSAhPT0gJ0NvZGUnIHx8IG5vZGVzLmxlbmd0aCAhPT0gMSkpXG4gICAgICAgIHRoaXMuYnVmZmVyKCcgJyk7XG4gICAgICBpZiAoYmxvY2sgJiYgYmxvY2subm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBub2RlcyA9IGJsb2NrLm5vZGVzO1xuICAgICAgICB2YXIgbm9kZUlubGluZSA9XG4gICAgICAgICAgbm9kZXNbMF0ubGluZSA9PT0gbWl4aW4ubGluZSAmJiAhdGhpcy51c2VDb2xvbihibG9jaywgbWl4aW4pO1xuICAgICAgICBpZiAobm9kZUlubGluZSAmJiAobm9kZXNbMF0udHlwZSAhPT0gJ0NvZGUnIHx8IG5vZGVzLmxlbmd0aCAhPT0gMSkpXG4gICAgICAgICAgdGhpcy5idWZmZXIoJyAnKTtcbiAgICAgICAgdGhpcy52aXNpdChibG9jaywgbWl4aW4sIG5vZGVJbmxpbmUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1ZkxpbmUoYG1peGluICR7a2V5fSR7YXJnc31gKTtcbiAgICAgIGlmIChibG9jaykgdGhpcy52aXNpdChibG9jaywgbWl4aW4pO1xuICAgIH1cbiAgfSxcblxuICB2aXNpdFRhZyh0YWcsIGlubGluZSwgcGFyZW50KSB7XG4gICAgbGV0IG5hbWUgPSB0YWcubmFtZSxcbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gYXR0cnNcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmF0dHJzKHRhZy5hdHRycyk7XG4gICAgYXR0cnMgKz0gdGhpcy5hdHRyaWJ1dGVCbG9ja3ModGFnLmF0dHJpYnV0ZUJsb2Nrcyk7XG5cbiAgICBsZXQgYnVmID0gJyc7XG5cbiAgICAvLyB0YWcgbmFtZVxuICAgIGlmICh0YWcuYnVmZmVyKSBidWYgKz0gYCN7JHtuYW1lfX1gO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdGFnLnNlbGZDbG9zaW5nIHx8XG4gICAgICBuYW1lICE9PSAnZGl2JyB8fFxuICAgICAgKGF0dHJzWzBdICE9PSAnLicgJiYgYXR0cnNbMF0gIT09ICcjJylcbiAgICApIHtcbiAgICAgIGJ1ZiArPSBuYW1lO1xuICAgIH1cblxuICAgIC8vIHNlbGYtY2xvc2luZ1xuICAgIGlmICh0YWcuc2VsZkNsb3NpbmcpIGJ1ZiArPSAnLyc7XG5cbiAgICBidWYgKz0gYXR0cnM7XG5cbiAgICAvLyBidWZmZXIgdGFnIHN0dWJcbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICBpZiAoIXRoaXMubmVzdGVkKSB0aGlzLmJ1ZmZlcignI1snKTtcbiAgICAgIHRoaXMuYnVmZmVyKGJ1Zik7XG4gICAgfSBlbHNlIHRoaXMuYnVmTGluZShidWYpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgY29kZVxuICAgIGlmICh0YWcuY29kZSkgdGhpcy52aXNpdENvZGUodGFnLmNvZGUsIHRydWUpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBibG9ja1xuICAgIGlmICh0YWcuYmxvY2subm9kZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHRhZy5ibG9jay5ub2RlcztcbiAgICAgIGNvbnN0IG5vZGVJbmxpbmUgPVxuICAgICAgICBub2Rlc1swXS5saW5lID09PSB0YWcubGluZSAmJiAhdGhpcy51c2VDb2xvbih0YWcuYmxvY2ssIHRhZyk7XG4gICAgICBpZiAobm9kZUlubGluZSAmJiAobm9kZXNbMF0udHlwZSAhPT0gJ0NvZGUnIHx8IG5vZGVzLmxlbmd0aCAhPT0gMSkpXG4gICAgICAgIHRoaXMuYnVmZmVyKCcgJyk7XG4gICAgICB0aGlzLnZpc2l0KHRhZy5ibG9jaywgdGFnLCBub2RlSW5saW5lKTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lICYmICF0aGlzLm5lc3RlZCkgdGhpcy5idWZmZXIoJ10nKTtcbiAgfSxcblxuICB2aXNpdFRleHQodGV4dCwgaW5saW5lKSB7XG4gICAgaWYgKCF0ZXh0LnZhbCkgcmV0dXJuO1xuXG4gICAgaWYgKHRleHQuaXNIdG1sKSB7XG4gICAgICBpZiAoIWlubGluZSAmJiAhdGhpcy5uZXN0ZWQpIHRoaXMuYnVmTGluZSgpO1xuICAgICAgdGhpcy52aXNpdFBpcGVsZXNzVGV4dCh0ZXh0LnZhbCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0ZXh0LnZhbCA9PT0gJ1xcbicpIHtcbiAgICAgIGlmIChpbmxpbmUgfHwgdGhpcy5uZXN0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbmxpbmUgdGV4dCBjb250YWlucyBuZXcgbGluZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5idWZMaW5lKCd8ICcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzcmMgPSB0ZXh0LnZhbC5yZXBsYWNlKC9cXFxcPyMoW1t7XSkvZywgJ1xcXFwjJDEnKTtcbiAgICBpZiAoaW5saW5lICYmICF0aGlzLm5lc3RlZCkge1xuICAgICAgdGhpcy5idWZmZXIoc3JjKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVzdGVkKSB7XG4gICAgICB0aGlzLmJ1ZmZlcihgfCAke3NyY31gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWZMaW5lKGB8ICR7c3JjfWApO1xuICAgIH1cbiAgfSxcblxuICB2aXNpdENvbW1lbnQoY29tbWVudCkge1xuICAgIGxldCBidWYgPSAnLy8nO1xuICAgIGlmICghY29tbWVudC5idWZmZXIpIGJ1ZiArPSAnLSc7XG4gICAgYnVmICs9IGNvbW1lbnQudmFsO1xuICAgIHRoaXMuYnVmTGluZShidWYpO1xuICB9LFxuXG4gIHZpc2l0QmxvY2tDb21tZW50KGNvbW1lbnQpIHtcbiAgICBsZXQgYnVmID0gJy8vJztcbiAgICBpZiAoIWNvbW1lbnQuYnVmZmVyKSBidWYgKz0gJy0nO1xuICAgIGlmIChjb21tZW50LnZhbCkgYnVmICs9IGNvbW1lbnQudmFsO1xuICAgIHRoaXMuYnVmTGluZShidWYpO1xuXG4gICAgdGhpcy52aXNpdFBpcGVsZXNzVGV4dEJsb2NrKGNvbW1lbnQuYmxvY2spO1xuICB9LFxuXG4gIHZpc2l0Q29kZShjb2RlLCBpbmxpbmUsIHBhcmVudCkge1xuICAgIGNvbnN0IHBhcmVudEJsb2NrID0gcGFyZW50ICYmIGdldEJsb2NrKHBhcmVudCk7XG4gICAgaWYgKGlubGluZSAmJiBwYXJlbnRCbG9jayAmJiBwYXJlbnRCbG9jay5ub2Rlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIGlmIChjb2RlLmJ1ZmZlcikgdGhpcy5idWZmZXIoYCR7Y29kZS5lc2NhcGUgPyAnIycgOiAnISd9eyR7Y29kZS52YWx9fWApO1xuICAgICAgZWxzZSB0aGlzLmJ1ZmZlcihgI1stICR7Y29kZS52YWx9XWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYnVmID0gJyc7XG5cbiAgICAgIC8vIG9wZXJhdG9yXG4gICAgICBpZiAoY29kZS5idWZmZXIpIHtcbiAgICAgICAgaWYgKCFjb2RlLmVzY2FwZSkgYnVmICs9ICchJztcbiAgICAgICAgYnVmICs9ICc9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1ZiArPSAnLSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmxpbmUpIHRoaXMuYnVmZmVyKGJ1Zik7XG4gICAgICBlbHNlIHRoaXMuYnVmTGluZShidWYpO1xuXG4gICAgICAvLyB2YWx1ZVxuICAgICAgaWYgKGNvZGUudmFsLmluZGV4T2YoJ1xcbicpID09PSAtMSkge1xuICAgICAgICB0aGlzLmJ1ZmZlcihgICR7Y29kZS52YWx9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGVudHMrKztcbiAgICAgICAgdGhpcy5idWZMaW5lKCk7XG4gICAgICAgIHRoaXMudmlzaXRQaXBlbGVzc1RleHQoY29kZS52YWwpO1xuICAgICAgICB0aGlzLmluZGVudHMtLTtcbiAgICAgIH1cblxuICAgICAgLy8gYmxvY2tcbiAgICAgIGlmIChjb2RlLmJsb2NrKSB0aGlzLnZpc2l0KGNvZGUuYmxvY2ssIGNvZGUpO1xuICAgIH1cbiAgfSxcblxuICB2aXNpdENvbmRpdGlvbmFsKGNvbmQpIHtcbiAgICBjb25zdCBvdXQgPSBgaWYgJHtjb25kLnRlc3R9YDtcbiAgICB0aGlzLmJ1ZkxpbmUob3V0KTtcblxuICAgIHRoaXMudmlzaXQoY29uZC5jb25zZXF1ZW50LCBjb25kKTtcblxuICAgIGlmIChjb25kLmFsdGVybmF0ZSkge1xuICAgICAgaWYgKGNvbmQuYWx0ZXJuYXRlLnR5cGUgPT09ICdDb25kaXRpb25hbCcpIHtcbiAgICAgICAgdGhpcy5idWZMaW5lKCdlbHNlICcpO1xuICAgICAgICB0aGlzLnZpc2l0Q29uZGl0aW9uYWwoY29uZC5hbHRlcm5hdGUsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idWZMaW5lKCdlbHNlJyk7XG4gICAgICAgIHRoaXMudmlzaXQoY29uZC5hbHRlcm5hdGUsIGNvbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB2aXNpdFdoaWxlKGxvb3ApIHtcbiAgICBjb25zdCB0ZXN0ID0gbG9vcC50ZXN0O1xuICAgIHRoaXMuYnVmTGluZShgd2hpbGUgJHt0ZXN0fWApO1xuICAgIHRoaXMudmlzaXQobG9vcC5ibG9jaywgbG9vcCk7XG4gIH0sXG5cbiAgdmlzaXRFYWNoKGVhY2gpIHtcbiAgICB0aGlzLmJ1ZkxpbmUoXG4gICAgICBgZWFjaCAke2VhY2gudmFsfSR7ZWFjaC5rZXkgPyBgLCAke2VhY2gua2V5fWAgOiAnJ30gaW4gJHtlYWNoLm9ian1gLFxuICAgICk7XG4gICAgdGhpcy52aXNpdChlYWNoLmJsb2NrLCBlYWNoKTtcbiAgICBpZiAoZWFjaC5hbHRlcm5hdGl2ZSkge1xuICAgICAgdGhpcy5idWZMaW5lKCdlbHNlJyk7XG4gICAgICB0aGlzLnZpc2l0KGVhY2guYWx0ZXJuYXRpdmUpO1xuICAgIH1cbiAgfSxcbiAgdmlzaXRSYXdJbmNsdWRlKGluY2x1ZGUpIHtcbiAgICB0aGlzLmJ1ZkxpbmUoJ2luY2x1ZGUnKTtcbiAgICBpZiAoaW5jbHVkZS5maWx0ZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyKGA6JHsgIGluY2x1ZGUuZmlsdGVyICB9JHt0aGlzLmF0dHJzKGluY2x1ZGUuYXR0cnMpfWApO1xuICAgIH1cbiAgICB0aGlzLmJ1ZmZlcignICcpO1xuICAgIHRoaXMudmlzaXQoaW5jbHVkZS5maWxlKTtcbiAgfSxcbiAgdmlzaXRFeHRlbmRzKG5vZGUpIHtcbiAgICB0aGlzLmJ1ZkxpbmUoJ2V4dGVuZHMgJyk7XG4gICAgdGhpcy52aXNpdChub2RlLmZpbGUpO1xuICB9LFxuXG4gIHZpc2l0RmlsZVJlZmVyZW5jZShmaWxlKSB7XG4gICAgdGhpcy5idWZmZXIoZmlsZS5wYXRoKTtcbiAgfSxcblxuICB2aXNpdEluY2x1ZGUoaW5jbHVkZSkge1xuICAgIHRoaXMuYnVmTGluZSgnaW5jbHVkZScpO1xuICAgIGlmIChpbmNsdWRlLmZpbHRlcikge1xuICAgICAgdGhpcy5idWZmZXIoYDoke2luY2x1ZGUuZmlsdGVyfSR7dGhpcy5hdHRycyhpbmNsdWRlLmF0dHJzKX1gKTtcbiAgICB9XG4gICAgdGhpcy5idWZmZXIoJyAnKTtcbiAgICB0aGlzLnZpc2l0KGluY2x1ZGUuZmlsZSk7XG4gICAgdGhpcy52aXNpdChpbmNsdWRlLmJsb2NrKTtcbiAgfSxcblxuICB2aXNpdEZpbHRlcihmaWx0ZXIsIGlubGluZSwgcGFyZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGZpbHRlci5uYW1lO1xuXG4gICAgY29uc3QgYnVmID0gYDoke25hbWV9JHt0aGlzLmF0dHJzKGZpbHRlci5hdHRycyl9YDtcbiAgICBpZiAoaW5saW5lICYmICF0aGlzLm5lc3RlZCkgdGhpcy5idWZmZXIoJyNbJyk7XG4gICAgaWYgKGlubGluZSB8fCB0aGlzLm5lc3RlZCkgdGhpcy5idWZmZXIoYnVmKTtcbiAgICBlbHNlIHRoaXMuYnVmTGluZShidWYpO1xuXG4gICAgaWYgKGZpbHRlci5ibG9jay5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChmaWx0ZXIuYmxvY2subm9kZXNbMF0udHlwZSA9PT0gJ0ZpbHRlcicpIHtcbiAgICAgICAgaWYgKGZpbHRlci5ibG9jay5ub2Rlcy5sZW5ndGggPiAxKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBmaWx0ZXIgd2l0aCBtb3JlIHRoYW4gb25lIG5vbi10ZXh0IG5vZGVzOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxOZXN0ZWQgPSB0aGlzLm5lc3RlZDtcbiAgICAgICAgdGhpcy5uZXN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpc2l0RmlsdGVyKGZpbHRlci5ibG9jay5ub2Rlc1swXSwgaW5saW5lLCBmaWx0ZXIpO1xuICAgICAgICB0aGlzLm5lc3RlZCA9IG9yaWdpbmFsTmVzdGVkO1xuICAgICAgfSBlbHNlIGlmIChpbmxpbmUgJiYgIXRoaXMubmVzdGVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXIuYmxvY2subm9kZXNbMF0udHlwZSA9PT0gJ1RleHQnKSB0aGlzLmJ1ZmZlcignICcpO1xuICAgICAgICB0aGlzLnZpc2l0KGZpbHRlci5ibG9jaywgcGFyZW50LCBpbmxpbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52aXNpdFBpcGVsZXNzVGV4dEJsb2NrKGZpbHRlci5ibG9jaywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlubGluZSAmJiAhdGhpcy5uZXN0ZWQpIHRoaXMuYnVmZmVyKCddJyk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnZXRCbG9jayhub2RlKSB7XG4gIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgY2FzZSAnQmxvY2snOlxuICAgIGNhc2UgJ05hbWVkQmxvY2snOlxuICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICBjYXNlICdCbG9ja0NvbW1lbnQnOlxuICAgIGNhc2UgJ0Nhc2UnOlxuICAgIGNhc2UgJ0NvZGUnOlxuICAgIGNhc2UgJ0VhY2gnOlxuICAgIGNhc2UgJ0ZpbHRlcic6XG4gICAgY2FzZSAnTWl4aW4nOlxuICAgIGNhc2UgJ1RhZyc6XG4gICAgY2FzZSAnV2hlbic6XG4gICAgY2FzZSAnV2hpbGUnOlxuICAgICAgcmV0dXJuIG5vZGUuYmxvY2s7XG5cbiAgICBjYXNlICdDb25kaXRpb25hbCc6XG4gICAgICByZXR1cm4gbm9kZS5jb25zZXF1ZW50O1xuXG4gICAgY2FzZSAnQ29tbWVudCc6XG4gICAgY2FzZSAnRG9jdHlwZSc6XG4gICAgY2FzZSAnRXh0ZW5kcyc6XG4gICAgY2FzZSAnRmlsZVJlZmVyZW5jZSc6XG4gICAgY2FzZSAnSW5jbHVkZSc6XG4gICAgY2FzZSAnVGV4dCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGhlcmUgaXMgbm8gYmxvY2sgaW4gdGhpcyBub2RlJyk7XG4gIH1cbn1cbiJdfQ==
