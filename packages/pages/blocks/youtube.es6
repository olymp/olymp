import React from 'react';
import { createComponent } from 'olymp-fela';
import { FaFilm, FaPlus, FaMinus } from 'olymp-icons';

const YoutubeContainer = createComponent(
  ({ theme, getData }) => ({
    width: `${10 * getData('size', 10)}%`,
    position: 'relative',
    display: 'block',
    marginX: 'auto',
  }),
  ({ attributes, className, getData, setActive, children }) => (
    <div onMouseEnter={setActive} className={className} {...attributes}>
      {children}
      {getData('href') ? (
        <iframe
          title="Unser Video"
          width="100%"
          height={100 + getData('size', 10) * 20}
          src={getData('href')}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <span>URL angeben</span>
      )}
    </div>
  ),
  p => Object.keys(p),
);

export default {
  type: 'Pages.Media.YoutubeBlock',
  isVoid: true,
  kind: 'block',
  label: 'Youtube',
  category: 'Sonstiges',
  component: YoutubeContainer,
  actions: [
    {
      label: <FaFilm />,
      tooltip: 'URL',
      toggle: ({ setData, getData }) => {
        const href = window.prompt('Link', getData('href'));
        if (href) {
          setData({ href });
        }
      },
    },
    {
      label: <FaPlus />,
      tooltip: 'Größer',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 10);
        setData({
          size: size < 10 ? size + 1 : 10,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Kleiner',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 10);
        setData({
          size: size > 1 ? size - 1 : 1,
        });
      },
    },
  ],
};
