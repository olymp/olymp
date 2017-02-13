import React, { Component } from 'react';
import { Select, Input } from 'antd';
import tinycolor from 'tinycolor2';
// import '@mapbox/react-colorpickr/dist/colorpickr.css';
import { withColors } from '../../decorators';

let ColorPicker = null;
if (typeof document !== 'undefined') {
  ColorPicker = require('@mapbox/react-colorpickr');
}

const hasNativePicker = () => {
  if (!ColorPicker) return true;
  if (typeof document === 'undefined') return true;
  if (!document.createElement) return true;
  const i = document.createElement('input');
  i.setAttribute('type', 'color');
  return i.type !== 'text';
};

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

  if (colors.length || value === 'other') {
    return (
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
  } else if (hasNativePicker()) {
    return <Input {...rest} placeholder={name} type="color" addonBefore={<i className="fa fa-eyedropper" />} value={value} />;
  }

  return <ColorPicker {...rest} value={value} />;
};

export default withColors(ColorEditor);
