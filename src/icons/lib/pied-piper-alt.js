import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1099 929q75-3 143.5 20.5t118 58.5 101 94.5 84 108 75.5 120.5q33 56 78.5 109t75.5 80.5 99 88.5q-48 30-108.5 57.5t-138.5 59-114 47.5q-44-37-74-115t-43.5-164.5-33-180.5-42.5-168.5-72.5-123-122.5-48.5l-10 2-6 4q4 5 13 14 6 5 28 23.5t25.5 22 19 18 18 20.5 11.5 21 10.5 27.5 4.5 31 4 40.5l1 33q1 26-2.5 57.5t-7.5 52-12.5 58.5-11.5 53q-35-1-101 9.5t-98 10.5q-39 0-72-10-2-16-2-47 0-74 3-96 2-13 31.5-41.5t57-59 26.5-51.5q-24-2-43 24-36 53-111.5 99.5t-136.5 46.5q-25 0-75.5-63t-106.5-139.5-84-96.5q-6-4-27-30-482 112-513 112-16 0-28-11t-12-27q0-15 8.5-26.5t22.5-14.5l486-106q-8-14-8-25t5.5-17.5 16-11.5 20-7 23-4.5 18.5-4.5q4-1 15.5-7.5t17.5-6.5q15 0 28 16t20 33q163-37 172-37 17 0 29.5 11t12.5 28q0 15-8.5 26t-23.5 14l-182 40-1 16q-1 26 81.5 117.5t104.5 91.5q47 0 119-80t72-129q0-36-23.5-53t-51-18.5-51-11.5-23.5-34q0-16 10-34l-68-19q43-44 43-117 0-26-5-58 82-16 144-16 44 0 71.5 1.5t48.5 8.5 31 13.5 20.5 24.5 15.5 33.5 17 47.5 24 60l50-25q-3 40-23 60t-42.5 21-40 6.5-16.5 20.5zm60-235q-5-5-13.5-15.5t-12-14.5-10.5-11.5-10-10.5l-8-8-8.5-7.5-8-5-8.5-4.5q-7-3-14.5-5t-20.5-2.5-22-.5h-70q-126 0-217 43 16-30 36-46.5t54-29.5 65.5-36 46-36.5 50-55 43.5-50.5q12 9 28 31.5t32 36.5 38 13l12-1v76l22 1q247-95 371-190 28-21 50-39t42.5-37.5 33-31 29.5-34 24-31 24.5-37 23-38 27-47.5 29.5-53l7-9q-2 53-43 139-79 165-205 264t-306 142q-14 3-42 7.5t-50 9.5-39 14q3 19 24.5 46t21.5 34q0 11-26 30zm-221 921q39-26 131.5-47.5t146.5-21.5q9 0 22.5 15.5t28 42.5 26 50 24 51 14.5 33q-121 45-244 45-61 0-125-11zm-239-647l48-12 109 177-73 48zm501 517q3 15 3 16 0 7-17.5 14.5t-46 13-54 9.5-53.5 7.5-32 4.5l-7-43q21-2 60.5-8.5t72-10 60.5-3.5h14zm-457-628l-96 20-6-17q10-1 32.5-7t34.5-6q19 0 35 10zm195 634h31l10 83-41 12v-95zm889-1490v-1 1zm0 0l-1 5-2 2 1-3zm0 0l1-1z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);