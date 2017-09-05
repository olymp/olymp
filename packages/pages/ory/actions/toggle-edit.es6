// @flow
import React from 'react';
import { connect } from 'react-redux';
import { editMode } from 'ory-editor-core/lib/actions/display';
import { isEditMode } from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import { Button, Tooltip } from 'antd';

const Inner = ({ isEditMode, editMode }) =>
  <Tooltip placement="left" title="Bearbeiten">
    <Button
      shape="circle"
      icon="edit"
      size="large"
      type={isEditMode ? 'primary' : 'default'}
      onClick={editMode}
    />
  </Tooltip>;

const mapStateToProps = createStructuredSelector({ isEditMode });
const mapDispatchToProps = { editMode };

export default connect(mapStateToProps, mapDispatchToProps)(Inner);
