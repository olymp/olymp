import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      type: 'text',
      lines: 1,
      placeholder: null,
      onChange: null,
      required: false,
      value: null,
      prepend: null,
    };
  },
  changed(e) {
    const { updateValue, onChange } = this.props;
    const change = updateValue || onChange;
    if (change) change(e.target.value || null);
  },
  render() {
    const { lines, placeholder, description, value, required, type, icon, defaultValue, children } = this.props;
      // <div class="input-group m-b">
      //    <span class="input-group-addon">@</span>
      //    <input type="text" class="form-control" placeholder="Username">
      // </div>

    const input = (lines > 1) ? (
      <textarea
        type={type || 'text'}
        className="form-control"
        rows={lines}
        placeholder={defaultValue || placeholder || description}
        onChange={this.changed}
        value={value || ''}
        required={required}
      />
    ) : (
      <input
        type={type || 'text'}
        className="form-control"
        placeholder={defaultValue || placeholder || description}
        onChange={this.changed}
        value={value || ''}
        required={required}
      />
    );

    if (icon) {
      return (
        <div className="ui icon input">
          <i className={`${icon} icon`} />
          {input}
          {children}
        </div>
      );
    } else if (children) {
      return (
        <div className="ui action input">
          {input}
          {children}
        </div>
      );
    } return input;
  },
});
