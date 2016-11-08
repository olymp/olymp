import React from 'react';


var Component = React.createClass({
   /* Render */
   render: function () {
      var str = typeof this.props.value === "object"
         ? JSON.stringify(this.props.value, null, 2)
         : this.props.value;
      return (
         <pre style={{textAlign: "left", fontSize: "8px"}}>
            {str}
         </pre>
      );
   }
});
export default Component;
