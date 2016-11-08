import React, {Component} from "react";
import Portal from 'react-portal';

import './lightbox.less';
export default class LightboxComponent extends Component {
  static defaultProps = {
    visible: true,
    blank: true
  };

  constructor() {
    super();
  }

  render() {
    let {close, visible, src, caption} = this.props;

    if (!visible) {
      return null;
    }

    return (
      <Portal isOpened={true} closeOnEsc closeOnOutsideClick onClose={()=>close ? close() : null}>
        <div className="ui dimmer modals page transition visible active" onClick={()=>close ? close() : null}>
          <figure className="figure--jss-0-4">
            <img src={src} className="image--jss-0-3" onClick={(e)=>e.stopPropagation()}/>
            <div className="footer--jss-0-6">
              <div className="footer-caption">
                {caption}
              </div>
            </div>
          </figure>
        </div>
      </Portal>
    );
  }
}
