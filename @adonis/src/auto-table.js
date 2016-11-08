import React, {Component, PropTypes} from 'react';
import * as Editors from "../edits";
import Modal from './modal';

class Form extends Component {
   update(value){
      const {onChange} = this.props;
      onChange(value);
   }
   renderField = (key) => {
      const {value, schema} = this.props;
      var Editor = Editors[schema[key]];
      return (
         <div className="inline fields" key={key}>
            <div className="five wide field">
               <label>{key}</label>
            </div>
            <div className={"eleven wide field fill-item"}>
               <Editor updateValue={(e)=>this.update({[key]: e})} value={value[key]}/>
            </div>
         </div>
      );
   }
   render() {
      const {className, schema} = this.props;
      return (
         <div className={className}>
            {Object.keys(schema).map(this.renderField)}
         </div>
      )
   }
}

var keys = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'}
class FormList extends Component {
   static defaultProps = {
      type: 'cards',
      cards: 2
   }
   update(value){
      const {onChange} = this.props;
      onChange(value);
   }
   render(){
      const {cards, schema} = this.props;
      const value = this.props.value||[];
      // removeItem, addItem, update
      return (
         <div>
            <div className={"ui "+keys[cards]+" cards"}>
               {value.map((item, index)=><div className="ui card" key={index}>
                  <Form className="ui form segment basic" value={item} schema={schema} onChange={(v)=>this.update(value.map(x=>x !== item ? x : ({...item,...v})))}/>
                  <a className="ui red right corner label" onClick={()=>this.update(value.filter(x=>x!==item))}>
                     <i className="trash icon" />
                  </a>
               </div>)}
            </div>
            <br/>
            <div className="ui button" onClick={()=>this.update([...value, {}])}>Hinzufügen</div>
         </div>
      )
   }
}

class AutoForm extends Component {
   update = (value) => {
      const {onChange, updateValue} = this.props;
      updateValue ? updateValue(value) : onChange(value);
   }
   render() {
      const {schema, value} = this.props;
      return (
         <div className="ui segment basic">
            <h2 className="ui dividing header">
               <div className="content">
                  Bearbeiten
                  <div className="sub header">Items bearbeiten ...</div>
               </div>
            </h2>
            {schema.map
               ? <FormList type={'cards'} cards={2} value={value||[]} onChange={this.update} schema={schema[0]}/>
               : <Form value={value||{}} onChange={this.update} schema={schema}/>}
         </div>
      )
   }
}

class AutoFormModal extends Component{
   static AutoForm = AutoForm;
   constructor(props){
      super();
      this.state = {value: props.value};
   }
   update = (value) => {
      this.setState({value});
   }
   render(){
      const {value} = this.state;
      const {close, save} = this.props;
      return (
         <Modal blank={false} close={close} save={()=>save(value)}>
            <AutoForm {...this.props} onChange={this.update} value={value}/>
         </Modal>
      );
   }
}

export default AutoFormModal;
