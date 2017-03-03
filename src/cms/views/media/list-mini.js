import React, { Component } from 'react';
import { Image } from 'olymp';

export default class MediaListMini extends Component {
  render() {
    const { images, deselect } = this.props;

    return (
      <div>
        {(images || []).map(image => (
          <div onClick={() => deselect(image.id)} key={image.id} style={{ cursor: 'pointer' }}>
            <Image value={image} width={60} ratio={1} style={{ marginRight: '.5rem', marginBottom: '.5rem', float: 'left' }} />
          </div>
        ))}
      </div>
    );
  }
}
