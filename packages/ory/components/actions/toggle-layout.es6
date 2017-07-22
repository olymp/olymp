// @flow
import React from 'react';
import { connect } from 'react-redux';
import { layoutMode } from 'ory-editor-core/lib/actions/display';
import { isLayoutMode } from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import { Button, Tooltip } from 'antd';

const Inner = ({ isLayoutMode, layoutMode }) =>
  <Tooltip placement="left" title="Anordnen">
    <Button
      shape="circle"
      icon="appstore-o"
      size="large"
      type={isLayoutMode ? 'primary' : 'default'}
      onClick={layoutMode}
    />
  </Tooltip>;

const mapStateToProps = createStructuredSelector({ isLayoutMode });
const mapDispatchToProps = { layoutMode };

export default connect(mapStateToProps, mapDispatchToProps)(Inner);
