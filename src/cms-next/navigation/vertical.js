import React, { Component } from 'react';
import { withAuth, withRouter, styled } from 'olymp';
import tinycolor from 'tinycolor2';
import Button from './button';

const Styled = styled(({ left, top, theme }) => ({
  width: 56,
  backgroundColor: 'whitesmoke',
  flex: '0 0 56px',
  boxShadow: 'inset -10px 0 3px -9px hsla(0,0%,0%,.2)',
  background: `linear-gradient(0deg, ${theme.colorStart || tinycolor(theme.color).darken(6).spin(-6).toRgbString()}, ${theme.colorEnd || tinycolor(theme.color).lighten(6).spin(12).toRgbString()})`,
}), ({ className, children, collections }) => (
  <div className={className}>
    <Button collections={collections}/>
    {children}
  </div>
), p => p);

export default Styled
