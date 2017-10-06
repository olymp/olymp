import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Progress as AntProgress } from 'antd';
import { createComponent } from 'olymp-fela';

const Dragger = createComponent(
  ({ theme, clickable }) => ({
    '> .ant-upload': {
      border: 0,
      cursor: clickable ? 'pointer' : 'default',
      height: '100%',
    },
  }),
  Upload.Dragger,
  ({ clickable, ...p }) => Object.keys(p),
);

const ProgressWrapper = createComponent(
  ({ theme }) => ({
    position: 'relative',
    height: '100%',
  }),
  ({ onClick, children, className, disabled, ...p }) => (
    <div className={className} onClick={onClick}>
      {!disabled && <Progress {...p} />}
      {children}
    </div>
  ),
  p => Object.keys(p),
);

const Progress = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    position: 'absolute',
    zIndex: 1,
    '> .ant-progress': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
  ({ className, ...p }) => (
    <div className={className}>
      <AntProgress {...p} />
    </div>
  ),
  p => Object.keys(p),
);

class DragZone extends Component {
  render() {
    const { clickable, uploading, children, ...rest } = this.props;
    const progress = uploading.reduce((a, x) => a + x.percent * x.size, 0);
    const size = uploading.reduce((a, x) => a + x.size, 0);

    return (
      <ProgressWrapper
        type="circle"
        percent={Math.round(progress / size) || 0}
        onClick={e => (clickable ? {} : e.preventDefault())}
        disabled={!uploading.length}
      >
        <Dragger clickable={clickable} {...rest}>
          {children}
        </Dragger>
      </ProgressWrapper>
    );
  }
}
DragZone.propTypes = {
  clickable: PropTypes.bool,
  uploading: PropTypes.array,
};
DragZone.defaultProps = {
  clickable: true,
  uploading: [],
};
export default DragZone;
