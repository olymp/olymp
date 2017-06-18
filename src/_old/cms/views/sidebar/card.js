import React from 'react';
import { Card } from 'antd';
import { Image } from 'olymp';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';

const StyledCard = createComponent(
  ({ isActive, color }) => ({
    cursor: 'pointer',
    margin: '3px 10px 3px 0',
    borderRight: color
      ? `3px solid ${tinycolor(color).setAlpha(1).toRgbString()}!important`
      : null,
    left: isActive ? '15px' : 0,
    minHeight: '60px',
    '> .ant-card-extra': {
      top: '5px',
      right: '5px',
    },
    '> .ant-card-body': {
      padding: 0,
    },
    ':hover': !isActive && {
      left: '10px',
    },
  }),
  props => <Card {...props} />,
  ['onClick', 'extra']
);

const StyledCardContent = createComponent(() => ({
  padding: '8px',
  marginLeft: '60px',
}));

const StyledCardTitle = createComponent(
  () => ({
    width: '200px',
    ellipsis: true,
  }),
  'h6'
);

const StyledCardParagraph = createComponent(
  () => ({
    margin: 0,
    ellipsis: true,
    width: '200px',
    // whiteSpace: 'nowrap',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    lineHeight: '18px',
    maxHeight: '54px',
    fontSize: 'small',
  }),
  'p'
);

export default ({ name, description, image, ...rest }) =>
  (<StyledCard {...rest}>
    {!!image &&
      <Image
        value={image}
        width={60}
        retina
        mode="lpad"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />}
    <StyledCardContent>
      <StyledCardTitle>{name}</StyledCardTitle>
      {!!description &&
        <StyledCardParagraph>{description}</StyledCardParagraph>}
    </StyledCardContent>
  </StyledCard>);
