import React, { Component, PropTypes, Children } from 'react';
import { Gateway } from 'react-gateway';
import { Button } from 'antd';
import { Editor, Html, Raw, Plain } from 'slate';
import { withAuth } from '../core/decorators';
import {
  withSlateState,
  withSidebar,
  withToolbar,
  withAutoMarkdown,
  withUniqueId,
  useBlocks,
} from './editor-decorators';
import withBlockTypes from './decorators';
import { getId } from './utils/get-text';
import './style.less';

const getIdByTag = children => {
  const id = getId(Children.map(children, x => x.props.node));
  return `${id}`;
};

const options = {
  defaultNode: 'paragraph',
  toolbarMarks: [
    { type: 'bold', icon: 'bold' },
    { type: 'italic', icon: 'italic' },
    { type: 'underlined', icon: 'underline' },
    { type: 'center', icon: 'align-center' },
    { type: 'code', icon: 'code' },
  ],
  toolbarTypes: [
    {
      type: [
        'heading-one',
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
      ],
      icon: 'heading',
      description: [
        'Überschrift 1',
        'Überschrift 2',
        'Überschrift 3',
        'Überschrift 4',
        'Überschrift 5',
        'Überschrift 6',
      ],
    },
    { type: 'block-quote', icon: 'quote-left' },
    { type: 'numbered-list', icon: 'list-ol' },
    { type: 'bulleted-list', icon: 'list-ul' },
  ],
  toolbarActions: [
    {
      type: 'link', // ['link', 'link-page', 'link-media'],
      icon: 'link',
      description: 'Link', // ['Extern', 'Intern', 'Datei'],
      onClick: ({ value, onChange }, isActive) => {
        let newVal = value;

        if (isActive) {
          newVal = value
            .transform()
            .unwrapInline('link')
            .apply();
        } else {
          let href = window.prompt('URL');
          if (href) {
            if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1)
              href = `http://${href}`;
            newVal = newVal
              .transform()
              .wrapInline({
                type: 'link',
                data: { href, target: '_blank' },
              })
              .collapseToEnd()
              .apply();
          }
        }
        onChange(newVal);
      },
      isActive: ({ value }) =>
        value && value.inlines.some(inline => inline.type === 'link'),
    },
  ],
  sidebarTypes: [],
  nodes: {
    paragraph: ({ children, attributes }) => <p {...attributes}>{children}</p>,
    link: ({ node, attributes, children }) => (
      <a
        {...attributes}
        href={node.data.get('href')}
        target={node.data.get('target')}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    'block-quote': ({ children, attributes }) => (
      <blockquote {...attributes}>{children}</blockquote>
    ),
    'bulleted-list': ({ children, attributes }) => (
      <ul {...attributes}>{children}</ul>
    ),
    'numbered-list': ({ children, attributes }) => (
      <ol {...attributes}>{children}</ol>
    ),
    'heading-one': ({ children, attributes }) => (
      <h1 {...attributes} id={getIdByTag(children)}>
        {children}
      </h1>
    ),
    'heading-two': ({ children, attributes }) => (
      <h2 {...attributes} id={getIdByTag(children)}>
        {children}
      </h2>
    ),
    'heading-three': ({ children, attributes }) => (
      <h3 {...attributes} id={getIdByTag(children)}>
        {children}
      </h3>
    ),
    'heading-four': ({ children, attributes }) => (
      <h4 {...attributes} id={getIdByTag(children)}>
        {children}
      </h4>
    ),
    'heading-five': ({ children, attributes }) => (
      <h5 {...attributes} id={getIdByTag(children)}>
        {children}
      </h5>
    ),
    'heading-six': ({ children, attributes }) => (
      <h6 {...attributes} id={getIdByTag(children)}>
        {children}
      </h6>
    ),
    'bulleted-list-item': ({ children, attributes }) => (
      <li {...attributes}>{children}</li>
    ),
    'numbered-list-item': ({ children, attributes }) => (
      <li {...attributes}>{children}</li>
    ),
  },
  marks: {
    bold: ({ children, attributes }) => (
      <strong {...attributes}>{children}</strong>
    ),
    code: ({ children, attributes }) => <code {...attributes}>{children}</code>,
    italic: ({ children, attributes }) => <em {...attributes}>{children}</em>,
    underlined: ({ children, attributes }) => <u {...attributes}>{children}</u>,
    center: ({ children, attributes }) => (
      <center {...attributes}>{children}</center>
    ),
  },
  getMarkdownType: chars => {
    switch (chars) {
      case '*':
      case '-':
      case '+':
        return 'bulleted-list-item';
      case '>':
        return 'block-quote';
      case '#':
        return 'heading-one';
      case '##':
        return 'heading-two';
      case '###':
        return 'heading-three';
      case '####':
        return 'heading-four';
      case '#####':
        return 'heading-five';
      case '######':
        return 'heading-six';
      case '1.':
        return 'numbered-list-item';
      default:
        return null;
    }
  },
};

const serializer = new Html({
  rules: [
    {
      deserialize(el, next) {
        const types = {
          p: 'paragraph',
          li: 'list-item',
          ul: 'bulleted-list',
          ol: 'numbered-list',
          blockquote: 'quote',
          pre: 'code',
          h1: 'heading-one',
          h2: 'heading-two',
          h3: 'heading-three',
          h4: 'heading-four',
          h5: 'heading-five',
          h6: 'heading-six',
        };
        const block = types[el.tagName];
        if (!block) return undefined;
        return {
          kind: 'block',
          type: block,
          nodes: next(el.children),
        };
      },
    },
    {
      deserialize(el, next) {
        const marks = {
          strong: 'bold',
          em: 'italic',
          u: 'underline',
          s: 'strikethrough',
          code: 'code',
          left: 'left',
          center: 'center',
          right: 'right',
          justify: 'justify',
        };
        const mark = marks[el.tagName];
        if (!mark) return undefined;
        return {
          kind: 'mark',
          type: mark,
          nodes: next(el.children),
        };
      },
    },
    {
      // Special case for code blocks, which need to grab the nested children.
      deserialize(el, next) {
        if (el.tagName !== 'pre') return undefined;
        const code = el.children[0];
        const children =
          code && code.tagName === 'code' ? code.children : el.children;

        return {
          kind: 'block',
          type: 'code',
          nodes: next(children),
        };
      },
    },
    {
      // Special case for links, to grab their href.
      deserialize(el, next) {
        if (el.tagName !== 'a') return undefined;
        return {
          kind: 'inline',
          type: 'link',
          nodes: next(el.children),
          data: {
            href: el.attribs.href,
          },
        };
      },
    },
  ],
});

export const htmlSerializer = serializer;
export const rawSerializer = Raw;

const md = withAutoMarkdown(options);
@withBlockTypes
@withUniqueId()
@withSlateState({ terse: true })
@useBlocks(options)
@withToolbar(options)
@withSidebar(options)
export default class SlateEditor extends Component {
  plugins = [md];
  state = {};
  static propTypes = {
    readOnly: PropTypes.bool,
    showUndo: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.object,
    onChange: PropTypes.func,
    marks: PropTypes.object,
    nodes: PropTypes.object,
    autoMarkDownKeyDown: PropTypes.func,
    plugins: PropTypes.array,
    className: PropTypes.string,
  };
  static defaultProps = {
    readOnly: false,
  };

  onPaste = (e, data, state) => {
    if (data.type !== 'html') return undefined;
    const { document } = serializer.deserialize(data.html);
    return state
      .transform()
      .insertFragment(document)
      .apply();
  };

  onKeyDown = (e, data, state) => {
    if (e.shiftKey && data.key === 'enter') {
      // shift + enter
      return state
        .transform()
        .insertText('\n')
        .apply();
    } else if (e.metaKey || e.ctrlKey) {
      // cmd/ctrl + ???
      switch (data.key) {
        case 'b':
          return state
            .transform()
            .toggleMark('bold')
            .apply();
        case 'u':
          return state
            .transform()
            .toggleMark('underlined')
            .apply();
        case 'i':
          return state
            .transform()
            .toggleMark('italic')
            .apply();
        default:
          return undefined;
      }
    }
    return undefined;
  };

  render = () => {
    const {
      children,
      showUndo,
      value,
      onChange,
      readOnly,
      marks,
      nodes,
      plugins,
      className,
      spellcheck,
      style,
      ...rest
    } = this.props;

    const undo =
      !!value &&
      !!value.history &&
      !!value.history.undos &&
      !!value.history.undos['_head'] &&
      value.history.undos['_head'].value;
    // console.log(undo);

    return (
      <div className={className} style={{ position: 'relative', ...style }}>
        <Gateway into="undo">
          {false && undo && undo.length ? (
            <Button
              shape="circle"
              size="large"
              onClick={() =>
                onChange(
                  value
                    .transform()
                    .undo()
                    .apply()
                )
              }
            >
              <i className="fa fa-undo" aria-hidden="true" />
            </Button>
          ) : null}
        </Gateway>
        {children}
        <div className={className} style={{ position: 'relative', ...style }}>
          {children}
          <Editor
            {...rest}
            state={value || Plain.deserialize('')}
            spellcheck={spellcheck || false}
            readOnly={!!readOnly}
            plugins={this.plugins}
            schema={{ marks, nodes }}
            onChange={onChange}
            onPaste={this.onPaste}
            onKeyDown={this.onKeyDown}
          />
        </div>
      </div>
    );
  };
}

@withAuth
export class SlateMateFrontend extends Component {
  state = { expanded: false };

  render() {
    const { auth, ...rest } = this.props;
    const { expanded } = this.state;

    return auth && auth.user && !expanded ? (
      <div className="service-hint">
        <p>
          Das Anzeigen des Textes kann zu Fehlverhalten beim Inline-Editing
          führen.
        </p>
        <Button
          type="primary"
          onClick={() => this.setState({ expanded: true })}
        >
          Trotzdem anzeigen
        </Button>
      </div>
    ) : (
      <SlateEditor {...rest} />
    );
  }
}
