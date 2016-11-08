import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

function DataWrapper(Comp, model, resOptions) {
  class DataWrapperBlock extends Component {
    static contextTypes = {
      store: PropTypes.object.isRequired
    };

    constructor() {
      super();
      this.state = {};
    }

    componentDidMount() {
      // Do not touch :)
      this.store = this.context.store.rest.createStore(model, this.props.criteria || this.criteria, this.props.order || this.order);
      this.setState({inited: true});
      this.store.load().then(x=>this.setState({loaded: true}));
      // -- end of do not touch
    }

    sort = (order) => {
      if (this.store) this.store.sort(order);
      else this.order = order;
    }

    filter = (criteria) => {
      if (this.store) this.store.filter(criteria);
      else this.criteria = criteria;
    }

    render() {
      if (!this.store) return null;

      return <Comp {...this.store} {...this.props} filter={this.filter} sort={this.sort}/>;
    }
  }
  var Wrapped = observer(DataWrapperBlock);
  Wrapped.title = Comp.title;
  Wrapped.icon = Comp.icon;
  Wrapped.category = Comp.category;
  Wrapped.WrappedComponent = Comp;
  return Wrapped;
}

export default DataWrapper;


