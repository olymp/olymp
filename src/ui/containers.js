import React, { Component } from 'react';
import { styled } from 'olymp';

export const SplitView = styled(({ side, width }) => ({
  display: 'flex',
  minHeight: 600,
}), 'div', ({ side, ...p }) => p);

export const Panel = styled(({ paddingX, height, width, paddingY, padding, margin, minWidth, display }) => ({
  display,
  position: 'relative',
  paddingLeft: paddingX,
  paddingRight: paddingX,
  paddingTop: paddingY,
  paddingBottom: paddingY,
  width,
  height,
  minWidth,
  margin,
  padding,
  // border: '1px solid transparent',
  overflow: 'auto',
}), 'div', ['children', 'itemScope', 'itemType']);
