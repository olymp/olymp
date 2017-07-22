// @flow
import React from 'react';
import { connect } from 'react-redux';
import { insertMode } from 'ory-editor-core/lib/actions/display';
import { isInsertMode } from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import { Button, Tooltip } from 'antd';

const Inner = ({ isInsertMode, insertMode }) =>
  <Tooltip placement="left" title="Hinzufügen">
    <Button
      shape="circle"
      icon="plus"
      size="large"
      type={isInsertMode ? 'primary' : 'default'}
      onClick={insertMode}
    />
  </Tooltip>;

const mapStateToProps = createStructuredSelector({ isInsertMode });
const mapDispatchToProps = { insertMode };

export default connect(mapStateToProps, mapDispatchToProps)(Inner);
