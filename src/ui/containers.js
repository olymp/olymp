import React, { Component } from 'react';
import { styled } from 'olymp';

export const SplitView = styled(({ side, width }) => ({
  display: 'flex',
  minHeight: 600,
}), 'div', ({ side, ...p }) => p);

export const Panel = styled(({ display, alignLabel, ...rest }) => ({
  position: 'relative',
  // border: '1px solid transparent',
  overflowY: 'auto',
  display: display,
  '> *': display === 'flex' && {
    overflowY: 'auto',
  },
  ...rest,
  '& .ant-form-item': alignLabel && { // oops, should not be here!
    marginBottom: 12,
    '> .ant-form-item-label': {
      textAlign: alignLabel,
    },
  },
}), 'div', ['children', 'itemScope', 'itemType']);
