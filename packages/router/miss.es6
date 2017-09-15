import { Children, Component } from 'react';
import { connect } from 'react-redux';
import { createMiss } from './redux';

@connect(null, dispatch => ({
  miss: createMiss(dispatch),
}))
export default class Miss extends Component {
  constructor(props) {
    super(props);
    props.miss();
  }

  render() {
    return Children.only(this.props.children);
  }
}
