import markdownparser from './markdown-parser'
import { Raw } from 'slate'
import { Record } from 'immutable'

/**
 * String.
 */

const String = new Record({
  kind: 'string',
  text: ''
})

/**
 * Rules to (de)serialize nodes.
 *
 * @type {Object}
 */

const RULES = [
  {
    serialize(obj, children) {
      if (obj.kind == 'string') {
        return children
      }
    }
  },
  {
    serialize(obj, children) {
      if (obj.kind != 'block') return

      switch (obj.type) {
        case 'paragraph': return `\n${children}\n`
        case 'block-quote': return `> ${children}\n`
        case 'bulleted-list': return children
        case 'list-item': return `* ${children}\n`
        case 'heading1': return `# ${children}`
        case 'heading2': return `## ${children}`
        case 'heading3': return `### ${children}`
        case 'heading4': return `#### ${children}`
        case 'heading5': return `##### ${children}`
        case 'heading6': return `###### ${children}`
        case 'heading6': return `###### ${children}`
        case 'horizontal-rule': return `---`
        case 'image':
          let title = obj.getIn(['data','title']);
          let src = obj.getIn(['data','src']);
          let alt = obj.getIn(['data','alt']);
          return `![${title}](${src} "${alt}")`
      }
    }
  },
  {
    serialize(obj, children) {
      if (obj.kind != 'inline') return
      switch (obj.type) {
        case 'link': return `[${children}](${obj.getIn(['data','href'])})`
      }
    }
  },
  // Add a new rule that handles marks...
  {
    serialize(obj, children) {
      if (obj.kind != 'mark') return
      switch (obj.type) {
        case 'bold': return `**${children}**`
        case 'italic': return `*${children}*`
        case 'code': return `\`${children}\``
        case 'inserted': return `__${children}__`
        case 'deleted': return `~~${children}~~`

      }
    }
  }
]



/**
 * Markdown serializer.
 *
 * @type {Markdown}
 */

class Markdown {

  /**
   * Create a new serializer with `rules`.
   *
   * @param {Object} options
   *   @property {Array} rules
   * @return {Markdown} serializer
   */

  constructor(options = {}) {
    this.rules = [
      ...(options.rules || []),
      ...RULES
    ];

    this.serializeNode = this.serializeNode.bind(this);
    this.serializeRange = this.serializeRange.bind(this);
    this.serializeString = this.serializeString.bind(this);
  }


  /**
   * Serialize a `state` object into an HTML string.
   *
   * @param {State} state
   * @return {String} markdown
   */

  serialize(state) {
    const { document } = state
    const elements = document.nodes.map(this.serializeNode)

    return elements.join('\n').trim();
  }

  /**
   * Serialize a `node`.
   *
   * @param {Node} node
   * @return {String}
   */

  serializeNode(node) {
    if (node.kind == 'text') {
      const ranges = node.getRanges()
      return ranges.map(this.serializeRange)
    }

    let children = node.nodes.map(this.serializeNode);
    children = children.flatten().length === 0 ? '' : children.flatten().join('')

    for (const rule of this.rules) {
      if (!rule.serialize) continue
      const ret = rule.serialize(node, children)
      if (ret) return ret
    }
  }

  /**
   * Serialize a `range`.
   *
   * @param {Range} range
   * @return {String}
   */

  serializeRange(range) {
    const string = new String({ text: range.text })
    const text = this.serializeString(string)

    return range.marks.reduce((children, mark) => {
      for (const rule of this.rules) {
        if (!rule.serialize) continue
        const ret = rule.serialize(mark, children)
        if (ret) return ret
      }
    }, text);
  }

  /**
   * Serialize a `string`.
   *
   * @param {String} string
   * @return {String}
   */

  serializeString(string) {
    for (const rule of this.rules) {
      if (!rule.serialize) continue
      const ret = rule.serialize(string, string.text)
      if (ret) return ret
    }
  }

  /**
   * Deserialize a markdown `string`.
   *
   * @param {String} markdown
   * @return {State} state
   */
  deserialize(markdown) {
    const nodes = markdownparser.parse(markdown)
    const state = Raw.deserialize(nodes, { terse: true })
    return state
  }


}

/**
 * Export.
 */

export default Markdown
