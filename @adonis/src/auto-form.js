import React, {Component, PropTypes} from 'react';
import * as Editors from "../edits";
import Modal from './modal';

import './auto-form.less';

class Form extends Component {
  static contextTypes = {
    apiClient: PropTypes.object.isRequired
  };

  update(value) {
    const {onChange} = this.props;
    onChange(value);
  }

  renderEditor(key) {
    const field = this.props.schema[key], more = {};
    const {edit, editor, type} = field;
    const {plugins, name} = this.props;
    const {apiClient} = this.context;

    let value = this.props.value
      ? this.props.value[key]
      : undefined;

    const editorName = edit || editor;

    if (editorName && editorName.toLowerCase() === 'none') return;
    if (editorName && editorName.toLowerCase() === 'hidden') return;

    var Editor = '';
    if (field.editor){
      for(const key in Editors){
        if (key.toLowerCase() === field.editor.toLowerCase()){
          Editor = Editors[key];
        }
      }
    }

    // Select da type sowas wie many(user)
    if (type && type.indexOf('(') !== -1) {
      var model = type.toLowerCase().split('(')[1].split(')')[0];
      var many = type.toLowerCase().indexOf('many') !== -1;

      var addOn = many ? 'Ids' : 'Id';
      more.value = many
        ? (value || []).map(item=>item.id)
        : (typeof value === 'object' && value ? value.id : null);

      more.labelKey = "name";
      more.placeholder = "Auswählen ...";
      more.valueKey = "id";
      more.multi = many;
      more.fetch = ()=>apiClient.get("/" + model);
      more.model = model
      more.updateValue = (e, e2)=>this.update({[key]: e, [key + addOn]: e2});
    }
    var scheduled = plugins ? plugins.filter(x => x === 'Scheduled' || x.name === 'Scheduled')[0] : null;
    if (scheduled && scheduled.options && key === scheduled.options.startField && editorName.indexOf('Date') !== -1 && editorName.indexOf('Range') !== -1) {
      more.value = {
        dateStart: this.props.value ? this.props.value[scheduled.options.startField] : null,
        dateEnd: this.props.value ? this.props.value[scheduled.options.endField] : null
      }
      if (typeof more.value.dateStart === 'string') {
        more.value.dateStart = new Date(more.value.dateStart);
      }
      if (typeof more.value.dateEnd === 'string') {
        more.value.dateEnd = new Date(more.value.dateEnd);
      }
      more.updateValue = e => {
        this.update({
          [scheduled.options.startField]: e.dateStart,
          [scheduled.options.endField]: e.dateEnd
        });
      }
    } else if (scheduled && scheduled.options && key === scheduled.options.endField && editorName.indexOf('Date') !== -1 && editorName.indexOf('Range') !== -1) {
      return null;
    } else if (type.toLowerCase() === 'date') {
      value = value ? new Date(value) : value;
    }

    if (!Editor) return <span>{edit || editor} not found</span>;
    return (
      <Editor {...field} collection={name} autoFormEmbedded updateValue={(e)=>this.update({[key]: e})} value={value} {...more}/>
    );
  }

  render() {
    const {schema, autoFormEmbedded} = this.props;
    if (autoFormEmbedded) {
      return (
        <table className="ui very basic celled table fill">
          {/*<thead>
           <tr>
           <th>Beschreibung</th>
           <th>Editor</th>
           </tr>
           </thead>*/}
          <tbody>
          {Object.keys(schema).map(key=> {
            var editor = this.renderEditor(key);
            if (!editor) return null;
            return (
              <tr key={key}>
                <td>
                  <label>{schema[key].label || key}</label>
                </td>
                <td>
                  {}
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      )
    }
    return (
      <div className="ui form segment basic">
        {Object.keys(schema).map(key=> {
            var editor = this.renderEditor(key);
            if (!editor) return null;
            return (
              <div className="inline fields" key={key}>
                <div className="three wide field">
                  <label>{schema[key].label || key}</label>
                </div>
                <div className="thirteen wide field fill-item">
                  {editor}
                </div>
              </div>
            )
          }
        )}
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

  update = value => {
    const {onChange} = this.props;
    onChange(value);
  }

  render() {
    const {cards, schema} = this.props;
    const value = this.props.value || [];
    // removeItem, addItem, update
    return (
      <div className="fill">
        <div className={"ui "+keys[cards]+" cards"}>
          {value.map((item, index)=>
            <div className="ui card" key={index} style={{padding: '10px', paddingBottom: 0}}>
              <Form {...this.props} value={item} schema={schema}
                                    onChange={(v)=>this.update(value.map(x=>x !== item ? x : ({...item,...v})))}/>
              <a className="ui red right corner label" href="javascript:;"
                 onClick={()=>this.update(value.filter(x=>x!==item))}>
                <i className="trash icon" style={{pointerEvents: 'none'}}/>
              </a>
            </div>
          )}
        </div>
        <br/>
        <div className="ui button" onClick={()=>this.update([...value, {}])}>Hinzufügen</div>
      </div>
    )
  }
}

class AutoForm extends Component {
  static Modal = AutoFormModal;
  static Form = Form;
  static FormList = FormList;
  static AutoForm = AutoForm;

  update = value => {
    const {onChange, updateValue} = this.props;
    updateValue ? updateValue(value) : onChange(value);
  }

  render() {
    const {schema, value, title, subTitle, autoFormEmbedded} = this.props;
    if (!schema) {
      return null;
    }
    return (
      <div className={!autoFormEmbedded ? "ui segment basic" : "fill"}>
        {title ? <h2 className="ui dividing header">
          <div className="content">
            {title}
            {subTitle ? <div className="sub header">{subTitle}</div> : null}
          </div>
        </h2> : null}
        {schema.map
          ? <FormList {...this.props} type={'cards'} cards={2} value={value||[]} onChange={this.update} schema={schema[0]}/>
          : <Form {...this.props} value={value||{}} onChange={this.update} schema={schema}/>}
      </div>
    )
  }
}

class AutoFormModal extends Component {
  constructor(props) {
    super();
    this.state = {value: props.value};
  }

  update = (value) => {
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    const {close, save} = this.props;
    return (
      <Modal blank={false} close={close} save={()=>save(value)}>
        <AutoForm {...this.props} onChange={this.update} value={value}/>
      </Modal>
    );
  }
}

export default AutoForm;
