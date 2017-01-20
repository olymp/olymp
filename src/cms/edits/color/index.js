import React, { Component } from 'react';
import { Select, Input } from 'antd';
import tinycolor from 'tinycolor2';
import { withColors } from '../../decorators';
// todo: Input ersetzen mit import ColorPicker from 'rc-color-picker';

const ColorEditor = ({ value, colors = [], ...rest }) => {
  const newColors = [...colors];

  if (value !== 'other') {
    const valueIndex = colors.findIndex(
      color => tinycolor(value).toHexString() === tinycolor(color.color).toHexString()
    );

    if (valueIndex === -1) {
      newColors.push({ color: value, name: value });
    }
  }

  return value === 'other' ? (
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
        <Select.Option value={tinycolor(color.color).toHexString()} key={i}>
          <i className="fa fa-square" style={{ color: tinycolor(color.color).toHexString() }} /> {color.name}
        </Select.Option>
      ))}

      <Select.Option value={'other'} key={'other'}>
        <span className="react-custom-trigger">Eigene Farbe</span>
      </Select.Option>
    </Select>
  );
};

export default withColors(ColorEditor);
