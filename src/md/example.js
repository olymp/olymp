import React, { Component, PropTypes } from 'react';
import text from './example.md';
import md from './index';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import './style.less';

const fallback = (props) => {
  return <div>No component of type {props.name} found</div>;
};
const gallery = (props) => {
  const { name, alt, width, height, float, children } = props;
  const src = name
    ? `https://res.cloudinary.com/djyenzorc/image/upload/f_auto,q_auto,fl_lossy/v1480883925/${name}`
    : 'http://placehold.it/350x150';
  return (
    <div style={{ float }}>
      <img src={src} alt={alt} width={width || 'auto'} height={height || 'auto'} />
      {children}
    </div>
  );
}
gallery.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  float: PropTypes.string,
}
const bordered = (props) => {
  const { children, color } = props;
  return (
    <div style={{ border: `1px solid ${color || 'red'}` }}>
      {children}
    </div>
  );
}
bordered.propTypes = {
  color: PropTypes.string,
}
export default class MdExample extends Component {
  state = { text };
  constructor(props) {
    super(props);
    this.remark = md({
      fallback,
      bordered,
      gallery,
    });
  }
  render() {
    return (
      <div>
        <CodeMirror value={this.state.text} onChange={(text) => this.setState({ text })} options={{
          mode: 'markdown',
        }} />
        <div>
          {this.remark(this.state.text)}
        </div>
      </div>
    );
  }
}

