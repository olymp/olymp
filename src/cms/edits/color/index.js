import React, { Component } from 'react';
import { Select, Input } from 'antd';
import tinycolor from 'tinycolor2';
// import ColorPicker from 'rc-color-picker';
import { withColors } from '../../decorators';

const ColorEditor = ({ value, colors = [], ...rest }) => {
  const newColors = [...colors];

  if (value !== 'other') {
    const valueIndex = colors.findIndex(
      color => tinycolor(value).toRgbString() === tinycolor(color.color).toRgbString()
    );

    if (valueIndex === -1) {
      newColors.push({ color: value, name: value });
    }
  }

  return !colors.length || value === 'other' ? /* <ColorPicker /> */ (
    <Input {...rest} placeholder={name} type="color" addonBefore={<i className="fa fa-eyedropper" />} />
  ) : (
    <Select
      showSearch
      value={value}
      {...rest}
      filterOption={
        (input, option) => option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {newColors.map((color, i) => (
        <Select.Option value={tinycolor(color.color).toRgbString()} key={i}>
          <i className="fa fa-square" style={{ color: tinycolor(color.color).toRgbString() }} /> {color.name}
        </Select.Option>
      ))}

      <Select.Option value={'other'} key={'other'}>
        <span className="react-custom-trigger">Eigene Farbe</span>
      </Select.Option>
    </Select>
  );
};

export default withColors(ColorEditor);
