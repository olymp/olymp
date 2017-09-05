/* import React from 'react';
import { FaCamera } from 'olymp-icons';
import plugin from 'ory-editor-plugins-image';
import 'ory-editor-plugins-image/lib/index.css';

export default {
  ...plugin,
  text: 'Bild',
  description: 'Ein Bild als URL oder aus der Mediathek',
  IconComponent: <FaCamera />,
};
*/

import React from 'react';
import { FaCamera } from 'olymp-icons';
import type { ContentPluginProps } from 'ory-editor-core/lib/service/plugin/classes';
import { Image } from 'olymp-cloudinary';

export default {
  text: 'Bild',
  name: 'Pages/Media/ImageBlock/Image',
  category: 'Medien',

  Component: ({ onChange, setActive, className, editor, state }) => {
    const value = state.value || {
      url: 'https://lorempixel.com/400/300/cats/',
      width: 400,
      height: 300,
    };
    const Img = /* editor.props.readOnly === true ? LightboxImage : */ Image;

    return (
      <Img
        className={className}
        onClick={setActive}
        width="100%"
        value={value}
      />
    );
  },

  IconComponent: <FaCamera />,
  description: 'Ein Bild aus der Mediathek mit Text',
  version: '0.0.1',
  isInlineable: true,

  handleRemoveHotKey: (_: Event, __: ContentPluginProps<*>): Promise<*> =>
    Promise.reject(),
  handleFocusPreviousHotKey: (
    _: Event,
    __: ContentPluginProps<*>
  ): Promise<*> => Promise.reject(),
  handleFocusNextHotKey: (_: Event, __: ContentPluginProps<*>): Promise<*> =>
    Promise.reject(),

  // We need this because otherwise we lose hotkey focus on elements like spoilers.
  // This could probably be solved in an easier way by listening to window.document?

  handleFocus: (props: any, source: any, ref: HTMLElement) => {
    if (!ref) {
      return;
    }
    setTimeout(() => ref.focus());
  },
};
