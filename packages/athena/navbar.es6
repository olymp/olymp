import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { prefetchPage } from 'olymp-pages/gql';
import { withApollo } from 'react-apollo';
import NavbarOld from 'olymp-fela/navbar';

const toggleComponent = ({ toggled, onToggle, ...props }) => (
  <Link updateQuery={{ toggled: props.toggled ? undefined : null }} {...props} />
);
const Navbar = withApollo(
  connect(({ location }, { client }) => ({
    toggled: location.query.toggled !== undefined,
    onItemMouseEnter: id => prefetchPage(client, id),
    toggleComponent,
  }))(NavbarOld),
);

Navbar.Nav = NavbarOld.Nav;
Navbar.Item = NavbarOld.Item;
Navbar.Toggler = NavbarOld.Toggler;

export default Navbar;
