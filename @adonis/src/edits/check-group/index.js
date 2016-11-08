import React from 'react';
import './check-group.less';

var yes = "Ja!";
var no = "Nope, chuck testa.";

var CheckGroup = React.createClass({
    getInitialState: function () {
        return {};
    },
    onChecked: function(e, item){
        var arr = this.props.value;
        if(!arr || !arr.map) arr = [];
        if(e.target.checked){
            arr.push(item.id);
        }
        else{
            var index = arr.indexOf(item.id);
            if(index != -1){
                arr.splice(index, 1);
            }
        }
        this.props.updateValue(arr);
    },
    render: function () {
        console.log("Re-Render");
        var checked = this.props.value ? this.props.value : false;
        var word = this.props.text ? this.props.text : (checked ? yes : no);
        var self = this;

        var value = self.props.value;
        if(!value || !value.map) value = [];
        return (
            <div className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                {this.props.items.map(function(item){
                    var checked = value.indexOf(item.id) > -1;
                    var bold = {fontWeight:"bold"};
                    return (
                        <div className="checkbox col-md-3" key={item.id}>
                            <label>
                                <input type="checkbox" onChange={(e)=>{self.onChecked(e, item)}} checked={checked}/>
                                <span style={checked ? bold : {}}>{item.name}</span>
                            </label>
                            <span className="help-block mb-0"></span>
                        </div>
                    );
                })}
                <span className="help-block mb-0"></span>
            </div>
        );
    }
});

export default CheckGroup;
{/*
 <div className="checkbox i-checks">
 <label>
 <input type="checkbox" onChange={this.onChecked} checked={checked} />
 <i></i>
 <span style={{display: "inline"}}>{word}</span>
 </label>
 </div>
 */}
