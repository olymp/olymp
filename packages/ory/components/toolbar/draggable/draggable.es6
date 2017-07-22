// @flow
import React, { Component } from 'react';
import { shouldPureComponentUpdate } from 'ory-editor-core/lib/helper/shouldComponentUpdate';
import { DragSource as dragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { createComponent } from 'react-fela';
import { clearHover } from 'ory-editor-core/lib/actions/cell/drag';
import {
  insertMode,
  editMode,
  layoutMode,
} from 'ory-editor-core/lib/actions/display';
import { source, collect } from './helper';

const instances = {};

const Inner = createComponent(
  ({ theme, isDragging }) => ({
    cursor: /* isDragging && */ 'move',
  }),
  'div',
  []
);

class Draggable extends Component {
  componentDidMount() {
    const img = new Image();
    img.onload = () => this.props.connectDragPreview(img);
    img.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAA6UlEQVRYhe2ZQQ6CMBBFX0njHg7ESXTp1p3uvIBewc3Em3AfdelSFwRDCAm01JRO+pa0lP8zzc9kMCKyAa7AFqhIixdwB44WuACHuHq8KWm1vwtgF1lMCPaWkevUNE3Qr9R17XTu1P5uvUdV+IpbG2qMGBH5xBYRAjUVUWPEjj10SS3XRFry3kha/VBTETVGcmqtDTVGFqdWn7k9ku96f88QNRVRYySn1tpQY8QptXz7qinmnpt7rZTIqbU21BgJ2mv1+XfCDVFTETVGjIg8SG8KP+RZ0I7lU+dmgRNgaKfyZVw9znT/R85fOHJJE77U6UcAAAAASUVORK5CYII=';
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { className, connectDragSource, isDragging, children } = this.props;

    return connectDragSource(
      <div className={className}>
        <Inner isDragging={isDragging}>
          {children}
        </Inner>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = { insertMode, editMode, layoutMode, clearHover };

export default (dragType: string = 'CELL') => {
  if (!instances[dragType]) {
    instances[dragType] = connect(mapStateToProps, mapDispatchToProps)(
      dragSource(dragType, source, collect)(Draggable)
    );
  }

  return instances[dragType];
};
