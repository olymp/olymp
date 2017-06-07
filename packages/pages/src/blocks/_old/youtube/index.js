import React, { Component, PropTypes } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp-slate';

const defaultVideo = 'https://www.youtube.com/embed/zalYJacOhpo';
const actions = props => [{
  type: 'youtube.url',
  icon: 'film',
  toggle: () => {
    const { setData, getData } = props;
    const currentUrl = getData('url') || defaultVideo;
    const url = window.prompt('URL', currentUrl);
    if (url) setData({ url });
  },
  active: false,
}];

@useGenericBlock({
  label: 'Youtube',
  category: 'Media',
  props: ['url'],
  editable: false,
  resize: {
    coverOnResize: true,
    ratio: 7 / 4,
  },
  actions,
  tooltip: 'Url angeben',
})
export default class YoutubeBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getData: PropTypes.func,
  }

  render() {
    const { style, getData, children, ...rest } = this.props;
    const url = getData('url', defaultVideo);

    const styles = {
      backgroundColor: 'gray',
      ...style,
    };

    return (
      <GenericBlock {...rest} style={{ ...styles, height: 'auto' }}>
        <iframe width={styles.width} height={styles.height} src={url} frameBorder="0" allowFullScreen />
        {children}
      </GenericBlock>
    );
  }
}
