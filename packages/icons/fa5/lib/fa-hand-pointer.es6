import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M360.543 188.156c-17.46-28.491-54.291-37.063-82.138-19.693-15.965-20.831-42.672-28.278-66.119-20.385V60.25c0-33.222-26.788-60.25-59.714-60.25S92.857 27.028 92.857 60.25v181.902c-20.338-13.673-47.578-13.89-68.389 1.472-26.556 19.605-32.368 57.08-13.132 83.926l114.271 159.5C136.803 502.673 154.893 512 174 512h185.714c27.714 0 51.832-19.294 58.145-46.528l28.571-123.25a60.769 60.769 0 0 0 1.57-13.723v-87c0-45.365-48.011-74.312-87.457-53.343zM82.097 275.588l28.258 39.439a7.999 7.999 0 1 0 14.503-4.659V60.25c0-37.35 55.428-37.41 55.428 0V241.5a8 8 0 0 0 8 8h7.144a8 8 0 0 0 8-8v-36.25c0-37.35 55.429-37.41 55.429 0v36.25a8 8 0 0 0 8 8H274a8 8 0 0 0 8-8v-21.75c0-37.351 55.429-37.408 55.429 0v21.75a8 8 0 0 0 8 8h7.143a8 8 0 0 0 8-8c0-37.35 55.429-37.41 55.429 0v87c0 2.186-.25 4.371-.742 6.496l-28.573 123.251C383.717 471.055 372.626 480 359.715 480H174c-8.813 0-17.181-4.332-22.381-11.588l-114.283-159.5c-22.213-31.004 23.801-62.575 44.761-33.324zM180.285 401v-87a8 8 0 0 1 8-8h7.144a8 8 0 0 1 8 8v87a8 8 0 0 1-8 8h-7.144a8 8 0 0 1-8-8zm78.572 0v-87a8 8 0 0 1 8-8H274a8 8 0 0 1 8 8v87a8 8 0 0 1-8 8h-7.143a8 8 0 0 1-8-8zm78.572 0v-87a8 8 0 0 1 8-8h7.143a8 8 0 0 1 8 8v87a8 8 0 0 1-8 8h-7.143a8 8 0 0 1-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHandPointer';
export default styled(icon);