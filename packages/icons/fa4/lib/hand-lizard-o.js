import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  (<svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M1023 0q61 0 116 28t91 77l572 781q118 159 118 359v355q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-177l-286-143h-546q-80 0-136-56t-56-136v-32q0-119 84.5-203.5t203.5-84.5h420l42-128h-686q-100 0-173.5-67.5t-81.5-166.5q-65-79-65-182v-32q0-80 56-136t136-56h959zm769 1600v-355q0-157-93-284l-573-781q-39-52-103-52h-959q-26 0-45 19t-19 45q0 32 1.5 49.5t9.5 40.5 25 43q10-31 35.5-50t56.5-19h832v32h-832q-26 0-45 19t-19 45q0 44 3 58 8 44 44 73t81 29h731q40 0 68 28t28 68q0 15-5 30l-64 192q-10 29-35 47.5t-56 18.5h-443q-66 0-113 47t-47 113v32q0 26 19 45t45 19h561q16 0 29 7l317 158q24 13 38.5 36t14.5 50v197q0 26 19 45t45 19h384q26 0 45-19t19-45z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
