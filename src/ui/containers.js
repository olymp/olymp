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

export const Container = styled(({ width, padding }) => ({
  width: width || 700,
  maxWidth: width || 700,
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.0667)',
  margin: '1rem auto',
  padding: padding !== undefined ? padding : '1rem',
  backgroundColor: '#FFFFFF',
  position: 'relative',
}), 'div', ({ width, padding, ...p }) => p);

export const Placeholder = styled(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 200,
  fontSize: '200%',
  opacity: .5,
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
}), 'div', p => p);
