import React, { Component } from 'react';
import ReactFilestack from 'react-filestack';
import { mutateFile } from './gql';

@mutateFile
export default class PageSidebar extends Component {
  onSuccess = ({ filesFailed, filesUploaded }) => {
    const { save } = this.props;

    filesUploaded.forEach(item => {
      if (item.status === 'Stored') {
        return save(item);
      }
      return false;
    });
  };

  onError = error => {
    console.log(error);
  };

  render() {
    const { className } = this.props;

    return (
      <ReactFilestack
        apikey={process.env.FILESTACK_KEY}
        onSuccess={this.onSuccess}
        onError={this.onError}
        options={{
          lang: 'de',
        }}
        render={({ onPick }) =>
          <div className={className}>
            <strong>Find an avatar</strong>
            <button onClick={onPick}>Pick</button>
          </div>}
      />
    );
  }
}
