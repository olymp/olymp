import React, { Component } from 'react';
import Slate from 'slate/lib/components/editor';
import Mark from 'slate/lib/models/mark';
import Plain from './serializer/plain';

const addMarks = (startChar, closeChar, markType, characters, string) => {
  const mark = Mark.create({ type: markType });
  let start = -startChar.length;
  while (true) {
    start = string.indexOf(startChar, start+startChar.length);
    if (start === -1) break;
    const end = string.indexOf(closeChar, start+startChar.length) + startChar.length;
    const size = end === 0 ? characters.size : end;
    for (let i = start; i < size; i++) {
      let char = characters.get(i);
      let { marks } = char;
      marks = marks.add(mark);
      char = char.set('marks', marks);
      characters.set(i, char);
    }
    start = size;
  } return characters;
}

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

const schema = {
  marks: {
    'hashtax-inline': {
      fontWeight: 'bold',
    },
    'hashtax-inline-var': {
      background: 'aliceblue',
    },
    'hashtax-var': {
      background: 'yellow',
    },
  },
  rules: [{
    match: () => true,
    decorate,
  }]
}

export default class SlateEditor extends Component {
  constructor(props) {
    super(props);
    this.plugins = [];
    this.state = { };
    this.value = props.value || '';
    this.editorState = Plain.deserialize(this.value);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.value) {
      this.value = newProps.value || '';
      this.editorState = Plain.deserialize(this.value);
    }
  }
  onChange = value => {
    this.editorState = value;
    this.setState({ }, () => {
      const newValue = Plain.serialize(value);
      if (newValue !== this.value) {
        this.value = newValue;
        this.props.onChange(newValue);
      }
    });
  }
  render() {
    const { editorState } = this;
    return (
      <Slate {...this.props} schema={schema} plugins={this.plugins} state={editorState} onChange={this.onChange}/>
    )
  }
}
