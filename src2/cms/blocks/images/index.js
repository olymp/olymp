import ShortId from 'shortid';
import React, { Component, PropTypes } from 'react';
import Image from '../../components/image-info';
import BlockWrapper from '../block-wrapper';

var keys = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' };

@BlockWrapper({
  resizeable: {
    horizontal: false,
  }, alignment: false,
})
export default class Gallery extends Component {
  static title = 'Galerie';
  static category = 'Bild';
  static icon = 'block layout';

  updateValue(newImage, index) {
    const { setEntityData, images } = this.props;

    newImage.sid = newImage.sid || ShortId.generate();
    setEntityData({ images: (images || []).map((prevImage, i) => i === index ? newImage : prevImage) });
  }

  addImage(newImage) {
    const { setEntityData, images } = this.props;

    newImage.sid = newImage.sid || ShortId.generate();
    setEntityData({ images: [...(images || []), newImage] });
  }

  render() {
    const { images, readOnly } = this.props;

    var key = keys[readOnly ? (images || []).length : ((images || []).length + 1)] || 'five';
    return (
      <div className={'ui ' + key + ' doubling cards image-gallery'} style={{ width: '100%' }}>
        {(images || []).map((image, index) => {
          return (
            <div className="card" key={image.sid}>
              <div className="image">
                <Image value={image} lightbox readOnly={readOnly}
                  updateValue={v => this.updateValue(v, index)}
                />
              </div>
            </div>
          );
        })}
        {!readOnly ? (
          <div className="card">
            <div className="image">
              <Image value={{
                sid: ShortId.generate(),
                url: 'http://placehold.it/400x400',
                width: 400,
                height: 400,
              }} updateValue={v => this.addImage(v)}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
