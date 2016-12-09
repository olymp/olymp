import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DraggableCore } from 'react-draggable';

const Cover = ({ children, style }) => (
  <div style={{ backgroundColor: 'black', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}>{children}</div>
);

export default (options = {}) => Block => {
  const { ratio, relative, coverOnResize, enable, stepX, stepY, width: initialWidth, height: initialHeight } = options;
  return class ResizeableDecorator extends Component {
    static slate = Block.slate;
    static propTypes = {
      getData: PropTypes.func,
      setData: PropTypes.func,
      editor: PropTypes.object,
      style: PropTypes.object,
    }

    state = {
      resize: false,
      width: null,
      height: null,
    };

    componentDidMount() {
      const elementDimensions = findDOMNode(this.block).getBoundingClientRect();
      this.elementWidth = elementDimensions.width;
      this.elementHeight = elementDimensions.height;
    }

    getSize = (args = {}) => {
      const { getData } = this.props;
      let width = args.width || this.state.width || getData('width', initialWidth || 200);
      let height = args.height || this.state.height || getData('height', initialHeight || 200);

      if (/^\d+(\.\d+)?%$/.test(width)) {
        // Bei %-Wert
        width = this.elementWidth;
      }
      if (/^\d+(\.\d+)?%$/.test(height)) {
        // Bei %-Wert
        height = this.elementHeight;
      }

      return {
        width,
        height: ratio ? (width / ratio) : height,
      };
    }

    onResizeStart = () => {
      this.setState({ resize: true, ...this.getSize() });
    }

    onResizeStop = (event, { deltaX, deltaY }) => {
      const { setData } = this.props;
      const width = this.state.width + deltaX;
      const height = this.state.height + deltaY;
      setData({ width, height });
      this.setState({ resize: false, width: null, height: null });
    }

    onResize = (event, { deltaX, deltaY, x, y }) => {
      let width;
      let height;

      if (this.state.width === parseInt(this.state.width, 10)) {
        width = this.state.width + deltaX;
      }
      if (stepX === parseInt(stepX, 10)) {
        // z.B. steps: 100
        width = Math.round(x / stepX) * stepX;
      } else if (/^\d+(\.\d+)?%$/.test(stepX)) {
        // z.B. steps: '100%'
        const newStepX = (this.elementWidth * parseInt(stepX, 10)) / 100;
        width = Math.round(x / newStepX) * newStepX;
      }

      if (this.state.height === parseInt(this.state.height, 10)) {
        height = this.state.height + deltaY;
      }
      if (stepY === parseInt(stepY, 10)) {
        // z.B. steps: 100
        height = Math.round(y / stepY) * stepY;
      } else if (/^\d+(\.\d+)?%$/.test(stepY)) {
        // z.B. steps: '100%'
        const newStepY = (this.elementHeight * parseInt(stepY, 10)) / 100;
        height = Math.round(y / newStepY) * newStepY;
      }

      this.setState(this.getSize({ width, height }));
    }

    render() {
      if (enable === false) return <Block {...this.props} />;
      const { editor } = this.props;
      const { resize } = this.state;
      const { width, height } = this.getSize();
      const style = {
        ...this.props.style,
        height: `${height}px`,
        width: `${width}px`,
      };

      const children = editor.props.readOnly ? this.props.children : [
        ...this.props.children,
        resize && coverOnResize ? <Cover key="resizableCover" style={style} children={children} /> : null,
        <DraggableCore
          key="resizableHandle"
          onStop={this.onResizeStop}
          onStart={this.onResizeStart}
          onDrag={this.onResize}
        >
          <span className="react-resizable-handle" />
        </DraggableCore>
      ];

      return (
        <Block
          {...this.props}
          style={style}
          ref={e => this.block = e}
        >
          {children}
        </Block>
      );
    }
  };
};
