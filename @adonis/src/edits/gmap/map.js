import React, {Component, PropTypes} from 'react';
import Editor from './index';
import Helpers from './helpers';

import './gmap.less';

const defaultValue = {
   address: null,
   lat: 50.1109221,
   lng: 8.6821267,
   zoom: 14
};

class Gmap extends Component {
   static searchEditor = Editor;
   static helpers = Helpers;

   static defaultProps = {
      value: defaultValue,
      fill: false,
      info: null
   };

   constructor() {
      super();
      this.helpers = Helpers();
      this.state = {};
   }

   shouldComponentUpdate(newProps, newState) {
      const {address} = this;
      const {value: newAddress, info: newInfo} = newProps;
      if (!address && !newAddress) {
         return false;
      } else if (!address || !newAddress) {
         return true;
      } else if (address.lat !== newAddress.lat || address.lng !== newAddress.lng || address.address !== newAddress.address) {
         return true;
      } else {
         return false;
      }
   }

   componentDidMount() {
      const {value} = this.props;
      this.address = value;
      var options = {...defaultValue, ...value};

      if(this.helpers.isLoaded()){
         this.helpers.attachMap(this.refs.map, options);
      }
      else{
         this.helpers.load().then(()=>this.helpers.attachMap(this.refs.map, options))
            .catch((err)=>console.error(err));
      }
   }

   componentDidUpdate() {
      this.componentDidMount();
   }

   render() {
      const {fill} = this.props;
      var style = {
         height: "100%",
         width: "100%"
      };
      if(!fill){
         style.height = '250px';
      }
      return (
         <div className='map-outer-container' style={style}>
            {!fill ? <Editor {...this.props}/> : null}
            {!fill ? <br/> : null}
            <div className='map-container left right' style={style}>
               <div ref="map" className='map' style={style}>
                  <div className="map-nojs">
                     <strong>Google Karte</strong>
                     <br/>
                     <span>ohne Javascript nicht sichtbar</span>
                  </div>
               </div>
            </div>
         </div>
      );
   }
};

export default Gmap;
