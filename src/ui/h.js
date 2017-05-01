import React from 'react';
import { styled } from 'olymp';

export const H = styled(({ fontSize, theme, padding, marginBottom, marginTop, textAlign, light, colored, color }) => ({
  color: (colored || color) && theme.color,
  fontWeight: light && 200,
  textAlign,
  padding,
  fontSize,
  lineHeight: fontSize ? `${fontSize}px` : undefined,
  marginTop: marginTop !== undefined ? marginTop : undefined,
  marginBottom: marginBottom !== undefined ? marginBottom : 15,
}), ({ level, children, ...rest }) => {
  if (!level) level = 1;
  return React.createElement(`h${level}`, rest, children);
}, ['level', 'itemProp']);

export const SectionH = ({ title, description }) => (
  <div key={0}>
    <H marginBottom={0} textAlign="center" level={3} light color>
      {title}
    </H>
    {description && <H marginTop={0} textAlign="center" level={5} fontSize={12} light>
      {description}
    </H>}
  </div>
);
