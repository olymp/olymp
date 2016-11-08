import React from 'react';

var Component = React.createClass({
    getInitialState: function () {
        return {};
    },
    changed: function(e){
        this.props.updateValue(e.target.value);
    },
    render: function () {
        return (
            <div className="input-group">
                <span style={{fontSize: "11px"}} className="input-group-addon">http:/ekgd.kniffler.com/</span>
                <input type="text" className="form-control" onChange={this.changed} value={this.props.value} />
            </div>
        );
    }
});

export default Component;
