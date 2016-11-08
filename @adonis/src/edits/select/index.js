import React from 'react';


export default React.createClass({
   getInitialState: function () {
      return {ausgeklappt: false};
   },
   getDefaultProps: function () {
      return {style: {}};
   },
   changed: function (e) {
      const {updateValue} = this.props;
      if(e.target.value === "null"){
         return updateValue(null);
      }
      var number = parseInt(e.target.value);
      var value = null;
      if(e.target.value !== null){
         if(isNaN(number)){
            value = e.target.value;
         }
         // Workaround UUID
         else if(number+'' === e.target.value+''){
            value = number;
         }
         else{
            value = e.target.value;
         }
      }
      updateValue(value);
   },
   render: function () {
      const {value, options, empty, emptyName, style} = this.props;
      const {ausgeklappt} = this.state;

      let _options;
      if(!options){
         _options = [];
      }
      else if(Array.isArray(options)){
         _options = options.slice();
      }
      else{
         _options = Object.keys(options).map(function(key){
            return {
               label: key,
               value: options[key]
            }
         });
      }

      if (empty) {
         _options.unshift({name: emptyName || "Kein", value: null});
      }

      return (
         <select onChange={this.changed} value={value} name="account" style={style}
                 className={"form-control " + (ausgeklappt ? "active" : "")}>
            {_options.map(function (item) {
               let {label, name, value} = item;
               let v = value !== undefined && value !== null ? value : "null";
               return <option value={v} key={label || name || v}>{label || name || v}</option>;
            })}
         </select>
      );
   }
});
