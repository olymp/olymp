import React from 'react';
import { Slider } from 'antd';

export default ({ value = [] }) => {
  return (
    <div>
      {value.map((v, i) => (
        <div style={{ marginBottom: '30px' }} key={i}>
          <Slider marks={{ 8: '08:00', 13: '13:00', 18: '18:00' }} range={3} min={7} max={19} step={0.5}
                  tipFormatter={v => v % 1 === 0 ? `${v}:00` : `${Math.floor(v)}:30`} />
        </div>
      ))}
    </div>
  );
};
