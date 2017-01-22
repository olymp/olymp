import React from 'react';
import { Image } from '../../edits';
import { Card } from 'antd';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';

const StyledCard = createComponent(({ isActive, color }) => {
  const colorStyle = {};
  if (color) {
    colorStyle.backgroundColor = `${tinycolor(color).toRgbString()}!important`;
    colorStyle.color = tinycolor.isReadable('#FFF', color) ? '#FFF' : '#333';
    colorStyle.borderColor = `${tinycolor(color).darken(5).toRgbString()}!important`;
    // colorStyle.color = '#222';
  }

  return {
    cursor: 'pointer',
    margin: '3px 10px 3px 0',
    left: isActive ? '15px' : 0,
    ...colorStyle,
    '> .ant-card-extra': {
      top: '5px',
      right: '5px',
    },
    '> .ant-card-body': {
      padding: 0,
      ...colorStyle,
    },
    ':hover': {
      left: '15px',
    },
  };
}, props => <Card {...props} />, ['onClick', 'extra']);

const StyledCardContent = createComponent(() => ({
  padding: '8px',
  float: 'left',
}));

const StyledCardImagePlaceholder = createComponent(() => ({
  width: '60px',
  height: '60px',
  float: 'left',
}));

const StyledCardTitle = createComponent(() => ({
  width: '200px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}), 'h6');

const StyledCardParagraph = createComponent(() => ({
  margin: 0,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '200px',
  whiteSpace: 'nowrap',
}), 'p');

export default ({ name, description, image, ...rest }) => (
  <StyledCard {...rest}>
    {!!image && <Image value={image} width={60} retina ratio={1} style={{ float: 'left' }} />}
    {image === null && <StyledCardImagePlaceholder />}

    <StyledCardContent>
      <StyledCardTitle>{name}</StyledCardTitle>
      {!!description && <StyledCardParagraph>{description}</StyledCardParagraph>}
    </StyledCardContent>
  </StyledCard>
);
