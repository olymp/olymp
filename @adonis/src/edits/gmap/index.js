export default props => {
  return null;
}

/*import React, {Component, PropTypes} from 'react';
import Select2 from '../select2';
import Helpers from './helpers';

class GmapSearchEdit extends Component {
   static helpers = Helpers;

   static defaultProps = {
      value: ''
   };

   constructor() {
      super();
      this.helpers = Helpers();
      this.state = {};
      this.onChange = this.onChange.bind(this);
      this.onSearch = this.onSearch.bind(this);
   }

   render() {
      const {options, loading} = this.state;
      const value = this.props.value ? this.props.value.address : "";
      return (
         <Select2 placeholder={value||null} options={options} isLoading={loading} onInputChange={this.onSearch} updateValue={this.onChange} value={value}/>
      );
   }
   onSearch(input) {
      if(!input){
         return;
      }
      this.setState({
         loading: true
      })
      this.helpers.search(input).then((addresses)=> {
         this.setState({
            loading: false,
            results: addresses,
            options: addresses.map(item=>({
               id: item.address,
               name: item.address
            }))
         });
      }).catch(err=>{
         this.setState({
            loading: false,
            results: null,
            options: null
         });
      });
   }

   onChange(e) {
      const {updateValue} = this.props;
      const {results} = this.state;
      if(e && e.id){
         updateValue(results.filter(item=>item.address===e.id)[0]);
      }
      else{
         updateValue(null);
      }
   }
}
;

export default GmapSearchEdit;
*/
