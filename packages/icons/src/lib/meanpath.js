import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M1439 842v114q0 24-13.5 38t-37.5 14h-202q-24 0-38-14t-14-38v-114q0-24 14-38t38-14h202q24 0 37.5 14t13.5 38zm-490 230v-250q0-53-32.5-85.5t-85.5-32.5h-133q-68 0-96 52-28-52-96-52h-130q-53 0-85.5 32.5t-32.5 85.5v250q0 22 21 22h55q22 0 22-22v-230q0-24 13.5-38t38.5-14h94q24 0 38 14t14 38v230q0 22 21 22h54q22 0 22-22v-230q0-24 14-38t38-14h97q24 0 37.5 14t13.5 38v230q0 22 22 22h55q21 0 21-22zm589-96v-154q0-53-33-85.5t-86-32.5h-264q-53 0-86 32.5t-33 85.5v410q0 21 22 21h55q21 0 21-21v-180q31 42 94 42h191q53 0 86-32.5t33-85.5zm126-616v1072q0 96-68 164t-164 68h-1072q-96 0-164-68t-68-164v-1072q0-96 68-164t164-68h1072q96 0 164 68t68 164z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
