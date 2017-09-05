import React, { Component } from 'react';
import Editor, { Editable, createEmptyState } from 'ory-editor-core';
import 'ory-editor-core/lib/index.css';
import { Actions, Trash, Toolbar } from '../ory';
import { parallax, divider, spacer, image, video, container, link } from '../ory/plugins';
import slate from 'ory-editor-plugins-slate';
import 'ory-editor-plugins-slate/lib/index.css';

const plugins = {
  content: [slate(), spacer, image, video, link],
  layout: [parallax({ defaultPlugin: slate() }), divider, container({ defaultPlugin: slate() })],
};

export default class OryEditor extends Component {
  constructor(props) {
    super(props);
    this.content = props.value || createEmptyState();
    this.editor = new Editor({
      readOnly: props.readOnly,
      plugins,
      defaultPlugin: slate(),
      editables: [this.content],
    });
  }
  onChange = (value) => {
    this.props.onChange(value);
  };
  render() {
    if (this.props.readOnly || !this.props.onChange) {
      return <Editable readOnly editor={this.editor} id={this.content.id} />;
    }
    return (
      <div>
        <Editable editor={this.editor} id={this.content.id} onChange={this.onChange} />
        <Trash editor={this.editor} />
        <Actions editor={this.editor} />
        <Toolbar editor={this.editor} />
      </div>
    );
  }
}
