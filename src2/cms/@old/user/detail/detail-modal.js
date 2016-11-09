import React, {Component, PropTypes} from "react";
import Modal from "../../../components/modal";
import User from "./detail";
import {observer} from 'mobx-react';

class DetailModal extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const {params} = this.props;
    const {store} = this.context;

    store.auth.loadOne(params && params.id ? params.id : store.auth.user.id).then(user => {
      this.setState({user});
    });
  }

  patch(patch) {
    const {user} = this.state;

    this.setState({user: {...user, ...patch}});
  }

  save() {
    const {user} = this.state;

    this.props.save(user);
  }

  render() {
    const {user} = this.state;
    const {close} = this.props;

    return user ? (
      <Modal
        save={::this.save}
        close={close}
        blank={false}
        visible={true}>
        <User {...user} patch={::this.patch}/>
      </Modal>
    ) : <div />
  }
}

export default observer(DetailModal);
