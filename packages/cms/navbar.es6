import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import NavbarOld from 'olymp-fela/navbar';
import PrefetchLink from './prefetch-link';

const toggleComponent = ({ toggled, onToggle, ...props }) => (
  <Link updateQuery={{ toggled: toggled ? undefined : null }} {...props} />
);
const Navbar = connect(({ location }) => ({
  toggled: location.query.toggled !== undefined,
  renderItemLink: PrefetchLink,
  toggleComponent,
}))(NavbarOld);

Navbar.Nav = NavbarOld.Nav;
Navbar.Item = NavbarOld.Item;
Navbar.Toggler = NavbarOld.Toggler;

export default Navbar;
