import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange, withState } from 'recompose';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import PluginEditCode from 'slate-edit-code';
import PluginPrism from 'slate-prism';
import cn from 'classnames';

import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-pug';

import toPug from './to-pug';
import toSlate from './to-slate';
import useJsonState from '../use-json-state';

const CodeLine = ({ children, attributes }) => (
  <div {...attributes}>{children}</div>
);

const Code = ({ children, attributes, className }) => (
  <pre className={cn(className, `language-pug`)}>
    <code className="language-pug" {...attributes}>
      {children}
    </code>
  </pre>
);

const renderNode = props => {
  if (props.node.type === 'code') {
    return <Code {...props} />;
  } else if (props.node.type === 'code-line') {
    return <CodeLine {...props} />;
  }
};

const enhance = compose(
  withState('isFull', 'setIsFull'),
  withState('isCode', 'setIsCode'),
  withPropsOnChange(['value'], ({ value, onChange }) => ({
    value: {
      kind: 'document',
      nodes: [
        {
          kind: 'block',
          type: 'code',
          nodes: toPug(value)
            .split('\n')
            .map(line => ({
              kind: 'block',
              type: 'code-line',
              nodes: [
                {
                  kind: 'text',
                  leaves: [
                    {
                      kind: 'leaf',
                      text: line,
                    },
                  ],
                },
              ],
            })),
        },
      ],
    },
    onChange: change =>
      console.log(
        toSlate(
          Plain.serialize(
            Value.fromJSON({
              document: change,
              kind: 'value',
            }),
          ),
        ),
      ),
  })),
  useJsonState,
  withPropsOnChange('plugins', ({ plugins = [] }) => ({
    plugins: [
      PluginEditCode({
        containerType: 'code',
        lineType: 'code-line',
        exitBlockType: 'paragraph',
        onlyIn: node => node.type === 'code',
      }),
      PluginPrism({
        onlyIn: node => node.type === 'code',
        getSyntax: () => 'pug',
      }),
      {
        renderNode,
      },
    ],
  })),
);

class Writer extends Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    showUndo: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.object,
    onChange: PropTypes.func,
    nodes: PropTypes.object,
    autoMarkDownKeyDown: PropTypes.func,
    plugins: PropTypes.array,
    className: PropTypes.string,
  };

  onChange = change => this.props.onChange(change.value);

  render = () => {
    const {
      children,
      readOnly,
      className,
      spellcheck,
      schema = {},
      renderNode,
      style = {},
      full,
      isCode,
      setIsCode,
      setFull,
      isFull,
      setIsFull,
      ...rest
    } = this.props;
    return (
      <Editor
        {...rest}
        className="slate-editor slate-writer"
        spellcheck={spellcheck || false}
        readOnly={false}
        onDrop={this.onDrop}
        onPaste={this.onPaste}
        renderNode={renderNode}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={!readOnly && 'Hier Text eingeben...'}
        placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
        style={{ height: '100%', ...style }}
      />
    );
  };
}

export default enhance(Writer);
