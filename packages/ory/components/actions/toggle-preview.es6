// @flow
import React from 'react';
import { connect } from 'react-redux';
import { previewMode } from 'ory-editor-core/lib/actions/display';
import { isPreviewMode } from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import { Button, Tooltip } from 'antd';

const Inner = ({ isPreviewMode, previewMode }) =>
  <Tooltip placement="left" title="Vorschau">
    <Button
      shape="circle"
      icon="laptop"
      size="large"
      type={isPreviewMode ? 'primary' : 'default'}
      onClick={previewMode}
    />
  </Tooltip>;

const mapStateToProps = createStructuredSelector({ isPreviewMode });
const mapDispatchToProps = { previewMode };

export default connect(mapStateToProps, mapDispatchToProps)(Inner);
