import React from 'react';
import { createComponent } from 'olymp-fela';
import Gravatar from 'react-gravatar';

const getInitials = name => {
  if (name) {
    const array = name.split(' ');

    switch (array.length) {
      case 1:
        return array[0].charAt(0).toUpperCase();
      default:
        return (
          array[0].charAt(0).toUpperCase() +
          array[array.length - 1].charAt(0).toUpperCase()
        );
    }
  }
  return false;
};

export default createComponent(
  ({ theme, name }) => ({
    position: 'absolute',
    centerY: true,
    left: 0,
    marginX: theme.space3,
    borderRadius: '50%',
    background: `url(https://invatar0.appspot.com/svg/${getInitials(
      name
    )}.jpg?s=26&bg=${encodeURIComponent(
      theme.color
    )}&color=${encodeURIComponent(
      theme.light
    )}) center center no-repeat, ${theme.color}`,
  }),
  p => (
    <i className="anticon">
      <Gravatar {...p} size={30} />
    </i>
  ),
  p => Object.keys(p)
);
