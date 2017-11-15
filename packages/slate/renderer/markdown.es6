import { Raw } from 'slate';
import { Record } from 'immutable';
// import markdownparser from './markdownparser'

const String = new Record({
  kind: 'string',
  text: '',
});

const RULES = [
  {
    serialize(obj, children) {
      if (obj.kind === 'string') {
        return children;
      }
    },
  },
  {
    serialize(obj, children) {
      if (obj.kind !== 'block') return undefined;

      switch (obj.type) {
        case 'paragraph':
          return `\n${children}\n`;
        case 'block-quote':
          return `> ${children}\n`;
        case 'bulleted-list':
          return children;
        case 'list-item':
          return `* ${children}\n`;
        case 'heading1':
          return `# ${children}`;
        case 'heading2':
          return `## ${children}`;
        case 'heading3':
          return `### ${children}`;
        case 'heading4':
          return `#### ${children}`;
        case 'heading5':
          return `##### ${children}`;
        case 'heading6':
          return `###### ${children}`;
        case 'horizontal-rule':
          return `---`;
        case 'image':
          const title = obj.getIn(['data', 'title']);
          const src = obj.getIn(['data', 'src']);
          const alt = obj.getIn(['data', 'alt']);
          return `![${title}](${src} "${alt}")`;
        default:
          return undefined;
      }
    },
  },
  {
    serialize(obj, children) {
      if (obj.kind !== 'inline') return;
      switch (obj.type) {
        case 'link':
          return `[${children}](${obj.getIn(['data', 'href'])})`;
      }
    },
  },
  // Add a new rule that handles marks...
  {
    serialize(obj, children) {
      if (obj.kind != 'mark') return;
      switch (obj.type) {
        case 'bold':
          return `**${children}**`;
        case 'italic':
          return `*${children}*`;
        case 'code':
          return `\`${children}\``;
        case 'inserted':
          return `__${children}__`;
        case 'deleted':
          return `~~${children}~~`;
      }
    },
  },
];

class Markdown {
  constructor(options = {}) {
    this.rules = [...(options.rules || []), ...RULES];
    this.serializeNode = this.serializeNode.bind(this);
    this.serializeRange = this.serializeRange.bind(this);
    this.serializeString = this.serializeString.bind(this);
  }

  serialize(state) {
    const { document } = state;
    const elements = document.nodes.map(this.serializeNode);

    return elements.join('\n').trim();
  }

  serializeNode(node) {
    if (node.kind == 'text') {
      const ranges = node.getRanges();
      return ranges.map(this.serializeRange);
    }

    let children = node.nodes.map(this.serializeNode);
    children =
      children.flatten().length === 0 ? '' : children.flatten().join('');

    for (const rule of this.rules) {
      if (!rule.serialize) continue;
      const ret = rule.serialize(node, children);
      if (ret) return ret;
    }
  }

  serializeRange(range) {
    const string = new String({ text: range.text });
    const text = this.serializeString(string);

    return range.marks.reduce((children, mark) => {
      for (const rule of this.rules) {
        if (!rule.serialize) continue;
        const ret = rule.serialize(mark, children);
        if (ret) return ret;
      }
    }, text);
  }

  serializeString(string) {
    for (const rule of this.rules) {
      if (!rule.serialize) continue;
      const ret = rule.serialize(string, string.text);
      if (ret) return ret;
    }
  }

  deserialize(markdown) {
    const nodes = markdownparser.parse(markdown);
    const state = Raw.deserialize(nodes, { terse: true });
    return state;
  }
}
export default Markdown;
