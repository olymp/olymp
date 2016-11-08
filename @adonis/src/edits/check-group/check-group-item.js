import React from 'react';


var yes = "Ja!";
var no = "Nope, chuck testa.";

var CheckGroupItem = React.createClass({
    getInitialState: function () {
        return {};
    },
    onChecked: function(e){
        this.props.updateValue(e.target.checked);
    },
    render: function () {
        var checked = this.props.value ? this.props.value : false;
        var word = this.props.text ? this.props.text : (checked ? yes : no);

        return (
            this.props.items.map(function(item){
                return (
                    <div className="checkbox checkbox-inline col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                        <label>
                            <input type="checkbox" onChange={this.onChecked} checked={checked}/>
                            <span>{word}</span>
                        </label>
                    </div>
                );
            })
        );
    }
});

export default CheckGroupItem;
{/*
 <div className="checkbox i-checks">
 <label>
 <input type="checkbox" onChange={this.onChecked} checked={checked} />
 <i></i>
 <span style={{display: "inline"}}>{word}</span>
 </label>
 </div>
 */}
