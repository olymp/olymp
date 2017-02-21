import React, { Component, PropTypes } from 'react';
import { throttleInput } from 'olymp';
import { findDOMNode } from 'react-dom';
import { DraggableCore } from 'react-draggable';
import cn from 'classnames';

const Cover = ({ children, style }) => (
  <div style={{ backgroundColor: 'black', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}>{children}</div>
);

export default (options = {}) => Block => {
  const { coverOnResize, enable, resizeX, resizeY, width: initialWidth, height: initialHeight } = options;
  return class ResizeableDecorator extends Component {
    throttle = throttleInput();
    static slate = Block.slate;
    static propTypes = {
      getData: PropTypes.func,
      setData: PropTypes.func,
      editor: PropTypes.object,
      style: PropTypes.object,
    }

    static defaultProps = {
      style: {},
    }

    constructor(props) {
      super(props);
      const { getData } = props;
      this.state = {
        resize: false,
        width: getData('width', initialWidth),
        height: getData('height', initialHeight),
      };
    }

    componentDidMount() {
      this.element = findDOMNode(this.block);
    }

    onResizeStart = () => {
      this.setState({ resize: true });
    }

    onResizeStop = (event, { deltaX, deltaY }) => {
      const { setData } = this.props;
      const newState = {};
      if (this.state.width) newState.width = this.state.width;
      if (this.state.height) newState.height = this.state.height;
      setData(newState);
      this.setState({ resize: false });
    }

    onResize = (event, { deltaX, deltaY, x, y }) => {
      const { getData, alignment } = this.props;
      const elementDimensions = this.element.getBoundingClientRect();
      const newState = {};

      if (resizeX !== false) {
        const width = x ? (alignment === 'right' ? (elementDimensions.width - x) : x) : getData('width', initialWidth);
        const relWidth = Math.round(12 / elementDimensions.width * width);

        if (relWidth >= 0) newState.width = relWidth;
      }
      if (resizeY !== false) {
        const height = y || getData('width', initialWidth);
        if (height >= 0) newState.height = height;
      }

      if (newState.height !== this.state.height || newState.width !== this.state.width) {
        this.setState(newState);
      }
    }

    render() {
      if (enable === false) return <Block {...this.props} />;
      const { editor, alignment, style, className } = this.props;
      const { resize, height, width } = this.state;

      const children = editor.props.readOnly ? this.props.children : [
        ...this.props.children,
        resize && coverOnResize ? <Cover key="resizableCover" /> : null,
        <DraggableCore key="resizableHandle" onStop={this.onResizeStop} onStart={this.onResizeStart} onDrag={this.onResize}>
          <span className={cn('react-resizable-handle', alignment === 'right' ? 'handle-left' : 'handle-right')} />
        </DraggableCore>,
      ];

      const blockStyle = {
        ...style,
      };
      if (height) blockStyle.height = `${height}px`;

      return (
        <Block {...this.props} style={blockStyle} className={cn(width && `p-0 col-xs-${width}`, className)} ref={e => this.block = e}>
          {children}
        </Block>
      );
    }
  };
};
