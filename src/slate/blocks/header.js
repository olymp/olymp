import React, {Component, PropTypes} from "react";
import {EditorBlock} from 'draft-wysiwyg';

export default function(size){
   return class Header extends Component {
      render(){
         return React.createElement('h'+size, { className: 'header' }, <EditorBlock {...this.props}/>)
      }
   }
}
