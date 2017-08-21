import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M612.36 147.3L350.13 68.245a109.032 109.032 0 0 0-60.26.001L27.654 147.298c-36.977 10.833-36.767 62.633 0 73.404l27.795 8.38c-3.379 10.658-4.673 21.949-5.155 34.504C41.765 268.385 36 277.517 36 288c0 10.386 5.659 19.445 14.058 24.278L40.025 439.37C39.658 444.018 43.333 448 48 448h32c4.663 0 8.342-3.979 7.975-8.63L77.942 312.278C86.341 307.445 92 298.386 92 288c0-10.24-5.499-19.191-13.703-24.074.428-10.309 1.485-18.935 4.045-26.737l58.777 17.72C135.113 294.952 128 342.606 128 343.68 128 402.549 260.642 416 320 416c59.369 0 192-13.454 192-72.32 0-1.071-7.111-48.725-13.117-88.77L612.36 220.7c36.886-10.812 36.82-62.607 0-73.4zM479.915 344.31C472 368 400 384 320 384s-152-16-159.916-39.69l12.009-80.062 117.776 35.507a109.041 109.041 0 0 0 60.26.001l117.776-35.506c5.1 33.986 10.744 71.616 12.01 80.06zm123.317-154.313l-262.035 79.037a77.076 77.076 0 0 1-42.398-.001l-261.876-78.99-.156-.046c-6.345-1.845-6.352-10.147 0-11.994l262.032-79.036a77.094 77.094 0 0 1 42.398-.001l261.88 78.991.155.046c6.345 1.845 6.353 10.147 0 11.994z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGraduationCap';
export default styled(icon);