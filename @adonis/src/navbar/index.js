import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navbar.less';

const x = ({ children, ...rest }) => (
  <Navbar {...rest}>
    {children}
  </Navbar>
);
x.Form = ({ children, role }) => (
  <form className="form-inline navbar-form pull-right m-r-1" role={role}>
    {children}
  </form>
);
x.Brand = NavbarBrand;
x.Nav = Nav;
x.Item = NavItem;
x.Link = NavLink;

export default x;
