import React, { Component } from 'react';
import { EditorBlock } from 'draft-wysiwyg';

export default class Paragraph extends Component {
  render() {
    return (
      <div className="paragraph">
        <EditorBlock {...this.props} />
      </div>
    );
  }
}
