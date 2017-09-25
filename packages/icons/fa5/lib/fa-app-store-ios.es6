import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.6 80.3C129 80.3 52.5 157 52.5 251.5c0 94.6 76.5 171.2 171.1 171.2S394.8 346 394.8 251.5c0-94.5-76.7-171.2-171.2-171.2zm-30 91.8c4.4-4.9 9.1-3.6 14.9-.4 7.5 4.2 9.9 7.3 9.2 11.8-.4 2.8-5.9 12.3-5.9 11.7-2.1 3.6-4 6.4-4.2 6.4-.5 0-22.6-13.5-22.6-14.4.1-1 6.9-13.1 8.6-15.1zm-94.1 91.5c-.6-21.8-.5-21.3-.3-26.4 12.1-.1 51-.4 51 .2 0 .6-12.2 21.4-14.9 26.2H99.5zm23.2 67.7c-7.4 6.7-13.7 12.2-13.8 12.2-.8 0-.8-.9.1-3.9 11.2-43 11.3-42.9 12-42.7 1 .2 22.7 14.9 22.7 15.3-.1.5-20.6 18.7-21 19.1zm1.2-40.3c-.2-.2.2-1.2.9-2.3.1-.1 57.9-96.7 58.1-96.8.6-.1 23.2 13.7 23.2 14.2l-58 100.3c-.4.2-23.2-14.4-24.2-15.4zm54.4-27.5c-.3-.4 13.9-25.9 14.2-26.3h60.8c.3.5 14.3 25.6 14.2 26.1-.3.4-89 .6-89.2.2zm95.9-1.1c-1-.6-16.6-27.2-47.1-79.8-19.4-33.4-18.8-32.5-19.6-34.4-1.5-3.6-.4-8.1 2.6-10.4 1.8-1.4 8.8-5.5 10.7-6.2 2.1-.8 5.3-.7 7.2.4 3.8 1.9 2.6 1.1 45.3 74.9 18.6 32.2 24.1 41.9 24.1 42.6 0 .7.2.6-10.2 6.4-6.3 3.3-12.3 7-13 6.5zm16 28.8c-1.3-1.4-12.9-21.9-12.8-22.6.2-.8 22.3-13.7 23.2-13.5.8.2 7.5 12.1 11.5 19.1 2.2 3.7 2.2 3.8 1.4 4.6-.7.6-11.4 6.8-11.4 6.8-5.9 3.3-10.8 6.1-10.9 6.2-.2 0-.6-.2-1-.6zm36.8 52.3c-.8 0-1.4-.9-2-3.1-4.3-16.7-18.9-14-27.5-31.1-3.2-6.3-3.4-11.2-.6-14.3.9-1 7.3-4.9 14-8.6 4.3-2.4 8-1.3 12.5 3.5 6 6.5 9.1 14.4 10.2 25.8 1.6 17.8-5.7 27.8-6.6 27.8zm19.2-79.7c-.5.9-31 .8-34.3.5-.6-1.1-15.1-26.8-15.3-27.6-.2-.7 7.8-.6 49.7-.4.1 1 .3 26.8-.1 27.5zm-1-231.8H102.8C45.9 32 0 77.9 0 134.8v242.4C0 434.1 45.9 480 102.8 480h242.4c57 0 102.8-45.9 102.8-102.8V134.8C448 77.9 402.1 32 345.2 32zM223.6 444c-106.3 0-192.5-86.2-192.5-192.5S117.3 59 223.6 59s192.5 86.2 192.5 192.5S329.9 444 223.6 444z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAppStoreIos';
export default styled(icon);