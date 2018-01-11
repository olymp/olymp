import React, { Component } from 'react';
import createComponent from './utils/create-component';
import Portal from './portal';

let ipc = null;
if (process.env.IS_ELECTRON) {
  ipc = require('electron').ipcRenderer;
}

class PrintWindow extends Component {
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
const Print = createComponent(
  () => ({
    backgroundColor: 'white',
    minHeight: '100%',
    width: '100%',
    margin: 0,
    zIndex: 10000,
  }),
  p => <PrintWindow {...p} />,
  p => Object.keys(p),
);
export default Print;

Print.Break = createComponent(
  () => ({
    pageBreakBefore: 'always',
  }),
  ({ tag = 'div', ...rest }) => React.createElement(tag, rest),
  ['tag'],
);
