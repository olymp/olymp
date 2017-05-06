import React, { Component } from 'react';
import { styled } from 'olymp';

export const SplitView = styled(() => ({
  display: 'flex',
  minHeight: 600,
}), 'div', ({ side, ...p }) => p);

export const Panel = styled(({ display, alignLabel, ...rest }) => ({
  position: 'relative',
  // border: '1px solid transparent',
  overflowY: 'auto',
  display,
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

export const Container = styled(() => ({
  width: 700,
  maxWidth: 700,
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.0667)',
  margin: '1rem auto',
  padding: '1rem',
  backgroundColor: '#FFFFFF',
}), 'div', p => p);
