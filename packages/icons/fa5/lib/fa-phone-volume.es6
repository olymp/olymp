import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M189.135 344.94c-5.471-13.646-19.536-22.148-34.19-20.695l-43.183 4.308c-14.454-47.209-14.454-97.895.001-145.105l43.181 4.308c14.662 1.463 28.717-7.048 34.19-20.695l32.479-81.008c5.984-14.924.41-31.941-13.252-40.46l-64.96-40.508c-13.213-8.239-30.132-6.313-41.145 4.676-136.485 136.167-136.196 356.607 0 492.48 11.022 10.996 27.943 12.908 41.146 4.675l64.958-40.507c13.662-8.52 19.236-25.536 13.252-40.46l-32.477-81.009zm2.227 94.338l-64.958 40.506a1.186 1.186 0 0 1-1.473-.167C.981 355.954 1.1 155.927 124.931 32.383a1.204 1.204 0 0 1 1.472-.168l64.958 40.507c.489.306.689.914.475 1.448l-32.479 81.006a1.2 1.2 0 0 1-1.224.742l-68.362-6.82c-28.623 79.031-27.539 137.77 0 213.803l68.363-6.82a1.189 1.189 0 0 1 1.223.74l32.479 81.008a1.185 1.185 0 0 1-.474 1.449zm68.887-346.387l-5.975 5.726c-3.911 3.748-4.793 9.622-2.261 14.41a32.063 32.063 0 0 1 0 29.945c-2.533 4.788-1.65 10.662 2.261 14.41l5.975 5.726c5.611 5.377 14.768 4.111 18.718-2.581 11.832-20.047 11.832-45.008 0-65.055-3.95-6.692-13.108-7.958-18.718-2.581zm93.112-89.538l-5.798 5.557c-4.56 4.371-4.977 11.529-.93 16.379 49.687 59.538 49.646 145.933 0 205.422-4.047 4.85-3.631 12.008.93 16.379l5.798 5.557c5.022 4.813 13.078 4.394 17.552-.933 60.14-71.604 60.092-175.882 0-247.428-4.474-5.327-12.53-5.746-17.552-.933zm-46.2 44.57l-5.818 5.579c-4.4 4.219-4.998 11.095-1.285 15.931 26.536 34.564 26.534 82.572 0 117.134-3.713 4.836-3.115 11.711 1.285 15.931l5.818 5.579c5.159 4.947 13.466 4.337 17.856-1.304 36.05-46.322 36.108-111.149 0-157.546-4.39-5.641-12.697-6.251-17.856-1.304z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPhoneVolume';
export default styled(icon);