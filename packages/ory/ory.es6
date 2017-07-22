import React from 'react';
import Editor, { Editable, createEmptyState } from 'ory-editor-core';
import 'ory-editor-core/lib/index.css';
import { Actions, Trash, Toolbar } from './components';
import {
  text,
  parallax,
  divider,
  spacer,
  image,
  video,
  container,
  link,
} from './plugins';

const plugins = {
  content: [text(), spacer, image, video, link],
  layout: [
    parallax({ defaultPlugin: text() }),
    divider,
    container({ defaultPlugin: text() }),
  ],
};
const content = createEmptyState();
const editor = new Editor({
  plugins,
  defaultPlugin: text(),
  editables: [content],
});

export default () =>
  <div>
    <Editable editor={editor} id={content.id} />

    <Trash editor={editor} />
    <Actions editor={editor} />
    <Toolbar editor={editor} />
  </div>;
