import React, { Component } from 'react';
import { SlateMate } from 'olymp/slate';

export default class SlateMateExt extends Component {
  state = { show: false };
  onClose = (e) => {
    const { onChange } = this.props;
    this.setState({ show: false });
    if (e) onChange(e);
  }
  render() {
    const { show } = this.state;
    return (
      <div className="frontend">
        <SlateMate className="frontend-editor form-controlxx" {...this.props} />
      </div>
    );
    // if (show) return <SlateModal className="form-controlxx" {...this.props} onClose={this.onClose} />;
    // return <Button onClick={() => this.setState({ show: true })}>Anzeigen</Button>;
  }
}
