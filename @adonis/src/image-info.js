import React, { PropTypes, Component } from 'react';
import Image from '../edits/image';

import './image-info.less';

class ImageInfo extends Component {
  static contextTypes = {
    apiClient: PropTypes.object,
    user: PropTypes.object,
  };
  state = { image: null };

  componentDidMount() {
    const { apiClient } = this.context;
    const { value } = this.props;

    if (value && value.id) { }
      // TODO Reaktivieren! LG Beni
      /* apiClient.get('/file/' + value.id).then(image => {
        this.setState({ image });
      });*/
    //} else {
      this.setState({ image: value });
    //}
  }

  render() {
    const { user } = this.context;
    const { image } = this.state;
    const { width, lightbox, comment, author } = this.props;

    const _author = author ? author : (image && image.author ? image.author : null);
    const _comment = comment ? comment : (image && image.comment ? image.comment : null);

    const authorText = _author ? <span style={{ float: 'right' }}>&copy; {_author}</span> : null;
    const caption = _comment || _author ? (
      <span>
        {_comment ? <b>{_comment}</b> : null}
        {authorText}
      </span>
    ) : null;

    const largeEnough = (width > 150 || (!width || typeof width === 'string') && image && image.width > 150);

    return (
      <div>
        <Image {...this.props} caption={caption} lightbox={lightbox || !largeEnough}>
          {user ? (
            <div className={'ui left corner label image-author-corner ' + (authorText ? 'purple' : 'red')}>
              <i className="copyright icon" style={{ fontWeight: 'bold' }}></i>
            </div>
          ) : null}

          {authorText && largeEnough ? <div className="image-author">{authorText}</div> : null}
        </Image>
      </div>
    );
  }
}

export default ImageInfo;
