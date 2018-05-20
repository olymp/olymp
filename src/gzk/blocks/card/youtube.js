import React, { Component, PropTypes } from 'react';
import {
  useBlockBase,
  useGenericBlock,
  useBlockToolbar,
  GenericBlock,
  Block,
} from 'olymp/slate';
import { Image } from 'olymp/cms';

const defaultVideo = 'https://www.youtube.com/embed/zalYJacOhpo';
const actions = props => [
  {
    type: 'youtube.url',
    icon: 'film',
    toggle: () => {
      const { setData, getData } = props;
      const currentUrl = getData('url') || defaultVideo;
      const url = window.prompt('URL', currentUrl);
      if (url) setData({ url });
    },
    active: false,
  },
  {
    icon: 'heading',
    type: 'set-title',
    toggle: () => {
      const { setData, getData } = props;
      const title = window.prompt('Titel', getData('title'));
      setData({ title });
    },
  },
];

@useGenericBlock({
  label: 'Youtube',
  category: 'Karte',
  editable: false,
  props: ['title', 'url'],
  actions,
})
export default class GzCardYoutube extends Component {
  static defaultProps = { title: 'Video', size: 1 };
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    getData: PropTypes.func,
  };

  render() {
    const { children, title, url, ...rest } = this.props;
    const wrapper = {
      paddingBottom: '51.9%',
      paddingTop: 25,
      height: 0,
    };
    const inner = {
      position: 'absolute',
      top: 0,
    };
    return (
      <GenericBlock
        {...rest}
        className="gz-big-element col-md-4"
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <h2>{title}</h2>
        <div className="gz-panel mt-1" style={wrapper}>
          <iframe
            width="100%"
            height="100%"
            src={url}
            frameBorder="0"
            allowFullScreen
            style={inner}
          />
        </div>
        {children}
      </GenericBlock>
    );
  }
}
