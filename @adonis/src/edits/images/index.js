import React, {Component, PropTypes} from 'react';
import Image from '../image';
import './component.less';

var keys = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'}

class Gallery extends Component {
   static title = 'Galerie';
   static category = 'Bild';
   static icon = 'newspaper';
   static allowBlocks = false;
   static defaultProps = {
      value: [{
         sid: 1,
         url: 'http://placehold.it/350x150'
      }, {
         sid: 2,
         url: 'http://placehold.it/350x150'
      }, {
         sid: 3,
         url: 'http://placehold.it/350x150'
      }]
   };

   constructor() {
      super();

      this.state = {
         lightboxIsOpen: false
      };
   }

   updateValue(v, index) {
      const {value, updateValue} = this.props;
      v.sid = v.sid || ShortId.generate();
      updateValue(value.map((image, i)=>index === i ? v : image));
   }

   addImage = () => {
      const {value, updateValue} = this.props;
      updateValue([...value, {
         sid: ShortId.generate(),
         url: 'http://placehold.it/350x150'
      }]);
   }

   removeImage(index) {
      const {value, updateValue} = this.props;
      updateValue(value.filter((i0, i)=>index !== i));
   }

   showLightbox() {
      if (!this.props.noLightbox) {
         this.setState({lightboxIsOpen: true});
      }
   }

   render() {
      const {value, readOnly} = this.props;

      var valueArray = [];
      var valueOutput = value.map(function (image, index) {
         if (image.id) {
            valueArray.push({src: image.url});
         }

         return (
            <div className="card" key={image.sid}>
               <div className="image">
                  <Image readOnly={readOnly} width={'100%'} height={'auto'} value={image}
                         updateValue={(v)=>this.updateValue(v, index)}
                         buttons={[
                           (<div key="2" className="ui inverted icon button" onClick={(v)=>this.removeImage(index)}>
                              <i className="icon trash"></i>
                           </div>),
                           (<div key="1" className="ui inverted icon button" onClick={this.addImage}>
                              <i className="icon plus"></i>
                           </div>),
                           (<div key="3" className="ui inverted icon button" onClick={(v)=>this.showLightbox()}>
                              <i className="icon eye"></i>
                           </div>)
                        ]}/>
               </div>
            </div>
         );
      }.bind(this));

      var key = keys[value.length] || 'five';
      return (
         <div className={"ui " + key + " doubling cards image-gallery"} style={{marginBottom: '10px'}}>
            {valueOutput}
         </div>
      );
   }
}

export default Gallery;
