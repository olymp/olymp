// @flow
import React from 'react';
import { connect } from 'react-redux';
import { resizeMode } from 'ory-editor-core/lib/actions/display';
import { isResizeMode } from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import { Button, Tooltip } from 'antd';

const Inner = ({ isResizeMode, resizeMode }) =>
  <Tooltip placement="left" title="Größe ändern">
    <Button
      shape="circle"
      icon="shrink"
      size="large"
      type={isResizeMode ? 'primary' : 'default'}
      onClick={resizeMode}
    />
  </Tooltip>;

const mapStateToProps = createStructuredSelector({ isResizeMode });
const mapDispatchToProps = { resizeMode };

export default connect(mapStateToProps, mapDispatchToProps)(Inner);
