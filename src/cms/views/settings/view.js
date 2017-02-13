import React, { Component } from 'react';
import { gql, graphql, withCollection } from 'olymp';
import Modal from '../modal';
import Sidebar from '../sidebar';

@withCollection('Settings')
@graphql(gql`
  query settings {
    settings: settings {
      title,
      description
    }
  }
`, {
  options: (arg0, arg1) => {
    console.log(arg0, arg1);

    return {};
  }
})
export default class SettingView extends Component {
  render() {
    const { collectionLoading } = this.props;

    return (
      <Modal>
        <Sidebar activePage="Einstellungen" isLoading={collectionLoading} />

        <div className="container olymp-container">
          test
        </div>
      </Modal>
    );
  }
}
