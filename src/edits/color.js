import React from 'react';
import { Select, Input } from 'antd';
import tinycolor from 'tinycolor2';
import { withColors } from '../core/decorators';

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

  if (value && value !== 'other') {
    const valueIndex = colors.findIndex(
      color => tinycolor(value).toRgbString() === tinycolor(color.color).toRgbString()
    );

    if (valueIndex === -1) {
      newColors.push({ color: value, name: value });
    }
  }

  let select;
  if (colors.length || value === 'other') {
    select = (
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
  }

  // Show Picker
  let picker;
  if (!colors.length || value === 'other') {
    if (hasNativePicker()) {
      picker = (
        <Input
          {...rest}
          placeholder={name}
          type="color"
          addonBefore={<i className="fa fa-eyedropper" />}
          value={tinycolor(value || '#000000').toHexString()}
          defaultValue={tinycolor(value || '#000000').toHexString()}
        />
      );
    } else {
      picker = <ColorPicker {...rest} value={value} />;
    }
  }

  return (
    <div>
      <div>
        {select}
      </div>
      <div style={{ marginTop: '.5rem' }}>
        {picker}
      </div>
    </div>
  );
};

export default withColors(ColorEditor);
