import React from 'react';
import { FaStickyNote } from 'olymp-icons';
/* import { Embed, EmbedEngine } from 'url-embed';

const engine = new EmbedEngine({
  timeoutMs: 2000,
  referrer: 'www.example.com',
});
engine.registerDefaultProviders(); */

const component = () => {
  /* engine.getEmbed(
    new Embed('https://www.youtube.com/watch?v=dQw4w9WgXcQ', {
      maxHeight: 300,
    }),
    embed => {
      if (embed.error) {
        console.log('Something went wrong.');
        console.log(embed.error);
      }

      // Embed markup
      console.log(embed.data.html);
    }
  ); */

  return <div>test</div>;
};

export default {
  Component: component,
  name: 'olymp/layout/link',
  version: '0.0.1',
  IconComponent: <FaStickyNote />,
  text: 'Link-Vorschau',
  description: 'Ein Link inklusive Vorschau',
};
