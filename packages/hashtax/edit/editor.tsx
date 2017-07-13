import React, { Component, PropTypes } from 'react';
import Slate from 'slate/lib/components/editor';
import Mark from 'slate/lib/models/mark';
import Raw from './serializer/raw';
import { Popover, Tag } from 'antd';
import { parseComponent } from '../processors';
import { styled } from 'olymp-utils';

const deserialize = (value) => {
  console.log('DESERIALIZE', value);
  return Raw.deserialize(value, { terse: true });
};
const serialize = (state) => {
  console.log('SERIALIZE', state);
  return Raw.serialize(state, { terse: true });
};

const Highlighted = styled(() => ({
  fontWeight: 'bold',
}), 'span', p => p);

const addMarks = (startChar, closeChar, markType, characters, string) => {
  const mark = Mark.create({ type: markType });
  let start = -startChar.length;
  while (true) {
    start = string.indexOf(startChar, start + startChar.length);
    if (start === -1) break;
    const end = string.indexOf(closeChar, start + startChar.length) + startChar.length;
    const size = end === 0 ? characters.size : end;
    for (let i = start; i < size; i + 1) {
      let char = characters.get(i);
      let { marks } = char;
      marks = marks.add(mark);
      char = char.set('marks', marks);
      characters.set(i, char);
    }
    start = size;
  } return characters;
};

const decorate = (text, block) => {
  const characters = text.characters.asMutable();
  const string = text.text;

  if (!string) return text.characters;

  if (string.indexOf('#') !== -1) {
    addMarks('#', '#', 'hashtax-inline', characters, string);
  }

  if (string.indexOf('{{') !== -1) {
    addMarks('{{', '}}', 'hashtax-inline-var', characters, string);
  } else if (string.indexOf('{') !== -1) {
    addMarks('{', '}', 'hashtax-var', characters, string);
  }

  return characters.asImmutable();
}

export default class SlateEditor extends Component {
  static contextTypes = {
    Hashtax: PropTypes.func,
  };

  getContentEditor = (propType, val) => {
    return val;
    // return <Input value={val} pla ceholder={propType} />;
  }

  getContent = (text) => {
    const { components } = this.context.Hashtax;
    const { type, args, decorators, raw } = parseComponent(text.split('#').join(''));
    const component = components[type];

    if (component && component.propTypes){
      return {
        content: (
          <div>
            {Object.keys(component.propTypes).map(key => (
              <p key={key}>
                <b>{key}: </b>
                {this.getContentEditor(key, args[key])}
              </p>
            ))}
          </div>
        ),
        title: type,
      };
    } return undefined;
  }

  getSchema = () => ({
    marks: {
      'hashtax-inline': ({ children, text }) => {
        const content = this.getContent(text);
        const inner = (
          <Highlighted>
            {children}
          </Highlighted>
        );
        if (content) {
          return (
            <Popover {...content}>
              {inner}
            </Popover>
          );
        } return inner;
      },
      'hashtax-inline-var': ({ children }) => <Tag color="blue">{children}</Tag>,
      'hashtax-var': ({ children }) => <Tag color="yellow">{children}</Tag>,
    },
    rules: [{
      match: () => true,
      decorate,
    }]
  });

  constructor(props) {
    super(props);
    this.plugins = [];
    this.state = { };
    this.value = props.value || '';
    this.editorState = deserialize(this.value);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.value) {
      this.value = newProps.value || '';
      this.editorState = deserialize(this.value);
    }
  }

  onChange = value => {
    this.editorState = value;
    this.setState({ }, () => {
      const newValue = serialize(value);
      if (newValue !== this.value) {
        this.value = newValue;
        this.props.onChange(newValue);
      }
    });
  }

  onKeyDown = e => {
    const key = window.event ? e.keyCode : e.which;
    if (key === 220) { // #
    } else if (key === 56) { // {
    }
  }

  render() {
    const { editorState } = this;
    return (
      <Slate {...this.props} schema={this.getSchema()} plugins={this.plugins} state={editorState} onChange={this.onChange} onKeyDown={this.onKeyDown} />
    );
  }
}
