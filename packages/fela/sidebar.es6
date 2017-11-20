import React, { Component } from 'react';
import createComponent from './utils/create-component';
import Portal from './portal';

export class Sidebar extends Component {
  componentWillUnmount() {
    document.getElementById('app').style.display = 'initial';
  }
  componentDidMount() {
    document.getElementById('app').style.display = 'none';
    const { onClose, pdf } = this.props;
    setTimeout(() => {
      if (ipc && pdf) {
        ipc.send('print-to-pdf', { name: pdf });
      } else {
        window.print();
      }
      setTimeout(onClose, 200);
    }, 1000);
  }
  render() {
    const { children, className } = this.props;
    return (
      <Portal>
        <div className={className}>{children}</div>
      </Portal>
    );
  }
}
Sidebar.Container = createComponent(
  ({ width }) => ({
    '> div': {
      position: 'fixed',
    },
    '> article': {
      marginLeft: width || 350,
      position: 'relative',
    },
  }),
  'div',
  p => Object.keys(p),
);
export default Sidebar;
