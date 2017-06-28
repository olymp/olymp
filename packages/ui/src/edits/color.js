import React from 'react';
import { Select, Input } from 'antd';
import tinycolor from 'tinycolor2';
import { withColors } from '../decorators';
import { FaMagic } from 'olymp-icons';

const ColorPicker = null;
if (typeof document !== 'undefined') {
  // ColorPicker = require('@mapbox/react-colorpickr');
}

const hasNativePicker = () => {
  if (!ColorPicker) {
    return true;
  }
  if (typeof document === 'undefined') {
    return true;
  }
  if (!document.createElement) {
    return true;
  }
  const i = document.createElement('input');
  i.setAttribute('type', 'color');
  return i.type !== 'text';
};

const ColorEditor = ({ value, onChange, colors = [], ...rest }) => {
  const newColors = [...colors];
  if (!value) {
    value = '#000000';
  }

  let isOwnColor;
  if (value && value !== 'other') {
    const valueIndex = colors.findIndex(
      color =>
        tinycolor(value).toRgbString() === tinycolor(color.color).toRgbString()
    );

    isOwnColor = valueIndex === -1;

    if (isOwnColor) {
      newColors.push({ color: value, name: value });
    }
  }

  let select;
  if (colors.length) {
    select = (
      <Select
        showSearch
        value={value && tinycolor(value).toRgbString()}
        {...rest}
        filterOption={(input, option) =>
          option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {newColors.map((color, i) =>
          (<Select.Option value={tinycolor(color.color).toRgbString()} key={i}>
            <i
              className="fa fa-square"
              style={{ color: tinycolor(color.color).toRgbString() }}
            />{' '}
            {color.name}
          </Select.Option>)
        )}

        <Select.Option value={'other'} key={'other'}>
          <span className="react-custom-trigger">Eigene Farbe</span>
        </Select.Option>
      </Select>
    );
  }

  // Show Picker
  let picker;
  if (!colors.length || value === 'other' || isOwnColor) {
    if (hasNativePicker()) {
      picker = (
        <Input
          type="color"
          style={{ width: 100 }}
          value={tinycolor(value).toHexString()}
          defaultValue={tinycolor(value).toHexString()}
          onChange={onChange}
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
      <div style={{ marginTop: 2 }}>
        {picker}
      </div>
    </div>
  );
};

export default withColors(ColorEditor);
