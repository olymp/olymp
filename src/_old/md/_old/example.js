import React, { Component, PropTypes } from 'react';
import text from './example.md';
import createRemark from './index';
import CodeMirror from 'react-codemirror';
import './style.less';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/markdown/markdown');
}

const fallback = props => <div>No component of type {props.name} found</div>;
const gallery = (props) => {
  const { name, alt, width, height, float, children } = props;
  const src = name
    ? `https://res.cloudinary.com/djyenzorc/image/upload/f_auto,q_auto,fl_lossy/v1480883925/${name}`
    : 'http://placehold.it/350x150';
  return (
    <div style={{ float }}>
      <img
        src={src}
        alt={alt}
        width={width || 'auto'}
        height={height || 'auto'}
      />
      {children}
    </div>
  );
};
const bordered = (props) => {
  const { children, color } = props;
  return (
    <div style={{ border: `1px solid ${color || 'red'}` }}>
      {children}
    </div>
  );
};
gallery.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  float: PropTypes.string,
};
bordered.propTypes = {
  color: PropTypes.string,
};

export const components = { fallback, bordered, gallery };
const Remark = createRemark(components);

export default class MdExample extends Component {
  state = { text };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CodeMirror
          value={this.state.text}
          onChange={text => this.setState({ text })}
          options={{
            mode: 'markdown',
          }}
        />
        <div>
          <Remark value={this.state.text} />
        </div>
      </div>
    );
  }
}
