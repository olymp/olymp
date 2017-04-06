import React, { Component } from 'react';
import { styled } from 'olymp';

export const SplitView = styled(({ side, width }) => ({
  display: 'flex',
  minHeight: 600,
}), 'div', ({ side, ...p }) => p);


export const Panel = styled(({ padding, margin, minWidth }) => ({
  position: 'relative',
  minWidth,
  margin,
  padding,
  // border: '1px solid transparent',
  overflow: 'hidden',
}), 'div', ['children', 'itemScope', 'itemType']);
