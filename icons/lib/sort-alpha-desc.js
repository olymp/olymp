import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1255 1432h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zm-455 8q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm925 246v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70zm-89-1151v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5.5t-7.5.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 10v3l14-3q9-1 30-1h248v-119h121z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);