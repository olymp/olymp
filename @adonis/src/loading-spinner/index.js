import React, {Component, PropTypes, cloneElement, Children} from 'react';
import styles from './style.less';
export default class LoadingSpinner extends Component {
  state = {
    show: false
  }
  componentWillReceiveProps(props) {
    if (props.active !== this.props.active) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
      if (props.active) {
        this.setState({ show: true });
      } else {
        this.timeout = setTimeout(() => {
          this.setState({ show: false });
        }, 500);
      }
    }
  }
  render() {
    const { children } = this.props;
    const { show } = this.state;
    return cloneElement(
      Children.only(children), {
        style: { opacity: show ? 1 : 0 },
        className: styles.spinner
      }
    );
  }
}
