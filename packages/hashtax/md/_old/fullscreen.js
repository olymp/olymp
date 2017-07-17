import React, { Component, PropTypes } from 'react';
import text from './example.md';
import Portal from 'react-portal';
import { styled } from 'olymp-utils';
import md from './index';
import CodeMirror from 'react-codemirror';
import './fullscreen.less';
import './style.less';
import { components } from './example';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/markdown/markdown');
}

const Remark = md(components);
const modalSettings = {
  visible: true,
  okText: 'Speichern',
  cancelText: 'Abbruch',
  transitionName: 'fade',
  maskTransitionName: 'fade',
  wrapClassName: 'fullscreen-modal-wrap2',
  className: 'fullscreen-modal',
};
class MdExample extends Component {
  state = { text };
  constructor(props) {
    super(props);
  }
  editor = (ref) => {
    const cm = ref.getCodeMirror();
    cm.refresh();
  }
  render() {
    const options = { mode: 'markdown', lineWrapping: true, lineNumbers: true };
    return (
      <Portal isOpened>
        <div className={this.props.className}>
          <div>
            <CodeMirror ref={this.editor} value={this.state.text} onChange={(text) => this.setState({ text })} options={options} />
          </div>
          <div>
            <Remark value={this.state.text} />
          </div>
        </div>
      </Portal>
    );
  }
}
export default styled(() => ({
  backgroundColor: 'white',
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  zIndex: 10,
  '& .CodeMirror': {
    height: '100%',
  },
  '> div': {
    float: 'left',
    width: '50%',
    height: '100%',
    '> div': {
      height: '100%',
    },
  },
  '> div:nth-child(2)': {
    background: '#f5f2f0',
    borderLeft: '1px solid #cccccc',
    overflowY: 'auto',
    '> div': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  }
}), MdExample);
