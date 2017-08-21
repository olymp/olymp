import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M489.332 299.468l-42.159-35.682c-4.812-4.072-4.822-11.492-.001-15.572l42.161-35.682c22.676-19.192 10.625-56.315-19.014-58.516l-55.081-4.086c-6.287-.467-10.655-6.464-9.153-12.598l13.136-53.649c7.053-28.808-24.452-51.837-49.776-36.164L322.48 76.59c-5.357 3.318-12.419 1.032-14.809-4.812l-20.908-51.151c-11.245-27.503-50.28-27.503-61.525-.001l-20.909 51.153c-2.383 5.829-9.436 8.137-14.809 4.811l-46.964-29.07c-25.263-15.633-56.844 7.297-49.776 36.164l13.136 53.649c1.499 6.123-2.856 12.13-9.153 12.598l-55.082 4.086c-29.627 2.2-41.698 39.317-19.012 58.516l42.159 35.682c4.812 4.071 4.822 11.492.001 15.572l-42.161 35.682c-22.676 19.192-10.625 56.315 19.014 58.516l55.081 4.086c6.287.467 10.655 6.464 9.153 12.598L92.78 428.318c-7.053 28.808 24.452 51.837 49.776 36.164l46.965-29.071c5.358-3.316 12.419-1.033 14.809 4.812l20.908 51.151c11.245 27.503 50.28 27.503 61.525.001l20.909-51.153c2.384-5.832 9.437-8.135 14.809-4.811l46.964 29.07c25.264 15.633 56.844-7.298 49.776-36.164l-13.136-53.649c-1.499-6.123 2.856-12.13 9.153-12.598l55.082-4.086c29.627-2.201 41.698-39.317 19.012-58.516zm-21.084 30.592l-55.082 4.086c-23.569 1.749-39.889 24.261-34.278 47.18l13.136 53.649c1.121 4.578-3.84 8.173-7.843 5.697l-46.963-29.069c-20.096-12.439-46.531-3.822-55.463 18.02l-20.908 51.124c-1.781 4.354-7.91 4.361-9.693-.001l-20.908-51.122c-8.914-21.799-35.33-30.483-55.462-18.021l-46.964 29.07c-4 2.476-8.964-1.121-7.843-5.697l13.136-53.649c5.62-22.956-10.749-45.434-34.278-47.18l-55.082-4.086c-4.691-.347-6.593-6.174-2.996-9.219l42.16-35.682c18.042-15.27 18.011-43.074 0-58.318L40.758 191.16c-3.592-3.039-1.705-8.871 2.995-9.219l55.082-4.086c23.569-1.749 39.889-24.261 34.278-47.18l-13.136-53.649c-1.119-4.569 3.836-8.177 7.843-5.697l46.963 29.069c20.096 12.439 46.531 3.822 55.463-18.02l20.908-51.124c1.781-4.353 7.909-4.361 9.693 0l20.908 51.123c8.945 21.875 35.398 30.439 55.462 18.021l46.964-29.07c3.998-2.478 8.964 1.121 7.843 5.697l-13.136 53.649c-5.62 22.956 10.749 45.434 34.278 47.18l55.082 4.086c4.691.347 6.593 6.174 2.996 9.219l-42.16 35.682c-18.042 15.27-18.011 43.074 0 58.318l42.159 35.682c3.592 3.039 1.705 8.871-2.995 9.219zM256 128c-70.579 0-128 57.421-128 128s57.421 128 128 128 128-57.421 128-128-57.421-128-128-128zm0 224c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSun';
export default styled(icon);