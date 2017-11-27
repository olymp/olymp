import React from 'react';
import { createComponent } from 'react-fela';

export const Heading = createComponent(
  ({
    fontSize,
    theme,
    padding,
    marginBottom,
    marginTop,
    textAlign,
    thin,
    color,
    center,
  }) => ({
    color: color && (color === true ? theme.color : theme[color] || color),
    textAlign: center ? 'center' : textAlign,
    fontWeight: thin && 200,
    padding,
    fontSize,
    lineHeight: fontSize ? `${fontSize}px` : undefined,
    marginTop: marginTop !== undefined ? marginTop : undefined,
    marginBottom: marginBottom !== undefined ? marginBottom : 15,
  }),
  ({ level, children, ...rest }) => {
    if (!level) {
      level = 1;
    }
    return React.createElement(`h${level}`, rest, children);
  },
  ['level', 'itemProp'],
);

export const SectionHeading = ({ title, description, children }) => (
  <div key={0}>
    <H1 marginBottom={0} textAlign="center" light color thin>
      {title || children}
    </H1>
    {description && (
      <H3 marginTop={0} textAlign="center" thin>
        {description}
      </H3>
    )}
  </div>
);

export const H1 = props => <Heading {...props} level={1} />;
export const H2 = props => <Heading {...props} level={2} />;
export const H3 = props => <Heading {...props} level={3} />;
export const H4 = props => <Heading {...props} level={4} />;
export const H5 = props => <Heading {...props} level={5} />;
export const H6 = props => <Heading {...props} level={6} />;
