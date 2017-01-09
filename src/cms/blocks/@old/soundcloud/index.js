import React, {Component, PropTypes} from 'react';
import BlockWrapper from '../block-wrapper';

var defaultAudio = 'https://soundcloud.com/friedbikinis/above-the-fog';

@BlockWrapper({
  resizeable: {
    resizeSteps: 10,
    //ratio: 2/3,
    //vertical: 'absolute',
    handles: true
  }
})
export default class SoundcloudBlock extends Component {
  static defaultProps = {
    autoplay: false,
    width: "100%",
    height: "450px",
    hideRelated: false,
    showComments: true,
    showUser: true,
    showReposts: false,
    visual: true,
    color: "ff5500"
  };
  static title = 'Soundcloud';
  static icon = 'soundcloud';
  static category = 'Media';

  componentDidMount() {
    const { addActions } = this.props;
    if (addActions) {
      addActions([{
        button: <span>URL</span>,
        label: 'URL hinzufügen',
        active: false,
        toggle: () => this.setUrl()
      }]);
    }
  }

  setUrl() {
    var url = window.prompt("URL", this.props.url || defaultAudio);
    if (url) {
      const {setEntityData} = this.props;

      setEntityData({url: url});
    }
  }

  render() {
    const {autoplay, hideRelated, showComments, showUser, showReposts, visual, color, style, className, url} = this.props;

    var styles = {
      width: '100%',
      height: '100%',
      position: 'relative',
      ...style
    };

    var src = `https://w.soundcloud.com/player/`
      + `?url=${url || defaultAudio}`
      + `&auto_play=${autoplay}`
      + `&hide_related=${hideRelated}`
      + `&show_comments=${showComments}`
      + `&show_user=${showUser}`
      + `&show_reposts=${showReposts}`
      + `&visual=${visual}`
      + `&color=${color}`;

    return (
      <div style={styles} className={className} contentEditable={false}>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          src={src}/>
      </div>
    );
  }
}


