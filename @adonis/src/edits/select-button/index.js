import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
   getInitialState: function () {
      return {opened: false};
   },
   getDefaultProps: function () {
      return {
         color: "default",
         options: [],
         nameField: "name",
         valueField: "value",
         style: {}
      };
   },
   handleGlobalClick: function(event, target){
      const {opened} = this.state;
      if(!opened){
         return;
      }
      document.body.removeEventListener("click", this.handleGlobalClick);
      this.setState({
         opened: false
      });
      if(event.target.parentNode.parentNode === ReactDOM.findDOMNode(this.refs.ul)){
         return;
      }
      event.preventDefault();
      event.stopPropagation();
   },
   handleClick: function(event, target){
      const {opened} = this.state;
      if(opened){
         return;
      }
      document.body.addEventListener("click", this.handleGlobalClick);
      this.setState({
         opened: true
      });
   },
   changed: function (e) {
      const {updateValue, empty} = this.props;
      updateValue(e === "null" || e === empty ? null : e);
   },
   render: function () {
      const {value, options, empty, children, color, nameField, valueField, template, style} = this.props;
      const {opened} = this.state;

      const newOptions = options.slice();
      if(empty){
         newOptions.unshift({[valueField]: "null", [nameField]: empty});
      }

      let displayName = empty || "Farbe wählen ..";
      const _options = newOptions.map(item=>{
         if(item[valueField] === value && item[nameField] !== empty){
            displayName = template ? template(item) : item[nameField];
         }
         return (
            <li key={item[valueField]}>
               <a href="javascript:;" onClick={()=>this.changed(item[valueField])}>
                  {value === item[valueField] ? <span><i className="fa fa-check"/> </span> : null}
                  {template && item[nameField] !== empty ? template(item) : item[nameField]}
               </a>
            </li>
         );
      });

      return (
         <div className="btn-group select" style={style}>
            <button className={"btn btn-"+color+" btn-sm btn-bg dropdown-toggle"} onClick={this.handleClick}>
               <span className="dropdown-label">
                  {displayName}
               </span>
               &nbsp;
               <i className="fa fa-caret-down"></i>
            </button>
            <ul ref={"ul"} className="dropdown-menu text-left" style={{display: opened ? "block" : "none"}}>
               {_options}
            </ul>
         </div>
      );
   }
});
