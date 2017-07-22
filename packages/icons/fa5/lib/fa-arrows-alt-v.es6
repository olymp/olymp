import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M159.968 384H113V128h46.962c28.425 0 42.767-34.488 22.627-54.627l-63.962-64c-12.496-12.496-32.757-12.498-45.255 0l-63.968 64C-10.695 93.472 3.55 128 32.032 128H79v256H32.038c-28.425 0-42.767 34.487-22.627 54.627l63.962 64c12.496 12.496 32.757 12.498 45.255 0l63.968-64C202.695 418.528 188.45 384 159.968 384zM32.032 100c-3.548 0-5.361-4.296-2.823-6.833l63.963-63.995a3.995 3.995 0 0 1 5.651-.006l63.968 64.006c2.532 2.533.724 6.829-2.828 6.829H32.032zm130.76 318.833l-63.963 63.995a3.995 3.995 0 0 1-5.651.006L29.21 418.829c-2.532-2.532-.725-6.829 2.828-6.829h127.93c3.548 0 5.361 4.296 2.824 6.833z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaArrowsAltV';
export default styled(icon);